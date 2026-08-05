"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ScrollRevealText } from "./ScrollRevealText";

export function ProblemStatement() {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ["start 95%", "end 45%"]
  });

  return (
    <section className="w-full bg-[#161616] flex justify-center pt-6 pb-2 md:pt-4 md:pb-0 z-[60] relative">
      <div className="w-full max-w-[1240px] px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 relative">

        {/* Left Side: Text Column */}
        <div ref={textContainerRef} className="w-full max-w-[640px] flex flex-col gap-4 md:gap-6 z-10">

          {/* Mobile Text (Exact line breaks & centering as per reference design) */}
          <div className="md:hidden flex flex-col gap-6 pt-2 pb-2 mx-auto w-full max-w-[360px] px-2 text-center">
            <ScrollRevealText
              text={"FOR MANY WOMEN IN INDIA, SAFETY\nHAS BECOME A ROUTINE OF\nWORKAROUNDS. SHARED LOCATIONS.\nCHECK-INS. CALLS ON THE WAY HOME."}
              className="m-0 font-[family-name:var(--font-bebas)] text-[28px] sm:text-[30px] text-center text-[#FFF9EB]"
              style={{
                fontFamily: 'var(--font-bebas), Bebas Neue, sans-serif',
                fontWeight: 400,
                lineHeight: '110%',
                letterSpacing: '-0.01em',
              }}
              scrollYProgress={scrollYProgress}
              progressRange={[0, 0.45]}
            />
            <ScrollRevealText
              text={"WHEN SOMETHING FEELS WRONG,\nHELP SHOULD BE IMMEDIATE. NOT\nDEPENDENT ON FINDING A PHONE,\nUNLOCKING IT, AND ASKING FOR IT."}
              className="m-0 font-[family-name:var(--font-bebas)] text-[28px] sm:text-[30px] text-center text-[#FFF9EB]"
              style={{
                fontFamily: 'var(--font-bebas), Bebas Neue, sans-serif',
                fontWeight: 400,
                lineHeight: '110%',
                letterSpacing: '-0.01em',
              }}
              scrollYProgress={scrollYProgress}
              progressRange={[0.45, 0.9]}
            />
          </div>

          {/* Desktop Text (Natural text flow for laptop/desktop screens) */}
          <div className="hidden md:flex flex-col gap-6">
            <ScrollRevealText
              text={"FOR MANY WOMEN IN INDIA, SAFETY HAS BECOME A ROUTINE OF WORKAROUNDS. SHARED LOCATIONS. CHECK-INS. CALLS ON THE WAY HOME."}
              className="m-0 font-[family-name:var(--font-bebas)] text-left text-[#FFF9EB] text-[36px]"
              style={{
                fontFamily: 'var(--font-bebas), Bebas Neue, sans-serif',
                fontWeight: 400,
                lineHeight: '110%',
                letterSpacing: '-0.01em',
              }}
              scrollYProgress={scrollYProgress}
              progressRange={[0.05, 0.50]}
            />
            <ScrollRevealText
              text={"WHEN SOMETHING FEELS WRONG, HELP SHOULD BE IMMEDIATE. NOT DEPENDENT ON FINDING A PHONE, UNLOCKING IT, AND ASKING FOR IT."}
              className="m-0 font-[family-name:var(--font-bebas)] text-left text-[#FFF9EB] text-[36px]"
              style={{
                fontFamily: 'var(--font-bebas), Bebas Neue, sans-serif',
                fontWeight: 400,
                lineHeight: '110%',
                letterSpacing: '-0.01em',
              }}
              scrollYProgress={scrollYProgress}
              progressRange={[0.50, 0.95]}
            />
          </div>
        </div>

        {/* Right Side: Proportional Stacked Circular Badges (Hidden on mobile) */}
        <div className="hidden md:block relative md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] shrink-0 pointer-events-none z-10 my-0">
          
          {/* Back Image (Pink) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 12 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.2 }}
            className="absolute top-2 right-0 w-[190px] h-[190px] sm:w-[230px] sm:h-[230px] md:w-[260px] md:h-[260px] lg:w-[290px] lg:h-[290px]"
          >
            <Image unoptimized quality={100} src="/images/new1.webp"
              alt="NAZR Badge Pink"
              fill
              className="object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Front Image (Purple) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -35 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -12 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
            className="absolute top-6 left-0 w-[190px] h-[190px] sm:w-[230px] sm:h-[230px] md:w-[260px] md:h-[260px] lg:w-[290px] lg:h-[290px] z-20"
          >
            <Image unoptimized quality={100} src="/images/new2.webp"
              alt="NAZR Badge Purple"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
