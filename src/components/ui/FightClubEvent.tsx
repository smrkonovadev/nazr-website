"use client";

import { useState } from "react";
import Image from "next/image";

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
    <div className="w-full bg-[#EBE6DF] text-[#E0E0E0] selection:bg-[#FF0E97] selection:text-white font-[family-name:var(--font-inter)]">
      {/* Outer wrapper with exact 20px padding around and 20px between sections */}
      <div className="w-full max-w-[1280px] mx-auto p-[20px] space-y-[20px]">

        {/* =========================================================================
            SECTION 1: HERO - "FIGHT CLUB" (NAZR X WCMMA)
            ========================================================================= */}
        <div className="relative w-full bg-[#383A3D] p-[1px] shadow-2xl overflow-hidden [clip-path:polygon(0_0,100%_0,100%_100%,34px_100%,0_calc(100%-34px))]">
          <section className="relative w-full bg-[#222325] overflow-hidden [clip-path:polygon(0_0,100%_0,100%_100%,33px_100%,0_calc(100%-33px))]">
            
            {/* Top Metadata Header Bar */}
            <div className="relative z-10 w-full flex flex-wrap items-center justify-between border-b border-[#323438] px-3 sm:px-5 py-2.5 bg-[#1F2022] text-xs font-[family-name:var(--font-mono)]">
              {/* Left: NAZR X WCMMA badge with diagonal stripes + Date */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#4E5055] px-2.5 py-0.5 font-bold tracking-wider text-white text-[11px] bg-[repeating-linear-gradient(45deg,#2C2D30,#2C2D30_3px,#1E1F21_3px,#1E1F21_6px)] font-[family-name:var(--font-inter)]">
                  NAZR X WCMMA
                </div>
                <span className="text-[#A0A2A6] text-[11px] tracking-widest font-mono">26/09/26</span>
              </div>

              {/* Right: GPS Coordinates & City */}
              <div className="flex items-center gap-5 mt-1 sm:mt-0 text-[11px]">
                <span className="text-[#888B90] tracking-wider font-mono">28°28&apos;18.3&quot;N 77°05&apos;52.5&quot;E</span>
                <span className="text-white font-medium tracking-widest font-mono">DELHI</span>
              </div>
            </div>

            {/* Giant Display Title: "FIGHT CLUB" */}
            <div className="relative z-10 w-full px-3 sm:px-6 pt-2 sm:pt-4 pb-1 sm:pb-2 border-b border-[#323438]">
              <h1 className="w-full font-[family-name:var(--font-bebas)] text-[#5A5D62] text-[74px] sm:text-[130px] md:text-[180px] lg:text-[218px] leading-[82%] tracking-[-0.03em] uppercase text-left select-none">
                FIGHT CLUB
              </h1>
            </div>

            {/* Lower 3-Column Tactical Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#323438]">
              
              {/* Column 1: Feature Tags, CTA Button (4 cols) */}
              <div className="md:col-span-4 flex flex-col justify-between p-4 sm:p-6 relative">
                {/* Tactical grid background with subtle crosshairs */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-25"
                  style={{
                    backgroundImage: "radial-gradient(#55585E 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />

                <div className="relative z-10 space-y-4">
                  {/* Tag 1 */}
                  <div className="relative pb-3 border-b border-[#323438]">
                    <h3 className="font-[family-name:var(--font-bebas)] text-white text-[30px] sm:text-[36px] leading-none tracking-wide uppercase">
                      LIVE MMA ACTION
                    </h3>
                    <span className="absolute -bottom-[6px] right-4 text-[#55585E] text-[10px] select-none">+</span>
                    <span className="absolute -bottom-[6px] right-20 text-[#55585E] text-[10px] select-none">+</span>
                  </div>

                  {/* Tag 2 */}
                  <div className="relative pb-3 border-b border-[#323438]">
                    <h3 className="font-[family-name:var(--font-bebas)] text-white text-[30px] sm:text-[36px] leading-none tracking-wide uppercase">
                      REAL COMMUNITY
                    </h3>
                    <span className="absolute -bottom-[6px] right-4 text-[#55585E] text-[10px] select-none">+</span>
                    <span className="absolute -bottom-[6px] right-20 text-[#55585E] text-[10px] select-none">+</span>
                  </div>

                  {/* Tag 3 */}
                  <div className="relative pb-3 border-b border-[#323438]">
                    <h3 className="font-[family-name:var(--font-bebas)] text-white text-[30px] sm:text-[36px] leading-none tracking-wide uppercase">
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
                      className="px-4 py-2 bg-[#780D41] hover:bg-[#921150] active:scale-[0.98] border border-[#FF1493] text-white font-[family-name:var(--font-inter)] text-xs font-medium tracking-wide rounded-[2px] transition-all shadow-md cursor-pointer"
                    >
                      Book Your Slot Now
                    </button>
                  </div>

                  {/* Bottom Owl Box positioned at bottom right of Col 1 */}
                  <div className="hidden md:flex justify-end pt-6 -mb-6 -mr-6">
                    <div className="relative w-14 h-12 border-t border-l border-[#323438] bg-[#1F2022] flex items-center justify-center p-2">
                      <span className="absolute -top-[6px] -left-[6px] text-[#55585E] text-[10px] select-none">+</span>
                      <span className="absolute -top-[6px] -right-[6px] text-[#55585E] text-[10px] select-none">+</span>
                      <div className="relative w-full h-full">
                        <Image
                          src="/images/fight-club/owl-eyes.png"
                          alt="NAZR Owl"
                          fill
                          className="object-contain invert brightness-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Event Summary Copy on Blueprint Grid (4 cols) */}
              <div className="md:col-span-4 flex flex-col justify-between p-4 sm:p-6 relative">
                {/* Blueprint grid background */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-25"
                  style={{
                    backgroundImage: "radial-gradient(#55585E 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />

                {/* Centered Technical Text Box with Crosshair Marks */}
                <div className="my-auto relative z-10 border border-[#323438] p-5 sm:p-6 bg-[#1F2022]/80 rounded-[2px]">
                  {/* Top Crosshairs */}
                  <div className="flex justify-between text-[#55585E] text-xs font-mono select-none -mt-7 mb-2 px-1">
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                  </div>

                  <p className="font-[family-name:var(--font-inter)] text-[13px] sm:text-[13.5px] text-[#C6C9CE] leading-[170%] font-normal">
                    NAZR X WCMMA brings you a full day of MMA, community and culture.<br />
                    Experience live MMA action, meet fighters, creators, and be part of the community that comes together to celebrate strength, confidence and safety.
                  </p>

                  {/* Bottom Crosshairs */}
                  <div className="flex justify-between text-[#55585E] text-xs font-mono select-none -mb-7 mt-3 px-1">
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                  </div>
                </div>

                {/* Bottom Owl Box positioned at bottom left of Col 2 */}
                <div className="hidden md:flex justify-start pt-6 -mb-6 -ml-6 relative z-10">
                  <div className="relative w-14 h-12 border-t border-r border-[#323438] bg-[#1F2022] flex items-center justify-center p-2">
                    <span className="absolute -top-[6px] -right-[6px] text-[#55585E] text-[10px] select-none">+</span>
                    <span className="absolute -bottom-[6px] -right-[6px] text-[#55585E] text-[10px] select-none">+</span>
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/fight-club/owl-eyes.png"
                        alt="NAZR Owl"
                        fill
                        className="object-contain invert brightness-200"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: Hanma Fighter Graphic & Barcode (4 cols) */}
              <div className="md:col-span-4 relative min-h-[380px] sm:min-h-[440px] bg-[#17181A] overflow-hidden flex flex-col justify-end p-4">
                {/* Background Fighter Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/fight-club/hanma-fighter.jpg"
                    alt="Hanma MMA Fighter"
                    fill
                    priority
                    className="object-cover object-top opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17181A] via-[#17181A]/30 to-transparent" />
                </div>

                {/* Bold "HANMA" Typography Layer */}
                <div className="relative z-10 w-full text-center pb-2">
                  <h2 className="font-[family-name:var(--font-bebas)] text-[#D8D5CC] text-[68px] sm:text-[88px] leading-none tracking-normal uppercase drop-shadow-md">
                    HANMA
                  </h2>
                  
                  {/* Technical Barcode Graphic */}
                  <div className="w-full flex justify-center items-end gap-[2px] mt-1 opacity-80">
                    <div className="bg-[#D8D5CC] w-[2px] h-[22px]" />
                    <div className="bg-[#D8D5CC] w-[1px] h-[16px]" />
                    <div className="bg-[#D8D5CC] w-[3px] h-[20px]" />
                    <div className="bg-[#D8D5CC] w-[1px] h-[16px]" />
                    <div className="bg-[#D8D5CC] w-[2px] h-[18px]" />
                    <div className="bg-[#D8D5CC] w-[1px] h-[16px]" />
                    <div className="bg-[#D8D5CC] w-[4px] h-[22px]" />
                    <div className="bg-[#D8D5CC] w-[1px] h-[16px]" />
                    <div className="bg-[#D8D5CC] w-[2px] h-[18px]" />
                    <div className="bg-[#D8D5CC] w-[3px] h-[20px]" />
                    <div className="bg-[#D8D5CC] w-[1px] h-[16px]" />
                    <div className="bg-[#D8D5CC] w-[2px] h-[22px]" />
                    <div className="bg-[#D8D5CC] w-[1px] h-[16px]" />
                    <div className="bg-[#D8D5CC] w-[3px] h-[18px]" />
                    <div className="bg-[#D8D5CC] w-[2px] h-[20px]" />
                    <div className="bg-[#D8D5CC] w-[1px] h-[16px]" />
                    <div className="bg-[#D8D5CC] w-[4px] h-[22px]" />
                    <div className="bg-[#D8D5CC] w-[1px] h-[16px]" />
                    <div className="bg-[#D8D5CC] w-[2px] h-[18px]" />
                    <div className="bg-[#D8D5CC] w-[3px] h-[22px]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>


        {/* =========================================================================
            SECTION 2: MISSION & NEON DEVANAGARI ("WE MAKE SAFETY...")
            ========================================================================= */}
        <section className="relative w-full bg-[#181818] border border-[#333333] rounded-[2px] overflow-hidden [clip-path:polygon(0_0,100%_0,100%_calc(100%-28px),calc(100%-28px)_100%,0_100%)]">
          {/* Background Technical Grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#2E2E2E]">
            
            {/* Left Column: Stacked Giant Typography + Overlaid Majestic Owl (7 cols) */}
            <div className="md:col-span-7 relative min-h-[500px] sm:min-h-[640px] p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
              {/* Stacked Typography */}
              <div className="relative z-0 space-y-1 sm:space-y-2">
                <div className="border-b border-[#2E2E2E] pb-2">
                  <span className="font-[family-name:var(--font-bebas)] text-white text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                    WE
                  </span>
                </div>
                <div className="border-b border-[#2E2E2E] pb-2">
                  <span className="font-[family-name:var(--font-bebas)] text-[#505050] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                    MAKE SAFETY
                  </span>
                </div>
                <div className="border-b border-[#2E2E2E] pb-2">
                  <span className="font-[family-name:var(--font-bebas)] text-[#505050] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                    SIMPLE,
                  </span>
                </div>
                <div className="border-b border-[#2E2E2E] pb-2">
                  <span className="font-[family-name:var(--font-bebas)] text-[#505050] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                    ACCESSIBLE
                  </span>
                </div>
                <div className="border-b border-[#2E2E2E] pb-2">
                  <span className="font-[family-name:var(--font-bebas)] text-[#505050] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                    AND
                  </span>
                </div>
                <div>
                  <span className="font-[family-name:var(--font-bebas)] text-[#505050] text-[56px] sm:text-[84px] md:text-[96px] leading-[88%] tracking-tight uppercase block">
                    ACTIONABLE.
                  </span>
                </div>
              </div>

              {/* Overlaid Owl Image sitting directly in front of the typography */}
              <div className="absolute right-0 sm:right-6 top-1/2 -translate-y-1/2 w-[280px] sm:w-[380px] md:w-[420px] h-[460px] sm:h-[580px] z-10 pointer-events-none">
                <Image
                  src="/images/fight-club/owl.jpg"
                  alt="NAZR Guardian Owl"
                  fill
                  priority
                  className="object-contain object-center drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Right Column: Giant Hot Pink Neon Outlined Devanagari "न ज़र" (5 cols) */}
            <div className="md:col-span-5 flex items-center justify-center p-6 sm:p-10 bg-[#141414]/90 relative min-h-[460px]">
              <svg
                viewBox="0 0 280 620"
                className="w-full max-w-[280px] sm:max-w-[320px] h-auto drop-shadow-[0_0_15px_rgba(255,14,151,0.55)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Devanagari 'न' (NA) */}
                <g stroke="#FF0E97" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter">
                  {/* Top shirorekha bar */}
                  <line x1="20" y1="40" x2="260" y2="40" />
                  {/* Vertical stem */}
                  <line x1="200" y1="40" x2="200" y2="200" />
                  {/* Horizontal arm */}
                  <line x1="80" y1="120" x2="200" y2="120" />
                  {/* Loop */}
                  <path d="M80 120 C 40 120, 30 160, 65 180 C 100 195, 110 145, 80 120 Z" />
                </g>

                {/* Devanagari 'ज़' (ZA) */}
                <g stroke="#FF0E97" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter">
                  {/* Top shirorekha bar */}
                  <line x1="10" y1="240" x2="270" y2="240" />
                  {/* Vertical stem */}
                  <line x1="210" y1="240" x2="210" y2="410" />
                  {/* Horizontal connector */}
                  <line x1="120" y1="310" x2="210" y2="310" />
                  {/* Curve hook */}
                  <path d="M120 310 C 50 310, 30 380, 85 410 C 130 435, 160 380, 110 350" />
                  {/* Nukta dot (za) */}
                  <circle cx="100" cy="450" r="7" fill="#FF0E97" />
                </g>

                {/* Devanagari 'र' (RA) */}
                <g stroke="#FF0E97" strokeWidth="10" strokeLinecap="square" strokeLinejoin="miter">
                  {/* Top shirorekha bar */}
                  <line x1="60" y1="480" x2="220" y2="480" />
                  {/* Hook and diagonal leg */}
                  <path d="M140 480 C 80 480, 70 540, 125 565 L 195 650" />
                </g>
              </svg>
            </div>
          </div>
        </section>


        {/* =========================================================================
            SECTION 3: "ABOUT EVENT" CARD
            ========================================================================= */}
        <section className="relative w-full bg-[#181818] border border-[#333333] rounded-[2px] p-4 sm:p-8 overflow-hidden [clip-path:polygon(0_0,100%_0,100%_calc(100%-24px),calc(100%-24px)_100%,0_100%)]">
          {/* Subtle Grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: "radial-gradient(#555 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center">
            
            {/* Left: Female Boxer Photo with Viewfinder HUD Brackets (5 cols) */}
            <div className="md:col-span-5 relative w-full h-[320px] sm:h-[420px] md:h-[460px] bg-black rounded-[2px] overflow-hidden border border-[#2E2E2E] group">
              <Image
                src="/images/fight-club/boxer.jpg"
                alt="NAZR Fight Club Boxer"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {/* Camera Viewfinder HUD Brackets */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-white pointer-events-none" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-white pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-white pointer-events-none" />
            </div>

            {/* Right: Event Details & Registration (7 cols) */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6 text-left">
              <div>
                <h2 className="font-[family-name:var(--font-bebas)] text-white text-[48px] sm:text-[68px] md:text-[76px] leading-[90%] tracking-tight uppercase">
                  ABOUT EVENT
                </h2>
                <div className="w-full h-px bg-[#2E2E2E] my-4" />

                <p className="font-[family-name:var(--font-inter)] text-sm sm:text-[15px] text-[#D0D0D0] leading-[160%] font-normal">
                  Experiance MMA up close with stimulated fights, fighter interactions, creator moments and more - all coming together for a day of action and entertainment. Register and be part of the experiance.
                </p>
                <div className="w-full h-px bg-[#2E2E2E] my-4" />

                {/* Event Timing */}
                <div className="py-1">
                  <span className="text-[#FF0E97] font-semibold text-sm mr-2 font-[family-name:var(--font-inter)]">Time:</span>
                  <span className="text-white text-sm font-medium">11 am onwards</span>
                </div>
                <div className="w-full h-px bg-[#2E2E2E] my-4" />

                {/* Event Address */}
                <div className="py-1">
                  <span className="text-[#FF0E97] font-semibold text-sm mr-2 font-[family-name:var(--font-inter)]">Address:</span>
                  <span className="text-white text-sm font-normal leading-[150%]">
                    Basement, B-11, 1, Ashoka Cresent Marg, DLF Phase 1, Sector 26A, Gurugram, Haryana 122002
                  </span>
                </div>
                <div className="w-full h-px bg-[#2E2E2E] my-4" />
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="px-6 py-3 bg-[#9C135A] hover:bg-[#B31767] active:scale-[0.98] border border-[#FF0E97]/40 text-white font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-all shadow-lg cursor-pointer"
                >
                  Book Your Slot Now
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================================
            SECTION 4: DEDICATED PAGE FOOTER ("FIGHT CLUB" / NAZR X WCMMA)
            ========================================================================= */}
        <footer className="relative w-full bg-[#1D1D1D] border border-[#3A3A3A] overflow-hidden rounded-[2px] shadow-2xl [clip-path:polygon(0_0,100%_0,100%_100%,32px_100%,0_calc(100%-32px))]">
          {/* Top Tactical Header Bar */}
          <div className="w-full flex flex-wrap items-center justify-between border-b border-[#3A3A3A] bg-[#141414] text-xs font-[family-name:var(--font-mono)]">
            {/* Left Badges */}
            <div className="flex items-center">
              {/* NAZR X WCMMA angled tab */}
              <div className="bg-[#EBE6DF] text-black font-extrabold px-4 sm:px-6 py-2.5 tracking-wider uppercase [clip-path:polygon(0_0,calc(100%-14px)_0,100%_100%,0_100%)] text-xs sm:text-sm">
                NAZR X WCMMA
              </div>
              {/* Date stamp */}
              <div className="px-3 sm:px-5 py-2 text-[#A0A0A0] text-xs font-mono tracking-widest">
                26/07/26
              </div>
            </div>

            {/* Right Coordinates & City */}
            <div className="flex items-center gap-3 sm:gap-4 px-3 sm:px-6 py-2 text-[11px] sm:text-xs">
              <span className="text-[#888888] tracking-wider">35.6774°N / 139.6525°E</span>
              <span className="text-[#444444]">|</span>
              <span className="text-white font-semibold tracking-widest">DELHI</span>
            </div>
          </div>

          {/* Middle Schedule & Manifesto Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#3A3A3A] border-b border-[#3A3A3A]">
            {/* Left Column: Manifesto Paragraph */}
            <div className="md:col-span-6 p-5 sm:p-8 flex items-center">
              <p className="font-[family-name:var(--font-inter)] text-xs sm:text-[13px] md:text-[14px] text-[#D0D0D0] leading-[165%] font-normal">
                NAZR is India&apos;s first women safety ecosystem built around the way you actually live. From emergency products to technology, we&apos;re making safety feel simpler, smarter, and more accessible, because preparedness should feel natural.
              </p>
            </div>

            {/* Right Column: 2x2 Slots Grid */}
            <div className="md:col-span-6 grid grid-cols-2 divide-x divide-y divide-[#3A3A3A]">
              <div className="p-4 sm:p-5 flex items-center">
                <span className="text-[#FF0E97] font-semibold text-xs font-[family-name:var(--font-inter)] mr-2">Time:</span>
                <span className="text-white text-xs font-medium">10-12am</span>
              </div>
              <div className="p-4 sm:p-5 flex items-center">
                <span className="text-[#FF0E97] font-semibold text-xs font-[family-name:var(--font-inter)] mr-2">Address:</span>
                <span className="text-white text-xs font-medium">10-12am</span>
              </div>
              <div className="p-4 sm:p-5 flex items-center">
                <span className="text-[#FF0E97] font-semibold text-xs font-[family-name:var(--font-inter)] mr-2">Time:</span>
                <span className="text-white text-xs font-medium">10-12am</span>
              </div>
              <div className="p-4 sm:p-5 flex items-center">
                <span className="text-[#FF0E97] font-semibold text-xs font-[family-name:var(--font-inter)] mr-2">Address:</span>
                <span className="text-white text-xs font-medium">10-12am</span>
              </div>
            </div>
          </div>

          {/* Massive Full-Bleed "FIGHT CLUB" Footer Typography */}
          <div className="w-full px-2 sm:px-4 pt-4 sm:pt-6 pb-0 bg-[#1D1D1D] overflow-hidden">
            <h2 className="w-full font-[family-name:var(--font-bebas)] text-[#EAE6DF] text-[84px] sm:text-[160px] md:text-[220px] lg:text-[270px] leading-[76%] tracking-[-0.03em] uppercase text-center select-none block">
              FIGHT CLUB
            </h2>
          </div>
        </footer>

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
              className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <CloseIcon />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="mb-6">
                  <span className="text-[#FF0E97] text-xs font-semibold tracking-widest uppercase font-[family-name:var(--font-mono)]">
                    NAZR X WCMMA
                  </span>
                  <h3 className="font-[family-name:var(--font-bebas)] text-white text-3xl sm:text-4xl uppercase mt-1">
                    Reserve Your Pass
                  </h3>
                  <p className="text-[#A0A0A0] text-xs sm:text-sm mt-1">
                    DLF Phase 1, Sector 26A, Gurugram • 26 Sept 2026
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-2 font-medium">
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
                              ? "border-[#FF0E97] bg-[#FF0E97]/10 text-white font-medium"
                              : "border-[#333333] bg-[#222222] text-[#A0A0A0] hover:border-[#555555]"
                          }`}
                        >
                          <span>{s.label}</span>
                          <span className="font-mono text-[#FF0E97]">{s.time}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-1 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full bg-[#222222] border border-[#333333] rounded-[2px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF0E97]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-1 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full bg-[#222222] border border-[#333333] rounded-[2px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF0E97]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-1 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#222222] border border-[#333333] rounded-[2px] px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#FF0E97]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 mt-4 bg-[#FF0E97] hover:bg-[#E00D86] text-white font-[family-name:var(--font-bebas)] text-xl tracking-wider uppercase rounded-[2px] transition-all cursor-pointer shadow-lg"
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
                <h4 className="font-[family-name:var(--font-bebas)] text-white text-3xl uppercase">
                  You&apos;re in the Club!
                </h4>
                <p className="text-sm text-[#B0B0B0] max-w-sm mx-auto">
                  Confirmation and entry pass details have been sent to <span className="text-white font-medium">{formData.email}</span>. See you at the ring!
                </p>
                <button
                  onClick={() => {
                    setIsBookingOpen(false);
                    setIsSubmitted(false);
                  }}
                  className="mt-4 px-6 py-2 border border-[#444444] text-white text-xs uppercase tracking-wider hover:bg-white/10 rounded-[2px] cursor-pointer"
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
