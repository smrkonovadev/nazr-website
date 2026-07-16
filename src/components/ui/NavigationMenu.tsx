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
      if (windowWidth < 768) {
        setScale(windowWidth / 390);
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
      className={`fixed inset-0 w-full h-[100vh] bg-white z-0 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none transition-opacity duration-0 delay-700"}`}
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
        className="absolute top-1/2 right-0 origin-right"
        style={{
          width: typeof window !== 'undefined' && window.innerWidth < 768 ? '390px' : '1440px',
          height: typeof window !== 'undefined' && window.innerWidth < 768 ? '844px' : '900px', // iPhone 14 height
          transform: mounted ? `translateY(-50%) scale(${scale})` : 'translateY(-50%)'
        }}
      >


        {/* Main Navigation Links - Perfectly Vertically Centered */}
        <div className="absolute top-[40%] translate-y-[-50%] max-md:right-6 md:right-10 z-10">
          <div className="flex flex-col items-start max-md:w-[220px] md:w-[450px]">

            {links.map((link) => {
              const isActive = pathname === link.path;

              return (
                <Link key={link.name} href={link.path} className="w-full group focus:outline-none">
                  <div
                    className={`w-full max-md:px-4 md:px-6 max-md:py-1 md:py-2 max-md:mb-1 md:mb-2 transition-all border ${isActive
                        ? "bg-[#FF0E97] border-[#FF0E97] text-white"
                        : "border-transparent text-[#161616] hover:border-[#FF0E97]"
                      }`}
                  >
                    <span className="font-['Switzer',_sans-serif] max-md:text-[28px] md:text-[36px] leading-tight tracking-[-0.02em] font-normal">
                      {link.name}
                    </span>
                  </div>
                </Link>
              );
            })}

          </div>
        </div>

        {/* Footer Section - Anchored to the bottom */}
        <div className="absolute max-md:bottom-6 md:bottom-12 max-md:right-6 md:right-10 z-10">
          <div className="max-md:w-[220px] md:w-[450px] pt-8 border-t border-black/10 flex max-md:flex-col md:flex-row max-md:gap-8 md:gap-24">

            {/* Socials */}
            <div className="flex flex-col gap-3">
              <span className="text-[#161616]/50 font-['Switzer',_sans-serif] text-[14px] uppercase tracking-widest mb-1">
                Socials
              </span>
              <Link href="#" className="text-[#161616] hover:text-[#FF0E97] font-['Switzer',_sans-serif] text-[16px]">Instagram</Link>
              <Link href="#" className="text-[#161616] hover:text-[#FF0E97] font-['Switzer',_sans-serif] text-[16px]">LinkedIn</Link>
              <Link href="#" className="text-[#161616] hover:text-[#FF0E97] font-['Switzer',_sans-serif] text-[16px]">X/Twitter</Link>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-3">
              <span className="text-[#161616]/50 font-['Switzer',_sans-serif] text-[14px] uppercase tracking-widest mb-1">
                Quick Links
              </span>
              <Link href="#" className="text-[#161616] hover:text-[#FF0E97] font-['Switzer',_sans-serif] text-[16px] flex items-center gap-1">
                Privacy Policy <span className="text-[12px]">↗</span>
              </Link>
              <Link href="#" className="text-[#161616] hover:text-[#FF0E97] font-['Switzer',_sans-serif] text-[16px] flex items-center gap-1">
                Terms & Conditions <span className="text-[12px]">↗</span>
              </Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
