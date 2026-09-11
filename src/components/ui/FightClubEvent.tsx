"use client";

import Image from "next/image";
import Link from "next/link";
import { InteractiveFighter3D } from "./InteractiveFighter3D";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

export function FightClubEvent() {

  return (
    <div className="w-full bg-[#F1E4DE] text-[#F1E4DE] selection:bg-[#FF0E97] selection:text-white font-[family-name:var(--font-inter)]">
      {/* Outer wrapper with exact 10px mobile / 20px desktop padding around and 20px between sections */}
      <div className="w-full max-w-[1280px] mx-auto px-[10px] md:px-[20px] py-[20px] space-y-[20px]">

        {/* =========================================================================
            SECTION 1: HERO - "FIGHT CLUB" (NAZR X WCMMA)
            Figma Frame 1073716592 Silhouette & Dense Tactical Grid Effect
            ========================================================================= */}
        <div className="relative w-full drop-shadow-2xl">
          <section
            className="relative w-full bg-[url('/images/herosectionmobilenew.svg')] md:bg-[url('/images/fighthero.png')]"
            style={{
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >

            {/* Top Metadata Header Bar (Desktop only, mobile has it baked into herosectionmobilenew.svg) */}
            <div className="hidden md:flex relative z-10 w-full items-center justify-between border-b border-[#3E4044] text-xs font-[family-name:var(--font-mono)]">
              {/* Left: NAZR X WCMMA in transparent cutout notch + Date after slant */}
              <div className="flex items-center">
                {/* NAZR X WCMMA in transparent cutout notch */}
                <div className="relative border-t border-[#3E4044] -translate-y-[2px]">
                  <span className="text-black font-[family-name:var(--font-bebas)] text-[18px] sm:text-[20px] leading-none tracking-wider uppercase pl-2 sm:pl-3 pr-1 pt-0.5 pb-0 select-none block">
                    NAZR X WCMMA
                  </span>
                </div>
                {/* Date stamp on dark card after the slant, with underline */}
                <div className="ml-4 sm:ml-7 px-1 py-1">
                  <span className="text-[#F1E4DE] text-xs font-mono tracking-widest border-b border-[#F1E4DE] pb-0.5 block">
                    26/09/26
                  </span>
                </div>
              </div>

              {/* Right: GPS Coordinates & City */}
              <div className="flex items-center gap-3 sm:gap-5 px-3 sm:px-6 py-2 text-[11px]">
                <span className="text-[#F1E4DE] tracking-wider font-mono hidden sm:inline">28°28&apos;18.3&quot;N 77°05&apos;52.5&quot;E</span>
                <span className="text-[#F1E4DE] font-medium tracking-widest font-mono">DELHI</span>
              </div>
            </div>

            {/* Giant Display Title: "FIGHT SOCIAL" */}
            <div className="@container relative z-10 w-full max-w-[1192px] md:h-[280px] mx-auto px-1 sm:px-2 pt-9 pb-3 md:py-0 border-b border-[#3E4044] overflow-hidden flex justify-center items-center">
              <h1
                className="w-full font-[family-name:var(--font-bebas)] text-[#F1E4DE] md:text-[#696868] leading-[78%] tracking-[-0.01em] uppercase text-center select-none whitespace-nowrap block"
                style={{ fontSize: "clamp(68px, 23.4cqw, 292px)" }}
              >
                FIGHT SOCIAL
              </h1>
            </div>

            {/* Lower 3-Column Tactical Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#3E4044]">

              {/* Column 1: Feature Tags, CTA Button (4 cols, order-2 on mobile) */}
              <div className="order-2 md:order-1 md:col-span-4 flex flex-col justify-start p-4 sm:p-6 relative">
                <div className="relative z-10 space-y-4">
                  {/* Tag 1 */}
                  <div className="relative pb-3 border-b border-[#3E4044]">
                    <h3 className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[clamp(30px,8.5vw,46px)] md:text-[30px] lg:text-[36px] leading-none tracking-wide uppercase whitespace-nowrap">
                      LIVE MMA ACTION
                    </h3>
                    <span className="absolute -bottom-[6px] right-4 text-[#55585E] text-[10px] select-none">+</span>
                    <span className="absolute -bottom-[6px] right-20 text-[#55585E] text-[10px] select-none">+</span>
                  </div>

                  {/* Tag 2 */}
                  <div className="relative pb-3 border-b border-[#3E4044]">
                    <h3 className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[clamp(30px,8.5vw,46px)] md:text-[30px] lg:text-[36px] leading-none tracking-wide uppercase whitespace-nowrap">
                      REAL COMMUNITY
                    </h3>
                    <span className="absolute -bottom-[6px] right-4 text-[#55585E] text-[10px] select-none">+</span>
                    <span className="absolute -bottom-[6px] right-20 text-[#55585E] text-[10px] select-none">+</span>
                  </div>

                  {/* Tag 3 */}
                  <div className="relative pb-3 border-b border-[#3E4044]">
                    <h3 className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[clamp(30px,8.5vw,46px)] md:text-[30px] lg:text-[36px] leading-none tracking-wide uppercase whitespace-nowrap">
                      NEW EXPERIENCES
                    </h3>
                    <span className="absolute -bottom-[6px] right-4 text-[#55585E] text-[10px] select-none">+</span>
                    <span className="absolute -bottom-[6px] right-20 text-[#55585E] text-[10px] select-none">+</span>
                  </div>
                </div>

                {/* CTA Button & Bottom Owl Eyes Box Alignment */}
                <div className="relative z-10 pt-6 flex flex-col justify-between">
                  <div>
                    <a
                      href="https://form.typeform.com/to/rrrhHrZt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto px-6 py-3 sm:py-2 bg-[#FF007A] hover:bg-[#921150] active:scale-[0.98] border border-[#FF1493] text-[#F1E4DE] font-[family-name:var(--font-inter)] text-xs font-semibold tracking-wider rounded-[2px] transition-all shadow-md cursor-pointer text-center relative group inline-block"
                    >
                      <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#FF007A]" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#FF007A]" />
                      <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#FF007A]" />
                      <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#FF007A]" />
                      Book Your Slot Now
                    </a>
                  </div>

                  {/* Mobile-only Owl Box positioned after CTA */}
                  <div className="flex justify-end pt-4 pb-1 md:hidden">
                    <div className="relative w-16 h-14 border border-[#3E4044] flex items-center justify-center p-2 bg-[#222426]/60">
                      <span className="absolute -top-[7px] -left-[6px] text-[#55585E] text-[10px] select-none">+</span>
                      <span className="absolute -top-[7px] -right-[6px] text-[#55585E] text-[10px] select-none">+</span>
                      <span className="absolute -bottom-[7px] -left-[6px] text-[#55585E] text-[10px] select-none">+</span>
                      <span className="absolute -bottom-[7px] -right-[6px] text-[#55585E] text-[10px] select-none">+</span>
                      <div className="relative w-10 h-7">
                        <Image
                          src="/images/logosvg.svg"
                          alt="NAZR Owl"
                          fill
                          className="object-contain brightness-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Bottom Owl Box positioned at bottom right of Col 1 */}
                <div className="hidden md:flex justify-end absolute bottom-0 right-0 z-10">
                  <div className="relative w-16 h-14 border-t border-l border-[#3E4044] flex items-center justify-center p-2 bg-[#222426]/60">
                    <span className="absolute -top-[7px] -left-[6px] text-[#55585E] text-[10px] select-none">+</span>
                    <span className="absolute -top-[7px] -right-[6px] text-[#55585E] text-[10px] select-none">+</span>
                    <span className="absolute -bottom-[7px] -left-[6px] text-[#55585E] text-[10px] select-none">+</span>
                    <div className="relative w-10 h-7">
                      <Image
                        src="/images/logosvg.svg"
                        alt="NAZR Owl"
                        fill
                        className="object-contain brightness-200"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Event Summary Copy on Blueprint Grid (4 cols, order-3 on mobile) */}
              <div className="order-3 md:order-2 md:col-span-4 flex flex-col justify-start p-4 sm:p-6 pb-14 md:pb-6 relative">
                {/* Centered Technical Text Box with Crosshair Marks */}
                <div className="mt-2 md:mt-4 mb-6 md:mb-0 relative z-10 border border-[#3E4044] p-4 sm:p-6 rounded-[2px] bg-[#222426]/40">
                  {/* Top Crosshairs */}
                  <div className="flex justify-between text-[#55585E] text-xs font-mono select-none -mt-6 mb-2 px-1">
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                  </div>

                  <p className="font-[family-name:var(--font-inter)] text-[13px] sm:text-[13.5px] text-[#F1E4DE] leading-[170%] font-normal">
                    NAZR X WCMMA brings you a full day of MMA, community and culture.<br />
                    Experience live MMA action, meet fighters and creators, explore brand activations, and be part of a community that comes together to celebrate strength, confidence and preparedness.
                  </p>

                  {/* Bottom Crosshairs */}
                  <div className="flex justify-between text-[#55585E] text-xs font-mono select-none -mb-6 mt-3 px-1">
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                  </div>
                </div>

                {/* Bottom Owl Box positioned at bottom left of Col 2 (Desktop only) */}
                <div className="hidden md:flex justify-start absolute bottom-0 left-0 z-10">
                  <div className="relative w-16 h-14 border-t border-r border-[#3E4044] flex items-center justify-center p-2 bg-[#222426]/60">
                    <span className="absolute -top-[7px] -right-[6px] text-[#55585E] text-[10px] select-none">+</span>
                    <span className="absolute -bottom-[7px] -right-[6px] text-[#55585E] text-[10px] select-none">+</span>
                    <div className="relative w-[40px] h-[40px]">
                      <Image
                        src="/images/fignterlogo.svg"
                        alt="NAZR Fighter"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: 3D Interactive Fighter Graphic & Barcode Scrubber (4 cols, order-1 on mobile) */}
              <InteractiveFighter3D />
            </div>
          </section>
        </div>


        {/* =========================================================================
            SECTION 2: MISSION & NEON DEVANAGARI ("WE MAKE SAFETY...")
            Figma Frame Silhouette & overlay.png Grid Overlay
            ========================================================================= */}
        <div className="relative w-full drop-shadow-2xl">
          <section
            className="relative w-full"
            style={{
              backgroundImage: "url('/images/fight2nd.png')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              WebkitMaskImage: "url('/images/fight2nd.png')",
              WebkitMaskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskImage: "url('/images/fight2nd.png')",
              maskSize: "100% 100%",
              maskRepeat: "no-repeat",
            }}
          >
            {/* Tech grid overlay with lines and '+' crosshairs from overlay.png */}
            <div
              className="absolute inset-0 z-0 pointer-events-none opacity-80"
              style={{
                backgroundImage: "url('/images/overlay.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12">

              {/* Left Column: Stacked Giant Typography + Overlaid Majestic Owl (7 cols) */}
              <div className="md:col-span-7 relative min-h-0 md:min-h-[640px] p-6 sm:p-10 pr-0 sm:pr-0 flex flex-col justify-between overflow-hidden">
                {/* Stacked Typography with Overlaid Owl */}
                <div className="relative z-0 space-y-1 sm:space-y-2">
                  {/* Overlaid Owl Image placed behind the typography, positioned at top-right on mobile */}
                  <div className="absolute right-0 sm:left-[17%] md:left-[19%] top-2 sm:-top-14 md:-top-16 w-[200px] sm:w-[340px] md:w-[400px] h-[320px] sm:h-[95%] z-0 pointer-events-none opacity-90">
                    <Image
                      src="/images/owfighter.svg"
                      alt="NAZR Guardian Owl"
                      fill
                      priority
                      unoptimized
                      className="object-contain object-top drop-shadow-2xl"
                    />
                  </div>

                  <div className="relative z-10 border-b border-[#FF0E97]/40 pb-2">
                    <span className="font-[family-name:var(--font-bebas)] text-[#c5b9b3] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                      WE
                    </span>
                  </div>
                  <div className="relative z-10 border-b border-[#FF0E97]/40 pb-2">
                    <span className="font-[family-name:var(--font-bebas)] text-[#78726f] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                      MAKE
                    </span>
                  </div>
                  <div className="relative z-10 border-b border-[#FF0E97]/40 pb-2">
                    <span className="font-[family-name:var(--font-bebas)] text-[#78726f] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                      SAFETY
                    </span>
                  </div>
                  <div className="relative z-10 border-b border-[#FF0E97]/40 pb-2">
                    <span className="font-[family-name:var(--font-bebas)] text-[#78726f] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                      SIMPLE,
                    </span>
                  </div>
                  <div className="relative z-10 border-b border-[#FF0E97]/40 pb-2">
                    <span className="font-[family-name:var(--font-bebas)] text-[#78726f] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                      ACCESSIBLE
                    </span>
                  </div>
                  <div className="relative z-10 border-b border-[#FF0E97]/40 pb-2">
                    <span className="font-[family-name:var(--font-bebas)] text-[#78726f] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                      AND
                    </span>
                  </div>
                  <div className="relative z-10 border-b border-[#FF0E97]/40 pb-2">
                    <span className="font-[family-name:var(--font-bebas)] text-[#78726f] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                      ACTIONABLE.
                    </span>
                  </div>

                  {/* Additional technical pink grid lines from Figma (desktop only) */}
                  <div className="hidden md:block w-16 sm:w-20 border-b border-[#FF0E97]/40 pt-10 sm:pt-14" />
                  <div className="hidden md:block w-full border-b border-[#FF0E97]/40 pt-10 sm:pt-14" />
                  <div className="hidden md:block w-full border-b border-[#FF0E97]/40 pt-10 sm:pt-14" />
                </div>
              </div>

              {/* Right Column: Giant Hot Pink Neon Outlined Devanagari "न ज़र" (5 cols) */}
              <div className="md:col-span-5 flex items-center justify-center md:justify-start p-4 sm:p-10 pl-4 sm:pl-0 relative min-h-0 md:min-h-[460px] pt-0 md:pt-10">
                {/* Mobile horizontal Devanagari */}
                <div className="w-full flex justify-center md:hidden pt-0 pb-8">
                  <Image
                    src="/images/nazrfightmobile.svg"
                    alt="न ज़र"
                    width={370}
                    height={193}
                    unoptimized
                    priority
                    className="w-full max-w-[320px] sm:max-w-[360px] h-auto drop-shadow-[0_0_15px_rgba(255,14,151,0.55)]"
                  />
                </div>

                {/* Desktop vertical Devanagari */}
                <Image
                  src="/images/nazrfightclub.svg"
                  alt="न ज़र"
                  width={501}
                  height={1460}
                  unoptimized
                  priority
                  className="hidden md:block w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] h-auto drop-shadow-[0_0_15px_rgba(255,14,151,0.55)]"
                />
              </div>
            </div>
          </section>
        </div>



        {/* =========================================================================
            SECTION 3: "ABOUT EVENT" CARD
            Figma Frame Silhouette & overlay.png Grid Overlay
            ========================================================================= */}
        <div className="relative w-full drop-shadow-2xl">
          <section
            className="relative w-full p-4 sm:p-8"
            style={{
              backgroundImage: "url('/images/fight3rd.png')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              WebkitMaskImage: "url('/images/fight3rd.png')",
              WebkitMaskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskImage: "url('/images/fight3rd.png')",
              maskSize: "100% 100%",
              maskRepeat: "no-repeat",
            }}
          >
            {/* Tech grid overlay with lines and '+' crosshairs from overlay.png */}
            <div
              className="absolute inset-0 z-0 pointer-events-none opacity-80"
              style={{
                backgroundImage: "url('/images/overlay.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center">

              {/* Left: Event Photo (5 cols) */}
              <div className="md:col-span-5 relative w-full h-[280px] sm:h-[380px] md:h-[460px] overflow-hidden">
                <Image
                  src="/images/2ndlastsection.svg"
                  alt="NAZR Fight Club Event"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right: Event Details & Registration (7 cols) */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-6 text-left">
                <div>
                  <h2 className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[90px] md:text-[76px] text-center md:text-left leading-[90%] tracking-tight uppercase">
                    ABOUT EVENT
                  </h2>
                  <div className="w-full h-px bg-[#323438] my-4" />

                  <p className="font-[family-name:var(--font-inter)] text-sm sm:text-[14.5px] text-[#F1E4DE] leading-[160%] font-normal">
                    Experience MMA up close with stimulated fights, fighter interactions, creator moments and more - all coming together for a day of action and entertainment. Register and be part of the experience.
                  </p>
                  <div className="w-full h-px bg-[#323438] my-4" />

                  {/* Event Timing */}
                  <div className="py-1">
                    <span className="text-[#FF1493] font-semibold text-sm mr-2 font-[family-name:var(--font-inter)]">Time:</span>
                    <span className="text-[#F1E4DE] text-sm font-medium">2 pm onwards</span>
                  </div>
                  <div className="w-full h-px bg-[#323438] my-4" />

                  {/* Event Address */}
                  <div className="py-1">
                    <span className="text-[#FF1493] font-semibold text-sm mr-2 font-[family-name:var(--font-inter)]">Address:</span>
                    <span className="text-[#F1E4DE] text-sm font-normal leading-[150%]">
                      Basement, B-11, 1, Ashoka Cresent Marg, DLF Phase 1, Sector 26A, Gurugram, Haryana 122002
                    </span>
                  </div>
                  <div className="w-full h-px bg-[#323438] my-2.5 md:my-4" />
                </div>

                {/* Action Button (shifted up on mobile to avoid bottom notch) */}
                <div className="w-full relative -translate-y-4 md:translate-y-0 pb-2 md:pb-0">
                  <a
                    href="https://form.typeform.com/to/rrrhHrZt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-[#FF007A] hover:bg-[#921150] active:scale-[0.98] border border-[#FF1493] text-[#F1E4DE] font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all shadow-md cursor-pointer relative group text-center inline-block"
                  >
                    <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#FF007A]" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#FF007A]" />
                    <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#FF007A]" />
                    <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#FF007A]" />
                    Book Your Slot Now
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>


        {/* Mobile Partners / Custom Section (Mobile only) */}
        <div className="block md:hidden relative w-full drop-shadow-2xl">
          <div
            className="relative w-full aspect-[370/314] bg-[url('/images/paternes.png')] flex flex-col items-center pt-8 pb-4 px-4 overflow-hidden"
            style={{
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Subtle background blueprint grid crosses */}
            <div className="absolute inset-0 pointer-events-none opacity-25 flex flex-col justify-between p-6">
              <div className="flex justify-between text-[#888888] font-mono text-[10px]">
                <span>+</span>
                <span>+</span>
                <span>+</span>
                <span>+</span>
              </div>
              <div className="flex justify-between text-[#888888] font-mono text-[10px]">
                <span>+</span>
                <span>+</span>
                <span>+</span>
                <span>+</span>
              </div>
              <div className="flex justify-between text-[#888888] font-mono text-[10px]">
                <span>+</span>
                <span>+</span>
                <span>+</span>
                <span>+</span>
              </div>
            </div>

            {/* Heading: OUR PARTNERS */}
            <h2
              className="text-[#F1E4DE] text-[44px] sm:text-[48px] tracking-wider uppercase font-bold leading-none mb-3 z-10 select-none"
              style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
            >
              OUR PARTNERS
            </h2>

            {/* 2x2 Magenta Blueprint Grid */}
            <div className="w-full max-w-[310px] relative border border-[#FF007A]/80 z-10">
              {/* Technical crosshairs (+) at corners and borders */}
              <span className="absolute -top-[7px] -left-[4px] text-[#FF007A] text-[10px] font-mono leading-none select-none pointer-events-none">+</span>
              <span className="absolute -top-[7px] left-1/2 -translate-x-1/2 text-[#FF007A] text-[10px] font-mono leading-none select-none pointer-events-none">+</span>
              <span className="absolute -top-[7px] -right-[4px] text-[#FF007A] text-[10px] font-mono leading-none select-none pointer-events-none">+</span>

              <span className="absolute top-1/2 -translate-y-1/2 -left-[4px] text-[#FF007A] text-[10px] font-mono leading-none select-none pointer-events-none">+</span>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FF007A] text-[10px] font-mono leading-none select-none pointer-events-none">+</span>
              <span className="absolute top-1/2 -translate-y-1/2 -right-[4px] text-[#FF007A] text-[10px] font-mono leading-none select-none pointer-events-none">+</span>

              <span className="absolute -bottom-[7px] -left-[4px] text-[#FF007A] text-[10px] font-mono leading-none select-none pointer-events-none">+</span>
              <span className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 text-[#FF007A] text-[10px] font-mono leading-none select-none pointer-events-none">+</span>
              <span className="absolute -bottom-[7px] -right-[4px] text-[#FF007A] text-[10px] font-mono leading-none select-none pointer-events-none">+</span>

              {/* Grid 2x2 cells */}
              <div className="grid grid-cols-2 grid-rows-2 h-[142px] sm:h-[150px]">
                {/* Cell 1 (top-left): Pinnora Logo + Events Partner */}
                <div className="relative border-r border-b border-[#FF007A]/80 flex flex-col items-center justify-center p-2">
                  <Image
                    src="/images/Pinnora - Events.svg"
                    alt="Pinnora"
                    width={120}
                    height={32}
                    className="max-h-6 max-w-[100px] w-auto h-auto object-contain"
                  />
                  <span className="text-[#F1E4DE] text-[11px] sm:text-[12px] font-normal tracking-wide mt-1.5 select-none leading-none">
                    Events Partner
                  </span>
                </div>

                {/* Cell 2 (top-right): bree.svg + Wellness Partner */}
                <div className="relative border-b border-[#FF007A]/80 flex flex-col items-center justify-center p-2">
                  <Image
                    src="/images/bree.svg"
                    alt="Wellness Partner"
                    width={110}
                    height={32}
                    className="max-h-6 max-w-[100px] w-auto h-auto object-contain"
                  />
                  <span className="text-[#F1E4DE] text-[11px] sm:text-[12px] font-normal tracking-wide mt-1.5 select-none leading-none">
                    Wellness Partner
                  </span>
                </div>

                {/* Cell 3 (bottom-left): NAZR Fighter Logo + Venue Partner */}
                <div className="relative border-r border-[#FF007A]/80 flex flex-col items-center justify-center p-2">
                  <Image
                    src="/images/fignterlogo.svg"
                    alt="Venue Partner"
                    width={38}
                    height={38}
                    className="max-h-8 max-w-[38px] w-auto h-auto object-contain"
                  />
                  <span className="text-[#F1E4DE] text-[11px] sm:text-[12px] font-normal tracking-wide mt-1.5 select-none leading-none">
                    Venue Partner
                  </span>
                </div>

                {/* Cell 4 (bottom-right): Empty with center crosshair */}
                <div className="relative flex items-center justify-center p-2">
                  <span className="text-[#55585E] text-xs font-mono select-none pointer-events-none">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 4: DEDICATED PAGE FOOTER ("FIGHT CLUB" / NAZR X WCMMA)
            Figma Frame Silhouette, overlay.png & Giant FIGHT CLUB (W 1192, H 280, #F1E4DE)
            ========================================================================= */}
        <div className="relative w-full drop-shadow-2xl">
          <footer
            className="relative w-full bg-[url('/images/fighterfootermobile.svg')] md:bg-[url('/images/fighterfooter.png')]"
            style={{
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >

            {/* Top Tactical Header Bar (Desktop only, mobile has it baked into fighterfootermobile.svg) */}
            <div className="hidden md:flex relative z-10 w-full items-center justify-between border-b border-[#323438] text-xs font-[family-name:var(--font-mono)]">
              {/* Left Badges */}
              <div className="flex items-center">
                {/* NAZR X WCMMA in transparent cutout notch */}
                <div className="relative border-t border-[#323438] -translate-y-[8px]">
                  <span className="text-black font-[family-name:var(--font-bebas)] text-[18px] sm:text-[22px] leading-none tracking-wider uppercase px-4 sm:px-6 pt-1 pb-0 select-none block">
                    NAZR X WCMMA
                  </span>
                </div>
                {/* Date stamp on dark card after the slant, with underline */}
                <div className="ml-4 sm:ml-12 px-2 py-1">
                  <span className="text-[#F1E4DE] text-xs font-mono tracking-widest border-b border-[#F1E4DE] pb-0.5">
                    26/07/26
                  </span>
                </div>
              </div>

              {/* Right Coordinates & City */}
              <div className="flex items-center gap-2 sm:gap-4 px-3 sm:px-6 py-2 text-[11px] sm:text-xs">
                <span className="text-[#F1E4DE] tracking-wider font-mono hidden sm:inline">35.6774°N / 139.6525°E</span>
                <span className="text-[#55585E] hidden sm:inline">|</span>
                <span className="text-[#F1E4DE] font-semibold tracking-widest font-mono">DELHI</span>
              </div>
            </div>

            {/* Middle Manifesto Paragraph */}
            <div className="relative z-10 pt-10 sm:pt-12 md:pt-10 px-5 pb-6 sm:p-8 md:p-10 border-b border-[#323438]">
              {/* Desktop Copy */}
              <p className="hidden md:block font-[family-name:var(--font-inter)] text-sm sm:text-[15px] md:text-[17px] text-[#F1E4DE] leading-[160%] font-normal max-w-5xl">
                NAZR is India’s first women safety ecosystem built around the way you actually live from around the way you actually live. From everyday products to technology, we’re making safety feel simpler, smarter, and more accessible, because preparedness should feel natural.
              </p>
              {/* Mobile Copy */}
              <p className="block md:hidden font-[family-name:var(--font-inter)] text-[13.5px] sm:text-[14.5px] text-[#F1E4DE] leading-[150%] font-normal">
                NAZR is India’s first women’s safety ecosystem, bringing together safety products, technology and community experiences to help women feel more confident and prepared in their everyday lives.
              </p>
            </div>

            {/* Visit Website CTA Button (Mobile only) */}
            <div className="block md:hidden relative z-10 w-full px-5 py-4 border-b border-[#323438]">
              <div className="relative flex justify-center">
                <a
                  href="https://nazrco.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#FF007A] hover:bg-[#921150] active:scale-[0.98] border border-[#FF1493] text-[#F1E4DE] font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wider rounded-[2px] transition-all shadow-md cursor-pointer relative group text-center block"
                >
                  <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#FF007A]" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#FF007A]" />
                  <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#FF007A]" />
                  <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#FF007A]" />
                  Visit website
                </a>
              </div>
            </div>

            {/* Massive Full-Bleed "FIGHT CLUB" Footer Typography */}
            <div className="@container relative z-10 w-full flex items-center justify-center overflow-hidden px-1 sm:px-2 pt-6 sm:pt-8 md:py-10 pb-2 md:pb-10">
              <h2
                className="w-full text-[#F1E4DE] font-[family-name:var(--font-bebas)] leading-[82%] tracking-[-0.01em] uppercase text-center select-none whitespace-nowrap block"
                style={{ fontSize: "clamp(68px, 23.4cqw, 292px)" }}
              >
                FIGHT CLUB
              </h2>
            </div>

            {/* Desktop Footer Links & Socials */}
            <div className="hidden md:flex relative z-10 w-full px-8 pb-8 items-center justify-between font-mono text-xs text-[#F1E4DE]/80">
              <div className="flex items-center gap-6">
                <a
                  href="https://nazrco.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF007A] hover:underline transition-all"
                >
                  Visit Website
                </a>
                <span className="text-[#55585E]">•</span>
                <Link href="/fight-social/terms" className="hover:text-[#FF007A] hover:underline transition-all">
                  Terms &amp; Conditions
                </Link>
                <span className="text-[#55585E]">•</span>
                <Link href="/fight-social/privacy-policy" className="hover:text-[#FF007A] hover:underline transition-all">
                  Privacy Policy
                </Link>
              </div>

              {/* Social Icons (Desktop) */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/nazrco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white text-black hover:bg-[#FF007A] hover:text-white flex items-center justify-center transition-all duration-200 shadow"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.instagram.com/nazr.360?stkn=emhsaHE3MGNvbmxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white text-black hover:bg-[#FF007A] hover:text-white flex items-center justify-center transition-all duration-200 shadow"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Mobile Footer Links & Socials */}
            <div className="block md:hidden relative z-10 w-full pb-8 text-center space-y-5">
              <div className="flex flex-col items-center gap-1.5 font-mono text-xs text-[#F1E4DE]">
                <Link href="/fight-social/terms" className="hover:underline transition-all">
                  Terms &amp; Conditions
                </Link>
                <Link href="/fight-social/privacy-policy" className="hover:underline transition-all">
                  Privacy Policy
                </Link>
              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-4 pt-1">
                <a
                  href="https://www.linkedin.com/company/nazrco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full bg-white text-black hover:bg-[#FF007A] hover:text-white flex items-center justify-center transition-all duration-200 shadow"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/nazr.360?stkn=emhsaHE3MGNvbmxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full bg-white text-black hover:bg-[#FF007A] hover:text-white flex items-center justify-center transition-all duration-200 shadow"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </footer>
        </div>

      </div>


    </div>
  );
}
