"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { ScrollRevealText } from "./ScrollRevealText";

export function SafetyBuiltAlone() {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ["start 90%", "end 50%"]
  });

  return (
    <section className="w-full bg-[#161616] flex justify-center pt-8 md:pt-12 pb-6 md:pb-32 overflow-hidden relative z-20">
      <div className="w-full px-4 md:px-[62px] flex items-center justify-center md:justify-start">

        {/* Left Side: Text */}
        <div ref={textContainerRef} className="w-full max-w-[338px] md:max-w-none md:w-[50%] h-auto min-h-[258px] md:min-h-0 flex flex-col z-10 text-center md:text-left mx-auto md:mx-0 justify-center md:justify-start opacity-100">
          <ScrollRevealText
            text={"SAFETY HAS NEVER BEEN BUILT ALONE. WOMEN HAVE ALWAYS RELIED ON TRUSTED NETWORKS, SHARED ROUTINES, AND LOOKING OUT FOR ONE ANOTHER. NAZR BUILDS ON THAT FOUNDATION, COMBINING TECHNOLOGY, PRODUCTS, AND COMMUNITY TO CREATE A MORE CONNECTED APPROACH TO SAFETY."}
            className="m-0 font-[family-name:var(--font-bebas)] max-[380px]:text-[24px] text-[28px] md:text-[50px] text-center md:text-left"
            style={{
              lineHeight: '120%',
              letterSpacing: '-1%',
              fontWeight: 400,
            }}
            scrollYProgress={scrollYProgress}
            progressRange={[0, 1]}
          />
        </div>

        {/* Right Side: Static Collage */}
        <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[600px] z-0 pointer-events-none">

          {/* Blue Chat Box (Top Right) */}
          <div className="absolute top-[10%] right-[5%] w-[320px] h-[180px] rotate-[7deg]">
            <Image unoptimized quality={100} src="/images/a1.webp" alt="Blue Chat Box" fill className="object-contain" />
          </div>

          {/* Red Badge (Center Left) */}
          <div className="absolute top-[35%] left-[35%] w-[160px] h-[160px] -rotate-[15deg] flex items-center justify-center">
            <div className="absolute w-[95%] h-[95%] bg-white rounded-full z-0"></div>
            <Image unoptimized quality={100} src="/images/a2.webp" alt="Red Badge" fill className="object-contain z-10 relative" />
          </div>

          {/* Green Camera (Center Right) */}
          <div className="absolute top-[40%] right-[12%] w-[180px] h-[180px] rotate-[0deg]">
            <Image unoptimized quality={100} src="/images/greenskullvector.svg" alt="Green Camera" fill className="object-contain" />
          </div>

          {/* Sphere (Bottom Left) */}
          <div className="absolute bottom-[1%] left-[33%] w-[200px] h-[200px] -rotate-[40deg]">
            <Image unoptimized quality={100} src="/images/globe.svg" alt="Sphere" fill className="object-contain" />
          </div>

        </div>

      </div>
    </section>
  );
}
