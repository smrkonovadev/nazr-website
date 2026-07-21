"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "1) ON ME",
    description: "Designed to stay within reach when seconds matter. Glow-in-the-dark for visibility. Built to be carried, not forgotten.",
    image: "/images/STACK1.svg",
  },
  {
    id: 2,
    title: "2) SIP CHECK",
    description: "Designed to protect what you're drinking.Creates a barrier over your drink when it matters. Built for nights out, travel, and everything in between.",
    image: "/images/STACK2.svg",
  },
];

export function AboutFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="product-features-section" className="w-full bg-[#FFF1EB] pt-6 pb-12 md:pt-10 md:pb-16 relative">

      {/* Top Heading Marquee */}
      <div className="w-full mb-2 md:mb-3 overflow-hidden relative flex flex-col justify-center bg-[#FFF1EB] py-1">
        <div className="flex w-max animate-marquee-reverse">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-8 px-2 md:px-4 shrink-0">
              <h2
                className="font-[family-name:var(--font-bebas)] text-black m-0 whitespace-nowrap"
                style={{
                  fontWeight: 400,
                  fontSize: "clamp(72px, 10vw, 160px)",
                  lineHeight: "90%",
                  letterSpacing: "-0.03em",
                }}
              >
                Main Character Security
              </h2>

              <div className="w-[60px] md:w-[100px] lg:w-[150px] shrink-0">
                <Image
                  src="/images/logosvg.svg"
                  alt="Owl Logo"
                  width={150}
                  height={150}
                  className="w-full h-auto object-contain brightness-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Stacked List Container */}
      <div ref={containerRef} className="w-full max-w-[1200px] mx-auto px-4 md:px-8 max-md:pb-0 md:pb-[12vh] relative">

        {/* Visual Layer */}
        <div className="flex flex-col items-center w-full gap-[30vh] md:gap-[40vh]">

          {cards.map((card, index) => (
            <CardItem
              key={card.id}
              card={card}
              index={index}
              cardsLength={cards.length}
              progress={scrollYProgress}
            />
          ))}

        </div>
      </div>

    </section>
  );
}

function CardItem({ card, index, cardsLength, progress }: { card: any, index: number, cardsLength: number, progress: any }) {

  // Calculate the scroll range for this specific card based on its index
  const step = 1 / (cardsLength - 0.5);
  // The first card stays sharp until the second card is 100% visible (around 0.8 progress)
  const startProgress = index === 0 ? 0.8 : index * step + 0.12;
  const endProgress = index === 0 ? 0.95 : index * step + step;

  const blurValue = useTransform(progress, [startProgress, endProgress], ["0px", "22.332666397094727px"]);
  const blurFilter = useTransform(blurValue, (v) => `blur(${v})`);
  const scale = useTransform(progress, [startProgress, endProgress], [1, 0.92]);

  const isLast = index === cardsLength - 1;

  return (
    <motion.div
      className="sticky w-full max-md:aspect-square md:aspect-[16/10] lg:aspect-[21/9] rounded-[24px] overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.4)] bg-[#161616] top-[calc(4vh+var(--index-offset))] md:top-[calc(6vh+var(--index-offset))]"
      style={{
        "--index-offset": `${index * 40}px`,
        filter: isLast ? "blur(0px)" : blurFilter,
        backdropFilter: isLast ? "blur(0px)" : blurFilter,
        scale: isLast ? 1 : scale,
        transformOrigin: "top center",
      } as React.CSSProperties | any}
    >
      {/* Background Image */}
      <Image
        src={card.image}
        alt={card.title}
        fill
        className="object-cover"
      />

      {/* Gradient Overlay for Text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20 pointer-events-auto">
        <h3 className="font-[family-name:var(--font-bebas)] text-white max-[380px]:text-[36px] text-[45px] md:text-[70px] lg:text-[90px] leading-[90%] mb-4">
          {card.title}
        </h3>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <p className="text-white/90 text-[14px] md:text-[18px] max-w-[450px] leading-relaxed font-medium">
            {card.description}
          </p>

          {/* Pink Link/Button */}
          <Link
            href={card.id === 1 ? "/shop#pepper-spray" : "/shop#sip-check"}
            style={{
              width: "145px",
              height: "40px",
              borderRadius: "4px",
              border: "1px solid #FF0E97",
              padding: "8px 12px",
              opacity: 1,
              backgroundColor: "#FF0E97",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              flexWrap: "nowrap",
            }}
            className="group text-[#FFF1EB] hover:bg-[#FF0E97]/90 transition-colors shadow-lg"
          >
            <Image
              src="/images/logosvg.svg"
              alt="Nazr Logo"
              width={35}
              height={24}
              className="w-0 opacity-0 group-hover:w-9 group-hover:opacity-100 group-hover:mr-2 transition-all duration-300 ease-in-out object-contain invert brightness-0 shrink-0"
            />
            <span className="font-['Roboto',_sans-serif] text-[16px] leading-[150%] tracking-normal whitespace-nowrap flex-shrink-0">Shop Now</span>
          </Link>
        </div>
      </div>

    </motion.div>
  );
}
