"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const carouselData = [
  {
    id: "sip-check",
    image: "/images/SPICHECKPRO.svg",
    title: "sip check",
    subtitle: "An anti drink spike sticker designed to protect your drink while you stay in the moment. Seals securely to your glass, peels away with ease, and helps deter unwanted tampering."
  },
  {
    id: "pepper-spray",
    image: "/images/center.png",
    title: "ON ME PEPPER SPRAY",
    subtitle: "A compact personal safety spray designed to be there when every second counts. Doubles as a bag charm and glows in the dark for quick access in low light."
  },
  {
    id: "nazr-360",
    image: "/images/rightimg.png",
    title: "NAZR 360°",
    subtitle: "The essentials, rethought. Personal safety and drink protection in one kit designed for wherever the day, or night, takes you."
  }
];

export function SafetyDesigned() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);

  const leftIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
  const rightIndex = (currentIndex + 1) % carouselData.length;

  return (
    <section className="w-full bg-[#161616] flex justify-center py-10 md:pt-[60px] md:pb-[60px] md:px-[30px] overflow-hidden relative z-20 md:h-[1166.92px]">

      {/* Desktop Master Wrapper */}
      <div className="hidden md:block w-full max-w-[1220px] relative h-[1046.92px]">

        {/* Title Block */}
        <div className="absolute flex flex-col items-center gap-[32px]" style={{ width: "610px", height: "236px", top: 0, left: "305px" }}>
          <h2 className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] text-center m-0 w-full" style={{ fontSize: "100px", lineHeight: "0.9", letterSpacing: "-0.03em", height: "161px" }}>
            SAFETY, DESIGNED TO<br /> GO WITH YOU.
          </h2>
          <p className="text-[#FFF9EB] font-['Inter',_sans-serif] text-center m-0 w-full" style={{ fontSize: "20px", lineHeight: "1.4", letterSpacing: "-0.03em", height: "43px", maxWidth: "608px" }}>
            A growing range of smart safety products designed to work alongside the NAZR app, providing additional ways to stay prepared, connected, and supported.
          </p>

          {/* Badges positioned relative to the title block for exactness */}
          <div className="absolute flex items-center justify-center z-10" style={{ width: "222px", height: "222px", top: "10px", left: "-190px" }}>
            <Image src="/images/new29.svg" alt="Safety Sticker" fill className="object-contain relative z-10 hover:animate-[spin_4s_linear_infinite]" />
          </div>
          <div className="absolute z-10" style={{ width: "241.23px", height: "159.03px", top: "-70px", left: "550px", transform: "rotate(5.94deg)" }}>
            <Image src="/images/new30.svg" alt="Fact Oval" fill className="object-contain" />
          </div>
        </div>

        {/* Carousel Images */}
        {carouselData.map((item, index) => {
          let pos = 'right';
          if (index === currentIndex) pos = 'center';
          else if (index === leftIndex) pos = 'left';
          else if (index === rightIndex) pos = 'right';

          const isCenter = pos === 'center';
          const isLeft = pos === 'left';
          const isRight = pos === 'right';

          return (
            <motion.div
              key={item.id}
              className="absolute rounded-[23.5px] flex items-center justify-center"
              initial={false}
              animate={{
                width: isCenter
                  ? (item.id === "sip-check" ? 278.75 : 363.30)
                  : (isLeft ? 250.69 : 249.71),
                height: isCenter
                  ? (item.id === "sip-check" ? 326.53 : 499.42)
                  : 344.69,
                top: isCenter
                  ? (item.id === "sip-check" ? 362.45 : 276)
                  : 381.76,
                left: isCenter
                  ? (item.id === "sip-check" ? 472.09 : 429.81)
                  : (isLeft ? 104.7 : 865.59),
                opacity: isCenter ? 1 : 0.6,
                zIndex: isCenter ? 20 : 10
              }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
                initial={false}
                animate={{
                  scale: isCenter ? 1 : 1.2,
                  originX: isLeft ? 1 : (isRight ? 0 : 0.5)
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              />
            </motion.div>
          );
        })}

        {/* Floating Icons (Visible only for pepper-spray, index 1) */}
        <FloatingIcon src="/images/new9.svg" visible={currentIndex === 1} width="191.41px" height="169.84px" top="276px" left="317.02px" delay={0.0} />
        <FloatingIcon src="/images/new10.svg" visible={currentIndex === 1} width="70.26px" height="48.17px" top="304.4px" left="665.82px" rotate={-30} delay={0.05} />
        <FloatingIcon src="/images/new11.svg" visible={currentIndex === 1} width="170px" height="186px" top="460px" left="390px" rotate={36.59} delay={0.1} />
        <FloatingIcon src="/images/new12.svg" visible={currentIndex === 1} width="91.95px" height="90.19px" top="466.96px" left="678.55px" rotate={-60} delay={0.15} />

        {/* Floating Icons (Visible only for sip-check, index 0) */}
        <FloatingIcon src="/images/new14.svg" visible={currentIndex === 0} width="191.41px" height="169.84px" top="276px" left="387.02px" delay={0.0} />
        <FloatingIcon src="/images/new15.svg" visible={currentIndex === 0} width="80.26px" height="70.17px" top="444.4px" left="745.82px" rotate={-30} delay={0.05} />
        <FloatingIcon src="/images/new17.svg" visible={currentIndex === 0} width="112.46px" height="110.13px" top="600.29px" left="436.67px" rotate={10.59} delay={0.1} />
        <FloatingIcon src="/images/new16.svg" visible={currentIndex === 0} width="130.95px" height="110.19px" top="610px" left="678.55px" rotate={-60} delay={0.15} />

        {/* Floating Icons (Visible only for nazr-360, index 2) */}
        <FloatingIcon src="/images/new18.svg" visible={currentIndex === 2} width="231.41px" height="269.84px" top="276px" left="387.02px" delay={0.0} />
        <FloatingIcon src="/images/new19.svg" visible={currentIndex === 2} width="190.26px" height="200.17px" top="250.4px" left="685.82px" rotate={-15} delay={0.05} />
        <FloatingIcon src="/images/new21.svg" visible={currentIndex === 2} width="292.46px" height="210.13px" top="600.29px" left="266.67px" rotate={10.59} delay={0.1} />
        <FloatingIcon src="/images/new20.svg" visible={currentIndex === 2} width="130.95px" height="110.19px" top="610px" left="758.55px" rotate={0} delay={0.15} />

        {/* Arrows */}
        <button onClick={handlePrev} className="absolute z-40 hover:scale-105 transition-transform" style={{ width: "97.92px", height: "66.93px", top: "810px", left: "257.13px" }}>
          <Image src="/images/arl.svg" fill className="object-contain" alt="prev" />
        </button>
        <button onClick={handleNext} className="absolute z-40 hover:scale-105 transition-transform" style={{ width: "97.92px", height: "66.93px", top: "810px", left: "868.08px" }}>
          <Image src="/images/arr.svg" fill className="object-contain" alt="next" />
        </button>

        {/* Text & Button Block */}
        <div className="absolute flex flex-col items-center justify-start" style={{ width: "464.85px", height: "auto", top: "710px", left: "378.22px", paddingTop: "15.67px", paddingBottom: "15.67px", gap: "24px" }}>
          <div className="flex flex-col items-center w-full" style={{ gap: "12px" }}>
            <h3 className="text-[#FFF9EB] m-0 text-center uppercase" style={{ fontFamily: "var(--font-bebas)", fontSize: "41.67px", lineHeight: "1.5", width: "100%" }}>
              {carouselData[currentIndex].title}
            </h3>
            <p className="text-[#FFF9EB] m-0 text-center" style={{ fontFamily: "Inter, sans-serif", fontSize: "20.83px", lineHeight: "1.4", letterSpacing: "-0.03em" }}>
              {carouselData[currentIndex].subtitle}
            </p>
          </div>

          <button className="flex items-center justify-center text-[#FFF1EB] bg-[#FF0E97] hover:bg-[#E00A85] transition-colors" style={{ width: "156px", height: "44px", borderRadius: "3.92px", border: "0.98px solid #FF0E97", marginTop: "8px" }}>
            <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "16px", lineHeight: "1.5" }}>Get Yours</span>
          </button>
        </div>

      </div>

      {/* Mobile Fallback Wrapper (Visible only on small screens) */}
      <div className="md:hidden w-full flex flex-col items-center gap-12 relative px-4">
        {/* Title Block */}
        <div className="flex flex-col items-center gap-6 w-full relative">
          <h2 className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] text-[46px] text-center m-0 leading-[0.9]">
            SAFETY, DESIGNED TO<br /> GO WITH YOU.
          </h2>
          <p className="text-[#FFF9EB] font-['Inter',_sans-serif] text-[18px] text-center m-0 max-w-[340px] leading-[1.4]">
            A growing range of smart safety products designed to work alongside the NAZR app, providing additional ways to stay prepared, connected, and supported.
          </p>
        </div>

        {/* Carousel Display */}
        <div className="w-full relative h-[400px] flex justify-center items-center">
          <img src={carouselData[currentIndex].image} alt="Product" className="w-full h-[90%] object-contain" />
        </div>

        {/* Text & Controls */}
        <div className="flex flex-col items-center gap-6 w-full">
          <h3 className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] text-[32px] m-0 text-center uppercase">
            {carouselData[currentIndex].title}
          </h3>
          <p className="text-[#FFF9EB] font-['Inter',_sans-serif] text-[16px] text-center m-0 min-h-[100px]">
            {carouselData[currentIndex].subtitle}
          </p>

          <button className="flex items-center justify-center text-[#FFF1EB] bg-[#FF0E97] w-full max-w-[180px] h-[44px] rounded-[4px]">
            <span className="font-['Roboto',_sans-serif] text-[16px]">Get Yours</span>
          </button>

          <div className="flex items-center gap-8 mt-4">
            <button onClick={handlePrev} className="w-[60px] h-[40px] relative">
              <Image src="/images/pinkleft.png" fill className="object-contain" alt="prev" />
            </button>
            <button onClick={handleNext} className="w-[60px] h-[40px] relative transform rotate-180">
              <Image src="/images/pinkleft.png" fill className="object-contain" alt="next" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}

function FloatingIcon({
  src,
  visible,
  width,
  height,
  top,
  left,
  rotate = 0,
  delay = 0
}: {
  src: string;
  visible: boolean;
  width: string;
  height: string;
  top: string;
  left: string;
  rotate?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className="absolute z-30 pointer-events-none"
      style={{ width, height, top, left }}
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.3,
        rotate: rotate
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: visible ? delay : 0,
        opacity: { duration: 0.3, delay: visible ? delay : 0 }
      }}
    >
      <Image src={src} fill className="object-contain" alt="" />
    </motion.div>
  );
}
