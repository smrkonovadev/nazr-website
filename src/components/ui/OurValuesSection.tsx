"use client";

import Image from "next/image";
import { useState } from "react";

export function OurValuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const values = [
    {
      title: "Anticipatory design",
      desc: "The micro-moments of a woman’s journey is where support is needed most. From low-light visibility to crisis guidance, our system is designed for every possible scenario.",
      image: "/images/OUR1.svg"
    },
    {
      title: "SEAMLESS INTEGRATION",
      desc: "Traditional gear can be scary and inconvenient which is something we reject. Nazr is crafted to be a natural, accessible and high-performance integration into your daily carry.",
      image: "/images/OUR2.svg"
    },
    {
      title: "MODERN HERITAGE",
      desc: "By reclaiming the “Nazar”, we aim to transform the traditional Evil Eye into a symbol of autonomy that enables a cultural statement of identity. ",
      image: "/images/OUR3.svg"
    },
    {
      title: "QUIET EMPOWERMENT",
      desc: "Our goal is to equip our users with the confidence to take up space knowing they’re prepared. Carrying Nazr is a declaration of rightful independence.",
      image: "/images/OUR4.svg"
    },
  ];

  return (
    <section className="w-full bg-[#161616] min-h-screen flex items-center py-16 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-[40px] flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">

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

        {/* Right Image Column: Phone Mockup */}
        <div className="w-full lg:w-[404px] h-[644px] flex justify-center items-center relative flex-shrink-0">
          <div 
            className="relative flex-shrink-0"
            style={{
              width: '404px',
              height: '644px'
            }}
          >
            {/* Hovered screen overlay inside the phone screen */}
            <div 
              className="absolute z-10"
              style={{
                width: '295.6px',
                height: '598.7px',
                left: '113.047px',
                top: '0px',
                transform: 'rotate(10.8845deg)',
                transformOrigin: 'top left',
                overflow: 'hidden'
              }}
            >
              <div 
                className="absolute"
                style={{
                  top: '14px',
                  left: '14px',
                  right: '14px',
                  bottom: '14px',
                  borderRadius: '36px',
                  overflow: 'hidden',
                  backgroundColor: '#000000'
                }}
              >
                {values.map((val, idx) => (
                  <div 
                    key={idx}
                    className="absolute inset-0 w-full h-full transition-opacity duration-500"
                    style={{
                      opacity: hoveredIndex === idx ? 1 : 0,
                      zIndex: hoveredIndex === idx ? 10 : 0,
                      pointerEvents: 'none'
                    }}
                  >
                    <Image
                      src={val.image}
                      alt={val.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Phone Mockup Frame (On top, pointer-events-none) */}
            <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
              <Image 
                src="/images/PHONEOURVALUES.svg" 
                alt="Phone Mockup"
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
