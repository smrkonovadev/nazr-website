"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const cardsData = [
  {
    id: 1,
    badge: "/images/1.svg",
    bgImage: "/images/COMMUNITYIMG1.webp",
    topic: "EVENTS",
    handle: "@NAZR.360",
    description:
      "Workshops, campus sessions, sparring nights and meetups.\nNext up: Delhi, 26 and 27 September.",
    link: "/events",
    buttonText: "See upcoming events",
  },
  {
    id: 2,
    badge: "/images/2.svg",
    bgImage: "/images/COMMUNITYIMG2.webp",
    topic: "COMMUNITY STORIES",
    handle: "@NAZR.360",
    description:
      "Real women on how they move through their cities, and what helps.",
    link: "/blog",
    buttonText: "Read Their Stories",
  },
  {
    id: 3,
    badge: "/images/3.svg",
    bgImage: "/images/FIELD%20NOTES.svg",
    topic: "FIELD NOTES",
    handle: "@NAZR.360",
    description:
      "Our notes on moving through the city: tips, conversations, and what we're learning.",
    link: "/blog",
    buttonText: "Read Field Notes",
  },
  {
    id: 4,
    badge: "/images/4.svg",
    bgImage: "/images/COMMUNITYIMG3.webp",
    topic: "JOIN THE COMMUNITY",
    handle: "@NAZR.360",
    description:
      "Events, drops and stories, straight to you. No spam.",
    link: "/blog",
    buttonText: "Read Field Notes",
  },
];

const SHOW_CARD_BUTTONS = true;

export function SafetyCommunitySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [communityInput, setCommunityInput] = useState("");
  const [communitySubmitted, setCommunitySubmitted] = useState(false);

  const handleCommunitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!communityInput.trim()) {
      window.location.href = "/blog";
      return;
    }
    setCommunitySubmitted(true);
    setTimeout(() => {
      setCommunitySubmitted(false);
      setCommunityInput("");
    }, 3500);
  };

  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const mobileCardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const desktopCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  // GSAP card expand/collapse animation
  useEffect(() => {
    desktopCardRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        flex: i === activeIndex ? 2.2 : 1,
        duration: 0.5,
        ease: "power3.out",
      });
    });

    // Animate description text in
    const descEl = descriptionRefs.current[activeIndex];
    if (descEl) {
      gsap.fromTo(descEl,
        { opacity: 0, scale: 0.9, y: 6 },
        { opacity: 1, scale: 1, y: 0, duration: 0.35, delay: 0.2, ease: "power2.out" }
      );
    }
  }, [activeIndex]);

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
      {/* Community Section */}
      <section className="w-full flex justify-center items-center pt-14 md:pt-24 pb-12 md:pb-20 relative overflow-hidden">
        <div className="w-full max-w-[1440px] px-4 md:px-8 flex flex-col justify-center relative md:h-full">

          {/* ================= SECTION HEADER (Centered on all screen sizes) ================= */}
          <div className="w-full flex flex-col items-center text-center mb-8 md:mb-12">
            <h2
              className="font-[family-name:var(--font-bebas)] font-normal text-[48px] sm:text-[62px] md:text-[80px] lg:text-[88px] leading-[90%] tracking-[-0.03em] text-[#f4f4f4] uppercase m-0"
              style={{
                fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "90%",
                letterSpacing: "-0.03em",
              }}
            >
              MORE THAN TOOLS. A <span className="text-[#FF0E97]">COMMUNITY.</span>
            </h2>

            <p
              className="font-['Inter',_sans-serif] font-normal text-[15px] sm:text-[17px] md:text-[18px] leading-[140%] tracking-[-0.03em] text-[#f4f4f4]/80 max-w-[620px] text-center mt-3 sm:mt-4 m-0 px-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "140%",
                letterSpacing: "-0.03em",
              }}
            >
              Nazr is built with the women who use it. Come to an event, read their stories, or join us.
            </p>
          </div>

          {/* ================= MOBILE LAYOUT (Hidden on Desktop) ================= */}
          <div className="md:hidden w-full flex flex-col items-center mb-2">
            {/* Mobile Carousel Track */}
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
              className="w-full flex flex-row overflow-x-auto snap-x snap-mandatory px-4 gap-4 pb-4 mb-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
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
                    className={`w-[85vw] max-w-[330px] h-[400px] shrink-0 snap-center rounded-[20px] overflow-hidden border ${
                      isCurrent ? "border-white/30 scale-[1.0]" : "border-white/10 opacity-70 scale-[0.96]"
                    } relative shadow-2xl transition-all duration-300 cursor-pointer`}
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
                        <h3 className="font-[family-name:var(--font-bebas)] font-normal text-[#f4f4f4] text-[32px] leading-[130%] tracking-normal m-0">
                          {card.topic}
                        </h3>
                      </div>

                      {/* Bottom Info */}
                      <div className="flex flex-col items-start w-full max-w-[285px]">
                        <p className={`font-['Inter',_sans-serif] font-normal text-[#f4f4f4]/90 text-[14px] leading-[140%] tracking-[-0.03em] m-0 whitespace-pre-line ${SHOW_CARD_BUTTONS ? "mb-2.5" : "mb-0"}`}>
                          {card.description}
                        </p>
                        {card.id === 4 ? (
                          <form
                            onSubmit={handleCommunitySubmit}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full flex flex-col items-start gap-[20px]"
                          >
                            <input
                              type="text"
                              value={communityInput}
                              onChange={(e) => setCommunityInput(e.target.value)}
                              placeholder="Enter your WhatsApp number or email"
                              className="w-full max-w-[379px] h-[42px] bg-white text-[#161616] placeholder:text-[#888888] text-[13px] px-[16px] py-[13px] rounded-[12px] font-['Inter',_sans-serif] focus:outline-none focus:ring-2 focus:ring-[#FF0E97]"
                            />
                            <button
                              type="submit"
                              className="inline-flex items-center justify-center bg-[#FF0E97] hover:bg-[#e00b84] text-white font-[family-name:var(--font-roboto)] text-[14px] sm:text-[15px] font-normal leading-[150%] tracking-[0px] px-4 py-2 rounded-[4px] shadow-lg transition-colors whitespace-nowrap cursor-pointer"
                            >
                              {communitySubmitted ? "Joined ✓" : card.buttonText}
                            </button>
                          </form>
                        ) : (
                          SHOW_CARD_BUTTONS && (
                            <Link
                              href={card.link}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center justify-center bg-[#FF0E97] hover:bg-[#e00b84] text-white font-[family-name:var(--font-roboto)] text-[16px] font-normal leading-[150%] tracking-[0px] px-4 py-2 rounded-[4px] shadow-lg transition-colors whitespace-nowrap"
                            >
                              {card.buttonText}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress Bar */}
            <div className="w-full px-4 mb-5">
              <div className="w-full h-[4px] bg-white/20 rounded-full overflow-hidden">
                <div
                  className="bg-[#FF0E97] h-full transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${((activeIndex + 1) / cardsData.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Navigation Arrows — Centered */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevCard}
                className="cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none"
                aria-label="Previous card"
              >
                <Image unoptimized src="/images/buttonl.svg" width={44} height={44} alt="Previous" className="w-[44px] h-[44px]" />
              </button>
              <button
                onClick={nextCard}
                className="cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none"
                aria-label="Next card"
              >
                <Image unoptimized src="/images/button r.svg" width={44} height={44} alt="Next" className="w-[44px] h-[44px]" />
              </button>
            </div>
          </div>

          {/* ================= DESKTOP LAYOUT (Hidden on Mobile) ================= */}
          <div className="hidden md:flex flex-col w-full">
            {/* Carousel / Cards Track */}
            <div className="w-full flex flex-row gap-4 justify-between items-stretch h-[480px]">
              {cardsData.map((card, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={card.id}
                    ref={(el) => { desktopCardRefs.current[index] = el; }}
                    onClick={() => setActiveIndex(index)}
                    className={`relative rounded-[20px] overflow-hidden cursor-pointer border border-white/10 min-w-0 h-full`}
                    style={{ flex: index === activeIndex ? 2.2 : 1 }}
                  >
                    {/* Background Image */}
                    <img
                      src={card.bgImage}
                      alt={card.topic}
                      className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[540px] lg:w-[600px] max-w-none object-cover object-center transition-transform duration-700 hover:scale-105"
                    />

                    {/* Dark Overlay */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        isActive
                          ? "bg-gradient-to-t from-black/90 via-black/40 to-black/20"
                          : "bg-gradient-to-t from-black/85 via-black/30 to-black/40"
                      }`}
                    />

                    {/* Card Content: Active State */}
                    {isActive ? (
                      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                        {/* Top Badge & Topic Title */}
                        <div className="flex flex-col items-start gap-2">
                          <Image unoptimized src={card.badge} width={34} height={34} alt={`Step ${card.id}`} />
                          <h3 className="font-[family-name:var(--font-bebas)] font-normal text-[#f4f4f4] text-[34px] leading-[130%] tracking-normal m-0">
                            {card.topic}
                          </h3>
                        </div>

                        {/* Bottom Info */}
                        <div className="flex flex-col items-start w-full max-w-[420px]">
                          <p
                            ref={(el) => { descriptionRefs.current[index] = el; }}
                            className={`font-['Inter',_sans-serif] font-normal text-[#f4f4f4]/90 text-[15px] sm:text-[16px] leading-[140%] tracking-[-0.03em] m-0 whitespace-pre-line ${
                              SHOW_CARD_BUTTONS ? "mb-3" : "mb-0"
                            } origin-left`}
                          >
                            {card.description}
                          </p>
                          {card.id === 4 ? (
                            <form
                              onSubmit={handleCommunitySubmit}
                              onClick={(e) => e.stopPropagation()}
                              className="w-full flex flex-col items-start gap-[20px] mt-1"
                            >
                              <input
                                type="text"
                                value={communityInput}
                                onChange={(e) => setCommunityInput(e.target.value)}
                                placeholder="Enter your WhatsApp number or email"
                                className="w-full max-w-[379px] h-[42px] bg-white text-[#161616] placeholder:text-[#888888] text-[13.5px] px-[16px] py-[13px] rounded-[12px] font-['Inter',_sans-serif] focus:outline-none focus:ring-2 focus:ring-[#FF0E97]"
                              />
                              <button
                                type="submit"
                                className="inline-flex items-center justify-center bg-[#FF0E97] hover:bg-[#e00b84] text-white font-[family-name:var(--font-roboto)] text-[16px] font-normal leading-[150%] tracking-[0px] px-5 py-2.5 rounded-[4px] shadow-lg transition-colors whitespace-nowrap cursor-pointer"
                              >
                                {communitySubmitted ? "Joined ✓" : card.buttonText}
                              </button>
                            </form>
                          ) : (
                            SHOW_CARD_BUTTONS && (
                              <Link
                                href={card.link}
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center justify-center bg-[#FF0E97] hover:bg-[#e00b84] text-white font-[family-name:var(--font-roboto)] text-[16px] font-normal leading-[150%] tracking-[0px] px-5 py-2.5 rounded-[4px] shadow-lg transition-colors whitespace-nowrap"
                              >
                                {card.buttonText}
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    ) : (
                      /* Card Content: Collapsed State */
                      <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                        {/* Top Badge & Topic Title */}
                        <div className="flex flex-col items-start gap-2">
                          <Image unoptimized src={card.badge} width={30} height={30} alt={`Step ${card.id}`} />
                          <span className="font-[family-name:var(--font-bebas)] font-normal text-[#f4f4f4] text-[26px] lg:text-[32px] leading-[140%] tracking-normal">
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
                  </div>
                );
              })}
            </div>

            {/* Progress Bar */}
            <div className="w-full h-[4px] bg-white/20 rounded-full mt-6 md:mt-8 overflow-hidden">
              <div
                className="bg-[#FF0E97] h-full transition-all duration-500 ease-out rounded-full"
                style={{ width: `${((activeIndex + 1) / cardsData.length) * 100}%` }}
              />
            </div>

            {/* Navigation Controls — Centered underneath progress bar */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevCard}
                className="cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none"
                aria-label="Previous card"
              >
                <Image unoptimized src="/images/buttonl.svg" width={44} height={44} alt="Previous" className="w-[44px] h-[44px]" />
              </button>
              <button
                onClick={nextCard}
                className="cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none"
                aria-label="Next card"
              >
                <Image unoptimized src="/images/button r.svg" width={44} height={44} alt="Next" className="w-[44px] h-[44px]" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
