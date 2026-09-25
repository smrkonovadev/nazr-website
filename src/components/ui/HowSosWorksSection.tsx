"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

export function HowSosWorksSection() {
  const [mounted, setMounted] = useState(false);
  const [lottie1, setLottie1] = useState<any>(null);
  const [lottie2, setLottie2] = useState<any>(null);
  const [lottie3, setLottie3] = useState<any>(null);
  const [lottie4, setLottie4] = useState<any>(null);

  const [activeStep, setActiveStep] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Desktop Lottie refs
  const deskRef0 = useRef<LottieRefCurrentProps>(null);
  const deskRef1 = useRef<LottieRefCurrentProps>(null);
  const deskRef2 = useRef<LottieRefCurrentProps>(null);
  const deskRef3 = useRef<LottieRefCurrentProps>(null);

  // Mobile Lottie refs
  const mobRef0 = useRef<LottieRefCurrentProps>(null);
  const mobRef1 = useRef<LottieRefCurrentProps>(null);
  const mobRef2 = useRef<LottieRefCurrentProps>(null);
  const mobRef3 = useRef<LottieRefCurrentProps>(null);

  // Load Lottie JSON files
  useEffect(() => {
    setMounted(true);

    Promise.all([
      fetch("/images/Trigger.json").then((res) => res.json()),
      fetch("/images/Gaurdian Alert.json").then((res) => res.json()),
      fetch("/images/nazr_app_3.json").then((res) => res.json()),
      fetch("/images/Take Action.json").then((res) => res.json()),
    ])
      .then(([d1, d2, d3, d4]) => {
        setLottie1(d1);
        setLottie2(d2);
        setLottie3(d3);
        setLottie4(d4);
      })
      .catch((err) => console.error("Error loading SOS Lotties:", err));
  }, []);

  const triggerMethods = [
    "Tap SOS in the app",
    "Press volume 3 times",
    "Use the home screen widget",
  ];

  const steps = [
    {
      number: "01",
      title: "YOU TRIGGER SOS",
      description:
        "Use whichever way you can reach. You get a 5-second window to cancel if it was a mistake.",
      lottieData: lottie1,
      deskRef: deskRef0,
      mobRef: mobRef0,
    },
    {
      number: "02",
      title: "YOUR TRUSTED CIRCLE IS ALERTED",
      description:
        "Up to five people get a WhatsApp alert with your live location, with SMS as backup. They don't need the app.",
      lottieData: lottie2,
      deskRef: deskRef1,
      mobRef: mobRef1,
    },
    {
      number: "03",
      title: "NAZR WORKS IN THE BACKGROUND",
      description:
        "Your live location keeps updating and audio starts recording, so your people have the details they need.",
      lottieData: lottie3,
      deskRef: deskRef2,
      mobRef: mobRef2,
    },
    {
      number: "04",
      title: "YOUR PEOPLE CAN ACT",
      description:
        "Your Trusted Circle can follow your location, hear audio updates, and see the nearest emergency services with directions.",
      lottieData: lottie4,
      deskRef: deskRef3,
      mobRef: mobRef3,
    },
  ];

  // Auto-move timeline every 4.5 seconds
  const STEP_DURATION = 4500;

  const handleStepClick = (newStep: number) => {
    setActiveStep(newStep);
    if (timerRef.current) clearInterval(timerRef.current);
    if (isInView) {
      timerRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 4);
      }, STEP_DURATION);
    }
  };

  // When user scrolls to this section: always start from 1st step (index 0)
  useEffect(() => {
    if (!mounted || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(0);
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [mounted]);

  // Timer only runs while the user is actively viewing this section
  useEffect(() => {
    if (!mounted || !isInView) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, STEP_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [mounted, isInView]);

  // Synchronize desktop Lottie playback: active step plays from start; others are frozen at 1st frame
  useEffect(() => {
    if (!mounted) return;

    const deskRefs = [deskRef0, deskRef1, deskRef2, deskRef3];

    deskRefs.forEach((desk, idx) => {
      if (idx === activeStep) {
        desk.current?.goToAndPlay(0, true);
      } else {
        desk.current?.goToAndStop(0, true);
      }
    });
  }, [activeStep, mounted, lottie1, lottie2, lottie3, lottie4]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0A0A0A] text-white pt-[48px] pb-[48px] px-4 sm:px-8 md:px-[73px] flex flex-col items-center relative overflow-hidden z-20"
    >
      <div className="w-full max-w-[1294px] mx-auto flex flex-col items-center">

        {/* Header Block: 1294 Fill × 214 Hug */}
        <div className="w-full max-w-[1294px] flex flex-col items-center">

          {/* Eyebrow Tag */}
          <span
            className="text-[#E6007E] uppercase text-center text-[12px] leading-[16px] tracking-[1.2px] md:text-[24px] md:leading-[24px] md:tracking-[0px]"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            HOW SOS WORKS
          </span>

          {/* Main Title (Exact 8px gap above, 907px max width in 1294 container) */}
          <h2
            className="mt-[8px] m-0 text-white uppercase text-center max-w-[907px] text-[32px] leading-[36px] tracking-[0px] md:text-[100px] md:leading-[96px] md:tracking-[0px]"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            SOS, WITHOUT THE SCRAMBLE.
          </h2>

          {/* Subtitle (Moved up to tighten gap with Bebas Neue title) */}
          <p
            className="mt-[6px] text-[#A3A3A3] text-center max-w-xl text-[14px] leading-[22.75px] tracking-[0px] md:text-[18px] md:leading-[28px]"
            style={{
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            Three ways to trigger it. One clear chain of what happens next.
          </p>

          {/* 3 Trigger Method Pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-4 w-full max-w-[280px] sm:max-w-none">
            {triggerMethods.map((method, idx) => (
              <div
                key={idx}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-[#161215] border border-[#E6007E]/70 text-[#FFF1EB] shadow-[0_0_10px_rgba(230,0,126,0.12)] transition-transform hover:scale-105"
                style={{
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "13px",
                  lineHeight: "18px",
                  letterSpacing: "0px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#E6007E] shrink-0 shadow-[0_0_6px_#E6007E]" />
                <span className="whitespace-nowrap">{method}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gap 40px to Phone Mockups */}

        {/* Mobile View (< md) - Continuous Vertical Timeline */}
        <div className="w-full flex flex-col md:hidden mt-[40px] max-w-[360px] mx-auto">
          {/* Vertical Timeline container */}
          <div className="relative w-full flex flex-col">
            {/* Continuous Vertical Track Line: starts at center of Circle 01 (16px), extends to bottom of Step 4 */}
            <div className="absolute left-[15px] top-[16px] bottom-[30px] w-[2px] bg-white/20 pointer-events-none" />

            {/* Steps 01 to 04 */}
            <div className="flex flex-col gap-10 w-full">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col w-full z-10">
                  {/* Step Header: Circle Node + Step Title */}
                  <div className="flex items-center gap-3.5 w-full">
                    {/* Circle Node (32px) */}
                    <div
                      className="w-[32px] h-[32px] rounded-full bg-[#E6007E] text-white flex items-center justify-center shrink-0 shadow-[0_0_15px_#E6007E]"
                      style={{
                        fontFamily: "var(--font-inter), 'Inter', sans-serif",
                        fontWeight: 700,
                        fontSize: "13px",
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Step Title in Bebas Neue */}
                    <h3
                      className="m-0 text-white uppercase text-[19px] sm:text-[21px] leading-[25px] tracking-[0.4px] whitespace-nowrap"
                      style={{
                        fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                        fontWeight: 400,
                        verticalAlign: "middle",
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Step Description: Indented past the node circle */}
                  <p
                    className="mt-2 pl-[46px] pr-2 text-[#A0A0A0] text-[12px] leading-[18px] tracking-[0px]"
                    style={{
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                      fontWeight: 400,
                      verticalAlign: "middle",
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Centered Phone Mockup */}
                  <div className="mt-6 flex justify-center items-center w-full">
                    <div
                      className={`flex items-center justify-center relative shrink-0 ${
                        idx === 2 ? "overflow-visible" : "overflow-hidden"
                      }`}
                      style={{
                        width: "160px",
                        height: "324px",
                      }}
                    >
                      {mounted && step.lottieData ? (
                        <Lottie
                          key={`sos-lottie-mob-${idx}`}
                          animationData={step.lottieData}
                          loop={true}
                          autoplay={true}
                          className={`drop-shadow-2xl ${idx === 2 ? "sos-step3-lottie-mobile" : ""}`}
                          style={{
                            width: idx === 2 ? "343px" : "160px",
                            height: "324px",
                            maxWidth: "none",
                          }}
                        />
                      ) : (
                        <div
                          className="rounded-[28px] bg-[#141416] border border-white/10 animate-pulse flex items-center justify-center"
                          style={{
                            width: "160px",
                            height: "324px",
                          }}
                        >
                          <span className="w-8 h-8 rounded-full bg-[#E6007E]/30" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Bottom Divider Line */}
          <div className="w-full h-[1px] bg-white/10 mt-12 mb-8" />

          {/* Mobile Bottom Slogan */}
          <h3
            className="m-0 text-white uppercase text-center text-[30px] leading-[37.5px] tracking-[0.75px]"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              fontWeight: 400,
              verticalAlign: "middle",
            }}
          >
            HELP THAT MOVES AS FAST AS YOU DO.
          </h3>

          {/* Mobile App Store & Google Play Badges Stacked Vertically */}
          <div className="flex flex-col items-center gap-3.5 mt-6 w-full max-w-[215px] mx-auto">
            {/* Apple App Store Button */}
            <Link
              href="https://apps.apple.com/in/app/nazr-women-safety-app/id6787188929"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-black border border-white/25 hover:border-white/60 transition-all text-white shadow-md hover:scale-105"
            >
              <Image
                src="/images/appstore-icon.png"
                alt="Apple Logo"
                width={18}
                height={22}
                className="w-[18px] h-[22px] object-contain shrink-0"
              />
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 leading-none">
                  Download on the
                </span>
                <span className="text-sm font-semibold font-[family-name:var(--font-inter)] leading-tight">
                  App Store
                </span>
              </div>
            </Link>

            {/* Google Play Store Button */}
            <Link
              href="https://play.google.com/store/apps/details?id=com.nazr.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-black border border-white/25 hover:border-white/60 transition-all text-white shadow-md hover:scale-105"
            >
              <Image
                src="/images/playstore-icon.png"
                alt="Google Play Logo"
                width={20}
                height={22}
                className="w-[20px] h-[22px] object-contain shrink-0"
              />
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 leading-none">
                  GET IT ON
                </span>
                <span className="text-sm font-semibold font-[family-name:var(--font-inter)] leading-tight">
                  Google Play
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Desktop Layout (>= md) */}
        <div className="hidden md:flex flex-col w-full max-w-[1294px]">

          {/* Row 1: Phone Mockups Container (1294 Fill × 328 Hug, gap 40px above) */}
          <div className="w-full max-w-[1294px] h-[328px] mt-[40px] flex items-center justify-between gap-[40px]">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <div
                  key={idx}
                  onClick={() => handleStepClick(idx)}
                  className={`w-[293.5px] h-[328px] flex items-center justify-center shrink-0 cursor-pointer transition-all duration-500 ${isActive
                    ? "opacity-100 scale-100 drop-shadow-[0_12px_28px_rgba(230,0,126,0.25)]"
                    : "opacity-40 hover:opacity-75 scale-98 hover:scale-100"
                    }`}
                >
                  <div
                    className={`flex items-center justify-center relative shrink-0 ${idx === 2 ? "overflow-visible" : "overflow-hidden"}`}
                    style={{
                      width: "150px",
                      height: "304px",
                      transform: "rotate(0deg)",
                      opacity: 1,
                    }}
                  >
                    {mounted && step.lottieData ? (
                      <Lottie
                        lottieRef={step.deskRef}
                        key={`sos-lottie-desk-${idx}`}
                        animationData={step.lottieData}
                        loop={true}
                        autoplay={false}
                        className={`drop-shadow-2xl ${idx === 2 ? "sos-step3-lottie" : ""}`}
                        style={{
                          width: idx === 2 ? "322px" : "150px",
                          height: "304px",
                          maxWidth: "none",
                          transform: "rotate(0deg)",
                          opacity: 1,
                        }}
                      />
                    ) : (
                      <div
                        className="rounded-[28px] bg-[#141416] border border-white/10 animate-pulse flex items-center justify-center"
                        style={{
                          width: "150px",
                          height: "304px",
                        }}
                      >
                        <span className="w-8 h-8 rounded-full bg-[#E6007E]/30" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row 2: Timeline Bar Row (1294 Fill × 32 Hug, gap 40px above) */}
          <div className="w-full max-w-[1294px] h-[32px] mt-[40px] relative flex items-center">

            {/* Horizontal Continuous Base Line connecting Circle 1 center to Circle 4 center */}
            {/* Col 1 center is at 293.5 / 2 = 146.75px. Col 4 center is at 1294 - 146.75 = 1147.25px */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-[1.5px] bg-[#8E8E93]/30 pointer-events-none"
              style={{
                left: "146.75px",
                right: "146.75px",
              }}
            />

            {/* Active Glowing Animated Progress Line tracking activeStep */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-[#E6007E] pointer-events-none shadow-[0_0_10px_#E6007E] transition-all duration-700 ease-out"
              style={{
                left: "146.75px",
                width: `${(activeStep / 3) * 1000.5}px`,
              }}
            />

            {/* 4 Circular Nodes (w-[32px] h-[32px]) */}
            <div className="w-full flex justify-between gap-[40px] relative z-10">
              {steps.map((step, idx) => {
                const isActive = idx === activeStep;
                const isPast = idx < activeStep;
                return (
                  <div
                    key={idx}
                    onClick={() => handleStepClick(idx)}
                    className="w-[293.5px] flex justify-center items-center shrink-0 cursor-pointer group"
                  >
                    <div
                      className={`w-[32px] h-[32px] rounded-full flex items-center justify-center text-white text-xs font-bold tracking-wider transition-all duration-500 select-none ${isActive
                        ? "bg-[#E6007E] scale-115 shadow-[0_0_22px_#E6007E] ring-2 ring-white/70"
                        : isPast
                          ? "bg-[#E6007E] opacity-90 scale-100"
                          : "bg-[#1E151B] border border-[#E6007E]/50 text-white/50 scale-95 group-hover:border-[#E6007E] group-hover:text-white"
                        }`}
                      style={{
                        fontFamily: "var(--font-inter), 'Inter', sans-serif",
                      }}
                    >
                      {step.number}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 3: Step Titles and Descriptions (Exact 16px gap above, 293.5 Fill × 147.75 Hug) */}
          <div className="w-full max-w-[1294px] mt-[16px] flex justify-between items-start gap-[40px]">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <div
                  key={idx}
                  onClick={() => handleStepClick(idx)}
                  className="w-[293.5px] min-h-[147.75px] flex flex-col items-center text-center shrink-0 cursor-pointer group"
                >
                  <h3
                    className={`m-0 uppercase text-center min-h-[28px] whitespace-nowrap flex items-center justify-center transition-all duration-300 ${isActive
                      ? "text-white scale-102"
                      : "text-white/40 group-hover:text-white/80"
                      }`}
                    style={{
                      fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "20px",
                      lineHeight: "26px",
                      letterSpacing: "0.5px",
                      textAlign: "center",
                      verticalAlign: "middle",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-[6px] text-center w-full max-w-[293.5px] transition-colors duration-300 ${isActive
                      ? "text-[#D4D4D8]"
                      : "text-[#A0A0A0]/40 group-hover:text-[#A0A0A0]/80"
                      }`}
                    style={{
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "14px",
                      lineHeight: "22.75px",
                      letterSpacing: "0px",
                      textAlign: "center",
                      verticalAlign: "middle",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Desktop Bottom Banner: Slogan + App Store Badges (hidden on mobile, visible on desktop) */}
        <div className="hidden md:flex w-full max-w-[1294px] flex-row items-center justify-between gap-6 mt-[40px]">

          {/* Slogan */}
          <h3
            className="m-0 text-white uppercase text-center md:text-left text-[32px] sm:text-[40px] md:text-[48px]"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "48px",
              letterSpacing: "1.2px",
              verticalAlign: "middle",
            }}
          >
            HELP THAT MOVES AS FAST AS YOU DO.
          </h3>

          {/* App Store & Google Play Badges */}
          <div className="flex items-center gap-3 shrink-0">

            {/* Apple App Store Button */}
            <Link
              href="https://apps.apple.com/in/app/nazr-women-safety-app/id6787188929"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-black border border-white/25 hover:border-white/60 transition-all text-white shadow-md hover:scale-105"
            >
              <Image
                src="/images/appstore-icon.png"
                alt="Apple Logo"
                width={18}
                height={22}
                className="w-[18px] h-[22px] object-contain shrink-0"
              />
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 leading-none">Download on the</span>
                <span className="text-sm font-semibold font-[family-name:var(--font-inter)] leading-tight">App Store</span>
              </div>
            </Link>

            {/* Google Play Store Button */}
            <Link
              href="https://play.google.com/store/apps/details?id=com.nazr.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-black border border-white/25 hover:border-white/60 transition-all text-white shadow-md hover:scale-105"
            >
              <Image
                src="/images/playstore-icon.png"
                alt="Google Play Logo"
                width={20}
                height={22}
                className="w-[20px] h-[22px] object-contain shrink-0"
              />
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider text-neutral-400 leading-none">GET IT ON</span>
                <span className="text-sm font-semibold font-[family-name:var(--font-inter)] leading-tight">Google Play</span>
              </div>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
