"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export function WhyNazrStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.8 });

  return (
    <section className="w-full bg-[#161616] flex flex-col items-center justify-center py-20 md:py-40 px-4 z-40 relative">

      {/* Typography Container */}
      <div
        ref={containerRef}
        className="flex flex-col items-center justify-center gap-y-[0px] md:gap-y-[2px] text-[#FFF1EB] font-[family-name:var(--font-bebas)] uppercase leading-[90%] tracking-[-0.03em] text-center"
        style={{ fontSize: "clamp(24px, 6.8vw, 100px)" }}
      >

        {/* Line 1 */}
        <div className="flex items-center">
          <motion.div
            animate={{
              width: isInView ? "1.5em" : "0em",
              marginRight: isInView ? "0.15em" : "0em",
              scale: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 18, delay: isInView ? 0.3 : 0 }}
            className="relative h-[1.1em] flex-shrink-0 origin-center overflow-hidden"
          >
            <Image src="/images/whyyna1.svg" alt="Planet" fill className="object-contain" />
          </motion.div>
          <span>FOR YEARS, INDIAN WOMEN</span>
        </div>

        {/* Line 2 */}
        <div className="flex items-center -mt-[0.12em]">
          <span>BUILT THEIR OWN </span>
          <motion.div
            animate={{
              width: isInView ? "1.8em" : "0em",
              marginLeft: isInView ? "0.15em" : "0em",
              marginRight: isInView ? "0.15em" : "0em",
              scale: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 18, delay: isInView ? 0.45 : 0 }}
            className="relative h-[1.1em] flex-shrink-0 origin-center overflow-hidden"
          >
            <Image src="/images/whyyna2.svg" alt="Hands" fill className="object-contain" />
          </motion.div>
          <span>SAFETY SYSTEMS</span>
        </div>

        {/* Line 3 */}
        <div className="flex items-center -mt-[0.12em]">
          <span>THROUGH INSTINCT, ROUTINES & TRUST.</span>
          <motion.div
            animate={{
              width: isInView ? "1.2em" : "0em",
              marginLeft: isInView ? "0.15em" : "0em",
              scale: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 18, delay: isInView ? 0.6 : 0 }}
            className="relative h-[1.1em] flex-shrink-0 origin-center overflow-hidden"
          >
            <Image src="/images/whyyna3.svg" alt="Star" fill className="object-contain" />
          </motion.div>
        </div>

        {/* Line 4 */}
        <div className="flex items-center -mt-[0.12em]">
          <motion.div
            animate={{
              width: isInView ? "1.3em" : "0em",
              marginRight: isInView ? "0.15em" : "0em",
              scale: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 18, delay: isInView ? 0.75 : 0 }}
            className="relative h-[1.1em] flex-shrink-0 origin-center overflow-hidden"
          >
            <Image src="/images/whyyna4.svg" alt="Heart" fill className="object-contain" />
          </motion.div>
          <span>THE HABITS EXISTED</span>
        </div>

        {/* Line 5 */}
        <div className="flex items-center -mt-[0.12em]">
          <span>THE ECOSYSTEM DIDN&apos;T.</span>
          <motion.div
            animate={{
              width: isInView ? "1.3em" : "0em",
              marginLeft: isInView ? "0.15em" : "0em",
              scale: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 18, delay: isInView ? 0.9 : 0 }}
            className="relative h-[1.1em] flex-shrink-0 origin-center overflow-hidden"
          >
            <Image src="/images/whyyna5.svg" alt="Moon" fill className="object-contain" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
