"use client";

import { useEffect, useState, useRef, ReactNode } from "react";

interface DesktopScalerProps {
  children: ReactNode;
  desktopWidth?: number;
  bgColor?: string;
  className?: string;
}

export function DesktopScaler({
  children,
  desktopWidth = 1280,
  bgColor = "#161616",
  className = "",
}: DesktopScalerProps) {
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const [useTransformFallback, setUseTransformFallback] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supportsZoom =
      typeof CSS !== "undefined" &&
      CSS.supports &&
      CSS.supports("zoom", "1");

    setUseTransformFallback(!supportsZoom);

    const checkScale = () => {
      const windowWidth = document.documentElement.clientWidth || window.innerWidth;
      const mobile = windowWidth < 768;

      setIsMobile(mobile);

      if (mobile) {
        setScale(windowWidth / 390);
        return;
      }

      /**
       * Responsive desktop scaling:
       * Exactly scales the 1280px base canvas to fit 100% of available viewport width
       * (e.g. 1024px -> 0.8x, 1280px -> 1.0x, 1440px -> ~1.12x, 1920px -> 1.5x)
       */
      const calculatedScale = windowWidth / desktopWidth;
      setScale(calculatedScale);
    };

    checkScale();

    window.addEventListener("resize", checkScale);

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        setContentHeight(
          entries[0].target.clientHeight ||
          entries[0].contentRect.height
        );
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
      setContentHeight(containerRef.current.offsetHeight);
    }

    return () => {
      window.removeEventListener("resize", checkScale);
      resizeObserver.disconnect();
    };
  }, [desktopWidth]);

  const targetWidth = isMobile ? 390 : desktopWidth;

  const parentStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    width: "100%",
    position: "relative",
    ...(useTransformFallback || className.includes("overflow-hidden")
      ? {
          overflow: "hidden",
        }
      : {}),
    height: useTransformFallback ? contentHeight * scale : undefined,
  };

  const innerStyle: React.CSSProperties & { zoom?: number | string } = {
    width: targetWidth,
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
    <div
      className={`w-full flex justify-center ${className}`}
      style={parentStyle}
    >
      <div
        ref={containerRef}
        className="relative flex shrink-0 flex-col"
        style={innerStyle}
      >
        {children}
      </div>
    </div>
  );
}