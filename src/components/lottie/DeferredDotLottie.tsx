"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import type { DotLottie } from "@lottiefiles/dotlottie-react";

export interface DeferredDotLottieProps {
  src: string;
  loop?: boolean;
  className?: string;
  containerClassName?: string;
  fallbackImage?: string;
  fallbackAlt?: string;
  fallbackClassName?: string;
  isActive?: boolean;
  threshold?: number;
  rootMargin?: string;
  onDurationMeasured?: (dur: number) => void;
  dotLottieRefCallback?: (instance: DotLottie | null) => void;
}

export function DeferredDotLottie({
  src,
  loop = true,
  className = "w-full h-full object-contain",
  containerClassName = "w-full h-full relative flex items-center justify-center",
  fallbackImage,
  fallbackAlt = "Animation preview",
  fallbackClassName = "object-contain",
  isActive = true,
  threshold = 0.15,
  rootMargin = "50px",
  onDurationMeasured,
  dotLottieRefCallback,
}: DeferredDotLottieProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottie | null>(null);
  const [isReady, setIsReady] = useState(false);
  const isInViewRef = useRef(false);

  // Sync internal ref and user callback
  const handleDotLottieRef = useCallback(
    (instance: DotLottie | null) => {
      dotLottieRef.current = instance;
      if (dotLottieRefCallback) {
        dotLottieRefCallback(instance);
      }

      if (instance) {
        const handleReadyOrLoad = () => {
          setIsReady(true);
          if (instance.duration && instance.duration > 0 && onDurationMeasured) {
            onDurationMeasured(instance.duration);
          }

          // If already in view and active, play now
          if (isInViewRef.current && isActive) {
            instance.play();
          } else {
            instance.pause();
          }
        };

        instance.addEventListener("ready", handleReadyOrLoad);
        instance.addEventListener("load", handleReadyOrLoad);

        if (instance.isLoaded || instance.isReady) {
          handleReadyOrLoad();
        }
      }
    },
    [isActive, onDurationMeasured, dotLottieRefCallback]
  );

  // Each Lottie instance has its OWN dedicated IntersectionObserver instance
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        isInViewRef.current = inView;

        const player = dotLottieRef.current;
        if (!player) return;

        if (inView && isActive) {
          player.play();
        } else {
          // Pause when scrolling out of view (do not destroy/recreate)
          player.pause();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isActive, threshold, rootMargin]);

  // Handle isActive changes (e.g. card switching or tab switching)
  useEffect(() => {
    const player = dotLottieRef.current;
    if (!player) return;

    if (isActive && isInViewRef.current) {
      player.play();
    } else {
      player.pause();
    }
  }, [isActive]);

  return (
    <div ref={containerRef} className={containerClassName}>
      {/* Underlying lightweight placeholder: only shown before Lottie is ready */}
      {fallbackImage && !isReady && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
          <Image
            unoptimized
            quality={100}
            src={fallbackImage}
            alt={fallbackAlt}
            fill
            className={fallbackClassName}
          />
        </div>
      )}

      {/* WASM Lottie Player initialized with autoplay: false */}
      <DotLottieReact
        src={src}
        loop={loop}
        autoplay={false}
        dotLottieRefCallback={handleDotLottieRef}
        className={className}
      />
    </div>
  );
}

export default DeferredDotLottie;
