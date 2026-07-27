"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function NazrAppIntro() {
  return (
    <div className="w-full relative flex justify-center px-4 md:px-12 pt-4 md:pt-10 pb-4 md:pb-8">
      {/* Container: relative position so mobile corner stickers pin to corners */}
      <div className="w-full max-w-[1240px] relative flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8 px-6 md:px-0 pt-12 md:pt-0 pb-6 md:pb-0">
        
        {/* Mobile-only Corner Stickers (hidden on desktop) */}
        {/* Top-Left Pink Circle Eye */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -25 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -12 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:hidden absolute top-2 left-2 w-[58px] h-[58px] sm:w-[68px] sm:h-[68px] z-20 pointer-events-none"
        >
          <Image src="/images/new29.svg" alt="Pink Circle Eye" fill className="object-contain drop-shadow-sm" priority />
        </motion.div>

        {/* Top-Right Blue Bag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 22 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:hidden absolute top-2 right-2 w-[72px] h-[72px] sm:w-[85px] sm:h-[85px] z-20 pointer-events-none"
        >
          <Image src="/images/new43.svg" alt="Blue Bag" fill className="object-contain drop-shadow-sm" priority />
        </motion.div>

        {/* Bottom-Left Pink Star */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 15 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:hidden absolute bottom-[-10px] left-1 w-[68px] h-[68px] sm:w-[78px] sm:h-[78px] z-20 pointer-events-none"
        >
          <Image src="/images/new44.svg" alt="Pink Star" fill className="object-contain drop-shadow-sm" priority />
        </motion.div>

        {/* Typography (Center-aligned on mobile, Left-aligned on desktop) */}
        <div className="w-full md:max-w-[621px] flex flex-col items-center md:items-start text-center md:text-left z-10 my-2 md:my-0">
          <h1 className="font-[family-name:var(--font-bebas)] font-normal text-[#161616] text-[40px] md:text-[80px] leading-[90%] tracking-[-0.01em] uppercase m-0 max-w-[334px] md:max-w-[621px] text-center md:text-left">
            YOU MOVE,<br />
            NAZR MOVES WITH YOU.
          </h1>

          <p className="mt-4 md:mt-8 font-[family-name:var(--font-bebas)] font-normal text-[#161616] text-[24px] md:text-[40px] leading-[120%] tracking-[-0.01em] uppercase m-0 max-w-[334px] md:max-w-[621px] text-center md:text-left">
            MOST SAFETY TOOLS ASK YOU TO STOP WHAT YOU'RE DOING. NAZR DOESN'T. IT'S THE FIRST SAFETY ECOSYSTEM DESIGNED TO PROTECT YOU WITHOUT PULLING YOU OUT OF THE MOMENT WHETHER YOU'RE COMMUTING, TRAVELLING SOLO, WORKING LATE, OR JUST HEADING HOME.
          </p>
        </div>

        {/* Desktop-only Image Collage (hidden on mobile) */}
        <div className="hidden md:block relative w-full max-w-[460px] lg:max-w-[500px] h-[360px] lg:h-[400px] shrink-0 mt-0">
          {/* Blue Bag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 22 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute w-[260px] h-[260px] lg:w-[290px] lg:h-[290px] right-0 top-0 z-20"
          >
            <Image src="/images/new43.svg" alt="Blue Bag" fill className="object-contain drop-shadow-md" priority />
          </motion.div>

          {/* Pink Circle Eye */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -12 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] left-2 top-4 z-10"
          >
            <Image src="/images/new29.svg" alt="Pink Circle Eye" fill className="object-contain drop-shadow-md" priority />
          </motion.div>

          {/* Pink Star */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 15 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] left-[80px] bottom-2 z-20"
          >
            <Image src="/images/new44.svg" alt="Pink Star" fill className="object-contain drop-shadow-sm" priority />
          </motion.div>

          {/* For Kalesh Free Nights Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -15 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] right-4 bottom-4 z-30"
          >
            <Image src="/images/new45.svg" alt="For Kalesh Free Nights Badge" fill className="object-contain drop-shadow-md" priority />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
