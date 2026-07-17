"use client";

import Image from "next/image";

export function WhyNazrExistsIntro() {
  return (
    // Single combined section: title + body text + hands + eye — all in one viewport, 100vh
    <div className="w-full relative flex flex-col items-center overflow-hidden" style={{ height: "calc(100vh - 80px)" }}>
      
      {/* Text area — centered at top, tight padding */}
      <div className="w-full flex flex-col items-center text-center pt-[20px] max-md:pt-[16px] px-4 relative z-10">
        <h1
          className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] uppercase max-md:text-[52px] md:text-[86px] lg:text-[96px] leading-[88%] tracking-[-0.02em]"
        >
          WHY NAZR EXISTS
        </h1>

        <p
          className="mt-[8px] md:mt-[10px] text-[#161616] uppercase font-bold leading-[130%] max-md:text-[12px] md:text-[15px] lg:text-[17px] max-w-[500px]"
          style={{
            fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
            letterSpacing: "-0.01em"
          }}
        >
          WE BELIEVE PREPAREDNESS SHOULD BE PART OF EVERYDAY LIFE, NOT AN AFTERTHOUGHT. THAT&apos;S WHY WE&apos;RE BUILDING AN INTEGRATED ECOSYSTEM DESIGNED AROUND THE WAY WOMEN ALREADY MOVE THROUGH THE WORLD.
        </p>
      </div>

      {/* Hands + Eye — flex-1 so it fills remaining height with no gap */}
      <div className="relative w-full flex-1 flex items-center justify-center mt-0">
        
        {/* Left Hand — absolute, spans full height of this container */}
        <div className="absolute left-0 top-0 bottom-0 w-[52%] pointer-events-none z-0">
          <Image
            src="/images/lefthand.png"
            alt="Left Hand"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Right Hand — absolute, spans full height of this container */}
        <div className="absolute right-0 top-0 bottom-0 w-[52%] pointer-events-none z-0">
          <Image
            src="/images/righthand.png"
            alt="Right Hand"
            fill
            className="object-contain object-right"
            priority
          />
        </div>

        {/* Center rotating eye globe — sized to fill the remaining space */}
        <div className="relative z-20 w-[55vh] max-w-[520px] min-w-[200px] aspect-square animate-[spin_20s_linear_infinite]">
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
