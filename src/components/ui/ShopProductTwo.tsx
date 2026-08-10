"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { Star, ShoppingBag } from "lucide-react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

export function ShopProductTwo() {
  const [selectedVariant, setSelectedVariant] = useState<"pink" | "white">("pink");
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"]
  });
  const clipBottom = useTransform(scrollYProgress, [0, 0.7], ["100%", "0%"]);
  const clipPath = useMotionTemplate`inset(0 0 ${clipBottom} 0)`;

  return (
    <section ref={sectionRef} className="w-full sticky top-0 h-screen overflow-hidden flex flex-col" style={{ zIndex: 20 }}>

      {/* Top Pink Bar */}
      <div className="w-full bg-[#E5007D] py-3 px-6 md:px-12 flex items-center border-b border-black shrink-0">
        <h2 className="font-[family-name:var(--font-bebas)] text-[#161616] text-[28px] font-normal leading-[1.1] tracking-[-0.03em] uppercase m-0">
          2] ANTI DRINK SPIKE STICKERS
        </h2>
      </div>

      {/* Content area — scroll-driven clip reveal */}
      <motion.div
        className="w-full flex-1 bg-[#FCE4EC] flex flex-col md:flex-row min-h-0"
        style={{ clipPath }}
      >

        {/* Left Column (Image Area) */}
        <div className="w-full md:w-[60%] md:border-r border-black relative flex flex-col justify-start md:justify-end items-center overflow-hidden pt-8 pb-4 md:py-20">

          {/* Huge Typography Background */}
          <div className="relative md:absolute md:top-8 md:left-12 pointer-events-none z-10 w-full px-6 md:mb-0 text-center md:text-left">
            <h3 className="font-[family-name:var(--font-bebas)] text-[#161616] text-[70px] leading-[0.9] md:text-[140px] md:leading-[0.85] tracking-[-0.03em] m-0">
              SIP <br className="hidden md:block" />
              CHECK
            </h3>
          </div>

          {/* Product Image on Podium */}
          <div className="relative z-20 flex flex-col items-center justify-end w-full">
            <div className="relative w-[390px] h-[360px] md:w-[460px] md:h-[400px] z-20 pointer-events-none md:transform md:translate-x-20 md:translate-y-10">
              <Image unoptimized quality={100} src="/images/productsip.webp"
                alt="Sip Check Product"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Column (Product Details) */}
        <div className="w-full md:w-[40%] px-6 md:pl-8 md:pr-12 pb-8 flex flex-col justify-end overflow-y-auto">

          <p className="font-['Inter',_sans-serif] text-[#161616] text-[16px] font-normal leading-[140%] tracking-[-0.03em] md:text-[24px] md:font-semibold md:leading-[140%] md:tracking-[-0.03em] max-w-[440px] mb-3 md:mb-5">
            A drink safety sticker designed to help protect your beverage while you're out. Seals securely to your glass and peels away easily when you're done.
          </p>

          {/* Price and Rating */}
          <div className="flex items-center gap-4 mb-8">
            <span className="font-[family-name:var(--font-bebas)] text-[#161616] text-[48px] md:text-[60px] leading-none">
              ₹444
            </span>
            <div className="h-[40px] w-[1px] bg-[#161616]"></div>
            <div className="flex items-center gap-2">
              <div className="flex gap-[2px] text-[#161616]">
                <Star className="w-5 h-5 fill-[#161616]" />
                <Star className="w-5 h-5 fill-[#161616]" />
                <Star className="w-5 h-5 fill-[#161616]" />
                <Star className="w-5 h-5 fill-[#161616]" />
                <Star className="w-5 h-5 stroke-[#161616]" />
              </div>
              <span className="font-['Inter',_sans-serif] text-[12px] md:text-[14px] text-black font-medium mt-1">
                (3.5 stars) • 10 reviews
              </span>
            </div>
          </div>

          {/* Variant Selector */}


          {/* Action Buttons */}
          <div className="w-full max-w-[500px] flex justify-start">
            <button className="w-[211px] h-[54px] px-6 py-3 gap-2 bg-[#312E2E] border border-[#FFF9EB] text-[#FFF9EB] rounded-[8px] font-[family-name:var(--font-bebas)] font-normal text-[18px] tracking-[0.05em] flex items-center justify-center hover:bg-black transition-colors uppercase">
              View More
            </button>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
