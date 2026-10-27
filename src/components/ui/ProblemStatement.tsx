"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { ScrollRevealText } from "./ScrollRevealText";

export function ProblemStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 35%"],
  });

  return (
    <section className="w-full bg-[#161616] flex justify-center pt-8 pb-2 md:pt-14 md:pb-4 z-40 relative">
      <div className="w-full max-w-[1440px] px-4 md:px-[30px] flex flex-col items-center justify-center text-center relative">

        {/* Centered Text Column */}
        <div ref={containerRef} className="w-full max-w-[1040px] flex flex-col items-center gap-6 md:gap-8 z-10">

          {/* Mobile Text (Scroll reveal animation) */}
          <div className="md:hidden flex flex-col gap-6 w-full text-center px-2">
            <ScrollRevealText
              text={"FOR MANY WOMEN IN INDIA, SAFETY\nHAS BECOME A ROUTINE OF\nWORKAROUNDS. SHARED LOCATIONS.\nCHECK-INS. CALLS ON THE WAY HOME."}
              className="m-0 font-[family-name:var(--font-bebas)] text-center text-[#f4f4f4] whitespace-pre-line"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "90%",
                letterSpacing: "-0.01em",
                textAlign: "center",
              } as React.CSSProperties}
              scrollYProgress={scrollYProgress}
              progressRange={[0, 0.48]}
              fillColor="#f4f4f4"
              emptyColor="#3A3A3A"
            />
            <ScrollRevealText
              text={"WHEN SOMETHING FEELS WRONG,\nHELP SHOULD BE IMMEDIATE. NOT\nDEPENDENT ON FINDING A PHONE,\nUNLOCKING IT, AND ASKING FOR IT."}
              className="m-0 font-[family-name:var(--font-bebas)] text-center text-[#f4f4f4] whitespace-pre-line"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                fontWeight: 400,
                fontSize: "28px",
                lineHeight: "90%",
                letterSpacing: "-0.01em",
                textAlign: "center",
              } as React.CSSProperties}
              scrollYProgress={scrollYProgress}
              progressRange={[0.48, 0.96]}
              fillColor="#f4f4f4"
              emptyColor="#3A3A3A"
            />
          </div>

          {/* Desktop Text (Scroll reveal animation) */}
          <div className="hidden md:flex flex-col items-center gap-7 w-full text-center">
            <ScrollRevealText
              text={"FOR MANY WOMEN IN INDIA, SAFETY HAS BECOME A ROUTINE\nOF WORKAROUNDS. SHARED LOCATIONS. CHECK-INS. CALLS\nON THE WAY HOME."}
              className="m-0 font-[family-name:var(--font-bebas)] text-center text-[#f4f4f4] whitespace-pre-line"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "48px",
                lineHeight: "90%",
                letterSpacing: "-0.01em",
                textAlign: "center",
              } as React.CSSProperties}
              scrollYProgress={scrollYProgress}
              progressRange={[0, 0.48]}
              fillColor="#f4f4f4"
              emptyColor="#3A3A3A"
            />
            <ScrollRevealText
              text={"WHEN SOMETHING FEELS WRONG, HELP SHOULD BE\nIMMEDIATE. NOT DEPENDENT ON FINDING A PHONE,\nUNLOCKING IT, AND ASKING FOR IT."}
              className="m-0 font-[family-name:var(--font-bebas)] text-center text-[#f4f4f4] whitespace-pre-line"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "48px",
                lineHeight: "90%",
                letterSpacing: "-0.01em",
                textAlign: "center",
              } as React.CSSProperties}
              scrollYProgress={scrollYProgress}
              progressRange={[0.48, 0.96]}
              fillColor="#f4f4f4"
              emptyColor="#3A3A3A"
            />
          </div>

          {/* Pink Sub-heading with Down Arrows: WHAT ASKING FOR HELP LOOKS LIKE ON YOUR PHONE RIGHT NOW */}
          <div className="flex items-center justify-center gap-2 md:gap-3 text-[#FF0E97] mt-3 md:mt-5 mb-1 select-none">
            {/* Left circular down arrow */}
            <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] rounded-full border border-[#FF0E97] flex items-center justify-center text-[#FF0E97] shrink-0">
              <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 fill-none stroke-current stroke-2">
                <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Underlined text */}
            <span
              className="text-[14px] sm:text-[18px] md:text-[24px] underline decoration-[#FF0E97] uppercase text-center"
              style={{
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "140%",
                letterSpacing: "-0.03em",
                textDecoration: "underline",
                textDecorationStyle: "solid",
                textDecorationSkipInk: "auto",
                verticalAlign: "bottom",
              }}
            >
              WHAT ASKING FOR HELP LOOKS LIKE ON YOUR PHONE RIGHT NOW
            </span>

            {/* Right circular down arrow */}
            <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] rounded-full border border-[#FF0E97] flex items-center justify-center text-[#FF0E97] shrink-0">
              <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 fill-none stroke-current stroke-2">
                <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
