"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollRevealText } from "./ScrollRevealText";

const cardsData = [
  {
    id: 1,
    badge: "/images/1.svg",
    bgImage: "/images/community2.webp",
    topic: "TOPIC ONE",
    handle: "@NAZR.360",
    description:
      "Compact, accessible, and designed to help you create the time and distance needed to get to safety. Doubles as a bag charm and glows in the dark for easy access when visibility is low.",
    link: "/shop",
  },
  {
    id: 2,
    badge: "/images/2.svg",
    bgImage: "/images/2ndfromleft.webp",
    topic: "TOPIC TWO",
    handle: "@NAZR.360",
    description:
      "Built with high-precision GPS tracking and instant 1-tap SOS alerts. Connects directly to your trusted circle for 24/7 protection whenever you need it.",
    link: "/shop",
  },
  {
    id: 3,
    badge: "/images/3.svg",
    bgImage: "/images/3rdimage.webp",
    topic: "TOPIC THREE",
    handle: "@NAZR.360",
    description:
      "Sip Check drink safety covers prevent drink tampering at parties and social events. Made from food-grade material for ultimate peace of mind.",
    link: "/shop",
  },
  {
    id: 4,
    badge: "/images/4.svg",
    bgImage: "/images/OUR4.webp",
    topic: "TOPIC FOUR",
    handle: "@NAZR.360",
    description:
      "Shield Mode creates a digital guardian layer for your daily commute. Auto check-ins and live location sharing keep you connected throughout your journey.",
    link: "/shop",
  },
];

export function SafetyCommunitySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % cardsData.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  return (
    <div className="w-full bg-[#161616] text-white flex flex-col items-center relative z-20 overflow-hidden">
      {/* Carousel Section (Why NAZR Exists) */}
      <section className="w-full flex justify-center items-center pt-12 md:pt-16 pb-12 md:pb-20 relative overflow-hidden">
        <div className="w-full max-w-[1280px] px-4 md:px-8 flex flex-col justify-center relative md:h-full">

          {/* ================= MOBILE LAYOUT (Matching Image 3) ================= */}
          <div className="md:hidden w-full flex flex-col items-center mb-4">
            {/* Heading — Centered */}
            <h2 className="font-[family-name:var(--font-bebas)] font-normal text-[46px] leading-[0.9] tracking-[-0.03em] text-white uppercase text-center m-0 mb-3">
              WHY NAZR EXISTS.<br />IN THEIR WORDS.
            </h2>

            {/* Subtitle — Centered */}
            <p className="font-['Inter',_sans-serif] font-normal text-[16px] text-[#FFF9EB] max-w-[340px] leading-[1.4] tracking-[-0.03em] text-center m-0 mb-6">
              Real experiences from women who believe safety should be proactive, accessible, and shared.
            </p>

            {/* Active Card Container */}
            {(() => {
              const card = cardsData[activeIndex];
              return (
                <div className="relative rounded-[20px] overflow-hidden border border-white/10 w-full max-w-[340px] h-[380px] mb-6 shadow-2xl">
                  {/* Background Image */}
                  <Image
                    unoptimized
                    quality={100}
                    src={card.bgImage}
                    alt={card.topic}
                    fill
                    className="object-cover"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />

                  {/* Card Content */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                    {/* Top Badge */}
                    <div className="flex items-center gap-3">
                      <Image unoptimized src={card.badge} width={34} height={34} alt={`Step ${card.id}`} />
                    </div>

                    {/* Bottom Info */}
                    <div className="flex flex-col items-start max-w-[300px]">
                      <h3 className="font-[family-name:var(--font-bebas)] text-white text-[32px] leading-none tracking-[-0.02em] m-0 mb-2">
                        {card.topic}
                      </h3>
                      <p className="font-['Inter',_sans-serif] text-white/90 text-[13px] leading-[1.35] tracking-[-0.02em] m-0 mb-4">
                        {card.description}
                      </p>
                      <a
                        href={card.link}
                        className="inline-flex items-center justify-center bg-[#FF0E97] hover:bg-[#e00b84] text-white font-semibold text-[13px] leading-none transition-all duration-300 shadow-lg whitespace-nowrap"
                        style={{
                          width: "110px",
                          height: "36px",
                          borderRadius: "3.92px",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          borderWidth: "0.98px",
                          borderColor: "#FF0E97",
                          gap: "7.83px",
                        }}
                      >
                        Get Yours
                      </a>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Navigation Arrows — Centered directly below card */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevCard}
                className="cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none"
                aria-label="Previous story"
              >
                <Image unoptimized src="/images/buttonl.svg" width={44} height={44} alt="Previous" className="w-[44px] h-[44px]" />
              </button>
              <button
                onClick={nextCard}
                className="cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none"
                aria-label="Next story"
              >
                <Image unoptimized src="/images/button r.svg" width={44} height={44} alt="Next" className="w-[44px] h-[44px]" />
              </button>
            </div>
          </div>

          {/* ================= DESKTOP LAYOUT (Hidden on Mobile) ================= */}
          <div className="hidden md:flex flex-col w-full">
            {/* Header Row — left-aligned heading, subtitle + nav buttons in same row */}
            <div className="w-full flex flex-col mb-6 md:mb-8 gap-3">
              {/* Heading — left-aligned */}
              <h2 className="font-[family-name:var(--font-bebas)] font-normal text-[48px] sm:text-[64px] md:text-[80px] leading-[0.9] tracking-[-0.03em] text-white uppercase m-0 text-left">
                WHY NAZR EXISTS.<br />IN THEIR WORDS.
              </h2>

              {/* Subtitle row + nav buttons on right */}
              <div className="w-full flex items-end justify-between gap-4">
                <p className="font-['Inter',_sans-serif] font-normal text-[18px] text-[#FFF9EB] max-w-[420px] leading-[1.4] tracking-[-0.03em] text-left m-0">
                  Real experiences from women who believe safety should be proactive, accessible, and shared.
                </p>

                {/* Navigation Controls — far right */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <button
                    onClick={prevCard}
                    className="cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none"
                    aria-label="Previous story"
                  >
                    <Image unoptimized src="/images/buttonl.svg" width={44} height={44} alt="Previous" className="w-[40px] h-[40px] md:w-[44px] md:h-[44px]" />
                  </button>
                  <button
                    onClick={nextCard}
                    className="cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none"
                    aria-label="Next story"
                  >
                    <Image unoptimized src="/images/button r.svg" width={44} height={44} alt="Next" className="w-[40px] h-[40px] md:w-[44px] md:h-[44px]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Carousel / Cards Track */}
            <div className="w-full flex flex-row gap-4 justify-between items-stretch h-[420px]">
              {cardsData.map((card, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.div
                    key={card.id}
                    onClick={() => setActiveIndex(index)}
                    layout
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className={`relative rounded-[20px] overflow-hidden cursor-pointer border border-white/10 ${isActive
                        ? "w-[480px] lg:w-[510px] flex-shrink-0"
                        : "w-[200px] lg:w-[215px] flex-shrink-0"
                      } h-full`}
                  >
                    {/* Background Image */}
                    <Image
                      unoptimized
                      quality={100}
                      src={card.bgImage}
                      alt={card.topic}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />

                    {/* Dark Overlay */}
                    <div className={`absolute inset-0 transition-opacity duration-300 ${isActive
                        ? "bg-gradient-to-t from-black/90 via-black/40 to-black/20"
                        : "bg-gradient-to-t from-black/85 via-black/30 to-black/40"
                      }`} />

                    {/* Card Content: Active State */}
                    {isActive ? (
                      <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between z-10">
                        {/* Top Badge */}
                        <div className="flex items-center gap-3">
                          <Image unoptimized src={card.badge} width={34} height={34} alt={`Step ${card.id}`} />
                        </div>

                        {/* Bottom Info */}
                        <div className="flex flex-col items-start max-w-[400px]">
                          <h3 className="font-[family-name:var(--font-bebas)] text-white text-[32px] md:text-[38px] leading-none tracking-[-0.02em] m-0 mb-2">
                            {card.topic}
                          </h3>
                          <p className="font-['Inter',_sans-serif] text-white/90 text-[13.5px] md:text-[14px] leading-[1.35] tracking-[-0.02em] m-0 mb-4">
                            {card.description}
                          </p>
                          <a
                            href={card.link}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center justify-center bg-[#FF0E97] hover:bg-[#e00b84] text-white font-semibold text-[13px] leading-none transition-all duration-300 shadow-lg whitespace-nowrap"
                            style={{
                              width: "110px",
                              height: "36px",
                              borderRadius: "3.92px",
                              paddingLeft: "20px",
                              paddingRight: "20px",
                              borderWidth: "0.98px",
                              borderColor: "#FF0E97",
                              gap: "7.83px",
                            }}
                          >
                            Get Yours
                          </a>
                        </div>
                      </div>
                    ) : (
                      /* Card Content: Collapsed State */
                      <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between z-10">
                        {/* Top Badge & Handle */}
                        <div className="flex items-center gap-2.5">
                          <Image unoptimized src={card.badge} width={30} height={30} alt={`Step ${card.id}`} />
                          <span className="font-[family-name:var(--font-bebas)] text-white text-[22px] md:text-[26px] leading-none tracking-[-0.02em]">
                            {card.handle}
                          </span>
                        </div>

                        {/* Bottom Plus Icon */}
                        <div className="self-start">
                          <Image
                            unoptimized
                            src="/images/plus.svg"
                            width={32}
                            height={32}
                            alt="Expand card"
                            className="w-[32px] h-[32px] transition-transform duration-300 hover:scale-110"
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Progress Bar */}
            <div className="w-full h-[4px] bg-white/20 rounded-full mt-5 md:mt-6 overflow-hidden">
              <div
                className="bg-[#FF0E97] h-full transition-all duration-500 ease-out rounded-full"
                style={{ width: `${((activeIndex + 1) / cardsData.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
