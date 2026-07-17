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
    <div className="w-full relative flex justify-center px-4 max-md:pt-[66px] md:pt-[26px] pb-20 min-h-[500px] md:min-h-[550px] overflow-y-visible md:overflow-hidden">
      <div className="relative w-full max-w-[1160px] h-auto md:h-[470px] flex flex-col md:block">

        {/* Left Column: Text */}
        <div className="w-full md:absolute md:left-0 md:top-0 md:w-[750px] flex flex-col gap-6 z-10 max-md:mt-[-20px] text-center md:text-left px-7 md:px-0">
          <ScrollRevealText
            text={"You move. Nazr moves with you.\n\nMost safety tools ask you to stop what you're doing. Nazr doesn't. It's the first safety ecosystem designed to protect you without pulling you out of the moment whether you're commuting, travelling solo, working late, or just heading home."}
            className="m-0 font-[family-name:var(--font-bebas)] text-[32px] md:text-[52px] text-center md:text-left"
            style={{
              lineHeight: '120%',
              letterSpacing: '-0.01em',
              fontWeight: 400,
              fontStyle: 'normal'
            }}
            scrollYProgress={scrollYProgress}
            progressRange={[0, 1]}
            fillColor="#161616"      // Dark text when filled
            emptyColor="#B0A6A1"     // Dimmed/grey text when unfilled against the beige background
          />
        </div>

        {/* Right Column: Scattered Stickers */}
        <div className="w-full md:absolute md:inset-0 z-20 pointer-events-none md:pointer-events-auto max-md:mt-10 max-md:h-[350px] flex items-center justify-center">
          <div className="relative w-[360px] h-[350px] md:w-full md:h-full max-md:scale-[0.8] max-md:origin-center">

            {/* Blue Bag (new43.svg) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -20, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -4, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.1 }}
              className="absolute max-md:top-[20px] max-md:left-[110px] md:top-[-50px] md:left-[800px] z-20"
              style={{ width: 400, height: 400 }}
            >
              <Image src="/images/new43.svg" alt="Blue Bag" fill className="object-contain drop-shadow-lg" />
            </motion.div>

            {/* Pink Circle Eye (new29.svg) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 45, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -5, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.3 }}
              className="absolute max-md:top-[70px] max-md:left-[0px] md:top-[110px] md:left-[764px] z-10"
              style={{ width: 200, height: 200 }}
            >
              <Image src="/images/new29.svg" alt="Pink Circle Eye" fill className="object-contain drop-shadow-lg" />
            </motion.div>

            {/* Pink Star (new44.svg) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -30, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 80, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.5 }}
              className="absolute max-md:top-[205px] max-md:left-[35px] md:top-[280px] md:left-[780px] z-20"
              style={{ width: 250, height: 250 }}
            >
              <Image src="/images/new44.svg" alt="Pink Star" fill className="object-contain" />
            </motion.div>

            {/* Yellow Badge (new45.svg) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 0, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.7 }}
              className="absolute max-md:top-[225px] max-md:left-[155px] md:top-[237.65px] md:left-[960px] z-30"
              style={{ width: 260, height: 260 }}
            >
              <Image src="/images/new45.svg" alt="Yellow Badge" fill className="object-contain drop-shadow-lg" />
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
