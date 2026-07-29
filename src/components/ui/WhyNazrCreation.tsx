"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function WhyNazrCreation() {
  const [coinAnimData, setCoinAnimData] = useState<any>(null);

  useEffect(() => {
    fetch("/images/Coin.json")
      .then((res) => res.json())
      .then((data) => setCoinAnimData(data))
      .catch((err) => console.error("Error loading Coin Lottie:", err));
  }, []);

  return (
    <div className="w-full relative flex items-center justify-center py-2 md:py-6 z-10 overflow-visible min-h-[220px] md:min-h-[380px] lg:min-h-[440px]">
      {/* Desktop Left Hand Image (hidden md:block) - Extends to left edge */}
      <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[320px] lg:w-[420px] h-[85%] md:h-[95%] pointer-events-none z-0">
        <Image unoptimized quality={100} src="/images/lefthand.webp"
          alt="Left Hand"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      {/* Desktop Right Hand Image (hidden md:block) - Extends to right edge */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[320px] lg:w-[420px] h-[85%] md:h-[95%] pointer-events-none z-0">
        <Image unoptimized quality={100} src="/images/righthand.webp"
          alt="Right Hand"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      {/* Center Lottie Animation (mix-blend-multiply removes grey square background) */}
      <div className="relative z-20 w-[220px] md:w-[350px] lg:w-[400px] aspect-square overflow-visible flex items-center justify-center mix-blend-multiply">
        {coinAnimData ? (
          <Lottie
            animationData={coinAnimData}
            loop
            autoplay
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <div className="w-full h-full" />
        )}
      </div>
    </div>
  );
}
