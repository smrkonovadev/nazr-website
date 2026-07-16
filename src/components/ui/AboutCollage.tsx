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
  // Using numeric pixel values ensures smooth interpolation in Framer Motion
  const parallaxY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#161616] pt-8 pb-20 md:py-32 flex flex-col items-center justify-center relative"
    >
      {/* The Collage Container - Apply Parallax */}
      <motion.div
        className="relative w-full max-w-[1200px] max-md:aspect-[3/4] md:aspect-[16/10] flex items-center justify-center mx-auto"
        style={{ y: parallaxY }}
      >

        {/* Center Image (Subway Woman) - Fades in first */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-md:w-[70%] max-md:h-[85%] md:w-[70%] md:h-[80%] z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/image4.png"
            alt="Subway Woman"
            fill
            className="object-cover rounded-[16px] md:rounded-[24px] shadow-lg"
          />
        </motion.div>

        {/* Top-Left Pink Globe Icon - Pops in */}
        <motion.div
          className="absolute max-md:left-[4%] max-md:top-[-3%] md:left-[12%] md:top-[12%] w-[35%] md:w-[10%] max-w-[120px] z-30"
          initial={{ scale: 0, opacity: 0, rotate: -60 }}
          whileInView={{ scale: 1, opacity: 1, rotate: -30 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.3 }}
        >
          <Image
            src="/images/globe.png"
            alt="Pink Globe"
            width={120}
            height={120}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Left Overlapping Image (Cheering) - Pops in */}
        <motion.div
          className="absolute max-md:left-[2%] max-md:top-[40%] md:left-[10%] md:top-[35%] max-md:w-[40%] md:w-[22%] aspect-[4/3] z-20"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4, delay: 0.4 }}
        >
          <Image
            src="/images/image2.png"
            alt="Cheering Left"
            fill
            className="object-cover rounded-[12px] md:rounded-[20px] shadow-2xl"
          />
        </motion.div>

        {/* Right Overlapping Image (Cheering) - Pops in */}
        <motion.div
          className="absolute max-md:right-[-5%] max-md:top-[15%] md:right-[5%] md:top-[20%] max-md:w-[40%] md:w-[28%] aspect-[4/3] z-20"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4, delay: 0.5 }}
        >
          <Image
            src="/images/image2.png"
            alt="Cheering Right"
            fill
            className="object-cover rounded-[12px] md:rounded-[20px] shadow-2xl"
          />
        </motion.div>

        {/* Bottom Overlapping Image (Cheering) - Pops in */}
        <motion.div
          className="absolute max-md:left-[25%] max-md:bottom-[-10%] md:left-[35%] md:bottom-[0%] max-md:w-[45%] md:w-[18%] aspect-[4/3] z-20"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4, delay: 0.6 }}
        >
          <Image
            src="/images/image2.png"
            alt="Cheering Bottom"
            fill
            className="object-cover rounded-[12px] md:rounded-[20px] shadow-2xl"
          />
        </motion.div>

        {/* Bottom-Right Green Face Icon - Pops in */}
        <motion.div
          className="absolute max-md:right-[0%] max-md:bottom-[20%] md:right-[7%] md:bottom-[0%] max-md:w-[35%] md:w-[25%] max-w-[180px] z-30"
          initial={{ scale: 0, opacity: 0, rotate: -30 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 6 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.7 }}
        >
          <Image
            src="/images/greenlens.png"
            alt="Green Lens"
            width={180}
            height={180}
            className="w-full h-auto object-contain"
          />
        </motion.div>

      </motion.div>
    </section>
  );
}
