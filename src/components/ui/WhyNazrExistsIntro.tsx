"use client";

export function WhyNazrExistsIntro() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 md:px-16 lg:px-20 max-md:pt-[30px] md:pt-[120px] pb-16 z-10 relative text-center">
      <h1
        className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] uppercase max-md:text-[45px] md:text-[220px] max-md:leading-[90%] md:leading-[90%] tracking-[-0.03em] whitespace-nowrap"
      >
        WHY NAZR EXISTS
      </h1>

      <div className="mt-[7px] md:mt-[23px] flex flex-col items-center max-md:gap-3 md:gap-5 max-w-[600px]">
        <h4
          className="text-[#161616] font-bold uppercase max-md:text-[16px] md:text-[24px]"
          style={{
            fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
            letterSpacing: "0.02em"
          }}
        >
          THE PROBLEM WE SAW
        </h4>

        <p
          className="text-[#161616] uppercase font-bold leading-[130%] max-md:text-[18px] md:text-[26px]"
          style={{
            fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
            letterSpacing: "-0.02em"
          }}
        >
          Women had already built their own safety systems through habits, instincts and workarounds.  What was missing was a thoughtfully designed ecosystem that could support, strengthen and simplify it every day.        </p>
      </div>
    </div>
  );
}
