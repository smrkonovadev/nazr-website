"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProductsShowcaseProps {
  leftImage: string;
  centerImage: string;
  rightImage: string;
}

// Map the center image to specific positions for the floating elements
const floatingPositions: Record<string, any> = {
  "/images/blueright.png": {
    owl: "top-[30%] right-[5%] md:right-[15%] rotate-[-45deg]",
    skull: "top-[70%] right-[5%] md:right-[10%] -rotate-[10deg] scale-140",
    globe: "top-[60%] left-[10%] md:left-[15%] rotate-[-15deg] scale-110",
    bubble: "top-[22%] left-[5%] md:left-[-9%] -rotate-3"
  },
  "/images/center.png": {
    owl: "top-[18%] right-[10%] md:right-[21%] rotate-0 scale-140",
    skull: "top-[43%] right-[0%] md:right-[18%] -rotate-[20deg] scale-100",
    globe: "top-[49%] left-[5%] md:left-[23%] -rotate-[38deg] scale-100",
    bubble: "top-[24%] left-[0%] md:left-[-1%] rotate-0"
  },
  "/images/rightimg.png": {
    owl: "top-[14%] right-[5%] md:right-[25%] -rotate-[30deg] scale-110",
    skull: "top-[50%] right-[10%] md:right-[10%] rotate-[-50deg]",
    globe: "top-[60%] left-[5%] md:left-[28%] -rotate-[0deg] scale-170",
    bubble: "top-[12%] left-[0%] md:left-[-10%] rotate-6"
  },
  "/images/NAZR360.svg": {
    owl: "top-[14%] right-[5%] md:right-[25%] -rotate-[30deg] scale-110",
    skull: "top-[50%] right-[10%] md:right-[10%] rotate-[-50deg]",
    globe: "top-[60%] left-[5%] md:left-[28%] -rotate-[0deg] scale-170",
    bubble: "top-[12%] left-[0%] md:left-[-10%] rotate-6"
  }
};

export function ProductsShowcase({ leftImage, centerImage, rightImage }: ProductsShowcaseProps) {

  // Fallback to center positions if the image isn't in our config
  const pos = floatingPositions[centerImage] || floatingPositions["/images/center.png"];

  return (
    <section className="w-full flex justify-center pt-0 pb-0 relative z-20 -mt-1 md:-mt-24 overflow-hidden">
      <div className="w-full max-w-[1280px] px-0 md:px-[60px] lg:px-[80px] grid grid-cols-[0.8fr_2fr_0.8fr] md:grid-cols-[1fr_2fr_1fr] gap-0 md:gap-4 items-center">

        {/* Left Product */}
        <div className="w-full relative h-[300px] md:h-[350px] flex justify-center items-center opacity-50 translate-x-[-30%] md:translate-x-0">
          <motion.img
            key={`left-${leftImage}`}
            layoutId={`product-${leftImage}`}
            src={leftImage}
            alt="Left Product"
            className={`object-contain absolute w-full h-full scale-[2.2] md:scale-100 origin-right md:origin-center ${leftImage.includes('blueright') ? 'p-6 md:p-16' : ''}`}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>

        {/* Center Product & Floating Elements */}
        <div className={`w-full relative h-[500px] md:h-[800px] flex justify-center items-center z-20 transition-transform duration-500 ease-in-out ${(centerImage.includes('rightimg') || centerImage.includes('NAZR360')) ? 'translate-y-[80px] md:translate-y-0' :
            centerImage.includes('blueright') ? 'translate-y-[30px] md:translate-y-0' :
              'translate-y-[50px] md:translate-y-0'
          }`}>

          {/* Main Center Image (Animated via layoutId) */}
          <motion.img
            key={`center-${centerImage}`}
            layoutId={`product-${centerImage}`}
            src={centerImage}
            alt="Center Product"
            className={`object-contain absolute w-full h-full z-10 scale-[1.6] md:scale-100 origin-center ${centerImage.includes('blueright') ? 'p-6 md:p-16' : ''}`}
            style={{
              top: (centerImage.includes('rightimg') || centerImage.includes('NAZR360')) ? '-45px' : centerImage.includes('blueright') ? '84px' : '0px'
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {/* Floating Blue Owl Logo */}
          <div className={`absolute w-[60px] h-[60px] md:w-[100px] md:h-[100px] z-30 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${pos.owl}`}>
            <Image
              src="/images/bluelogogroup.svg"
              alt="Blue Owl Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Floating Green Skull */}
          <div className={`absolute w-[80px] h-[80px] md:w-[100px] md:h-[100px] z-30 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${pos.skull}`}>
            <Image
              src="/images/greenskullvector.svg"
              alt="Green Skull"
              fill
              className="object-contain"
            />
          </div>

          {/* Floating Wireframe Globe */}
          <div className={`absolute w-[80px] h-[80px] md:w-[60px] md:h-[60px] z-30 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${pos.globe}`}>
            <Image
              src="/images/globe.png"
              alt="Wireframe Globe"
              fill
              className="object-contain"
            />
          </div>

          {/* Custom CSS Pink Thought Bubble */}
          <div className={`hidden md:block absolute w-[150px] md:w-[200px] z-30 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${pos.bubble}`}>
            <div className="relative bg-[#F9007E] rounded-[30px] p-5 md:p-4 shadow-2xl">
              <p className="text-white font-[Inter] text-[12px] md:text-[14px] leading-tight font-medium text-center">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>

              {/* Thought bubbles tail */}
              <div className="absolute bottom-[-15px] right-[40px] w-5 h-5 bg-[#F9007E] rounded-full"></div>
              <div className="absolute bottom-[-30px] right-[30px] w-3 h-3 bg-[#F9007E] rounded-full"></div>
              <div className="absolute bottom-[-40px] right-[20px] w-1.5 h-1.5 bg-[#F9007E] rounded-full"></div>
            </div>
          </div>

        </div>

        {/* Right Product */}
        <div className="w-full relative h-[300px] md:h-[350px] flex justify-center items-center opacity-50 translate-x-[30%] md:translate-x-0">
          <motion.img
            key={`right-${rightImage}`}
            layoutId={`product-${rightImage}`}
            src={rightImage}
            alt="Right Product"
            className={`object-contain absolute w-full h-full scale-[2.2] md:scale-100 origin-left md:origin-center ${rightImage.includes('blueright') ? 'p-6 md:p-16' : ''}`}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>

      </div>
    </section>
  );
}
