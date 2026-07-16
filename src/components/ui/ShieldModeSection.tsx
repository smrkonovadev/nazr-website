"use client";

export function ShieldModeSection() {
  return (
    <section className="w-full bg-[#161616] pt-12 md:pt-32 pb-32 flex flex-col items-center justify-center px-4 relative z-50">
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center gap-[14px]">
        <h2 className="m-0 text-[#F1E4DE] font-[family-name:var(--font-bebas)] max-[380px]:text-[72px] text-[90px] md:text-[150px] leading-[90%] tracking-[-0.03em] uppercase">
          SHIELD MODE
        </h2>

        <p className="m-0 text-[#F1E4DE] max-md:text-[#FFF9EB] font-sans font-normal text-[19px] max-md:text-[16px] leading-[140%] tracking-[-0.03em] text-center max-w-[1200px] max-[380px]:w-full max-md:max-w-[380px] mx-auto opacity-90 max-md:opacity-100" style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}>
          Some journeys don't need intervention. They just need someone paying attention. Shield Mode stays with you, quietly checking in along the way.<br></br>
          If you stop responding, it doesn't wait. It acts.
        </p>
      </div>
    </section>
  );
}
