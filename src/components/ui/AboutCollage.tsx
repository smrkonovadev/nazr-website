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

  // Each sticker gets its own parallax depth — staggered by 5px steps
  const parallax2 = useTransform(scrollYProgress, [0, 1], [30, -30]);  // TOPDIE
  const parallax3 = useTransform(scrollYProgress, [0, 1], [35, -35]);  // TOPLEFT
  const parallax4 = useTransform(scrollYProgress, [0, 1], [40, -40]);  // DOWNLEFT
  const parallax5 = useTransform(scrollYProgress, [0, 1], [45, -45]);  // TOPRIGHT
  const parallax6 = useTransform(scrollYProgress, [0, 1], [50, -50]);  // RIGHTNEXT
  const parallax7 = useTransform(scrollYProgress, [0, 1], [25, -25]);  // DOWNLIP

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#161616] pt-12 pb-24 md:py-36 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* The Collage Container */}
      <motion.div
        className="relative w-full max-w-[1200px] aspect-[12/10] md:h-[820px] flex items-center justify-center mx-auto"
      >

        {/* 1. Center Image (MAINPHONE.svg) */}
        <motion.div
          className="absolute max-md:left-1/2 max-md:top-[12%] max-md:-translate-x-1/2 max-md:w-[48%] max-md:aspect-[249/523] z-10 overflow-hidden"
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
          <Image
            src="/images/MAINPHONE.svg"
            alt="Nazr App Interface"
            fill
            className="object-contain shadow-2xl"
          />
        </motion.div>

        {/* 2. Top-Left Pink Die Sticker (TOPDIE.svg) */}
        <motion.div
          className="absolute max-md:left-[15%] max-md:top-[6%] max-md:w-[24%] max-md:aspect-[218/187] z-30"
          style={{
            y: parallax2,
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
            <Image
              src="/images/TOPDIE.svg"
              alt="Pink Star Die"
              fill
              className="object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]"
            />
          </div>
        </motion.div>

        {/* 3. Mid-Left Eye Girl (TOPLEFT.svg) */}
        <motion.div
          className="absolute max-md:left-[2%] max-md:top-[28%] max-md:w-[32%] max-md:aspect-[280/340] z-20 overflow-hidden"
          style={{
            y: parallax3,
            ...(!isMobile && {
              width: "280px",
              height: "326px",
              top: "137px",
              left: "224px",
              borderRadius: "16px",
            })
          }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.3, delay: 0.3 }}
        >
          <Image
            src="/images/TOPLEFT.svg"
            alt="Sip Check Eye Cover"
            fill
            className="object-cover shadow-xl"
          />
        </motion.div>

        {/* 4. Bottom-Left Legs & Socks (DOWNLEFT.svg) */}
        <motion.div
          className="absolute max-md:left-[6%] max-md:bottom-[4%] max-md:w-[28%] max-md:aspect-[250/330] z-20 overflow-hidden"
          style={{
            y: parallax4,
            ...(!isMobile && {
              width: "213px",
              height: "260px",
              top: "507px",
              left: "296px",
              borderRadius: "16px",
            })
          }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.3, delay: 0.4 }}
        >
          <Image
            src="/images/DOWNLEFT.svg"
            alt="Sneakers and On Me Spray"
            fill
            className="object-cover shadow-xl"
          />
        </motion.div>

        {/* 5. Top-Right Popcorn Table (TOPRIGHT.svg) */}
        <motion.div
          className="absolute max-md:right-[2%] max-md:top-[18%] max-md:w-[36%] max-md:aspect-[320/220] z-20 overflow-hidden"
          style={{
            y: parallax5,
            ...(!isMobile && {
              width: "369px",
              height: "213px",
              top: "44px",
              left: "788px",
              borderRadius: "16px",
            })
          }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.3, delay: 0.3 }}
        >
          <Image
            src="/images/TOPRIGHT.svg"
            alt="Popcorn and Safety Spray"
            fill
            className="object-cover shadow-xl"
          />
        </motion.div>

        {/* 6. Bottom-Right Stickers in Ice (RIGHTNEXT.svg) */}
        <motion.div
          className="absolute max-md:right-[4%] max-md:bottom-[10%] max-md:w-[32%] max-md:aspect-[280/240] z-20 overflow-hidden"
          style={{
            y: parallax6,
            ...(!isMobile && {
              width: "282px",
              height: "231px",
              top: "335px",
              left: "805px",
              borderRadius: "16px",
            })
          }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.3, delay: 0.4 }}
        >
          <Image
            src="/images/RIGHTNEXT.svg"
            alt="Sip Check Ice Bucket"
            fill
            className="object-cover shadow-xl"
          />
        </motion.div>

        {/* 7. Bottom Lip Sticker (DOWNLIP.svg) */}
        <motion.div
          className="absolute max-md:left-[52%] max-md:bottom-[8%] max-md:w-[18%] max-md:aspect-[140/100] z-30"
          style={{
            y: parallax7,
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
            <Image
              src="/images/DOWNLIP.svg"
              alt="Pink Lip Sticker"
              fill
              className="object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.3)]"
            />
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
