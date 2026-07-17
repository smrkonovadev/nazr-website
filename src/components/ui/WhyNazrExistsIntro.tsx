"use client";

export function WhyNazrExistsIntro() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-[64px] max-md:px-6 pt-[80px] max-md:pt-[30px] pb-0 z-10 relative">
      {/* Bordered box matching Figma: 1152 Fill × 307 Hug, 64px padding each side */}
      <div className="w-full border border-[#161616]/20 flex flex-col items-center justify-center py-[40px] max-md:py-6 text-center">
        <h1
          className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] uppercase max-md:text-[52px] md:text-[130px] lg:text-[160px] max-md:leading-[90%] md:leading-[88%] tracking-[-0.02em]"
        >
          WHY NAZR EXISTS
        </h1>

        <p
          className="mt-[20px] md:mt-[24px] text-[#161616] uppercase font-bold leading-[130%] max-md:text-[14px] md:text-[20px] lg:text-[22px] max-w-[700px]"
          style={{
            fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
            letterSpacing: "-0.01em"
          }}
        >
          WE BELIEVE PREPAREDNESS SHOULD BE PART OF EVERYDAY LIFE, NOT AN AFTERTHOUGHT. THAT&apos;S WHY WE&apos;RE BUILDING AN INTEGRATED ECOSYSTEM DESIGNED AROUND THE WAY WOMEN ALREADY MOVE THROUGH THE WORLD.
        </p>
      </div>
    </div>
  );
}
