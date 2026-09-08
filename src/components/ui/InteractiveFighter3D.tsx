"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

// 25 lines: 5 tall markers (indices 0, 6, 12, 18, 24) with 4 groups of 5 short lines between them
const TOTAL_LINES = 25;
const TALL_INDICES = new Set([0, 6, 12, 18, 24]);

export function InteractiveFighter3D({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);

  // Turntable loop progress (0.0 to 1.0)
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const dragStartXRef = useRef(0);
  const dragStartProgressRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  // Safe normalized loop progress [0, 1)
  const setTargetProgress = useCallback((val: number | ((prev: number) => number)) => {
    const nextVal = typeof val === "function" ? val(targetProgressRef.current) : val;
    let normalized = nextVal % 1;
    if (normalized < 0) normalized += 1;
    targetProgressRef.current = normalized;
  }, []);

  // Frame-accurate video seeking with smooth interpolation
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isSeeking = false;

    const updateFrame = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      
      // Shortest circular wrap-around distance for continuous 360° loop
      let delta = diff;
      if (delta > 0.5) delta -= 1;
      if (delta < -0.5) delta += 1;

      if (Math.abs(delta) > 0.0005) {
        currentProgressRef.current = (currentProgressRef.current + delta * 0.22 + 1) % 1;
        const currentProg = currentProgressRef.current;
        setProgress(currentProg);

        if (video.duration && !isNaN(video.duration) && !isSeeking) {
          const targetTime = currentProg * (video.duration - 0.04);
          if (Math.abs(video.currentTime - targetTime) > 0.02) {
            isSeeking = true;
            video.currentTime = targetTime;
          }
        }
      }

      rafIdRef.current = requestAnimationFrame(updateFrame);
    };

    const handleSeeked = () => {
      isSeeking = false;
    };

    video.addEventListener("seeked", handleSeeked);
    rafIdRef.current = requestAnimationFrame(updateFrame);

    return () => {
      video.removeEventListener("seeked", handleSeeked);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // 1. Scroll attached ONLY to the lines / card in a seamless loop (NOT the whole page)
  useEffect(() => {
    const targetElement = containerRef.current;
    if (!targetElement) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const scrollDelta = (e.deltaY || e.deltaX) * 0.0015;
      setTargetProgress((prev) => (prev + scrollDelta + 1) % 1);
    };

    targetElement.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      targetElement.removeEventListener("wheel", handleWheel);
    };
  }, [setTargetProgress]);

  // 2. Drag & Touch swiping support on card / lines
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    dragStartXRef.current = clientX;
    dragStartProgressRef.current = targetProgressRef.current;
  };

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    const deltaX = clientX - dragStartXRef.current;
    const progressDelta = deltaX / 240;
    setTargetProgress(dragStartProgressRef.current + progressDelta);
  }, [isDragging, setTargetProgress]);

  const handleEnd = useCallback(() => {
    if (isDragging) setIsDragging(false);
  }, [isDragging]);

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleGlobalMouseUp = () => handleEnd();

    if (isDragging) {
      window.addEventListener("mousemove", handleGlobalMouseMove);
      window.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, handleMove, handleEnd]);

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      handleStart(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Direct click / tap along the lines
  const handleLinesClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!linesRef.current) return;
    const rect = linesRef.current.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
    const newProgress = clickX / rect.width;
    setTargetProgress(newProgress);
  };

  const activeLineIndex = Math.round(progress * (TOTAL_LINES - 1));

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`order-1 md:order-3 md:col-span-4 relative min-h-[340px] sm:min-h-[420px] md:min-h-[480px] overflow-hidden flex flex-col justify-end p-4 select-none ${className}`}
    >
      {/* Background Fighter Video (Fixed, centered) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          src="/images/fighter.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-contain object-center filter contrast-[1.05] brightness-[0.95]"
        />

        {/* Seamless Vignette Edge Blends */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#242424]/50 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Bold "HANNYA" Typography Layer with Difference Blend Mode */}
      <div className="absolute inset-x-0 top-[52%] -translate-y-1/2 z-10 text-center pointer-events-none mix-blend-difference">
        <h2 className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[74px] sm:text-[96px] md:text-[112px] leading-none tracking-tight uppercase select-none">
          HANNYA
        </h2>
      </div>

      {/* Technical Barcode Lines ("That Line Thing") - Exact Match to Image 3 */}
      <div className="relative z-20 w-full flex justify-center pb-2 pointer-events-auto">
        <div
          ref={linesRef}
          onClick={handleLinesClick}
          className="flex justify-center items-center gap-[4px] sm:gap-[5px] py-2 px-3 cursor-ew-resize group/lines"
          title="Scroll with mouse wheel, swipe or drag to rotate in loop"
        >
          {Array.from({ length: TOTAL_LINES }).map((_, idx) => {
            const isTall = TALL_INDICES.has(idx);
            const isCurrent = idx === activeLineIndex;
            const isPast = idx <= activeLineIndex;

            const height = isTall ? "36px" : "22px";

            return (
              <div
                key={idx}
                style={{
                  width: "1px",
                  height,
                }}
                className={`transition-all duration-75 ${
                  isCurrent
                    ? "bg-[#F1E4DE] opacity-100 shadow-[0_0_6px_rgba(241,228,222,0.9)] scale-y-105"
                    : isPast
                    ? "bg-[#F1E4DE] opacity-90"
                    : "bg-[#F1E4DE] opacity-45 group-hover/lines:opacity-65"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
