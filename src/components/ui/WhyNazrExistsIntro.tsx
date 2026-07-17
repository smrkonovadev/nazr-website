"use client";

export function WhyNazrExistsIntro() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 md:px-16 lg:px-20 max-md:pt-[20px] md:pt-[40px] pb-10 z-10 relative text-center">
      <h1
        className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] uppercase max-md:text-[45px] md:text-[120px] leading-[90%] tracking-[-0.03em] whitespace-nowrap"
        style={{
          fontWeight: 400,
          textAlign: "center",
          // @ts-ignore
          leadingTrim: "cap-height"
        }}
      >
        WHY NAZR EXISTS
      </h1>

      <div className="mt-[20px] md:mt-[28px] flex flex-col items-center max-w-[850px] w-full">
        <p
          className="text-[#161616] uppercase font-semibold leading-[110%] max-md:text-[16px] md:text-[32px] m-0"
          style={{
            fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            textAlign: "center",
            textTransform: "uppercase",
            // @ts-ignore
            leadingTrim: "cap-height"
          }}
        >
          We believe preparedness should be part of everyday life, not an afterthought. That's why we're building an integrated ecosystem designed around the way women already move through the world.
        </p>
      </div>
    </div>
  );
}
