"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface OnMeSpraySectionProps {
  title: string;
  subtitle: string;
  onNext: () => void;
  onPrev: () => void;
}

export function OnMeSpraySection({ title, subtitle, onNext, onPrev }: OnMeSpraySectionProps) {
  return (
    <section className="w-full flex justify-center pt-0 pb-4 md:pt-0 md:pb-8 overflow-visible relative z-30 -mt-[60px] md:-mt-[160px]">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-[60px] lg:px-[80px] flex flex-col items-center z-30 relative">

        {/* Title */}
        <div className="min-h-[100px] md:min-h-[72px] flex items-end justify-center mt-8 md:mt-12 mb-4 md:mb-0 w-full relative z-40">
          <AnimatePresence mode="wait">
            <motion.h3
              key={title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal uppercase text-center max-md:text-[36px] md:text-[45px] absolute bottom-0 w-full"
              style={{ lineHeight: "1.1", letterSpacing: "0%" }}
            >
              {title}
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* Middle Row: Left Arrow, Subtitle, Right Arrow */}
        <div className="flex flex-row items-center justify-center mt-1 md:mt-2 mb-4 w-full max-w-[1000px] relative px-4 md:px-12">

          {/* Left Arrow Button */}
          <button
            onClick={onPrev}
            className="flex flex-shrink-0 w-[45px] h-[26px] md:w-[80px] md:h-[48px] lg:w-[130px] lg:h-[70px] absolute left-0 md:left-0 top-[40%] md:top-1/2 -translate-y-1/2 hover:scale-105 transition-transform active:scale-95 cursor-pointer z-50 outline-none focus:outline-none"
            aria-label="Previous product"
          >
            <Image src="/images/leftarrow.svg" alt="Left Arrow" fill className="object-contain" />
          </button>

          {/* Subtitle */}
          <div className="w-full max-w-[280px] md:max-w-[600px] min-h-[90px] md:min-h-[85px] relative flex justify-center items-start mx-auto">
            <AnimatePresence mode="wait">
              <motion.p
                key={subtitle}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[#FFF9EB] font-[Inter] font-normal text-center absolute w-full max-md:text-[14px] md:text-[18px]"
                style={{ lineHeight: "1.5", letterSpacing: "-0.01em" }}
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            </AnimatePresence>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={onNext}
            className="flex flex-shrink-0 w-[45px] h-[26px] md:w-[80px] md:h-[48px] lg:w-[130px] lg:h-[70px] absolute right-0 md:right-0 top-[40%] md:top-1/2 -translate-y-1/2 hover:scale-105 transition-transform active:scale-95 cursor-pointer z-50 outline-none focus:outline-none"
            aria-label="Next product"
          >
            <Image src="/images/rightarrow.svg" alt="Right Arrow" fill className="object-contain" />
          </button>

        </div>

        {/* Join Button */}
        <button className="group flex justify-center items-center bg-[#FF007F] hover:bg-[#FF007F]/90 text-[#FFF9EB] font-['Roboto',_sans-serif] font-normal text-[15px] md:text-[16px] leading-[1.5] tracking-normal px-[24px] py-[8px] w-auto h-[44px] md:h-[48px] rounded-[6px] border border-transparent transition-all duration-300 shadow-lg mt-2 md:-mt-[10px] ml-0.5 z-50 relative outline-none focus:outline-none">
          <Image src="/images/logosvg.svg" alt="Owl Logo" width={32} height={32} className="max-md:w-8 max-md:opacity-100 max-md:mr-2 md:w-0 md:opacity-0 md:group-hover:w-8 md:group-hover:opacity-100 md:group-hover:mr-2 transition-all duration-300 ease-in-out brightness-0 invert" />
          <span className="whitespace-nowrap">Join Ecosystem</span>
        </button>

        {/* Divider Line */}
        <div className="w-full max-w-[1000px] h-[1px] bg-[#333] mt-8 md:mt-12"></div>

      </div>
    </section>
  );
}
