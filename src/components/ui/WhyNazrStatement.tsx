"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export function WhyNazrStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.4 });

  return (
    <section ref={containerRef} className="w-full bg-[#161616] flex flex-col items-center justify-center max-md:py-8 md:py-40 px-4 z-40 relative">

      {/* Mobile Layout (md:hidden) - Exact Match for Reference Image 2 */}
      <div
        className="md:hidden flex flex-col items-center justify-center text-[#FFF1EB] font-[family-name:var(--font-bebas)] uppercase leading-[92%] tracking-[-0.03em] text-center w-full max-w-[390px] max-w-full mx-auto text-[52px]"
      >
        {/* Line 1: FOR YEARS, [Planet] INDIAN */}
        <div className="flex items-center justify-center whitespace-nowrap">
          <span>FOR YEARS, </span>
          <motion.div
            animate={{
              width: isInView ? "1.4em" : "0em",
              marginLeft: isInView ? "0.1em" : "0em",
              marginRight: isInView ? "0.1em" : "0em",
              scale: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 18, delay: isInView ? 0.2 : 0 }}
            className="relative h-[1.1em] flex-shrink-0 origin-center overflow-hidden inline-flex"
          >
            <Image unoptimized quality={100} src="/images/whyyna1.webp" alt="Planet" fill className="object-contain" />
          </motion.div>
          <span> INDIAN</span>
        </div>

        {/* Line 2: WOMEN BUILT THEIR */}
        <div className="flex items-center justify-center whitespace-nowrap -mt-[0.08em]">
          <span>WOMEN BUILT THEIR</span>
        </div>

        {/* Line 3: OWN [Hands] SAFETY */}
        <div className="flex items-center justify-center whitespace-nowrap -mt-[0.08em]">
          <span>OWN </span>
          <motion.div
            animate={{
              width: isInView ? "1.6em" : "0em",
              marginLeft: isInView ? "0.1em" : "0em",
              marginRight: isInView ? "0.1em" : "0em",
              scale: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 18, delay: isInView ? 0.35 : 0 }}
            className="relative h-[1.1em] flex-shrink-0 origin-center overflow-hidden inline-flex"
          >
            <Image unoptimized quality={100} src="/images/whyyna2.webp" alt="Hands" fill className="object-contain" />
          </motion.div>
          <span> SAFETY</span>
        </div>

        {/* Line 4: SYSTEMS THROUGH */}
        <div className="flex items-center justify-center whitespace-nowrap -mt-[0.08em]">
          <span>SYSTEMS THROUGH</span>
        </div>

        {/* Line 5: INSTINCT, ROUTINES & */}
        <div className="flex items-center justify-center whitespace-nowrap -mt-[0.08em]">
          <span>INSTINCT, ROUTINES &</span>
        </div>

        {/* Line 6: TRUST. [Star] THE HABITS */}
        <div className="flex items-center justify-center whitespace-nowrap -mt-[0.08em]">
          <span>TRUST. </span>
          <motion.div
            animate={{
              width: isInView ? "1.2em" : "0em",
              marginLeft: isInView ? "0.1em" : "0em",
              marginRight: isInView ? "0.1em" : "0em",
              scale: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 18, delay: isInView ? 0.5 : 0 }}
            className="relative h-[1.1em] flex-shrink-0 origin-center overflow-hidden inline-flex"
          >
            <Image unoptimized quality={100} src="/images/whyyna3.webp" alt="Star" fill className="object-contain" />
          </motion.div>
          <span> THE HABITS</span>
        </div>

        {/* Line 7: EXISTED THE [Moon] */}
        <div className="flex items-center justify-center whitespace-nowrap -mt-[0.08em]">
          <span>EXISTED THE </span>
          <motion.div
            animate={{
              width: isInView ? "1.2em" : "0em",
              marginLeft: isInView ? "0.1em" : "0em",
              scale: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 18, delay: isInView ? 0.65 : 0 }}
            className="relative h-[1.1em] flex-shrink-0 origin-center overflow-hidden inline-flex"
          >
            <Image unoptimized quality={100} src="/images/whyyna5.webp" alt="Moon" fill className="object-contain" />
          </motion.div>
        </div>

        {/* Line 8: ECOSYSTEM DIDN'T. */}
        <div className="flex items-center justify-center whitespace-nowrap -mt-[0.08em]">
          <span>ECOSYSTEM DIDN&apos;T.</span>
        </div>
      </div>

      {/* Desktop Layout (hidden md:flex) */}
      <div
        className="hidden md:flex flex-col items-center justify-center gap-y-[2px] text-[#FFF1EB] font-[family-name:var(--font-bebas)] uppercase leading-[90%] tracking-[-0.03em] text-center"
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
            <Image unoptimized quality={100} src="/images/whyyna1.webp" alt="Planet" fill className="object-contain" />
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
            <Image unoptimized quality={100} src="/images/whyyna2.webp" alt="Hands" fill className="object-contain" />
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
            <Image unoptimized quality={100} src="/images/whyyna3.webp" alt="Star" fill className="object-contain" />
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
            <Image unoptimized quality={100} src="/images/whyyna4.webp" alt="Heart" fill className="object-contain" />
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
            <Image unoptimized quality={100} src="/images/whyyna5.webp" alt="Moon" fill className="object-contain" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
