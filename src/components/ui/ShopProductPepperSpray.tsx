"use client";

import Image from "next/image";
import { useState } from "react";
import { Star, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export function ShopProductPepperSpray() {
  const [selectedVariant, setSelectedVariant] = useState<"pink" | "white">("pink");

  return (
    <section className="w-full sticky top-0 h-screen overflow-hidden flex flex-col" style={{ zIndex: 10 }}>

      {/* Top Blue Bar */}
      <div className="w-full bg-[#0E8DFF] py-3 px-6 md:px-12 flex items-center border-b border-black shrink-0">
        <h2 className="font-[family-name:var(--font-bebas)] text-[#161616] text-[28px] font-normal leading-[1.1] tracking-[-0.03em] uppercase m-0">
          1) PERSONAL SAFETY SPRAY
        </h2>
      </div>

      {/* Main Container */}
      <div className="w-full flex-1 bg-[#DDEFFF] flex flex-col md:flex-row min-h-0">

        {/* Left Column (Image Area) */}
        <div className="w-full md:w-[60%] md:border-r border-black relative flex flex-col justify-start md:justify-end items-center overflow-hidden pt-8 pb-4 md:py-20">

          {/* Huge Typography Background */}
          <div className="relative md:absolute md:top-8 md:left-12 pointer-events-none z-10 w-full px-6 md:mb-0 text-center md:text-left">
            <h3 className="font-[family-name:var(--font-bebas)] text-[#161616] text-[70px] leading-[0.9] md:text-[140px] md:leading-[0.85] tracking-[-0.03em] m-0">
              ON ME <br className="hidden md:block" />
              SPRAY
            </h3>
          </div>

          {/* Product Image — static */}
          <div className="relative z-20 flex flex-col items-center justify-end w-full">
            <div className="relative w-[360px] h-[330px] md:w-[460px] md:h-[400px] z-20 pointer-events-none md:transform md:rotate-[20deg] md:translate-x-20 md:translate-y-10">
              <Image
                src="/images/center.png"
                alt="Podium and Spray"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[40%] px-6 md:pl-8 md:pr-12 flex flex-col justify-center overflow-y-auto">

          {/* Description Text */}
          <p className="font-['Inter',_sans-serif] text-[#161616] text-[18px] md:text-[20px] font-bold leading-[1.3] max-w-[408px] mb-5 tracking-[-0.02em]">
            Convenient to locate, powerful enough to protect. Nazr’s On Me Personal Safety Spray is designed to be within reach when you need it the most. With a compact design that can be clipped to your keys or bag and a silicon glow-in-the-dark cap for easy visibility, On Me is ready when you are.          </p>

          {/* Price and Rating */}
          <div className="flex items-center gap-4 mb-8">
            <span className="font-[family-name:var(--font-bebas)] text-[#161616] text-[48px] md:text-[60px] leading-none">
              ₹777
            </span>

            <div className="h-[36px] w-[2px] bg-black"></div>

            <div className="flex items-center gap-2">
              <div className="flex gap-1 text-black">
                <Star className="w-4 h-4 fill-black" />
                <Star className="w-4 h-4 fill-black" />
                <Star className="w-4 h-4 fill-black" />
                <Star className="w-4 h-4 fill-black" />
                <Star className="w-4 h-4" />
              </div>
              <span className="font-['Inter',_sans-serif] text-[12px] md:text-[14px] text-black font-medium mt-1">
                (3.5 stars) • 10 reviews
              </span>
            </div>
          </div>

          {/* Variant Selector */}
          <div className="mb-4">
            <h4 className="font-[family-name:var(--font-bebas)] text-[#161616] text-[20px] md:text-[24px] mb-3 leading-none">
              VARIANT
            </h4>
            <div className="flex gap-4">
              {/* Option 1: Pink */}
              <button
                onClick={() => setSelectedVariant("pink")}
                className={`w-[105px] h-[120px] rounded-[6px] border-[3px] flex flex-col items-center justify-between p-2 pb-2 transition-all ${selectedVariant === "pink" ? "border-black bg-transparent" : "border-black/30 bg-transparent"}`}
              >
                <div className="relative w-full h-[85px]">
                  <Image src="/images/spray-pink.png" alt="Pink Variant" fill className="object-contain" />
                </div>
                <span className="font-['Inter',_sans-serif] text-[15px] font-bold text-black">Pink</span>
              </button>

              {/* Option 2: White */}
              <button
                onClick={() => setSelectedVariant("white")}
                className={`w-[105px] h-[120px] rounded-[6px] border-[3px] flex flex-col items-center justify-between p-2 pb-2 transition-all ${selectedVariant === "white" ? "border-black bg-transparent" : "border-black/30 bg-transparent"}`}
              >
                <div className="relative w-full h-[85px]">
                  <Image src="/images/spray-white.png" alt="White Variant" fill className="object-contain" />
                </div>
                <span className="font-['Inter',_sans-serif] text-[15px] font-bold text-black">White</span>
              </button>
            </div>
          </div>

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
