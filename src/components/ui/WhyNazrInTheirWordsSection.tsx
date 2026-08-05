"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";

export function WhyNazrInTheirWordsSection() {
  const [animData, setAnimData] = useState<any>(null);

  useEffect(() => {
    fetch("/images/sos_hand.json")
      .then((res) => res.json())
      .then((data) => setAnimData(data))
      .catch((err) => console.error("Error loading sos_hand Lottie:", err));
  }, []);

  return (
    <section className="w-full bg-[#FFF1EB] h-auto md:min-h-[calc(100vh/var(--desktop-scale,1))] flex flex-col-reverse md:flex-row items-center justify-between relative z-20 overflow-hidden">
      {/* Left Column: Hand holding phone Lottie animation */}
      <div className="w-full md:w-[48%] h-[480px] sm:h-[520px] md:h-full relative flex items-end justify-center md:justify-start pl-0 md:pl-12 lg:pl-16">
        <div className="relative w-full h-full max-w-[500px] flex items-end justify-center md:justify-start pointer-events-none overflow-visible translate-y-[22%] md:translate-y-[36%]">
          {animData ? (
            <Lottie
              animationData={animData}
              loop={true}
              className="w-full h-full object-contain object-bottom-center md:object-bottom-left drop-shadow-xl transform-gpu scale-[1.38] sm:scale-[1.3] md:scale-[1.38] origin-bottom-center md:origin-bottom-left"
            />
          ) : (
            <Image
              src="/images/WHYNAZR.webp"
              alt="Why NAZR Exists - App UI Hand Mockup"
              fill
              className="object-contain object-bottom-center md:object-bottom-left"
              priority
            />
          )}
        </div>
      </div>

      {/* Right Column: Text content & Action button */}
      <div className="w-full md:w-[52%] flex flex-col items-start justify-center text-left pt-10 pb-6 md:py-0 px-6 sm:px-10 md:px-10 lg:px-14 z-10">
        <h2 className="font-[family-name:var(--font-bebas)] font-normal text-[#161616] uppercase text-[clamp(42px,6.25vw,80px)] leading-[90%] tracking-[-0.03em] m-0">
          WHY NAZR EXISTS.<br />
          IN THEIR WORDS.
        </h2>

        <p className="font-['Inter',_sans-serif] font-normal text-[#161616] text-[clamp(15px,1.41vw,18px)] leading-[140%] tracking-[-0.03em] mt-0 max-w-[480px] m-0">
          Real experiences from women who believe safety<br />should be proactive, accessible, and shared.
        </p>

        <button
          className="mt-[12px] bg-[#FF0E97] hover:bg-[#e00b84] text-white font-['Roboto',_sans-serif] font-normal text-[16px] leading-[150%] tracking-normal px-[20px] py-[8px] rounded-[4px] border border-[#FF0E97] inline-flex items-center justify-center cursor-pointer transition-colors shadow-sm whitespace-nowrap"
        >
          Tell us More
        </button>
      </div>
    </section>
  );
}
