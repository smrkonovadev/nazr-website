"use client";

import Image from "next/image";
import { useState } from "react";
import { Star, ShoppingBag } from "lucide-react";

export function ShopProductTwo() {
  const [selectedVariant, setSelectedVariant] = useState<"pink" | "white">("pink");

  return (
    <section className="w-full relative z-30">

      {/* Top Pink Bar */}
      <div className="w-full bg-[#E5007D] py-3 px-6 md:px-12 flex items-center border-t border-b border-black">
        <h2 className="font-[family-name:var(--font-bebas)] text-[#161616] text-[32px] font-normal leading-[1.1] tracking-[-0.03em] uppercase m-0">
          2) EYE PATCHES
        </h2>
      </div>

      {/* Main Container */}
      <div className="w-full bg-[#FCE4EC] flex flex-col md:flex-row border-b border-black">

        {/* Left Column (Image Area) */}
        <div className="w-full md:w-[60%] md:border-r border-black relative flex flex-col justify-start md:justify-end items-center overflow-hidden pt-8 pb-4 md:py-20">

          {/* Huge Typography Background */}
          <div className="relative md:absolute md:top-8 md:left-12 pointer-events-none z-10 w-full px-6 md:mb-0 text-center md:text-left">
            <h3 className="font-[family-name:var(--font-bebas)] text-[#161616] text-[70px] leading-[0.9] md:text-[140px] md:leading-[0.85] tracking-[-0.03em] m-0">
              SIP CHECK <br className="hidden md:block" />
            </h3>
          </div>

          {/* Product Image Collage */}
          <div className="relative z-20 flex items-center justify-center -mt-4 md:mt-32 -mb-22 md:mb-0 w-full max-w-[500px] aspect-square">

            {/* Back Blue Box */}
            <div className="absolute left-[5%] top-0 w-[80%] aspect-square z-20 transform -rotate-[15deg]">
              <Image
                src="/images/nazreye.png"
                alt="Blue Box"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* Front Pink Box */}
            <div className="absolute left-[15%] top-[10%] w-[80%] aspect-square z-30 transform rotate-[10deg]">
              <Image
                src="/images/nazreye1.png"
                alt="Pink Box"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>

          </div>
        </div>

        {/* Right Column (Product Details) */}
        <div className="w-full md:w-[40%] px-4 md:px-6 pb-12 pt-0 md:p-12 lg:px-16 lg:py-12 flex flex-col justify-center overflow-x-hidden">

          {/* Description Text */}
          <p className="font-['Inter',_sans-serif] text-[#161616] text-[22px] md:text-[23px] font-bold leading-[1.3] max-w-[408px] mb-6 tracking-[-0.02em]">
            The Sip Check is a discreet drink cover designed to help you be in the moment without worry. An adhesive layer that can be securely attached to your cup and removed once you’re done, this is a seal that ensures nothing unwanted finds its way to your peace of mind.          </p>

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
          ?

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
