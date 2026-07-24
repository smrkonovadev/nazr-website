'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function ScalableShopCollage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="w-full relative mx-auto overflow-hidden flex justify-center max-md:h-[125vw] md:h-[720px] max-w-[1440px]"
    >
      <div
        className="absolute left-1/2 w-full h-full max-md:top-0 md:top-0 max-w-[1440px]"
        style={{
          transform: 'translateX(-50%)'
        }}
      >
        {/* We use a sub-container that is centered and responsive */}
        <div className="relative w-full h-full">

          {/* Huge Background Text - z-10 */}
          <div className="absolute max-md:top-[16%] md:top-[2%] w-full flex flex-col items-center justify-center pointer-events-none z-10">
            <h1
              className="font-[family-name:var(--font-bebas)] text-[#161616] max-md:text-[31.5vw] md:text-[240px] max-md:leading-[0.9] md:leading-[0.8] tracking-[-0.03em] m-0 text-center"
            >
              NAZR <br />
              PRODUCTS
            </h1>
          </div>

          {/* Floating Icons Background Layer */}
          {/* Left Owl Sticker - z-20 (in front of text) */}
          <div
            className="absolute z-20 pointer-events-none"
            style={
              isMobile
                ? {
                  width: '100px',
                  left: '10%',
                  top: '11%',
                  transform: 'rotate(-32deg)',
                }
                : {
                  width: 'clamp(180px, 22.9vw, 330px)',
                  left: '17%',
                  top: '4%',
                }
            }
          >
            <Image
              src="/images/shopow.svg"
              alt="Owl Sticker"
              width={330}
              height={252}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Pink Eye Sticker - z-20 (in front of text) */}
          <div
            className="absolute z-20 pointer-events-none"
            style={
              isMobile
                ? {
                  width: '56px',
                  height: '52px',
                  right: '13%',
                  top: '26%',
                  transform: 'rotate(12deg)',
                }
                : {
                  width: 'clamp(110px, 12.8vw, 185px)',
                  right: '17.5%',
                  top: '12.5%',
                }
            }
          >
            <Image
              src="/images/shop.svg"
              alt="Pink Eye Sticker"
              width={185}
              height={170}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Center Product Collage */}
          <div
            className="absolute left-1/2 -translate-x-1/2 max-md:top-[42%] max-md:w-[92vw] max-md:h-[60vw] z-20"
            style={{
              width: 'clamp(400px, 48.6vw, 700px)',
              height: 'clamp(260px, 31.25vw, 450px)',
              top: '27%'
            }}
          >

            {/* Left Purple Coaster/Sticker */}
            <div className="absolute max-md:left-[8%] max-md:top-[40%] max-md:w-[38%] md:left-[6%] md:top-[10%] md:w-[44%] aspect-square z-10">
              <Image
                src="/images/shop2.svg"
                alt="Purple Coaster"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right Pink Coaster/Sticker */}
            <div className="absolute max-md:right-[7%] max-md:top-[35%] max-md:w-[40%] md:right-[5%] md:top-[6%] md:w-[46%] aspect-square z-20">
              <Image
                src="/images/shop1.svg"
                alt="Pink Coaster"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* Center Spray Bottle */}
            <div className="absolute left-1/2 -translate-x-1/2 max-md:top-[-22%] md:top-[-40%] w-[55%] aspect-[1/2] z-30">
              <Image
                src="/images/spray-pink.png"
                alt="Pink Spray"
                fill
                className="object-contain drop-shadow-2xl transform rotate-6"
              />
            </div>

            {/* Cursive Blue NAZR Overlap */}
            <div
              className="absolute left-1/2 max-md:top-[78%] md:top-[56%] z-[60] text-[#0E8DFF] pointer-events-none whitespace-nowrap"
              style={{
                fontFamily: 'var(--font-signpainter), SignPainter, "HouseScript Semibold", cursive',
                fontSize: isMobile ? '107.33px' : 'clamp(80px, 13.8vw, 198.95px)',
                fontWeight: 400,
                lineHeight: '90%',
                letterSpacing: '-0.03em',
                textAlign: 'center',
                transform: isMobile ? 'translateX(-50%) rotate(0deg)' : 'translateX(-50%) rotate(-5deg)',
                opacity: 1,
                // @ts-ignore
                leadingTrim: 'cap-height',
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
