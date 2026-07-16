"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { ProblemStatement } from "./ProblemStatement";
import { InteractiveCards } from "./InteractiveCards";

export function ProblemCardsStickyWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the outer 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-[#161616]">
      {/* Sticky container pins to the top of the viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
        {/* The combined 832px tall block */}
        <div className="w-full flex flex-col items-center">
          <ProblemStatement />
          <InteractiveCards scrollProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
}
