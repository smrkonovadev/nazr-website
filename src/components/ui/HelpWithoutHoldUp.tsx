"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";

export function HelpWithoutHoldUp() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const [animData0, setAnimData0] = useState<any>(null);
  const [animData1, setAnimData1] = useState<any>(null);
  const [animData2, setAnimData2] = useState<any>(null);
  const [animData3, setAnimData3] = useState<any>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          Promise.all([
            fetch("/images/SOS Default.json").then((res) => res.json()),
            fetch("/images/sos_hand.json").then((res) => res.json()),
            fetch("/images/sos2.json").then((res) => res.json()),
            fetch("/images/sos3.json").then((res) => res.json()),
          ])
            .then(([d0, d1, d2, d3]) => {
              setAnimData0(d0);
              setAnimData1(d1);
              setAnimData2(d2);
              setAnimData3(d3);
            })
            .catch((err) => console.error("Error loading SOS Lottie files:", err));
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const effectiveCard = hoveredCard !== null ? hoveredCard : activeCard;

  const features = [
    {
      id: 1,
      num: "01",
      title: "In-App SOS Button",
      description: "Tap the SOS button in the NAZR app to alert your support network.",
    },
    {
      id: 2,
      num: "02",
      title: "Volume Button SOS",
      description: "Press your volume button three times to instantly trigger an SOS and alert your trusted contacts.",
    },
    {
      id: 3,
      num: "03",
      title: "Home Screen SOS Widget",
      description: "Trigger SOS directly from your home screen without opening the application.",
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[#FFF1EB] flex justify-center pt-12 md:pt-16 lg:pt-20 pb-[18px] md:pb-[34px] lg:pb-[50px] px-4 md:px-8 lg:px-14 relative z-30 overflow-hidden">
      <div className="w-full max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 lg:gap-14 min-w-0">

        {/* Left Column: Heading, Subheading, 3 Rows, Store Badges */}
        <div className="w-full md:w-[58%] lg:w-[60%] flex flex-col items-center md:items-start text-left min-w-0">
          {/* Main Title */}
          <h2
            className="font-[family-name:var(--font-bebas)] font-normal text-[#161616] text-[52px] sm:text-[68px] md:text-[76px] lg:text-[88px] leading-[88%] tracking-[-0.03em] uppercase m-0 w-full text-left"
            style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
          >
            HELP. WITHOUT THE HOLD UP.
          </h2>

          {/* Subheading */}
          <p className="font-['Inter',_sans-serif] font-normal text-[#161616] text-[16px] sm:text-[18px] md:text-[19px] leading-[1.35] tracking-[-0.02em] mt-3 md:mt-4 mb-6 md:mb-8 opacity-95 w-full text-left">
            Three ways to activate SOS. For whichever you can reach the fastest.
          </p>

          {/* Mobile Phone Mockup (Visible only on mobile between Subtitle and Rows, matching Image 2) */}
          <div className="w-full flex md:hidden items-center justify-center my-4 overflow-hidden">
            <div className="relative w-[280px] h-[480px] flex items-center justify-center overflow-hidden pointer-events-none">
              <div
                className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                  !effectiveCard ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {animData0 ? (
                  <Lottie
                    animationData={animData0}
                    loop={true}
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
              {animData2 && (
                <div
                  className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                    effectiveCard === 1 ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Lottie
                    animationData={animData2}
                    loop={true}
                    className="w-full h-full object-contain drop-shadow-2xl scale-[2.05] transform-gpu"
                  />
                </div>
              )}
              {animData1 && (
                <div
                  className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                    effectiveCard === 2 ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Lottie
                    animationData={animData1}
                    loop={true}
                    className="w-full h-full object-contain drop-shadow-2xl scale-[2.05] transform-gpu"
                  />
                </div>
              )}
              {animData3 && (
                <div
                  className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                    effectiveCard === 3 ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Lottie
                    animationData={animData3}
                    loop={true}
                    className="w-full h-full object-contain drop-shadow-2xl scale-[2.05] transform-gpu"
                  />
                </div>
              )}
            </div>
          </div>

          {/* 3 Numbered Feature Rows with Divider Lines (Below 1 and Below 2 only) */}
          <div className="w-full flex flex-col">
            {features.map((item, idx) => {
              const isSelected = effectiveCard === item.id;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setActiveCard(item.id)}
                  className={`w-full py-5 sm:py-6 transition-colors duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-6 ${
                    idx < features.length - 1 ? "border-b border-[#161616]/30" : ""
                  }`}
                >
                  {/* Pink Number Index */}
                  <span className="font-['Inter',_sans-serif] font-bold text-[#FF0E97] text-[24px] sm:text-[28px] md:text-[32px] leading-none shrink-0 w-[42px] sm:w-[50px]">
                    {item.num}
                  </span>

                  {/* Feature Title */}
                  <h3 className="font-['Inter',_sans-serif] font-bold text-[#161616] text-[17px] sm:text-[18px] md:text-[20px] leading-[1.25] shrink-0 w-full sm:w-[160px] md:w-[185px] lg:w-[205px] m-0">
                    {item.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="font-['Inter',_sans-serif] font-normal text-[#404040] text-[13.5px] sm:text-[14px] md:text-[14.5px] leading-[1.4] m-0 flex-1">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile Buttons Layout (< md): App Store & Google Play in one row, Get the app centered below */}
          <div className="mt-8 flex md:hidden flex-col items-center gap-3 w-full max-w-[320px] mx-auto self-center">
            {/* Row 1: App Store & Google Play side-by-side */}
            <div className="flex items-center justify-center gap-2.5 w-full">
              {/* Download on the App Store */}
              <Link
                href="/nazrapp"
                className="flex-1 flex items-center justify-center gap-2 bg-black hover:bg-black/85 text-white px-2 py-1.5 rounded-[6px] transition-all shadow-sm active:scale-95 whitespace-nowrap h-[44px] border border-white/10"
              >
                <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-.98 1.71-.87 2.73.99.08 2.02-.52 2.57-1.23z" />
                </svg>
                <div className="flex flex-col text-left justify-center">
                  <span className="text-[7.5px] leading-tight text-white/80 font-normal">Download on the</span>
                  <span className="text-[12px] font-semibold leading-tight font-sans text-white">App Store</span>
                </div>
              </Link>

              {/* GET IT ON Google Play */}
              <Link
                href="/nazrapp"
                className="flex-1 h-[44px] transition-all hover:opacity-90 active:scale-95 shrink-0 flex items-center justify-center"
              >
                <Image
                  unoptimized
                  src="/images/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={148}
                  height={44}
                  className="h-[44px] w-full object-contain rounded-[6px]"
                />
              </Link>
            </div>

            {/* Row 2: Pink Get the app button centered below */}
            <Link
              href="/nazrapp"
              className="w-full flex items-center justify-center gap-2.5 bg-[#FF0E97] hover:bg-[#E00A85] text-white px-5 py-2.5 rounded-[6px] font-['Inter',_sans-serif] text-[14px] font-medium tracking-wide transition-all shadow-sm active:scale-95 whitespace-nowrap h-[44px]"
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
              className="flex items-center justify-center gap-2.5 bg-[#FF0E97] hover:bg-[#E00A85] text-white px-5 py-2.5 rounded-[6px] font-['Inter',_sans-serif] text-[14px] font-medium tracking-wide transition-all shadow-sm active:scale-95 whitespace-nowrap h-[44px]"
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
            <Link
              href="/nazrapp"
              className="flex items-center justify-center gap-2 bg-black hover:bg-black/85 text-white px-3.5 py-1.5 rounded-[6px] transition-all shadow-sm active:scale-95 whitespace-nowrap h-[44px]"
            >
              <svg className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-.98 1.71-.87 2.73.99.08 2.02-.52 2.57-1.23z" />
              </svg>
              <div className="flex flex-col text-left justify-center">
                <span className="text-[8.5px] leading-tight text-white/80 font-normal">Download on the</span>
                <span className="text-[13px] font-semibold leading-tight font-sans text-white">App Store</span>
              </div>
            </Link>

            {/* GET IT ON Google Play */}
            <Link
              href="/nazrapp"
              className="h-[44px] transition-all hover:opacity-90 active:scale-95 shrink-0 flex items-center justify-center"
            >
              <Image
                unoptimized
                src="/images/google-play-badge.png"
                alt="Get it on Google Play"
                width={154}
                height={44}
                className="h-[44px] w-auto object-contain rounded-[7px]"
              />
            </Link>
          </div>
        </div>

        {/* Right Column: Desktop Phone Mockup with Original Lottie Animations Kept Intact */}
        <div className="hidden md:flex w-full md:w-[42%] lg:w-[40%] items-center justify-center relative min-h-[460px] md:min-h-[560px]">
          <div className="relative w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] h-[500px] sm:h-[560px] md:h-[600px] lg:h-[640px] flex items-center justify-center overflow-visible pointer-events-none">
            {/* Default Static Phone / Lottie */}
            <div
              className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                !effectiveCard ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {animData0 ? (
                <Lottie
                  animationData={animData0}
                  loop={true}
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
            {animData2 && (
              <div
                className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                  effectiveCard === 1 ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Lottie
                  animationData={animData2}
                  loop={true}
                  className="w-full h-full object-contain drop-shadow-2xl scale-[2.05] transform-gpu"
                />
              </div>
            )}

            {/* Card 2 Lottie (Volume Button SOS) */}
            {animData1 && (
              <div
                className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                  effectiveCard === 2 ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Lottie
                  animationData={animData1}
                  loop={true}
                  className="w-full h-full object-contain drop-shadow-2xl scale-[2.05] transform-gpu"
                />
              </div>
            )}

            {/* Card 3 Lottie (Home Screen Widget) */}
            {animData3 && (
              <div
                className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                  effectiveCard === 3 ? "opacity-100 z-20" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Lottie
                  animationData={animData3}
                  loop={true}
                  className="w-full h-full object-contain drop-shadow-2xl scale-[2.05] transform-gpu"
                />
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
