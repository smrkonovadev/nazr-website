"use client";

import { useState } from "react";
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

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.704 0-1.282.167-1.621.472-.34.306-.47.854-.47 1.802v1.708h3.813l-.539 3.667h-3.274v7.98H9.1z"/>
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function CloseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function CheckCircleIcon({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CalendarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function ClockIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function MapPinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export function GirlsPoweredEvent() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("11:00 AM - 12:30 PM");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const slots = [
    { time: "11:00 AM - 12:30 PM", label: "Slot 01: Morning Power Session" },
    { time: "01:00 PM - 02:30 PM", label: "Slot 02: Afternoon Rhythm & Flow" },
    { time: "03:30 PM - 05:00 PM", label: "Slot 03: Sunset Ring & Community" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

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
                <div className="bg-[#161616] text-[#FFF1EB] px-5 py-2.5 rounded-[2px] font-[family-name:var(--font-mono)] text-xs md:text-sm tracking-wider uppercase shadow-md flex items-center justify-center">
                  27.09.2026
                </div>
                <div className="bg-[#161616] text-[#FFF1EB] px-5 py-2.5 rounded-[2px] font-[family-name:var(--font-inter)] text-xs md:text-sm tracking-wide shadow-md flex items-center justify-center">
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
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="h-[48px] px-8 bg-[#161616] text-[#FFF1EB] hover:bg-black hover:scale-105 active:scale-95 font-[family-name:var(--font-inter)] font-semibold text-[15px] flex items-center justify-center rounded-[6px] shadow-2xl tracking-wide uppercase transition-all duration-200 cursor-pointer text-center"
                >
                  Book Your Slot Now
                </button>
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
              <div className="bg-[#161616] text-[#FFF1EB] px-4 py-2 rounded-[2px] font-[family-name:var(--font-mono)] text-xs tracking-wider uppercase shadow-md">
                27.09.2026
              </div>
              <div className="bg-[#161616] text-[#FFF1EB] px-4 py-2 rounded-[2px] font-[family-name:var(--font-inter)] text-xs tracking-wide shadow-md">
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
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-[82%] max-w-[280px] h-[46px] bg-[#161616] text-[#FFF1EB] hover:bg-black font-[family-name:var(--font-inter)] font-medium text-sm flex items-center justify-center px-4 rounded-[2px] shadow-2xl tracking-normal transition-all duration-200 cursor-pointer text-center"
            >
              Book Your Slot Now
            </button>
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
            <div className="w-full max-w-[358px] md:max-w-none md:w-1/2 mx-auto flex flex-col justify-between text-left">
              <div>
                <span className="font-[family-name:var(--font-inter)] text-xs md:text-sm text-white uppercase tracking-[0.25em] font-medium">
                  DRESS CODE
                </span>
                <h2 className="font-[family-name:var(--font-bebas)] text-white text-[40px] md:text-[86px] leading-[100%] md:leading-[90%] tracking-normal md:tracking-[-0.02em] uppercase mt-2 mb-6 md:mb-8">
                  READY TO MOVE
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-4">
                  <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] text-white leading-[21.9px]">
                    Wear something you feel<br className="block md:hidden" /> comfortable training in,<br className="block md:hidden" /> activewear, sneakers, whatever<br className="block md:hidden" /> lets you move freely.
                  </p>
                  <p className="font-[family-name:var(--font-inter)] font-normal text-[16px] text-white leading-[21.9px]">
                    We&apos;ll bring the gloves, coaches<br className="block md:hidden" /> and energy. You just bring<br className="block md:hidden" /> yourself.
                  </p>
                </div>
              </div>

              {/* Big Pink CTA Button */}
              <div className="mt-8 md:mt-12 w-full">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full h-[48px] bg-[#FF0E97] hover:bg-[#E00D86] active:scale-[0.99] text-white font-[family-name:var(--font-bebas)] text-[22px] md:text-[24px] tracking-wide flex items-center justify-center rounded-[6px] uppercase transition-all duration-200 shadow-xl cursor-pointer"
                >
                  BOOK YOUR SLOT NOW
                </button>
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
              <Link href="/terms" className="font-[family-name:var(--font-inter)] text-xs text-[#FFF1EB]/80 hover:text-white transition-colors">
                Terms &amp; Conditions
              </Link>
              <Link href="/privacy-policy" className="font-[family-name:var(--font-inter)] text-xs text-[#FFF1EB]/80 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>

            {/* Social Icons: X, Instagram, Facebook */}
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/nazr_360"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-white text-black hover:bg-[#FF0E97] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <TwitterIcon className="w-4 h-4" />
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
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 md:w-9 md:h-9 rounded-full bg-white text-black hover:bg-[#FF0E97] hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Visit Website Button: Centered on mobile, Right-aligned on desktop */}
            <div className="w-auto">
              <Link
                href="/"
                className="inline-block text-center bg-[#FF0E97] hover:bg-[#E00D86] text-black font-[family-name:var(--font-bebas)] text-[20px] md:text-[22px] px-8 py-2.5 rounded-[4px] tracking-wider uppercase transition-colors shadow-md"
              >
                VISIT WEBSITE
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          SLOT BOOKING MODAL
          ========================================================================= */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-[500px] bg-[#1a1a1a] border border-white/20 rounded-[4px] p-6 md:p-8 text-white shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => {
                setIsBookingOpen(false);
                setIsSubmitted(false);
              }}
              className="absolute top-4 right-4 text-white/60 hover:text-white p-1 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <CloseIcon className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <div>
                <span className="text-[#FF0E97] font-[family-name:var(--font-bebas)] text-[20px] tracking-wider uppercase">
                  NAZR SUNDAY SPECIAL
                </span>
                <h3 className="font-[family-name:var(--font-bebas)] text-[34px] md:text-[40px] leading-none text-white mt-1">
                  RESERVE YOUR SPOT
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-xs text-[#FFF1EB]/70 mt-1">
                  Sunday, Sep 27th 2026 • Delhi
                </p>

                {/* Event Highlights Badge */}
                <div className="grid grid-cols-3 gap-2 my-4 py-2 border-y border-white/10 text-center">
                  <div className="flex flex-col items-center">
                    <CalendarIcon className="w-4 h-4 text-[#FF0E97] mb-1" />
                    <span className="text-[11px] text-[#FFF1EB]/70">Sep 27, 2026</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ClockIcon className="w-4 h-4 text-[#FF0E97] mb-1" />
                    <span className="text-[11px] text-[#FFF1EB]/70">Morning to Eve</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPinIcon className="w-4 h-4 text-[#FF0E97] mb-1" />
                    <span className="text-[11px] text-[#FFF1EB]/70">Vasant Kunj</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#888888] font-medium mb-1.5">
                      Select Your Time Slot
                    </label>
                    <div className="space-y-2">
                      {slots.map((s) => (
                        <label
                          key={s.time}
                          className={`flex items-center justify-between p-2.5 rounded-[4px] border cursor-pointer transition-all ${
                            selectedSlot === s.time
                              ? "border-[#FF0E97] bg-[#FF0E97]/10 text-white"
                              : "border-white/15 bg-white/5 text-[#FFF1EB]/75 hover:border-white/30"
                          }`}
                        >
                          <span className="font-[family-name:var(--font-inter)] text-xs md:text-sm font-medium">
                            {s.label}
                          </span>
                          <input
                            type="radio"
                            name="slot"
                            value={s.time}
                            checked={selectedSlot === s.time}
                            onChange={(e) => setSelectedSlot(e.target.value)}
                            className="accent-[#FF0E97]"
                          />
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#888888] font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#111111] border border-white/20 focus:border-[#FF0E97] px-3.5 py-2.5 rounded-[4px] text-sm text-white placeholder-white/40 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#888888] font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#111111] border border-white/20 focus:border-[#FF0E97] px-3.5 py-2.5 rounded-[4px] text-sm text-white placeholder-white/40 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#888888] font-medium mb-1">
                      Phone Number (WhatsApp updates)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#111111] border border-white/20 focus:border-[#FF0E97] px-3.5 py-2.5 rounded-[4px] text-sm text-white placeholder-white/40 outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FF0E97] hover:bg-[#E00D86] text-white font-[family-name:var(--font-bebas)] text-[24px] py-3 tracking-wider uppercase rounded-[6px] transition-colors cursor-pointer mt-4"
                  >
                    CONFIRM &amp; BOOK SLOT
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center flex flex-col items-center">
                <CheckCircleIcon className="w-14 h-14 text-[#FF0E97] mb-3 animate-bounce" />
                <h3 className="font-[family-name:var(--font-bebas)] text-[36px] text-white leading-tight">
                  YOU&apos;RE IN!
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-sm text-[#FFF1EB]/80 mt-2 max-w-[340px]">
                  Thanks <span className="text-white font-semibold">{formData.name}</span>! Your slot for{" "}
                  <span className="text-[#FF0E97] font-semibold">{selectedSlot}</span> on Sep 27th 2026 has been reserved.
                </p>
                <p className="font-[family-name:var(--font-inter)] text-xs text-[#FFF1EB]/50 mt-4">
                  Check your inbox ({formData.email}) for your entry QR pass and prep guide.
                </p>
                <button
                  onClick={() => {
                    setIsBookingOpen(false);
                    setIsSubmitted(false);
                  }}
                  className="mt-6 bg-white/10 hover:bg-white/20 text-white font-[family-name:var(--font-inter)] text-xs font-semibold px-6 py-2.5 rounded-[4px] uppercase tracking-wider transition-colors cursor-pointer"
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
