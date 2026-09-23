"use client";

import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  theme: "dark" | "light";
}

// Exact review copy from home page (WhatWomenAreSaying) & user mockup
const ROW_ONE: Testimonial[] = [
  {
    quote: "Small, smart, discreet. Walk home without feeling alone.",
    author: "AAROHI D.",
    theme: "dark",
  },
  {
    quote: "Finally, a safety product I actually want to carry.",
    author: "PRIYANSHI M.",
    theme: "light",
  },
  {
    quote: "Tiny product. Huge peace of mind.",
    author: "SAKSHI G.",
    theme: "dark",
  },
  {
    quote: "Very useful app devised for women",
    author: "PRANALI P.",
    theme: "light",
  },
];

const ROW_TWO: Testimonial[] = [
  {
    quote: "Discreet, clear, and genuinely useful. It lives in every going-out bag.",
    author: "MEERA S.",
    theme: "light",
  },
  {
    quote: "The kind of gift that says I've got your back.",
    author: "KAVYA K.",
    theme: "dark",
  },
  {
    quote: "Need for today",
    author: "KRISHA M.",
    theme: "light",
  },
  {
    quote: "4.95/5 from our first college workshop Jai Hind College",
    author: "AAROHI D.",
    theme: "dark",
  },
];

export function WomenWhoStareBack() {
  return (
    <section className="w-full bg-[#FF0E97] text-[#161616] pt-14 sm:pt-18 md:pt-20 pb-12 sm:pb-16 flex flex-col items-center justify-center relative overflow-hidden select-none border-b border-black">
      {/* Top Rating Pill Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#8A0050] text-white mb-5 sm:mb-7 select-none shadow-xs">
        <div className="flex items-center gap-0.5 text-white">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-[12px] sm:w-[13px] h-[12px] sm:h-[13px] fill-current" />
          ))}
        </div>
        <span className="font-[family-name:var(--font-bebas)] text-[13px] sm:text-[15px] tracking-wider uppercase text-white/95">
          [4.7] / 5 FROM [60] VERIFIED REVIEWS
        </span>
      </div>

      {/* Main Bold Headline: WOMEN WHO (white) & STARE BACK. (black) */}
      <h2 className="font-[family-name:var(--font-bebas)] text-[56px] sm:text-[78px] md:text-[98px] lg:text-[114px] font-normal leading-[0.88] tracking-[-0.03em] uppercase text-center max-w-[950px] mb-4 px-4 select-none">
        <span className="text-white block">WOMEN WHO</span>
        <span className="text-[#161616] block">STARE BACK.</span>
      </h2>

      {/* Subtitle */}
      <p
        className="text-white text-center max-w-[640px] mb-10 sm:mb-12 px-4"
        style={{
          fontFamily: "var(--font-inter), 'Inter', sans-serif",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "28px",
          letterSpacing: "0px",
          textAlign: "center",
          verticalAlign: "middle",
        }}
      >
        Unfiltered feedback from women navigating late commutes,<br className="hidden sm:inline" /> club nights, and everyday transit across India.
      </p>

      {/* Marquee Pill Stream — 100% Edge-to-Edge with Zero Horizontal Constraints */}
      <div className="w-full flex flex-col gap-4 sm:gap-5 overflow-hidden py-1">
        {/* Row 1 - Leftward Marquee */}
        <div className="flex gap-4 sm:gap-6 animate-marquee-row1 hover:[animation-play-state:paused] w-max">
          {[...ROW_ONE, ...ROW_ONE, ...ROW_ONE].map((item, idx) => (
            <PillQuote key={idx} testimonial={item} />
          ))}
        </div>

        {/* Row 2 - Rightward Marquee */}
        <div className="flex gap-4 sm:gap-6 animate-marquee-row2 hover:[animation-play-state:paused] w-max">
          {[...ROW_TWO, ...ROW_TWO, ...ROW_TWO].map((item, idx) => (
            <PillQuote key={idx} testimonial={item} />
          ))}
        </div>
      </div>

      {/* Bottom CTA Button: SHOP NAZR -> */}
      <div className="mt-10 sm:mt-12 flex justify-center px-4">
        <Link
          href="#on-me-spray"
          className="inline-flex items-center gap-2.5 bg-[#161616] hover:bg-black active:scale-95 text-white px-8 sm:px-9 py-3.5 rounded-full font-['Inter',_sans-serif] font-bold text-[13px] sm:text-[14px] uppercase tracking-wider shadow-md transition-all cursor-pointer"
        >
          <span>SHOP NAZR</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </Link>
      </div>

      {/* Infinite Smooth Scrolling CSS */}
      <style jsx>{`
        @keyframes marquee1 {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-row1 {
          animation: marquee1 32s linear infinite;
        }
        .animate-marquee-row2 {
          animation: marquee2 34s linear infinite;
        }
      `}</style>
    </section>
  );
}

function PillQuote({ testimonial }: { testimonial: Testimonial }) {
  const isDark = testimonial.theme === "dark";

  return (
    <div
      className={`shrink-0 flex items-center gap-4 sm:gap-6 px-7 sm:px-9 py-4 sm:py-4.5 rounded-full transition-transform hover:scale-[1.02] shadow-sm ${
        isDark
          ? "bg-[#161616] text-white"
          : "bg-white text-[#161616]"
      }`}
    >
      <span className="font-['Inter',_sans-serif] text-[15.5px] sm:text-[17px] md:text-[18px] font-normal leading-snug whitespace-nowrap">
        &ldquo;{testimonial.quote}&rdquo;
      </span>
      <span
        className={`text-[11px] sm:text-[12px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider shrink-0 ${
          isDark
            ? "bg-[#382C38] text-[#E5BFDF]"
            : "bg-[#FF0E97] text-white"
        }`}
      >
        {testimonial.author}
      </span>
    </div>
  );
}
