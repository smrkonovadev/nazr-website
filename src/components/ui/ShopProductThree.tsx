"use client";

import Image from "next/image";
import { useState } from "react";
import { Star, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export function ShopProductThree() {
  const [selectedVariant, setSelectedVariant] = useState<"pink" | "white">("pink");

  return (
    <section className="w-full relative z-30">

      {/* Top Blue Bar */}
      <div className="w-full bg-[#0E8DFF] py-3 px-6 md:px-12 flex items-center border-t border-b border-black">
        <h2 className="font-[family-name:var(--font-bebas)] text-black text-[24px] md:text-[32px] leading-none m-0">
          3) SIP CHECK BUNDLE
        </h2>
      </div>

      {/* Main Container */}
      <div className="w-full bg-[#DDEFFF] flex flex-col md:flex-row border-b border-black">

        {/* Left Column (Image Area) */}
        <div className="w-full md:w-[60%] md:border-r border-black relative flex flex-col justify-start md:justify-end items-center overflow-hidden pt-8 pb-4 md:py-20">

          {/* Huge Typography Background */}
          <div className="relative md:absolute md:top-8 md:left-12 pointer-events-none z-10 w-full px-6 md:mb-0 text-center md:text-left">
            <h3 className="font-[family-name:var(--font-bebas)] text-[#161616] text-[70px] leading-[0.9] md:text-[140px] md:leading-[0.85] tracking-[-0.03em] m-0">
              NAZR <br className="hidden md:block" />
              360°
            </h3>
          </div>

          {/* Product Image on Podium */}
          <motion.div
            initial={{ scale: 0, y: 150 }}
            whileInView={{ scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.5, delay: 0.05 }}
            className="relative z-20 flex flex-col items-center justify-end md:mt-32 w-full mt-4 -mb-2 md:mb-0"
          >
            <div className="relative w-[360px] h-[330px] md:w-[580px] md:h-[500px] z-20 pointer-events-none md:transform md:translate-x-24 md:translate-y-16">
              <Image
                src="/images/SHOPPRO3.svg"
                alt="Podium"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Column (Product Details) */}
        <div className="w-full md:w-[40%] px-4 pb-12 pt-0 md:pl-6 md:pr-12 md:py-12 lg:pl-6 lg:pr-16 lg:py-12 flex flex-col justify-center overflow-x-hidden">

          {/* Description Text */}
          <p className="font-['Inter',_sans-serif] text-[#161616] text-[22px] md:text-[23px] font-bold leading-[1.3] max-w-[408px] mb-6 tracking-[-0.02em]">
            Nazr 360° pairs two essentials for everyday peace of mind. The compact On Me designed for quick access, and a pack of Sip Checks to keep your beverage protected. Different tools with one goal: feeling secure and present wherever you go.          </p>

          {/* Price and Rating */}
          <div className="flex items-center gap-4 mb-8">
            <span className="font-[family-name:var(--font-bebas)] text-[#161616] text-[48px] md:text-[60px] leading-none">
              ₹1111
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
          <div className="flex flex-row gap-[8px] w-full max-w-[500px]">
            <button className="flex-1 bg-[#312E2E] border border-[#FFF9EB] text-[#FFF9EB] h-[54px] rounded-[8px] font-[family-name:var(--font-bebas)] font-normal text-[18px] tracking-[0.05em] flex items-center justify-center gap-2 hover:bg-black transition-colors uppercase">
              Add To Cart
              <ShoppingBag className="w-4 h-4" />
            </button>
            <button className="flex-1 bg-[#312E2E] border border-[#FFF9EB] text-[#FFF9EB] h-[54px] rounded-[8px] font-[family-name:var(--font-bebas)] font-normal text-[18px] tracking-[0.05em] flex items-center justify-center gap-2 hover:bg-black transition-colors uppercase">
              View More
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
