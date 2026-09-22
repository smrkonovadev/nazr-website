"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const poolRef = useRef<HTMLDivElement>(null);

  // GSAP quickTo for spring-like mouse tracking (zero React re-renders)
  useEffect(() => {
    const spotlightEl = spotlightRef.current;
    const poolEl = poolRef.current;
    if (!spotlightEl || !poolEl) return;

    // quickTo creates a reusable tween that updates on every call
    const rotateSpotlight = gsap.quickTo(spotlightEl, "rotation", {
      duration: 0.6,
      ease: "power2.out",
    });

    const shiftPool = gsap.quickTo(poolEl, "x", {
      duration: 0.6,
      ease: "power2.out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const normalized = Math.max(-1, Math.min(1, (e.clientX - centerX) / (window.innerWidth / 2)));

      // Center (0) -> 0deg, Mouse Right (+1) -> tilts right, Mouse Left (-1) -> tilts left
      rotateSpotlight(-normalized * 10.5);
      shiftPool(normalized * 52);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#161616] text-white flex flex-col justify-center items-center overflow-hidden relative px-4 md:px-8 lg:px-12 pt-2 md:pt-4 pb-12 md:pb-16 min-h-[calc(100vh-100px)] select-none"
    >
      {/* 3-Column Layout: Left Image | Center Spotlight & Copy | Right Image */}
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 lg:gap-8 relative z-10">

        {/* Left Photo Card */}
        <div className="hidden md:block shrink-0 w-[240px] lg:w-[290px] xl:w-[320px] h-[480px] lg:h-[550px] xl:h-[580px] relative rounded-[28px] lg:rounded-[32px] overflow-hidden shadow-2xl border border-white/5 bg-[#1C1C1C]">
          <Image
            src="/images/HOMEHERO/heorleft.webp"
            alt="Safety in motion"
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="(max-width: 1024px) 240px, (max-width: 1280px) 290px, 320px"
          />
        </div>

        {/* Center Content Column with Interactive Volumetric Spotlight */}
        <div className="flex-1 w-full max-w-[580px] flex flex-col items-center justify-center text-center relative py-4 overflow-visible">

          {/* Interactive Volumetric Spotlight Container (Attached to Top Axle) */}
          <div
            ref={spotlightRef}
            className="absolute top-[-65px] left-1/2 -translate-x-1/2 w-[520px] h-[560px] pointer-events-none z-0 overflow-hidden"
            style={{ transformOrigin: "50% 12px" }}
          >
            <svg
              viewBox="0 0 520 500"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Heavy blur for feathered beam edges - eliminates hard polygon lines */}
                <filter id="spotlightSoftBlur" x="-30%" y="-20%" width="160%" height="140%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                </filter>

                {/* Medium blur for inner core beam */}
                <filter id="spotlightCoreBlur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="7" />
                </filter>

                {/* Outer ambient haze gradient - strictly fades out completely before bottom */}
                <linearGradient id="outerHazeGrad" x1="0.5" y1="0" x2="0.5" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
                  <stop offset="22%" stopColor="#ffffff" stopOpacity="0.22" />
                  <stop offset="55%" stopColor="#ffffff" stopOpacity="0.08" />
                  <stop offset="80%" stopColor="#ffffff" stopOpacity="0.01" />
                  <stop offset="92%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>

                {/* Inner core beam gradient - strictly fades out before bottom */}
                <linearGradient id="innerBeamGrad" x1="0.5" y1="0" x2="0.5" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
                  <stop offset="22%" stopColor="#ffffff" stopOpacity="0.32" />
                  <stop offset="55%" stopColor="#ffffff" stopOpacity="0.10" />
                  <stop offset="78%" stopColor="#ffffff" stopOpacity="0.02" />
                  <stop offset="90%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>

                {/* Top bulb glow */}
                <radialGradient id="topLensGlow" cx="50%" cy="40%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="40%" stopColor="#ffffff" stopOpacity="0.5" />
                  <stop offset="75%" stopColor="#ffffff" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Layer 1: Wide diffused outer haze cone terminating cleanly at y=470 */}
              <polygon
                points="200,14 320,14 460,470 60,470"
                fill="url(#outerHazeGrad)"
                filter="url(#spotlightSoftBlur)"
              />

              {/* Layer 2: Core light beam terminating cleanly at y=460 */}
              <polygon
                points="215,14 305,14 430,460 90,460"
                fill="url(#innerBeamGrad)"
                filter="url(#spotlightCoreBlur)"
              />

              {/* Layer 3: Top Lamp Fixture & Lens */}
              <ellipse cx="260" cy="14" rx="70" ry="17" fill="url(#topLensGlow)" />
              <ellipse cx="260" cy="14" rx="40" ry="9" fill="#ffffff" opacity="0.75" />
            </svg>
          </div>

          {/* Main Hero Typography */}
          <div className="relative z-10 flex flex-col items-center mt-9 sm:mt-4 md:mt-0">
            {/* THE */}
            <span
              className="font-[family-name:var(--font-bebas)] text-[#FFF9EB] text-[34px] sm:text-[42px] lg:text-[48px] font-normal leading-[1.0] tracking-wide uppercase"
            >
              THE
            </span>

            {/* WORLD STARES */}
            <h1
              className="font-[family-name:var(--font-bebas)] text-[#FFF9EB] text-[68px] sm:text-[88px] lg:text-[104px] xl:text-[112px] font-normal leading-[0.88] tracking-[-0.02em] uppercase m-0"
            >
              WORLD STARES
            </h1>

            {/* WE */}
            <span
              className="font-[family-name:var(--font-bebas)] text-[#FF0E97] text-[34px] sm:text-[42px] lg:text-[48px] font-normal leading-[1.0] tracking-wide uppercase mt-1.5"
            >
              WE
            </span>

            {/* STARE BACK */}
            <h1
              className="font-[family-name:var(--font-bebas)] text-[#FF0E97] text-[68px] sm:text-[88px] lg:text-[104px] xl:text-[112px] font-normal leading-[0.88] tracking-[-0.02em] uppercase m-0"
            >
              STARE BACK
            </h1>
          </div>

          {/* Subtitle Description */}
          <p
            className="relative z-10 font-[family-name:var(--font-inter)] text-[#C8C8C8] text-[13.5px] sm:text-[14.5px] md:text-[15px] leading-[1.5] max-w-[360px] sm:max-w-[400px] mt-4 mb-6 text-center"
          >
            India&apos;s first safety ecosystem for the modern woman. Designed for your commute, your nights out, and every move in between.
          </p>

          {/* Action Buttons Row */}
          <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            {/* Primary Button: Shop the tools */}
            <Link
              href="/shop"
              className="flex items-center justify-center gap-2.5 bg-[#FF0E97] hover:bg-[#E00A85] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-[6px] transition-all shadow-md active:scale-95 cursor-pointer font-[family-name:var(--font-inter)] text-[14px] font-medium tracking-wide whitespace-nowrap"
            >
              <Image
                unoptimized
                src="/images/logosvg.svg"
                alt="NAZR Owl"
                width={22}
                height={16}
                className="brightness-0 invert object-contain"
              />
              <span>Shop the tools</span>
            </Link>

            {/* Secondary Button: Get the app */}
            <Link
              href="/nazrapp"
              className="flex items-center justify-center bg-transparent hover:bg-white/5 text-[#FFF9EB] border border-[#484848] hover:border-white/80 px-5 sm:px-6 py-2.5 sm:py-3 rounded-[6px] transition-all active:scale-95 cursor-pointer font-[family-name:var(--font-inter)] text-[14px] font-medium tracking-wide whitespace-nowrap"
            >
              Get the app
            </Link>
          </div>

          {/* Bottom Floor Light Pool (reacts smoothly to mouse movement) */}
          <div
            ref={poolRef}
            className="w-[280px] sm:w-[320px] md:w-[350px] h-[18px] sm:h-[22px] mx-auto mt-4 pointer-events-none relative z-0 flex items-center justify-center"
          >
            {/* Soft, natural spotlight puddle on floor */}
            <div
              className="w-full h-full rounded-[100%]"
              style={{
                background: "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.07) 45%, rgba(255,255,255,0.01) 70%, transparent 85%)",
                filter: "blur(6px)",
              }}
            />
            {/* Gentle center glow */}
            <div
              className="w-[160px] sm:w-[190px] h-[8px] sm:h-[10px] rounded-[100%] absolute"
              style={{
                background: "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.06) 55%, transparent 80%)",
                filter: "blur(2.5px)",
              }}
            />
          </div>



        </div>

        {/* Right Photo Card */}
        <div className="hidden md:block shrink-0 w-[240px] lg:w-[290px] xl:w-[320px] h-[480px] lg:h-[550px] xl:h-[580px] relative rounded-[28px] lg:rounded-[32px] overflow-hidden shadow-2xl border border-white/5 bg-[#1C1C1C]">
          <Image
            src="/images/HOMEHERO/heroright.webp"
            alt="On Me Safety Spray"
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="(max-width: 1024px) 240px, (max-width: 1280px) 290px, 320px"
          />
        </div>

      </div>
    </section>
  );
}