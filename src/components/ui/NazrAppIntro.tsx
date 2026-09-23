"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function NazrAppIntro() {
  return (
    <div className="w-full max-md:bg-white md:bg-[#f4f4f4] relative px-5 sm:px-10 md:px-14 lg:px-20 pt-6 sm:pt-12 md:pt-14 pb-8 md:pb-0 overflow-hidden">
      
      {/* ======================================================== */}
      {/* MOBILE LAYOUT (md:hidden) — Exact match to screenshot    */}
      {/* ======================================================== */}
      <div className="md:hidden flex flex-col items-start w-full max-w-[390px] mx-auto z-10 text-left">
        
        {/* Eyebrow Tag */}
        <span
          className="text-[#FF0E97] uppercase tracking-[0.08em] font-semibold text-[13px] mb-2.5 inline-block"
          style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
        >
          THE FREE NAZR APP
        </span>

        {/* Main Title: Bebas Neue */}
        <h1
          className="m-0 text-[#141416] uppercase font-normal text-[52px] sm:text-[60px] tracking-tight leading-[88%]"
          style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
        >
          YOU MOVE,<br />
          NAZR MOVES WITH<br />
          YOU.
        </h1>

        {/* Subtitle */}
        <p
          className="mt-4 mb-3 text-[#52525B] text-[15px] leading-[145%]"
          style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
        >
          Most safety apps ask you to stop what you&apos;re doing. Nazr works quietly in the background, so your people know you&apos;re okay.
        </p>

        {/* Center Robotic Owl with Background Circuit Lines */}
        <div className="relative w-full max-w-[320px] aspect-[687/666] mx-auto mt-2 mb-6 flex items-end justify-center">
          <OwlCircuitLines />
          <div className="relative z-10 w-full h-full flex items-end justify-center">
            <Image
              src="/images/nazr_owl_hero.png"
              alt="NAZR Guardian Owl - Safety App Assistant"
              fill
              priority
              className="object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>

        {/* Stacked Full-Width Download Buttons */}
        <div className="flex flex-col gap-2.5 w-full">
          {/* Apple App Store Button */}
          <Link
            href="https://apps.apple.com/in/app/nazr-women-safety-app/id6787188929"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 py-3 px-5 rounded-[14px] bg-black border border-black hover:bg-neutral-900 transition-all text-white shadow-sm"
          >
            <Image
              src="/images/appstore-icon.png"
              alt="Apple Logo"
              width={22}
              height={26}
              className="w-[20px] h-[24px] object-contain shrink-0"
            />
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 leading-none">
                Download on the
              </span>
              <span className="text-[17px] font-semibold font-[family-name:var(--font-inter)] leading-tight">
                App Store
              </span>
            </div>
          </Link>

          {/* Google Play Store Button */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.nazr.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 py-3 px-5 rounded-[14px] bg-black border border-black hover:bg-neutral-900 transition-all text-white shadow-sm"
          >
            <Image
              src="/images/playstore-icon.png"
              alt="Google Play Logo"
              width={22}
              height={26}
              className="w-[22px] h-[24px] object-contain shrink-0"
            />
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 leading-none">
                GET IT ON
              </span>
              <span className="text-[17px] font-semibold font-[family-name:var(--font-inter)] leading-tight">
                Google Play
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop QR Code Card (Centered) */}
        <div className="mt-5 mx-auto flex items-center gap-3.5 bg-white border border-[#E4E4E7] rounded-[16px] px-4 py-2.5 shadow-xs">
          <div className="w-[44px] h-[44px] flex items-center justify-center shrink-0">
            <Image
              src="/QRCODEFORDEST.png"
              alt="Scan to Download NAZR App"
              width={44}
              height={44}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col text-left">
            <span
              className="text-[13.5px] font-bold text-[#141416] leading-snug"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            >
              On desktop?
            </span>
            <span
              className="text-[12px] text-[#71717A] leading-tight"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            >
              Scan to download
            </span>
          </div>
        </div>

        {/* Micro-copy (Centered) */}
        <p
          className="mt-4 mb-1 text-center w-full text-[12px] text-[#71717A]"
          style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
        >
          Free on iOS and Android
        </p>
      </div>

      {/* ======================================================== */}
      {/* DESKTOP LAYOUT (hidden md:flex) — 2 Columns              */}
      {/* ======================================================== */}
      <div className="hidden md:flex w-full max-w-[1280px] mx-auto md:flex-row items-center md:items-end justify-between gap-8 md:gap-6 lg:gap-12 relative z-10">

        {/* Left Column: Text & Download Badges */}
        <div className="w-full md:w-[54%] lg:w-[52%] flex flex-col items-start text-left z-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 pt-2">
          
          {/* Eyebrow Tag */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#FF0E97] uppercase tracking-[0.08em] font-semibold text-[13px] sm:text-[14px] md:text-[15px] mb-2 sm:mb-3 inline-block"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
          >
            THE FREE NAZR APP
          </motion.span>

          {/* Main Title: Bebas Neue */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="m-0 text-[#141416] uppercase font-normal text-[52px] sm:text-[68px] md:text-[88px] lg:text-[106px] tracking-tight leading-[88%]"
            style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
          >
            YOU MOVE,<br />
            NAZR MOVES WITH YOU.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 sm:mt-6 mb-7 sm:mb-8 text-[#52525B] text-[15px] sm:text-[16.5px] md:text-[18px] leading-[150%] max-w-[480px]"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
          >
            Most safety apps ask you to stop what you&apos;re doing. Nazr works quietly in the background, so your people know you&apos;re okay.
          </motion.p>

          {/* Download Badges Row: App Store & Google Play */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 sm:gap-4 flex-wrap"
          >
            {/* Apple App Store Button */}
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="https://apps.apple.com/in/app/nazr-women-safety-app/id6787188929"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl bg-black border border-black hover:bg-neutral-900 transition-all text-white shadow-sm hover:shadow-md"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

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
                  <span className="text-[14px] sm:text-[15px] font-semibold font-[family-name:var(--font-inter)] leading-tight">
                    App Store
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Google Play Store Button */}
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="https://play.google.com/store/apps/details?id=com.nazr.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl bg-black border border-black hover:bg-neutral-900 transition-all text-white shadow-sm hover:shadow-md"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

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
                  <span className="text-[14px] sm:text-[15px] font-semibold font-[family-name:var(--font-inter)] leading-tight">
                    Google Play
                  </span>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Desktop QR Code Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex items-center gap-3.5"
          >
            <div className="w-[52px] h-[52px] rounded-xl bg-white border border-neutral-300/80 p-1 flex items-center justify-center shrink-0 shadow-xs">
              <Image
                src="/QRCODEFORDEST.png"
                alt="Scan to Download NAZR App"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span
                className="text-[13.5px] font-bold text-[#141416] leading-snug"
                style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
              >
                On desktop?
              </span>
              <span
                className="text-[12px] text-[#71717A] leading-tight"
                style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
              >
                Scan to download
              </span>
            </div>
          </motion.div>

          {/* Micro-copy */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 text-[12px] text-[#71717A]"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
          >
            Free on iOS and Android
          </motion.span>
        </div>

        {/* Right Column: Grounded Massive 3D Guardian Owl with Background Circuit Lines */}
        <div className="w-full md:w-[46%] lg:w-[48%] relative flex items-end justify-center md:justify-end shrink-0">
          
          {/* Owl + Circuit Lines Unified Aspect Ratio Container */}
          <div className="relative w-full max-w-[420px] sm:max-w-[480px] md:max-w-[540px] lg:max-w-[620px] xl:max-w-[680px] aspect-[687/666] flex items-end justify-center">
            <OwlCircuitLines />

            {/* Grounded Massive 3D Guardian Owl Character */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full h-full flex items-end justify-center"
            >
              <Image
                src="/images/nazr_owl_hero.png"
                alt="NAZR Guardian Owl - Safety App Assistant"
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]"
              />
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
}

/**
 * Cybernetic Circuit Trace Lines SVG component with animations
 */
function OwlCircuitLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 687 666"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Lines Group */}
      <g stroke="#D1D1D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* L1: Top jog */}
        <motion.path
          d="M 183 188 L 200 205 L 340 205"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* L2: Second jog line */}
        <motion.path
          d="M 96 270 L 123 243 L 233 243 L 248 228 L 350 228"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* L3: Third stepped line */}
        <motion.path
          d="M 44 315 L 65 294 L 187 294 L 215 266 L 350 266"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* L4: Mid straight horizontal */}
        <motion.path
          d="M 160 312 L 350 312"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* L5: Lower jog line */}
        <motion.path
          d="M 14 344 L 36 366 L 182 366 L 207 341 L 350 341"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* L6: Bottom horizontal */}
        <motion.path
          d="M 120 394 L 350 394"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        />
      </g>

      {/* Right Lines Group */}
      <g stroke="#D1D1D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* R1: Top horizontal */}
        <motion.path
          d="M 505 184 L 687 184"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* R2: Jog 1 */}
        <motion.path
          d="M 510 195 L 539 224 L 665 224 L 687 246"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* R3: Jog 2 */}
        <motion.path
          d="M 525 257 L 642 257 L 687 302"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* R4: Jog 3 */}
        <motion.path
          d="M 542 282 L 622 282 L 687 347"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* R5: Mid horizontal with dot */}
        <motion.path
          d="M 550 320 L 614 320"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* R6: Lower horizontal with dot */}
        <motion.path
          d="M 555 342 L 644 342"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* R7: Right horizontal with dot */}
        <motion.path
          d="M 665 376 L 687 376"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* R8: Bottom horizontal 1 */}
        <motion.path
          d="M 555 397 L 687 397"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* R9: Bottom horizontal 2 */}
        <motion.path
          d="M 555 420 L 687 420"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        />
      </g>

      {/* Terminal Connection Dots */}
      <g fill="#D1D1D6">
        <motion.circle cx="183" cy="188" r="3.5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} />
        <motion.circle cx="96" cy="270" r="3.5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.25 }} />
        <motion.circle cx="44" cy="315" r="3.5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }} />
        <motion.circle cx="160" cy="312" r="3.5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.35 }} />
        <motion.circle cx="14" cy="344" r="3.5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} />
        <motion.circle cx="120" cy="394" r="3.5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.45 }} />
        <motion.circle cx="61" cy="421" r="3.5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} />

        <motion.circle cx="614" cy="320" r="3.5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }} />
        <motion.circle cx="644" cy="342" r="3.5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.45 }} />
        <motion.circle cx="665" cy="376" r="3.5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} />
        <motion.circle cx="572" cy="356" r="2.5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.45 }} />
      </g>
    </svg>
  );
}
