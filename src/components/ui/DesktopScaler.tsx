"use client";

import { useEffect, useState, useRef, ReactNode } from "react";

interface DesktopScalerProps {
  children: ReactNode;
  desktopWidth?: number;
  bgColor?: string;
  className?: string;
}

export function DesktopScaler({ children, desktopWidth = 1440, bgColor = "#161616", className = "" }: DesktopScalerProps) {
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(true); // default to true to avoid huge layout shifts, or handle via CSS
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScale = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth < 768);
      if (windowWidth < 768) {
        setScale(windowWidth / 390);
      } else {
        setScale(windowWidth / desktopWidth);
      }
    };

    checkScale();
    window.addEventListener("resize", checkScale);

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        setContentHeight(entries[0].contentRect.height);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
      setContentHeight(containerRef.current.offsetHeight);
    }

    return () => {
      window.removeEventListener("resize", checkScale);
    };
  }, [desktopWidth]);

  return (
    <div className={`w-full flex justify-center ${className || ""}`} style={{ backgroundColor: bgColor }}>
      <div 
        className="shrink-0 flex flex-col relative"
        style={isMobile ? { 
          width: '390px',
          zoom: scale,
          margin: "0 auto",
          transformOrigin: "top center"
        } : { 
          width: `${desktopWidth}px`,
          zoom: scale,
          margin: "0 auto",
          transformOrigin: "top center"
        } as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}
