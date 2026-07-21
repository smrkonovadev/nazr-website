"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function HorizontalScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      if (trackRef.current) {
        setScrollRange(trackRef.current.scrollWidth - window.innerWidth);
      }
    };

    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0.25, 0.95], [0, -scrollRange]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#F1E4DE] w-full">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden w-full py-6 md:py-10">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex flex-row flex-nowrap items-center h-full w-max"
        >

          {/* First Viewport (100vw wide) */}
          <div className="w-[100vw] flex flex-row items-center justify-between flex-shrink-0 pl-[5vw]">
            {/* Block 1: Title */}
            <div className="flex flex-col justify-center translate-y-0">
              <h2 className="font-[family-name:var(--font-bebas)] max-md:text-[60px] md:text-[90px] lg:text-[110px] xl:text-[120px] leading-[90%] tracking-[-0.03em] text-[#161616] m-0 mb-8 md:mb-12 uppercase max-w-[320px] md:max-w-[650px] lg:max-w-[900px] xl:max-w-[900px]">
                They Tell you to lower your gaze, we tell you to sharpen it.              </h2>
            </div>

            {/* Block 2: First Image (Only 2/5 visible initially) */}
            <div className="relative max-md:w-[280px] md:w-[640px] h-[58vh] md:h-[80vh] flex-shrink-0 rounded-[16px] overflow-hidden shadow-xl max-md:-mr-[180px] md:-mr-[380px] translate-y-0">
              <Image
                src="/images/image3.png"
                alt="Woman walking with coffee"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Rest of the horizontal track */}
          <div className="flex flex-row items-center gap-x-[10vw] max-md:ml-[calc(180px+10vw)] md:ml-[calc(260px+10vw)] lg:ml-[calc(320px+10vw)] pr-[10vw]">
            {/* Block 3: Text */}
            <div className="flex flex-col justify-center w-[280px] md:w-[450px] lg:w-[680px] flex-shrink-0">
              <p className="text-[#161616] font-semibold max-md:text-[18px] md:text-[24px] lg:text-[28px] uppercase leading-[110%] tracking-[-0.03em]">

                To Equip with Confidence<br /><br />

                Nazr bridges the gap between high-end aesthetics and uncompromising security.
                OUR tools are as intuitive as they are effective, ensuring that every woman can navigate her world with the quiet authority of being prepared, not just protected.              </p>
            </div>

            {/* Block 4: Second Image */}
            <div className="relative max-md:w-[280px] md:w-[640px] h-[58vh] md:h-[80vh] flex-shrink-0 rounded-[16px] overflow-hidden shadow-xl translate-y-0">
              <Image
                src="/images/image3.png"
                alt="Woman walking with coffee"
                fill
                className="object-cover"
              />
            </div>

            {/* Block 5: Text */}
            <div className="flex flex-col justify-center w-[280px] md:w-[450px] lg:w-[680px] flex-shrink-0">
              <p className="text-[#161616] font-medium max-md:text-[18px] md:text-[24px] lg:text-[28px] uppercase leading-[110%] tracking-[-0.03em] font-sans">

                A Culture of Unblinking Presence<br /><br />

                WE ARE setting a new standard of women’s safety in the Indian B2C space by shifting the narrative from a reaction to fear toward a culture of ownership.
                We are building a future where the Nazr Owl is the symbol for "Every Day Carry," representing a guardian that never blinks.              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
