"use client";

import { useEffect, useState, useRef, ReactNode } from "react";

interface DesktopScalerProps {
  children: ReactNode;
  desktopWidth?: number;
  bgColor?: string;
  className?: string;
}

export function DesktopScaler({ children, desktopWidth = 1280, bgColor = "#161616", className = "" }: DesktopScalerProps) {
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const [useTransformFallback, setUseTransformFallback] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect if browser lacks support for the non-standard CSS zoom property (e.g. Firefox)
    const supportsZoom = typeof CSS !== "undefined" && CSS.supports && CSS.supports("zoom", "1");
    setUseTransformFallback(!supportsZoom);

    const checkScale = () => {
      const isWindowMobile = window.innerWidth < 768;
      setIsMobile(isWindowMobile);
      
      const windowWidth = window.innerWidth;
      
      if (isWindowMobile) {
        setScale(windowWidth / 390);
      } else {
        setScale(windowWidth / desktopWidth);
      }
    };

    checkScale();
    window.addEventListener("resize", checkScale);

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        setContentHeight(entries[0].target.clientHeight || entries[0].contentRect.height);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
      setContentHeight(containerRef.current.offsetHeight);
    }

    return () => {
      window.removeEventListener("resize", checkScale);
      if (containerRef.current) {
        resizeObserver.disconnect();
      }
    };
  }, [desktopWidth]);

  const targetWidth = isMobile ? 390 : desktopWidth;

  const parentStyle = {
    backgroundColor: bgColor,
    width: "100%",
    position: "relative" as const,
    ...(useTransformFallback
      ? {
          height: `${contentHeight * scale}px`,
          overflow: "hidden" as const,
        }
      : {}),
  };

  const innerStyle = {
    width: `${targetWidth}px`,
    margin: "0 auto",
    transformOrigin: "top center",
    ...(useTransformFallback
      ? {
          transform: `scale(${scale})`,
        }
      : {
          zoom: scale,
        }),
  };

  return (
    <div className={`w-full flex justify-center ${className || ""}`} style={parentStyle}>
      <div 
        ref={containerRef}
        className="shrink-0 flex flex-col relative"
        style={innerStyle as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}
