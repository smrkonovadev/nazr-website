'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export function ScalableShopCollage() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="w-full relative mx-auto overflow-hidden flex justify-center max-md:h-[680px] md:h-[720px] max-w-[1440px]"
    >
      {/* SVG Liquid Water Wave Ripple Displacement Filter */}
      <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <filter id="water-wave-ripple" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02 0.04"
            numOctaves="2"
            result="waveNoise"
          >
            <animate
              attributeName="baseFrequency"
              dur="6s"
              values="0.015 0.035; 0.03 0.015; 0.015 0.035"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="waveNoise"
            scale="16"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div
        className="absolute left-1/2 w-full h-full top-0 max-w-[1440px]"
        style={{
          transform: 'translateX(-50%)'
        }}
      >
        <div
          className="relative w-full h-full"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setMousePos({ x: -1000, y: -1000 });
          }}
        >

          {/* Base Monochrome Artwork Layer - z-[5] */}
          {/* Top-Left Branch (shop-branch-left.webp) */}
          <div
            className="absolute z-[5] pointer-events-none max-md:w-[260px] max-md:left-[-12%] max-md:top-[-6%] md:w-[clamp(360px,38vw,540px)] md:left-[-12%] md:top-[-28%]"
          >
            <Image
              unoptimized
              quality={100}
              src="/images/shop-branch-left.webp"
              alt="Top Left Branch"
              width={764}
              height={658}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Bottom-Left Branch (shop-branch-right.webp) */}
          <div
            className="absolute z-[5] pointer-events-none max-md:w-[400px] max-md:left-[-6%] max-md:bottom-[-20%] max-md:top-auto max-md:rotate-[-45deg] max-md:origin-bottom-left md:w-[clamp(480px,50vw,750px)] md:left-[-8%] md:bottom-[-11%] md:rotate-0"
          >
            <Image
              unoptimized
              quality={100}
              src="/images/shop-branch-right.webp"
              alt="Bottom Left Branch"
              width={1009}
              height={768}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Owl (shop-owl.webp) - Scaled for mobile right-side placement */}
          <div
            className="absolute z-[5] pointer-events-none max-md:w-[310px] max-md:right-[-12%] max-md:bottom-0 max-md:top-auto md:w-[clamp(400px,40vw,600px)] md:right-[0%] md:top-[-2%] md:h-[104%]"
          >
            <Image
              unoptimized
              quality={100}
              src="/images/shop-owl.webp"
              alt="Halftone Owl"
              width={590}
              height={885}
              className="w-full h-full object-contain object-right-bottom"
            />
          </div>

          {/* Dynamic Pink Spotlight Layer with Liquid Water Wavy Effect - z-[6] */}
          <div
            className="absolute inset-0 pointer-events-none z-[6] transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              WebkitMaskImage: `radial-gradient(circle 90px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
              maskImage: `radial-gradient(circle 90px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
              filter: isHovered ? 'url(#water-wave-ripple)' : 'none',
            }}
          >
            {/* Top-Left Branch (Strict Pink ASCII) */}
            <div
              className="absolute pointer-events-none max-md:w-[260px] max-md:left-[-12%] max-md:top-[-6%] md:w-[clamp(360px,38vw,540px)] md:left-[-12%] md:top-[-28%]"
            >
              <Image
                unoptimized
                quality={100}
                src="/images/shop-branch-left-pink.webp"
                alt="Top Left Branch Pink"
                width={764}
                height={658}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Bottom-Left Branch (Strict Pink ASCII) */}
            <div
              className="absolute pointer-events-none max-md:w-[400px] max-md:left-[-6%] max-md:bottom-[-20%] max-md:top-auto max-md:rotate-[-45deg] max-md:origin-bottom-left md:w-[clamp(480px,50vw,750px)] md:left-[-8%] md:bottom-[-11%] md:rotate-0"
            >
              <Image
                unoptimized
                quality={100}
                src="/images/shop-branch-right-pink.webp"
                alt="Bottom Left Branch Pink"
                width={1009}
                height={768}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right Owl (Strict Pink ASCII) */}
            <div
              className="absolute pointer-events-none max-md:w-[310px] max-md:right-[-12%] max-md:bottom-0 max-md:top-auto md:w-[clamp(400px,40vw,600px)] md:right-[0%] md:top-[-2%] md:h-[104%]"
            >
              <Image
                unoptimized
                quality={100}
                src="/images/shop-owl-pink.webp"
                alt="Halftone Owl Pink"
                width={590}
                height={885}
                className="w-full h-full object-contain object-right-bottom"
              />
            </div>
          </div>

          {/* Center Text Group: Title + Spacing + Subtitle */}
          <div className="absolute max-md:top-[6%] md:top-[4%] w-full flex flex-col items-center justify-center pointer-events-none z-[10] px-4">
            {/* Title (Mobile Figma Specs: Bebas Neue, 400, 92px, leading 88%, tracking -3%) */}
            <h1
              className="font-[family-name:var(--font-bebas)] text-[#161616] max-md:text-[92px] md:text-[220px] font-normal max-md:leading-[88%] md:leading-[90%] max-md:tracking-[-0.03em] md:tracking-[-0.03em] m-0 text-center uppercase"
              style={{
                // @ts-ignore
                leadingTrim: 'cap-height',
              }}
            >
              NAZR <br />
              PRODUCTS
            </h1>

            {/* Subtitle (Mobile Figma Specs: Switzer, 600, 14px, leading 115%, tracking -3%, UPPERCASE, 3 lines max-w-[290px]) */}
            <p
              className="font-['Switzer',_sans-serif] md:font-['Inter',_sans-serif] text-[#161616] text-center max-md:text-[14px] md:text-[24px] font-semibold max-md:leading-[115%] md:leading-[110%] max-md:tracking-[-0.03em] md:tracking-[-0.03em] max-md:max-w-[290px] md:max-w-[460px] uppercase md:normal-case max-md:mt-[20px] md:mt-[32px]"
              style={{
                // @ts-ignore
                leadingTrim: 'cap-height',
              }}
            >
              Discover thoughtfully designed safety essentials for everyday confidence and peace of mind.
            </p>
          </div>

          {/* SHOP NOW Button (Mobile Figma Specs: Switzer, 600, 18px, leading 110%, tracking -3%, UPPERCASE, Underline) */}
          <div className="absolute max-md:bottom-[24px] md:bottom-[4%] w-full flex justify-center z-[20]">
            <a
              href="#products"
              className="font-['Switzer',_sans-serif] text-[#161616] max-md:text-[18px] md:text-[18px] font-semibold max-md:leading-[110%] md:leading-[110%] max-md:tracking-[-0.03em] md:tracking-[0.08em] uppercase underline underline-offset-4 decoration-[1.5px] hover:opacity-70 transition-opacity pointer-events-auto"
            >
              SHOP NOW
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
