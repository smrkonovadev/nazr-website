"use client";

import Image from "next/image";

export function WhyNazrExistsIntro() {
  return (
    // Single combined section: title + body text + hands + eye — all in one viewport
    <div className="w-full relative flex flex-col items-center overflow-hidden" style={{ minHeight: "90vh" }}>
      
      {/* Text area — centered at top */}
      <div className="w-full flex flex-col items-center text-center pt-[60px] max-md:pt-[40px] px-4 relative z-10">
        <h1
          className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] uppercase max-md:text-[56px] md:text-[96px] lg:text-[110px] leading-[88%] tracking-[-0.02em]"
        >
          WHY NAZR EXISTS
        </h1>

        <p
          className="mt-[16px] md:mt-[20px] text-[#161616] uppercase font-bold leading-[130%] max-md:text-[13px] md:text-[17px] lg:text-[19px] max-w-[560px]"
          style={{
            fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
            letterSpacing: "-0.01em"
          }}
        >
          WE BELIEVE PREPAREDNESS SHOULD BE PART OF EVERYDAY LIFE, NOT AN AFTERTHOUGHT. THAT&apos;S WHY WE&apos;RE BUILDING AN INTEGRATED ECOSYSTEM DESIGNED AROUND THE WAY WOMEN ALREADY MOVE THROUGH THE WORLD.
        </p>
      </div>

      {/* Hands + Eye — fills the lower section, positioned absolutely to span full width */}
      <div className="relative w-full flex items-center justify-center mt-[24px] md:mt-[32px]" style={{ minHeight: "420px" }}>
        
        {/* Left Hand */}
        <div className="absolute left-0 top-0 bottom-0 w-[50%] pointer-events-none z-0">
          <Image
            src="/images/lefthand.png"
            alt="Left Hand"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Right Hand */}
        <div className="absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none z-0">
          <Image
            src="/images/righthand.png"
            alt="Right Hand"
            fill
            className="object-contain object-right"
            priority
          />
        </div>

        {/* Center rotating eye globe */}
        <div className="relative z-20 w-[220px] md:w-[340px] lg:w-[420px] aspect-square animate-[spin_20s_linear_infinite]">
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
