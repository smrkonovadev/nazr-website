"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function WhyNazrExistsIntro() {
  const [containerHeight, setContainerHeight] = useState<string>("auto");

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
      {/* Text area */}
      <div className="w-full flex flex-col items-center text-center pt-[20px] px-4 relative z-10 flex-shrink-0">
        <h1
          className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] uppercase text-[clamp(48px,8vw,96px)] leading-[88%] tracking-[-0.02em]"
        >
          WHY NAZR EXISTS
        </h1>

        <p
          className="mt-[8px] text-[#161616] uppercase font-bold leading-[128%] text-[clamp(11px,1.2vw,17px)] max-w-[460px]"
          style={{
            fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
            letterSpacing: "-0.01em"
          }}
        >
          WE BELIEVE PREPAREDNESS SHOULD BE PART OF EVERYDAY LIFE, NOT AN AFTERTHOUGHT. THAT&apos;S WHY WE&apos;RE BUILDING AN INTEGRATED ECOSYSTEM DESIGNED AROUND THE WAY WOMEN ALREADY MOVE THROUGH THE WORLD.
        </p>
      </div>

      {/* Hands + Eye — takes ALL remaining space */}
      <div className="relative w-full flex-1 flex items-center justify-center min-h-0 overflow-hidden">

        {/* Left Hand */}
        <div className="absolute left-0 top-0 bottom-0 w-[54%] pointer-events-none z-0">
          <Image
            src="/images/lefthand.png"
            alt="Left Hand"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Right Hand */}
        <div className="absolute right-0 top-0 bottom-0 w-[54%] pointer-events-none z-0">
          <Image
            src="/images/righthand.png"
            alt="Right Hand"
            fill
            className="object-contain object-right"
            priority
          />
        </div>

        {/* Eye globe — use CSS to size relative to remaining container height */}
        <div
          className="relative z-20 animate-[spin_20s_linear_infinite]"
          style={{ height: "85%", aspectRatio: "1/1", maxWidth: "480px" }}
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
