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
  desktopWidth = 1440,
  bgColor = "#161616",
  className = "",
}: DesktopScalerProps) {
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const [isDesktopSiteMobile, setIsDesktopSiteMobile] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [useTransformFallback, setUseTransformFallback] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supportsZoom =
      typeof CSS !== "undefined" &&
      CSS.supports &&
      CSS.supports("zoom", "1");

    setUseTransformFallback(!supportsZoom);

    const checkScale = () => {
      const windowWidth = window.innerWidth;
      const mobile = windowWidth < 768;

      setViewportWidth(windowWidth);

      // Detect "Request Desktop Site" on a mobile phone:
      // The browser reports a wide viewport (>=768px) but the physical screen is small
      // and the device is touch-primary (phone/tablet).
      const desktopSiteMobile =
        !mobile &&
        typeof screen !== "undefined" &&
        screen.width < 768 &&
        navigator.maxTouchPoints > 0;

      setIsMobile(mobile);
      setIsDesktopSiteMobile(desktopSiteMobile);

      if (mobile) {
        setScale(Math.min(1.1, windowWidth / 390));
        return;
      }

      /**
       * Global Desktop Scaling (1440px base width)
       * Scales fluidly with windowWidth / 1440 so zooming out below 100% holds 1440px layout ratio.
       * Same zoom applies for desktop-site-on-mobile — content renders at 1440px
       * and zooms to fit. The only difference is --desktop-scale is decoupled
       * (set to 9999 in innerStyle) to prevent section height inflation.
       */
      setScale(windowWidth / desktopWidth);
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

  // Toggle a class on <html> so global CSS can override section heights if needed
  useEffect(() => {
    if (isDesktopSiteMobile) {
      document.documentElement.classList.add("dsm-mode");
    } else {
      document.documentElement.classList.remove("dsm-mode");
    }
    return () => {
      document.documentElement.classList.remove("dsm-mode");
    };
  }, [isDesktopSiteMobile]);

  const targetWidth = isMobile ? 390 : desktopWidth;

  const parentStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    width: "100%",
    position: "relative",
    overflow:
      (!isMobile && useTransformFallback) || className.includes("overflow-hidden")
        ? "hidden"
        : undefined,
    height: (!isMobile && useTransformFallback) ? contentHeight * scale : undefined,
  };

  const innerStyle: React.CSSProperties & { [key: string]: any } = {
    width: targetWidth,
    margin: "0 auto",
    transformOrigin: "top center",
    // When desktop-site-on-mobile, decouple --desktop-scale from the actual zoom.
    // Set it to 9999 so calc(100vh/9999) ≈ 0, making max(750px, ~0) = 750px.
    // The CSS zoom still applies normally (content renders at 1440px, zoomed to fit).
    "--desktop-scale": isDesktopSiteMobile ? 9999 : scale,

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