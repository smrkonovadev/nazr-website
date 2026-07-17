'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function ScalableShopCollage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="w-full relative mx-auto overflow-hidden flex justify-center max-md:h-[150vw] md:h-[850px] max-w-[1440px]"
    >
      <div
        className="absolute left-1/2 w-full max-md:max-w-full md:w-[1440px] h-full max-md:top-0 md:top-0"
        style={{
          transform: 'translateX(-50%)'
        }}
      >
        {/* We use a sub-container that is centered and exactly 1440x850 */}
        <div className="relative w-full h-full">

          {/* Huge Background Text */}
          <div className="absolute max-md:top-[12%] md:top-[8%] w-full flex flex-col items-center justify-center pointer-events-none z-0">
            <h1
              className="font-[family-name:var(--font-bebas)] text-[#161616] max-md:text-[31.5vw] md:text-[240px] max-md:leading-[0.9] md:leading-[0.8] tracking-[-0.03em] m-0 text-center"
            >
              NAZR <br />
              PRODUCTS
            </h1>
          </div>

          {/* Floating Icons Background Layer */}
          <div className="absolute max-md:left-[11%] max-md:top-[7%] max-md:w-[21.25vw] md:left-[23%] md:top-[25%] md:w-[120px] z-10 pointer-events-none">
            <Image
              src="/images/globe.png"
              alt="Globe"
              width={120}
              height={120}
              className="w-full h-auto object-contain transform -rotate-45"
            />
          </div>

          <div className="absolute max-md:right-[10%] max-md:top-[19%] max-md:w-[21.25vw] md:right-[20%] md:top-[26%] md:w-[140px] z-10 pointer-events-none">
            <Image
              src="/images/greenlens.png"
              alt="Green Lens"
              width={140}
              height={140}
              className="w-full h-auto object-contain transform rotate-355"
            />
          </div>

          {/* Center Product Collage */}
          <div className="absolute left-1/2 -translate-x-1/2 max-md:top-[32%] max-md:w-[120vw] max-md:h-[77.5vw] md:top-[35%] md:w-[700px] md:h-[450px] z-20">

            {/* Left Pink Box */}
            <div className="absolute left-[5%] top-[5%] w-[50%] aspect-square z-20">
              <Image
                src="/images/nazreye1.png"
                alt="Pink Box"
                fill
                className="object-contain drop-shadow-2xl transform -rotate-6"
              />
            </div>

            {/* Right Blue Box */}
            <div className="absolute right-[4%] top-[0%] w-[50%] aspect-square z-50">
              <Image
                src="/images/nazreye.png"
                alt="Blue Box"
                fill
                className="object-contain drop-shadow-2xl transform rotate-12"
              />
            </div>

            {/* Center Spray Bottle */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-45%] w-[55%] aspect-[1/2] z-30">
              <Image
                src="/images/spray-pink.png"
                alt="Pink Spray"
                fill
                className="object-contain drop-shadow-2xl transform rotate-6"
              />
            </div>

            {/* Cursive Blue NAZR Overlap */}
            <div
              className="absolute left-1/2 -translate-x-1/2 max-md:top-[50%] md:top-[52%] z-[60] text-[#0E8DFF] pointer-events-none whitespace-nowrap"
              style={{
                fontFamily: 'SignPainter, cursive',
                fontSize: 'clamp(50px, 37.5vw, 130.92px)',
                fontWeight: 400,
                lineHeight: '90%',
                letterSpacing: '-0.03em',
                transform: 'rotate(-5deg)',
                textAlign: 'center'
              }}
            >
              NAZR
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
