"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "1) ON ME SPRAY",
    image: "/images/my-new-spray.webp",
    borderColor: "border-[#EC008C]",
  },
  {
    id: 2,
    title: "2] ANTI DRINK SPIKE STICKERS",
    image: "/images/productsip.webp",
    borderColor: "border-[#4338CA]",
  },
  {
    id: 3,
    title: "3] BUNDLE PACK",
    image: "/images/product365.webp",
    borderColor: "border-[#EC008C]",
  }
];

export function ProductCardsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [xTranslation, setXTranslation] = useState(0);

  const renderTitle = (title: string) => {
    const match = title.match(/^(\d+[)\]])(.*)$/);
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
        // Add 24px right padding so the last card doesn't touch the screen edge
        const translation = Math.max(0, rowWidth - parentWidth + 24);
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

  // Map vertical scroll progress to negative horizontal translation, completing at 75% scroll to prevent unpinning lag under high zoom
  const x = useTransform(scrollYProgress, [0, 0.75], [0, -xTranslation], { clamp: true });

  const isSticky = xTranslation > 0;

  return (
    <section ref={containerRef} className={`w-full bg-[#161616] relative z-50 ${isSticky ? 'h-[200vh]' : 'h-auto pb-[90px]'} max-md:h-auto max-md:pb-[90px]`}>

      {/* Desktop view only: horizontal pin scroll */}
      <div className={`hidden md:block ${isSticky ? 'sticky top-0 h-screen overflow-hidden' : 'relative h-auto overflow-visible'} pt-[60px] w-full`}>
        {/* Horizontal scroll container */}
        <div className="w-full px-[40px]">
          <motion.div
            ref={rowRef}
            className="flex gap-6 pr-[40px]"
            style={{
              width: "max-content",
              paddingBottom: "1px",
              x: isSticky ? x : 0
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className={`shrink-0 w-[calc(min(556px,72vh)*0.97)] h-[min(556px,72vh)] rounded-[24px] overflow-hidden relative group bg-[#111111] border-[3.5px] ${card.borderColor}`}
              >
                {/* Card Header Overlay */}
                <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-start z-20 pointer-events-none">
                  <h3 className="m-0 text-white font-[family-name:var(--font-bebas)] text-[34px] leading-[100%] tracking-normal uppercase drop-shadow-sm max-w-[65%] mt-1">
                    {renderTitle(card.title)}
                  </h3>

                  <button className="bg-[#FFFDF0] hover:bg-[#f5ead0] transition-colors text-[#161616] font-normal text-[14px] leading-[150%] px-5 py-2 rounded-[4px] shadow-md whitespace-nowrap pointer-events-auto" style={{ fontFamily: "Inter, sans-serif" }}>
                    Shop now
                  </button>
                </div>

                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={`z-10 transition-transform duration-500 ease-out ${card.id === 1 ? 'object-contain scale-[0.92] group-hover:scale-[0.97]' : 'object-contain scale-[0.82] group-hover:scale-[0.87]'}`}
                  sizes="650px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile view only: horizontal scroll track */}
      <div className="block md:hidden w-full pt-4 pb-8 overflow-x-auto no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex flex-row gap-4 px-4 w-max">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`shrink-0 w-[330px] min-w-[330px] h-[350px] rounded-[18px] overflow-hidden relative group bg-[#111111] border-[3px] ${card.borderColor}`}
              style={{ opacity: 1, transform: "rotate(0deg)" }}
            >
              {/* Card Header Overlay */}
              <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-20 pointer-events-none">
                <h3 className="m-0 text-white font-[family-name:var(--font-bebas)] text-[26px] leading-[100%] tracking-normal uppercase drop-shadow-sm max-w-[65%] mt-1">
                  {renderTitle(card.title)}
                </h3>

                <button className="bg-[#FFFDF0] hover:bg-[#f5ead0] transition-colors text-[#161616] font-normal text-[13px] leading-[150%] px-4 py-2 rounded-[4px] shadow-md whitespace-nowrap pointer-events-auto" style={{ fontFamily: "Inter, sans-serif" }}>
                  Shop now
                </button>
              </div>

              <Image
                src={card.image}
                alt={card.title}
                fill
                className={`z-10 transition-transform duration-500 ease-out ${card.id === 1 ? 'object-contain scale-[0.92] group-hover:scale-[0.97]' : 'object-contain scale-[0.82] group-hover:scale-[0.87]'}`}
                sizes="330px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 90px beige transition bar at the bottom of the scroll track */}
      <div className="absolute bottom-0 left-0 w-full h-[90px] bg-[#FFF1EB]" />
    </section>
  );
}
