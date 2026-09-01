"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "1) ON ME SPRAY",
    bgImage: "/images/PINKGRADPRO.svg",
    image: "/images/my-new-spray.webp",
    borderColor: "border-[#EC008C]",
  },
  {
    id: 2,
    title: "2) SIP CHECK STICKERS",
    bgImage: "/images/PURPLEGRADPRO.svg",
    image: "/images/productsip.webp",
    borderColor: "border-[#4338CA]",
  },
  {
    id: 3,
    title: "3) BUNDLE PACK",
    bgImage: "/images/PINKGRADPRO.svg",
    image: "/images/product365.webp",
    borderColor: "border-[#EC008C]",
  }
];

export function ProductCardsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [xTranslation, setXTranslation] = useState(0);

  const renderTitle = (title: string) => {
    const match = title.match(/^(\d+\))(.*)$/);
    if (match) {
      return (
        <>
          <span className="font-semibold mr-1" style={{ fontFamily: 'sans-serif' }}>{match[1]}</span>
          {match[2]}
        </>
      );
    }
    return title;
  };

  // Measure the total horizontal scrollable distance dynamically (accounting for padding)
  useEffect(() => {
    const calculateTranslation = () => {
      if (rowRef.current && rowRef.current.parentElement) {
        const rowWidth = rowRef.current.scrollWidth;
        const parentWidth = rowRef.current.parentElement.offsetWidth;
        // Add 40px right padding so the last card doesn't touch the screen edge
        const translation = Math.max(0, rowWidth - parentWidth + 40);
        setXTranslation(translation);
      }
    };

    calculateTranslation();

    // Polling calculations to handle dynamic rendering of media and scaling adjustments
    const timer = setTimeout(calculateTranslation, 150);
    const interval = setInterval(calculateTranslation, 500);

    window.addEventListener("resize", calculateTranslation);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      window.removeEventListener("resize", calculateTranslation);
    };
  }, []);

  const scrollYProgress = useMotionValue(0);

  // Track scroll progress within this section dynamically (zoom-safe for scaling)
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();

        // Calculate progress from top of container entering top of viewport to bottom of container leaving bottom of viewport
        const startScroll = rect.top;
        const scrollRange = rect.height - window.innerHeight;

        if (scrollRange > 0) {
          const progress = -startScroll / scrollRange;
          scrollYProgress.set(Math.max(0, Math.min(1, progress)));
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    const timer = setTimeout(handleScroll, 200);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollYProgress]);

  // Map vertical scroll progress to negative horizontal translation
  const x = useTransform(scrollYProgress, [0.05, 0.85], [0, -xTranslation], { clamp: true });

  const isSticky = xTranslation > 0;

  return (
    <section ref={containerRef} className={`w-full bg-[#161616] relative z-50 ${isSticky ? 'h-[260vh]' : 'h-auto pb-[60px]'} max-md:h-auto max-md:pb-[60px]`}>

      {/* Desktop view only: horizontal pin scroll with Header pinned inside */}
      <div className={`hidden md:block ${isSticky ? 'sticky top-0 h-screen overflow-hidden' : 'relative h-auto overflow-visible'} pt-3 pb-3 w-full flex flex-col justify-between bg-[#161616]`}>
        
        {/* Header inside the sticky pin container */}
        <div className="w-full flex flex-col items-center text-center px-4 mb-2 md:mb-3">
          <h2
            className="m-0 text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[48px] md:text-[90px] lg:text-[110px] xl:text-[120px] leading-[88%] tracking-[-0.03em] uppercase text-center w-full"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "88%",
              letterSpacing: "-0.03em",
              color: "#FFF9EB",
            }}
          >
            OUR PRODUCTS
          </h2>

          <p 
            className="m-0 text-[#FFF9EB] font-normal text-[14px] md:text-[16px] xl:text-[20px] leading-[135%] tracking-[-0.03em] text-center max-w-[840px] w-full mt-1.5 md:mt-2" 
            style={{
              fontFamily: "Inter, var(--font-inter), sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "135%",
              letterSpacing: "-0.03em",
              color: "#FFF9EB",
            }}
          >
            Everything in the Nazr ecosystem is built with the one idea that protection fits into your life, not the other way around. Thoughtfully designed. Quietly powerful. Always within reach.
          </p>
        </div>

        {/* Horizontal scroll container with viewport-aware card height to fit any screen height without cutoff */}
        <div className="w-full px-[40px] pb-2 flex-1 flex items-center">
          <motion.div
            ref={rowRef}
            className="flex gap-[28px] pr-[40px]"
            style={{
              width: "max-content",
              paddingBottom: "1px",
              x: isSticky ? x : 0
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className={`shrink-0 rounded-[16px] overflow-hidden relative group border-[5px] ${card.borderColor}`}
                style={{
                  height: "min(556px, calc(100vh - 200px))",
                  width: "calc(min(556px, calc(100vh - 200px)) * (542 / 556))",
                  maxHeight: "556px",
                  maxWidth: "542px",
                  borderRadius: "16px",
                  borderWidth: "5px",
                }}
              >
                {/* Gradient SVG Background */}
                <img
                  src={card.bgImage}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover object-center z-0"
                />

                {/* Card Header Overlay */}
                <div className="absolute top-0 left-0 right-0 p-6 lg:p-8 flex justify-between items-start gap-[24px] z-20 pointer-events-none">
                  <h3
                    className="m-0 text-[#FFF9EB] uppercase drop-shadow-sm max-w-[65%] mt-1"
                    style={{
                      fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "32px",
                      lineHeight: "140%",
                      letterSpacing: "0%",
                      color: "#FFF9EB",
                    }}
                  >
                    {renderTitle(card.title)}
                  </h3>

                  <button
                    className="shrink-0 flex items-center justify-center bg-[#FFFDF0] hover:bg-[#f5ead0] transition-colors text-[#161616] font-normal text-[14px] leading-[150%] rounded-[4px] shadow-sm whitespace-nowrap pointer-events-auto cursor-pointer"
                    style={{
                      width: "111px",
                      height: "40px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Shop now
                  </button>
                </div>

                {/* Product Image on Pedestal */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={`z-10 transition-transform duration-500 ease-out ${
                    card.id === 1
                      ? 'object-contain scale-[0.92] group-hover:scale-[0.97] translate-y-2'
                      : card.id === 2
                      ? 'object-contain scale-[1.25] group-hover:scale-[1.30] translate-y-3'
                      : 'object-contain scale-[1.05] group-hover:scale-[1.10] translate-y-2'
                  }`}
                  sizes="542px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile view only: Header + horizontal scroll track */}
      <div className="block md:hidden w-full pt-6 pb-8 overflow-hidden bg-[#161616]">
        {/* Mobile Header */}
        <div className="w-full flex flex-col items-center text-center px-4 mb-5">
          <h2
            className="m-0 text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[44px] leading-[90%] tracking-[-0.03em] uppercase text-center w-full"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "90%",
              letterSpacing: "-0.03em",
              color: "#FFF9EB",
            }}
          >
            OUR PRODUCTS
          </h2>

          <p 
            className="m-0 text-[#FFF9EB] font-normal text-[15px] leading-[140%] tracking-[-0.03em] text-center max-w-[840px] w-full mt-[8px]" 
            style={{
              fontFamily: "Inter, var(--font-inter), sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "140%",
              letterSpacing: "-0.03em",
              color: "#FFF9EB",
            }}
          >
            Everything in the Nazr ecosystem is built with the one idea that protection fits into your life, not the other way around. Thoughtfully designed. Quietly powerful. Always within reach.
          </p>
        </div>

        {/* Mobile Cards Track */}
        <div className="w-full overflow-x-auto no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex flex-row gap-4 px-4 w-max">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`shrink-0 w-[320px] min-w-[320px] h-[340px] rounded-[16px] overflow-hidden relative group border-[4px] ${card.borderColor}`}
                style={{ opacity: 1, transform: "rotate(0deg)" }}
              >
                {/* Gradient SVG Background */}
                <img
                  src={card.bgImage}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover object-center z-0"
                />

                {/* Card Header Overlay */}
                <div className="absolute top-0 left-0 right-0 p-5 flex justify-between items-start gap-[16px] z-20 pointer-events-none">
                  <h3
                    className="m-0 text-[#FFF9EB] uppercase drop-shadow-sm max-w-[65%] mt-1"
                    style={{
                      fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "26px",
                      lineHeight: "140%",
                      letterSpacing: "0%",
                      color: "#FFF9EB",
                    }}
                  >
                    {renderTitle(card.title)}
                  </h3>

                  <button
                    className="shrink-0 flex items-center justify-center bg-[#FFFDF0] hover:bg-[#f5ead0] transition-colors text-[#161616] font-normal text-[12px] leading-[150%] rounded-[4px] shadow-sm whitespace-nowrap pointer-events-auto cursor-pointer"
                    style={{
                      width: "95px",
                      height: "36px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Shop now
                  </button>
                </div>

                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={`z-10 transition-transform duration-500 ease-out ${
                    card.id === 1
                      ? 'object-contain scale-[0.86] translate-y-6'
                      : card.id === 2
                      ? 'object-contain scale-[1.08] translate-y-6'
                      : 'object-contain scale-[0.96] translate-y-6'
                  }`}
                  sizes="320px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
