"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import shelfAnimData from "../../../public/images/Shelf.json";
import bagAnimData from "../../../public/images/Bag.json";
import singingBowlAnimData from "../../../public/images/Singing Bowl.json";
import newspaperAnimData from "../../../public/images/Newspaper.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const values = [
  {
    title: "ANTICIPATORY DESIGN",
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
    desc: "By reclaiming the “Nazar”, we aim to transform the traditional Evil Eye into a symbol of autonomy that enables a cultural statement of identity.",
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

export function OurValuesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through the 4 values every 3.5 seconds when not hovering
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % values.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

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
              {/* Media Section */}
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
        <div 
          className="w-full lg:w-[664px] flex flex-col justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

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
            {values.map((val, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div 
                  key={idx} 
                  className="flex flex-col cursor-pointer transition-all duration-300 group"
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                >
                  <h3 className={`font-[family-name:var(--font-bebas)] text-[24px] md:text-[30px] leading-[100%] uppercase mb-3 tracking-wider transition-colors duration-300 ${isActive ? 'text-[#FFF9EB]' : 'text-[#FFF9EB]/40 group-hover:text-[#FFF9EB]/80'}`}>
                    {val.title}
                  </h3>
                  <p className={`text-[14px] md:text-[15px] leading-[150%] max-w-[350px] transition-colors duration-300 ${isActive ? 'text-[#FFF9EB]/90' : 'text-white/30 group-hover:text-white/60'}`}>
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Image Column: Phone Mockup Frame & Tilted Lottie Screen Display */}
        <div 
          className="w-full lg:w-[360px] h-[574px] flex justify-center items-center relative flex-shrink-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="relative flex-shrink-0"
            style={{
              width: '360px',
              height: '574px'
            }}
          >
            {/* Inner Tilted Screen Container (Rotated 10.8845deg to match phone frame) */}
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
                  backgroundColor: '#F1E4DE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {values.map((val, idx) => (
                  <div
                    key={idx}
                    className="absolute inset-0 w-full h-full flex items-center justify-center p-3 transition-opacity duration-700 ease-in-out"
                    style={{
                      opacity: activeIndex === idx ? 1 : 0,
                      zIndex: activeIndex === idx ? 10 : 0,
                      pointerEvents: activeIndex === idx ? "auto" : "none"
                    }}
                  >
                    <Lottie
                      animationData={val.lottie}
                      loop
                      autoplay
                      style={{ width: "100%", height: "100%" }}
                      rendererSettings={{ preserveAspectRatio: "xMidYMid contain" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Mockup Frame Overlay */}
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
        </div>

      </div>
    </section>
  );
}
