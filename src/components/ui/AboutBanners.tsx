"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const textStyle = {
  fontWeight: 400,
  fontSize: "clamp(72px, 10vw, 160px)",
  lineHeight: "90%",
  letterSpacing: "-0.03em",
};

const MarqueeItem = ({ label }: { label: string }) => (
  <div className="flex items-center max-md:gap-[16px] md:gap-8 max-md:px-[12px] md:px-6 shrink-0">
    <h2
      className="font-[family-name:var(--font-bebas)] text-[#161616] m-0 whitespace-nowrap"
      style={textStyle}
    >
      {label}
    </h2>
    <div className="max-md:w-[72px] md:w-[160px] shrink-0">
      <Image
        src="/images/logosvg.svg"
        alt="Owl Logo"
        width={160}
        height={160}
        className="w-full h-auto object-contain brightness-0"
      />
    </div>
  </div>
);

export function AboutBanners() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="w-full bg-[#FFF1EB] overflow-hidden relative flex flex-col items-center justify-center max-md:h-[320px] md:h-[618px] -mt-[2px]"
    >
      <div
        className="relative md:absolute top-1/2 left-1/2 w-full md:w-[1440px] h-full md:h-[618px]"
        style={{
          transform: 'translate(-50%, -50%)',
          transformOrigin: 'center center'
        }}
      >
        {/* Pink Band - Top: Unwanted Attention Blocked */}
        <div
          className="absolute max-md:top-[20px] md:top-[40px] max-md:w-[300%] md:w-[150%] max-md:left-[-100%] md:left-[-25%] bg-[#F80090] max-md:p-[16px] max-md:h-[110px] md:py-6 flex z-10 shadow-lg max-md:-rotate-[5deg] md:-rotate-[2deg]"
        >
          <div className="flex w-max items-center h-full animate-marquee-reverse">
            {[...Array(12)].map((_, i) => (
              <MarqueeItem key={i} label="Unwanted Attention Blocked" />
            ))}
          </div>
        </div>

        {/* Blue Band - Middle: LUCK ISN'T A STRATEGY */}
        <div
          className="absolute max-md:top-[100px] md:top-[180px] max-md:w-[300%] md:w-[150%] max-md:left-[-100%] md:left-[-25%] bg-[#0E8DFF] max-md:p-[16px] max-md:h-[110px] md:py-6 flex z-30 shadow-2xl rotate-[5deg]"
        >
          <div className="flex w-max items-center h-full animate-marquee">
            {[...Array(12)].map((_, i) => (
              <MarqueeItem key={i} label="LUCK ISN'T A STRATEGY" />
            ))}
          </div>
        </div>

        {/* Green Band - Bottom: YOUR MOM WOULD APPROVE */}
        <div
          className="absolute max-md:top-[180px] md:top-[330px] max-md:w-[300%] md:w-[150%] max-md:left-[-100%] md:left-[-25%] bg-[#03A781] max-md:p-[16px] max-md:h-[110px] md:py-6 flex z-20 shadow-lg max-md:-rotate-[5deg] md:-rotate-[2deg]"
        >
          <div className="flex w-max items-center h-full animate-marquee-reverse" style={{ animationDuration: '35s' }}>
            {[...Array(12)].map((_, i) => (
              <MarqueeItem key={i} label="YOUR MOM WOULD APPROVE" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
