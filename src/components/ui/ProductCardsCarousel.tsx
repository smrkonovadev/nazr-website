"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "1) ON ME PEPPER SPRAY",
    image: "/images/pinkimg.png",
    bgColor: "bg-[#F80090]"
  },
  {
    id: 2,
    title: "2) SIP CHECK STICKERS",
    image: "/images/productsip.svg",
    bgColor: "bg-[#403890]"
  },
  {
    id: 3,
    title: "3) NAZR 360°",
    image: "/images/product365.svg",
    bgColor: "bg-[#F80090]"
  }
];

export function ProductCardsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [xTranslation, setXTranslation] = useState(0);

  const renderTitle = (title: string) => {
    const match = title.match(/^(\d+)\)(.*)$/);
    if (match) {
      return (
        <>
          <span className="font-semibold mr-1" style={{ fontFamily: 'sans-serif' }}>{match[1]})</span>
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
        const paddingLeft = window.innerWidth < 768 ? 16 : 40;
        // Add 40px extra scroll padding to ensure the final card is fully visible under scaling/zoom
        const translation = Math.max(0, rowWidth - parentWidth + paddingLeft);
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
                className={`shrink-0 w-[352px] min-w-[351.91px] h-[361px] rounded-[10.39px] overflow-hidden relative group ${card.bgColor}`}
              >
                {/* Card Header Overlay */}
                <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-start z-20 pointer-events-none">
                  <h3 className="m-0 text-white font-[family-name:var(--font-bebas)] text-[34px] leading-[100%] tracking-normal uppercase drop-shadow-sm max-w-[65%] mt-1">
                    {renderTitle(card.title)}
                  </h3>

                  <button 
                    className="bg-[#FFF9EB] hover:bg-[#f5ead0] transition-colors text-[#161616] font-normal text-[13px] leading-[150%] flex items-center justify-center shadow-md whitespace-nowrap pointer-events-auto shrink-0 border-none outline-none" 
                    style={{ 
                      width: "99.97px",
                      height: "34.39px",
                      padding: "5.19px 12.99px",
                      gap: "5.19px",
                      borderRadius: "2.6px",
                      border: "none",
                      fontFamily: "Roboto, sans-serif" 
                    }}
                  >
                    Show now
                  </button>
                </div>

                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={`z-10 transition-transform duration-500 ease-out ${card.id === 1 ? 'object-cover group-hover:scale-105' : 'object-contain scale-[0.8] group-hover:scale-[0.85]'}`}
                  sizes="650px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile view only: horizontal swipe carousel */}
      <div className="block md:hidden w-full overflow-x-auto snap-x snap-mandatory px-4 pt-4 pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-4 w-max">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`snap-center shrink-0 w-[352px] min-w-[351.91px] h-[361px] rounded-[10.39px] overflow-hidden relative group ${card.bgColor}`}
            >
              {/* Card Header Overlay */}
              <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-20 pointer-events-none">
                <h3 className="m-0 text-white font-[family-name:var(--font-bebas)] text-[26px] leading-[100%] tracking-normal uppercase drop-shadow-sm max-w-[65%] mt-1">
                  {renderTitle(card.title)}
                </h3>

                <button 
                  className="bg-[#FFF9EB] hover:bg-[#f5ead0] transition-colors text-[#161616] font-normal text-[13px] leading-[150%] flex items-center justify-center shadow-md whitespace-nowrap pointer-events-auto shrink-0 border-none outline-none" 
                  style={{ 
                    width: "99.97px",
                    height: "34.39px",
                    padding: "5.19px 12.99px",
                    gap: "5.19px",
                    borderRadius: "2.6px",
                    border: "none",
                    fontFamily: "Roboto, sans-serif" 
                  }}
                >
                  Show now
                </button>
              </div>

              <Image
                src={card.image}
                alt={card.title}
                fill
                className={`z-10 transition-transform duration-500 ease-out ${card.id === 1 ? 'object-cover group-hover:scale-105' : 'object-contain scale-[0.8] group-hover:scale-[0.85]'}`}
                sizes="340px"
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
