"use client";

import Image from "next/image";

export function WhyNazrCreation() {
  return (
    <div
      className="w-full relative flex items-center justify-center mt-0 z-10 overflow-visible"
      style={{
        paddingLeft: "126px",
        paddingRight: "132px",
        minHeight: "500px",
      }}
    >
      {/* Left Hand Image — starts from left edge (no padding) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[48%] h-[110%] pointer-events-none z-0">
        <Image
          src="/images/lefthand.png"
          alt="Left Hand"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      {/* Right Hand Image — starts from right edge (no padding) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[48%] h-[110%] pointer-events-none z-0">
        <Image
          src="/images/righthand.png"
          alt="Right Hand"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      {/* Center rotating image — Figma: 564px wide */}
      <div className="relative z-20 w-[280px] md:w-[420px] lg:w-[564px] aspect-square animate-[spin_20s_linear_infinite]">
        <Image
          src="/images/new46.png"
          alt="Nazr Ecosystem"
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
}
