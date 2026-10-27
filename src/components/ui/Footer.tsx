"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NazrMilaoSection } from "@/components/ui/NazrMilaoSection";

export function Footer() {
  const pathname = usePathname();
  const [contactInput, setContactInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInput.trim()) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setContactInput("");
    }, 3000);
  };

  if (
    pathname === "/girls-powered" ||
    pathname?.startsWith("/girls-powered") ||
    pathname === "/event" ||
    pathname === "/events" ||
    pathname?.startsWith("/fight-club") ||
    pathname?.startsWith("/fight-social")
  ) {
    return null;
  }

  const isShopPage = pathname === "/shop" || pathname?.startsWith("/shop");
  const isNazrAppPage = pathname === "/nazrapp" || pathname?.startsWith("/nazrapp");
  const hideNazrMilao = isShopPage || isNazrAppPage;

  return (
    <>
      {!hideNazrMilao && <NazrMilaoSection />}
      <footer
        className={`w-full bg-[#161616] text-[#f4f4f4] ${
          hideNazrMilao
            ? "pt-14 sm:pt-18 md:pt-24 mt-0"
            : "pt-20 sm:pt-28 md:pt-36 md:-mt-[26px] max-md:-mt-[9.71px]"
        } pb-6 md:pb-8 px-5 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-between relative z-20 overflow-visible md:overflow-hidden md:min-h-[max(700px,calc(100vh/var(--desktop-scale,1)))] md:h-auto transform-gpu`}
      >
        {/* Background Image: footer bg.webp with 60-65% transparency */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <Image
            unoptimized
            quality={100}
            src="/images/footer bg.webp"
            alt="Footer Background"
            fill
            className="object-cover object-center opacity-[0.35] pointer-events-none"
          />
        </div>

      <div className="relative z-10 w-full flex flex-col justify-between min-h-full max-w-[1440px] mx-auto">
        {/* Top Section: Left Headline & Newsletter + Right 4 Columns */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-14 lg:gap-16">
          {/* Left Column: Bold Headline & Email/WhatsApp Signup */}
          <div className="flex flex-col gap-6 sm:gap-7 w-full max-w-[480px]">
            <h2 className="font-[family-name:var(--font-bebas)] text-[44px] sm:text-[56px] md:text-[68px] lg:text-[76px] font-normal leading-[0.92] tracking-[-0.02em] text-[#f4f4f4] uppercase m-0">
              THE WORLD STARES.<br />
              STARE BACK.
            </h2>

            {/* Newsletter Pill Input */}
            <form
              onSubmit={handleJoin}
              className="relative flex items-center w-full max-w-[420px] bg-white rounded-full p-1.5 pl-4 sm:pl-5 shadow-lg transition-all focus-within:ring-2 focus-within:ring-white/40"
            >
              <input
                type="text"
                value={contactInput}
                onChange={(e) => setContactInput(e.target.value)}
                placeholder="Email or WhatsApp for drops and events"
                className="w-full bg-transparent text-[13px] sm:text-[14px] text-[#161616] placeholder:text-[#161616]/60 focus:outline-none pr-3 font-['Switzer',_sans-serif]"
                required
              />
              <button
                type="submit"
                className="shrink-0 bg-black text-white text-[13px] sm:text-[14px] font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer font-['Switzer',_sans-serif]"
              >
                {isSubmitted ? "Joined ✓" : "Join"}
              </button>
            </form>
          </div>

          {/* Right Section: 4 Nav Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 sm:gap-x-10 md:gap-x-12 lg:gap-14 gap-y-8 w-full lg:w-auto">
            {/* SHOP */}
            <div className="flex flex-col gap-2.5">
              <span className="font-[family-name:var(--font-bebas)] text-[18px] sm:text-[20px] md:text-[22px] tracking-wide text-[#f4f4f4] uppercase mb-1">
                SHOP
              </span>
              <Link href="/shop" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                On Me
              </Link>
              <Link href="/shop" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                Sip Check
              </Link>
              <Link href="/shop" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                Nazr 360° bundle
              </Link>
              <Link href="/shop" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                All tools
              </Link>
            </div>

            {/* NAZR */}
            <div className="flex flex-col gap-2.5">
              <span className="font-[family-name:var(--font-bebas)] text-[18px] sm:text-[20px] md:text-[22px] tracking-wide text-[#f4f4f4] uppercase mb-1">
                NAZR
              </span>
              <Link href="/" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                Homepage
              </Link>
              <Link href="/about" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                About us
              </Link>
              <Link href="/whynazrexists" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                Why NAZR
              </Link>
              <Link href="/nazrapp" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                Get the NAZR App
              </Link>
              <Link href="/shop" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                The Tools
              </Link>
              <Link href="/blog" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                Field Notes
              </Link>
            </div>

            {/* HELP */}
            <div className="flex flex-col gap-2.5">
              <span className="font-[family-name:var(--font-bebas)] text-[18px] sm:text-[20px] md:text-[22px] tracking-wide text-[#f4f4f4] uppercase mb-1">
                HELP
              </span>
              <Link href="/helpline" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                Helpline
              </Link>
              <Link href="/faq" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                FAQ
              </Link>
              <Link href="/support" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                Contact us
              </Link>
              <Link href="/shipping" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                Track my order
              </Link>
              <Link href="/shipping#shipping" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                Shipping
              </Link>
              <Link href="/shipping#returns-policy" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                Returns
              </Link>
            </div>

            {/* LEGAL */}
            <div className="flex flex-col gap-2.5">
              <span className="font-[family-name:var(--font-bebas)] text-[18px] sm:text-[20px] md:text-[22px] tracking-wide text-[#f4f4f4] uppercase mb-1">
                LEGAL
              </span>
              <Link href="/privacy-policy" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                Terms of Use
              </Link>
              <Link href="/privacy-policy#grievance-officer" className="font-['Switzer',_sans-serif] text-[14px] sm:text-[15px] text-[#f4f4f4]/75 hover:text-[#f4f4f4] transition-colors leading-[1.6]">
                Grievance Officer
              </Link>
            </div>
          </div>
        </div>

        {/* Dynamic Spacer */}
        <div className="h-[40px] sm:h-[60px] md:h-[80px] w-full shrink-0" />

        {/* Middle Section: Giant Owl Logo & NAZR Text */}
        <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-between shrink-0">
          {/* Large Logo - Mobile: Combined SVG */}
          <div className="relative md:hidden w-full h-[120px] sm:h-[150px] my-2 shrink-0 pointer-events-none">
            <Image
              unoptimized
              quality={100}
              src="/images/footer.svg"
              alt="NAZR"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* Large Logo - Desktop: Left Eye, Right NAZR Text */}
          <div className="hidden md:flex flex-row items-end justify-between w-full h-[220px] lg:h-[260px] my-2 shrink-0 pointer-events-none gap-8">
            {/* Left: Eye Image */}
            <div className="relative w-[38%] h-full">
              <Image
                unoptimized
                quality={100}
                src="/images/footer eye.svg"
                alt="NAZR Eye"
                fill
                className="object-contain object-left-bottom"
                priority
              />
            </div>
            {/* Right: NAZR Text Image */}
            <div className="relative w-[60%] h-full">
              <Image
                unoptimized
                quality={100}
                src="/images/nazr footer.svg"
                alt="NAZR Logo"
                fill
                className="object-contain object-right-bottom"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Address & Social Links */}
        <div className="w-full pt-4 md:pt-6 mt-4 border-t border-[#f4f4f4]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] sm:text-[13px] font-['Switzer',_sans-serif] text-[#f4f4f4]/70">
          <p className="m-0 leading-relaxed">
            © 2026 Lumina Hospitality Private Limited · Supreme Business Park, Hiranandani Gardens, Powai, Mumbai 400076
          </p>
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <a
              href="https://www.instagram.com/nazr.360/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4f4f4] transition-colors"
            >
              Instagram
            </a>
            <span className="text-[#f4f4f4]/40">·</span>
            <a
              href="https://www.linkedin.com/company/nazrco/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4f4f4] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[#f4f4f4]/40">·</span>
            <a
              href="https://www.youtube.com/@nazr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f4f4f4] transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
