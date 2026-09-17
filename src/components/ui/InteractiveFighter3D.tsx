"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

const fighters = [
  {
    id: 1,
    name: "FIGHTER 1",
    video: "/images/fight-club/fighter-1.mp4",
    poster: "/images/fight-club/fighter-1-poster.jpg",
    image: "/images/fight-club/fighter-1-thumb.webp",
  },
  {
    id: 2,
    name: "FIGHTER 2",
    video: "/images/fight-club/fighter-2.mp4",
    poster: "/images/fight-club/fighter-2-poster.jpg",
    image: "/images/fight-club/fighter-2-thumb.webp",
  },
];

export function InteractiveFighter3D({ className = "" }: { className?: string }) {
  const [activeFighter, setActiveFighter] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Function to safely start playing active video
  const playActiveVideo = useCallback(() => {
    const video = videoRefs.current[activeFighter];
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay may be deferred until user touches the screen (e.g. Low Power Mode on iOS)
      });
    }
  }, [activeFighter]);

  // Preload and warm up inactive video
  useEffect(() => {
    const inactiveIndex = activeFighter === 0 ? 1 : 0;
    const inactiveVideo = videoRefs.current[inactiveIndex];
    if (inactiveVideo) {
      inactiveVideo.muted = true;
      inactiveVideo.defaultMuted = true;
      inactiveVideo.load();
    }
  }, [activeFighter]);

  // Play active fighter on mount and after loading screen completes
  useEffect(() => {
    playActiveVideo();

    // If loading screen is still active, listen for its completion
    if (typeof window !== "undefined" && !(window as any).__LOADING_COMPLETE__) {
      const handleLoadingComplete = () => {
        playActiveVideo();
      };

      window.addEventListener("loadingComplete", handleLoadingComplete, { once: true });
      const fallbackTimer = setTimeout(playActiveVideo, 3500);

      return () => {
        window.removeEventListener("loadingComplete", handleLoadingComplete);
        clearTimeout(fallbackTimer);
      };
    }
  }, [playActiveVideo]);

  // iOS Safari Low Power Mode fallback: start playback on first touch/interaction
  useEffect(() => {
    const unlockOnInteraction = () => {
      const video = videoRefs.current[activeFighter];
      if (video && video.paused && !video.ended) {
        video.muted = true;
        video.defaultMuted = true;
        video.play().catch(() => {});
      }
    };

    window.addEventListener("touchstart", unlockOnInteraction, { once: true, passive: true });
    window.addEventListener("click", unlockOnInteraction, { once: true, passive: true });
    window.addEventListener("scroll", unlockOnInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener("touchstart", unlockOnInteraction);
      window.removeEventListener("click", unlockOnInteraction);
      window.removeEventListener("scroll", unlockOnInteraction);
    };
  }, [activeFighter]);

  const handleFighterSelect = useCallback(
    (index: number) => {
      if (index === activeFighter) {
        // Replay from start if clicking the already active fighter
        const currentVideo = videoRefs.current[index];
        if (currentVideo) {
          currentVideo.currentTime = 0;
          currentVideo.play().catch(() => {});
        }
        return;
      }
      const prevIndex = activeFighter;
      setActiveFighter(index);

      const nextVideo = videoRefs.current[index];
      if (nextVideo) {
        nextVideo.muted = true;
        nextVideo.defaultMuted = true;
        nextVideo.currentTime = 0;
        nextVideo.play().catch(() => {});
      }

      // Smooth pause on previous video after crossfade completes
      setTimeout(() => {
        const prevVideo = videoRefs.current[prevIndex];
        if (prevVideo) {
          prevVideo.pause();
        }
      }, 550);
    },
    [activeFighter]
  );

  return (
    <div
      className={`order-1 md:order-3 md:col-span-4 relative min-h-[540px] sm:min-h-[580px] md:min-h-[480px] overflow-hidden flex flex-col justify-between p-4 select-none ${className}`}
    >
      {/* Main Video Display */}
      <div className="relative flex-1 w-full aspect-[4/5] md:aspect-auto md:h-auto rounded-[10px] overflow-hidden bg-[#24232a]">
        {/* Videos with smooth cross-fade transition */}
        {fighters.map((fighter, index) => {
          const isActive = activeFighter === index;
          return (
            <video
              key={fighter.id}
              ref={(el) => {
                if (el) {
                  el.muted = true;
                  el.defaultMuted = true;
                  el.setAttribute("playsinline", "");
                  el.setAttribute("webkit-playsinline", "");
                }
                videoRefs.current[index] = el;
              }}
              src={fighter.video}
              poster={fighter.poster}
              autoPlay
              muted
              playsInline
              preload="auto"
              className={`absolute inset-0 w-full h-full object-contain object-center transform-gpu transition-opacity duration-500 ease-in-out ${
                isActive ? "opacity-100 z-[2]" : "opacity-0 z-[1] pointer-events-none"
              }`}
            >
              <source src={fighter.video} type="video/mp4" />
            </video>
          );
        })}

        {/* Fighter name overlay */}
        <div className="absolute inset-x-0 top-[45%] -translate-y-1/2 z-10 text-center pointer-events-none mix-blend-difference px-2">
          <h2 className="font-[family-name:var(--font-bebas)] text-[#F1E4DE] text-[48px] leading-[0.95] tracking-tight uppercase select-none opacity-80">
            FIGHTER<br />REVEALING SOON
          </h2>
        </div>

        {/* Subtle Bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#24232a]/60 via-transparent to-transparent z-[5] pointer-events-none" />
      </div>

      {/* Fighter Thumbnail Cards */}
      <div className="flex gap-2.5 sm:gap-3 mt-3 justify-center">
        {fighters.map((fighter, index) => (
          <button
            key={fighter.id}
            onClick={() => handleFighterSelect(index)}
            className={`relative w-[56px] h-[70px] sm:w-[68px] sm:h-[85px] rounded-[8px] sm:rounded-[10px] overflow-hidden border transition-all duration-300 cursor-pointer group/card bg-[#24232a] ${
              activeFighter === index
                ? "border-[#F1E4DE]/60"
                : "border-[#3E4044] hover:border-[#55585E]"
            }`}
          >
            {/* Thumbnail Image */}
            <Image
              src={fighter.image}
              alt={fighter.name}
              fill
              sizes="(max-width: 640px) 56px, 68px"
              className="object-cover object-center group-hover/card:scale-110 transition-transform duration-300"
              priority
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                activeFighter === index ? "bg-transparent" : "bg-black/40 group-hover/card:bg-black/20"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
