"use client";

import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import shelfAnimData from "../../../public/images/Shelf.json";
import bagAnimData from "../../../public/images/Bag.json";
import singingBowlAnimData from "../../../public/images/Singing Bowl.json";
import newspaperAnimData from "../../../public/images/Newspaper.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function OurValuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const values = [
    {
      title: "Anticipatory design",
      desc: "The micro-moments of a woman’s journey is where support is needed most. From low-light visibility to crisis guidance, our system is designed for every possible scenario.",
      lottie: shelfAnimData,
      image: "/images/OUR1.svg"
    },
    {
      title: "SEAMLESS INTEGRATION",
      desc: "Traditional gear can be scary and inconvenient which is something we reject. Nazr is crafted to be a natural, accessible and high-performance integration into your daily carry.",
      lottie: bagAnimData,
      image: "/images/OUR2.svg"
    },
    {
      title: "MODERN HERITAGE",
      desc: "By reclaiming the “Nazar”, we aim to transform the traditional Evil Eye into a symbol of autonomy that enables a cultural statement of identity. ",
      lottie: singingBowlAnimData,
      image: "/images/OUR3.svg"
    },
    {
      title: "QUIET EMPOWERMENT",
      desc: "Our goal is to equip our users with the confidence to take up space knowing they’re prepared. Carrying Nazr is a declaration of rightful independence.",
      lottie: newspaperAnimData,
      image: "/images/OUR4.svg"
    },
  ];

  return (
    <section className="w-full bg-[#161616] min-h-screen flex items-center py-12 md:py-16 overflow-hidden">
      {/* Mobile Layout (md:hidden) */}
      <div className="md:hidden w-full flex flex-col items-center py-4">
        {/* Mobile Header */}
        <div className="px-6 mb-8 text-center">
          <h2 className="font-[family-name:var(--font-bebas)] text-[48px] leading-[90%] text-[#FFF9EB] m-0 mb-3 tracking-[-0.01em]">
            OUR VALUES
          </h2>
          <p className="text-[#FFF9EB]/90 font-medium text-[15px] leading-[135%] max-w-[320px] mx-auto tracking-[-0.01em]">
            The values that bring together our unique perspectives, talents and experiences.
          </p>
        </div>

        {/* Mobile Horizontal Snap Scroll Cards */}
        <div className="w-full flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
          {values.map((val, idx) => (
            <div 
              key={idx}
              className="snap-center min-w-[280px] w-[280px] flex flex-col rounded-[24px] overflow-hidden bg-[#F1E4DE] shadow-xl flex-shrink-0"
            >
              {/* Unified Media Section (Clean cream bg to match card border-radius) */}
              <div className="w-full h-[280px] relative overflow-hidden bg-[#F1E4DE] flex items-center justify-center p-3">
                <Lottie
                  animationData={val.lottie}
                  loop
                  autoplay
                  style={{ width: "100%", height: "100%" }}
                  rendererSettings={{ preserveAspectRatio: "xMidYMid contain" }}
                />
              </div>

              {/* Text Card Section */}
              <div className="p-6 flex flex-col bg-[#F1E4DE]">
                <h3 className="font-[family-name:var(--font-bebas)] text-[24px] leading-[100%] uppercase mb-3 tracking-wider text-[#161616] font-bold">
                  {val.title}
                </h3>
                <p className="text-[13px] leading-[140%] text-[#161616]/80 font-medium">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop / Laptop Layout (hidden md:flex) */}
      <div className="hidden md:flex w-full max-w-[1200px] mx-auto px-[40px] flex-row justify-between items-center gap-8">

        {/* Left Content Column */}
        <div className="w-full lg:w-[664px] flex flex-col justify-center" onMouseLeave={() => setHoveredIndex(null)}>

          {/* Main Typography */}
          <div className="mb-[72px]">
            <h2 className="font-[family-name:var(--font-bebas)] text-[60px] md:text-[100px] lg:text-[120px] leading-[85%] text-[#FFF9EB] m-0 mb-3 tracking-[-0.01em]">
              OUR VALUES
            </h2>
            <p className="text-[#FFF9EB] font-bold text-[18px] md:text-[22px] max-w-[700px] leading-[130%] tracking-[-0.01em]">
              The values that bring together our unique perspectives, talents and experiences.
            </p>
          </div>

          {/* 2x2 Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="flex flex-col cursor-pointer transition-opacity duration-300 group"
                onMouseEnter={() => setHoveredIndex(idx)}
              >
                <h3 className={`font-[family-name:var(--font-bebas)] text-[24px] md:text-[30px] leading-[100%] uppercase mb-3 tracking-wider transition-colors duration-300 ${hoveredIndex === idx ? 'text-[#FFF9EB]' : 'text-[#FFF9EB]/50 group-hover:text-[#FFF9EB]/80'}`}>
                  {val.title}
                </h3>
                <p className={`text-[14px] md:text-[15px] leading-[150%] max-w-[350px] transition-colors duration-300 ${hoveredIndex === idx ? 'text-white/80' : 'text-white/40 group-hover:text-white/60'}`}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Right Image Column: Phone Mockup & GIF Display */}
        <div className="w-full lg:w-[360px] h-[574px] flex justify-center items-center relative flex-shrink-0">
          {hoveredIndex === null ? (
            /* Default Static View: PHONEOURVALUES.svg + OUR1.svg screen */
            <div 
              className="relative flex-shrink-0"
              style={{
                width: '360px',
                height: '574px'
              }}
            >
              <div 
                className="absolute z-10"
                style={{
                  width: '263.6px',
                  height: '533.6px',
                  left: '100.7px',
                  top: '0px',
                  transform: 'rotate(10.8845deg)',
                  transformOrigin: 'top left',
                  overflow: 'hidden'
                }}
              >
                <div 
                  className="absolute"
                  style={{
                    top: '12px',
                    left: '12px',
                    right: '12px',
                    bottom: '12px',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    backgroundColor: '#000000'
                  }}
                >
                  <Image
                    src="/images/OUR1.svg"
                    alt="Default Values Mockup"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Phone Mockup Frame (On top, pointer-events-none) */}
              <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
                <Image 
                  src="/images/PHONEOURVALUES.svg" 
                  alt="Phone Mockup Frame"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          ) : (
            /* Hover View: Standalone Decreased Lottie Animations */
            <div className="relative w-[360px] h-[574px] flex items-center justify-center">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500"
                  style={{
                    opacity: hoveredIndex === idx ? 1 : 0,
                    zIndex: hoveredIndex === idx ? 10 : 0,
                    pointerEvents: hoveredIndex === idx ? "auto" : "none"
                  }}
                >
                  <Lottie
                    key={`lottie-${idx}-${hoveredIndex === idx}`}
                    animationData={val.lottie}
                    loop
                    autoplay
                    style={{ width: "100%", height: "100%" }}
                    rendererSettings={{ preserveAspectRatio: "xMidYMid contain" }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
