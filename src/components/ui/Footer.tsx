"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-[#161616] text-[#FFF1EB] pt-[28px] pb-[40px] px-10 flex flex-col relative z-20">
      {/* Top section: Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 w-full max-w-[1205px] mx-auto">
        {/* Pages Column */}
        <div className="flex flex-col">
          <span className="text-[12px] md:text-[14px] font-['Switzer',_sans-serif] font-medium tracking-wider text-[#FFF1EB]/40 uppercase mb-4">
            ( Pages )
          </span>
          <div className="flex flex-col gap-1 md:gap-2">
            <Link href="/" className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[34px] lg:text-[38px] leading-none tracking-[-0.01em] hover:text-[#FF0E97] transition-colors">
              HOME
            </Link>
            <Link href="/shop" className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[34px] lg:text-[38px] leading-none tracking-[-0.01em] hover:text-[#FF0E97] transition-colors">
              SHOP
            </Link>
            <Link href="/nazrapp" className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[34px] lg:text-[38px] leading-none tracking-[-0.01em] hover:text-[#FF0E97] transition-colors">
              THE NAZR APP
            </Link>
            <Link href="/whynazrexists" className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[34px] lg:text-[38px] leading-none tracking-[-0.01em] hover:text-[#FF0E97] transition-colors">
              THE NAZR ECOSYSTEM
            </Link>
            <Link href="#" className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[34px] lg:text-[38px] leading-none tracking-[-0.01em] hover:text-[#FF0E97] transition-colors">
              LOGIN
            </Link>
          </div>
        </div>

        {/* Socials Column */}
        <div className="flex flex-col">
          <span className="text-[12px] md:text-[14px] font-['Switzer',_sans-serif] font-medium tracking-wider text-[#FFF1EB]/40 uppercase mb-4">
            ( Socials )
          </span>
          <div className="flex flex-col gap-1 md:gap-2">
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[34px] lg:text-[38px] leading-none tracking-[-0.01em] hover:text-[#FF0E97] transition-colors">
              LINKEDIN
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[34px] lg:text-[38px] leading-none tracking-[-0.01em] hover:text-[#FF0E97] transition-colors">
              INSTAGRAM
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[34px] lg:text-[38px] leading-none tracking-[-0.01em] hover:text-[#FF0E97] transition-colors">
              X/TWITTER
            </Link>
          </div>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col">
          <span className="text-[12px] md:text-[14px] font-['Switzer',_sans-serif] font-medium tracking-wider text-[#FFF1EB]/40 uppercase mb-4">
            ( Contact )
          </span>
          <div className="flex flex-col gap-1 md:gap-2">
            <a href="mailto:support@nazrco.in" className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[34px] lg:text-[38px] leading-none tracking-[-0.01em] hover:text-[#FF0E97] transition-colors">
              SUPPORT@NAZRCO.IN
            </a>
            <a href="tel:+917208940212" className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[34px] lg:text-[38px] leading-none tracking-[-0.01em] hover:text-[#FF0E97] transition-colors">
              +91-7208940212
            </a>
          </div>
        </div>
      </div>

      {/* Spacer matching Figma height exactly */}
      <div className="h-[50px] md:h-[116px] w-full" />

      {/* Bottom section: Brand & Logo */}
      <div className="w-full max-w-[1205px] mx-auto flex flex-col h-[180px] md:h-[382px] justify-between">
        <span className="text-[12px] md:text-[14px] font-['Switzer',_sans-serif] font-normal text-[#FFF1EB]/60 tracking-wider uppercase leading-none">
          NOT YOUR TYPICAL PLATFORM
        </span>

        {/* Large Logo */}
        <div className="relative w-full h-[140px] md:h-[342px] mt-4">
          <Image
            src="/images/footer.svg"
            alt="NAZR"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </footer>
  );
}
