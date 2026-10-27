"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Mic, Lock, Trash2, Check } from "lucide-react";

interface PrivacyItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const privacyItems: PrivacyItem[] = [
  {
    icon: <MapPin className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-white" strokeWidth={2.2} />,
    title: "Location",
    description:
      "Shared only during SOS, or during Shield Mode if you turn it on. Never in the background otherwise.",
  },
  {
    icon: <Mic className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-white" strokeWidth={2.2} />,
    title: "Audio",
    description:
      "Recorded only while SOS is active, and kept for [about 2 years] so it's there if you need it.",
  },
  {
    icon: <Lock className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-white" strokeWidth={2.2} />,
    title: "Your Data",
    description:
      "Stored securely [in India], in line with India's data protection law (DPDP).",
  },
  {
    icon: <Trash2 className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-white" strokeWidth={2.2} />,
    title: "Delete Anytime",
    description:
      "Remove your contacts, recordings or your whole account [from Settings]. Your call.",
  },
];

const helplines = [
  {
    tag: "TOLL FREE",
    number: "112",
    label: "All emergencies",
  },
  {
    tag: "NATIONAL",
    number: "181",
    label: "Women helpline",
  },
  {
    tag: "IMMEDIATE",
    number: "100",
    label: "Police",
  },
  {
    tag: "MEDICAL",
    number: "108",
    label: "Ambulance",
  },
];

export function PrivacySection() {
  return (
    <section className="w-full bg-[#FFF1EB] pt-6 md:pt-10 lg:pt-12 pb-14 md:pb-20 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-full max-w-[1240px] flex flex-col items-center">
        {/* Eyebrow */}
        <span
          className="text-[#FF0E97] font-semibold text-xs md:text-sm tracking-[0.15em] uppercase mb-3"
          style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
        >
          PRIVACY
        </span>

        {/* Main Title */}
        <h2
          className="text-center uppercase leading-[92%] tracking-[-0.02em] mb-4"
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
            fontSize: "clamp(42px, 6vw, 84px)",
          }}
        >
          <span className="text-[#141416] block">YOUR SAFETY.</span>
          <span className="text-[#FF0E97] block">YOUR DATA. YOUR CALL.</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-[#52525B] text-center max-w-[560px] text-sm md:text-base leading-relaxed mb-12 md:mb-16"
          style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
        >
          Nazr only uses what it needs to get you help,
          <br className="hidden sm:inline" /> and only when you need it.
        </p>

        {/* 4 Cards Grid (Desktop only - md and above) */}
        <div className="hidden md:grid w-full grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-10 md:mb-12">
          {privacyItems.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[22px] p-6 sm:p-7 flex flex-col items-start shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-black/[0.04] transition-all duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:-translate-y-1"
            >
              {/* Pink Circle Icon Badge */}
              <div className="w-11 h-11 rounded-full bg-[#FF0E97] flex items-center justify-center shrink-0 mb-6 shadow-[0_4px_12px_rgba(255,14,151,0.25)]">
                {card.icon}
              </div>

              {/* Title */}
              <h3
                className="text-[#141416] uppercase text-2xl md:text-[26px] leading-tight mb-3"
                style={{
                  fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  letterSpacing: "0.5px",
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="text-[#52525B] text-[13px] sm:text-sm leading-[1.55]"
                style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Privacy Principles List (Mobile only - below md) */}
        <div className="md:hidden w-full border-t border-[#141416]/25 mb-10">
          {privacyItems.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[44px_1fr] gap-x-3.5 gap-y-1.5 items-start py-4.5 border-b border-[#141416]/25 px-1"
            >
              {/* Pink Logo Badge */}
              <div className="col-start-1 row-start-1 row-span-2 w-9 h-9 rounded-full bg-[#FF0E97] flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(255,14,151,0.25)] select-none mt-0.5">
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="col-start-2 row-start-1 font-bold text-[#141416] text-[18px] sm:text-[20px] leading-tight m-0"
                style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="col-start-2 row-start-2 text-[#3F3F46] text-[13.5px] sm:text-[14px] leading-relaxed m-0"
                style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Read our full Privacy Policy Link */}
        <Link
          href="/privacy-policy"
          className="text-[#141416] text-sm md:text-base font-semibold underline underline-offset-4 decoration-1 hover:text-[#FF0E97] transition-colors duration-200"
          style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
        >
          Read our full Privacy Policy
        </Link>

        {/* HELPLINE DIRECTORY Banner Card */}
        <div className="w-full bg-[#111113] rounded-[24px] overflow-hidden mt-12 md:mt-16 border border-white/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
          {/* Top Bar */}
          <div className="px-6 py-4 md:px-8 md:py-4.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#FF0E97]" />
              <span
                className="text-[#D4D4D8] font-medium text-xs md:text-[13px] tracking-[0.14em] uppercase"
                style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
              >
                HELPLINE DIRECTORY
              </span>
            </div>

            <div
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.12] text-xs text-[#A1A1AA]"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            >
              <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={2.5} />
              <span>Verified &amp; Operational 24/7</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/[0.08]" />

          {/* Body Content */}
          <div className="p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            {/* Left Headline */}
            <div className="flex flex-col items-start max-w-[480px]">
              <h3
                className="uppercase leading-[92%] tracking-[-0.02em] m-0"
                style={{
                  fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  fontSize: "clamp(38px, 4.5vw, 64px)",
                }}
              >
                <span className="text-white block">THE RIGHT NUMBER,</span>
                <span className="text-[#9E9E9E] block">ALWAYS ON HAND.</span>
              </h3>

              <p
                className="mt-4 md:mt-5 text-[#A1A1AA] text-sm md:text-[15px] leading-relaxed m-0"
                style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
              >
                Verified helplines, saved in the app.{" "}
                <a
                  href="https://apps.apple.com/in/app/nazr-women-safety-app/id6787188929"
                  onClick={(e) => {
                    if (typeof navigator !== "undefined" && /android/i.test(navigator.userAgent)) {
                      e.preventDefault();
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.nazr.app",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium underline underline-offset-4 hover:text-[#FF0E97] transition-colors cursor-pointer inline-block"
                >
                  [Tap to download]
                </a>
              </p>
            </div>

            {/* Right Helpline Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full lg:w-auto shrink-0">
              {helplines.map((h, i) => (
                <a
                  key={i}
                  href={`tel:${h.number}`}
                  className="bg-white rounded-[20px] py-4 px-3 sm:py-5 sm:px-4 flex flex-col items-center justify-between text-center min-w-[110px] sm:min-w-[124px] h-[142px] sm:h-[156px] transition-all duration-200 hover:scale-105 hover:shadow-xl no-underline cursor-pointer group"
                >
                  <span
                    className="text-[10px] sm:text-[11px] font-semibold text-[#8E8E93] tracking-[0.1em] uppercase"
                    style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
                  >
                    {h.tag}
                  </span>

                  <span
                    className="font-[family-name:var(--font-bebas)] text-[#FF0E97] text-[44px] sm:text-[52px] leading-none my-1 tracking-tight"
                    style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
                  >
                    {h.number}
                  </span>

                  <span
                    className="text-[11px] sm:text-xs text-[#141416] font-medium leading-tight"
                    style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
                  >
                    {h.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
