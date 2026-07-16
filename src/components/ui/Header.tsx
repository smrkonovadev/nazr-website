"use client";

import { useNavigation } from "@/context/NavigationContext";

interface HeaderProps {
  variant?: "dark" | "transparent";
}

export function Header({ variant = "dark" }: HeaderProps) {
  const { setIsMenuOpen } = useNavigation();
  const isTransparent = variant === "transparent";

  const headerBgClass = isTransparent ? "bg-transparent" : "bg-[#161616]";
  const logoTextColor = isTransparent ? "text-white" : "text-[#FF0E97]";

  const menuBtnBg = isTransparent ? "bg-white hover:bg-white/90" : "bg-[#FF0E97] hover:bg-[#FF0E97]/90";
  const menuTextColor = isTransparent ? "#161616" : "#FFF1EB";

  return (
    <header className={`w-full ${headerBgClass} flex justify-center relative z-[60]`}>
      <div className={`flex w-full ${headerBgClass} pt-[12px] md:pt-[32px] max-md:pb-0 md:pb-[68px] px-6 md:px-10 lg:px-12`}>
        {/* Inner Section */}
        <div className="flex justify-between items-center w-full h-[52px]">

          {/* Logo */}
          <div
            className={`flex items-center justify-center font-[family-name:var(--font-bebas)] font-normal ${logoTextColor} max-md:text-[30px] md:text-[60px] w-auto h-auto md:w-[110px] md:h-[25px] leading-[90%] tracking-[-0.03em] text-center`}
          >
            NAZR
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`flex items-center justify-center md:justify-between ${menuBtnBg} transition-colors rounded-[4px] max-md:px-[9px] max-md:py-[7px] md:px-[16px] md:py-[16px] w-auto h-auto md:w-[118px] md:h-[52px] gap-[12px] opacity-100`}
          >
            <span
              className="hidden md:inline-block font-['Switzer',_sans-serif] font-normal text-[20px] leading-[100%] tracking-[-0.04em] text-right"
              style={{
                width: '50px',
                height: '20px',
                color: menuTextColor
              }}
            >
              Menu
            </span>
            <svg 
              viewBox="0 0 24 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              style={{ color: menuTextColor }}
              className="max-md:w-[22px] max-md:h-[9px] md:w-[24px] md:h-[12px]"
            >
              <path d="M0 1H24M0 11H24" stroke="currentColor" strokeWidth="3" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
