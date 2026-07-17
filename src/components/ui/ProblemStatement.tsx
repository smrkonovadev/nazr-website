"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ScrollRevealText } from "./ScrollRevealText";

export function ProblemStatement() {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ["start 90%", "end 50%"]
  });

  return (
    <section className="w-full bg-[#161616] flex justify-center pt-[8.2vw] pb-[24.6vw] md:pt-0 md:pb-0 overflow-visible z-[60] relative md:h-[352px]">
      <div className="w-full px-[4.1vw] md:px-0 flex flex-col md:flex-row items-start relative md:w-full md:h-full">

        {/* Left Side: Text */}
        <div ref={textContainerRef} className="w-[95%] mx-auto md:mx-0 flex flex-col gap-[10.2vw] md:gap-[40px] z-10 pt-0 md:pt-0 md:absolute md:top-[63px] md:left-[30px] md:w-[599px] md:min-h-[316px] md:h-auto">

          {/* Mobile Text (Natural Wrapping) */}
          <div className="md:hidden flex flex-col gap-[10.2vw]">
            <ScrollRevealText
              text={"FOR MANY WOMEN IN INDIA, SAFETY HAS BECOME A ROUTINE OF WORKAROUNDS. SHARED LOCATIONS. CHECK-INS. CALLS ON THE WAY HOME."}
              className="m-0 font-[family-name:var(--font-bebas)] text-[7.17vw] text-center"
              style={{ lineHeight: '120%', letterSpacing: '-0.01em', fontWeight: 400 }}
              scrollYProgress={scrollYProgress}
              progressRange={[0, 0.4]}
            />
            <ScrollRevealText
              text={"WHEN SOMETHING FEELS WRONG, HELP SHOULD BE IMMEDIATE. NOT DEPENDENT ON FINDING A PHONE, UNLOCKING IT, AND ASKING FOR IT."}
              className="m-0 font-[family-name:var(--font-bebas)] text-[7.17vw] text-center"
              style={{ lineHeight: '120%', letterSpacing: '-0.01em', fontWeight: 400 }}
              scrollYProgress={scrollYProgress}
              progressRange={[0.4, 0.8]}
            />
          </div>

          {/* Desktop Text (Natural Wrapping in 750px) */}
          <div className="hidden md:flex flex-col gap-[40px]">
            <ScrollRevealText
              text={"For many women in India, safety has become a routine of workarounds. Shared locations. Check-ins. Calls on the way home."}
              className="m-0 font-[family-name:var(--font-bebas)] md:text-[40px] md:text-left text-[#FFF9EB]"
              style={{ lineHeight: '120%', letterSpacing: '-0.01em', fontWeight: 400 }}
              scrollYProgress={scrollYProgress}
              progressRange={[0, 0.4]}
            />
            <ScrollRevealText
              text={"When something feels wrong, help should be immediate. Not dependent on finding a phone, unlocking it, and asking for it."}
              className="m-0 font-[family-name:var(--font-bebas)] md:text-[40px] md:text-left text-[#FFF9EB]"
              style={{ lineHeight: '120%', letterSpacing: '-0.01em', fontWeight: 400 }}
              scrollYProgress={scrollYProgress}
              progressRange={[0.4, 0.8]}
            />
          </div>
        </div>

        {/* Right Side: Images Group */}
        <div
          className="hidden md:block md:absolute pointer-events-none z-10"
          style={{
            width: '401.24px',
            height: '301.84px',
            top: '36px',
            right: '63.62px',
            transform: 'rotate(10.14deg)'
          }}
        >
          {/* Back Image (Purple) */}
          <div
            className="absolute"
            style={{
              width: '350px',
              height: '350px',
              top: '70px',
              left: '-20px',
              rotate: '-30deg'
            }}
          >
            <Image
              src="/images/new2.svg"
              alt="NAZR Image 1"
              fill
              className="object-contain"
            />
          </div>

          {/* Front Image (Pink) */}
          <div
            className="absolute"
            style={{
              width: '350px',
              height: '350px',
              top: '40px',
              left: '40px',
              rotate: '-20deg'
            }}
          >
            <Image
              src="/images/new1.svg"
              alt="NAZR Image 2"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
