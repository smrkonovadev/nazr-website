"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useInView } from "framer-motion";

export function SafetyHabits() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  const [triggerAnimData, setTriggerAnimData] = useState<any>(null);
  const [armAnimData, setArmAnimData] = useState<any>(null);
  const [trustedAnimData, setTrustedAnimData] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState<number>(1);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const [durations, setDurations] = useState<{ [key: number]: number }>({
    1: 3.0,
    2: 3.5,
    3: 3.5,
  });

  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    setMounted(true);
    fetch("/images/Trigger.json")
      .then((res) => res.json())
      .then((data) => {
        setTriggerAnimData(data);
        if (data.op && data.fr) setDurations((prev) => ({ ...prev, 1: (data.op - (data.ip || 0)) / data.fr }));
      })
      .catch((err) => console.error("Error loading Trigger Lottie:", err));

    fetch("/images/SM ARM-Turn On.json")
      .then((res) => res.json())
      .then((data) => {
        setArmAnimData(data);
        if (data.op && data.fr) setDurations((prev) => ({ ...prev, 2: (data.op - (data.ip || 0)) / data.fr }));
      })
      .catch((err) => console.error("Error loading SM ARM-Turn On Lottie:", err));

    fetch("/images/Trusted Circle.json")
      .then((res) => res.json())
      .then((data) => {
        setTrustedAnimData(data);
        if (data.op && data.fr) setDurations((prev) => ({ ...prev, 3: (data.op - (data.ip || 0)) / data.fr }));
      })
      .catch((err) => console.error("Error loading Trusted Circle Lottie:", err));
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
    if (dur > 0 && durations[id] !== dur) {
      setDurations((prev) => ({ ...prev, [id]: dur }));
    }
  };

  const cards = [
    {
      id: 1,
      title: "EMERGENCY SOS",
      description:
        "Connects you to your support network with real-time location sharing, emergency alerts, and quick access to critical support services when you need them most.",
      animData: triggerAnimData,
      lottieScale: "max-md:scale-[0.98] md:scale-[0.96]",
    },
    {
      id: 2,
      title: "SHIELD MODE",
      description:
        "Designed for the ride home, the late-night cab, and every journey in between. Shield Mode keeps you supported, so you never have to navigate a journey alone.",
      animData: armAnimData,
      lottieScale: "max-md:scale-[1.21] md:scale-[1.25]",
    },
    {
      id: 3,
      title: "TRUSTED CIRCLE",
      description:
        "Your safety network, built around the people you trust most. Receive support through SOS alerts, journey updates, and automated check-ins.",
      animData: trustedAnimData,
      lottieScale: "max-md:scale-[1.21] md:scale-[1.25]",
    },
  ];

  // Auto-advance to next card ONLY when section is in view and progress bar completes
  useEffect(() => {
    if (!isInView) return;
    if (hoveredCard !== null) return;

    const currentDurationSec = durations[activeCard] || 3.5;
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

  // Smoothly auto-scroll ONLY the horizontal track on mobile when auto-advanced (never jump vertical page scroll)
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
    }
  }, [activeCard]);

  return (
    <section ref={sectionRef} className="w-full bg-[#161616] flex flex-col justify-center items-center pt-14 pb-8 md:pt-[70px] md:pb-[40px] md:px-[20px] lg:px-[30px] md:min-h-[max(700px,calc(100vh/var(--desktop-scale,1)))] md:h-auto overflow-x-hidden relative z-20">
      <div className="w-full max-w-[1440px] px-4 md:px-6 flex flex-col items-center gap-[20px] md:gap-[20px] relative">

        {/* Title Block */}
        <div className="w-full flex flex-col items-center gap-3 md:gap-4">
          <h2
            className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[46px] md:text-[80px] text-center w-full m-0"
            style={{ lineHeight: "90%", letterSpacing: "-0.03em" }}
          >
            THE SAFETY HABITS YOU<br />
            ALREADY HAVE. UPGRADED.
          </h2>
          <p
            className="text-[#FFF9EB] text-center font-[family-name:var(--font-inter)] font-normal text-[16px] md:text-[18px] max-w-[340px] md:max-w-[720px] m-0 opacity-90"
            style={{ lineHeight: "140%", letterSpacing: "-0.03em" }}
          >
            {/* Mobile 3-line split */}
            <span className="md:hidden">
              Designed around the routines women already<br />
              rely on, with smarter tools to keep every<br />
              journey connected, informed, and secure.
            </span>

            {/* Desktop / Laptop 2-line split matching screenshot */}
            <span className="hidden md:inline">
              Designed around the routines women already rely on, with smarter tools to<br />
              keep every journey connected, informed, and secure.
            </span>
          </p>
        </div>

        {/* Cards Container */}
        <div className="w-full flex flex-col items-center">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="w-full flex flex-row overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-2 pt-2 px-4 md:px-2 gap-5 md:gap-[40px] justify-start md:justify-center items-stretch max-w-[1440px] mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {cards.map((card) => (
              <HabitCardItem
                key={card.id}
                cardRef={(el) => { cardRefs.current[card.id] = el; }}
                card={card}
                isActive={currentActive === card.id}
                isInView={isInView}
                exactDuration={durations[card.id] || 3.5}
                onDurationMeasured={(dur) => handleDurationMeasured(card.id, dur)}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveCard(card.id)}
                mounted={mounted}
              />
            ))}
          </div>

          {/* Mobile ONLY: 3 Pagination Dots (Tight spacing matching Image 1: 8px x 8px, #FF0E97, border 0.3px) */}
          <div className="flex md:hidden items-center justify-center gap-[5px] mt-4 z-30">
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
  mounted,
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
  mounted: boolean;
}) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const calculateDuration = () => {
    if (lottieRef.current) {
      const dur = lottieRef.current.getDuration(false);
      if (dur && dur > 0) {
        onDurationMeasured(dur);
        return;
      }
    }
    if (card.animData && typeof card.animData.op === "number" && typeof card.animData.fr === "number" && card.animData.fr > 0) {
      const ip = typeof card.animData.ip === "number" ? card.animData.ip : 0;
      onDurationMeasured((card.animData.op - ip) / card.animData.fr);
    }
  };

  const handleDomLoaded = () => {
    calculateDuration();
    if (lottieRef.current) {
      if (isActive && isInView) {
        lottieRef.current.goToAndPlay(0, true);
      } else {
        lottieRef.current.goToAndStop(1, true);
      }
    }
  };

  useEffect(() => {
    calculateDuration();
  }, [card.animData]);

  useEffect(() => {
    if (!lottieRef.current) return;

    if (isActive && isInView) {
      calculateDuration();
      lottieRef.current.goToAndPlay(0, true);
    } else {
      const timer = setTimeout(() => {
        if (lottieRef.current) {
          lottieRef.current.goToAndStop(1, true);
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isActive, isInView, mounted]);

  const isCardPlaying = isActive && isInView;

  return (
    <div
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className="w-[88vw] max-w-[355px] shrink-0 max-md:snap-center md:w-[415px] md:min-w-[415px] flex flex-col gap-[16px] md:gap-[14px] cursor-pointer transition-all duration-300"
    >
      {/* Card Box Container (Mobile: wraps content + text inside border; Desktop: top box only) */}
      <div
        className="relative w-full rounded-[16px] overflow-hidden shrink-0 flex flex-col items-center justify-between p-5 sm:p-6 md:pt-6 md:pb-4 md:h-[470px] transition-all duration-300 backdrop-blur-[20.3px]"
        style={{
          backgroundColor: "rgba(248, 0, 144, 0.02)",
          border: isCardPlaying
            ? "1px solid rgba(255, 14, 151, 0.8)"
            : "1px solid rgba(255, 14, 151, 0.10)",
          boxShadow: isCardPlaying
            ? "2px 1px 8.5px 0px rgba(255, 14, 151, 0.25), -2px 0px 8.5px 0px rgba(255, 14, 151, 0.25)"
            : "2px 1px 8.5px 0px rgba(255, 14, 151, 0.02), -2px 0px 8.5px 0px rgba(255, 14, 151, 0.02)",
        }}
      >
        {/* Phone Lottie Display */}
        <div className="w-full h-[340px] sm:h-[370px] md:h-auto md:flex-1 flex items-center justify-center relative overflow-hidden">
          {mounted && card.animData ? (
            <Lottie
              lottieRef={lottieRef}
              animationData={card.animData}
              loop={true}
              autoplay={isCardPlaying}
              onDOMLoaded={handleDomLoaded}
              className={`w-full h-full object-contain drop-shadow-2xl ${card.lottieScale} transform-gpu z-10`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center relative">
              <Image
                unoptimized
                quality={100}
                src={card.id === 1 ? "/images/1.webp" : card.id === 2 ? "/images/2.webp" : "/images/3.webp"}
                alt={card.title}
                fill
                className="object-contain drop-shadow-2xl scale-[0.95]"
              />
            </div>
          )}
        </div>

        {/* Pink Progress Line Indicator at bottom of phone box */}
        <div className="w-[180px] sm:w-[220px] h-[4px] bg-[#FF0E97]/20 rounded-full overflow-hidden shrink-0 mt-3 md:mt-4 relative">
          <div
            key={isCardPlaying ? `active-${card.id}-${exactDuration}` : `inactive-${card.id}`}
            className={`h-full bg-[#FF0E97] rounded-full ${isCardPlaying ? 'animate-progress-line' : 'w-0'}`}
            style={{
              animationDuration: `${exactDuration}s`,
            }}
          />
        </div>

        {/* Mobile ONLY: Title & Description inside card box (Image 2 Figma design) */}
        <div className="flex md:hidden flex-col items-center text-center gap-2 pt-4 pb-1 w-full">
          <h3
            className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[24px] uppercase text-center m-0 w-full"
            style={{ lineHeight: "90%", letterSpacing: "-0.03em" }}
          >
            {card.title}
          </h3>
          <p
            className="text-[#FFF9EB] font-['Inter',_sans-serif] font-normal text-[14px] text-center m-0 w-full opacity-90"
            style={{ lineHeight: "140%", letterSpacing: "-0.03em" }}
          >
            {card.description}
          </p>
        </div>
      </div>

      {/* Desktop ONLY: Text Content Below Box */}
      <div className="hidden md:flex flex-col gap-[8px] md:gap-[8px] px-[4px] md:px-[0px]">
        <h3
          className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[32px] m-0 w-full"
          style={{ lineHeight: "90%", letterSpacing: "-0.03em" }}
        >
          {card.title}
        </h3>
        <p
          className="text-[#FFF9EB] font-['Inter',_sans-serif] font-normal text-[16px] m-0 w-full opacity-90"
          style={{ lineHeight: "140%", letterSpacing: "-0.03em" }}
        >
          {card.description}
        </p>
      </div>
    </div>
  );
}
