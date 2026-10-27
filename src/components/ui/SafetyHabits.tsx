"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { DynamicDotLottie } from "@/components/lottie/DynamicDotLottie";

export function SafetyHabits() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  const [activeCard, setActiveCard] = useState<number>(1);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const [durations, setDurations] = useState<{ [key: number]: number }>({
    1: 8.67,
    2: 8.03,
    3: 6.46,
  });

  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // Native IntersectionObserver replaces framer-motion useInView
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // When section enters viewport for the first time, reset to Card 1
  useEffect(() => {
    if (isInView && !hasEnteredView) {
      setHasEnteredView(true);
      setActiveCard(1);
    }
  }, [isInView, hasEnteredView]);

  const currentActive = hoveredCard !== null ? hoveredCard : activeCard;

  const handleDurationMeasured = (id: number, dur: number) => {
    if (dur > 0 && Math.abs((durations[id] || 0) - dur) > 0.1) {
      setDurations((prev) => ({ ...prev, [id]: dur }));
    }
  };

  const cards = [
    {
      id: 1,
      title: "SHIELD MODE",
      before: "“Text me when you reach”",
      withNazr:
        "Set a check-in for your trip. Miss it, and your Trusted Circle is alerted and SOS starts on its own.",
      lottieSrc: "/lottie/homepage/sh_sm_arm.lottie",
      lottieScale: "scale-[0.96]",
    },
    {
      id: 2,
      title: "TRUSTED CIRCLE",
      before: "Sharing your location with whoever you remember.",
      withNazr:
        "Choose up to five people once. They get your alerts and live location by SMS, and they don't need the app.",
      lottieSrc: "/lottie/homepage/sh_trusted_circle.lottie",
      lottieScale: "scale-[0.96]",
    },
    {
      id: 3,
      title: "HELPLINE DIRECTORY",
      before: "“Searching for the right number when it matters most.”",
      withNazr:
        "Verified helplines, from police to women's helplines, one tap away.",
      lottieSrc: "/lottie/homepage/sh_trigger.lottie",
      lottieScale: "scale-[0.96]",
    },
  ];

  // Auto-advance to next card ONLY when section is in view and progress bar completes
  useEffect(() => {
    if (!isInView) return;
    if (hoveredCard !== null) return;

    const currentDurationSec = durations[activeCard] || 8.0;
    const durationMs = currentDurationSec * 1000;

    const timer = setTimeout(() => {
      setActiveCard((prev) => (prev >= cards.length ? 1 : prev + 1));
    }, durationMs);

    return () => clearTimeout(timer);
  }, [isInView, activeCard, hoveredCard, durations, cards.length]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isUserScrollingRef = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = () => {
    if (typeof window === "undefined" || window.innerWidth >= 768) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    isUserScrollingRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isUserScrollingRef.current = false;
    }, 250);

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestCardId = activeCard;
    let minDistance = Infinity;

    cards.forEach((card) => {
      const el = cardRefs.current[card.id];
      if (el) {
        const cardCenter = el.offsetLeft + el.clientWidth / 2;
        const dist = Math.abs(containerCenter - cardCenter);
        if (dist < minDistance) {
          minDistance = dist;
          closestCardId = card.id;
        }
      }
    });

    if (closestCardId !== activeCard) {
      setActiveCard(closestCardId);
    }
  };

  // Smoothly auto-scroll ONLY the horizontal track on mobile when auto-advanced
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768 && scrollContainerRef.current) {
      if (isUserScrollingRef.current) return;
      const activeEl = cardRefs.current[activeCard];
      const container = scrollContainerRef.current;
      if (activeEl && container) {
        const targetLeft = activeEl.offsetLeft - (container.clientWidth - activeEl.clientWidth) / 2;
        container.scrollTo({
          left: targetLeft,
          behavior: "smooth",
        });
      }
    } else if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [activeCard]);

  return (
    <section ref={sectionRef} className="w-full bg-[#161616] flex flex-col justify-center items-center pt-14 pb-12 md:pt-[70px] md:pb-[60px] px-4 md:px-6 lg:px-8 relative z-20 overflow-x-hidden md:min-h-[max(700px,calc(100vh/var(--desktop-scale,1)))] md:h-auto">
      <div className="w-full max-w-[1360px] mx-auto flex flex-col items-center gap-[28px] md:gap-[36px] relative">

        {/* Title Block */}
        <div className="w-full flex flex-col items-center gap-3 md:gap-4">
          <h2
            className="text-[#f4f4f4] font-[family-name:var(--font-bebas)] font-normal text-[46px] md:text-[80px] text-center w-full m-0"
            style={{ lineHeight: "90%", letterSpacing: "-0.03em" }}
          >
            THE SAFETY HABITS YOU<br />
            ALREADY HAVE. <span className="text-[#FF0E97]">UPGRADED.</span>
          </h2>
          <p
            className="text-[#f4f4f4] text-center font-[family-name:var(--font-inter)] font-normal text-[15px] md:text-[18px] max-w-[340px] md:max-w-[700px] m-0 opacity-90 leading-[1.4]"
            style={{ letterSpacing: "-0.02em" }}
          >
            Designed around the routines women already rely on, with smarter tools to keep every journey connected, informed, and secure.
          </p>
        </div>

        {/* Cards Container - Guaranteed equal left/right spacing */}
        <div className="w-full flex flex-col items-center">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="w-full flex flex-row overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-2 pt-2 gap-4 sm:gap-5 md:gap-6 lg:gap-[32px] justify-start md:justify-center items-stretch mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {cards.map((card) => (
              <HabitCardItem
                key={card.id}
                cardRef={(el) => { cardRefs.current[card.id] = el; }}
                card={card}
                isActive={currentActive === card.id}
                isInView={isInView}
                exactDuration={durations[card.id] || 8.0}
                onDurationMeasured={(dur) => handleDurationMeasured(card.id, dur)}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveCard(card.id)}
              />
            ))}
          </div>

          {/* Mobile ONLY: 3 Pagination Dots */}
          <div className="flex md:hidden items-center justify-center gap-[6px] mt-4 z-30">
            {cards.map((c) => {
              const isDotActive = currentActive === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCard(c.id)}
                  aria-label={`Go to slide ${c.id}`}
                  className="p-0 focus:outline-none cursor-pointer"
                >
                  <div
                    className={`w-[8px] h-[8px] rounded-full transition-all duration-300 ${isDotActive
                      ? "bg-[#FF0E97] border-[0.3px] border-[#FF0E97]"
                      : "bg-transparent border-[0.3px] border-[#FF0E97]"
                      }`}
                  />
                </button>
              );
            })}
          </div>

          {/* CTA Button: Get the app */}
          <div className="flex justify-center items-center mt-8 md:mt-10 z-30">
            <Link
              href="/nazrapp"
              className="flex items-center justify-center gap-2.5 bg-[#FF0E97] hover:bg-[#E00A85] text-[#f4f4f4] px-7 py-3 rounded-[4px] transition-all shadow-md active:scale-95 cursor-pointer font-[family-name:var(--font-roboto)] text-[16px] font-normal leading-[150%] tracking-[0px]"
            >
              <Image
                unoptimized
                src="/images/logosvg.svg"
                alt="NAZR Owl"
                width={22}
                height={16}
                className="brightness-0 invert object-contain"
              />
              <span>Get the app</span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes progressFillKeyframes {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-progress-line {
          animation: progressFillKeyframes linear infinite;
        }
      `}</style>
    </section>
  );
}

function HabitCardItem({
  card,
  cardRef,
  isActive,
  isInView,
  exactDuration,
  onDurationMeasured,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  card: any;
  cardRef: (el: HTMLDivElement | null) => void;
  isActive: boolean;
  isInView: boolean;
  exactDuration: number;
  onDurationMeasured: (dur: number) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}) {
  const isCardPlaying = isActive && isInView;

  return (
    <div
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className="w-[88vw] max-w-[355px] shrink-0 max-md:snap-center md:flex-1 md:max-w-[400px] lg:max-w-[415px] flex flex-col justify-between p-5 md:p-6 rounded-[22px] md:rounded-[24px] bg-[#1A1A1A] border border-[#2B2B2B] cursor-pointer transition-all duration-300"
    >
      {/* Inner Phone Container Box with Pink Border */}
      <div
        className="relative w-full rounded-[16px] overflow-hidden shrink-0 flex flex-col items-center justify-between p-4 pb-4 h-[340px] md:h-[370px] transition-all duration-300 bg-[#0E0E0E]"
        style={{
          border: isCardPlaying
            ? "1.2px solid rgba(255, 14, 151, 0.9)"
            : "1.2px solid rgba(255, 14, 151, 0.45)",
          boxShadow: isCardPlaying
            ? "0 0 16px rgba(255, 14, 151, 0.22)"
            : "none",
        }}
      >
        {/* Phone Lottie Display */}
        <div className="w-full flex-1 flex items-center justify-center relative overflow-hidden">
          {isInView && (
            <DynamicDotLottie
              src={card.lottieSrc}
              loop={true}
              isActive={isCardPlaying}
              onDurationMeasured={onDurationMeasured}
              className={`w-full h-full object-contain drop-shadow-2xl ${card.lottieScale} transform-gpu z-10`}
            />
          )}
        </div>

        {/* Pink Progress Line Indicator at bottom of phone box */}
        <div className="w-[180px] sm:w-[220px] h-[3px] bg-[#FF0E97]/20 rounded-full overflow-hidden shrink-0 mt-3 relative">
          <div
            key={isCardPlaying ? `active-${card.id}-${exactDuration}` : `inactive-${card.id}`}
            className={`h-full bg-[#FF0E97] rounded-full ${isCardPlaying ? 'animate-progress-line' : 'w-0'}`}
            style={{
              animationDuration: `${exactDuration}s`,
            }}
          />
        </div>
      </div>

      {/* Text Content Below Box */}
      <div className="flex flex-col text-left w-full pt-4 md:pt-5">
        {/* Title */}
        <h3
          className="text-[#f4f4f4] font-[family-name:var(--font-bebas)] font-normal text-[28px] md:text-[32px] uppercase m-0 w-full tracking-wide"
          style={{ lineHeight: "95%" }}
        >
          {card.title}
        </h3>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#2E2E2E] my-3 md:my-3.5" />

        {/* BEFORE section */}
        <div className="flex flex-col gap-0.5 w-full mb-3 md:mb-3.5">
          <span className="text-[11px] font-semibold text-[#808080] tracking-wider uppercase">
            BEFORE
          </span>
          <p className="text-[#C4C4C4] font-['Inter',_sans-serif] font-normal text-[13.5px] md:text-[14px] leading-[1.4] m-0">
            {card.before}
          </p>
        </div>

        {/* WITH NAZR section */}
        <div className="flex flex-col gap-0.5 w-full">
          <span className="text-[11px] font-semibold text-[#FF0E97] tracking-wider uppercase">
            WITH NAZR
          </span>
          <p className="text-[#E5E5E5] font-['Inter',_sans-serif] font-normal text-[13.5px] md:text-[14px] leading-[1.45] m-0">
            {card.withNazr}
          </p>
        </div>
      </div>
    </div>
  );
}
