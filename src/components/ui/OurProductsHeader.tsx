"use client";

export function OurProductsHeader() {
  return (
    <section className="w-full bg-[#161616] pt-8 md:pt-32 pb-8 md:pb-20 flex flex-col items-center justify-center px-4 relative z-50">
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center gap-0">

        <h2 className="m-0 text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal max-[380px]:text-[52px] text-[64px] md:text-[160px] leading-[90%] tracking-[-0.03em] max-[380px]:w-full max-md:w-[346px] mx-auto uppercase">
          OUR PRODUCTS
        </h2>

        <p className="m-0 text-[#F0E2DD] font-sans font-normal text-[19px] md:text-[20px] leading-[140%] tracking-[-0.03em] text-center max-w-[400px] max-[380px]:w-full max-md:w-[346px] mx-auto mt-4 md:mt-0" style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}>
          Everything in the Nazr ecosystem is built with the one idea that protection fits into your life, not the other way around. Thoughtfully designed. Quietly powerful. Always within reach.
        </p>

      </div>
    </section>
  );
}
