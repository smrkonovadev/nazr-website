"use client";

export function OurProductsHeader() {
  return (
    <section className="w-full bg-[#161616] pt-[40px] pb-[60px] flex flex-col items-center justify-center px-4 relative z-50">
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center gap-0">

        <h2 className="m-0 text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[48px] md:text-[120px] leading-[90%] tracking-[-0.03em] uppercase max-w-[810px] w-full">
          OUR PRODUCTS
        </h2>

        <p 
          className="m-0 text-[#F0E2DD] font-normal text-[16px] md:text-[20px] leading-[140%] tracking-[-0.03em] text-center max-w-[841px] w-full mt-4 md:mt-[32px]" 
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Everything in the Nazr ecosystem is built with the one idea that protection fits into your life, not the other way around. Thoughtfully designed. Quietly powerful. Always within reach.
        </p>

      </div>
    </section>
  );
}
