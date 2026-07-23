"use client";

import Image from "next/image";
import { WhyNazrCreation } from "./WhyNazrCreation";

export function WhyNazrExistsIntro() {
  return (
    <>
      {/* Mobile Layout (md:hidden) - Exact Match for Reference Image 2 alignment & spacing */}
      <div className="md:hidden w-full flex flex-col items-center justify-center px-6 pt-10 pb-16 z-10 relative text-center overflow-hidden">
        {/* Mobile Top-Left Hand */}
        <div
          className="absolute top-[75px] w-[130px] h-[130px] pointer-events-none z-0"
          style={{ left: "-30px", rotate: "30deg" } as React.CSSProperties}
        >
          <Image
            src="/images/lefthand.png"
            alt="Left Hand"
            fill
            className="object-contain object-top-left"
            priority
          />
        </div>

        {/* Mobile Bottom-Right Hand */}
        <div
          className="absolute right-[-22] bottom-[210px] w-[130px] h-[130px] pointer-events-none z-0"
          style={{ rotate: "42.31deg" } as React.CSSProperties}
        >
          <Image
            src="/images/righthand.png"
            alt="Right Hand"
            fill
            className="object-contain object-bottom-right"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] uppercase text-[56px] leading-[88%] tracking-[-0.02em] text-center font-normal relative z-10">
          WHY NAZR<br />EXISTS
        </h1>

        {/* Center Hands + Coin Animation Graphic */}
        <div className="relative z-10 my-4">
          <WhyNazrCreation />
        </div>

        {/* Paragraph Text Below Graphic */}
        <div className="mt-20 pt-2 pb-8 flex flex-col items-center max-w-[340px] w-full relative z-10">
          <p
            className="text-[#161616] uppercase font-semibold leading-[135%] text-[14px] m-0 text-center tracking-[-0.02em]"
            style={{
              fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
            }}
          >
            We believe preparedness should be part of everyday life, not an afterthought. That's why we're building an integrated ecosystem designed around the way women already move through the world.
          </p>
        </div>
      </div>

      {/* Desktop / Laptop Layout (hidden md:flex) */}
      <div className="hidden md:flex w-full flex-col items-center justify-center px-0 pt-[40px] pb-10 z-10 relative text-center">
        {/* Title */}
        <h1
          className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] uppercase text-[120px] leading-[90%] tracking-[-0.03em] whitespace-nowrap px-4"
          style={{
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          WHY NAZR EXISTS
        </h1>

        {/* Paragraph Text ABOVE Graphic */}
        <div className="mt-[28px] mb-8 flex flex-col items-center max-w-[850px] w-full px-6">
          <p
            className="text-[#161616] uppercase font-semibold leading-[110%] text-[32px] m-0"
            style={{
              fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            We believe preparedness should be part of everyday life, not an afterthought. That's why we're building an integrated ecosystem designed around the way women already move through the world.
          </p>
        </div>

        {/* Hands + Coin Graphic BELOW Paragraph (Extends edge-to-edge) */}
        <WhyNazrCreation />
      </div>
    </>
  );
}
