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

    // Disable ScrollTrigger's automatic refresh on mobile resize (address bar show/hide)
    ScrollTrigger.config({ ignoreMobileResize: true });

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

    // Measure true LVH (large viewport height, address bar collapsed)
    const measureLvh = () => {
      if (typeof document === "undefined" || typeof window === "undefined") return 800;
      const probe = document.createElement("div");
      probe.style.cssText = "position:fixed;top:0;left:0;height:100lvh;height:100vh;pointer-events:none;opacity:0;z-index:-1;";
      document.body.appendChild(probe);
      const h = probe.clientHeight || window.innerHeight;
      document.body.removeChild(probe);
      return h || window.innerHeight;
    };

    // Lock the viewport height at mount time based on large viewport height
    let stableVh = measureLvh();
    let lastWidth = window.innerWidth;

    const computeDimensions = () => {
      const vh = stableVh;
      const panelSegment = vh * scrollPerPanel;
      // Initial hold: let user view 1st product fully before any peel starts
      const initialHold = vh * 1.0;
      // Hold distance after revealing last panel so user can view it before sticky unpins
      const holdDistance = vh * 1.0;
      // Total = initialHold + (peels * segment) + holdDistance + 100vh
      const totalTrackHeight = initialHold + peelable.length * panelSegment + holdDistance + vh;

      root.style.height = `${totalTrackHeight}px`;
      track.style.height = `${totalTrackHeight}px`;
      setTrackHeightPx(totalTrackHeight);

      return { panelSegment, initialHold, totalTrackHeight };
    };

    let { panelSegment, initialHold } = computeDimensions();

    peelable.forEach((mask, index) => {
      const nextMask = masks[index + 1];
      const trigger = ScrollTrigger.create({
        trigger: root,
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
          mask.style.pointerEvents = self.progress >= 0.999 ? "none" : "auto";

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
    const onResize = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth === lastWidth) return; // address bar toggle — skip
      lastWidth = currentWidth;
      stableVh = measureLvh(); // width changed, so re-measure LVH
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
