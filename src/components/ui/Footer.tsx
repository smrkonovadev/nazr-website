"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    pages: true,
    socials: true,
    contact: true,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `font-[family-name:var(--font-bebas)] text-[18px] md:text-[32px] font-normal leading-[100%] tracking-[-0.02em] transition-colors ${
      isActive ? "text-[#FFF1EB]" : "text-[#FFF1EB]/40 hover:text-[#FFF1EB]"
    }`;
  };

  return (
    <footer className="w-full bg-[#161616] text-[#FFF1EB] pt-[30px] md:pt-[40px] pb-[20px] md:pb-[30px] px-4 sm:px-6 md:px-[30px] flex flex-col justify-between relative z-20 overflow-hidden md:min-h-[calc(100vh/var(--desktop-scale,1))] md:h-[calc(100vh/var(--desktop-scale,1))] transform-gpu">
      {/* Background Video with Hardware Acceleration for Mobile & Desktop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transform-gpu">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center opacity-75 mix-blend-normal pointer-events-none transform-gpu"
          style={{
            transform: "translateZ(0)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          <source src="/images/Footer.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-between h-full max-w-[1440px] mx-auto">
        {/* Top section: 2-Column Grid on Mobile, 4-Column Grid on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-8 w-full max-w-[1440px] mx-auto">
          {/* Pages Column */}
          <div className="flex flex-col col-span-2 md:col-span-2">
            <button
              onClick={() => toggleSection("pages")}
              className="flex items-center gap-1.5 mb-2 md:mb-4 w-fit cursor-pointer text-left focus:outline-none group"
              aria-expanded={openSections.pages}
            >
              <span className="font-[family-name:var(--font-bebas)] font-normal text-[16px] md:text-[21px] leading-[120%] tracking-[-0.02em] text-[#FFF1EB] uppercase group-hover:text-[#FFF1EB]/80 transition-colors">
                [ PAGES ]
              </span>
              <svg
                className={`w-3.5 h-3.5 md:w-4 md:h-4 text-[#FFF1EB] stroke-[2.5] transition-transform duration-300 ${
                  openSections.pages ? "rotate-0" : "-rotate-90"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openSections.pages
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 md:gap-x-8 gap-y-1.5 md:gap-y-2">
                <div className="flex flex-col gap-1 md:gap-2">
                  <Link href="/" className={getLinkClass("/")}>
                    HOME
                  </Link>
                  <Link href="/about" className={getLinkClass("/about")}>
                    ABOUT
                  </Link>
                  <Link href="/whynazrexists" className={`${getLinkClass("/whynazrexists")} uppercase`}>
                    WHY NAZR
                  </Link>
                  <Link href="/shop" className={getLinkClass("/shop")}>
                    SHOP
                  </Link>
                  <Link href="/nazrapp" className={`${getLinkClass("/nazrapp")} uppercase`}>
                    NAZR APP
                  </Link>
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <Link href="/helpline" className={getLinkClass("/helpline")}>
                    HELPLINE
                  </Link>
                  <Link href="/support" className={getLinkClass("/support")}>
                    SUPPORT
                  </Link>
                  <Link href="/blog" className={getLinkClass("/blog")}>
                    BLOG
                  </Link>
                  <Link href="#" className={getLinkClass("#")}>
                    LOGIN
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Socials Column */}
          <div className="flex flex-col col-span-1 md:order-2">
            <button
              onClick={() => toggleSection("socials")}
              className="flex items-center gap-1.5 mb-2 md:mb-4 w-fit cursor-pointer text-left focus:outline-none group"
              aria-expanded={openSections.socials}
            >
              <span className="font-[family-name:var(--font-bebas)] font-normal text-[16px] md:text-[21px] leading-[120%] tracking-[-0.02em] text-[#FFF1EB] uppercase group-hover:text-[#FFF1EB]/80 transition-colors">
                [ SOCIALS ]
              </span>
              <svg
                className={`w-3.5 h-3.5 md:w-4 md:h-4 text-[#FFF1EB] stroke-[2.5] transition-transform duration-300 ${
                  openSections.socials ? "rotate-0" : "-rotate-90"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openSections.socials
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden pointer-events-none"
              }`}
            >
              <div className="flex flex-col gap-1 md:gap-2">
                <a
                  href="https://www.linkedin.com/company/nazrco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-bebas)] text-[18px] md:text-[32px] font-normal leading-[100%] tracking-[-0.02em] text-[#FFF1EB]/40 hover:text-[#FFF1EB] transition-colors"
                >
                  LINKEDIN
                </a>
                <a
                  href="https://www.instagram.com/nazr.360/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-bebas)] text-[18px] md:text-[32px] font-normal leading-[100%] tracking-[-0.02em] text-[#FFF1EB]/40 hover:text-[#FFF1EB] transition-colors"
                >
                  INSTAGRAM
                </a>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-bebas)] text-[18px] md:text-[32px] font-normal leading-[100%] tracking-[-0.02em] text-[#FFF1EB]/40 hover:text-[#FFF1EB] transition-colors"
                >
                  X/TWITTER
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col col-span-1 md:order-3">
            <button
              onClick={() => toggleSection("contact")}
              className="flex items-center gap-1.5 mb-2 md:mb-4 w-fit cursor-pointer text-left focus:outline-none group"
              aria-expanded={openSections.contact}
            >
              <span className="font-[family-name:var(--font-bebas)] font-normal text-[16px] md:text-[21px] leading-[120%] tracking-[-0.02em] text-[#FFF1EB] uppercase group-hover:text-[#FFF1EB]/80 transition-colors">
                [ CONTACT ]
              </span>
              <svg
                className={`w-3.5 h-3.5 md:w-4 md:h-4 text-[#FFF1EB] stroke-[2.5] transition-transform duration-300 ${
                  openSections.contact ? "rotate-0" : "-rotate-90"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                openSections.contact
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden pointer-events-none"
              }`}
            >
              <div className="flex flex-col gap-1 md:gap-2">
                <a
                  href="mailto:support@nazrco.in"
                  className="font-[family-name:var(--font-bebas)] text-[13px] sm:text-[18px] md:text-[32px] font-normal leading-[100%] tracking-[-0.02em] text-[#FFF1EB]/40 hover:text-[#FFF1EB] transition-colors break-all"
                >
                  SUPPORT@NAZRCO.IN
                </a>
                <a
                  href="tel:+917208940212"
                  className="font-[family-name:var(--font-bebas)] text-[16px] sm:text-[18px] md:text-[32px] font-normal leading-[100%] tracking-[-0.02em] text-[#FFF1EB]/40 hover:text-[#FFF1EB] transition-colors"
                >
                  +91-7208940212
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer matching Figma height */}
        <div className="h-[20px] sm:h-[30px] md:h-[30px] w-full shrink-0 flex-1" />

        {/* Bottom section: Brand & Logo */}
        <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-between shrink-0">
          <span className="text-[9px] sm:text-[11px] md:text-[14px] font-['Switzer',_sans-serif] font-normal text-[#FFF1EB]/80 tracking-wider uppercase leading-none mb-2">
            THE WORLD STARES, STARE BACK
          </span>

          {/* Large Logo */}
          <div className="relative w-full h-[90px] sm:h-[140px] md:h-[260px] lg:h-[280px] mt-2 shrink-0 pointer-events-none">
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

          {/* Ownership & Copyright Bar */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between mt-4 gap-3 text-[11px] md:text-[13px] font-['Switzer',_sans-serif] text-[#FFF1EB]/70 border-t border-[#FFF1EB]/10 pt-4">
            <p className="m-0 text-center md:text-left leading-relaxed">
              NAZR™ is owned and operated by Lumina Hospitality Private Limited
            </p>
            <p className="m-0 text-center text-[#FFF1EB]/70">
              Developed by{" "}
              <a
                href="https://www.smrkonova.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFF1EB] underline transition-colors"
              >
                Smrkonova
              </a>{" "}
              • Designed by{" "}
              <a
                href="https://www.momm.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FFF1EB] underline transition-colors"
              >
                MOMM
              </a>
            </p>
            <p className="m-0 text-center md:text-right shrink-0">
              © {new Date().getFullYear()} NAZR. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
