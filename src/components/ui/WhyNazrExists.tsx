export function WhyNazrExists() {
  return (
    <section className="w-full bg-transparent flex flex-col items-center justify-center pt-[30px] pb-1 md:pt-[50px] md:pb-[10px] px-4 relative z-20">
      <div className="relative z-10 flex flex-col items-center max-w-[800px] mx-auto">
        <h2
          className="font-[family-name:var(--font-bebas)] font-normal text-[#161616] text-center uppercase text-[46px] sm:text-[54px] md:text-[80px] leading-[90%] tracking-[-0.03em]"
        >
          WHY NAZR EXISTS.<br />IN THEIR WORDS.
        </h2>

        {/* Mobile Paragraph */}
        <p
          className="md:hidden font-['Inter',_sans-serif] font-normal text-[#161616] text-center mt-3 text-[16px] leading-[140%] tracking-[-0.03em] max-w-[340px] mx-auto"
        >
          Real experiences from women who<br /> believe safety should be proactive,<br />accessible, and shared.
        </p>

        {/* Desktop Paragraph */}
        <p
          className="hidden md:block font-['Inter',_sans-serif] font-normal text-[#161616] text-center md:mt-4 md:text-[18px] leading-[140%] tracking-[-0.03em] max-w-[620px] mx-auto"
        >
          Real experiences from women who believe safety should be proactive,<br />accessible, and shared.
        </p>
      </div>
    </section>
  );
}
