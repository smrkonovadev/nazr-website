"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ShopProblemSteps() {
  const steps = [
    { time: "0:03S", text: "TAKE YOUR\nPHONE", color: "#0E8DFF" },
    { time: "0:06S", text: "CONVINCE IT\nYOU'RE YOU", color: "#E5007D" },
    { time: "0:09S", text: "FIND THE\nRIGHT APP", color: "#0E8DFF" },
    { time: "0:12S", text: "FIND THE\nRIGHT BUTTON", color: "#E5007D" },
    { time: "0:15S -", text: "...STILL\nWAITING", color: "#0E8DFF" },
  ];

  // Duplicate the steps to create a seamless loop. 
  // We duplicate it 4 times so it fills large screens easily.
  const duplicatedSteps = [...steps, ...steps, ...steps, ...steps];

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} className="w-full relative z-[999] bg-[#161616] pt-[30px] md:pt-[80px] pb-[25px] border-b border-white/20 overflow-hidden">

      {/* Top Paragraph */}
      <div className="w-full max-w-[800px] mx-auto max-md:px-[6.15vw] md:px-8 mb-[15px] flex items-center justify-center">
        <p className="font-[family-name:var(--font-bebas)] font-normal text-center text-[#FFF9EB] max-md:text-[7.0vw] md:text-[30px] leading-[120%] tracking-[-0.01em] uppercase">
          The most thoughtful gifts aren't always the biggest.  Sometimes they're the ones that quietly say, "I want you to get home safe."  Discover why thousands are choosing NAZR for the women they care about.        </p>
      </div>

      {/* Marquee Cards Container */}
      <div className="w-full relative z-20 flex items-center h-[380px] md:h-[440px]">
        {isInView && (
          <motion.div
            className="flex items-center gap-4 md:gap-8 min-w-max px-4 md:px-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 40,
            }}
          >
            {duplicatedSteps.map((step, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[280px] md:w-[350px] lg:w-[340px] h-[350px] md:h-[400px] lg:h-[460px] rounded-[16px] md:rounded-[24px] p-6 flex flex-col justify-between shadow-2xl"
                style={{ backgroundColor: step.color }}
              >
                <div className="font-[family-name:var(--font-bebas)] text-[#161616] text-[24px] md:text-[32px] lg:text-[42px] leading-none">
                  {step.time}
                </div>
                <div className="font-[family-name:var(--font-bebas)] text-[#161616] text-[32px] md:text-[40px] lg:text-[56px] leading-[0.9] tracking-[-0.02em] whitespace-pre-wrap">
                  {step.text}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

    </section>
  );
}
