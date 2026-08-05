"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const carouselData = [
  {
    id: "sip-check",
    image: "/images/productsip.webp",
    title: "sip check",
    subtitle: "A drink safety sticker that helps protect your drink. Seals securely, removes easily, and helps deter unwanted tampering.",
    mobileSubtitle: "A drink safety sticker that helps protect your drink. Seals securely, removes easily, and helps deter unwanted tampering."
  },
  {
    id: "pepper-spray",
    image: "/images/center.webp",
    title: "ON ME SPRAY",
    subtitle: "A compact personal safety spray that stays within reach, glows in the dark, and doubles as a bag charm for everyday carry.",
    mobileSubtitle: "A compact personal safety spray that stays within reach, glows in the dark, and doubles as a bag charm for everyday carry."
  },
  {
    id: "nazr-360",
    image: "/images/NAZR360.webp",
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
    <section className="w-full bg-[#161616] flex justify-center pt-8 pb-4 md:pt-[60px] md:pb-[10px] md:px-[30px] overflow-hidden relative z-20 md:h-[950px]">

      {/* Desktop Master Wrapper */}
      <div className="hidden md:block w-full max-w-[1220px] relative h-[940px]">
        {/* Title Block */}
        <div className="absolute flex flex-col items-center gap-[32px]" style={{ width: "610px", height: "236px", top: 0, left: "305px" }}>
          <h2 className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[80px] leading-[0.9] tracking-[-0.03em] text-center m-0 w-full">
            SAFETY, DESIGNED TO<br /> GO WITH YOU.
          </h2>
          <p className="text-[#FFF9EB] font-[family-name:var(--font-inter)] font-normal text-[18px] leading-[1.4] tracking-[-0.03em] text-center m-0 w-full max-w-[608px]">
            Smart safety products designed to work with the NAZR app, helping you stay prepared, connected, and supported.
          </p>

          {/* Badges positioned relative to the title block for exactness */}
          <div className="absolute flex items-center justify-center z-10" style={{ width: "222px", height: "222px", top: "10px", left: "-190px" }}>
            <Image unoptimized quality={100} src="/images/new29.webp" alt="Safety Sticker" fill className="object-contain relative z-10 hover:animate-[spin_4s_linear_infinite]" />
          </div>
          <div className="absolute z-10" style={{ width: "241.23px", height: "159.03px", top: "-70px", left: "550px", transform: "rotate(5.94deg)" }}>
            <Image unoptimized quality={100} src="/images/new30.webp" alt="Fact Oval" fill className="object-contain" />
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
                  scale: isCenter ? 1 : (item.id === "nazr-360" ? 0.9 : 1.2),
                  originX: isLeft ? 1 : (isRight ? 0 : 0.5)
                }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              />
            </motion.div>
          );
        })}

        {/* Floating Icons (Visible only for pepper-spray, index 1) */}
        <FloatingIcon src="/images/new9.webp" visible={currentIndex === 1} width="191.41px" height="169.84px" top="260px" left="310px" delay={0.0} />
        <FloatingIcon src="/images/new10.webp" visible={currentIndex === 1} width="70.26px" height="48.17px" top="290px" left="670px" rotate={-30} delay={0.05} />
        <FloatingIcon src="/images/new11.webp" visible={currentIndex === 1} width="170px" height="186px" top="460px" left="385px" rotate={36.59} delay={0.1} />
        <FloatingIcon src="/images/new12.webp" visible={currentIndex === 1} width="91.95px" height="90.19px" top="470px" left="680px" rotate={-60} delay={0.15} />

        {/* Floating Icons (Visible only for sip-check, index 0) */}
        <FloatingIcon src="/images/new14.webp" visible={currentIndex === 0} width="191.41px" height="169.84px" top="260px" left="380px" delay={0.0} />
        <FloatingIcon src="/images/new15.webp" visible={currentIndex === 0} width="80.26px" height="70.17px" top="430px" left="750px" rotate={-30} delay={0.05} />
        <FloatingIcon src="/images/new17.webp" visible={currentIndex === 0} width="112.46px" height="110.13px" top="590px" left="430px" rotate={10.59} delay={0.1} />
        <FloatingIcon src="/images/new16.webp" visible={currentIndex === 0} width="130.95px" height="110.19px" top="600px" left="680px" rotate={-60} delay={0.15} />

        {/* Floating Icons (Visible only for nazr-360, index 2) */}
        <FloatingIcon src="/images/new18.webp" visible={currentIndex === 2} width="220px" height="250px" top="240px" left="355px" delay={0.0} />
        <FloatingIcon src="/images/new19.webp" visible={currentIndex === 2} width="180px" height="190px" top="260px" left="680px" rotate={-15} delay={0.05} />
        <FloatingIcon src="/images/new21.webp" visible={currentIndex === 2} width="270px" height="195px" top="580px" left="275px" rotate={10.59} delay={0.1} />
        <FloatingIcon src="/images/new20.webp" visible={currentIndex === 2} width="120px" height="100px" top="590px" left="750px" rotate={0} delay={0.15} />

        {/* Text & Controls Block (Figma Spec) */}
        <div
          className="absolute flex flex-col items-center justify-start pointer-events-auto z-40"
          style={{ width: "640px", top: "710px", left: "50%", transform: "translateX(-50%)", gap: "16px" }}
        >
          {/* Product Title */}
          <h3 className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[36px] leading-[1.5] tracking-normal m-0 text-center uppercase">
            {carouselData[currentIndex].title}
          </h3>

          {/* Description + Side Buttons Row (Matching Figma Screenshot) */}
          <div className="w-full flex items-center justify-center gap-5">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none flex-shrink-0"
              aria-label="Previous product"
            >
              <Image unoptimized src="/images/buttonl.svg" width={40} height={40} alt="Previous" className="w-[40px] h-[40px]" />
            </button>

            {/* Description Text */}
            <p className="text-[#FFF9EB] font-['Inter',_sans-serif] font-normal text-[16px] leading-[1.4] tracking-[-0.03em] text-center m-0 max-w-[480px]">
              {carouselData[currentIndex].subtitle}
            </p>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none flex-shrink-0"
              aria-label="Next product"
            >
              <Image unoptimized src="/images/button r.svg" width={40} height={40} alt="Next" className="w-[40px] h-[40px]" />
            </button>
          </div>

          {/* Get Yours Button */}
          <button
            className="flex items-center justify-center text-[#FFF1EB] bg-[#FF0E97] hover:bg-[#E00A85] transition-colors whitespace-nowrap cursor-pointer mt-1"
            style={{
              width: "110px",
              height: "36px",
              borderRadius: "3.92px",
              paddingLeft: "20px",
              paddingRight: "20px",
              borderWidth: "0.98px",
              borderColor: "#FF0E97",
              gap: "7.83px",
            }}
          >
            <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "14px", lineHeight: "1.5" }}>Get Yours</span>
          </button>
        </div>

      </div>

      {/* Mobile Fallback Wrapper (Visible only on small screens) */}
      <div className="md:hidden w-full flex flex-col items-center gap-1 relative px-4 pb-10">
        {/* Title Block */}
        <div className="flex flex-col items-center gap-2 w-full relative">
          <h2 className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[46px] sm:text-[80px] text-center m-0 leading-[0.9] tracking-[-0.03em]">
            SAFETY, DESIGNED TO<br /> GO WITH YOU.
          </h2>
          <p className="text-[#FFF9EB] font-[family-name:var(--font-inter)] font-normal text-[16px] sm:text-[18px] text-center m-0 mb-12 sm:mb-16 max-w-[360px] sm:max-w-[420px] leading-[1.4] tracking-[-0.03em]">
            Smart safety products designed to work with<br />
            the NAZR app, helping you stay prepared,<br />
            connected, and supported.
          </p>
        </div>

        {/* Carousel Display */}
        <div className="w-full relative h-[245px] flex justify-center items-center overflow-visible my-0">
          {/* Animated Product Cards */}
          {carouselData.map((item, index) => {
            let pos = 'hidden';
            if (index === currentIndex) pos = 'center';
            else if (index === leftIndex) pos = 'left';
            else if (index === rightIndex) pos = 'right';

            const isCenter = pos === 'center';
            const isLeft = pos === 'left';
            const isRight = pos === 'right';

            return (
              <motion.div
                key={item.id}
                className="absolute flex items-center justify-center pointer-events-none"
                initial={false}
                animate={{
                  left: isCenter ? "50%" : isLeft ? "0%" : "100%",
                  x: isCenter ? "-50%" : isLeft ? "-60%" : "-40%",
                  scale: isCenter ? 1 : 0.7,
                  opacity: isCenter ? 1 : 0.6,
                  zIndex: isCenter ? 20 : 10,
                  width: isCenter ? (item.id === "nazr-360" ? "160px" : "230px") : "130px",
                  height: isCenter ? (item.id === "nazr-360" ? "170px" : "240px") : "190px"
                }}
                transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-contain" />

                {/* Pepper Spray Stickers */}
                {item.id === "pepper-spray" && (
                  <>
                    <motion.div
                      className="absolute w-[95px] h-[90px] top-[-5px] left-[-30px] z-30 pointer-events-none"
                      animate={{ opacity: isCenter ? 1 : 0, scale: isCenter ? 1 : 0.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: isCenter ? 0.05 : 0 }}
                    >
                      <Image unoptimized quality={100} src="/images/new9.webp" alt="sticker" fill className="object-contain hover:animate-[spin_4s_linear_infinite]" />
                    </motion.div>
                    <motion.div
                      className="absolute w-[85px] h-[80px] top-[-10px] right-[-25px] z-30 pointer-events-none"
                      animate={{ opacity: isCenter ? 1 : 0, scale: isCenter ? 1 : 0.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: isCenter ? 0.1 : 0 }}
                    >
                      <Image unoptimized quality={100} src="/images/new10.webp" alt="sticker" fill className="object-contain" />
                    </motion.div>
                    <motion.div
                      className="absolute w-[80px] h-[45px] bottom-[20px] left-[-30px] z-30 pointer-events-none"
                      animate={{ opacity: isCenter ? 1 : 0, scale: isCenter ? 1 : 0.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: isCenter ? 0.15 : 0 }}
                    >
                      <Image unoptimized quality={100} src="/images/new11.webp" alt="sticker" fill className="object-contain" />
                    </motion.div>
                    <motion.div
                      className="absolute w-[55px] h-[55px] bottom-[15px] right-[-25px] z-30 pointer-events-none opacity-80"
                      animate={{ opacity: isCenter ? 0.8 : 0, scale: isCenter ? 1 : 0.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: isCenter ? 0.2 : 0 }}
                    >
                      <Image unoptimized quality={100} src="/images/new12.webp" alt="sticker" fill className="object-contain" />
                    </motion.div>
                  </>
                )}

                {/* Sip Check Stickers */}
                {item.id === "sip-check" && (
                  <>
                    <motion.div
                      className="absolute w-[100px] h-[100px] top-[-15px] left-[-25px] z-30 pointer-events-none"
                      animate={{ opacity: isCenter ? 1 : 0, scale: isCenter ? 1 : 0.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: isCenter ? 0.05 : 0 }}
                    >
                      <Image unoptimized quality={100} src="/images/new14.webp" alt="sticker" fill className="object-contain" />
                    </motion.div>
                    <motion.div
                      className="absolute w-[70px] h-[65px] top-[30px] right-[-25px] z-30 pointer-events-none"
                      animate={{ opacity: isCenter ? 1 : 0, scale: isCenter ? 1 : 0.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: isCenter ? 0.1 : 0 }}
                    >
                      <Image unoptimized quality={100} src="/images/new15.webp" alt="sticker" fill className="object-contain" />
                    </motion.div>
                    <motion.div
                      className="absolute w-[80px] h-[80px] bottom-[55px] left-[-25px] z-30 pointer-events-none"
                      animate={{ opacity: isCenter ? 1 : 0, scale: isCenter ? 1 : 0.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: isCenter ? 0.15 : 0 }}
                    >
                      <Image unoptimized quality={100} src="/images/new17.webp" alt="sticker" fill className="object-contain" />
                    </motion.div>
                    <motion.div
                      className="absolute w-[75px] h-[70px] bottom-[55px] right-[-25px] z-30 pointer-events-none"
                      animate={{ opacity: isCenter ? 1 : 0, scale: isCenter ? 1 : 0.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: isCenter ? 0.2 : 0 }}
                    >
                      <Image unoptimized quality={100} src="/images/new16.webp" alt="sticker" fill className="object-contain" />
                    </motion.div>
                  </>
                )}

                {/* Nazr 360 Stickers */}
                {item.id === "nazr-360" && (
                  <>
                    <motion.div
                      className="absolute w-[85px] h-[85px] top-[-45px] left-[-58px] z-30 pointer-events-none"
                      animate={{ opacity: isCenter ? 1 : 0, scale: isCenter ? 1 : 0.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: isCenter ? 0.05 : 0 }}
                    >
                      <Image unoptimized quality={100} src="/images/new18.webp" alt="sticker" fill className="object-contain" />
                    </motion.div>
                    <motion.div
                      className="absolute w-[90px] h-[90px] top-[-25px] right-[-58px] z-30 pointer-events-none"
                      animate={{ opacity: isCenter ? 1 : 0, scale: isCenter ? 1 : 0.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: isCenter ? 0.1 : 0 }}
                    >
                      <Image unoptimized quality={100} src="/images/new19.webp" alt="sticker" fill className="object-contain" />
                    </motion.div>
                    <motion.div
                      className="absolute w-[95px] h-[85px] bottom-[-20px] left-[-75px] z-30 pointer-events-none"
                      animate={{ opacity: isCenter ? 1 : 0, scale: isCenter ? 1 : 0.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: isCenter ? 0.15 : 0 }}
                    >
                      <Image unoptimized quality={100} src="/images/new21.webp" alt="sticker" fill className="object-contain" />
                    </motion.div>
                    <motion.div
                      className="absolute w-[70px] h-[65px] bottom-[-20px] right-[-52px] z-30 pointer-events-none"
                      animate={{ opacity: isCenter ? 1 : 0, scale: isCenter ? 1 : 0.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: isCenter ? 0.2 : 0 }}
                    >
                      <Image unoptimized quality={100} src="/images/new20.webp" alt="sticker" fill className="object-contain" />
                    </motion.div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Text & Controls */}
        <div className="flex flex-col items-center gap-0.5 w-full px-2">
          {/* Title */}
          <motion.h3
            key={`m-title-${currentIndex}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[32px] leading-[1.5] tracking-normal m-0 text-center uppercase"
          >
            {carouselData[currentIndex].title}
          </motion.h3>

          {/* Subtitle & Side Arrows — Exactly like Image 2 Figma Spec */}
          <div className="relative w-full max-w-[370px] flex items-center justify-center px-8 min-h-[80px]">
            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              className="absolute left-[-6px] top-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 active:scale-95 transition-transform outline-none z-10"
              aria-label="Previous product"
            >
              <Image unoptimized src="/images/buttonl.svg" width={36} height={36} alt="prev" className="w-[36px] h-[36px]" />
            </button>

            {/* Subtitle */}
            <motion.p
              key={`m-sub-${currentIndex}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#FFF9EB] font-['Inter',_sans-serif] font-normal text-[14px] text-center m-0 leading-[1.4] tracking-[-0.03em] max-w-[310px]"
            >
              {(carouselData[currentIndex] as any).mobileSubtitle || carouselData[currentIndex].subtitle}
            </motion.p>

            {/* Right Arrow Button */}
            <button
              onClick={handleNext}
              className="absolute right-[-6px] top-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 active:scale-95 transition-transform outline-none z-10"
              aria-label="Next product"
            >
              <Image unoptimized src="/images/button r.svg" width={36} height={36} alt="next" className="w-[36px] h-[36px]" />
            </button>
          </div>

          {/* Join Ecosystem Button with Owl Icon */}
          <button className="flex items-center justify-center gap-2 text-[#FFF1EB] bg-[#FF0E97] px-6 h-[44px] rounded-[6px] hover:opacity-90 transition-opacity mt-4 shadow-md">
            <svg viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[14px]">
              <path
                d="M33.3819 7.62744C33.2869 7.7107 33.1684 7.80134 33.0152 7.90883C31.7545 8.79569 30.1546 9.34741 28.4602 9.9318C25.5573 10.933 22.5555 11.9679 20.6471 14.8161C20.1564 15.5486 19.9687 16.291 20.1005 16.925C20.2926 16.613 20.4759 16.3311 20.7075 16.026L20.9298 15.733L21.1449 16.0307C21.8991 17.0757 23.061 17.6748 24.3328 17.6748C25.032 17.6748 25.7455 17.492 26.3954 17.1458C27.3707 16.6262 28.0239 15.8294 28.2352 14.9025C28.4421 13.9935 28.2044 13.0324 27.565 12.1972L27.3614 11.9316L29.5025 11.0863L29.6293 11.2255C30.7797 12.4917 31.1502 14.0721 30.7007 15.7968C30.2319 17.5947 28.7078 19.1239 26.7236 19.7879C25.9799 20.0366 25.2236 20.1626 24.4749 20.1626C23.4562 20.1626 22.4595 19.9344 21.5001 19.4828C21.926 19.936 22.4726 20.289 22.9836 20.5973C23.8355 21.1111 24.8394 21.3825 25.8866 21.3825C26.9338 21.3825 27.9157 21.1332 28.8362 20.6621C29.4756 20.3349 30.0387 19.9202 30.5585 19.3932C31.5421 18.3962 22.227 17.1126 32.5279 15.6808C32.7737 14.5263 32.7189 13.8228 32.7178 13.8139C32.6338 12.7542 32.4329 11.8183 32.0855 10.8687C31.7885 10.0556 31.9214 9.42171 32.5169 8.81308C32.9241 8.39626 33.2117 8.00263 33.3808 7.62797L33.3819 7.62744ZM27.3954 13.8613L27.7599 13.9003C27.8466 13.9219 27.8312 14.012 27.7467 14.0088C27.1309 13.9877 26.9146 13.8755 26.6929 14.2043C26.6023 14.3382 26.5749 14.5621 26.7077 14.7608L27.2807 15.3515C27.284 15.5264 26.5095 14.7149 25.9761 15.1044C25.5276 15.4316 26.127 16.4565 25.9475 16.437L25.4744 15.7024C25.3915 15.5855 25.0836 15.5243 24.8717 15.596C24.3926 15.7588 24.4996 16.6615 24.4047 16.6425C24.2938 16.6272 24.4118 15.7825 24.0847 15.5596C23.9645 15.478 23.7685 15.5143 23.6664 15.6166L23.0034 16.2795C22.8179 16.3058 23.6143 15.4985 23.0281 15.0748C22.3634 14.5943 21.7739 15.3452 21.7372 15.1876L22.4748 14.5837C23.28 13.9245 23.785 15.8742 25.6572 14.7913C26.9915 14.0194 26.1314 12.3147 26.4492 12.556C26.4739 12.5745 26.5419 12.7304 26.5496 12.8079C26.5595 12.907 26.5743 13.0255 26.5875 13.103C26.6451 13.4355 26.8147 13.7817 27.3954 13.8602V13.8613Z"
                fill="#FFF1EB"
              />
              <path
                d="M9.16005 10.7905L5.10284 9.29505C3.98206 8.88192 2.97764 8.49303 2.03579 7.91497C1.85795 7.80589 1.72348 7.66098 1.61426 7.50342C1.81953 8.04354 2.20868 8.4788 2.42822 8.69538C3.094 9.35144 3.25152 9.99748 2.95349 10.8554C2.5852 11.9177 2.38651 12.8541 2.32943 13.8047C2.32778 13.8295 2.16257 16.3061 3.21639 17.6968L3.27732 17.78L3.27512 17.7995C4.0331 19.139 5.06387 20.1091 6.42286 20.7631C7.26153 21.1667 8.1935 21.3802 9.11779 21.3802C10.4718 21.3802 11.7847 20.9259 12.8138 20.1012L12.8649 20.0607C13.1009 19.8715 13.3309 19.6876 13.5345 19.4852C12.5712 19.9353 11.5794 20.1629 10.5745 20.1629C9.80826 20.1629 9.02887 20.0291 8.25772 19.7645C6.38499 19.1222 4.9069 17.6752 4.39975 15.9868C3.8679 14.2168 4.2285 12.5268 5.41405 11.2295L5.54193 11.0893L7.68196 11.9593L7.47613 12.2228C6.86415 13.0069 6.61826 13.9175 6.78292 14.7864C6.95197 15.6801 7.53596 16.4727 8.42677 17.0175C9.13425 17.4502 9.92242 17.6794 10.7073 17.6794C11.9801 17.6794 13.1459 17.0744 13.905 16.0195L14.1383 15.6949L14.9363 16.9348C15.0241 16.4616 14.9528 15.9531 14.7211 15.4156C13.8199 13.3262 10.8692 11.4202 9.15895 10.79L9.16005 10.7905ZM12.237 15.4019C11.6508 15.8256 12.4472 16.6329 12.2617 16.6065L11.5987 15.9436C11.4966 15.8414 11.3006 15.8045 11.1804 15.8867C10.8533 16.1096 10.9708 16.9543 10.8604 16.9696C10.7655 16.9885 10.8725 16.0859 10.3933 15.923C10.1809 15.8509 9.87357 15.9125 9.79069 16.029L9.31757 16.7635C9.13809 16.7825 9.73745 15.7581 9.28903 15.4309C8.75554 15.0415 7.98109 15.853 7.98438 15.678L8.55739 15.0873C8.69077 14.8881 8.66278 14.6647 8.57221 14.5308C8.35047 14.202 8.13422 14.3143 7.51839 14.3353C7.43387 14.338 7.4185 14.2484 7.50522 14.2268L7.86967 14.1878C8.45037 14.1093 8.62051 13.7631 8.6776 13.4306C8.69077 13.3531 8.70559 13.2351 8.71547 13.1355C8.72315 13.058 8.79121 12.9026 8.81591 12.8836C9.13425 12.6417 8.27418 14.3469 9.60792 15.1189C11.4796 16.2018 11.9851 14.2526 12.7897 14.9113L13.5274 15.5152C13.4906 15.6722 12.9011 14.9213 12.2364 15.4024L12.237 15.4019Z"
                fill="#FFF1EB"
              />
              <path
                d="M19.297 20.5166C19.9605 20.641 20.477 21.2849 20.4331 21.9447C20.3886 22.6192 19.8123 23.3074 18.9254 23.2916C18.8644 23.2905 18.8041 23.2879 18.7442 23.2837C18.4226 23.261 18.1679 23.1904 17.9824 23.0724C18.2969 23.3601 18.6833 23.5313 19.0906 23.5598C19.3765 23.5798 19.6609 23.5308 19.9353 23.4133C20.6433 23.1103 21.0176 22.4152 20.8458 21.7228C20.6894 21.0915 20.0714 20.6131 19.2964 20.5161L19.297 20.5166Z"
                fill="#FFF1EB"
              />
              <path
                d="M19.4722 20.4089C19.8998 19.7618 19.2565 18.9919 18.5584 18.251C18.3394 18.0186 18.15 17.8178 18.0282 17.6392L17.9629 17.5422L17.9941 17.4305C19.0469 13.7002 21.806 10.7198 25.7628 9.03883C26.6541 8.66048 27.5334 8.3754 28.3842 8.09928C29.8386 7.62766 31.213 7.18239 32.5226 6.32504C34.6527 4.93072 35.4475 2.6506 34.7581 -0.000488281C33.3278 2.79815 30.9364 3.70398 28.197 4.74102C26.4516 5.40182 24.4729 6.15114 22.4866 7.50646C20.3054 8.9951 18.8224 10.988 18.1983 13.2703L17.7148 15.0398L17.189 15.006C16.5874 10.3214 13.752 7.35628 7.70842 5.09197L7.19853 4.90174C4.26155 3.80884 1.69726 2.85401 0.241119 0.0564225C-0.500946 2.86138 0.483717 5.24742 3.00301 6.67177C4.12818 7.3078 5.28683 7.67667 6.51409 8.06766C8.23863 8.61727 10.0213 9.18533 11.9907 10.5496C15.0171 12.6463 16.0967 14.5992 17.0298 17.4701L17.0753 17.6092L15.9205 18.8538C15.3662 19.4514 15.2663 20.2012 15.6467 20.9121C16.2158 21.9765 16.8393 22.9662 17.498 23.999L19.4722 20.4078V20.4089Z"
                fill="#FFF1EB"
              />
            </svg>
            <span className="font-['Roboto',_sans-serif] text-[15px] font-semibold">Join Ecosystem</span>
          </button>
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
