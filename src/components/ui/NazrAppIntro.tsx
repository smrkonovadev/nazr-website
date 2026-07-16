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
      <div className="w-full md:w-[72%] flex flex-col gap-6 z-10 max-md:mt-[-20px] md:mt-0 text-center md:text-left px-7 md:px-0">
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
      <div className="absolute inset-0 z-20 pointer-events-none md:pointer-events-auto md:relative md:w-[45%] h-full md:h-[600px] flex items-center justify-center">

        {/* Blue Bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -20, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 10, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.1 }}
          className="hidden md:block absolute top-[-2%] right-[18%]"
        >
          <Image src="/images/new43.svg" alt="Blue Bubble" width={260} height={140} className="object-contain drop-shadow-lg" />
        </motion.div>

        {/* Magenta Badge */}
        <div className="absolute top-[5px] left-[9px] md:top-[17%] md:left-[6%] scale-[0.33] md:scale-100 origin-top-left z-[300]">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 45, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -0, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.3 }}
          >
            <Image src="/images/new29.svg" alt="Magenta Badge" width={200} height={200} className="object-contain drop-shadow-lg" />
          </motion.div>
        </div>

        {/* Green Graphic */}
        <div className="absolute bottom-[8%] left-[1%] md:bottom-auto md:top-[27%] md:right-[25%] md:left-auto scale-[0.55] md:scale-100 origin-bottom-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -30, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.5 }}
          >
            <Image src="/images/new44.svg" alt="Green Graphic" width={180} height={180} className="object-contain drop-shadow-lg" />
          </motion.div>
        </div>

        {/* Pink Globe */}
        <div className="absolute bottom-[9%] right-[5%] md:bottom-[34%] md:left-[8%] md:right-auto scale-[0.50] md:scale-100 origin-bottom-right">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 20, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -37, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.7 }}
          >
            <Image src="/images/new45.svg" alt="Pink Globe" width={160} height={160} className="object-contain" />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
