"use client";

import { useEffect, useState, ReactNode } from "react";
import { useNavigation } from "@/context/NavigationContext";

interface ScaleWrapperProps {
  children: ReactNode;
}

export function ScaleWrapper({ children }: ScaleWrapperProps) {
  const { isMenuOpen, setIsMenuOpen } = useNavigation();
  const [originY, setOriginY] = useState("center");



  useEffect(() => {
    if (isMenuOpen) {
      setOriginY(`${window.scrollY + (window.innerHeight / 2)}px`);
      // Lock the body scroll so the scaled page acts like a fixed card
      document.body.style.overflow = "hidden";
    } else {
      // Unlock the body scroll when closing
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div
      className={`w-full min-h-screen overflow-clip transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] relative z-10 bg-[#161616] ${isMenuOpen ? "scale-[0.9] max-md:-translate-x-[65%] md:-translate-x-[35%] lg:-translate-x-[30%] rounded-[40px] shadow-2xl cursor-pointer pointer-events-none" : "scale-100 translate-x-0 rounded-[0px]"}`}
      style={{
        transformOrigin: `center ${originY}`
      }}
    >
      {/* Overlay to allow clicking the scaled-down area to close the menu */}
      {isMenuOpen && (
        <div
          className="absolute inset-0 z-[100] cursor-pointer pointer-events-auto"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      {children}
    </div>
  );
}
