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
    <section ref={sectionRef} className="w-full relative z-[999] bg-[#161616] pt-[30px] md:pt-[60px] pb-[30px] md:pb-[80px] border-b border-white/20 overflow-hidden">

      {/* Top Paragraph */}
      <div className="w-full max-w-[948px] mx-auto max-md:px-[6.15vw] md:px-0 mb-[30px] md:mb-[90px] flex items-center justify-center">
        <p className="font-[family-name:var(--font-bebas)] font-normal text-center text-[#FFF9EB] max-md:text-[28px] md:text-[52px] leading-[1.2] tracking-[-0.01em] uppercase">
          THE MOST THOUGHTFUL GIFTS AREN&apos;T ALWAYS THE BIGGEST.<br className="max-md:hidden" />
          SOMETIMES THEY&apos;RE THE ONES THAT QUIETLY SAY, &quot;I WANT<br className="max-md:hidden" />
          YOU TO GET HOME SAFE.&quot;<br className="max-md:hidden" />
          DISCOVER WHY THOUSANDS ARE CHOOSING NAZR FOR THE<br className="max-md:hidden" />
          WOMEN THEY CARE ABOUT.
        </p>
      </div>

      {/* Marquee Cards Container */}
      <div className="w-full relative z-20 flex items-center h-[372px]">
        {isInView && (
          <motion.div
            className="flex items-center gap-4 min-w-max px-4 md:px-8"
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
                className="relative flex-shrink-0 w-[279px] h-[372px] rounded-[32px] p-6 flex flex-col justify-between shadow-2xl"
                style={{ backgroundColor: step.color }}
              >
                <div className="font-[family-name:var(--font-bebas)] text-[#161616] text-[28px] leading-none">
                  {step.time}
                </div>
                <div className="font-[family-name:var(--font-bebas)] text-[#161616] text-[38px] leading-[0.9] tracking-[-0.02em] whitespace-pre-wrap">
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
