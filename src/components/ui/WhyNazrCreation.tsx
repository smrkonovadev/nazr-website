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
    <div className="w-full relative flex items-center justify-center pt-2 pb-6 md:pt-4 md:pb-8 z-10 overflow-visible min-h-[260px] md:min-h-[380px] lg:min-h-[440px]">
      {/* Left Hand Image */}
      <div className="absolute left-0 right-[calc(50%+60px)] md:right-[calc(50%+110px)] lg:right-[calc(50%+130px)] top-1/2 -translate-y-1/2 h-[75%] md:h-[90%] pointer-events-none z-0">
        <Image
          src="/images/lefthand.png"
          alt="Left Hand"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      {/* Right Hand Image */}
      <div className="absolute right-0 left-[calc(50%+60px)] md:left-[calc(50%+110px)] lg:left-[calc(50%+130px)] top-1/2 -translate-y-1/2 h-[75%] md:h-[90%] pointer-events-none z-0">
        <Image
          src="/images/righthand.png"
          alt="Right Hand"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      {/* Center Lottie Animation */}
      <div className="relative z-20 w-[220px] md:w-[350px] lg:w-[400px] aspect-square overflow-visible flex items-center justify-center">
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
