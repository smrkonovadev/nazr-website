"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "1) ON ME SPRAY",
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
      if (rowRef.current) {
        const rowWidth = rowRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const paddingLeft = viewportWidth < 768 ? 16 : 40;
        const translation = Math.max(0, rowWidth - viewportWidth + paddingLeft);
        setXTranslation(translation);
      }
    };

    calculateTranslation();
    window.addEventListener("resize", calculateTranslation);
    return () => window.removeEventListener("resize", calculateTranslation);
  }, []);

  // Track the vertical scroll progress of this section's track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll progress to negative horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], [0, -xTranslation]);

  return (
    <section ref={containerRef} className="w-full bg-[#161616] relative z-50 h-[200vh] max-md:h-[250vh]">
      {/* Sticky container that keeps items pinned while we scroll through the track */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center w-full">
        {/* Horizontal scroll container */}
        <div className="w-full px-4 md:px-[40px]">
          <motion.div
            ref={rowRef}
            className="flex gap-6 pr-4 md:pr-[40px]"
            style={{ 
              width: "max-content", 
              paddingBottom: "1px",
              x
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className={`shrink-0 w-[85vw] md:w-[542px] h-[361px] md:h-[556px] rounded-[16px] overflow-hidden relative group ${card.bgColor}`}
              >
                {/* Card Header Overlay */}
                <div className="absolute top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-start z-20 pointer-events-none">
                  <h3 className="m-0 text-white font-[family-name:var(--font-bebas)] text-[26px] md:text-[34px] leading-[100%] tracking-normal uppercase drop-shadow-sm max-w-[65%] mt-1">
                    {renderTitle(card.title)}
                  </h3>

                  <button className="bg-[#FFF9EB] hover:bg-[#f5ead0] transition-colors text-[#161616] font-normal text-[13px] leading-[150%] px-4 md:px-5 py-2 rounded-[3px] shadow-md whitespace-nowrap pointer-events-auto" style={{ fontFamily: "Roboto, sans-serif" }}>
                    Show now
                  </button>
                </div>

                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={`z-10 transition-transform duration-500 ease-out ${card.id === 1 ? 'object-cover group-hover:scale-105' : 'object-contain scale-[0.8] group-hover:scale-[0.85]'}`}
                  sizes="(max-width: 768px) 85vw, 650px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
