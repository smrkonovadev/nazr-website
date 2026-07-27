"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavigation } from "@/context/NavigationContext";

export function NavigationMenu() {
  const { isMenuOpen, setIsMenuOpen } = useNavigation();
  const pathname = usePathname();
  const [scale, setScale] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateScale = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      if (windowWidth < 768) {
        // Compute width and height scale, capped so it never overflows screen height on mobile
        const scaleW = windowWidth / 390;
        const scaleH = windowHeight / 667;
        setScale(Math.min(scaleW, scaleH, 1));
      } else {
        setScale(windowWidth < 1440 ? windowWidth / 1440 : 1);
      }
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // Close the menu automatically when navigating to a new page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, setIsMenuOpen]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Why Nazr", path: "/whynazrexists" },
    { name: "Shop", path: "/shop" },
    { name: "Nazr App", path: "/nazrapp" },
    { name: "Helpline", path: "/helpline" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <div
      className={`fixed inset-0 w-full h-[100vh] bg-[#F1E4DE] z-0 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none transition-opacity duration-0 delay-700"}`}
    >
      {/* Top right close button - Unscaled, perfectly matches Header Menu button position */}
      <div className="absolute max-md:top-[12px] md:top-[32px] right-6 md:right-12 z-50">
        <button
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center justify-center md:justify-between transition-colors rounded-[4px] px-[10px] py-[10px] md:px-[16px] md:py-[16px] w-auto h-auto md:w-[118px] md:h-[52px] gap-[12px] text-[#161616] hover:opacity-70 font-['Switzer',_sans-serif] text-[20px] leading-[100%] tracking-[-0.04em]"
        >
          Close
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div
        className="absolute top-1/2 right-0 origin-right w-[1440px] max-md:w-[390px]"
        style={{
          height: '100%',
          transform: mounted ? `translateY(-50%) scale(${scale})` : 'translateY(-50%)'
        }}
      >


        {/* Single right-aligned flex container that holds both links and footer to prevent overlapping */}
        <div className="absolute top-0 bottom-0 right-6 md:right-10 flex flex-col max-md:justify-start max-md:gap-4 md:justify-between pt-14 pb-6 md:pt-20 md:pb-6 max-md:w-[220px] md:w-[450px] z-10 min-h-0 overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

          {/* Main Navigation Links */}
          <div className="flex flex-col items-start w-full max-md:my-0 md:my-auto max-md:gap-0 md:gap-1">

            {links.map((link) => {
              const isActive = pathname === link.path;

              return (
                <Link key={link.name} href={link.path} className="w-full group focus:outline-none flex-shrink-0">
                  <div
                    className={`w-full max-md:px-3 md:px-6 max-md:py-0.5 md:py-1.5 transition-all border rounded-[4px] ${isActive
                      ? "bg-[#FF0E97] border-[#FF0E97] text-white"
                      : "border-transparent text-[#161616] hover:border-[#FF0E97]"
                      }`}
                  >
                    <span className="font-[family-name:var(--font-bebas)] max-md:text-[28px] md:text-[46px] leading-[0.95] tracking-[-0.01em] uppercase font-normal">
                      {link.name}
                    </span>
                  </div>
                </Link>
              );
            })}

          </div>

          {/* Footer Section */}
          <div className="w-full pt-3 md:pt-8 border-t border-black/10 flex flex-col gap-3 md:flex-row md:justify-between md:gap-0 flex-shrink-0">

            {/* Socials */}
            <div className="flex flex-col gap-1 md:gap-3">
              <span className="text-[#161616]/50 font-['Switzer',_sans-serif] text-[13px] md:text-[14px] uppercase tracking-widest mb-0.5 md:mb-1">
                Socials
              </span>
              <a href="https://www.instagram.com/nazr.360/" target="_blank" rel="noopener noreferrer" className="text-[#161616] hover:text-[#FF0E97] font-['Switzer',_sans-serif] text-[14px] md:text-[16px]">Instagram</a>
              <a href="https://www.linkedin.com/company/nazrco/" target="_blank" rel="noopener noreferrer" className="text-[#161616] hover:text-[#FF0E97] font-['Switzer',_sans-serif] text-[14px] md:text-[16px]">LinkedIn</a>
              <Link href="#" className="text-[#161616] hover:text-[#FF0E97] font-['Switzer',_sans-serif] text-[14px] md:text-[16px]">X/Twitter</Link>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-1 md:gap-3">
              <span className="text-[#161616]/50 font-['Switzer',_sans-serif] text-[13px] md:text-[14px] uppercase tracking-widest mb-0.5 md:mb-1">
                Quick Links
              </span>
              <Link href="/privacy-policy" className="text-[#161616] hover:text-[#FF0E97] font-['Switzer',_sans-serif] text-[14px] md:text-[16px] flex items-center gap-1">
                Privacy Policy <span className="text-[11px] md:text-[12px]">↗</span>
              </Link>
              <Link href="/terms" className="text-[#161616] hover:text-[#FF0E97] font-['Switzer',_sans-serif] text-[14px] md:text-[16px] flex items-center gap-1">
                Terms & Conditions <span className="text-[11px] md:text-[12px]">↗</span>
              </Link>
              <Link href="/shipping" className="text-[#161616] hover:text-[#FF0E97] font-['Switzer',_sans-serif] text-[14px] md:text-[16px] flex items-center gap-1">
                Shipping Policy <span className="text-[11px] md:text-[12px]">↗</span>
              </Link>
              <Link href="/product-liability" className="text-[#161616] hover:text-[#FF0E97] font-['Switzer',_sans-serif] text-[14px] md:text-[16px] flex items-center gap-1">
                Product Liability <span className="text-[11px] md:text-[12px]">↗</span>
              </Link>
              <Link href="/delete-your-account" className="text-[#161616] hover:text-[#FF0E97] font-['Switzer',_sans-serif] text-[14px] md:text-[16px] flex items-center gap-1">
                Delete Account <span className="text-[11px] md:text-[12px]">↗</span>
              </Link>
              <Link href="/faq" className="text-[#161616] hover:text-[#FF0E97] font-['Switzer',_sans-serif] text-[14px] md:text-[16px]">
                FAQ
              </Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
