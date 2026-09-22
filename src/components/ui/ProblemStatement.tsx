"use client";

export function ProblemStatement() {
  return (
    <section className="w-full bg-[#161616] flex justify-center pt-8 pb-2 md:pt-14 md:pb-4 z-40 relative">
      <div className="w-full max-w-[1440px] px-4 md:px-[30px] flex flex-col items-center justify-center text-center relative">

        {/* Centered Text Column */}
        <div className="w-full max-w-[1040px] flex flex-col items-center gap-6 md:gap-8 z-10">

          {/* Mobile Text (Static, crisp, full visibility) */}
          <div className="md:hidden flex flex-col gap-6 w-full text-center px-2">
            <h2
              className="m-0 font-[family-name:var(--font-bebas)] text-center text-[#FFF9EB] whitespace-pre-line"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                fontWeight: 400,
                fontSize: "28px",
                lineHeight: "115%",
                letterSpacing: "0.01em",
                textAlign: "center",
              } as React.CSSProperties}
            >
              {`FOR MANY WOMEN IN INDIA, SAFETY\nHAS BECOME A ROUTINE OF\nWORKAROUNDS. SHARED LOCATIONS.\nCHECK-INS. CALLS ON THE WAY HOME.`}
            </h2>
            <p
              className="m-0 font-[family-name:var(--font-bebas)] text-center text-[#FFF9EB] whitespace-pre-line"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "115%",
                letterSpacing: "0.01em",
                textAlign: "center",
              } as React.CSSProperties}
            >
              {`WHEN SOMETHING FEELS WRONG,\nHELP SHOULD BE IMMEDIATE. NOT\nDEPENDENT ON FINDING A PHONE,\nUNLOCKING IT, AND ASKING FOR IT.`}
            </p>
          </div>

          {/* Desktop Text (Centered matching reference image, fully visible without scroll animation) */}
          <div className="hidden md:flex flex-col items-center gap-7 w-full text-center">
            <h2
              className="m-0 font-[family-name:var(--font-bebas)] text-center text-[#FFF9EB] whitespace-pre-line"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                fontWeight: 400,
                fontSize: "40px",
                lineHeight: "115%",
                letterSpacing: "-0.01em",
                textAlign: "center",
              } as React.CSSProperties}
            >
              {`FOR MANY WOMEN IN INDIA, SAFETY HAS BECOME A ROUTINE\nOF WORKAROUNDS. SHARED LOCATIONS. CHECK-INS. CALLS\nON THE WAY HOME.`}
            </h2>
            <p
              className="m-0 font-[family-name:var(--font-bebas)] text-center text-[#FFF9EB] whitespace-pre-line"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                fontWeight: 400,
                fontSize: "34px",
                lineHeight: "115%",
                letterSpacing: "-0.01em",
                textAlign: "center",
              } as React.CSSProperties}
            >
              {`WHEN SOMETHING FEELS WRONG, HELP SHOULD BE\nIMMEDIATE. NOT DEPENDENT ON FINDING A PHONE,\nUNLOCKING IT, AND ASKING FOR IT.`}
            </p>
          </div>

          {/* Pink Sub-heading with Down Arrows: WHAT ASKING FOR HELP LOOKS LIKE ON YOUR PHONE RIGHT NOW */}
          <div className="flex items-center justify-center gap-2.5 text-[#FF0E97] mt-3 md:mt-5 mb-1 select-none">
            {/* Left circular down arrow */}
            <div className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] rounded-full border border-[#FF0E97] flex items-center justify-center text-[#FF0E97] shrink-0">
              <svg viewBox="0 0 24 24" className="w-3 h-3 md:w-3.5 md:h-3.5 fill-none stroke-current stroke-2">
                <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Underlined text */}
            <span className="font-[family-name:var(--font-bebas)] text-[16px] sm:text-[18px] md:text-[21px] tracking-wide underline underline-offset-4 decoration-[#FF0E97] uppercase">
              WHAT ASKING FOR HELP LOOKS LIKE ON YOUR PHONE RIGHT NOW
            </span>

            {/* Right circular down arrow */}
            <div className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] rounded-full border border-[#FF0E97] flex items-center justify-center text-[#FF0E97] shrink-0">
              <svg viewBox="0 0 24 24" className="w-3 h-3 md:w-3.5 md:h-3.5 fill-none stroke-current stroke-2">
                <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
