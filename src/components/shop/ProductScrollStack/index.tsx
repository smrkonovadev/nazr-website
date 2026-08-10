"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { productsData } from "./data";
import { ProductSection } from "./ProductSection";
import styles from "./ProductScrollStack.module.css";

interface ProductScrollStackProps {
  scrollPerPanel?: number;
}

export function ProductScrollStack({ scrollPerPanel = 0.75 }: ProductScrollStackProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const [trackHeightPx, setTrackHeightPx] = useState<number>(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const viewport = viewportRef.current;
    const track = trackRef.current;
    const root = rootRef.current;
    if (!viewport || !track || !root || productsData.length < 2) return;

    const masks = Array.from(
      viewport.querySelectorAll<HTMLElement>("[data-reveal-mask]")
    );

    // Peel every panel except the floor (last / lowest z-index)
    const peelable = masks.slice(0, -1);
    const triggers: ScrollTrigger[] = [];

    // Lock the viewport height at mount time so mobile address bar
    // toggling doesn't recalculate the track mid-scroll.
    let stableVh = window.innerHeight;
    let lastWidth = window.innerWidth;

    const computeDimensions = () => {
      const vh = stableVh;
      const panelSegment = vh * scrollPerPanel;
      // Initial hold: let user view 1st product fully before any peel starts
      const initialHold = vh * 1.0;
      // Hold distance after revealing last panel so user can view it before sticky unpins
      const holdDistance = vh * 0.75;
      // Total = initialHold + (peels * segment) + holdDistance + 100vh
      const totalTrackHeight = initialHold + peelable.length * panelSegment + holdDistance + vh;

      setTrackHeightPx(totalTrackHeight);

      return { panelSegment, initialHold, totalTrackHeight };
    };

    let { panelSegment, initialHold } = computeDimensions();

    peelable.forEach((mask, index) => {
      const nextMask = masks[index + 1];
      const trigger = ScrollTrigger.create({
        trigger: track,
        start: () => `top+=${initialHold + index * panelSegment} top`,
        end: () => `top+=${initialHold + (index + 1) * panelSegment} top`,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Direct DOM write — no React re-render on the hot path
          mask.style.setProperty(
            "--clip-bottom",
            `${self.progress * 100}%`
          );
          mask.style.setProperty(
            "--peel-progress",
            `${self.progress}`
          );
          mask.style.setProperty(
            "--divider-opacity",
            self.progress >= 0.999 ? "0" : "1"
          );

          if (nextMask) {
            nextMask.style.setProperty(
              "--header-opacity",
              self.progress >= 0.999 ? "1" : "0"
            );
          }
        },
      });

      triggers.push(trigger);
    });

    // Only recalculate on genuine width changes (orientation flip, window resize)
    // Ignore height-only changes caused by the mobile address bar toggling.
    const onResize = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth === lastWidth) return; // address bar toggle — skip
      lastWidth = currentWidth;
      stableVh = window.innerHeight; // width changed, so re-lock vh
      const dims = computeDimensions();
      panelSegment = dims.panelSegment;
      initialHold = dims.initialHold;
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);

    // Smoothly scroll to the matched product panel if hash exists
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const productId = hash.substring(1);
      const productIndex = productsData.findIndex((p) => p.id === productId);
      if (productIndex === -1) return;

      setTimeout(() => {
        const rootRect = root.getBoundingClientRect();
        const rootTop = rootRect.top + window.pageYOffset;
        const vh = stableVh;
        const seg = vh * scrollPerPanel;
        const hold = vh * 1.0;
        
        const targetY = rootTop + hold + productIndex * seg;
        
        window.scrollTo({
          top: targetY + 2,
          behavior: "smooth",
        });
      }, 300);
    };

    handleHashScroll();

    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("hashchange", handleHashScroll);
      triggers.forEach((t) => t.kill());
    };
  }, [scrollPerPanel]);

  return (
    <div 
      ref={rootRef} 
      className={styles.root}
      style={{ height: trackHeightPx ? `${trackHeightPx}px` : undefined }}
    >
      {/* Sticky viewport — pins inside the scroll flow */}
      <div ref={viewportRef} className={styles.viewport} aria-label="Product reveal">
        {productsData.map((product, index) => (
          <ProductSection
            key={product.id}
            product={product}
            nextProduct={productsData[index + 1]}
            zIndex={productsData.length - index}
            isLast={index === productsData.length - 1}
          />
        ))}
      </div>

      {/* Scroll distance spacer — generates progress for ScrollTrigger */}
      <div
        ref={trackRef}
        className={styles.scrollTrack}
        style={{ height: trackHeightPx ? `${trackHeightPx}px` : undefined }}
        aria-hidden="true"
      />
    </div>
  );
}
