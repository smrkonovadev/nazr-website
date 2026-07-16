"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

const cards = [
  {
    id: 1,
    title: "1] ON ME PEPPER SPRAY",
    image: "/images/pinkimg.png",
    bgColor: "bg-[#F80090]"
  },
  {
    id: 2,
    title: "2] SIP CHECK STICKERS",
    image: "/images/blueimg.png",
    bgColor: "bg-[#0E8DFF]"
  },
  {
    id: 3,
    title: "3] Nazr 360",
    image: "/images/pinkimg.png",
    bgColor: "bg-[#F80090]"
  }
];

export function ProductCardsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const isScrollable = el.scrollWidth > el.clientWidth;
      if (!isScrollable || e.deltaY === 0) return;

      const maxScrollLeft = el.scrollWidth - el.clientWidth;

      // If scrolling down (deltaY > 0) and we can still scroll right
      if (e.deltaY > 0 && el.scrollLeft < maxScrollLeft - 1) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.5; // Multiply for slightly faster scroll
      }
      // If scrolling up (deltaY < 0) and we can still scroll left
      else if (e.deltaY < 0 && el.scrollLeft > 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.5;
      }
    };

    // Use passive: false so we can preventDefault() when needed
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <section className="w-full bg-[#161616] pb-16 md:pb-32 relative z-50 overflow-hidden flex flex-col items-center">
      {/* ======================= */}
      {/* MOBILE LAYOUT (Stacked) */}
      {/* ======================= */}
      <div
        className="flex md:hidden flex-col items-center gap-6 w-full px-4 mb-8"
        style={{ zoom: "min(1, calc(100vw / 390))" } as React.CSSProperties}
      >
        {cards.map((card, index) => (
          <div
            key={`mobile-${index}`}
            className={`shrink-0 w-[352px] h-[361px] rounded-[16px] overflow-hidden relative group ${card.bgColor}`}
          >
            {/* Card Header Overlay */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-20 pointer-events-none">
              <h3 className="m-0 text-white font-[family-name:var(--font-bebas)] text-[26px] leading-[100%] tracking-normal uppercase drop-shadow-sm max-w-[65%] mt-1">
                {card.title}
              </h3>

              <button className="bg-[#FFF9EB] hover:bg-[#f5ead0] transition-colors text-[#161616] font-normal text-[13px] leading-[150%] px-4 py-2 rounded-[3px] shadow-md whitespace-nowrap pointer-events-auto" style={{ fontFamily: "Roboto, sans-serif" }}>
                Show now
              </button>
            </div>

            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover z-10"
              sizes="346px"
            />
          </div>
        ))}
      </div>

      {/* ======================== */}
      {/* DESKTOP LAYOUT (Carousel)*/}
      {/* ======================== */}
      <div
        ref={scrollRef}
        className="hidden md:flex w-full gap-6 overflow-x-auto px-4 md:px-12 lg:px-24 pb-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="shrink-0 w-[85vw] md:w-[542px] h-[450px] md:h-[556px] rounded-[16px] overflow-hidden relative group"
          >
            {/* Card Header Overlay */}
            <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-20 pointer-events-none">
              <h3 className="m-0 text-white font-[family-name:var(--font-bebas)] text-[30px] md:text-[34px] leading-[100%] tracking-normal uppercase drop-shadow-sm max-w-[65%] -translate-y-[10px] -translate-x-[15px]">
                {card.title}
              </h3>

              <button className="bg-[#FFF9EB] hover:bg-[#f5ead0] transition-colors text-[#161616] font-normal text-[13px] leading-[150%] px-5 py-2 rounded-[3px] shadow-md whitespace-nowrap pointer-events-auto -translate-y-[13px]" style={{ fontFamily: "Roboto, sans-serif" }}>
                Show now
              </button>
            </div>

            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover z-10"
              sizes="(max-width: 768px) 85vw, 650px"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
