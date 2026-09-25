"use client";

import Image from "next/image";
import Link from "next/link";
import { trackMetaViewContent } from "@/components/MetaPixel";

export function StareBackBundleBanner() {
  const handleBuyBundle = () => {
    trackMetaViewContent({
      content_name: "NAZR 360 Bundle",
      content_ids: ["nazr-360-bundle"],
      content_type: "product",
      value: 999,
      currency: "INR",
    });
    window.open("https://shop.nazrco.in/products/bundle", "_blank");
  };

  return (
    <section className="w-full bg-[#FF0E97] text-white select-none">
      <div className="w-full flex justify-center py-10 sm:py-14 md:py-16 lg:py-20 px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-[1280px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-14">
          {/* Left Product Visual Card - Comment #54 fix cropping */}
          <div className="w-full md:w-[42%] max-w-[430px] aspect-square rounded-[22px] sm:rounded-[28px] bg-white shadow-xl flex items-center justify-center p-4 sm:p-6 relative group">
            <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/images/product365-trimmed.webp"
                alt="Nazr 360 Bundle"
                fill
                className="object-contain p-1 drop-shadow-md"
                sizes="(max-width: 768px) 340px, 440px"
                priority
              />
            </div>
          </div>

          {/* Right Details & CTA */}
          <div className="w-full md:w-[58%] flex flex-col items-start text-left">
            {/* Small pill tag */}
            <span className="bg-[#8A0050] text-white font-['Inter',_sans-serif] text-[11px] sm:text-[12px] font-bold px-3.5 py-1 rounded-full uppercase tracking-widest mb-4">
              READY?
            </span>

            {/* Two-tone heading: STARE BACK in white, FULLY EQUIPPED in black */}
            <h2 className="font-[family-name:var(--font-bebas)] text-[48px] sm:text-[64px] md:text-[76px] lg:text-[88px] font-normal leading-[0.9] tracking-[-0.02em] uppercase mb-5">
              <span className="text-white">STARE BACK,</span>
              <br />
              <span className="text-[#161616]">FULLY EQUIPPED.</span>
            </h2>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/30 mb-5" />

            {/* Subtitle */}
            <p className="font-['Inter',_sans-serif] text-[15px] sm:text-[17px] md:text-[18px] font-semibold text-white/90 mb-3">
              Nazr 360°: On Me + Sip Check
            </p>

            {/* Pricing Row + Action Buttons */}
            <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-5 mt-1">
              {/* Price cluster */}
              <div className="flex items-center gap-3">
                <span className="font-bold text-[32px] sm:text-[38px] md:text-[42px] leading-none text-white">
                  ₹999
                </span>
                <span className="text-white/50 line-through text-[16px] sm:text-[18px] md:text-[20px] font-medium">
                  ₹1,554
                </span>
                <span className="bg-black text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase">
                  Save ₹555
                </span>
              </div>

              {/* Action Buttons: Full width on mobile, inline on desktop - Comment #53 */}
              <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto">
                <button
                  onClick={handleBuyBundle}
                  className="w-full md:w-auto bg-[#161616] hover:bg-black text-white font-['Inter',_sans-serif] font-bold text-[14px] px-8 py-3.5 rounded-full uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer text-center"
                >
                  Get the bundle
                </button>
                <Link
                  href="#on-me-spray"
                  className="w-full md:w-auto text-center font-['Inter',_sans-serif] text-white hover:bg-white/15 font-bold text-[14px] px-8 py-3.5 rounded-full border-2 border-white uppercase tracking-wider transition-all cursor-pointer inline-flex items-center justify-center shadow-sm"
                >
                  Or shop each tool
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
