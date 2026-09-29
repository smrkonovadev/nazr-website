"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { DynamicDotLottie } from "@/components/lottie/DynamicDotLottie";

export function HelpWithoutHoldUp() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [preloaded, setPreloaded] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    // Preload the remaining 3 animations after initial enter so interaction is instantaneous
    const timer = setTimeout(() => {
      setPreloaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, [isInView]);

  const effectiveCard = hoveredCard !== null ? hoveredCard : activeCard;

  const [mobileActiveIdx, setMobileActiveIdx] = useState(0);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      id: 1,
      num: "01",
      title: "In-App SOS Button",
      description: "Tap the SOS button in the NAZR app to alert your support network.",
      lottieSrc: "/lottie/homepage/sos2.lottie",
    },
    {
      id: 2,
      num: "02",
      title: "Volume Button SOS",
      description: "Press your volume button three times to instantly trigger an SOS and alert your trusted contacts.",
      lottieSrc: "/lottie/homepage/sos_hand.lottie",
    },
    {
      id: 3,
      num: "03",
      title: "Home Screen SOS Widget",
      description: "Trigger SOS directly from your home screen without opening the application.",
      lottieSrc: "/lottie/homepage/sos3.lottie",
    },
  ];

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleMobileScroll = () => {
    const el = mobileCarouselRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card-slide]");
    const step = card ? card.offsetWidth + 12 : el.offsetWidth + 12;
    const scrollLeft = el.scrollLeft;
    if (step > 0) {
      const newIdx = Math.round(scrollLeft / step);
      const clamped = Math.max(0, Math.min(newIdx, features.length - 1));
      if (clamped !== mobileActiveIdx) {
        setMobileActiveIdx(clamped);
      }
    }
  };

  const scrollToSlide = (idx: number) => {
    const el = mobileCarouselRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-card-slide]");
    if (cards[idx]) {
      cards[idx].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setMobileActiveIdx(idx);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    
    // Check if horizontal swipe threshold of 35px is reached and predominantly horizontal
    if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        // Swipe left -> advance to next card (strictly 1 card)
        const nextIdx = Math.min(mobileActiveIdx + 1, features.length - 1);
        scrollToSlide(nextIdx);
      } else {
        // Swipe right -> return to previous card (strictly 1 card)
        const prevIdx = Math.max(mobileActiveIdx - 1, 0);
        scrollToSlide(prevIdx);
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#f4f4f4] flex justify-center pt-10 md:pt-16 lg:pt-20 pb-[28px] md:pb-[34px] lg:pb-[50px] px-4 md:px-8 lg:px-14 relative z-30 overflow-hidden">
      <div className="w-full max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 lg:gap-14 min-w-0">

        {/* Left Column (Desktop) / Main Column (Mobile) */}
        <div className="w-full md:w-[58%] lg:w-[60%] flex flex-col items-center md:items-start min-w-0">
          
          {/* Main Title - Mobile (42px Bebas Neue, 90% line-height, -3% letter-spacing, center) */}
          <h2
            className="md:hidden font-[family-name:var(--font-bebas)] font-normal text-[#161616] text-[42px] leading-[90%] tracking-[-0.03em] uppercase m-0 w-full text-center"
            style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
          >
            HELP. WITHOUT THE HOLD UP.
          </h2>

          {/* Main Title - Desktop */}
          <h2
            className="hidden md:block font-[family-name:var(--font-bebas)] font-normal text-[#161616] text-[52px] sm:text-[68px] md:text-[76px] lg:text-[88px] leading-[88%] tracking-[-0.03em] uppercase m-0 w-full text-left"
            style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
          >
            HELP. WITHOUT THE HOLD UP.
          </h2>

          {/* Subheading - Mobile (16px Inter, 140% line-height, -3% letter-spacing, center) */}
          <p className="md:hidden font-['Inter',_sans-serif] font-normal text-[#161616] text-[16px] leading-[140%] tracking-[-0.03em] text-center mt-3 mb-6 px-1 opacity-95 w-full">
            Three ways to activate SOS. For whichever you can reach the fastest.
          </p>

          {/* Subheading - Desktop */}
          <p className="hidden md:block font-['Inter',_sans-serif] font-normal text-[#161616] text-[16px] sm:text-[18px] md:text-[19px] leading-[1.35] tracking-[-0.02em] mt-3 md:mt-4 mb-6 md:mb-8 opacity-95 w-full text-left">
            Three ways to activate SOS. For whichever you can reach the fastest.
          </p>

          {/* MOBILE ONLY: Swipable Cards Carousel (Full width, single card at a time) */}
          <div className="w-full md:hidden flex flex-col items-center">
            <div
              ref={mobileCarouselRef}
              onScroll={handleMobileScroll}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="w-full flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth py-2 no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {features.map((item, idx) => (
                <div
                  key={item.id}
                  data-card-slide
                  style={{ scrollSnapStop: "always" }}
                  className="shrink-0 w-full snap-center snap-always rounded-[20px] bg-[#ECECEC] border border-[#161616]/8 p-4 sm:p-5 flex flex-col justify-between overflow-hidden"
                >
                  {/* Inner Box with Rounded Border Radius for the Lottie */}
                  <div className="w-full h-[350px] rounded-[16px] bg-[#DFDFDF]/70 border border-[#161616]/6 flex items-center justify-center relative overflow-hidden">
                    <div className="w-[270px] h-[310px] relative flex items-center justify-center pointer-events-none">
                      {isInView && (
                        <DynamicDotLottie
                          src={item.lottieSrc}
                          isActive={isInView && mobileActiveIdx === idx}
                          fallbackImage="/images/new8.webp"
                          fallbackAlt="NAZR SOS App Interface"
                          className={`w-full h-full object-contain ${
                            item.id === 2 ? "scale-[1.40]" : "scale-[1.54]"
                          } transform-gpu`}
                        />
                      )}
                    </div>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="w-full flex flex-col pt-4 px-1 pb-1 text-left">
                    {/* Pink Number */}
                    <span className="font-['Inter',_sans-serif] font-bold text-[#FF0E97] text-[28px] leading-none">
                      {item.num}
                    </span>

                    {/* Feature Title */}
                    <h3 className="font-['Inter',_sans-serif] font-bold text-[#161616] text-[19px] leading-[1.25] mt-2 mb-1.5">
                      {item.title}
                    </h3>

                    {/* Feature Description */}
                    <p className="font-['Inter',_sans-serif] font-normal text-[#404040] text-[14px] leading-[1.4] m-0">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots (Matching user's 2nd image: active is filled pink circle, inactive are pink ring outlines) */}
            <div className="flex items-center justify-center gap-2.5 mt-5 mb-2">
              {features.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                    mobileActiveIdx === idx
                      ? "bg-[#FF0E97]"
                      : "border-[1.5px] border-[#FF0E97] bg-transparent"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP ONLY: 3 Numbered Feature Rows with Divider Lines */}
          <div className="w-full hidden md:flex flex-col">
            {features.map((item, idx) => {
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => {
                    setHoveredCard(item.id);
                    setPreloaded(true);
                  }}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => {
                    setActiveCard(item.id);
                    setPreloaded(true);
                  }}
                  className={`w-full py-5 sm:py-6 transition-colors duration-200 cursor-pointer flex flex-row items-center gap-6 ${
                    idx < features.length - 1 ? "border-b border-[#161616]/30" : ""
                  }`}
                >
                  {/* Pink Number Index */}
                  <span className="font-['Inter',_sans-serif] font-bold text-[#FF0E97] text-[28px] md:text-[32px] leading-none shrink-0 w-[50px]">
                    {item.num}
                  </span>

                  {/* Feature Title */}
                  <h3 className="font-['Inter',_sans-serif] font-bold text-[#161616] text-[18px] md:text-[20px] leading-[1.25] shrink-0 w-[185px] lg:w-[205px] m-0">
                    {item.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="font-['Inter',_sans-serif] font-normal text-[#404040] text-[14px] md:text-[14.5px] leading-[1.4] m-0 flex-1">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile Buttons Layout (< md): App Store & Google Play in one row, Get the app centered below */}
          <div className="mt-7 flex md:hidden flex-col items-center gap-3 w-full max-w-[320px] mx-auto self-center">
            {/* Row 1: App Store & Google Play side-by-side */}
            <div className="flex items-center justify-center gap-2.5 w-full">
              {/* Download on the App Store */}
              <a
                href="https://apps.apple.com/in/app/nazr-women-safety-app/id6787188929"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-black hover:bg-black/85 text-white px-2 py-1.5 rounded-[4px] transition-all shadow-sm active:scale-95 whitespace-nowrap h-[44px] border border-white/10"
              >
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-.98 1.71-.87 2.73.99.08 2.02-.52 2.57-1.23z" />
                </svg>
                <div className="flex flex-col text-left justify-center">
                  <span className="text-[7.5px] leading-tight text-white/80 font-normal">Download on the</span>
                  <span className="text-[12px] font-semibold leading-tight font-sans text-white">App Store</span>
                </div>
              </a>

              {/* GET IT ON Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.nazr.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-[44px] transition-all hover:opacity-90 active:scale-95 shrink-0 flex items-center justify-center"
              >
                <Image
                  unoptimized
                  src="/images/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={148}
                  height={44}
                  className="h-[44px] w-full object-contain rounded-[4px]"
                />
              </a>
            </div>

            {/* Row 2: Pink Get the app button centered below */}
            <Link
              href="/nazrapp"
              className="w-full flex items-center justify-center gap-2.5 bg-[#FF0E97] hover:bg-[#E00A85] text-white px-5 py-2.5 rounded-[4px] font-[family-name:var(--font-roboto)] text-[16px] font-normal leading-[150%] tracking-[0px] transition-all shadow-sm active:scale-95 whitespace-nowrap h-[44px]"
            >
              <Image
                unoptimized
                src="/images/logosvg.svg"
                alt="NAZR Owl"
                width={20}
                height={15}
                className="brightness-0 invert object-contain"
              />
              <span>Get the app</span>
            </Link>
          </div>

          {/* Desktop Buttons Layout (md:flex): Single row with Get the app, App Store, Google Play */}
          <div className="mt-8 md:mt-10 hidden md:flex items-center gap-3 sm:gap-4 w-auto">
            {/* Pink Get the app button */}
            <Link
              href="/nazrapp"
              className="flex items-center justify-center gap-2.5 bg-[#FF0E97] hover:bg-[#E00A85] text-white px-5 py-2.5 rounded-[4px] font-[family-name:var(--font-roboto)] text-[16px] font-normal leading-[150%] tracking-[0px] transition-all shadow-sm active:scale-95 whitespace-nowrap h-[44px]"
            >
              <Image
                unoptimized
                src="/images/logosvg.svg"
                alt="NAZR Owl"
                width={20}
                height={15}
                className="brightness-0 invert object-contain"
              />
              <span>Get the app</span>
            </Link>

            {/* Download on the App Store */}
            <a
              href="https://apps.apple.com/in/app/nazr-women-safety-app/id6787188929"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-black hover:bg-black/85 text-white px-3.5 py-1.5 rounded-[4px] transition-all shadow-sm active:scale-95 whitespace-nowrap h-[44px]"
            >
              <svg className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-.98 1.71-.87 2.73.99.08 2.02-.52 2.57-1.23z" />
              </svg>
              <div className="flex flex-col text-left justify-center">
                <span className="text-[10px] leading-tight text-white/80 font-normal">Download on the</span>
                <span className="text-[13px] sm:text-[14px] font-semibold leading-tight font-sans text-white">App Store</span>
              </div>
            </a>

            {/* GET IT ON Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=com.nazr.app"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[44px] transition-all hover:opacity-90 active:scale-95 shrink-0 flex items-center justify-center"
            >
              <Image
                unoptimized
                src="/images/google-play-badge.png"
                alt="Get it on Google Play"
                width={154}
                height={44}
                className="h-[44px] w-auto object-contain rounded-[4px]"
              />
            </a>
          </div>
        </div>

        {/* Right Column: Desktop Phone Mockup */}
        <div className="hidden md:flex w-full md:w-[42%] lg:w-[40%] items-center justify-center relative min-h-[460px] md:min-h-[560px]">
          <SosPhoneMockup
            effectiveCard={effectiveCard}
            isInView={isInView}
            preloaded={preloaded}
            containerClass="w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] h-[500px] sm:h-[560px] md:h-[600px] lg:h-[640px]"
          />
        </div>

      </div>
    </section>
  );
}

function SosPhoneMockup({
  effectiveCard,
  isInView,
  preloaded,
  containerClass,
}: {
  effectiveCard: number | null;
  isInView: boolean;
  preloaded: boolean;
  containerClass: string;
}) {
  return (
    <div className={`relative ${containerClass} flex items-center justify-center overflow-visible pointer-events-none`}>
      {/* Default Static Phone / Lottie */}
      <div
        className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${
          !effectiveCard ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
        }`}
      >
        {isInView ? (
          <DynamicDotLottie
            src="/lottie/homepage/sos_default.lottie"
            isActive={!effectiveCard}
            fallbackImage="/images/new8.webp"
            fallbackAlt="NAZR SOS App Interface"
            className="w-full h-full object-contain drop-shadow-2xl scale-[2.05] transform-gpu"
          />
        ) : (
          <Image
            unoptimized
            quality={100}
            src="/images/new8.webp"
            alt="NAZR SOS App Interface"
            fill
            className="object-contain"
          />
        )}
      </div>

      {/* Card 1 Lottie (In-App SOS Button) */}
      <div
        className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${
          effectiveCard === 1 ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
        }`}
      >
        {isInView && (effectiveCard === 1 || preloaded) && (
          <DynamicDotLottie
            src="/lottie/homepage/sos2.lottie"
            isActive={effectiveCard === 1}
            className="w-full h-full object-contain drop-shadow-2xl scale-[2.05] transform-gpu"
          />
        )}
      </div>

      {/* Card 2 Lottie (Volume Button SOS) */}
      <div
        className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${
          effectiveCard === 2 ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
        }`}
      >
        {isInView && (effectiveCard === 2 || preloaded) && (
          <DynamicDotLottie
            src="/lottie/homepage/sos_hand.lottie"
            isActive={effectiveCard === 2}
            className="w-full h-full object-contain drop-shadow-2xl scale-[2.05] transform-gpu"
          />
        )}
      </div>

      {/* Card 3 Lottie (Home Screen Widget) */}
      <div
        className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${
          effectiveCard === 3 ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
        }`}
      >
        {isInView && (effectiveCard === 3 || preloaded) && (
          <DynamicDotLottie
            src="/lottie/homepage/sos3.lottie"
            isActive={effectiveCard === 3}
            className="w-full h-full object-contain drop-shadow-2xl scale-[2.05] transform-gpu"
          />
        )}
      </div>
    </div>
  );
}
