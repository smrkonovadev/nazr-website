"use client";

import Image from "next/image";
import { useState } from "react";
import { Star, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export function ShopProductPepperSpray() {
  const [selectedVariant, setSelectedVariant] = useState<"pink" | "white" | null>(null);

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

          {/* Product Image — dynamic based on variant, clickable to PDP */}
          <div className="relative z-20 flex flex-col items-center justify-end w-full">
            <a
              href={selectedVariant === "white" ? "https://shop.nazrco.in/products/on-me-pepper-spray?variant=49831092453613" : "https://shop.nazrco.in/products/on-me-pepper-spray?variant=49831092420845"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[420px] h-[380px] md:w-[560px] md:h-[480px] z-20 pointer-events-auto cursor-pointer md:transform md:rotate-[20deg] md:translate-x-20 md:translate-y-10 hover:opacity-95 transition-opacity"
            >
              <Image unoptimized quality={100} src={selectedVariant === "white" ? "/images/whitesprayfinal.svg" : "/images/pinkspryfinal.svg"}
                alt={selectedVariant === "white" ? "White Pepper Spray" : "Pink Pepper Spray"}
                fill
                className="object-contain"
              />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[40%] px-6 md:pl-8 md:pr-12 pb-8 flex flex-col justify-end overflow-y-auto">

          {/* Description Text */}
          <p className="font-['Inter',_sans-serif] text-[#161616] text-[16px] font-normal leading-[140%] tracking-[-0.03em] md:text-[24px] md:font-semibold md:leading-[140%] md:tracking-[-0.03em] max-w-[440px] mb-3 md:mb-5">
            A personal safety spray designed for quick access when you need it most. Clips onto your bag or keys and glows in the dark for easy visibility.
          </p>

          {/* Price and Rating */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-baseline gap-2 md:gap-2.5">
              <span className="font-[family-name:var(--font-bebas)] text-[#161616] text-[48px] md:text-[60px] leading-none">
                ₹555
              </span>
              <span className="font-[family-name:var(--font-bebas)] text-[#161616] text-[32px] md:text-[42px] line-through leading-none decoration-1 md:decoration-2">
                ₹777
              </span>
            </div>

            <div className="h-[36px] w-[2px] bg-black"></div>

            <div className="flex items-center gap-2">
              <div className="flex gap-1 text-black">
                <Star className="w-4 h-4 fill-black text-black" />
                <Star className="w-4 h-4 fill-black text-black" />
                <Star className="w-4 h-4 fill-black text-black" />
                <Star className="w-4 h-4 fill-black text-black" />
                <Star className="w-4 h-4 fill-black text-black" />
              </div>
              <span className="font-['Inter',_sans-serif] text-[12px] md:text-[14px] text-black font-medium mt-1">
                (4.9 stars) • 47 reviews
              </span>
            </div>
          </div>

          {/* Variant Selector */}
          <div className="mb-4">
            <h4 className="font-[family-name:var(--font-bebas)] text-[#161616] text-[20px] md:text-[24px] mb-3 leading-none">
              VARIANT
            </h4>

            {/* Mobile View: Circular Swatches */}
            <div className="flex md:hidden items-center gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedVariant("pink")}
                aria-label="Pink variant"
                style={{ backgroundColor: "#FF0E97" }}
                className={`w-[20px] h-[20px] rounded-full border border-black transition-all cursor-pointer ${selectedVariant === "pink" ? "ring-2 ring-black ring-offset-2 scale-110" : "opacity-100 hover:scale-105"
                  }`}
              />
              <button
                type="button"
                onClick={() => setSelectedVariant("white")}
                aria-label="White variant"
                style={{ backgroundColor: "#FFF9EB" }}
                className={`w-[20px] h-[20px] rounded-full border border-black transition-all cursor-pointer ${selectedVariant === "white" ? "ring-2 ring-black ring-offset-2 scale-110" : "opacity-100 hover:scale-105"
                  }`}
              />
            </div>

            {/* Desktop View: Cards */}
            <div className="hidden md:flex gap-4">
              {/* Option 1: Pink */}
              <button
                onClick={() => setSelectedVariant("pink")}
                className={`w-[105px] h-[120px] rounded-[6px] border-[3px] flex flex-col items-center justify-between p-2 pb-2 transition-all ${selectedVariant === "pink" ? "border-[#FF0E97] bg-transparent" : "border-black bg-transparent"}`}
              >
                <div className="relative w-full h-[85px]">
                  <Image unoptimized quality={100} src="/images/spray-pink.webp" alt="Pink Variant" fill className="object-contain" />
                </div>
                <span className="font-['Inter',_sans-serif] text-[15px] font-bold text-black">Pink</span>
              </button>

              {/* Option 2: White */}
              <button
                onClick={() => setSelectedVariant("white")}
                className={`w-[105px] h-[120px] rounded-[6px] border-[3px] flex flex-col items-center justify-between p-2 pb-2 transition-all ${selectedVariant === "white" ? "border-[#FF0E97] bg-transparent" : "border-black bg-transparent"}`}
              >
                <div className="relative w-full h-[85px]">
                  <Image unoptimized quality={100} src="/images/spray-white.webp" alt="White Variant" fill className="object-contain" />
                </div>
                <span className="font-['Inter',_sans-serif] text-[15px] font-bold text-black">White</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full max-w-[500px] flex justify-start">
            <a
              href={selectedVariant === "white" ? "https://shop.nazrco.in/products/on-me-pepper-spray?variant=49831092453613" : "https://shop.nazrco.in/products/on-me-pepper-spray?variant=49831092420845"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[211px] h-[54px] px-6 py-3 gap-2 bg-[#312E2E] border border-[#FFF9EB] text-[#FFF9EB] rounded-[8px] font-[family-name:var(--font-bebas)] font-normal text-[18px] tracking-[0.05em] flex items-center justify-center hover:bg-black transition-colors uppercase"
            >
              View More
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
