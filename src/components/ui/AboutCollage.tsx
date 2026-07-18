"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutCollage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Moves the entire collage block slightly at a different speed than scrolling
  const parallaxY = useScroll().scrollY;
  const parallaxYTransform = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#161616] pt-12 pb-24 md:py-36 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* The Collage Container - Apply Parallax */}
      <motion.div
        className="relative w-full max-w-[1200px] aspect-[12/10] md:aspect-[16/10] flex items-center justify-center mx-auto"
        style={{ y: parallaxYTransform }}
      >

        {/* 1. Center Image (MAINPHONE.svg) */}
        <motion.div
          className="absolute left-1/2 top-[12%] -translate-x-1/2 w-[48%] md:w-[22%] aspect-[249/523] z-10"
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

        {/* 2. Top-Left Pink Die Sticker (TOPDIE.svg) - Pops in & floats */}
        <motion.div
          className="absolute left-[15%] md:left-[24%] top-[6%] md:top-[0%] w-[24%] md:w-[15%] aspect-[218/187] z-30"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="relative w-full h-full"
            animate={{
              y: [0, -8, 0],
              rotate: [-10, -7, -10],
            }}
            // @ts-ignore
            style={{ originX: 0.5, originY: 0.5 }}
            transition={{
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" }
            }}
          >
            <Image
              src="/images/TOPDIE.svg"
              alt="Pink Star Die"
              fill
              className="object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]"
            />
          </motion.div>
        </motion.div>

        {/* 3. Mid-Left Eye Girl (TOPLEFT.svg) */}
        <motion.div
          className="absolute left-[2%] md:left-[8%] top-[28%] md:top-[24%] w-[32%] md:w-[20%] aspect-[280/340] z-20 cursor-pointer"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.3, delay: 0.3 }}
          whileHover={{ y: -8, scale: 1.03, zIndex: 40 }}
        >
          <Image
            src="/images/TOPLEFT.svg"
            alt="Sip Check Eye Cover"
            fill
            className="object-cover rounded-[16px] md:rounded-[24px] shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />
        </motion.div>

        {/* 4. Bottom-Left Legs & Socks (DOWNLEFT.svg) */}
        <motion.div
          className="absolute left-[6%] md:left-[14%] bottom-[4%] md:bottom-[7%] w-[28%] md:w-[18%] aspect-[250/330] z-20 cursor-pointer"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.3, delay: 0.4 }}
          whileHover={{ y: -8, scale: 1.03, zIndex: 40 }}
        >
          <Image
            src="/images/DOWNLEFT.svg"
            alt="Sneakers and On Me Spray"
            fill
            className="object-cover rounded-[16px] md:rounded-[24px] shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />
        </motion.div>

        {/* 5. Top-Right Popcorn Table (TOPRIGHT.svg) */}
        <motion.div
          className="absolute right-[2%] md:right-[6%] top-[18%] md:top-[14%] w-[36%] md:w-[24%] aspect-[320/220] z-20 cursor-pointer"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.3, delay: 0.3 }}
          whileHover={{ y: -8, scale: 1.03, zIndex: 40 }}
        >
          <Image
            src="/images/TOPRIGHT.svg"
            alt="Popcorn and Safety Spray"
            fill
            className="object-cover rounded-[16px] md:rounded-[24px] shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />
        </motion.div>

        {/* 6. Bottom-Right Stickers in Ice (RIGHTNEXT.svg) */}
        <motion.div
          className="absolute right-[4%] md:right-[8%] bottom-[10%] md:bottom-[14%] w-[32%] md:w-[22%] aspect-[280/240] z-20 cursor-pointer"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.3, delay: 0.4 }}
          whileHover={{ y: -8, scale: 1.03, zIndex: 40 }}
        >
          <Image
            src="/images/RIGHTNEXT.svg"
            alt="Sip Check Ice Bucket"
            fill
            className="object-cover rounded-[16px] md:rounded-[24px] shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />
        </motion.div>

        {/* 7. Bottom Lip Sticker (DOWNLIP.svg) - Pops in & floats */}
        <motion.div
          className="absolute left-[52%] md:left-[49%] bottom-[8%] md:bottom-[3%] w-[18%] md:w-[11%] aspect-[140/100] z-30"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.5 }}
        >
          <motion.div
            className="relative w-full h-full"
            animate={{
              y: [0, -6, 0],
              rotate: [12, 15, 12],
            }}
            // @ts-ignore
            style={{ originX: 0.5, originY: 0.5 }}
            transition={{
              y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 3.5, ease: "easeInOut" }
            }}
          >
            <Image
              src="/images/DOWNLIP.svg"
              alt="Pink Lip Sticker"
              fill
              className="object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.3)]"
            />
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
