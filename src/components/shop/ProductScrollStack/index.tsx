"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { productsData } from "./data";
import { ProductSection } from "./ProductSection";
import styles from "./ProductScrollStack.module.css";

interface ProductScrollStackProps {
  scrollPerPanel?: number;
}

export function ProductScrollStack({ scrollPerPanel = 1.2 }: ProductScrollStackProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track || productsData.length < 2) return;

    const masks = Array.from(
      viewport.querySelectorAll<HTMLElement>("[data-reveal-mask]")
    );

    // Peel every panel except the floor (last / lowest z-index)
    const peelable = masks.slice(0, -1);
    const triggers: ScrollTrigger[] = [];

    const segment = () => window.innerHeight * scrollPerPanel;

    peelable.forEach((mask, index) => {
      const trigger = ScrollTrigger.create({
        trigger: track,
        start: () => `top+=${index * segment()} top`,
        end: () => `top+=${(index + 1) * segment()} top`,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Direct DOM write — no React re-render on the hot path
          mask.style.setProperty(
            "--clip-bottom",
            `${self.progress * 100}%`
          );
          mask.style.setProperty(
            "--divider-opacity",
            self.progress >= 0.999 ? "0" : "1"
          );
        },
      });

      triggers.push(trigger);
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      triggers.forEach((t) => t.kill());
    };
  }, [scrollPerPanel]);

  const trackHeight = `${productsData.length * scrollPerPanel * 100}vh`;

  return (
    <div className={styles.root}>
      {/* Sticky viewport — pins inside the scroll flow */}
      <div ref={viewportRef} className={styles.viewport} aria-label="Product reveal">
        {productsData.map((product, index) => (
          <ProductSection
            key={product.id}
            product={product}
            zIndex={productsData.length - index}
            isLast={index === productsData.length - 1}
          />
        ))}
      </div>

      {/* Scroll distance spacer — generates progress for ScrollTrigger */}
      <div
        ref={trackRef}
        className={styles.scrollTrack}
        style={{ height: trackHeight }}
        aria-hidden="true"
      />
    </div>
  );
}
