"use client";

import Image from "next/image";
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
        className="w-full bg-[#F6E9E3] relative z-[70] max-md:mt-0 md:-mt-[48px] overflow-x-clip md:overflow-visible flex flex-col items-center md:block pb-[30.7vw] md:pb-0 pt-[23vw] md:pt-0 md:min-h-[630px]"
        style={{
          borderTopLeftRadius: '26px',
          borderTopRightRadius: '26px',
        }}
      >
        {/* Shader Background Effect */}
        <ShaderBackground className="rounded-t-[26px]" />

        {/* THE WORLD STARES Mobile Group / Desktop Split */}
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
          className="relative md:absolute text-[#161616] m-0 p-0 font-['Inter',_sans-serif] z-20 text-center md:text-left w-[60vw] md:w-[397px] mt-[4.1vw] md:mt-0 md:top-[384px] md:left-[40px] text-[4.1vw] md:text-[20px] leading-[140%] tracking-[-0.03em] font-normal mx-auto md:mx-0"
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
              <Image
                src="/images/logo.png"
                alt="NAZR Logo"
                fill
                className="object-contain"
              />
            </div>
            Join Ecosystem
          </button>

          <button
            className="flex items-center justify-center text-[#FF0E97] bg-transparent hover:opacity-80 transition-opacity border border-[#F80090] rounded-[1vw] md:rounded-[4px] w-[35.8vw] h-[8.2vw] md:w-[101px] md:h-[40px] text-[3vw] md:text-[14px] px-[2vw] md:px-[20px] md:py-[8px] max-md:ml-[3.8vw]"
            style={{
              fontWeight: 400,
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            Buy now
          </button>
        </div>

        {/* Pink Bottle Image */}
        <motion.div
          className="absolute pointer-events-none z-30 w-[62.8vw] h-[69.2vw] md:w-[165px] md:h-[369px] top-[33.3vw] left-[-25.6vw] md:top-[35px] md:left-[1015px]"
          initial={{ scale: 0, y: 150 }}
          animate={{ scale: 3, y: 0 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.1 }}
        >
          <div className="relative w-full h-full -rotate-[-15deg]">
            <Image
              src="/images/spray-pink.png"
              alt="Pink Pepper Spray"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* White Bottle Image */}
        <motion.div
          className="absolute pointer-events-none z-30 w-[51.2vw] h-[69.2vw] md:w-[165px] md:h-[369px] top-[-17.9vw] right-[-15.8vw] md:top-[306px] md:left-[797px]"
          initial={{ scale: 0, y: 150 }}
          animate={{ scale: 3, y: 0 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full h-full rotate-[15deg] md:rotate-[-15deg]">
            <Image
              src="/images/spray-white.png"
              alt="White Pepper Spray"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Two Floating Boxes for Mobile (Bottom Right) */}
        <div className="absolute md:hidden bottom-0 right-0 w-[46.1vw] h-[41vw] z-30">
          {/* Left/Bottom Blue Box */}
          <motion.div
            className="absolute pointer-events-none w-[38.4vw] h-[38.4vw] md:w-[130px] md:h-[130px] bottom-[0vw] right-[-1.2vw] md:bottom-[15px] md:right-[35px]"
            initial={{ scale: 0, rotate: -20, y: 150 }}
            animate={{ scale: 1, rotate: -15, y: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="/images/nazreyeback.svg"
              alt="Left Box"
              fill
              className="object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Right/Top Pink Box */}
          <motion.div
            className="absolute pointer-events-none w-[38.4vw] h-[38.4vw] md:w-[130px] md:h-[130px] bottom-[1.2vw] right-[-7.6vw] md:bottom-[-10px] md:right-[-15px]"
            initial={{ scale: 0, rotate: 0, y: 150 }}
            animate={{ scale: 1, rotate: -30, y: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/images/nazreyefront.svg"
              alt="Right Box"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
