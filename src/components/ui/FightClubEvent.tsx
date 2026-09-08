"use client";

import { useState } from "react";
import Image from "next/image";
import { InteractiveFighter3D } from "./InteractiveFighter3D";

function CloseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function CheckCircleIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export function FightClubEvent() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("11:00 AM Onwards");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const slots = [
    { time: "11:00 AM Onwards", label: "General Pass: Full Day MMA & Community Access" },
    { time: "02:00 PM - 04:00 PM", label: "Fighter Meet & Creator Moments" },
    { time: "05:00 PM - 08:00 PM", label: "Evening Main Card & Live Exhibition Fights" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

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
            {/* Tech grid overlay with lines and '+' crosshairs from overlay.png, masked to card */}
            <div
              className="absolute inset-0 z-0 pointer-events-none opacity-70 [mask-image:url('/images/herosectionmobilenew.svg')] md:[mask-image:url('/images/fighthero.png')] [-webkit-mask-image:url('/images/herosectionmobilenew.svg')] md:[-webkit-mask-image:url('/images/fighthero.png')] [mask-size:100%_100%] [-webkit-mask-size:100%_100%] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat]"
              style={{
                backgroundImage: "url('/images/overlay.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

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
            <div className="@container relative z-10 w-full px-1 sm:px-2 pt-9 md:pt-5 pb-1 sm:pb-2 border-b border-[#3E4044] overflow-hidden flex justify-center items-center">
              <h1
                className="w-full font-[family-name:var(--font-bebas)] text-[#F1E4DE] leading-[78%] tracking-[-0.01em] uppercase text-center select-none whitespace-nowrap block"
                style={{ fontSize: "clamp(68px, 23.4cqw, 292px)" }}
              >
                FIGHT SOCIAL
              </h1>
            </div>

            {/* Lower 3-Column Tactical Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#3E4044]">
              
              {/* Column 1: Feature Tags, CTA Button (4 cols, order-2 on mobile) */}
              <div className="order-2 md:order-1 md:col-span-4 flex flex-col justify-between p-4 sm:p-6 relative">
                <div className="relative z-10 space-y-4">
                  {/* Tag 1 */}
                  <div className="relative pb-3 border-b border-[#3E4044]">
                    <h3 className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[30px] sm:text-[36px] leading-none tracking-wide uppercase">
                      LIVE MMA ACTION
                    </h3>
                    <span className="absolute -bottom-[6px] right-4 text-[#55585E] text-[10px] select-none">+</span>
                    <span className="absolute -bottom-[6px] right-20 text-[#55585E] text-[10px] select-none">+</span>
                  </div>

                  {/* Tag 2 */}
                  <div className="relative pb-3 border-b border-[#3E4044]">
                    <h3 className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[30px] sm:text-[36px] leading-none tracking-wide uppercase">
                      REAL COMMUNITY
                    </h3>
                    <span className="absolute -bottom-[6px] right-4 text-[#55585E] text-[10px] select-none">+</span>
                    <span className="absolute -bottom-[6px] right-20 text-[#55585E] text-[10px] select-none">+</span>
                  </div>

                  {/* Tag 3 */}
                  <div className="relative pb-3 border-b border-[#3E4044]">
                    <h3 className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[30px] sm:text-[36px] leading-none tracking-wide uppercase">
                      NEW EXPERIENCES
                    </h3>
                    <span className="absolute -bottom-[6px] right-4 text-[#55585E] text-[10px] select-none">+</span>
                    <span className="absolute -bottom-[6px] right-20 text-[#55585E] text-[10px] select-none">+</span>
                  </div>
                </div>

                {/* CTA Button & Bottom Owl Eyes Box Alignment */}
                <div className="relative z-10 pt-6 flex flex-col justify-between">
                  <div>
                    <button
                      onClick={() => setIsBookingOpen(true)}
                      className="w-full md:w-auto px-6 py-3 sm:py-2 bg-[#FF007A] hover:bg-[#921150] active:scale-[0.98] border border-[#FF1493] text-[#F1E4DE] font-[family-name:var(--font-inter)] text-xs font-semibold tracking-wider rounded-[2px] transition-all shadow-md cursor-pointer text-center relative group"
                    >
                      <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#FF007A]" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#FF007A]" />
                      <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#FF007A]" />
                      <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#FF007A]" />
                      Book Your Slot Now
                    </button>
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

                  {/* Desktop Bottom Owl Box positioned at bottom right of Col 1 */}
                  <div className="hidden md:flex justify-end pt-6 -mb-4 -mr-4 sm:-mb-6 sm:-mr-6">
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
              </div>

              {/* Column 2: Event Summary Copy on Blueprint Grid (4 cols, order-3 on mobile) */}
              <div className="order-3 md:order-2 md:col-span-4 flex flex-col justify-between p-4 sm:p-6 relative">
                {/* Centered Technical Text Box with Crosshair Marks */}
                <div className="my-auto relative z-10 border border-[#3E4044] p-5 sm:p-6 rounded-[2px] bg-[#222426]/40">
                  {/* Top Crosshairs */}
                  <div className="flex justify-between text-[#55585E] text-xs font-mono select-none -mt-7 mb-2 px-1">
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                  </div>

                  <p className="font-[family-name:var(--font-inter)] text-[13px] sm:text-[13.5px] text-[#F1E4DE] leading-[170%] font-normal">
                    NAZR X WCMMA brings you a full day of MMA, community and culture.<br />
                    Experience live MMA action, meet fighters and creators, and be part of the community that comes together to celebrate strength, confidence and safety.
                  </p>

                  {/* Bottom Crosshairs */}
                  <div className="flex justify-between text-[#55585E] text-xs font-mono select-none -mb-7 mt-3 px-1">
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                  </div>
                </div>

                {/* Bottom Owl Box positioned at bottom left of Col 2 (Desktop only) */}
                <div className="hidden md:flex justify-start pt-6 -mb-4 -ml-4 sm:-mb-6 sm:-ml-6 relative z-10">
                  <div className="relative w-16 h-14 border-t border-r border-[#3E4044] flex items-center justify-center p-2 bg-[#222426]/60">
                    <span className="absolute -top-[7px] -right-[6px] text-[#55585E] text-[10px] select-none">+</span>
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
                  <span className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                    WE
                  </span>
                </div>
                <div className="relative z-10 border-b border-[#FF0E97]/40 pb-2">
                  <span className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                    MAKE
                  </span>
                </div>
                <div className="relative z-10 border-b border-[#FF0E97]/40 pb-2">
                  <span className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                    SAFETY
                  </span>
                </div>
                <div className="relative z-10 border-b border-[#FF0E97]/40 pb-2">
                  <span className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                    SIMPLE,
                  </span>
                </div>
                <div className="relative z-10 border-b border-[#FF0E97]/40 pb-2">
                  <span className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                    ACCESSIBLE
                  </span>
                </div>
                <div className="relative z-10 border-b border-[#FF0E97]/40 pb-2">
                  <span className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                    AND
                  </span>
                </div>
                <div className="relative z-10 border-b border-[#FF0E97]/40 pb-2">
                  <span className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
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
              
              {/* Left: Event Photo Frame with Tactical Corner Brackets (5 cols) */}
              <div className="md:col-span-5 relative w-full h-[280px] sm:h-[380px] md:h-[460px] p-2">
                <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#F1E4DE] pointer-events-none" />
                <span className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-[#F1E4DE] pointer-events-none" />
                <span className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-[#F1E4DE] pointer-events-none" />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#F1E4DE] pointer-events-none" />
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/images/2ndlastsection.svg"
                    alt="NAZR Fight Club Event"
                    fill
                    priority
                    unoptimized
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right: Event Details & Registration (7 cols) */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-6 text-left">
                <div>
                  <h2 className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[48px] sm:text-[68px] md:text-[76px] leading-[90%] tracking-tight uppercase">
                    ABOUT EVENT
                  </h2>
                  <div className="w-full h-px bg-[#323438] my-4" />

                  <p className="font-[family-name:var(--font-inter)] text-sm sm:text-[14.5px] text-[#F1E4DE] leading-[160%] font-normal">
                    Experiance MMA up close with stimulated fights, fighter interactions, creator moments and more - all coming together for a day of action and entertainment. Register and be part of the experiance.
                  </p>
                  <div className="w-full h-px bg-[#323438] my-4" />

                  {/* Event Timing */}
                  <div className="py-1">
                    <span className="text-[#FF1493] font-semibold text-sm mr-2 font-[family-name:var(--font-inter)]">Time:</span>
                    <span className="text-[#F1E4DE] text-sm font-medium">11 am onwards</span>
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
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full sm:w-auto px-6 py-3 bg-[#FF007A] hover:bg-[#921150] active:scale-[0.98] border border-[#FF1493] text-[#F1E4DE] font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all shadow-md cursor-pointer relative group"
                  >
                    <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#FF007A]" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#FF007A]" />
                    <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#FF007A]" />
                    <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#FF007A]" />
                    Book Your Slot Now
                  </button>
                </div>
              </div>
            </div>
          </section>
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

            {/* Middle Schedule & Manifesto Matrix */}
            <div className="relative z-10 pt-6 md:pt-0 grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#323438] border-b border-[#323438]">
              {/* Left Column: Manifesto Paragraph */}
              <div className="md:col-span-6 p-5 sm:p-8 flex items-center">
                <p className="font-[family-name:var(--font-inter)] text-xs sm:text-[13px] md:text-[13.5px] text-[#F1E4DE] leading-[165%] font-normal">
                  NAZR is India&apos;s first women&apos;s safety ecosystem, bringing together practical products, technology and community experiences to help women feel more confident and prepared in their everyday lives.
                </p>
              </div>

              {/* Right Column: 2x2 Slots Grid */}
              <div className="md:col-span-6 grid grid-cols-2 divide-x divide-y divide-[#323438]">
                <div className="p-4 sm:p-5 flex items-center">
                  <span className="text-[#FF1493] font-semibold text-xs font-[family-name:var(--font-inter)] mr-2">Time:</span>
                  <span className="text-[#F1E4DE] text-xs font-medium">10-12am</span>
                </div>
                <div className="p-4 sm:p-5 flex items-center">
                  <span className="text-[#FF1493] font-semibold text-xs font-[family-name:var(--font-inter)] mr-2">Address:</span>
                  <span className="text-[#F1E4DE] text-xs font-medium">10-12am</span>
                </div>
                <div className="p-4 sm:p-5 flex items-center">
                  <span className="text-[#FF1493] font-semibold text-xs font-[family-name:var(--font-inter)] mr-2">Time:</span>
                  <span className="text-[#F1E4DE] text-xs font-medium">10-12am</span>
                </div>
                <div className="p-4 sm:p-5 flex items-center">
                  <span className="text-[#FF1493] font-semibold text-xs font-[family-name:var(--font-inter)] mr-2">Address:</span>
                  <span className="text-[#F1E4DE] text-xs font-medium">10-12am</span>
                </div>
              </div>
            </div>

            {/* Visit Website CTA Button */}
            <div className="relative z-10 w-full p-4 sm:p-6 border-b border-[#323438] flex justify-center">
              <button
                onClick={() => window.open("https://nazr.in", "_blank")}
                className="w-full sm:w-auto px-10 py-3 bg-[#FF007A] hover:bg-[#921150] active:scale-[0.98] border border-[#FF1493] text-[#F1E4DE] font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all shadow-md cursor-pointer relative group"
              >
                <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#FF007A]" />
                <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#FF007A]" />
                <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#FF007A]" />
                <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#FF007A]" />
                Visit website
              </button>
            </div>

            {/* Massive Full-Bleed "FIGHT SOCIAL" Footer Typography */}
            <div className="@container relative z-10 w-full flex items-center justify-center overflow-hidden px-1 sm:px-2 py-6 sm:py-8 md:py-10">
              <h2
                className="w-full text-[#F1E4DE] font-[family-name:var(--font-bebas)] leading-[82%] tracking-[-0.01em] uppercase text-center select-none whitespace-nowrap block"
                style={{ fontSize: "clamp(68px, 23.4cqw, 292px)" }}
              >
                FIGHT SOCIAL
              </h2>
            </div>
          </footer>
        </div>

      </div>

      {/* =========================================================================
          INTERACTIVE BOOKING MODAL
          ========================================================================= */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#181818] border border-[#3A3A3A] rounded-[4px] p-6 sm:p-8 shadow-2xl text-left">
            <button
              onClick={() => {
                setIsBookingOpen(false);
                setIsSubmitted(false);
              }}
              className="absolute top-5 right-5 text-gray-400 hover:text-[#F1E4DE] transition-colors cursor-pointer"
            >
              <CloseIcon />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="mb-6">
                  <span className="text-[#FF0E97] text-xs font-semibold tracking-widest uppercase font-[family-name:var(--font-mono)]">
                    NAZR X WCMMA
                  </span>
                  <h3 className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-3xl sm:text-4xl uppercase mt-1">
                    Reserve Your Pass
                  </h3>
                  <p className="text-[#F1E4DE]/80 text-xs sm:text-sm mt-1">
                    DLF Phase 1, Sector 26A, Gurugram • 26 Sept 2026
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#F1E4DE]/80 mb-2 font-medium">
                      Select Access Pass
                    </label>
                    <div className="space-y-2">
                      {slots.map((s) => (
                        <button
                          key={s.time}
                          type="button"
                          onClick={() => setSelectedSlot(s.time)}
                          className={`w-full text-left p-3 rounded-[2px] border text-xs transition-all flex justify-between items-center cursor-pointer ${
                            selectedSlot === s.time
                              ? "border-[#FF0E97] bg-[#FF0E97]/10 text-[#F1E4DE] font-medium"
                              : "border-[#333333] bg-[#222222] text-[#F1E4DE]/70 hover:border-[#555555]"
                          }`}
                        >
                          <span>{s.label}</span>
                          <span className="font-mono text-[#FF0E97]">{s.time}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#F1E4DE]/80 mb-1 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full bg-[#222222] border border-[#333333] rounded-[2px] px-3.5 py-2.5 text-sm text-[#F1E4DE] placeholder:text-[#F1E4DE]/40 focus:outline-none focus:border-[#FF0E97]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#F1E4DE]/80 mb-1 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full bg-[#222222] border border-[#333333] rounded-[2px] px-3.5 py-2.5 text-sm text-[#F1E4DE] placeholder:text-[#F1E4DE]/40 focus:outline-none focus:border-[#FF0E97]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#F1E4DE]/80 mb-1 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#222222] border border-[#333333] rounded-[2px] px-3.5 py-2.5 text-sm text-[#F1E4DE] placeholder:text-[#F1E4DE]/40 focus:outline-none focus:border-[#FF0E97]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 mt-4 bg-[#FF0E97] hover:bg-[#E00D86] text-[#F1E4DE] font-[family-name:var(--font-bebas)] text-xl tracking-wider uppercase rounded-[2px] transition-all cursor-pointer shadow-lg"
                  >
                    Confirm Registration
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="flex justify-center text-[#FF0E97]">
                  <CheckCircleIcon />
                </div>
                <h4 className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-3xl uppercase">
                  You&apos;re in the Club!
                </h4>
                <p className="text-sm text-[#F1E4DE]/80 max-w-sm mx-auto">
                  Confirmation and entry pass details have been sent to <span className="text-[#F1E4DE] font-semibold">{formData.email}</span>. See you at the ring!
                </p>
                <button
                  onClick={() => {
                    setIsBookingOpen(false);
                    setIsSubmitted(false);
                  }}
                  className="mt-4 px-6 py-2 border border-[#444444] text-[#F1E4DE] text-xs uppercase tracking-wider hover:bg-white/10 rounded-[2px] cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
