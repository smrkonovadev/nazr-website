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

      if (desktopSiteMobile) {
        // In "Request Desktop Site" mode the browser already scales the page
        // to fit the physical screen. Applying our own zoom causes double-shrinking
        // and massive empty gaps between sections. Set scale=1 and render at
        // the viewport width so the browser's own scaling handles everything.
        setScale(1);
        return;
      }

      /**
       * Global Desktop Scaling (1440px base width)
       * Scales fluidly with windowWidth / 1440 so zooming out below 100% holds 1440px layout ratio
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

  // In "desktop site" mode on mobile, use the viewport width directly (no zoom).
  // Otherwise use the standard mobile (390) or desktop (1440) base widths.
  const targetWidth = isMobile ? 390 : (isDesktopSiteMobile ? viewportWidth : desktopWidth);

  const parentStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    width: "100%",
    position: "relative",
    overflow:
      useTransformFallback || className.includes("overflow-hidden")
        ? "hidden"
        : undefined,
    height: useTransformFallback ? contentHeight * scale : undefined,
  };

  const innerStyle: React.CSSProperties & { [key: string]: any } = {
    width: targetWidth,
    margin: "0 auto",
    transformOrigin: "top center",
    "--desktop-scale": scale,

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