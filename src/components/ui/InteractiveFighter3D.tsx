"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";

const fighters = [
  { id: 1, name: "FIGHTER 1", video: "/images/fight-club/fighter-1%20(1).mp4" },
  { id: 2, name: "FIGHTER 2", video: "/images/fight-club/fighter-2%20(1).mp4" },
];

export function InteractiveFighter3D({ className = "" }: { className?: string }) {
  const [activeFighter, setActiveFighter] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play fighter 1 only after loading screen completes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hasStarted = false;

    const startPlay = () => {
      if (!video || hasStarted) return;
      hasStarted = true;
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    // If loading screen is already complete (or navigating back to page)
    if (typeof window !== "undefined" && (window as any).__LOADING_COMPLETE__) {
      if (video.readyState >= 2) {
        startPlay();
      } else {
        video.addEventListener("loadeddata", startPlay, { once: true });
      }
      return;
    }

    // Wait for the loadingComplete event dispatched by LoadingScreen
    const handleLoadingComplete = () => {
      if (!video) return;
      if (video.readyState >= 2) {
        startPlay();
      } else {
        video.addEventListener("loadeddata", startPlay, { once: true });
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("loadingComplete", handleLoadingComplete, { once: true });
    }

    // Safety fallback: if loadingComplete doesn't fire within 4.5s, play
    const fallbackTimer = setTimeout(() => {
      startPlay();
    }, 4500);

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("loadingComplete", handleLoadingComplete);
      }
      clearTimeout(fallbackTimer);
    };
  }, []);

  const handleFighterSelect = useCallback((index: number) => {
    if (index === activeFighter) return;
    setActiveFighter(index);
    const video = videoRef.current;
    if (video) {
      video.src = fighters[index].video;
      video.currentTime = 0;
      video.load();
      const playWhenReady = () => {
        video.play().catch(() => {});
      };
      video.addEventListener("loadeddata", playWhenReady, { once: true });
    }
  }, [activeFighter]);

  return (
    <div
      className={`order-1 md:order-3 md:col-span-4 relative min-h-[340px] sm:min-h-[420px] md:min-h-[480px] overflow-hidden flex flex-col justify-between p-4 select-none ${className}`}
    >
      {/* Main Video Display */}
      <div className="relative flex-1 w-full rounded-[10px] overflow-hidden bg-[#3e3d48]">
        {/* Video */}
        <video
          ref={videoRef}
          src={fighters[0].video}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-contain object-center"
        />

        {/* Fighter name overlay */}
        <div className="absolute inset-x-0 top-[45%] -translate-y-1/2 z-10 text-center pointer-events-none mix-blend-difference">
          <h2 className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[60px] sm:text-[80px] md:text-[96px] leading-none tracking-tight uppercase select-none opacity-80">
            {fighters[activeFighter].name}
          </h2>
        </div>

        {/* Bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#3e3d48]/80 via-transparent to-transparent z-[5] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3e3d48]/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Fighter Thumbnail Cards */}
      <div className="flex gap-2.5 sm:gap-3 mt-3 justify-center">
        {fighters.map((fighter, index) => (
          <button
            key={fighter.id}
            onClick={() => handleFighterSelect(index)}
            className={`relative w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] rounded-[8px] sm:rounded-[10px] overflow-hidden border transition-all duration-300 cursor-pointer group/card bg-[#3e3d48] ${
              activeFighter === index
                ? 'border-[#F1E4DE]/60'
                : 'border-[#3E4044] hover:border-[#55585E]'
            }`}
          >
            {/* Thumbnail */}
            <video
              src={fighter.video}
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-contain object-center group-hover/card:scale-110 transition-transform duration-300"
            />

            {/* Overlay */}
            <div className={`absolute inset-0 transition-opacity duration-300 ${
              activeFighter === index ? 'bg-transparent' : 'bg-black/40 group-hover/card:bg-black/20'
            }`} />

            {/* Label */}
            <div className="absolute inset-x-0 bottom-0 p-1 z-10 bg-gradient-to-t from-black/60 to-transparent">
              <span className="text-[#F1E4DE] text-[7px] sm:text-[8px] font-mono tracking-wider uppercase block text-center">
                {fighter.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
