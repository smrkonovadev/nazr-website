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
      {/* 1. TOP BLOCK: Text + Stickers Section */}
      <section className="w-full flex justify-center items-center pt-10 md:pt-14 pb-4 md:pb-6 relative overflow-visible">
        {/* Mobile View */}
        <div className="md:hidden w-full mx-auto flex flex-col gap-6 z-10 px-4 text-center">
          <ScrollRevealText
            text={"WOMEN HAVE ALWAYS BUILT SAFETY THROUGH SHARED INSTINCTS, TRUSTED CIRCLES, AND LOOKING OUT FOR ONE ANOTHER. NAZR BUILDS ON THAT FOUNDATION THROUGH THOUGHTFUL TECHNOLOGY, EVERYDAY ESSENTIALS, AND A COMMUNITY THAT BELIEVES PEACE OF MIND IS SOMETHING WE CREATE TOGETHER."}
            className="m-0 font-[family-name:var(--font-bebas)] text-[28px] sm:text-[32px] text-center max-w-[340px] sm:max-w-[380px] mx-auto uppercase"
            style={{ lineHeight: '115%', letterSpacing: '-0.01em', fontWeight: 400 }}
            emptyColor="#333333"
          />
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex relative w-[1220px] h-[466.28px] justify-between items-start">
          {/* Text Box */}
          <div className="flex flex-col relative z-10" style={{ width: '599px', height: '356px', paddingTop: '40px', gap: '10px' }}>
            <ScrollRevealText
              text={"Women have always built safety through shared instincts, trusted circles, and looking out for one another. NAZR builds on that foundation through thoughtful technology, everyday essentials, and a community that believes peace of mind is something we create together."}
              className="m-0 font-[family-name:var(--font-bebas)] text-[#FFF9EB] text-left"
              style={{ fontSize: '40px', lineHeight: '120%', letterSpacing: '-0.01em', fontWeight: 400 }}
              emptyColor="#333333"
            />
          </div>

          {/* Sticker Group */}
          <div className="absolute z-10" style={{ width: "619.07px", height: "559.54px", top: "0px", left: "690px", overflow: "visible" }}>
            {/* Image 1 — Dancer */}
            <div className="absolute" style={{ width: "429.26px", height: "400.99px", top: "-55.93px", left: "-143px", transform: "rotate(-3.2deg)", transformOrigin: "center center" }}>
              <Image unoptimized quality={100} src="/images/new22.webp" alt="Dancer sticker" fill className="object-contain" />
            </div>

            {/* Image 2 — Disco Ball */}
            <div className="absolute" style={{ width: "300.12px", height: "300.18px", top: "210px", left: "-30px", transform: "rotate(5.59deg)", transformOrigin: "center center" }}>
              <Image unoptimized quality={100} src="/images/new25.webp" alt="Disco ball sticker" fill className="object-contain" />
            </div>

            {/* Image 3 — Headphones */}
            <div className="absolute" style={{ width: "300.56px", height: "300.91px", top: "-35px", left: "175px", transform: "rotate(-5.59deg)", transformOrigin: "center center" }}>
              <Image unoptimized quality={100} src="/images/new23.webp" alt="Headphones sticker" fill className="object-contain" />
            </div>

            {/* Image 4 — Lips */}
            <div className="absolute" style={{ width: "350.94px", height: "350.98px", top: "140px", left: "170px", transform: "rotate(-1.35deg)", transformOrigin: "center center" }}>
              <Image unoptimized quality={100} src="/images/new24.webp" alt="Lips star sticker" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. BOTTOM BLOCK: Carousel Section (Why NAZR Exists) */}
      <section className="w-full flex justify-center items-center pt-2 md:pt-4 pb-12 md:pb-20 relative overflow-hidden">
        <div className="w-full max-w-[1280px] px-4 md:px-8 flex flex-col justify-center relative md:h-full">
          {/* Header Row */}
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between mb-5 md:mb-6 gap-4">
            <div>
              <h2 className="font-[family-name:var(--font-bebas)] text-[40px] sm:text-[56px] md:text-[68px] leading-[0.9] tracking-[-0.02em] text-white uppercase m-0">
                WHY NAZR EXISTS.<br />IN THEIR WORDS.
              </h2>
              <p className="font-['Inter',_sans-serif] font-normal text-[14px] sm:text-[16px] text-[#A0A0A0] max-w-[520px] mt-2.5 leading-[1.4] tracking-[-0.02em]">
                Real experiences from women who believe safety should be proactive, accessible, and shared.
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-3 self-end md:self-auto">
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

          {/* Carousel / Cards Track */}
          <div className="w-full flex flex-col md:flex-row gap-4 justify-between items-stretch min-h-[400px] md:h-[420px]">
            {cardsData.map((card, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.div
                  key={card.id}
                  onClick={() => setActiveIndex(index)}
                  layout
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className={`relative rounded-[20px] overflow-hidden cursor-pointer border border-white/10 ${
                    isActive
                      ? "w-full md:w-[480px] lg:w-[510px] flex-shrink-0"
                      : "w-full md:w-[200px] lg:w-[215px] flex-shrink-0"
                  } h-[400px] md:h-full`}
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
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    isActive
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
      </section>
    </div>
  );
}
