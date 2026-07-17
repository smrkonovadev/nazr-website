"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function WhyNazrExistsIntro() {
  const [containerHeight, setContainerHeight] = useState<string>("80vh");

  useEffect(() => {
    const updateHeight = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = width < 768;
      // Matching DesktopScaler scale calculation:
      const scale = isMobile ? (width / 390) : (width / 1280);
      const zoomedViewportHeight = height / scale;
      const headerOffset = isMobile ? 64 : 104;
      setContainerHeight(`${zoomedViewportHeight - headerOffset}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      className="w-full relative flex flex-col items-center overflow-hidden"
      style={{ height: containerHeight }}
    >
      {/* Text area — compact typography to maximize eye/hands vertical space */}
      <div className="w-full flex flex-col items-center text-center pt-[16px] px-4 relative z-10 flex-shrink-0">
        <h1
          className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] uppercase text-[clamp(40px,6vw,84px)] leading-[88%] tracking-[-0.02em]"
        >
          WHY NAZR EXISTS
        </h1>

        <p
          className="mt-[8px] text-[#161616] uppercase font-bold leading-[128%] text-[clamp(11px,1vw,15px)] max-w-[460px]"
          style={{
            fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
            letterSpacing: "-0.01em"
          }}
        >
          WE BELIEVE PREPAREDNESS SHOULD BE PART OF EVERYDAY LIFE, NOT AN AFTERTHOUGHT. THAT&apos;S WHY WE&apos;RE BUILDING AN INTEGRATED ECOSYSTEM DESIGNED AROUND THE WAY WOMEN ALREADY MOVE THROUGH THE WORLD.
        </p>
      </div>

      {/* Hands + Eye — flex-1 fills all remaining vertical space */}
      <div className="relative w-full flex-1 flex items-center justify-center min-h-0 overflow-hidden">

        {/* Left Hand — wrapper ends 80px before center, hand aligns right (close to center) */}
        <div className="absolute left-0 right-[calc(50%+80px)] top-0 bottom-0 pointer-events-none z-0">
          <Image
            src="/images/lefthand.png"
            alt="Left Hand"
            fill
            className="object-contain object-right"
            priority
          />
        </div>

        {/* Right Hand — wrapper starts 50px after center, hand aligns left (close to center) */}
        <div className="absolute right-0 left-[calc(50%+50px)] top-0 bottom-0 pointer-events-none z-0">
          <Image
            src="/images/righthand.png"
            alt="Right Hand"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Center rotating eye globe — sized to fill 88% of container height, max-width 564px */}
        <div
          className="absolute z-20 animate-[spin_20s_linear_infinite] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ height: "88%", aspectRatio: "1/1", maxWidth: "564px" }}
        >
          <Image
            src="/images/new46.png"
            alt="Nazr Ecosystem"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
