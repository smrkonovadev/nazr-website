"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { trackMetaViewContent } from "@/components/MetaPixel";

export const carouselData = [
  {
    id: "sip-check",
    image: "/images/productsip.webp",
    title: "Sip Check",
    salePrice: "₹444 for 11",
    originalPrice: "₹555",
    price: 444,
    subtitle: "A peel-off seal for your glass that physically blocks anything being slipped into your drink. India's first.",
    mobileSubtitle: "A peel-off seal for your glass that physically blocks anything being slipped into your drink. India's first.",
    primaryButtonText: "Shop Sip Check",
    link: "https://shop.nazrco.in/products/sip-check",
    name: "Sip Check Anti Drink Spike Stickers"
  },
  {
    id: "pepper-spray",
    image: "/images/center.webp",
    title: "On Me",
    salePrice: "₹777",
    originalPrice: "₹999",
    price: 777,
    subtitle: "A safety spray that clips to your bag and glows in the dark, so it's easy to find. Sprays 8 to 10 ft, with 10 to 15 bursts per can.",
    mobileSubtitle: "A safety spray that clips to your bag and glows in the dark, so it's easy to find. Sprays 8 to 10 ft, with 10 to 15 bursts per can.",
    primaryButtonText: "Shop On Me",
    link: "https://shop.nazrco.in/products/on-me-spray",
    name: "On Me Safety Spray"
  },
  {
    id: "nazr-360",
    image: "/images/NAZR360.webp",
    title: "NAZR 360°",
    salePrice: "₹999",
    originalPrice: "₹1111",
    price: 999,
    subtitle: "On Me and Sip Check together, for both your bag and your night out. Save ₹443 when you carry both.",
    mobileSubtitle: "On Me and Sip Check together, for both your bag and your night out. Save ₹443 when you carry both.",
    primaryButtonText: "Shop NAZR 360°",
    link: "https://shop.nazrco.in/products/bundle",
    name: "NAZR 360° Bundle Pack"
  }
];

export function SafetyDesigned() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const lastWheelTime = useRef<number>(0);

  // Refs for GSAP animation targets
  const desktopCarouselRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopImgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const floatingIconRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const mobileCarouselRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileTitleRef = useRef<HTMLHeadingElement>(null);
  const mobileSubRef = useRef<HTMLParagraphElement>(null);

  const handleProductClick = () => {
    const item = carouselData[currentIndex] as any;
    if (item) {
      trackMetaViewContent({
        content_name: item.name || item.title,
        content_ids: [item.id === "pepper-spray" ? "on-me-spray" : item.id],
        content_type: "product",
        value: item.price || 555,
        currency: "INR",
      });
    }
  };

  const handleNext = useCallback(() => setCurrentIndex((prev) => (prev + 1) % carouselData.length), []);
  const handlePrev = useCallback(() => setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length), []);

  const leftIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
  const rightIndex = (currentIndex + 1) % carouselData.length;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 35) {
      handleNext();
    } else if (distance < -35) {
      handlePrev();
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 350) return;
    if (Math.abs(e.deltaX) > 25 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 0) {
        handleNext();
        lastWheelTime.current = now;
      } else {
        handlePrev();
        lastWheelTime.current = now;
      }
    }
  };

  // GSAP desktop carousel animations (replaces framer-motion animate)
  useEffect(() => {
    const ease = "power3.out";
    const duration = 0.6;

    carouselData.forEach((item, index) => {
      const el = desktopCarouselRefs.current[index];
      const imgEl = desktopImgRefs.current[index];
      if (!el) return;

      const isCenter = index === currentIndex;
      const isLeft = index === leftIndex;

      gsap.to(el, {
        width: isCenter
          ? (item.id === "sip-check" ? 480 : item.id === "nazr-360" ? 300 : 363.30)
          : (isLeft ? 250.69 : 249.71),
        height: isCenter
          ? (item.id === "sip-check" ? 560 : item.id === "nazr-360" ? 410 : 499.42)
          : 344.69,
        top: isCenter
          ? (item.id === "sip-check" ? 240 : item.id === "nazr-360" ? 320 : 276)
          : 381.76,
        left: isCenter
          ? (item.id === "sip-check" ? 370 : item.id === "nazr-360" ? 460 : 429.81)
          : (isLeft ? 104.7 : 865.59),
        opacity: isCenter ? 1 : 0.6,
        zIndex: isCenter ? 20 : 10,
        duration,
        ease,
      });

      if (imgEl) {
        gsap.to(imgEl, {
          scale: isCenter ? 1 : (item.id === "nazr-360" ? 0.9 : 1.2),
          duration,
          ease,
        });
      }
    });

    // Animate floating icons
    const floatingIconConfigs: { key: string; visible: boolean; delay: number }[] = [
      // Pepper spray icons
      { key: "ps-0", visible: currentIndex === 1, delay: 0.0 },
      { key: "ps-1", visible: currentIndex === 1, delay: 0.05 },
      { key: "ps-2", visible: currentIndex === 1, delay: 0.1 },
      { key: "ps-3", visible: currentIndex === 1, delay: 0.15 },
      // Sip check icons
      { key: "sc-0", visible: currentIndex === 0, delay: 0.0 },
      { key: "sc-1", visible: currentIndex === 0, delay: 0.05 },
      { key: "sc-2", visible: currentIndex === 0, delay: 0.1 },
      { key: "sc-3", visible: currentIndex === 0, delay: 0.15 },
      // Nazr 360 icons
      { key: "n3-0", visible: currentIndex === 2, delay: 0.0 },
      { key: "n3-1", visible: currentIndex === 2, delay: 0.05 },
      { key: "n3-2", visible: currentIndex === 2, delay: 0.1 },
      { key: "n3-3", visible: currentIndex === 2, delay: 0.15 },
    ];

    floatingIconConfigs.forEach(({ key, visible, delay }) => {
      const el = floatingIconRefs.current[key];
      if (!el) return;
      gsap.to(el, {
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.3,
        duration: 0.5,
        delay: visible ? delay : 0,
        ease: "back.out(1.7)",
      });
    });
  }, [currentIndex, leftIndex]);

  // GSAP mobile carousel animations
  useEffect(() => {
    const ease = "power3.out";
    const duration = 0.55;

    carouselData.forEach((item, index) => {
      const el = mobileCarouselRefs.current[index];
      if (!el) return;

      const isCenter = index === currentIndex;
      const isLeft = index === leftIndex;
      const isRight = index === rightIndex;

      gsap.to(el, {
        left: isCenter ? "50%" : isLeft ? "0%" : "100%",
        x: isCenter ? "-50%" : isLeft ? "-60%" : "-40%",
        scale: isCenter ? 1 : 0.7,
        opacity: isCenter ? 1 : 0.6,
        zIndex: isCenter ? 20 : 10,
        width: isCenter ? (item.id === "sip-check" ? "280px" : item.id === "nazr-360" ? "180px" : "230px") : "130px",
        height: isCenter ? (item.id === "sip-check" ? "280px" : item.id === "nazr-360" ? "190px" : "240px") : "190px",
        duration,
        ease,
      });
    });

    // Mobile text transition
    if (mobileTitleRef.current) {
      gsap.fromTo(mobileTitleRef.current, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
    }
    if (mobileSubRef.current) {
      gsap.fromTo(mobileSubRef.current, { opacity: 0, y: 4 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
    }
  }, [currentIndex, leftIndex, rightIndex]);

  return (
    <section className="w-full bg-[#161616] flex justify-center pt-8 pb-4 md:pt-[60px] md:pb-[10px] md:px-[30px] overflow-hidden relative z-20 md:min-h-[950px] md:h-auto">

      {/* Desktop Master Wrapper */}
      <div className="hidden md:block w-full max-w-[1220px] relative h-[940px]">

        {/* Title Block */}
        <div className="absolute flex flex-col items-center gap-[24px]" style={{ width: "740px", height: "236px", top: 0, left: "50%", transform: "translateX(-50%)" }}>
          <h2 className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[80px] leading-[0.9] tracking-[-0.03em] text-center m-0 w-full">
            SAFETY, DESIGNED TO<br /> GO WITH YOU.
          </h2>
          <p className="text-[#FFF9EB] font-[family-name:var(--font-inter)] font-normal text-[17px] leading-[1.5] tracking-[-0.02em] text-center m-0 w-full max-w-[660px]">
            A growing range of smart safety products designed to work alongside the NAZR application, providing additional ways to stay prepared, connected, and supported.
          </p>

          {/* Badges positioned relative to the title block for exactness */}
          <div className="absolute flex items-center justify-center z-10" style={{ width: "222px", height: "222px", top: "10px", left: "-190px" }}>
            <Image unoptimized quality={100} src="/images/new29.webp" alt="Safety Sticker" fill className="object-contain relative z-10 hover:animate-[spin_4s_linear_infinite]" />
          </div>
          <div className="absolute z-10" style={{ width: "241.23px", height: "159.03px", top: "-20px", left: "680px", transform: "rotate(5.94deg)" }}>
            <Image unoptimized quality={100} src="/images/new30.webp" alt="Fact Oval" fill className="object-contain" />
          </div>
        </div>

        {/* Desktop Side Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-[16px] top-[550px] -translate-y-1/2 cursor-pointer transition-transform hover:scale-110 active:scale-95 focus:outline-none z-30 flex items-center justify-center"
          aria-label="Previous product"
        >
          <Image unoptimized src="/images/buttonl.svg" width={48} height={48} alt="Previous" className="w-[48px] h-[48px]" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-[16px] top-[550px] -translate-y-1/2 cursor-pointer transition-transform hover:scale-110 active:scale-95 focus:outline-none z-30 flex items-center justify-center"
          aria-label="Next product"
        >
          <Image unoptimized src="/images/button r.svg" width={48} height={48} alt="Next" className="w-[48px] h-[48px]" />
        </button>

        {/* Carousel Images */}
        {carouselData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => { desktopCarouselRefs.current[index] = el; }}
            className="absolute rounded-[23.5px] flex items-center justify-center"
          >
            <img
              ref={(el) => { desktopImgRefs.current[index] = el; }}
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>
        ))}

        {/* Floating Icons (Pepper Spray) */}
        <div ref={(el) => { floatingIconRefs.current["ps-0"] = el; }} className="absolute z-30 pointer-events-none" style={{ width: "191.41px", height: "169.84px", top: "260px", left: "310px", opacity: 0 }}>
          <Image src="/images/new9.webp" fill className="object-contain hover:animate-[spin_4s_linear_infinite]" alt="" />
        </div>
        <div ref={(el) => { floatingIconRefs.current["ps-1"] = el; }} className="absolute z-30 pointer-events-none" style={{ width: "70.26px", height: "48.17px", top: "290px", left: "670px", transform: "rotate(-30deg)", opacity: 0 }}>
          <Image src="/images/new10.webp" fill className="object-contain" alt="" />
        </div>
        <div ref={(el) => { floatingIconRefs.current["ps-2"] = el; }} className="absolute z-30 pointer-events-none" style={{ width: "260px", height: "285px", top: "430px", left: "315px", transform: "rotate(36.59deg)", opacity: 0 }}>
          <Image src="/images/new11.webp" fill className="object-contain" alt="" />
        </div>
        <div ref={(el) => { floatingIconRefs.current["ps-3"] = el; }} className="absolute z-30 pointer-events-none" style={{ width: "91.95px", height: "90.19px", top: "470px", left: "680px", transform: "rotate(-60deg)", opacity: 0 }}>
          <Image src="/images/new12.webp" fill className="object-contain" alt="" />
        </div>

        {/* Floating Icons (Sip Check) */}
        <div ref={(el) => { floatingIconRefs.current["sc-0"] = el; }} className="absolute z-30 pointer-events-none" style={{ width: "191.41px", height: "169.84px", top: "260px", left: "380px", opacity: 0 }}>
          <Image src="/images/new14.webp" fill className="object-contain" alt="" />
        </div>
        <div ref={(el) => { floatingIconRefs.current["sc-1"] = el; }} className="absolute z-30 pointer-events-none" style={{ width: "115px", height: "100px", top: "410px", left: "730px", transform: "rotate(-30deg)", opacity: 0 }}>
          <Image src="/images/new15.webp" fill className="object-contain" alt="" />
        </div>
        <div ref={(el) => { floatingIconRefs.current["sc-2"] = el; }} className="absolute z-30 pointer-events-none" style={{ width: "180px", height: "176px", top: "565px", left: "390px", transform: "rotate(10.59deg)", opacity: 0 }}>
          <Image src="/images/new17.webp" fill className="object-contain" alt="" />
        </div>
        <div ref={(el) => { floatingIconRefs.current["sc-3"] = el; }} className="absolute z-30 pointer-events-none" style={{ width: "165px", height: "140px", top: "585px", left: "670px", transform: "rotate(-60deg)", opacity: 0 }}>
          <Image src="/images/new16.webp" fill className="object-contain" alt="" />
        </div>

        {/* Floating Icons (NAZR 360) */}
        <div ref={(el) => { floatingIconRefs.current["n3-0"] = el; }} className="absolute z-30 pointer-events-none" style={{ width: "220px", height: "250px", top: "240px", left: "355px", opacity: 0 }}>
          <Image src="/images/new18.webp" fill className="object-contain" alt="" />
        </div>
        <div ref={(el) => { floatingIconRefs.current["n3-1"] = el; }} className="absolute z-30 pointer-events-none" style={{ width: "180px", height: "190px", top: "260px", left: "680px", transform: "rotate(-15deg)", opacity: 0 }}>
          <Image src="/images/new19.webp" fill className="object-contain" alt="" />
        </div>
        <div ref={(el) => { floatingIconRefs.current["n3-2"] = el; }} className="absolute z-30 pointer-events-none" style={{ width: "270px", height: "195px", top: "580px", left: "275px", transform: "rotate(10.59deg)", opacity: 0 }}>
          <Image src="/images/new21.webp" fill className="object-contain" alt="" />
        </div>
        <div ref={(el) => { floatingIconRefs.current["n3-3"] = el; }} className="absolute z-30 pointer-events-none" style={{ width: "120px", height: "100px", top: "590px", left: "750px", opacity: 0 }}>
          <Image src="/images/new20.webp" fill className="object-contain" alt="" />
        </div>

        {/* Text & Controls Block */}
        <div
          className="absolute flex flex-col items-center justify-start pointer-events-auto z-40 text-center"
          style={{ width: "660px", top: "700px", left: "50%", transform: "translateX(-50%)", gap: "10px" }}
        >
          <h3 className="text-[#FFF9EB] font-['Inter',_sans-serif] font-bold text-[28px] md:text-[32px] leading-tight tracking-tight m-0 text-center">
            {carouselData[currentIndex].title}
          </h3>

          <div className="flex items-center justify-center gap-3">
            <span className="text-[#FF0E97] font-bold text-[22px] tracking-tight">
              {carouselData[currentIndex].salePrice}
            </span>
            <span className="line-through text-[#737373] text-[18px] font-normal">
              {carouselData[currentIndex].originalPrice}
            </span>
          </div>

          <p className="text-[#C8C8C8] font-['Inter',_sans-serif] font-normal text-[15px] leading-[1.5] tracking-normal text-center m-0 max-w-[520px]">
            {carouselData[currentIndex].subtitle}
          </p>

          <div className="flex items-center justify-center gap-4 mt-2">
            <a
              href={(carouselData[currentIndex] as any).link || "https://shop.nazrco.in"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleProductClick}
              className="flex items-center justify-center text-[#FFF1EB] bg-[#FF0E97] hover:bg-[#E00A85] transition-all px-6 py-2.5 rounded-[4px] text-[14px] font-medium tracking-wide shadow-sm active:scale-95 whitespace-nowrap cursor-pointer"
            >
              Shop {carouselData[currentIndex].title}
            </a>

            <Link
              href="/shop"
              className="flex items-center justify-center text-[#FFF1EB] bg-[#161616]/90 hover:bg-[#262626] border border-[#404040] hover:border-white transition-all px-6 py-2.5 rounded-[4px] text-[14px] font-medium tracking-wide active:scale-95 whitespace-nowrap cursor-pointer"
            >
              See all tools
            </Link>
          </div>
        </div>

      </div>

      {/* Mobile Fallback Wrapper */}
      <div className="md:hidden w-full flex flex-col items-center gap-1 relative px-4 pb-10">
        <div className="flex flex-col items-center gap-2 w-full relative">
          <h2 className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[46px] sm:text-[80px] text-center m-0 leading-[0.9] tracking-[-0.03em]">
            SAFETY, DESIGNED TO<br /> GO WITH YOU.
          </h2>
          <p className="text-[#FFF9EB] font-[family-name:var(--font-inter)] font-normal text-[15px] sm:text-[17px] text-center m-0 mb-6 sm:mb-8 max-w-[360px] sm:max-w-[420px] leading-[1.4] tracking-[-0.02em]">
            A growing range of smart safety products designed to work alongside the NAZR application, providing additional ways to stay prepared, connected, and supported.
          </p>
        </div>

        {/* Mobile Carousel Display */}
        <div
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="w-full relative h-[255px] flex justify-center items-center overflow-visible my-0 touch-pan-y select-none"
        >
          {carouselData.map((item, index) => {
            const isCenter = index === currentIndex;

            return (
              <div
                key={item.id}
                ref={(el) => { mobileCarouselRefs.current[index] = el; }}
                onClick={() => {
                  if (index === leftIndex) handlePrev();
                  if (index === rightIndex) handleNext();
                }}
                className={`absolute flex items-center justify-center ${
                  isCenter ? 'pointer-events-auto cursor-grab active:cursor-grabbing z-20' : 'pointer-events-auto cursor-pointer hover:opacity-80 z-10'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                  className={`w-full h-full object-contain pointer-events-none ${item.id === "sip-check" ? "scale-[1.38] transform-gpu" : ""}`}
                />

                {/* Pepper Spray Mobile Stickers */}
                {item.id === "pepper-spray" && (
                  <>
                    <div className="absolute w-[95px] h-[90px] top-[-5px] left-[-30px] z-30 pointer-events-none transition-all duration-500" style={{ opacity: isCenter ? 1 : 0, transform: isCenter ? 'scale(1)' : 'scale(0.2)' }}>
                      <Image unoptimized quality={100} src="/images/new9.webp" alt="sticker" fill className="object-contain hover:animate-[spin_4s_linear_infinite]" />
                    </div>
                    <div className="absolute w-[85px] h-[80px] top-[-10px] right-[-25px] z-30 pointer-events-none transition-all duration-500" style={{ opacity: isCenter ? 1 : 0, transform: isCenter ? 'scale(1)' : 'scale(0.2)', transitionDelay: isCenter ? '0.1s' : '0s' }}>
                      <Image unoptimized quality={100} src="/images/new10.webp" alt="sticker" fill className="object-contain" />
                    </div>
                    <div className="absolute w-[155px] h-[90px] bottom-[10px] left-[-55px] z-30 pointer-events-none transition-all duration-500" style={{ opacity: isCenter ? 1 : 0, transform: isCenter ? 'scale(1)' : 'scale(0.2)', transitionDelay: isCenter ? '0.15s' : '0s' }}>
                      <Image unoptimized quality={100} src="/images/new11.webp" alt="sticker" fill className="object-contain" />
                    </div>
                    <div className="absolute w-[55px] h-[55px] bottom-[15px] right-[-25px] z-30 pointer-events-none transition-all duration-500" style={{ opacity: isCenter ? 0.8 : 0, transform: isCenter ? 'scale(1)' : 'scale(0.2)', transitionDelay: isCenter ? '0.2s' : '0s' }}>
                      <Image unoptimized quality={100} src="/images/new12.webp" alt="sticker" fill className="object-contain" />
                    </div>
                  </>
                )}

                {/* Sip Check Mobile Stickers */}
                {item.id === "sip-check" && (
                  <>
                    <div className="absolute w-[95px] h-[95px] top-[5px] left-[0px] z-30 pointer-events-none transition-all duration-500" style={{ opacity: isCenter ? 1 : 0, transform: isCenter ? 'scale(1)' : 'scale(0.2)' }}>
                      <Image unoptimized quality={100} src="/images/new14.webp" alt="sticker" fill className="object-contain" />
                    </div>
                    <div className="absolute w-[90px] h-[85px] top-[30px] right-[-10px] z-30 pointer-events-none transition-all duration-500" style={{ opacity: isCenter ? 1 : 0, transform: isCenter ? 'scale(1)' : 'scale(0.2)', transitionDelay: isCenter ? '0.1s' : '0s' }}>
                      <Image unoptimized quality={100} src="/images/new15.webp" alt="sticker" fill className="object-contain" />
                    </div>
                    <div className="absolute w-[135px] h-[135px] bottom-[35px] left-[-30px] z-30 pointer-events-none transition-all duration-500" style={{ opacity: isCenter ? 1 : 0, transform: isCenter ? 'scale(1)' : 'scale(0.2)', transitionDelay: isCenter ? '0.15s' : '0s' }}>
                      <Image unoptimized quality={100} src="/images/new17.webp" alt="sticker" fill className="object-contain" />
                    </div>
                    <div className="absolute w-[95px] h-[90px] bottom-[45px] right-[-10px] z-30 pointer-events-none transition-all duration-500" style={{ opacity: isCenter ? 1 : 0, transform: isCenter ? 'scale(1)' : 'scale(0.2)', transitionDelay: isCenter ? '0.2s' : '0s' }}>
                      <Image unoptimized quality={100} src="/images/new16.webp" alt="sticker" fill className="object-contain" />
                    </div>
                  </>
                )}

                {/* Nazr 360 Mobile Stickers */}
                {item.id === "nazr-360" && (
                  <>
                    <div className="absolute w-[85px] h-[85px] top-[-45px] left-[-58px] z-30 pointer-events-none transition-all duration-500" style={{ opacity: isCenter ? 1 : 0, transform: isCenter ? 'scale(1)' : 'scale(0.2)' }}>
                      <Image unoptimized quality={100} src="/images/new18.webp" alt="sticker" fill className="object-contain" />
                    </div>
                    <div className="absolute w-[90px] h-[90px] top-[-25px] right-[-58px] z-30 pointer-events-none transition-all duration-500" style={{ opacity: isCenter ? 1 : 0, transform: isCenter ? 'scale(1)' : 'scale(0.2)', transitionDelay: isCenter ? '0.1s' : '0s' }}>
                      <Image unoptimized quality={100} src="/images/new19.webp" alt="sticker" fill className="object-contain" />
                    </div>
                    <div className="absolute w-[95px] h-[85px] bottom-[-20px] left-[-75px] z-30 pointer-events-none transition-all duration-500" style={{ opacity: isCenter ? 1 : 0, transform: isCenter ? 'scale(1)' : 'scale(0.2)', transitionDelay: isCenter ? '0.15s' : '0s' }}>
                      <Image unoptimized quality={100} src="/images/new21.webp" alt="sticker" fill className="object-contain" />
                    </div>
                    <div className="absolute w-[70px] h-[65px] bottom-[-20px] right-[-52px] z-30 pointer-events-none transition-all duration-500" style={{ opacity: isCenter ? 1 : 0, transform: isCenter ? 'scale(1)' : 'scale(0.2)', transitionDelay: isCenter ? '0.2s' : '0s' }}>
                      <Image unoptimized quality={100} src="/images/new20.webp" alt="sticker" fill className="object-contain" />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Text & Controls */}
        <div className="flex flex-col items-center gap-2 w-full px-2 text-center mt-3">
          <h3
            key={`m-title-${currentIndex}`}
            ref={mobileTitleRef}
            className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[36px] sm:text-[42px] leading-tight tracking-[-0.02em] uppercase m-0 text-center"
          >
            {carouselData[currentIndex].title}
          </h3>

          <div className="flex items-center justify-center gap-2.5">
            <span className="text-[#FF0E97] font-bold text-[22px] tracking-tight">
              {carouselData[currentIndex].salePrice}
            </span>
            <span className="line-through text-[#737373] text-[18px] font-normal">
              {carouselData[currentIndex].originalPrice}
            </span>
          </div>

          <div className="relative w-full max-w-[390px] flex items-center justify-center px-12 min-h-0 my-2">
            <button
              onClick={handlePrev}
              className="absolute left-[4px] top-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 active:scale-95 transition-transform outline-none z-10"
              aria-label="Previous product"
            >
              <Image unoptimized src="/images/buttonl.svg" width={42} height={42} alt="prev" className="w-[42px] h-[42px]" />
            </button>

            <p
              key={`m-sub-${currentIndex}`}
              ref={mobileSubRef}
              className="text-[#C8C8C8] font-['Inter',_sans-serif] font-normal text-[14px] text-center m-0 leading-[1.5] max-w-[270px] sm:max-w-[300px]"
            >
              {carouselData[currentIndex].subtitle}
            </p>

            <button
              onClick={handleNext}
              className="absolute right-[4px] top-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 active:scale-95 transition-transform outline-none z-10"
              aria-label="Next product"
            >
              <Image unoptimized src="/images/button r.svg" width={42} height={42} alt="next" className="w-[42px] h-[42px]" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 mt-3 w-full max-w-[280px]">
            <a
              href={(carouselData[currentIndex] as any).link || "https://shop.nazrco.in"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleProductClick}
              className="w-full flex items-center justify-center text-[#FFF1EB] bg-[#FF0E97] hover:bg-[#E00A85] px-5 py-3 rounded-[6px] text-[14px] font-medium tracking-wide shadow-sm active:scale-95 transition-all whitespace-nowrap cursor-pointer"
            >
              Shop {carouselData[currentIndex].title}
            </a>

            <Link
              href="/shop"
              className="w-full flex items-center justify-center text-[#FFF1EB] bg-[#161616] border border-[#404040] hover:border-white px-5 py-3 rounded-[6px] text-[14px] font-medium tracking-wide active:scale-95 transition-all whitespace-nowrap cursor-pointer"
            >
              See all tools
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
