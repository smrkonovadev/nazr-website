"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion, useInView } from "framer-motion";

export function AboutTestimonial() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.5 });

  return (
    <section className="w-full bg-[#FFF1EB] max-md:py-2 md:pt-4 md:pb-8 max-md:px-0 md:px-8 relative max-md:-mt-[12px] md:-mt-[2px] border-none outline-none z-10">
      <div
        ref={containerRef}
        className="w-full max-w-[1400px] mx-auto bg-[#161616] rounded-[32px] max-md:aspect-square relative overflow-hidden flex flex-col items-center justify-center text-center px-4 md:px-12 max-md:py-4 md:py-[184px] cursor-default border-0 outline-none"
        style={{
          clipPath: "inset(0px round 32px)",
          transform: "translateZ(0)",
        }}
      >

        {/* Decorative Side Images that slide out on scroll */}
        <motion.div
          className="hidden md:block absolute left-0 md:left-[18%] top-[10%] w-[40%] md:w-[28%] h-[80%] rounded-[24px] overflow-hidden z-20 pointer-events-none"
          initial={{ x: "0%", rotate: 0 }}
          animate={{ x: isInView ? "-120%" : "0%", rotate: isInView ? -6 : 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <Image
            src="/images/image2.png"
            alt="Decorative left"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          className="hidden md:block absolute right-0 md:right-[18%] top-[10%] w-[40%] md:w-[28%] h-[80%] rounded-[24px] overflow-hidden z-20 pointer-events-none"
          initial={{ x: "0%", rotate: 0 }}
          animate={{ x: isInView ? "120%" : "0%", rotate: isInView ? 12 : 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <Image
            src="/images/image4.png"
            alt="Decorative right"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* 5-Star Box */}
        <div className="bg-[#FFF1EB] max-md:px-8 max-md:py-2.5 md:px-6 md:py-2 flex items-center justify-center max-md:gap-3 md:gap-2 max-md:mb-8 md:mb-10 z-10 relative">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="max-md:w-6 max-md:h-6 md:w-5 md:h-5 text-[#161616]" fill="currentColor" />
          ))}
        </div>

        <h2
          className="font-[family-name:var(--font-bebas)] text-white text-center max-md:mb-8 md:mb-12 max-md:px-0.5 px-6 md:px-0 z-10 relative pointer-events-none uppercase w-full max-w-[733px] text-[24px] md:text-[40px] leading-[120%] tracking-[-0.05em] md:tracking-[-0.03em]"
          style={{
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          It is a long established fact that a readerIt is a<br className="block md:hidden" />
          long established fact that a readerIt is a long<br className="block md:hidden" />
          established fact that a readerIt is a long<br className="block md:hidden" />
          established fact that a readerIt is a long<br className="block md:hidden" />
          established fact that a reader
        </h2>

        {/* Pink Button */}
        <button
          className="group bg-[#F80090] text-white font-regular flex items-center justify-center hover:bg-[#F80090]/90 transition-colors shadow-lg z-10 relative border border-[#F80090]"
          style={{
            width: "184px",
            height: "40px",
            borderRadius: "4px",
            padding: "8px 12px",
            opacity: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/images/logosvg.svg"
            alt="Nazr Logo"
            width={24}
            height={24}
            className="w-6 opacity-100 mr-2 md:w-0 md:opacity-0 md:group-hover:w-6 md:group-hover:opacity-100 md:group-hover:mr-2 transition-all duration-300 ease-in-out object-contain invert brightness-0 shrink-0"
          />
          <span className="text-[16px] leading-[150%] tracking-normal whitespace-nowrap flex-shrink-0">Join Ecosystem</span>
        </button>

      </div>
    </section>
  );
}
