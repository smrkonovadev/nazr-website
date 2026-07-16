"use client";

import Image from "next/image";
import { useState } from "react";

export function OurValuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const values = [
    {
      title: "Anticipatory design",
      desc: "The micro-moments of a woman’s journey is where support is needed most. From low-light visibility to crisis guidance, our system is designed for every possible scenario.",
      image: "/images/new48.svg"
    },
    {
      title: "SEAMLESS INTEGRATION",
      desc: "Traditional gear can be scary and inconvenient which is something we reject. Nazr is crafted to be a natural, accessible and high-performance integration into your daily carry.",
      image: "/images/new49.svg"
    },
    {
      title: "MODERN HERITAGE",
      desc: "By reclaiming the “Nazar”, we aim to transform the traditional Evil Eye into a symbol of autonomy that enables a cultural statement of identity. ",
      image: "/images/new50.svg"
    },
    {
      title: "QUIET EMPOWERMENT",
      desc: "Our goal is to equip our users with the confidence to take up space knowing they’re prepared. Carrying Nazr is a declaration of rightful independence.",
      image: "/images/new51.svg"
    },
  ];

  return (
    <section className="w-full bg-[#161616] min-h-screen flex items-center py-16 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-[20px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-center max-md:translate-x-0 lg:-translate-x-[70px]">

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

        {/* Right Image Column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px] max-md:translate-y-0 md:translate-y-6 lg:-translate-x-[50px] max-md:mt-12 transition-all duration-500 overflow-hidden">
            {values.map((val, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${hoveredIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
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

      </div>
    </section>
  );
}
