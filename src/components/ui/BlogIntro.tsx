"use client";

export function BlogIntro() {
  return (
    <div className="w-full flex flex-col max-md:items-center md:items-start max-md:text-center md:text-left justify-center px-6 md:px-16 max-md:pt-[40px] md:pt-[40px] max-md:pb-[24px] md:pb-8 z-10 relative">
      <h1
        className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] uppercase max-[380px]:text-[60px] max-md:text-[60px] md:text-[220px] max-md:leading-[90%] md:leading-[90%] tracking-[-0.04em] whitespace-nowrap"
      >
        FIELD NOTES      </h1>

      <p
        className="max-md:mt-4 md:mt-2 text-[#161616] max-w-[750px] max-md:text-[16px] md:text-[20px] leading-[140%] tracking-[-0.02em] font-normal"
        style={{
          fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
        }}
      >
        NAZR wasn't built on assumptions. It was built on observations. This page explores the psychology, research and everyday behaviours that shaped our philosophy, informed our products, and continue to reinforce our belief that preparedness should feel instinctive.      </p>
    </div>
  );
}
