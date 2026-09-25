"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

interface ShoppageHeroImage {
  id: number;
  src: string;
  alt: string;
  badge?: string;
  href: string;
}

const HERO_IMAGES: ShoppageHeroImage[] = [
  {
    id: 1,
    src: "/shoppagehero/111.webp",
    alt: "NAZR Night Out & Community",
    badge: "Always on you",
    href: "#bundle-pack",
  },
  {
    id: 2,
    src: "/shoppagehero/222.webp",
    alt: "NAZR On Me Pepper Spray",
    badge: "Discreet & Ready",
    href: "#on-me-spray",
  },
  {
    id: 3,
    src: "/shoppagehero/333.webp",
    alt: "NAZR Quick Clip Alarm",
    badge: "Instant Reach",
    href: "#bundle-pack",
  },
  {
    id: 4,
    src: "/shoppagehero/444.webp",
    alt: "NAZR Everyday Carry Kit",
    badge: "One tool, all our secrets",
    href: "#bundle-pack",
  },
  {
    id: 5,
    src: "/shoppagehero/555.webp",
    alt: "NAZR Safety Kit Box",
    badge: "Complete 360 Kit",
    href: "#bundle-pack",
  },
  {
    id: 6,
    src: "/shoppagehero/666.webp",
    alt: "NAZR Streetwear Apparel",
    badge: "Wear The Confidence",
    href: "#on-me-spray",
  },
];

// Repeating tracks for endless marquee sliding
const REPEATS = 7;
const TOTAL_CARDS = Array.from({ length: REPEATS }, () => HERO_IMAGES).flat();

export function ShopHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive layout: exactly 5 cards in view spanning the container edge-to-edge
  const [containerWidth, setContainerWidth] = useState(1376);

  // Initial index set to the 4th image (444.webp: "One tool, all our secrets") in the middle set
  const initialIndex = 3 * HERO_IMAGES.length + 3;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPaused, setIsPaused] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);

  // Track container width via ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        if (w > 0) setContainerWidth(w);
      }
    };
    updateWidth();

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Responsive layout: 3 cards in view on mobile (<640px), 5 cards on tablet/desktop (>=640px)
  const cardsInView = containerWidth < 640 ? 3 : 5;
  const gap = containerWidth >= 1024 ? 18 : containerWidth >= 768 ? 14 : 10;
  const cardWidth = Math.max(
    80,
    Math.floor((containerWidth - (cardsInView - 1) * gap) / cardsInView)
  );

  // Marquee auto-sliding: advances every 3.2 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Seamless infinite loop normalization
  useEffect(() => {
    if (currentIndex >= (REPEATS - 2) * HERO_IMAGES.length) {
      const timer = setTimeout(() => {
        setEnableTransition(false);
        setCurrentIndex((prev) => prev - 2 * HERO_IMAGES.length);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setEnableTransition(true);
          });
        });
      }, 650);
      return () => clearTimeout(timer);
    } else if (currentIndex < HERO_IMAGES.length) {
      const timer = setTimeout(() => {
        setEnableTransition(false);
        setCurrentIndex((prev) => prev + 2 * HERO_IMAGES.length);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setEnableTransition(true);
          });
        });
      }, 650);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // Which of the 6 images is currently in the center/longer position
  const activeImageIndex =
    ((currentIndex % HERO_IMAGES.length) + HERO_IMAGES.length) %
    HERO_IMAGES.length;

  const touchStartX = useRef<number | null>(null);

  // Touch event handlers for mobile gesture navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setCurrentIndex((prev) => prev - 1);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  // Precise offset so the card at `currentIndex` is dead-center
  const translateX =
    containerWidth / 2 -
    (currentIndex * (cardWidth + gap) + cardWidth / 2);

  return (
    <section className="relative w-full min-h-[calc(100dvh-60px)] md:min-h-[calc(100vh-80px)] bg-[#5A002F] text-[#FFF9FC] overflow-hidden select-none flex flex-col justify-between">
      {/* Background Images Layer: Dynamically matches the active/longer card with a smooth fade */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {HERO_IMAGES.map((img, idx) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeImageIndex ? "opacity-60" : "opacity-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={idx === 3}
              className="object-cover object-center mix-blend-luminosity brightness-105 contrast-110 scale-105 transition-transform duration-1000"
            />
          </div>
        ))}
        {/* Transparent Soft Duotone Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#5A002F]/55 via-[#5A002F]/40 to-[#430023]/70" />
      </div>

      {/* Main Content Area: Fills the screen with balanced top, middle, and bottom sections */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-[16px] sm:px-[24px] md:px-[32px] pt-4 pb-6 sm:pt-6 sm:pb-8 md:pt-10 md:pb-10 flex flex-col justify-between flex-1 gap-[12px] sm:gap-[16px] md:gap-[20px]">
        {/* Headline Block */}
        <div className="flex flex-col items-start max-w-4xl">
          <h1
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              fontWeight: 400,
              lineHeight: "92%",
              letterSpacing: "-0.035em",
              color: "#FFF9FC",
            }}
            className="text-[38px] sm:text-[56px] md:text-[76px] uppercase drop-shadow-sm mb-1"
          >
            STARE BACK,<br />
            FULLY EQUIPPED.
          </h1>
        </div>

        {/* Metadata Strip Bar */}
        <div className="w-full pt-2 pb-1.5 border-t border-[#FFF9FC]/15 flex flex-wrap items-center justify-between gap-y-1.5 text-[9.5px] sm:text-[10.5px] md:text-[11px] font-mono tracking-[0.14em] uppercase text-[#FFF9FC]/75">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <span>FROM ₹333</span>
            <span>
              BUNDLE <span className="line-through text-[#FFF9FC]/40 mr-1">₹1,554</span> ₹999
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 md:gap-10 text-[9px] sm:text-[10px] md:text-[11px]">
            <span>GLOWS IN THE DARK</span>
            <span>MADE IN INDIA</span>
          </div>
        </div>

        {/* 5-In-View Carousel Container (with middle card longer from bottom, fixed container height so no shift) */}
        <div
          ref={containerRef}
          className="relative w-full h-[255px] sm:h-[315px] md:h-[415px] lg:h-[475px] xl:h-[515px] overflow-hidden flex items-start pt-1 cursor-grab active:cursor-grabbing my-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex items-start"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: enableTransition
                ? "transform 650ms cubic-bezier(0.22, 1, 0.36, 1)"
                : "none",
              gap: `${gap}px`,
            }}
          >
            {TOTAL_CARDS.map((card, index) => {
              const isCenter = index === currentIndex;

              return (
                <div
                  key={`${card.id}-${index}`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 4500);
                  }}
                  style={{
                    width: `${cardWidth}px`,
                  }}
                  className={`relative flex-shrink-0 rounded-[14px] sm:rounded-[18px] md:rounded-[24px] overflow-hidden bg-[#2A0016]/90 border transition-all duration-600 ease-out cursor-pointer select-none group ${
                    isCenter
                      ? "h-[250px] sm:h-[310px] md:h-[410px] lg:h-[470px] xl:h-[510px] border-white/35 shadow-2xl z-20"
                      : "h-[200px] sm:h-[250px] md:h-[330px] lg:h-[380px] xl:h-[400px] border-white/10 hover:border-white/25 shadow-lg opacity-85 hover:opacity-100 z-10"
                  }`}
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 640px) 130px, (max-width: 1024px) 210px, 260px"
                    priority={Math.abs(index - currentIndex) <= 2}
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Action Row */}
        <div className="w-full pt-3 sm:pt-4 md:pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 z-20">
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="#bundle-pack"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#090507",
                  background: "#FFF9FC",
                }}
                className="px-4 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-[11px] rounded-full hover:bg-white active:scale-95 transition-all shadow-sm font-medium"
              >
                Shop the bundle
              </Link>

              <Link
                href="#on-me-spray"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#FFF9FC",
                }}
                className="text-[11px] sm:text-[12px] hover:text-white underline-offset-4 hover:underline transition-colors"
              >
                See each tool
              </Link>
            </div>

            <div
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                lineHeight: "150%",
                letterSpacing: "0.2px",
                color: "#F9DCE8",
              }}
              className="mt-0.5 flex flex-wrap items-center gap-x-2 sm:gap-x-2.5 text-[8.5px] sm:text-[9.5px] md:text-[10px] text-[#F9DCE8]/80 leading-normal font-sans"
            >
              <span className="inline-flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] inline-block shrink-0" />
                5-day delivery
              </span>
              <span className="text-[#F9DCE8]/40">/</span>
              <span>Discreet packaging</span>
              <span className="text-[#F9DCE8]/40">/</span>
              <span>Free shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
