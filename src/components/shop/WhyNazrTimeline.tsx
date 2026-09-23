"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  tag: string;
  color: "pink" | "blue";
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    time: "8 AM",
    title: "THE COMMUTE",
    description: "Your bag is packed. Your safety is on it, not in it.",
    tag: "ON ME",
    color: "pink",
  },
  {
    time: "1 PM",
    title: "ON THE MOVE",
    description: "Wherever the day takes you, your people are one tap away.",
    tag: "NAZR APP",
    color: "blue",
  },
  {
    time: "9 PM",
    title: "THE NIGHT OUT",
    description: "Dance, chat, step away. Your drink stays sealed.",
    tag: "SIP CHECK",
    color: "pink",
  },
  {
    time: "1 AM",
    title: "THE RIDE HOME",
    description: "Your people know you got home, without you texting every five minutes.",
    tag: "SHIELD MODE",
    color: "blue",
  },
];

export function WhyNazrTimeline() {
  return (
    <section className="w-full bg-[#161616] text-[#f4f4f4] py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 flex justify-center select-none">
      <div className="w-full max-w-[1360px] flex flex-col lg:flex-row justify-between items-start lg:items-stretch gap-12 sm:gap-14 lg:gap-20">
        {/* Left Column: Narrative Statement */}
        <div className="w-full lg:w-[48%] flex flex-col justify-between self-stretch">
          <div className="flex flex-col">
            <span className="text-[#FF0E97] font-['Inter',_sans-serif] text-[13px] sm:text-[14px] font-bold uppercase tracking-widest mb-3">
              WHY NAZR
            </span>

            <h2 className="font-[family-name:var(--font-bebas)] text-[44px] sm:text-[54px] md:text-[64px] lg:text-[72px] font-normal leading-[0.92] tracking-[-0.02em] uppercase text-[#f4f4f4] mb-5">
              MOST SAFETY PRODUCTS<br />
              COVER ONE MOMENT.<br />
              <span className="text-[#FF0E97]">NAZR COVERS YOUR WHOLE DAY.</span>
            </h2>

            <p className="font-['Inter',_sans-serif] text-[16px] sm:text-[18px] leading-[150%] text-white/80 max-w-[500px] mb-8 font-normal">
              Tools you carry, an app that keeps your people close, and a community that shows up.
            </p>
          </div>

          {/* Bottom content - Desktop (aligned with THE RIDE HOME) */}
          <div className="hidden lg:flex flex-col mt-auto pt-1">
            <div className="w-full max-w-[500px] h-[1px] bg-white/15 mb-6" />

            <p className="font-['Inter',_sans-serif] text-[15px] leading-[150%] text-white/90 max-w-[440px] mb-7 font-normal">
              Plus a community that meets IRL, from self-defence nights to campus workshops.
            </p>

            <div className="flex items-center gap-3.5">
              <Link
                href="#on-me-spray"
                className="bg-[#E6007A] hover:bg-[#d0006e] text-white font-['Inter',_sans-serif] font-semibold text-[15px] px-7 py-3 rounded-full shadow-[0_10px_25px_-5px_rgba(230,0,122,0.5)] transition-all hover:scale-105 active:scale-95"
              >
                Shop the tools
              </Link>
              <Link
                href="/nazrapp"
                className="bg-transparent hover:bg-white/10 text-white border border-white/25 font-['Inter',_sans-serif] font-semibold text-[15px] px-7 py-3 rounded-full transition-all hover:scale-105 active:scale-95"
              >
                Get the app
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: 24-Hour Safety Journey Timeline */}
        <div className="w-full lg:w-[48%] flex flex-col relative pl-2 sm:pl-4">
          <div className="relative flex flex-col gap-9 sm:gap-10">
            {/* Connected Vertical Timeline Line */}
            <div className="absolute left-[5.5px] top-[12px] bottom-[12px] w-[1px] bg-white/20 z-0" />

            {TIMELINE_EVENTS.map((event, idx) => {
              const isPink = event.color === "pink";
              return (
                <div key={idx} className="relative z-10 flex items-start gap-4 sm:gap-5 group">
                  {/* Clean Solid Indicator Node centered with 24px time */}
                  <div
                    className={`w-[12px] h-[12px] rounded-full mt-[6px] shrink-0 ${
                      isPink ? "bg-[#E6007A]" : "bg-[#0084FF]"
                    }`}
                  />

                  {/* Content Block */}
                  <div className="flex flex-col">
                    {/* Time */}
                    <span className="font-[family-name:var(--font-bebas)] font-normal text-[24px] leading-[24px] tracking-[0.75px] text-[#A3A3A3] uppercase">
                      {event.time}
                    </span>

                    {/* Title */}
                    <h3 className="font-[family-name:var(--font-bebas)] font-normal text-[32px] leading-[34px] tracking-[0.9px] text-white uppercase mt-1 mb-2">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="font-['Inter',_sans-serif] font-normal text-[16px] leading-[24px] tracking-normal text-[#A3A3A3] max-w-[440px] m-0 mb-3">
                      {event.description}
                    </p>

                    {/* Pill Shape Button */}
                    <div className="flex items-center">
                      <span
                        className={`inline-flex items-center justify-center h-[24px] px-[14px] py-[4px] rounded-full ${
                          isPink ? "bg-[#E6007A]" : "bg-[#0084FF]"
                        }`}
                      >
                        <span className="font-['Inter',_sans-serif] font-semibold text-[12px] leading-[16px] tracking-[0.6px] text-white text-center uppercase">
                          {event.tag}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom content - Mobile (renders after timeline events) */}
          <div className="flex lg:hidden flex-col mt-12 pt-2">
            <div className="w-full max-w-[500px] h-[1px] bg-white/15 mb-6" />

            <p className="font-['Inter',_sans-serif] text-[15px] leading-[150%] text-white/90 max-w-[420px] mb-7 font-normal">
              Plus a community that meets IRL, from self-defence nights to campus workshops.
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="#on-me-spray"
                className="bg-[#E6007A] hover:bg-[#d0006e] text-white font-['Inter',_sans-serif] font-semibold text-[15px] px-7 py-3 rounded-full shadow-[0_10px_25px_-5px_rgba(230,0,122,0.5)] transition-all hover:scale-105 active:scale-95"
              >
                Shop the tools
              </Link>
              <Link
                href="/nazrapp"
                className="bg-transparent hover:bg-white/10 text-white border border-white/25 font-['Inter',_sans-serif] font-semibold text-[15px] px-7 py-3 rounded-full transition-all hover:scale-105 active:scale-95"
              >
                Get the app
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
