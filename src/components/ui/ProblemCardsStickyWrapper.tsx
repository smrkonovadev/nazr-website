"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import { ProblemStatement } from "./ProblemStatement";
import { InteractiveCards } from "./InteractiveCards";

export function ProblemCardsStickyWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Track scroll progress of the outer 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const isMobileView = windowWidth < 768;
      setIsMobile(isMobileView);

      if (isMobileView) {
        setScale(1);
        return;
      }

      // Calculate widthScale matching DesktopScaler logic
      const widthScale = windowWidth / 1280;
      const effectiveViewportHeight = windowHeight / widthScale;
      // We scale down only if effective height is less than 832px
      const newScale = Math.min(1, effectiveViewportHeight / 832);
      setScale(newScale);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const widthVal = isMobile ? "390px" : `${1280 / scale}px`;
  const transformVal = isMobile ? "none" : `scale(${scale})`;

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-[#161616]">
      {/* Sticky container pins to the top of the viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-start md:justify-center items-center pt-6 md:pt-0">
        {/* The combined 832px tall block */}
        <div
          className="flex flex-col items-center origin-center"
          style={{
            width: widthVal,
            transform: transformVal
          }}
        >
          <ProblemStatement />
          <InteractiveCards scrollProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
}
