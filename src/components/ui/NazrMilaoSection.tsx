"use client";

import { useState } from "react";
import Link from "next/link";

export function NazrMilaoSection() {
  const [form, setForm] = useState({
    name: "",
    topic: "",
    message: "",
    contact: "",
  });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim()) return;

    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", topic: "", message: "", contact: "" });
    }, 4000);
  };

  return (
    <section className="w-full bg-[#161616] text-[#f4f4f4] pt-14 sm:pt-20 md:pt-24 pb-10 sm:pb-12 md:pb-14 px-5 sm:px-8 md:px-12 lg:px-16 relative z-30 max-md:rounded-b-[9.71px] md:rounded-b-[26px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col">
        {/* Title Header */}
        <div className="flex flex-col mb-10 sm:mb-12 md:mb-14">
          <h2
            className="font-[family-name:var(--font-bebas)] text-[46px] sm:text-[64px] md:text-[80px] font-normal leading-[90%] tracking-[-0.03em] uppercase m-0"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              fontWeight: 400,
              lineHeight: "90%",
              letterSpacing: "-0.03em",
            }}
          >
            <span className="text-[#FF0E97]">NAZR</span> MILAO //{" "}
            <span className="text-[#FF0E97]">BAAT</span> UTHAO
          </h2>
          <p
            className="font-['Inter',_sans-serif] text-[15px] sm:text-[17px] md:text-[18px] text-[#f4f4f4]/90 font-normal leading-[140%] tracking-[-0.03em] mt-3 sm:mt-4 mb-0"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "140%",
              letterSpacing: "-0.03em",
            }}
          >
            Say it like you mean it. We&apos;re listening!
          </p>
        </div>

        {/* Conversational Interactive Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8 md:gap-9 w-full">
          {/* Line 1: Hi Nazr, I'm [Your name] */}
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span
              className="shrink-0 text-white font-medium text-[24px] sm:text-[36px] md:text-[46px] lg:text-[54px] leading-[140%] tracking-[-0.03em] font-['Inter',_sans-serif]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                lineHeight: "140%",
                letterSpacing: "-0.03em",
              }}
            >
              Hi Nazr, I’m
            </span>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="w-full sm:w-[344px] bg-transparent border-b-[2px] border-[#FF0E97] text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF0E97] text-[18px] sm:text-[26px] md:text-[32px] lg:text-[38px] font-medium leading-[140%] tracking-[-0.03em] font-['Inter',_sans-serif] px-1 pb-1 transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                lineHeight: "140%",
                letterSpacing: "-0.03em",
              }}
              required
            />
          </div>

          {/* Line 2: I'd like to talk about [a product or order] */}
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span
              className="shrink-0 text-white font-medium text-[24px] sm:text-[36px] md:text-[46px] lg:text-[54px] leading-[140%] tracking-[-0.03em] font-['Inter',_sans-serif]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                lineHeight: "140%",
                letterSpacing: "-0.03em",
              }}
            >
              I’d like to talk about
            </span>
            <input
              type="text"
              value={form.topic}
              onChange={(e) => setForm({ ...form, topic: e.target.value })}
              placeholder="a product or order"
              className="w-full sm:w-[360px] bg-transparent border-b-[2px] border-white text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF0E97] text-[18px] sm:text-[26px] md:text-[32px] lg:text-[38px] font-medium leading-[140%] tracking-[-0.03em] font-['Inter',_sans-serif] px-1 pb-1 transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                lineHeight: "140%",
                letterSpacing: "-0.03em",
              }}
            />
          </div>

          {/* Line 3: Here's what's up: [Tell us in a line or two] */}
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span
              className="shrink-0 text-white font-medium text-[24px] sm:text-[36px] md:text-[46px] lg:text-[54px] leading-[140%] tracking-[-0.03em] font-['Inter',_sans-serif]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                lineHeight: "140%",
                letterSpacing: "-0.03em",
              }}
            >
              Here’s what’s up:
            </span>
            <input
              type="text"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell us in a line or two"
              className="w-full sm:w-[420px] bg-transparent border-b-[2px] border-white text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF0E97] text-[18px] sm:text-[26px] md:text-[32px] lg:text-[38px] font-medium leading-[140%] tracking-[-0.03em] font-['Inter',_sans-serif] px-1 pb-1 transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                lineHeight: "140%",
                letterSpacing: "-0.03em",
              }}
            />
          </div>

          {/* Line 4: Reach me at [Email or WhatsApp] */}
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span
              className="shrink-0 text-white font-medium text-[24px] sm:text-[36px] md:text-[46px] lg:text-[54px] leading-[140%] tracking-[-0.03em] font-['Inter',_sans-serif]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                lineHeight: "140%",
                letterSpacing: "-0.03em",
              }}
            >
              Reach me at
            </span>
            <input
              type="text"
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
              placeholder="Email or WhatsApp"
              className="w-full sm:w-[347px] bg-transparent border-b-[2px] border-white text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF0E97] text-[18px] sm:text-[26px] md:text-[32px] lg:text-[38px] font-medium leading-[140%] tracking-[-0.03em] font-['Inter',_sans-serif] px-1 pb-1 transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                lineHeight: "140%",
                letterSpacing: "-0.03em",
              }}
              required
            />
          </div>

          {/* Action Row & Direct Contact Links */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-6 sm:mt-8 pt-4">
            {/* Left: Button & Disclaimer */}
            <div className="flex flex-col items-start gap-3">
              <button
                type="submit"
                className="bg-[#FF0E97] hover:bg-[#E00A85] text-white font-[family-name:var(--font-roboto)] font-normal text-[16px] leading-[150%] tracking-[0px] px-7 sm:px-8 py-2.5 sm:py-3 rounded-[4px] cursor-pointer transition-all active:scale-[0.98] shadow-sm"
              >
                {status === "sent" ? "Sent ✓" : "Send it"}
              </button>
              <p className="m-0 text-[13px] sm:text-[14px] text-white/50 font-['Inter',_sans-serif]">
                By sending this you agree to our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-white/70 hover:text-white underline transition-colors"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>

            {/* Right: Direct Contact Info (Full width with right-aligned values on mobile, left-aligned on desktop) */}
            <div className="w-full md:w-auto grid grid-cols-[auto_1fr] md:grid-cols-[105px_1fr] gap-x-4 md:gap-x-3 gap-y-2.5 md:gap-y-2 text-[13px] sm:text-[14px] font-['Inter',_sans-serif] self-start md:self-end">
              <span className="text-left text-[#FF0E97] font-semibold uppercase tracking-wider text-[12px] sm:text-[13px]">
                EMAIL
              </span>
              <a
                href="mailto:support@nazrco.in"
                className="text-right md:text-left text-white/75 hover:text-white transition-colors"
              >
                support@nazrco.in
              </a>

              <span className="text-left text-[#FF0E97] font-semibold uppercase tracking-wider text-[12px] sm:text-[13px]">
                WHATSAPP
              </span>
              <a
                href="https://wa.me/917208940212"
                target="_blank"
                rel="noopener noreferrer"
                className="text-right md:text-left text-white/75 hover:text-white transition-colors"
              >
                +91-7208940212
              </a>

              <span className="text-left text-[#FF0E97] font-semibold uppercase tracking-wider text-[12px] sm:text-[13px]">
                INSTAGRAM
              </span>
              <a
                href="https://www.instagram.com/nazr.360/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-right md:text-left text-white/75 hover:text-white transition-colors"
              >
                @nazr.360
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
