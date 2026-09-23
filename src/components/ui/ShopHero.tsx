"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroCard {
  id: number;
  label: string;
  sublabel?: string;
  image: string;
  badge?: string;
  href: string;
  isProduct?: boolean;
}

const CARDS: HeroCard[] = [
  {
    id: 1,
    label: "ON ME",
    sublabel: "Safety Pepper Spray",
    image: "/images/shop/shop-1.png",
    href: "#on-me-spray",
    isProduct: true,
  },
  {
    id: 2,
    label: "SIP CHECK",
    sublabel: "Drink Spike Detector",
    image: "/images/shop/shop-3.png",
    href: "#sip-check",
    isProduct: true,
  },
  {
    id: 3,
    label: "THE BUNDLE",
    sublabel: "Complete 360 Kit",
    image: "/images/shop/shop-2.png",
    href: "#bundle-pack",
    isProduct: true,
  },
  {
    id: 4,
    label: "Everyday Carry",
    image: "/images/shop/hero-carousel/card-4.webp",
    badge: "One tool, all our secrets",
    href: "#bundle-pack",
  },
  {
    id: 5,
    label: "Safety Kit Box",
    image: "/images/shop/hero-carousel/card-5.webp",
    href: "#bundle-pack",
  },
  {
    id: 6,
    label: "NAZR Streetwear",
    image: "/images/shop/hero-carousel/card-6.webp",
    href: "#on-me-spray",
  },
  {
    id: 7,
    label: "Night Out Glow",
    image: "/images/shop/hero-carousel/card-7.webp",
    href: "#bundle-pack",
  },
];

export function ShopHero() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(4); // Default 04 as shown in user reference

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;

    const scrollRatio = scrollLeft / maxScroll;
    const index = Math.min(
      CARDS.length,
      Math.max(1, Math.round(scrollRatio * (CARDS.length - 1)) + 1)
    );
    setActiveIndex(index);
  };

  const scrollPrev = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -220, behavior: "smooth" });
  };

  const scrollNext = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 220, behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-[#5A002F] text-[#FFF9FC] overflow-hidden select-none">
      {/* Background Hands Image with Wine Duotone / Luminosity Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/hands.png"
          alt="NAZR Stare Back background"
          fill
          priority
          className="object-cover object-center opacity-25 mix-blend-luminosity brightness-90 contrast-125"
        />
        {/* Soft Duotone Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#5A002F]/85 via-[#5A002F]/70 to-[#430023]/95" />
      </div>

      {/* Main Content Area: padding 32px, gap 24px, max-w 1440 */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-[32px] pt-10 pb-10 md:pt-14 md:pb-12 flex flex-col gap-[24px]">
        
        {/* Eyebrow & Headline Block */}
        <div className="flex flex-col items-start max-w-4xl">
          {/* Eyebrow */}
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: "11px",
              lineHeight: "100%",
              letterSpacing: "0.8em",
              color: "#FFF9FC",
              textTransform: "uppercase",
            }}
            className="mb-3 md:mb-4 block"
          >
            ON ME · SIP CHECK · THE BUNDLE
          </span>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontWeight: 400,
              lineHeight: "93%",
              letterSpacing: "-0.035em",
              color: "#FFF9FC",
            }}
            className="text-[46px] sm:text-[62px] md:text-[76px] uppercase drop-shadow-sm mb-3 md:mb-4"
          >
            STARE BACK,<br />
            FULLY EQUIPPED.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "19px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#F9DCE8",
            }}
            className="tracking-normal"
          >
            Safety tools women actually want to carry.
          </p>
        </div>

        {/* Metadata Strip Bar */}
        <div className="w-full pt-3 pb-2 border-t border-[#FFF9FC]/15 flex flex-wrap items-center justify-between gap-y-2 text-[11px] font-mono tracking-[0.16em] uppercase text-[#FFF9FC]/75">
          <div className="flex items-center gap-6 md:gap-10">
            <span>FROM ₹333</span>
            <span>
              BUNDLE <span className="line-through text-[#FFF9FC]/40 mr-1">₹1,554</span> ₹999
            </span>
          </div>

          <div className="flex items-center gap-6 md:gap-10 text-[10px] md:text-[11px]">
            <span>GLOWS IN THE DARK</span>
            <span>MADE IN INDIA</span>
          </div>
        </div>

        {/* Horizontal Carousel with 7 Cards */}
        <div className="relative w-full">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-[10px] md:gap-[14px] overflow-x-auto scrollbar-none scroll-smooth pb-2 pt-1 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {CARDS.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="group relative flex-shrink-0 w-[135px] sm:w-[160px] md:w-[180px] aspect-[105/153] rounded-[14px] md:rounded-[18px] overflow-hidden bg-[#2A0016]/90 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] shadow-xl snap-start cursor-pointer block"
              >
                {card.isProduct ? (
                  /* Cards 1, 2, 3: Placeholder products from public folder */
                  <div className="w-full h-full flex flex-col items-center justify-between p-3 bg-gradient-to-b from-[#3D021D]/80 to-[#220010]/95">
                    <div className="w-full flex justify-between items-center text-[9px] font-mono tracking-widest text-[#FFF9FC]/60">
                      <span>0{card.id}</span>
                      <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/10 text-[#FFF9FC]/80">
                        ESSENTIAL
                      </span>
                    </div>

                    <div className="relative w-[82%] aspect-square my-auto transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={card.image}
                        alt={card.label}
                        fill
                        className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
                      />
                    </div>

                    <div className="w-full text-center">
                      <p className="font-bebas text-[17px] tracking-wide text-[#FFF9FC] leading-tight">
                        {card.label}
                      </p>
                      {card.sublabel && (
                        <p className="text-[9px] font-sans text-[#F9DCE8]/70 truncate">
                          {card.sublabel}
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Lifestyle Mockup Cards (4-7) */
                  <div className="relative w-full h-full">
                    <Image
                      src={card.image}
                      alt={card.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Badge on Card 4 */}
                    {card.badge && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-max max-w-[92%] px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[9px] font-sans text-white tracking-tight shadow-md">
                        {card.badge}
                      </div>
                    )}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Control & Action Row */}
        <div className="w-full pt-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Left Action Buttons & Trust Copy */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-4">
              <Link
                href="#bundle-pack"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                  fontSize: "9px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#090507",
                  background: "#FFF9FC",
                }}
                className="px-4 py-2.5 rounded-full hover:bg-white active:scale-95 transition-all shadow-sm"
              >
                Shop the bundle
              </Link>

              <Link
                href="#on-me-spray"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                  fontSize: "11px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#FFF9FC",
                }}
                className="hover:text-white underline-offset-4 hover:underline transition-colors"
              >
                See each tool
              </Link>
            </div>

            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "9px",
                lineHeight: "150%",
                letterSpacing: "0%",
                color: "#F9DCE8",
              }}
              className="mt-1"
            >
              Delivery in 3 days · Free shipping · Secure checkout · Made in India
            </p>
          </div>

          {/* Center Slider Progress Bar: Centered horizontally on desktop */}
          <div className="w-full md:w-auto md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center pointer-events-none z-10">
            <div className="flex items-center gap-3 text-[12px] font-mono text-[#FFF9FC]/85 pointer-events-auto">
              <span>0{activeIndex}</span>
              <div className="w-36 sm:w-48 md:w-56 h-[1.5px] bg-[#FFF9FC]/25 relative rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FFF9FC] transition-all duration-300 rounded-full"
                  style={{ width: `${(activeIndex / CARDS.length) * 100}%` }}
                />
              </div>
              <span>0{CARDS.length}</span>
            </div>
          </div>

          {/* Right Circular Outline Prev/Next Buttons */}
          <div className="flex items-center gap-2 self-end md:self-auto z-10">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="w-[34px] h-[34px] rounded-full border border-[#FFF9FC]/50 flex items-center justify-center text-[#FFF9FC] hover:border-[#FFF9FC] hover:bg-white/10 active:scale-95 transition-all"
            >
              <ChevronLeft className="w-3.5 h-3.5 stroke-[1.5]" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next slide"
              className="w-[34px] h-[34px] rounded-full border border-[#FFF9FC]/50 flex items-center justify-center text-[#FFF9FC] hover:border-[#FFF9FC] hover:bg-white/10 active:scale-95 transition-all"
            >
              <ChevronRight className="w-3.5 h-3.5 stroke-[1.5]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
