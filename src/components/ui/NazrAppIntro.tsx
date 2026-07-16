"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollRevealText } from "./ScrollRevealText";





export function NazrAppIntro() {
  // Track absolute page scroll in pixels
  const { scrollY } = useScroll();
  // Fill the text as the user scrolls from 0 to 400px down the page
  const scrollYProgress = useTransform(scrollY, [0, 400], [0, 1]);

  return (
    <div className="w-full relative flex flex-col md:flex-row items-center justify-between px-4 md:px-16 max-md:pt-[66px] md:pt-8 pb-20 min-h-[500px] md:min-h-[700px] overflow-y-visible md:overflow-hidden">

      {/* Left Column: Text */}
      <div className="w-full md:w-[58%] flex flex-col gap-6 z-10 max-md:mt-[-20px] md:mt-0 text-center md:text-left px-7 md:px-0">
        <ScrollRevealText
          text={"You move. Nazr moves with you.\n\nMost safety tools ask you to stop what you're doing. Nazr doesn't. It's the first safety ecosystem designed to protect you without pulling you out of the moment whether you're commuting, travelling solo, working late, or just heading home."}
          className="m-0 font-[family-name:var(--font-bebas)] text-[32px] md:text-[58px] text-center md:text-left"
          style={{
            lineHeight: '120%',
            letterSpacing: '-0.02em',
            fontWeight: 400
          }}
          scrollYProgress={scrollYProgress}
          progressRange={[0, 1]}
          fillColor="#161616"      // Dark text when filled
          emptyColor="#B0A6A1"     // Dimmed/grey text when unfilled against the beige background
        />
      </div>

      {/* Right Column: Scattered Stickers */}
      <div className="absolute inset-0 z-20 pointer-events-none md:pointer-events-auto md:relative md:w-[42%] h-full md:h-[600px] flex items-center justify-center flex-shrink-0">

        {/* Fixed-size wrapper container to preserve sticker collage layout */}
        <div className="relative w-[360px] h-[400px] max-md:scale-[0.6] max-md:origin-center">

          {/* Blue Bag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 12, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.1 }}
            className="absolute top-[10px] left-[110px] z-20"
          >
            <Image src="/images/new43.svg" alt="Blue Bag" width={260} height={230} className="object-contain drop-shadow-lg" />
          </motion.div>

          {/* Pink Circle Eye */}
          <div className="absolute top-[70px] left-[0px] z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 45, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.3 }}
            >
              <Image src="/images/new29.svg" alt="Pink Circle Eye" width={180} height={180} className="object-contain drop-shadow-lg" />
            </motion.div>
          </div>

          {/* Pink Star */}
          <div className="absolute top-[205px] left-[35px] z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -30, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -18, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.5 }}
            >
              <Image src="/images/new44.svg" alt="Pink Star" width={140} height={140} className="object-contain" />
            </motion.div>
          </div>

          {/* Yellow Badge ("FOR KALESH") */}
          <div className="absolute top-[225px] left-[155px] z-30">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 0, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -39, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.7 }}
            >
              <Image src="/images/new45.svg" alt="Yellow Badge" width={180} height={85} className="object-contain drop-shadow-lg" />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
