"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { ScrollRevealText } from "./ScrollRevealText";

export function SafetyCommunitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "start 30%"]
  });

  return (
    <section ref={sectionRef} className="w-full bg-[#161616] flex justify-center overflow-visible z-20 relative pt-[8.2vw] pb-[24.6vw] md:pt-[60px] md:pb-[60px] md:h-[1327.43px]">
      <div className="w-full px-[4.1vw] md:px-0 flex flex-col items-center relative max-w-[1280px] mx-auto md:w-[1220px] md:h-full">

        {/* Mobile Layout (Natural Wrapping) */}
        <div className="md:hidden w-full mx-auto flex flex-col gap-[10.2vw] z-10 pt-0">
          <ScrollRevealText
            text={"WOMEN HAVE ALWAYS BUILT SAFETY THROUGH SHARED INSTINCTS, TRUSTED CIRCLES, AND LOOKING OUT FOR ONE ANOTHER. NAZR BUILDS ON THAT FOUNDATION, COMBINING TECHNOLOGY, PRODUCTS, AND COMMUNITY TO CREATE A MORE CONNECTED APPROACH TO SAFETY."}
            className="m-0 font-[family-name:var(--font-bebas)] text-[7.17vw] text-center"
            style={{ lineHeight: '120%', letterSpacing: '-0.01em', fontWeight: 400 }}
            scrollYProgress={scrollYProgress}
            progressRange={[0, 1]}
            emptyColor="#333333"
          />

          {/* Mobile White Grid Fallback */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-10%" }}
            className="w-full bg-white rounded-[24px] border-[4px] border-[#EDEDED] p-6 mt-12 flex flex-col gap-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 relative rounded-full overflow-hidden shrink-0">
                <Image src="/images/elipseface.png" fill className="object-cover" alt="avatar" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-[family-name:var(--font-bebas)] text-2xl m-0 leading-none">ON ME PEPPER SPRAY</h4>
                <p className="text-sm m-0 leading-tight">It is a long established fact that a reader will be</p>
              </div>
            </div>

            <div className="w-full relative aspect-[233/263] rounded-[16px] overflow-hidden border-[0.5px] border-black">
              <Image src="/images/image1.png" fill className="object-cover" alt="" />
            </div>
            <div className="w-full relative aspect-[482/263] rounded-[16px] overflow-hidden border-[0.5px] border-black bg-[#D9D9D9]">
              <Image src="/images/image2.png" fill className="object-cover" alt="" />
            </div>
            <div className="w-full relative aspect-[375/541] rounded-[16px] overflow-hidden border-[0.5px] border-black">
              <Image src="/images/image3.png" fill className="object-cover" alt="" />
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout (Exact Spec) */}
        <div className="hidden md:flex flex-col relative w-full h-full">

          {/* Top Block: Text + Stickers */}
          <div className="relative w-full flex justify-between" style={{ height: "466.28px" }}>

            {/* Text Box */}
            <div className="flex flex-col relative z-10" style={{ width: '599px', height: '356px', paddingTop: '40px', gap: '10px' }}>
              <ScrollRevealText
                text={"Women have always built safety through shared instincts, trusted circles, and looking out for one another. NAZR builds on that foundation through thoughtful technology, everyday essentials, and a community that believes peace of mind is something we create together."}
                className="m-0 font-[family-name:var(--font-bebas)] text-[#FFF9EB] text-left"
                style={{ fontSize: '40px', lineHeight: '120%', letterSpacing: '-0.01em', fontWeight: 400 }}
                scrollYProgress={scrollYProgress}
                progressRange={[0, 1]}
                emptyColor="#333333"
              />
            </div>

            {/* 4 Stickers Container */}
            <div className="absolute pointer-events-none z-0" style={{ width: '515.89px', height: '466.28px', top: '0', left: '704.11px' }}>
              {/* Note: I'll position them relative to the main 1220 container since left: 704.11 was given relative to the main container */}
            </div>

            {/* 1st Sticker */}
            <div className="absolute z-10" style={{ width: "206px", height: "206px", top: "53px", left: "704.11px" }}>
              <Image src="/images/new22.svg" alt="Pink circular sticker" fill className="object-contain" />
            </div>

            {/* 2nd Sticker */}
            <div className="absolute z-10" style={{ width: "371.86px", height: "255.01px", top: "0px", left: "926.11px", transform: "rotate(-9.59deg)" }}>
              <Image src="/images/new23.svg" alt="Blue bubble" fill className="object-contain" />
            </div>

            {/* 3rd Sticker */}
            <div className="absolute z-10" style={{ width: "252.48px", height: "195.20px", top: "229px", left: "721.11px", transform: "rotate(36.59deg)" }}>
              <Image src="/images/new24.svg" alt="Pink globe" fill className="object-contain" />
            </div>

            {/* 4th Sticker */}
            <div className="absolute z-10" style={{ width: "254.97px", height: "252.00px", top: "209px", left: "980.11px", transform: "rotate(-60deg)" }}>
              <Image src="/images/new25.svg" alt="Green face" fill className="object-contain" />
            </div>

          </div>

          {/* Bottom Block: White Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-10%" }}
            className="absolute"
            style={{ width: "1220px", height: "741.15px", top: "466.28px", left: "0px", borderRadius: "24.4px", border: "7.12px solid #EDEDED", background: "#FFFFFF", overflow: "hidden" }}
          >

            {/* Grid Header */}
            <div className="absolute flex items-center" style={{ top: "40px", left: "40.67px", gap: "16px" }}>
              <div className="relative rounded-full overflow-hidden" style={{ width: "70px", height: "70px" }}>
                <Image src="/images/elipseface.png" alt="Avatar" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-[family-name:var(--font-bebas)] text-black m-0 leading-none" style={{ fontSize: "36px" }}>ON ME PEPPER SPRAY</h3>
                <p className="font-['Inter',_sans-serif] text-black m-0" style={{ fontSize: "16px", marginTop: "4px" }}>It is a long established fact that a reader will be</p>
              </div>
            </div>

            {/* 1st Image */}
            <div className="absolute border-[#000000]" style={{ width: "233.83px", height: "263.32px", top: "156.57px", left: "40.67px", borderRadius: "16.27px", borderWidth: "0.51px" }}>
              <Image src="/images/1stfromleft.svg" alt="" fill className="object-cover rounded-[16.27px]" />
            </div>

            {/* 2nd Image */}
            <div className="absolute border-[#000000] bg-[#D9D9D9]" style={{ width: "482.92px", height: "263.32px", top: "156.57px", left: "289.75px", borderRadius: "16.27px", borderWidth: "0.51px" }}>
              <Image src="/images/new26.svg" alt="" fill className="object-cover rounded-[16.27px]" />
            </div>

            {/* 3rd Image */}
            <div className="absolute border-[#000000]" style={{ width: "375.15px", height: "541.88px", top: "156.57px", left: "787.92px", borderRadius: "16.27px", borderWidth: "0.51px" }}>
              <Image src="/images/bigright.svg" alt="" fill className="object-cover rounded-[16.27px]" />
            </div>

            {/* 4th Image */}
            <div className="absolute border-[#000000] bg-[#D9D9D9]" style={{ width: "233.83px", height: "263.32px", top: "435.13px", left: "40.67px", borderRadius: "16.27px", borderWidth: "0.51px" }}>
              <Image src="/images/new27.svg" alt="" fill className="object-cover rounded-[16.27px]" />
            </div>

            {/* 5th Image */}
            <div className="absolute border-[#000000] bg-[#D9D9D9]" style={{ width: "233.83px", height: "263.32px", top: "435.13px", left: "289.75px", borderRadius: "16.27px", borderWidth: "0.51px" }}>
              <Image src="/images/new28.svg" alt="" fill className="object-cover rounded-[16.27px]" />
            </div>

            {/* 6th Image */}
            <div className="absolute border-[#000000]" style={{ width: "233.83px", height: "263.32px", top: "435.13px", left: "538.83px", borderRadius: "16.27px", borderWidth: "0.51px" }}>
              <Image src="/images/bottomleft3.svg" alt="" fill className="object-cover rounded-[16.27px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
