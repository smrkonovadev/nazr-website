"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ShaderBackground } from "@/components/ui/ShaderBackground";

function TiltLetter({ char, index, delay, bgStyle, className, globalMouseX, globalMouseY }: any) {
  const ref = useRef<HTMLSpanElement>(null);
  const [center, setCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCenter = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setCenter({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }
    };
    updateCenter();
    // Re-calculate after animations settle
    setTimeout(updateCenter, 2000);
    window.addEventListener('resize', updateCenter);
    return () => window.removeEventListener('resize', updateCenter);
  }, []);

  const localX = useTransform(globalMouseX, (mx: number) => {
    if (!center.x || mx === -1000) return 0;
    const my = globalMouseY.get();
    const distanceX = mx - center.x;
    const distanceY = my - center.y;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDist = 350; // Ripple effect radius
    if (distance > maxDist) return 0;
    const factor = Math.pow(1 - (distance / maxDist), 2); // Smooth falloff
    return distanceX * factor;
  });

  const localY = useTransform(globalMouseY, (my: number) => {
    if (!center.y || globalMouseX.get() === -1000) return 0;
    const mx = globalMouseX.get();
    const distanceX = mx - center.x;
    const distanceY = my - center.y;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDist = 350;
    if (distance > maxDist) return 0;
    const factor = Math.pow(1 - (distance / maxDist), 2);
    return distanceY * factor;
  });

  const mouseXSpring = useSpring(localX, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(localY, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-100, 100], [30, -30]);
  const rotateY = useTransform(mouseXSpring, [-100, 100], [-30, 30]);

  if (char === ' ') {
    return <span className={`inline-block w-[2vw] md:w-[40px] ${className || ''}`}> </span>;
  }

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className || ''}`}
      variants={{
        hidden: { opacity: 0, scale: 0.6 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { type: "spring", bounce: 0.45, duration: 0.6 }
        }
      }}
      style={{
        ...bgStyle,
        rotateX,
        rotateY,
        transformPerspective: 800
      }}
    >
      {char}
    </motion.span>
  );
}

export function Hero() {
  const globalMouseX = useMotionValue(-1000);
  const globalMouseY = useMotionValue(-1000);

  function handleMouseMove(e: React.MouseEvent) {
    globalMouseX.set(e.clientX);
    globalMouseY.set(e.clientY);
  }

  function handleMouseLeave() {
    globalMouseX.set(-1000);
    globalMouseY.set(-1000);
  }

  return (
    <section
      className="relative w-full overflow-hidden md:overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-full bg-[#242424] relative z-[70] max-md:mt-0 md:-mt-[48px] overflow-x-clip md:overflow-visible flex flex-col items-center md:block pt-4 pb-4 md:pt-0 md:pb-0 min-h-[calc(100dvh-60px)] md:min-h-[630px]"
      >
        {/* Shader Background Effect */}
        <ShaderBackground imageUrl="/images/image 59.svg" colorA="#242424" colorB="#D46FB3" className="rounded-none" />

        {/* ================= MOBILE HERO LAYOUT (100% Screen Height Fit) ================= */}
        <div className="w-full flex flex-col justify-between min-h-[calc(100dvh-80px)] px-4 sm:px-6 py-4 relative z-20 md:hidden">
          {/* Top Section: Left Headline + Right Eye Discs */}
          <div className="flex flex-row justify-between items-start w-full relative">
            {/* Left-Aligned Stacked Headline */}
            <div className="flex flex-col items-start z-20">
              {/* Line 1: THE WORLD */}
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
                className="font-[family-name:var(--font-bebas)] uppercase m-0 p-0 flex text-[18.5vw] sm:text-[78px] leading-[90%] tracking-[-0.03em] font-normal whitespace-nowrap text-[#FFFDF7]"
                style={{ fontWeight: 400 }}
              >
                {"THE WORLD".split('').map((char, i) => (
                  <TiltLetter
                    key={`m-tw-${i}`}
                    char={char}
                    index={i}
                    className="text-image-mask"
                    globalMouseX={globalMouseX}
                    globalMouseY={globalMouseY}
                    bgStyle={{
                      backgroundImage: `url('/images/image${(i % 8) + 1}.png')`,
                      animation: `pinkToBlackWave 0.01s linear ${1.66 + (i * 0.09)}s backwards`
                    }}
                  />
                ))}
              </motion.h1>

              {/* Line 2: STARES STARE */}
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { delayChildren: 0.15, staggerChildren: 0.04 } } }}
                className="font-[family-name:var(--font-bebas)] uppercase m-0 p-0 flex text-[18.5vw] sm:text-[78px] leading-[90%] tracking-[-0.03em] font-normal whitespace-nowrap mt-1 text-[#FFFDF7]"
                style={{ fontWeight: 400 }}
              >
                {"STARES STARE".split('').map((char, i) => {
                  const idx = i + 9;
                  return (
                    <TiltLetter
                      key={`m-ss-${i}`}
                      char={char}
                      index={idx}
                      className="text-image-mask"
                      globalMouseX={globalMouseX}
                      globalMouseY={globalMouseY}
                      bgStyle={{
                        backgroundImage: `url('/images/image${(idx % 8) + 1}.png')`,
                        animation: `pinkToBlackWave 0.01s linear ${1.66 + (idx * 0.09)}s backwards`
                      }}
                    />
                  );
                })}
              </motion.h1>

              {/* Line 3: BACK */}
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { delayChildren: 0.3, staggerChildren: 0.04 } } }}
                className="font-[family-name:var(--font-bebas)] uppercase m-0 p-0 flex text-[18.5vw] sm:text-[78px] leading-[90%] tracking-[-0.03em] font-normal whitespace-nowrap mt-1 text-[#FFFDF7]"
                style={{ fontWeight: 400 }}
              >
                {"BACK".split('').map((char, i) => {
                  const idx = i + 21;
                  return (
                    <TiltLetter
                      key={`m-bk-${i}`}
                      char={char}
                      index={idx}
                      className="text-image-mask"
                      globalMouseX={globalMouseX}
                      globalMouseY={globalMouseY}
                      bgStyle={{
                        backgroundImage: `url('/images/image${(idx % 8) + 1}.png')`,
                        animation: `pinkToBlackWave 0.01s linear ${1.66 + (idx * 0.09)}s backwards`
                      }}
                    />
                  );
                })}
              </motion.h1>
            </div>

            {/* Top Right Floating Circular Eye Discs */}
            <div className="absolute top-[25vw] sm:top-10 right-[-4vw] w-[54vw] max-w-[210px] h-[54vw] max-h-[210px] z-30 pointer-events-none">
              {/* Left/Purple Disc */}
              <motion.div
                className="absolute w-[36vw] max-w-[145px] h-[36vw] max-h-[145px] top-[15%] left-[20px]"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: -10 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.7, delay: 0.2 }}
              >
                <Image unoptimized quality={100} src="/images/nazreyeback.webp"
                  alt="Eye Sticker Purple"
                  fill
                  className="object-contain drop-shadow-md"
                />
              </motion.div>
              {/* Right/Pink Disc */}
              <motion.div
                className="absolute w-[36vw] max-w-[165px] h-[46vw] max-h-[165px] top-[-2] right-0"
                initial={{ scale: 0, rotate: 10 }}
                animate={{ scale: 1, rotate: 2 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.7, delay: 0.3 }}
              >
                <Image unoptimized quality={100} src="/images/nazreyefront.webp"
                  alt="Eye Sticker Pink"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>
            </div>
          </div>

          {/* Mid-Right Pink Pepper Spray Bottle (Increased Size) */}
          <motion.div
            className="absolute pointer-events-none z-30 w-[72vw] max-w-[420px] h-[98vw] max-h-[430px] right-[-25vw] bottom-1"
            initial={{ scale: 0.6, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-full" style={{ transform: 'rotate(-20.94deg)' }}>
              <Image unoptimized quality={100} src="/images/spray-pink.webp"
                alt="Pink Pepper Spray"
                fill
                className="object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>

          {/* Bottom Left Portion: Paragraph + Buttons */}
          <div className="flex flex-col items-start w-full max-w-[292px] z-30 mt-auto pt-4">
            {/* Left-Aligned Subtext */}
            <p
              className="text-[#FFF1EB] font-['Inter',_sans-serif] text-[20px] leading-[140%] tracking-[-0.03em] font-normal text-left m-0 mb-4 opacity-100 max-w-full"
              style={{
                fontWeight: 400,
                width: '292px',
                minHeight: '99px',
                transform: 'rotate(0deg)',
                opacity: 1
              }}
            >
              India's first women's safety<br />
              ecosystem combining personal<br />
              defense, emergency technology,<br />
              and trusted support.
            </p>

            {/* Left-Aligned Buttons */}
            <div className="flex flex-row items-center gap-2 sm:gap-3 flex-wrap">
              <button
                className="flex items-center justify-center bg-[#FF0E97] text-white hover:bg-[#FF0E97]/90 transition-colors border border-[#FF0E97] rounded-md px-3.5 py-2 text-[12px] sm:text-[13px] gap-1.5 whitespace-nowrap shadow-sm"
                style={{ fontWeight: 500, fontFamily: 'Roboto, sans-serif' }}
              >
                <div className="relative w-4 h-4">
                  <Image unoptimized quality={100} src="/images/logo.webp"
                    alt="NAZR Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                Join Ecosystem
              </button>

              <Link
                href="/shop#pepper-spray"
                className="flex items-center justify-center text-[#FFF1EB] bg-transparent hover:bg-white/10 transition-colors border border-[#FFF1EB]/40 rounded-md px-3.5 py-2 text-[12px] sm:text-[13px] whitespace-nowrap"
                style={{ fontWeight: 500, fontFamily: 'Roboto, sans-serif' }}
              >
                Explore NAZR
              </Link>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP HERO LAYOUT ================= */}
        <div className="hidden md:block">
          {/* THE WORLD STARES Desktop Split */}
          <div className="relative z-20 flex flex-row justify-center w-full md:static mt-[4.1vw] md:mt-0">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.05 }
                }
              }}
              className="font-[family-name:var(--font-bebas)] m-0 p-0 flex md:absolute md:top-[60px] md:left-[32px] text-[16.6vw] md:text-[130px] leading-[90%] tracking-[-0.03em] font-normal whitespace-nowrap z-20"
            >
              {"THE ".split('').map((char, i) => (
                <TiltLetter
                  key={`the-${i}`}
                  char={char}
                  index={i}
                  className="text-image-mask"
                  globalMouseX={globalMouseX}
                  globalMouseY={globalMouseY}
                  bgStyle={{
                    backgroundImage: `url('/images/image${(i % 8) + 1}.png')`,
                    animation: `pinkToBlackWave 0.01s linear ${1.66 + (i * 0.09)}s backwards`
                  }}
                />
              ))}
            </motion.h1>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { delayChildren: 0.2, staggerChildren: 0.05 }
                }
              }}
              className="font-[family-name:var(--font-bebas)] m-0 p-0 flex md:absolute md:top-[170px] md:left-[31px] text-[16.6vw] md:text-[230px] leading-[90%] tracking-[-0.03em] font-normal whitespace-nowrap z-20"
            >
              {"WORLD STARES".split('').map((char, i) => {
                const globalIdx = i + 4;
                return (
                  <TiltLetter
                    key={`ws-${i}`}
                    char={char}
                    index={globalIdx}
                    className="text-image-mask"
                    globalMouseX={globalMouseX}
                    globalMouseY={globalMouseY}
                    bgStyle={{
                      backgroundImage: `url('/images/image${(globalIdx % 8) + 1}.png')`,
                      animation: `pinkToBlackWave 0.01s linear ${1.66 + (globalIdx * 0.09)}s backwards`
                    }}
                  />
                );
              })}
            </motion.h1>
          </div>

          {/* STARE BACK */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  delayChildren: 0.6,
                  staggerChildren: 0.05
                }
              }
            }}
            className="relative md:absolute font-[family-name:var(--font-bebas)] uppercase m-0 p-0 z-20 flex justify-center w-full md:w-auto mt-0 md:mt-0 md:top-[363px] md:left-[465px] text-[20vw] md:text-[230px] leading-[90%] tracking-[-0.03em] whitespace-nowrap text-center"
          >
            {"Stare Back".split('').map((char, i) => (
              <TiltLetter
                key={`w2-${i}`}
                char={char}
                index={i}
                className="text-image-mask"
                globalMouseX={globalMouseX}
                globalMouseY={globalMouseY}
                bgStyle={{
                  backgroundImage: `url('/images/image${(i % 8) + 1}.png')`,
                  animation: `pinkToBlackWave 0.01s linear ${2.66 + (i * 0.09)}s backwards`
                }}
              />
            ))}
          </motion.h1>

          {/* Subtext Paragraph */}
          <p
            className="relative md:absolute text-[#FFF1EB] m-0 p-0 font-['Inter',_sans-serif] z-20 text-center md:text-left w-[60vw] md:w-[397px] mt-[4.1vw] md:mt-0 md:top-[384px] md:left-[40px] text-[4.1vw] md:text-[20px] leading-[140%] tracking-[-0.03em] font-normal mx-auto md:mx-0"
          >
            India's first women's safety ecosystem combining personal defense, emergency technology, and trusted support.
          </p>

          {/* Buttons */}
          <div
            className="relative md:absolute flex justify-center items-center gap-[4vw] md:gap-[16px] z-20 mt-[8.2vw] md:mt-0 md:top-[484px] md:left-[40px]"
          >
            <button
              className="flex items-center justify-center bg-[#FF0E97] text-white hover:bg-[#FF0E97]/90 transition-colors border border-[#FF0E97] rounded-[1vw] md:rounded-[4px] w-[35.8vw] h-[8.2vw] md:w-[196px] md:h-[40px] text-[3vw] md:text-[14px] px-[2vw] md:px-[20px] md:py-[8px] gap-[1vw] md:gap-[8px]"
              style={{
                fontWeight: 400,
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              <div className="relative w-[5.1vw] h-[5.1vw] md:w-[35px] md:h-[24px]">
                <Image unoptimized quality={100} src="/images/logo.webp"
                  alt="NAZR Logo"
                  fill
                  className="object-contain"
                />
              </div>
              Join Ecosystem
            </button>

            <Link
              href="/shop#pepper-spray"
              className="flex items-center justify-center text-[#FFF1EB] bg-transparent hover:bg-white/10 transition-colors border border-[#FFF1EB]/40 rounded-[1vw] md:rounded-[4px] w-[35.8vw] h-[8.2vw] md:w-[135px] md:h-[40px] text-[3vw] md:text-[14px] px-[2vw] md:px-[20px] md:py-[8px] max-md:ml-[3.8vw]"
              style={{
                fontWeight: 400,
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              Explore NAZR
            </Link>
          </div>

          {/* Pink Bottle Image */}
          <motion.div
            className="absolute pointer-events-none z-30 w-[165px] h-[369px] top-[35px] left-[1015px]"
            initial={{ scale: 0, y: 150 }}
            animate={{ scale: 3, y: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.1 }}
          >
            <div className="relative w-full h-full -rotate-[-15deg]">
              <Image unoptimized quality={100} src="/images/spray-pink.webp"
                alt="Pink Pepper Spray"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* White Bottle Image */}
          <motion.div
            className="absolute pointer-events-none z-30 w-[165px] h-[369px] top-[306px] left-[797px]"
            initial={{ scale: 0, y: 150 }}
            animate={{ scale: 3, y: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-full rotate-[-15deg]">
              <Image unoptimized quality={100} src="/images/spray-white.webp"
                alt="White Pepper Spray"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
