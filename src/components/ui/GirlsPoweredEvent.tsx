"use client";

import Image from "next/image";
import Link from "next/link";

// Self-contained SVGs for maximum reliability
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

export function GirlsPoweredEvent() {

  return (
    <div className="w-full bg-[#161616] text-[#FFF1EB] selection:bg-[#FF0E97] selection:text-white">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      {/* DESKTOP HERO (md and up) */}
      <section className="hidden md:block relative w-full h-[832px] overflow-hidden bg-[#FA43B7] text-white">
        {/* Full-fit Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/girls.svg"
            alt="Girls Powered by NAZR"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle bottom gradient fade to seamlessly blend into #161616 */}
          <div className="absolute inset-x-0 bottom-0 h-36 lg:h-44 bg-gradient-to-t from-[#161616] via-[#161616]/70 to-transparent pointer-events-none" />
        </div>

        {/* Content Container overlaid on top of full-fit image */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between px-4 md:px-[40px] pt-12 md:pt-[76px] pb-12">
          <div className="w-full h-full flex flex-col justify-between">
            {/* Top Header Group: Tags + Title right against each other */}
            <div className="w-full flex flex-col">
              {/* Top Row: Date and Location tags moved up */}
              <div className="w-full flex justify-between items-center -translate-y-6 md:-translate-y-[44px]">
                <div className="bg-[#161616] text-[#FFF1EB] px-5 py-2.5 font-[family-name:var(--font-mono)] text-xs md:text-sm tracking-wider uppercase shadow-md flex items-center justify-center">
                  27.09.2026
                </div>
                <div className="bg-[#161616] text-[#FFF1EB] px-5 py-2.5 font-[family-name:var(--font-inter)] text-xs md:text-sm tracking-wide shadow-md flex items-center justify-center">
                  Delhi, India
                </div>
              </div>

              {/* Big Hero Title: Aligned from 27.09.2026 on the left to Delhi, India on the right */}
              <div className="w-full text-left mt-0">
                <h1 className="w-full font-[family-name:var(--font-bebas)] font-normal text-white text-[160px] leading-[116px] tracking-[-2.32px] uppercase whitespace-nowrap text-left drop-shadow-sm">
                  GIRLS.POWERED.BY NAZR.
                </h1>
              </div>
            </div>

            {/* Centered Mid Row: Left text and Right button vertically in the center */}
            <div className="w-full my-auto flex flex-row items-center justify-between gap-6">
              {/* Left Copy */}
              <div className="w-[320px] lg:w-[360px] text-left">
                <p className="font-[family-name:var(--font-inter)] text-[15px] lg:text-[16px] text-white/95 leading-[150%] font-normal drop-shadow">
                  Come for the beginner-friendly pad work, stay for the energy and the people in your corner. A NAZR Sunday built around movement, confidence and community.
                </p>
              </div>

              {/* Right Button */}
              <div className="w-auto flex justify-end">
                <a
                  href="https://www.district.in/events/girls-powered-by-nazr-sep27-2026-buy-tickets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[48px] px-8 bg-[#161616] text-[#FFF1EB] hover:bg-black hover:scale-105 active:scale-95 font-[family-name:var(--font-inter)] font-semibold text-[15px] flex items-center justify-center shadow-2xl tracking-wide uppercase transition-all duration-200 cursor-pointer text-center"
                >
                  Book Your Slot Now
                </a>
              </div>
            </div>

            {/* Bottom spacer to keep the row in the optical center */}
            <div className="w-full h-16 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* MOBILE HERO (below md) */}
      <section className="block md:hidden relative w-full h-[812px] overflow-hidden bg-[#FA43B7] text-white">
        {/* Full-fit Background Image focused on the woman, pinned to bottom */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/girls.svg"
            alt="Girls Powered by NAZR"
            fill
            priority
            className="object-cover object-bottom"
          />
          {/* Bottom fade into #161616 */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#161616] via-[#161616]/80 to-transparent pointer-events-none" />
        </div>

        {/* Content Container overlaid on top */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between px-4 pt-5 pb-6">
          {/* Top Header Group: Tags + Title + Subtitle all together at the top */}
          <div className="w-full flex flex-col items-center">
            {/* Top Row: Date and Location tags */}
            <div className="w-full flex justify-between items-center">
              <div className="bg-[#161616] text-[#FFF1EB] px-4 py-2 font-[family-name:var(--font-mono)] text-xs tracking-wider uppercase shadow-md">
                27.09.2026
              </div>
              <div className="bg-[#161616] text-[#FFF1EB] px-4 py-2 font-[family-name:var(--font-inter)] text-xs tracking-wide shadow-md">
                Delhi, India
              </div>
            </div>

            {/* Hero Title & Subtitle Stack at Top */}
            <div className="w-full flex flex-col items-center text-center mt-3">
              <h1 className="font-[family-name:var(--font-bebas)] text-white leading-[88%] tracking-[-0.03em] uppercase text-[50px]">
                <span className="block">GIRLS.POWERED.</span>
                <span className="block">BY NAZR.</span>
              </h1>
              <p className="font-[family-name:var(--font-inter)] text-[12px] text-white/95 leading-[135%] font-normal max-w-[310px] mt-2 drop-shadow-sm">
                Come for the beginner-friendly pad work, stay for the energy and the people in your corner. A NAZR Sunday built around movement, confidence and community.
              </p>
            </div>
          </div>

          {/* Centered Overlaid Button across the model's knees */}
          <div className="w-full flex justify-center mb-14 z-20">
            <a
              href="https://www.district.in/events/girls-powered-by-nazr-sep27-2026-buy-tickets"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[82%] max-w-[280px] h-[46px] bg-[#161616] text-[#FFF1EB] hover:bg-black font-[family-name:var(--font-inter)] font-medium text-sm flex items-center justify-center px-4 shadow-2xl tracking-normal transition-all duration-200 cursor-pointer text-center"
            >
              Book Your Slot Now
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EVENT DETAILS SECTION
          ========================================================================= */}
      <section className="relative w-full bg-[#161616] px-4 md:px-[40px] pt-10 md:pt-24 pb-6 md:pb-8">
        <div className="w-full mx-auto flex flex-col items-center">
          {/* Desktop Header */}
          <div className="hidden md:flex flex-col items-center">
            <h2 className="font-[family-name:var(--font-bebas)] text-white text-[54px] md:text-[68px] leading-none tracking-[-0.01em] uppercase text-center">
              EVENT DETAILS
            </h2>
            <p className="mt-4 max-w-[680px] text-center font-[family-name:var(--font-inter)] text-[#FFF1EB]/80 text-[16px] leading-[160%]">
              Girls. Powered. by NAZR brings together beginner-friendly pad work, movement, music and community for a Sunday morning designed to get you moving, trying something new and feeling more confident.
            </p>
          </div>

          {/* Photo Gallery - Desktop 3 Columns */}
          <div className="hidden md:flex items-end justify-between mt-14 w-full">
            {/* Left Column: 2 small portrait photos */}
            <div className="flex items-end gap-3.5">
              <div className="relative w-[130px] lg:w-[135px] h-[180px] lg:h-[190px] rounded-[3px] overflow-hidden shadow-lg border border-white/10 group">
                <Image
                  src="/images/g1.svg"
                  alt="Training Moment 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative w-[130px] lg:w-[135px] h-[180px] lg:h-[190px] rounded-[3px] overflow-hidden shadow-lg border border-white/10 group">
                <Image
                  src="/images/g2.svg"
                  alt="Training Moment 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Center: 1 wider landscape photo */}
            <div className="relative w-[440px] lg:w-[460px] h-[220px] lg:h-[230px] rounded-[3px] overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="/images/action.svg"
                alt="Boxing Action"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right Column: 2 small portrait photos (Punching pose first, Standing straight second) */}
            <div className="flex items-end gap-3.5">
              <div className="relative w-[130px] lg:w-[135px] h-[180px] lg:h-[190px] rounded-[3px] overflow-hidden shadow-lg border border-white/10 group">
                <Image
                  src="/images/g4.svg"
                  alt="Training Moment 4"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative w-[130px] lg:w-[135px] h-[180px] lg:h-[190px] rounded-[3px] overflow-hidden shadow-lg border border-white/10 group">
                <Image
                  src="/images/g3.svg"
                  alt="Training Moment 3"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Mobile Gallery & Event Details Flow */}
          <div className="flex md:hidden flex-col items-center gap-5 w-full max-w-[360px]">
            {/* Top 2 Photos (directly below hero section) */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="relative h-[155px] rounded-[2px] overflow-hidden border border-white/20 shadow-lg">
                <Image
                  src="/images/g1.svg"
                  alt="Event Moment 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[155px] rounded-[2px] overflow-hidden border border-white/20 shadow-lg">
                <Image
                  src="/images/g2.svg"
                  alt="Event Moment 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Mobile EVENT DETAILS Header & Text */}
            <div className="flex flex-col items-center text-center mt-5">
              <h2 className="font-[family-name:var(--font-bebas)] text-white text-[38px] leading-none tracking-[-0.01em] uppercase">
                EVENT DETAILS
              </h2>
              <p className="mt-3 text-center font-[family-name:var(--font-inter)] text-[#FFF1EB]/80 text-[13px] leading-[150%]">
                Girls. Powered. by NAZR brings together beginner-friendly pad work, movement, music and community for a Sunday morning designed to get you moving, trying something new and feeling more confident.
              </p>
            </div>

            {/* Middle Wide Photo */}
            <div className="relative w-full h-[180px] rounded-[2px] overflow-hidden border border-white/20 shadow-lg mt-2">
              <Image
                src="/images/action.svg"
                alt="Boxing Action"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom 2 Photos */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="relative h-[155px] rounded-[2px] overflow-hidden border border-white/20 shadow-lg">
                <Image
                  src="/images/g4.svg"
                  alt="Event Moment 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[155px] rounded-[2px] overflow-hidden border border-white/20 shadow-lg">
                <Image
                  src="/images/g3.svg"
                  alt="Event Moment 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DATE, TIME & LOCATION SECTION
          ========================================================================= */}
      <section className="relative w-full bg-[#161616] px-4 md:px-[40px] pt-0 pb-8 md:pb-16 text-center">
        <div className="w-full max-w-[358px] md:max-w-none mx-auto flex flex-col border-y border-white">
          {/* Date Block */}
          <div className="py-6 md:py-8 flex flex-col items-center border-b border-white">
            <span className="font-[family-name:var(--font-inter)] text-sm md:text-[15px] text-white/70 font-normal">
              Date:
            </span>
            <h3 className="font-[family-name:var(--font-bebas)] text-white text-[48px] sm:text-[60px] md:text-[76px] leading-none tracking-normal mt-2 mb-1.5">
              SEP 27TH 2026
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-sm md:text-[15px] text-white/90 font-normal">
              Sunday
            </p>
          </div>

          {/* Time Block */}
          <div className="py-6 md:py-8 flex flex-col items-center border-b border-white">
            <span className="font-[family-name:var(--font-inter)] text-sm md:text-[15px] text-white/70 font-normal">
              Time:
            </span>
            <h3 className="font-[family-name:var(--font-bebas)] text-white text-[48px] sm:text-[60px] md:text-[76px] leading-none tracking-normal mt-2 mb-1.5">
              11:00 AM ONWARDS
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-sm md:text-[15px] text-white/90 font-normal">
              Choose your slot now
            </p>
          </div>

          {/* Location Block */}
          <div className="py-6 md:py-8 flex flex-col items-center">
            <span className="font-[family-name:var(--font-inter)] text-sm md:text-[15px] text-white/70 font-normal">
              Location:
            </span>
            <h3 className="font-[family-name:var(--font-bebas)] text-white text-[48px] sm:text-[60px] md:text-[76px] leading-none tracking-normal mt-2 mb-2">
              DELHI
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-xs sm:text-sm md:text-[15px] text-white/80 max-w-[340px] md:max-w-[540px] leading-[160%] font-normal text-center">
              RZ-74-A, Aruna Asaf Ali Marg, Kishangarh Village,<br className="hidden sm:inline" /> Vasant Kunj, New Delhi, Delhi 110070
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DRESS CODE: READY TO MOVE SECTION
          ========================================================================= */}
      <section className="relative w-full bg-[#161616] px-4 md:px-[40px] py-12 md:py-24">
        <div className="w-full mx-auto">
          {/* Desktop 2-column split / Mobile stack */}
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-14">
            {/* Mobile Image (exact W: 358px Fill, H: 655px with centered crop) */}
            <div className="w-full max-w-[358px] mx-auto md:hidden relative h-[655px] overflow-hidden shadow-2xl">
              <Image
                src="/images/wow-image.svg"
                alt="Ready To Move Boxers"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Left Content Column */}
            <div className="w-full max-w-[358px] md:max-w-none md:w-1/2 mx-auto flex flex-col justify-between text-center md:text-left">
              <div>
                <span className="font-[family-name:var(--font-inter)] text-xs md:text-sm text-white uppercase tracking-[0.25em] font-medium block">
                  DRESS CODE
                </span>
                <h2 className="font-[family-name:var(--font-bebas)] text-white text-[40px] md:text-[86px] leading-[100%] md:leading-[90%] tracking-normal md:tracking-[-0.02em] uppercase mt-2 mb-6 md:mb-8">
                  READY TO MOVE
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-4">
                  <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] text-white leading-[21.9px]">
                    Wear something you feel comfortable training in, activewear, sneakers, whatever lets you move freely.
                  </p>
                  <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] text-white leading-[21.9px]">
                    We&apos;ll bring the gloves, coaches and energy. You just bring yourself.
                  </p>
                </div>
              </div>

              {/* Big Pink CTA Button */}
              <div className="mt-8 md:mt-12 w-full">
                <a
                  href="https://www.district.in/events/girls-powered-by-nazr-sep27-2026-buy-tickets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-[48px] bg-[#FF0E97] hover:bg-[#E00D86] active:scale-[0.99] text-white font-[family-name:var(--font-bebas)] text-[22px] md:text-[24px] tracking-wide flex items-center justify-center uppercase transition-all duration-200 shadow-xl cursor-pointer"
                >
                  BOOK YOUR SLOT NOW
                </a>
              </div>
            </div>

            {/* Desktop Image Column */}
            <div className="hidden md:block w-full md:w-1/2 relative min-h-[580px] lg:min-h-[655px] rounded-[3px] overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src="/images/wow-image.svg"
                alt="Ready To Move Boxers"
                fill
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR PARTNERS MARQUEE SECTION
          ========================================================================= */}
      <section className="relative w-full bg-[#161616] px-4 md:px-[40px] py-10 md:py-16 overflow-hidden">
        <div className="w-full mx-auto flex flex-col items-center">
          <h2 className="font-[family-name:var(--font-bebas)] text-white text-[40px] md:text-[72px] leading-[90%] tracking-[-0.02em] uppercase text-center mb-8 md:mb-12">
            OUR PARTNERS
          </h2>

          {/* Marquee Container */}
          <div className="w-full overflow-hidden relative">
            {/* Scrolling track */}
            <div className="flex animate-marquee-partners items-center gap-16 md:gap-24 w-max">
              {/* First set */}
              <Image src="/images/bree.svg" alt="Bree" width={160} height={70} className="h-[44px] md:h-[56px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" unoptimized />
              <Image src="/images/Pinnora - Events.svg" alt="Pinnora Events" width={160} height={70} className="h-[44px] md:h-[56px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" unoptimized />
              <Image src="/images/Mask group.svg" alt="Partner" width={160} height={70} className="h-[90px] md:h-[115px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" unoptimized />
              {/* Duplicate set for seamless loop */}
              <Image src="/images/bree.svg" alt="Bree" width={160} height={70} className="h-[44px] md:h-[56px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" unoptimized />
              <Image src="/images/Pinnora - Events.svg" alt="Pinnora Events" width={160} height={70} className="h-[44px] md:h-[56px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" unoptimized />
              <Image src="/images/Mask group.svg" alt="Partner" width={160} height={70} className="h-[90px] md:h-[115px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" unoptimized />
              {/* Third set for wider screens */}
              <Image src="/images/bree.svg" alt="Bree" width={160} height={70} className="h-[44px] md:h-[56px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" unoptimized />
              <Image src="/images/Pinnora - Events.svg" alt="Pinnora Events" width={160} height={70} className="h-[44px] md:h-[56px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" unoptimized />
              <Image src="/images/Mask group.svg" alt="Partner" width={160} height={70} className="h-[90px] md:h-[115px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" unoptimized />
              {/* Fourth set */}
              <Image src="/images/bree.svg" alt="Bree" width={160} height={70} className="h-[44px] md:h-[56px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" unoptimized />
              <Image src="/images/Pinnora - Events.svg" alt="Pinnora Events" width={160} height={70} className="h-[44px] md:h-[56px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" unoptimized />
              <Image src="/images/Mask group.svg" alt="Partner" width={160} height={70} className="h-[90px] md:h-[115px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" unoptimized />
            </div>
          </div>
        </div>

        {/* Marquee animation */}
        <style jsx>{`
          @keyframes marquee-partners {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-partners {
            animation: marquee-partners 20s linear infinite;
          }
        `}</style>
      </section>

      {/* =========================================================================
          PAGE FOOTER / BRANDING BAR
          ========================================================================= */}
      {/* =========================================================================
          PAGE FOOTER / BRANDING BAR
          ========================================================================= */}
      <footer className="relative w-full bg-[#161616] px-4 md:px-[40px] pt-12 pb-12 border-t border-[#262626]">
        <div className="w-full mx-auto flex flex-col items-center">
          {/* Top badges in solid white with black text */}
          <div className="w-full flex justify-between items-center mb-6 md:mb-10">
            <div className="bg-white text-black px-4 md:px-5 py-2 font-[family-name:var(--font-mono)] text-xs md:text-sm font-semibold tracking-wider uppercase shadow-sm">
              27.09.2026
            </div>
            <div className="bg-white text-black px-4 md:px-5 py-2 font-[family-name:var(--font-inter)] text-xs md:text-sm font-medium tracking-wide shadow-sm">
              Delhi, India
            </div>
          </div>

          {/* Branding Headline: 2-line on mobile, 1-line on desktop */}
          <div className="w-full text-center my-4 md:my-10 overflow-hidden">
            <h2 className="block md:hidden font-[family-name:var(--font-bebas)] text-white text-[56px] leading-[88%] tracking-[-0.02em] uppercase text-center">
              GIRLS.POWERED.<br />BY NAZR.
            </h2>
            <h2 className="hidden md:block font-[family-name:var(--font-bebas)] text-white text-[132px] lg:text-[154px] xl:text-[166px] leading-[88%] tracking-[-0.025em] uppercase whitespace-nowrap text-center">
              GIRLS.POWERED.BY NAZR.
            </h2>
          </div>

          {/* Bottom Bar: Links, Social Icons, Visit Website Button */}
          <div className="w-full pt-8 border-t border-[#262626] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-6">
            {/* Legal Links: Centered on mobile, Left-aligned on desktop */}
            <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
              <Link href="/terms" className="font-[family-name:var(--font-inter)] text-xs text-[#FFF1EB]/80 hover:text-white transition-colors">
                Accessibility Statement
              </Link>
              <Link href="/girls-powered/terms&condition" className="font-[family-name:var(--font-inter)] text-xs text-[#FFF1EB]/80 hover:text-white transition-colors">
                Terms &amp; Conditions
              </Link>
              <Link href="/girls-powered/privacy-policy" className="font-[family-name:var(--font-inter)] text-xs text-[#FFF1EB]/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>

            {/* Social Icons: LinkedIn & Instagram */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/nazrco/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-white text-black hover:bg-[#FF0E97] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/nazr.360/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-white text-black hover:bg-[#FF0E97] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Visit Website Button: Centered on mobile, Right-aligned on desktop */}
            <div className="w-auto">
              <Link
                href="/"
                className="inline-block text-center bg-[#FF0E97] hover:bg-[#E00D86] text-black font-[family-name:var(--font-bebas)] text-[20px] md:text-[22px] px-8 py-2.5 tracking-wider uppercase transition-colors shadow-md"
              >
                VISIT WEBSITE
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
