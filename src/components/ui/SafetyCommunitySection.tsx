"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollRevealText } from "./ScrollRevealText";

const cardsData = [
  {
    id: 1,
    badge: "/images/1.svg",
    bgImage: "/images/COMMUNITY%20STORIES.svg",
    topic: "COMMUNITY STORIES",
    handle: "@NAZR.360",
    description:
      "Hear from the women building a culture of preparedness through everyday habits, shared experiences, and real conversations.",
    link: "/blog",
    buttonText: "Read Their Stories"
  },
  {
    id: 2,
    badge: "/images/2.svg",
    bgImage: "/images/EVENTS.svg",
    topic: "EVENTS",
    handle: "@NAZR.360",
    description:
      "From workshops and campus sessions to launches and meetups, see what's happening across the NAZR community.",
    link: "/blog",
    buttonText: "View All Events"
  },
  {
    id: 3,
    badge: "/images/3.svg",
    bgImage: "/images/FIELD%20NOTES.svg",
    topic: "FIELD NOTES",
    handle: "@NAZR.360",
    description:
      "Explore the research, psychology, observations, and everyday behaviours shaping the future of personal safety.",
    link: "/blog",
    buttonText: "Explore Field Notes"
  },
  {
    id: 4,
    badge: "/images/4.svg",
    bgImage: "/images/JOIN%20THE%20COMMUNITY.svg",
    topic: "JOIN THE COMMUNITY",
    handle: "@NAZR.360",
    description:
      "Follow our journey, share your story, stay updated, and help build a safer future together.",
    link: "/blog",
    buttonText: "Join NAZR"
  },
];

export function SafetyCommunitySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const mobileCardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const scrollToCard = (index: number) => {
    const cardEl = mobileCardRefs.current[index];
    const container = mobileScrollRef.current;
    if (cardEl && container) {
      const targetLeft = cardEl.offsetLeft - (container.clientWidth - cardEl.clientWidth) / 2;
      container.scrollTo({
        left: targetLeft,
        behavior: "smooth",
      });
    }
  };

  const nextCard = () => {
    const nextIdx = (activeIndex + 1) % cardsData.length;
    setActiveIndex(nextIdx);
    scrollToCard(nextIdx);
  };

  const prevCard = () => {
    const prevIdx = (activeIndex - 1 + cardsData.length) % cardsData.length;
    setActiveIndex(prevIdx);
    scrollToCard(prevIdx);
  };

  return (
    <div className="w-full bg-[#161616] text-white flex flex-col items-center relative z-20 overflow-hidden">
      {/* Carousel Section (Why NAZR Exists) */}
      <section className="w-full flex justify-center items-center pt-14 md:pt-28 pb-12 md:pb-20 relative overflow-hidden">
        <div className="w-full max-w-[1440px] px-4 md:px-8 flex flex-col justify-center relative md:h-full">

          {/* ================= MOBILE LAYOUT (Matching Image 3) ================= */}
          <div className="md:hidden w-full flex flex-col items-center mb-4">
            {/* Heading — Centered */}
            <h2 className="font-[family-name:var(--font-bebas)] font-normal text-[46px] leading-[90%] tracking-[-0.03em] text-[#FFF9EB] uppercase text-center m-0 mb-3">
              BEYOND THE ECOSYSTEM
            </h2>

            {/* Subtitle — Centered */}
            <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[140%] tracking-[-0.03em] text-[#FFF9EB] max-w-[340px] text-center m-0 mb-6">
              The products are only the beginning. Discover the people, conversations, and experiences shaping the NAZR ecosystem.
            </p>

            {/* Mobile Carousel Track (Full 4 Cards Horizontal Slide Track) */}
            <div
              ref={mobileScrollRef}
              onScroll={() => {
                const container = mobileScrollRef.current;
                if (!container) return;
                const center = container.scrollLeft + container.clientWidth / 2;
                let closestIdx = activeIndex;
                let minDiff = Infinity;
                cardsData.forEach((_, idx) => {
                  const el = mobileCardRefs.current[idx];
                  if (el) {
                    const elCenter = el.offsetLeft + el.clientWidth / 2;
                    const diff = Math.abs(center - elCenter);
                    if (diff < minDiff) {
                      minDiff = diff;
                      closestIdx = idx;
                    }
                  }
                });
                if (closestIdx !== activeIndex) {
                  setActiveIndex(closestIdx);
                }
              }}
              className="w-full flex flex-row overflow-x-auto snap-x snap-mandatory px-4 gap-4 pb-4 mb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {cardsData.map((card, idx) => {
                const isCurrent = idx === activeIndex;
                return (
                  <div
                    key={card.id}
                    ref={(el) => { mobileCardRefs.current[idx] = el; }}
                    onClick={() => {
                      setActiveIndex(idx);
                      scrollToCard(idx);
                    }}
                    className={`w-[85vw] max-w-[330px] h-[400px] shrink-0 snap-center rounded-[20px] overflow-hidden border ${isCurrent ? 'border-white/30 scale-[1.0]' : 'border-white/10 opacity-70 scale-[0.96]'} relative shadow-2xl transition-all duration-300 cursor-pointer`}
                  >
                    {/* Background Image */}
                    <img
                      src={card.bgImage}
                      alt={card.topic}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 pointer-events-none z-10" />

                    {/* Card Content */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-between z-20">
                      {/* Top Badge & Topic Title */}
                      <div className="flex flex-col items-start gap-2">
                        <Image unoptimized src={card.badge} width={34} height={34} alt={`Step ${card.id}`} />
                        <h3 className="font-[family-name:var(--font-bebas)] font-normal text-[#FFF9EB] text-[32.53px] leading-[130%] tracking-normal m-0">
                          {card.topic}
                        </h3>
                      </div>

                      {/* Bottom Info */}
                      <div className="flex flex-col items-start max-w-[280px]">
                        <p className="font-[family-name:var(--font-inter)] font-normal text-[#FFF9EB]/90 text-[15px] leading-[140%] tracking-[-0.03em] m-0 mb-4">
                          {card.description}
                        </p>
                        <button
                          type="button"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center bg-[#FF0E97] text-white font-[family-name:var(--font-inter)] text-[15px] leading-[150%] tracking-[-0.04em] shadow-lg whitespace-nowrap cursor-default"
                          style={{
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontFamily: "Inter, var(--font-inter), sans-serif",
                            minWidth: "110px",
                            height: "36px",
                            borderRadius: "3.92px",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            borderWidth: "0.98px",
                            borderColor: "#FF0E97",
                            gap: "7.83px",
                          }}
                        >
                          {card.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

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
              {/* Heading — single line on desktop/laptop */}
              <h2
                className="font-[family-name:var(--font-bebas)] font-normal text-[46px] md:text-[80px] leading-[90%] tracking-[-0.03em] text-[#FFF9EB] uppercase m-0 text-left whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  lineHeight: "90%",
                  letterSpacing: "-0.03em",
                }}
              >
                BEYOND THE ECOSYSTEM
              </h2>

              {/* Subtitle row + nav buttons on right */}
              <div className="w-full flex items-end justify-between gap-4">
                <p
                  className="font-['Inter',_sans-serif] font-normal text-[16px] md:text-[18px] leading-[140%] tracking-[-0.03em] text-[#FFF9EB] max-w-[680px] text-left m-0"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    lineHeight: "140%",
                    letterSpacing: "-0.03em",
                  }}
                >
                  The products are only the beginning. Discover the people, conversations,<br className="hidden md:inline" />
                  and experiences shaping the NAZR ecosystem.
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
            <div className="w-full flex flex-row gap-4 justify-between items-stretch h-[480px]">
              {cardsData.map((card, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.div
                    key={card.id}
                    onClick={() => setActiveIndex(index)}
                    layout
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className={`relative rounded-[20px] overflow-hidden cursor-pointer border border-white/10 ${isActive
                      ? "flex-[2.2] min-w-0"
                      : "flex-1 min-w-0"
                      } h-full`}
                  >
                    {/* Background Image */}
                    <img
                      src={card.bgImage}
                      alt={card.topic}
                      className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[540px] lg:w-[600px] max-w-none object-cover object-center transition-transform duration-700 hover:scale-105"
                    />

                    {/* Dark Overlay */}
                    <div className={`absolute inset-0 transition-opacity duration-300 ${isActive
                      ? "bg-gradient-to-t from-black/90 via-black/40 to-black/20"
                      : "bg-gradient-to-t from-black/85 via-black/30 to-black/40"
                      }`} />

                    {/* Card Content: Active State */}
                    {isActive ? (
                      <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between z-10">
                        {/* Top Badge & Topic Title */}
                        <div className="flex flex-col items-start gap-2">
                          <Image unoptimized src={card.badge} width={34} height={34} alt={`Step ${card.id}`} />
                          <h3 className="font-[family-name:var(--font-bebas)] font-normal text-[#FFF9EB] text-[32.53px] leading-[150%] tracking-normal m-0">
                            {card.topic}
                          </h3>
                        </div>

                        {/* Bottom Info */}
                        <div className="flex flex-col items-start max-w-[400px]">
                          <motion.p
                            initial={{ opacity: 0, scale: 0.9, y: 6 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                            className="font-[family-name:var(--font-inter)] font-normal text-[#FFF9EB]/90 text-[16px] leading-[140%] tracking-[-0.03em] m-0 mb-4 origin-left"
                          >
                            {card.description}
                          </motion.p>
                          <button
                            type="button"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center justify-center bg-[#FF0E97] text-white font-[family-name:var(--font-inter)] text-[16px] leading-[150%] tracking-[-0.04em] shadow-lg whitespace-nowrap cursor-default"
                            style={{
                              fontWeight: 400,
                              fontStyle: 'normal',
                              fontFamily: "Inter, var(--font-inter), sans-serif",
                              minWidth: "110px",
                              height: "36px",
                              borderRadius: "3.92px",
                              paddingLeft: "20px",
                              paddingRight: "20px",
                              paddingTop: "12px",
                              paddingBottom: "12px",
                              borderWidth: "0.98px",
                              borderColor: "#FF0E97",
                              gap: "7.83px",
                            }}
                          >
                            {card.buttonText}
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Card Content: Collapsed State */
                      <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between z-10">
                        {/* Top Badge & Topic Title */}
                        <div className="flex flex-col items-start gap-1.5">
                          <Image unoptimized src={card.badge} width={30} height={30} alt={`Step ${card.id}`} />
                          <span className="font-[family-name:var(--font-bebas)] font-normal text-[#FFF9EB] text-[24px] md:text-[32.53px] leading-[150%] tracking-normal">
                            {card.topic}
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
