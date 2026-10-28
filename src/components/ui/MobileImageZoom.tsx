"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface MobileImageZoomContextType {
  openZoom: (
    src: string,
    alt?: string,
    initialScale?: number,
    gallery?: string[],
    initialIndex?: number,
    onIndexChange?: (index: number) => void
  ) => void;
  closeZoom: () => void;
  isOpen: boolean;
}

const MobileImageZoomContext = createContext<MobileImageZoomContextType>({
  openZoom: () => { },
  closeZoom: () => { },
  isOpen: false,
});

export const useMobileImageZoom = () => useContext(MobileImageZoomContext);

function getCleanImageUrl(src: string): string {
  try {
    if (src.includes("/_next/image")) {
      const urlObj = new URL(src, window.location.origin);
      const original = urlObj.searchParams.get("url");
      if (original) {
        return decodeURIComponent(original);
      }
    }
  } catch {
    // fallback
  }
  return src;
}

export function MobileImageZoomProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [imageAlt, setImageAlt] = useState<string>("");
  const [startScale, setStartScale] = useState(1);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const isOpenRef = useRef(false);
  const onIndexChangeRef = useRef<((index: number) => void) | undefined>(undefined);
  const lastOpenTimeRef = useRef(0);
  const lastPageTapRef = useRef<{ time: number; x: number; y: number }>({ time: 0, x: 0, y: 0 });

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  // Check if viewport is mobile (< 768px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openZoom = useCallback(
    (
      src: string,
      alt: string = "",
      initialScale: number = 1,
      gallery: string[] = [],
      initialIndex: number = 0,
      onIndexChange?: (index: number) => void
    ) => {
      if (window.innerWidth >= 768) return; // Mobile only
      const cleanSrc = getCleanImageUrl(src);
      setImageSrc(cleanSrc);
      setImageAlt(alt);
      setStartScale(initialScale);
      setGalleryImages(gallery && gallery.length > 0 ? gallery : [cleanSrc]);
      setCurrentIndex(initialIndex);
      onIndexChangeRef.current = onIndexChange;
      setIsOpen(true);
      isOpenRef.current = true;
      lastOpenTimeRef.current = Date.now();
    },
    []
  );

  const closeZoom = useCallback(() => {
    setIsOpen(false);
    isOpenRef.current = false;
  }, []);

  // Global mobile tap/click listener for zoomable images
  useEffect(() => {
    let touchStartPos = { x: 0, y: 0, time: 0 };

    const handleTouchStart = (e: TouchEvent) => {
      if (window.innerWidth >= 768) return;
      if (isOpenRef.current) return; // Ignore while modal is open

      if (e.touches.length === 1) {
        touchStartPos = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          time: Date.now(),
        };
      }
    };

    const processTarget = (target: HTMLElement | null, e: Event, isDoubleTap: boolean = false): boolean => {
      if (!target) return false;

      // Never re-trigger or intercept if modal is already open
      if (isOpenRef.current) return false;

      // 1. Explicit exclusion checks
      if (
        target.closest('[data-modal="mobile-zoom"]') ||
        target.closest('[data-no-zoom="true"]') ||
        target.classList.contains("no-zoom") ||
        target.closest("nav, header, .navigation-menu")
      ) {
        return false;
      }

      // Check for attached data-gallery
      const galleryEl = target.closest<HTMLElement>("[data-gallery]");
      let parsedGallery: string[] = [];
      let parsedIndex = 0;
      if (galleryEl) {
        try {
          const raw = galleryEl.getAttribute("data-gallery");
          if (raw) parsedGallery = JSON.parse(raw);
          const rawIdx = galleryEl.getAttribute("data-index");
          if (rawIdx) parsedIndex = parseInt(rawIdx, 10);
        } catch {
          // ignore
        }
      }

      // 2. Check if explicitly marked zoomable
      const zoomableContainer = target.closest<HTMLElement>("[data-zoomable='true']");
      if (zoomableContainer) {
        const img =
          zoomableContainer.querySelector("img") ||
          (target.tagName === "IMG" ? (target as HTMLImageElement) : null);
        if (img) {
          const rawSrc = img.currentSrc || img.getAttribute("src") || "";
          if (rawSrc) {
            e.preventDefault();
            e.stopPropagation();
            openZoom(
              rawSrc,
              img.alt || "",
              isDoubleTap ? 2.5 : 1,
              parsedGallery,
              parsedIndex
            );
            return true;
          }
        }
      }

      // 3. Check for general image elements
      let imgElement: HTMLImageElement | null = null;
      if (target.tagName === "IMG") {
        imgElement = target as HTMLImageElement;
      } else if (target.querySelector("img")) {
        imgElement = target.querySelector("img");
      }

      if (!imgElement) return false;

      // Ignore small icon buttons, avatars, decorative icons
      const width = imgElement.naturalWidth || imgElement.clientWidth || 0;
      const height = imgElement.naturalHeight || imgElement.clientHeight || 0;
      const isTiny = (width > 0 && width < 55) || (height > 0 && height < 55);

      // Check if inside a thumbnail button
      const buttonParent = imgElement.closest("button");
      if (buttonParent && !buttonParent.getAttribute("data-zoomable")) {
        return false;
      }

      if (isTiny) return false;

      // Check if inside an anchor link without data-zoomable
      const anchorParent = imgElement.closest("a");
      if (anchorParent && imgElement.getAttribute("data-zoomable") !== "true") {
        return false;
      }

      const rawSrc = imgElement.currentSrc || imgElement.getAttribute("src") || "";
      if (rawSrc) {
        if (anchorParent) {
          e.preventDefault();
          e.stopPropagation();
        }
        openZoom(
          rawSrc,
          imgElement.alt || "",
          isDoubleTap ? 2.5 : 1,
          parsedGallery,
          parsedIndex
        );
        return true;
      }

      return false;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (window.innerWidth >= 768) return;
      if (isOpenRef.current) return;
      if (Date.now() - lastOpenTimeRef.current < 350) return;

      if (e.changedTouches.length === 1) {
        const touch = e.changedTouches[0];
        const dist = Math.hypot(touch.clientX - touchStartPos.x, touch.clientY - touchStartPos.y);
        const timeDiff = Date.now() - touchStartPos.time;

        // Clean tap (did not scroll or drag)
        if (dist < 14 && timeDiff < 350) {
          const now = Date.now();
          const pageTapDiff = now - lastPageTapRef.current.time;
          const pageDistDiff = Math.hypot(
            touch.clientX - lastPageTapRef.current.x,
            touch.clientY - lastPageTapRef.current.y
          );
          const isDouble = pageTapDiff < 350 && pageDistDiff < 35;

          const target = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLElement | null;
          const handled = processTarget(target, e, isDouble);

          if (handled) {
            lastPageTapRef.current = isDouble
              ? { time: 0, x: 0, y: 0 }
              : { time: now, x: touch.clientX, y: touch.clientY };
          }
        }
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (window.innerWidth >= 768) return;
      if (isOpenRef.current) return;
      if (Date.now() - lastOpenTimeRef.current < 350) return;
      processTarget(e.target as HTMLElement | null, e, false);
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: false });
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("click", handleClick, true);
    };
  }, [openZoom]);

  return (
    <MobileImageZoomContext.Provider value={{ openZoom, closeZoom, isOpen }}>
      {children}
      {isOpen && isMobile && (
        <MobileImageZoomModal
          src={imageSrc}
          alt={imageAlt}
          initialScale={startScale}
          gallery={galleryImages}
          initialIndex={currentIndex}
          onIndexChange={(idx) => onIndexChangeRef.current?.(idx)}
          onClose={closeZoom}
        />
      )}
    </MobileImageZoomContext.Provider>
  );
}

interface ModalProps {
  src: string;
  alt: string;
  initialScale?: number;
  gallery?: string[];
  initialIndex?: number;
  onIndexChange?: (index: number) => void;
  onClose: () => void;
}

function MobileImageZoomModal({
  src,
  alt,
  initialScale = 1,
  gallery = [],
  initialIndex = 0,
  onIndexChange,
  onClose,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [scale, setScale] = useState(initialScale);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeIdx, setActiveIdx] = useState(initialIndex);

  const images = gallery && gallery.length > 0 ? gallery : [src];
  const activeImage = getCleanImageUrl(images[activeIdx] || src);

  // Gesture refs
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const touchStartRef = useRef<{
    x: number;
    y: number;
    dist: number;
    scale: number;
    posX: number;
    posY: number;
    time: number;
  }>({ x: 0, y: 0, dist: 0, scale: 1, posX: 0, posY: 0, time: 0 });
  const lastTapRef = useRef<{ time: number; x: number; y: number }>({ time: 0, x: 0, y: 0 });
  const isDraggingRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    // Lock scroll on body
    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleSelectImage = (idx: number) => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    onIndexChange?.(idx);
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(4, +(prev + 0.5).toFixed(1)));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const next = Math.max(1, +(prev - 0.5).toFixed(1));
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Touch gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const touches = e.touches;

    if (touches.length === 2) {
      // Pinch start
      const dist = Math.hypot(
        touches[0].clientX - touches[1].clientX,
        touches[0].clientY - touches[1].clientY
      );
      touchStartRef.current = {
        x: (touches[0].clientX + touches[1].clientX) / 2,
        y: (touches[0].clientY + touches[1].clientY) / 2,
        dist,
        scale,
        posX: position.x,
        posY: position.y,
        time: Date.now(),
      };
      isDraggingRef.current = true;
    } else if (touches.length === 1) {
      // Single touch start
      touchStartRef.current = {
        x: touches[0].clientX,
        y: touches[0].clientY,
        dist: 0,
        scale,
        posX: position.x,
        posY: position.y,
        time: Date.now(),
      };
      isDraggingRef.current = true;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const touches = e.touches;

    if (touches.length === 2 && touchStartRef.current.dist > 0) {
      // Pinch zoom
      const currentDist = Math.hypot(
        touches[0].clientX - touches[1].clientX,
        touches[0].clientY - touches[1].clientY
      );
      const ratio = currentDist / touchStartRef.current.dist;
      const newScale = Math.min(4, Math.max(1, +(touchStartRef.current.scale * ratio).toFixed(2)));
      setScale(newScale);

      // Pan with pinch center
      const currentCenterX = (touches[0].clientX + touches[1].clientX) / 2;
      const currentCenterY = (touches[0].clientY + touches[1].clientY) / 2;
      const dx = currentCenterX - touchStartRef.current.x;
      const dy = currentCenterY - touchStartRef.current.y;

      if (newScale > 1) {
        setPosition({
          x: touchStartRef.current.posX + dx,
          y: touchStartRef.current.posY + dy,
        });
      }
    } else if (touches.length === 1) {
      const dx = touches[0].clientX - touchStartRef.current.x;
      const dy = touches[0].clientY - touchStartRef.current.y;

      if (scale > 1) {
        // Pan image when zoomed
        const maxPanX = (window.innerWidth * (scale - 1)) / 1.5;
        const maxPanY = (window.innerHeight * (scale - 1)) / 1.5;

        setPosition({
          x: Math.max(-maxPanX, Math.min(maxPanX, touchStartRef.current.posX + dx)),
          y: Math.max(-maxPanY, Math.min(maxPanY, touchStartRef.current.posY + dy)),
        });
      } else {
        // Swipe down to dismiss gesture at 1x
        if (dy > 0 && Math.abs(dx) < 40) {
          setPosition({ x: 0, y: dy });
        }
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    isDraggingRef.current = false;

    // Check for swipe-down to close at 1x
    if (scale === 1 && position.y > 80) {
      onClose();
      return;
    }

    // Check for horizontal swipe to change image at 1x
    if (scale === 1 && touchStartRef.current.time > 0) {
      const lastTouch = e.changedTouches[0];
      if (lastTouch) {
        const dx = lastTouch.clientX - touchStartRef.current.x;
        const dy = lastTouch.clientY - touchStartRef.current.y;
        if (Math.abs(dx) > 55 && Math.abs(dy) < 50) {
          if (dx < -55 && activeIdx < images.length - 1) {
            handleSelectImage(activeIdx + 1);
            return;
          } else if (dx > 55 && activeIdx > 0) {
            handleSelectImage(activeIdx - 1);
            return;
          }
        }
      }
    }

    // Reset position if returned to 1x
    if (scale <= 1) {
      setPosition({ x: 0, y: 0 });
    }

    // Double-tap detection
    if (e.changedTouches.length === 1) {
      const touch = e.changedTouches[0];
      const now = Date.now();
      const timeDiff = now - lastTapRef.current.time;
      const distDiff = Math.hypot(
        touch.clientX - lastTapRef.current.x,
        touch.clientY - lastTapRef.current.y
      );

      if (timeDiff < 320 && distDiff < 35) {
        // Double tap toggles zoom
        if (scale > 1.2) {
          setScale(1);
          setPosition({ x: 0, y: 0 });
        } else {
          const targetScale = 2.5;
          const rect = containerRef.current?.getBoundingClientRect();
          if (rect) {
            const tapX = touch.clientX - rect.left - rect.width / 2;
            const tapY = touch.clientY - rect.top - rect.height / 2;
            setScale(targetScale);
            setPosition({
              x: -tapX * 0.7,
              y: -tapY * 0.7,
            });
          } else {
            setScale(targetScale);
          }
        }
        lastTapRef.current = { time: 0, x: 0, y: 0 };
        return;
      }

      lastTapRef.current = { time: now, x: touch.clientX, y: touch.clientY };
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === containerRef.current && scale === 1) {
      onClose();
    }
  };

  if (!mounted) return null;

  return createPortal(
    <div
      ref={containerRef}
      data-modal="mobile-zoom"
      data-no-zoom="true"
      onClick={handleBackdropClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 z-[999999] bg-[#FAF7F5] flex flex-col justify-between select-none touch-none animate-in fade-in duration-200"
      style={{
        opacity: scale === 1 && position.y > 0 ? Math.max(0.3, 1 - position.y / 300) : 1,
      }}
    >
      {/* Top Header Bar */}
      <div
        data-no-zoom="true"
        className="w-full flex items-center justify-between px-5 pt-safe pt-4 pb-2 z-30 bg-gradient-to-b from-[#FAF7F5] via-[#FAF7F5]/90 to-transparent shrink-0"
      >
        <div className="flex flex-col">
          <span className="text-[#161616] font-[family-name:var(--font-bebas)] text-[22px] tracking-wide uppercase line-clamp-1 max-w-[240px]">
            {alt || "Product View"}
          </span>
          <span className="text-[#161616]/60 text-[11px] font-sans font-medium">
            {images.length > 1 ? `${activeIdx + 1} of ${images.length} • ` : ""}Pinch to zoom
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close image zoom"
          data-no-zoom="true"
          className="w-10 h-10 rounded-full bg-black/10 active:bg-black/20 text-[#161616] flex items-center justify-center backdrop-blur-md border border-black/10 transition-all cursor-pointer shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        data-no-zoom="true"
        className="flex-1 w-full flex items-center justify-center overflow-hidden relative px-4 min-h-0"
      >
        {/* Scalable Image Container */}
        <div
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
            transition: isDraggingRef.current ? "none" : "transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)",
            transformOrigin: "center center",
          }}
          className="relative max-w-full max-h-[60vh] flex items-center justify-center will-change-transform"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imageRef}
            key={activeImage}
            src={activeImage}
            alt={alt || "Zoomed image view"}
            data-no-zoom="true"
            className="max-w-[92vw] max-h-[58vh] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] pointer-events-none rounded-lg"
            draggable={false}
          />
        </div>
      </div>

      {/* Bottom Section: Thumbnails Strip + Floating Zoom Controls */}
      <div
        data-no-zoom="true"
        className="w-full flex flex-col items-center pb-safe pb-4 pt-1 z-30 bg-gradient-to-t from-[#FAF7F5] via-[#FAF7F5]/90 to-transparent shrink-0"
      >
        {/* Thumbnails Row below product image */}
        {images.length > 1 && (
          <div
            className={`w-full flex items-center justify-center gap-2 px-4 transition-all duration-300 ${scale > 1
              ? "opacity-0 pointer-events-none max-h-0 pb-0 overflow-hidden"
              : "opacity-100 max-h-20 pb-2.5"
              }`}
          >
            <div className="flex items-center gap-2.5 overflow-x-auto max-w-full py-1 px-2 no-scrollbar bg-black/5 rounded-2xl border border-black/10">
              {images.map((img, idx) => {
                const cleanThumb = getCleanImageUrl(img);
                const isSelected = activeIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectImage(idx)}
                    data-no-zoom="true"
                    aria-label={`View image ${idx + 1}`}
                    className={`relative w-13 h-13 rounded-xl overflow-hidden transition-all shrink-0 p-1 flex items-center justify-center ${isSelected
                      ? "border-2 border-black ring-2 ring-[#FF0E97] bg-white scale-105 shadow-md"
                      : "border border-black/15 bg-white/70 opacity-70 hover:opacity-100"
                      }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cleanThumb}
                      alt={`Thumbnail ${idx + 1}`}
                      data-no-zoom="true"
                      className="w-full h-full object-contain pointer-events-none"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Floating Zoom Controls Bar */}
        <div className="flex items-center gap-2 bg-white/95 border border-black/15 rounded-full px-3 py-1.5 backdrop-blur-lg shadow-lg">
          {/* Zoom Out Button */}
          <button
            onClick={handleZoomOut}
            disabled={scale <= 1}
            data-no-zoom="true"
            aria-label="Zoom out"
            className="w-8 h-8 rounded-full bg-black/5 active:bg-black/15 text-[#161616] flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>

          {/* Percentage / Reset Button */}
          <button
            onClick={handleReset}
            data-no-zoom="true"
            aria-label="Reset zoom"
            className="px-2.5 py-0.5 rounded-full text-[#161616] font-mono text-[12px] font-semibold tracking-wider hover:bg-black/5 transition-colors"
          >
            {Math.round(scale * 100)}%
          </button>

          {/* Zoom In Button */}
          <button
            onClick={handleZoomIn}
            disabled={scale >= 4}
            data-no-zoom="true"
            aria-label="Zoom in"
            className="w-8 h-8 rounded-full bg-black/5 active:bg-black/15 text-[#161616] flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition-all"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>

          {/* Reset Icon Button (if zoomed) */}
          {scale > 1 && (
            <button
              onClick={handleReset}
              data-no-zoom="true"
              aria-label="Reset to original size"
              className="w-8 h-8 ml-1 rounded-full bg-[#FF0E97]/15 border border-[#FF0E97]/30 text-[#FF0E97] active:bg-[#FF0E97]/30 flex items-center justify-center transition-all"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
