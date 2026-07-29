"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutCollage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax depth for desktop view
  const parallax2 = useTransform(scrollYProgress, [0, 1], [30, -30]);  // TOPDIE
  const parallax3 = useTransform(scrollYProgress, [0, 1], [35, -35]);  // TOPLEFT
  const parallax4 = useTransform(scrollYProgress, [0, 1], [40, -40]);  // DOWNLEFT
  const parallax5 = useTransform(scrollYProgress, [0, 1], [45, -45]);  // TOPRIGHT
  const parallax6 = useTransform(scrollYProgress, [0, 1], [50, -50]);  // RIGHTNEXT
  const parallax7 = useTransform(scrollYProgress, [0, 1], [25, -25]);  // DOWNLIP

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#161616] pt-8 pb-8 md:pt-36 md:pb-1 flex flex-col items-center justify-center relative md:rounded-b-[26px] max-md:rounded-b-[9.71px] overflow-hidden"
    >
      {/* The Collage Container */}
      <motion.div
        className="relative w-full max-w-[1200px] max-md:h-[620px] md:h-[820px] flex items-center justify-center mx-auto"
        style={{ translateX: isMobile ? "0px" : "-90px" }}
      >
        {/* 1. Center Image (MAINPHONE.svg) */}
        <motion.div
          className="absolute max-md:left-1/2 max-md:top-[50%] max-md:-translate-x-1/2 max-md:-translate-y-1/2 max-md:w-[56%] max-md:h-[76%] z-10 overflow-hidden"
          style={isMobile ? undefined : {
            // @ts-ignore
            width: "386.71px",
            height: "693px",
            top: "13px",
            left: "459.15px",
            borderRadius: "18.92px",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image unoptimized quality={100} src="/images/MAINPHONE.webp"
            alt="Nazr App Interface"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* 2. Top-Left Pink Die Sticker (TOPDIE.svg) */}
        <motion.div
          className="absolute max-md:left-[10%] max-md:top-[-2%] max-md:w-[48%] max-md:aspect-[218/187] z-30"
          style={{
            y: isMobile ? 0 : parallax2,
            ...(!isMobile && {
              width: "200px",
              height: "200px",
              top: "-18px",
              left: "328px",
            })
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full h-full" style={{ rotate: "11.13deg" } as React.CSSProperties}>
            <Image unoptimized quality={100} src="/images/TOPDIE.webp"
              alt="Pink Star Die"
              fill
              className="object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]"
            />
          </div>
        </motion.div>

        {/* 3. Top-Right Popcorn Table (TOPRIGHT.svg) */}
        <motion.div
          className="absolute max-md:w-[163px] max-md:h-[90px] max-md:right-[6%] max-md:top-[6%] z-20 overflow-hidden max-md:rounded-[16px]"
          style={{
            y: isMobile ? 0 : parallax5,
            ...(!isMobile && {
              width: "369px",
              height: "213px",
              top: "44px",
              left: "788px",
              borderRadius: "16px",
            })
          }}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.3, delay: 0.3 }}
        >
          <Image unoptimized quality={100} src="/images/TOPRIGHT.webp"
            alt="Popcorn and Safety Spray"
            fill
            className="object-cover shadow-xl"
          />
        </motion.div>

        {/* 4. Mid-Left Eye Girl (TOPLEFT.svg) */}
        <motion.div
          className="absolute max-md:w-[132px] max-md:h-[155px] max-md:left-[6%] max-md:top-[17%] z-20 overflow-hidden max-md:rounded-[16px]"
          style={{
            y: isMobile ? 0 : parallax3,
            ...(!isMobile && {
              width: "280px",
              height: "326px",
              top: "137px",
              left: "224px",
              borderRadius: "16px",
            })
          }}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.3, delay: 0.3 }}
        >
          <Image unoptimized quality={100} src="/images/TOPLEFT.webp"
            alt="Sip Check Eye Cover"
            fill
            className="object-cover shadow-xl"
          />
        </motion.div>

        {/* 5. Middle-Right Lip Sticker (DOWNLIP.svg) */}
        <motion.div
          className="absolute max-md:right-[-4%] max-md:top-[33%] max-md:w-[40%] max-md:aspect-[140/100] z-30"
          style={{
            y: isMobile ? 0 : parallax7,
            ...(!isMobile && {
              width: "194.7px",
              height: "201.29px",
              top: "605px",
              left: "664px",
            })
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.5 }}
        >
          <div className="relative w-full h-full">
            <Image unoptimized quality={100} src="/images/DOWNLIP.webp"
              alt="Pink Lip Sticker"
              fill
              className="object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.3)]"
            />
          </div>
        </motion.div>

        {/* 6. Bottom-Left Legs & Socks (DOWNLEFT.svg) */}
        <motion.div
          className="absolute max-md:w-[132px] max-md:h-[161px] max-md:left-[6%] max-md:bottom-[8%] z-20 overflow-hidden max-md:rounded-[16px]"
          style={{
            y: isMobile ? 0 : parallax4,
            ...(!isMobile && {
              width: "213px",
              height: "260px",
              top: "507px",
              left: "296px",
              borderRadius: "16px",
            })
          }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.3, delay: 0.4 }}
        >
          <Image unoptimized quality={100} src="/images/DOWNLEFT.webp"
            alt="Sneakers and On Me Spray"
            fill
            className="object-cover shadow-xl"
          />
        </motion.div>

        {/* 7. Bottom-Right Stickers in Ice (RIGHTNEXT.svg) */}
        <motion.div
          className="absolute max-md:w-[160px] max-md:h-[131px] max-md:max-w-full max-md:right-[6%] max-md:bottom-[0.1%] z-20 overflow-hidden max-md:rounded-[16px]"
          style={{
            y: isMobile ? 0 : parallax6,
            ...(!isMobile && {
              width: "282px",
              height: "231px",
              top: "335px",
              left: "805px",
              borderRadius: "16px",
            })
          }}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.3, delay: 0.4 }}
        >
          <Image unoptimized quality={100} src="/images/RIGHTNEXT.webp"
            alt="Sip Check Ice Bucket"
            fill
            className="object-cover shadow-xl"
          />
        </motion.div>

      </motion.div>
    </section>
  );
}
