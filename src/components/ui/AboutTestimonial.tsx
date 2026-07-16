"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion, useInView } from "framer-motion";

export function AboutTestimonial() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-80% 0px" });

  return (
    <section className="w-full bg-[#FFF1EB] max-md:py-2 md:py-16 max-md:px-0 md:px-8 max-md:pb-8 md:pb-32 relative max-md:-mt-[12px] md:-mt-[2px] border-none outline-none z-10">
      <div
        ref={containerRef}
        className="w-full max-w-[1400px] mx-auto bg-[#161616] rounded-[24px] md:rounded-[40px] max-md:aspect-square relative overflow-hidden flex flex-col items-center justify-center text-center px-4 md:px-12 max-md:py-4 md:py-[184px] cursor-default"
      >

        {/* Decorative Side Images that slide out on scroll */}
        <motion.div
          className="hidden md:block absolute left-0 md:left-8 top-[10%] w-[40%] md:w-[28%] h-[80%] rounded-[24px] overflow-hidden shadow-2xl z-20 pointer-events-none"
          initial={{ x: "100%", rotate: 5 }}
          animate={{ x: isInView ? "-60%" : "100%", rotate: isInView ? -6 : 5 }}
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
          className="hidden md:block absolute right-0 md:right-8 top-[10%] w-[40%] md:w-[28%] h-[80%] rounded-[24px] overflow-hidden shadow-2xl z-20 pointer-events-none"
          initial={{ x: "-100%", rotate: -5 }}
          animate={{ x: isInView ? "60%" : "-100%", rotate: isInView ? 12 : -5 }}
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

        {/* Massive Text */}
        <h2 className="font-[family-name:var(--font-bebas)] text-white max-md:text-[28px] md:text-[35px] max-md:leading-[110%] md:leading-[120%] max-md:tracking-[-0.03em] md:tracking-wide max-w-[700px] max-md:mb-10 md:mb-12 max-md:px-2 z-10 relative pointer-events-none transition-all duration-500">
          IT IS A LONG ESTABLISHED FACT THAT A READERIT IS A LONG ESTABLISHED FACT THAT A READERIT IS A LONG ESTABLISHED FACT THAT A READERIT IS A LONG ESTABLISHED FACT THAT A READERIT IS A LONG ESTABLISHED FACT THAT A READER
        </h2>

        {/* Pink Button */}
        <button className="bg-[#F80090] text-white max-md:px-6 max-md:py-1 md:px-8 md:py-2 rounded-[8px] font-regular flex items-center max-md:gap-3 md:gap-3 hover:bg-[#F80090]/90 transition-colors shadow-lg z-10 relative">
          <Image
            src="/images/logosvg.svg"
            alt="Nazr Logo"
            width={24}
            height={24}
            className="max-md:w-11 max-md:h-11 md:w-8 md:h-8 object-contain invert brightness-0"
          />
          <span className="max-md:text-[20px] md:text-[18px]">Join Ecosystem</span>
        </button>

      </div>
    </section>
  );
}
