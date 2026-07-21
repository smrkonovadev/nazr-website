"use client";

export function HelplineDirectoryIntro() {
  return (
    <div className="w-full flex flex-col items-center md:items-start text-center md:text-left justify-center px-4 md:px-[40px] pt-[26px] pb-[40px] z-10 relative">
      <h1
        className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] uppercase text-[64px] md:text-[177px] leading-[1.1] md:leading-[1.0] tracking-[-0.03em] max-md:w-[346px]"
      >
        HELPLINE DIRECTORY
      </h1>

      <p
        className="mt-4 md:mt-6 text-[#161616] max-w-[1150px] max-md:w-[346px] text-[16px] md:text-[22px] leading-[140%] tracking-[-0.03em] md:tracking-[-0.02em] font-normal"
        style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
      >
        The Government of India provides a single helpline number for all over in India offered by the Government agencies.
        These toll-free numbers are running across all states in India and available 24×7. The toll-free numbers/helplines are
        telephone and SMS based services which help to the callers regarding various government services.
      </p>
    </div>
  );
}
