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

            {/* Sticker Group — shifted 15px left for tighter dancer-text overlap */}
            <div className="absolute z-10" style={{ width: "619.07px", height: "559.54px", top: "0px", left: "690px", overflow: "visible" }}>

              {/* Image 1 — Dancer: W=429.26 H=283.99 top=-18.93 left=-143 */}
              <div className="absolute" style={{ width: "429.26px", height: "400.99px", top: "-55.93px", left: "-143px", transform: "rotate(-3.2deg)", transformOrigin: "center center" }}>
                <Image src="/images/new22.svg" alt="Dancer sticker" fill className="object-contain" />
              </div>

              {/* Image 2 — Disco Ball: scaled 1.2x → W=286.12 H=205.18 */}
              <div className="absolute" style={{ width: "300.12px", height: "300.18px", top: "210px", left: "-30px", transform: "rotate(5.59deg)", transformOrigin: "center center" }}>
                <Image src="/images/new25.svg" alt="Disco ball sticker" fill className="object-contain" />
              </div>

              {/* Image 3 — Headphones: W=329.56 H=187.91 — pulled 50px left, 10px up */}
              <div className="absolute" style={{ width: "300.56px", height: "300.91px", top: "-35px", left: "175px", transform: "rotate(-5.59deg)", transformOrigin: "center center" }}>
                <Image src="/images/new23.svg" alt="Headphones sticker" fill className="object-contain" />
              </div>

              {/* Image 4 — Lips: W=277.94 H=315.98 — pulled 60px left, 40px up */}
              <div className="absolute" style={{ width: "350.94px", height: "350.98px", top: "140px", left: "170px", transform: "rotate(-1.35deg)", transformOrigin: "center center" }}>
                <Image src="/images/new24.svg" alt="Lips star sticker" fill className="object-contain" />
              </div>

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
