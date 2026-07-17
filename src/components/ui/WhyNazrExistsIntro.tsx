"use client";

import Image from "next/image";

export function WhyNazrExistsIntro() {
  return (
    <div
      className="w-full relative flex flex-col items-center overflow-hidden min-h-[640px] md:min-h-[820px]"
    >
      {/* Text area — matching Figma alignment and typography */}
      <div className="w-full flex flex-col items-center text-center pt-[60px] max-md:pt-[40px] px-4 relative z-10 flex-shrink-0">
        <h1
          className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] uppercase text-[48px] md:text-[96px] lg:text-[110px] leading-[88%] tracking-[-0.02em]"
        >
          WHY NAZR EXISTS
        </h1>

        <p
          className="mt-[16px] md:mt-[20px] text-[#161616] uppercase font-bold leading-[130%] text-[13px] md:text-[17px] lg:text-[19px] max-w-[560px]"
          style={{
            fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
            letterSpacing: "-0.01em"
          }}
        >
          WE BELIEVE PREPAREDNESS SHOULD BE PART OF EVERYDAY LIFE, NOT AN AFTERTHOUGHT. THAT&apos;S WHY WE&apos;RE BUILDING AN INTEGRATED ECOSYSTEM DESIGNED AROUND THE WAY WOMEN ALREADY MOVE THROUGH THE WORLD.
        </p>
      </div>

      {/* Hands + Eye section — large, matches Figma dimensions */}
      <div className="relative w-full flex-1 flex items-center justify-center min-h-[400px] md:min-h-[520px] overflow-hidden mt-6">

        {/* Left Hand — absolute, aligned close to the center rotating eye */}
        <div className="absolute left-0 right-[calc(50%+120px)] top-0 bottom-0 pointer-events-none z-0">
          <Image
            src="/images/lefthand.png"
            alt="Left Hand"
            fill
            className="object-contain object-right"
            priority
          />
        </div>

        {/* Right Hand — absolute, aligned close to the center rotating eye */}
        <div className="absolute right-0 left-[calc(50%+90px)] top-0 bottom-0 pointer-events-none z-0">
          <Image
            src="/images/righthand.png"
            alt="Right Hand"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Center rotating eye globe — Figma: 564px wide */}
        <div
          className="absolute z-20 animate-[spin_20s_linear_infinite] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[480px] lg:w-[564px] aspect-square"
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
