"use client";

export function ShieldModeSection() {
  return (
    <section className="w-full bg-[#161616] pt-[40px] md:pt-[36px] pb-0 flex flex-col items-center justify-center px-4 relative z-50">
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center gap-[12px] md:gap-[16px]">
        <h2
          className="m-0 text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[40px] md:text-[120px] leading-[90%] md:leading-[70%] tracking-[-0.03em] uppercase text-center"
        >
          SHIELD MODE
        </h2>

        <p
          className="m-0 text-[#F1E4DE] font-normal text-[16px] md:text-[20px] leading-[140%] tracking-[-0.03em] text-center max-w-[760px] mx-auto mb-[15px] md:mb-0"
          style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
        >
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>
    </section>
  );
}
