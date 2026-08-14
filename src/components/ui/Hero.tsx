"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ShaderBackground } from "@/components/ui/ShaderBackground";

const LETTER_FILLER_IMAGES = [
  "/images/letterfiller/fil2.jpeg",
  "/images/letterfiller/fil19.jpeg",
  "/images/letterfiller/fil12.jpeg",
  "/images/letterfiller/fil3.jpeg",
  "/images/letterfiller/fil8.jpeg",
  "/images/letterfiller/fil13.jpeg",
  "/images/letterfiller/fil4.jpeg",
  "/images/letterfiller/fil9.jpeg",
  "/images/letterfiller/fil8.jpeg",
  "/images/letterfiller/fil5.jpeg",
  "/images/letterfiller/fil19.jpeg",
  "/images/letterfiller/fil7.jpeg",
  "/images/letterfiller/fil11.jpeg",
  "/images/letterfiller/fil10.jpeg",
  "/images/letterfiller/fil17.jpeg",
];

function getHeroImage(letterIndex: number) {
  const imgIdx = letterIndex % LETTER_FILLER_IMAGES.length;
  return LETTER_FILLER_IMAGES[imgIdx];
}

function TiltLetter({ char, index, delay, bgStyle, className, globalMouseX, globalMouseY, isLoaded }: any) {
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
        paddingRight: '0.08em',
        marginRight: '-0.08em',
        paddingLeft: '0.02em',
        marginLeft: '-0.02em',
        backgroundSize: '160% 100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        animation: isLoaded ? bgStyle?.animation : 'none',
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ((window as any).__LOADING_COMPLETE__) {
        setIsLoaded(true);
        return;
      }

      const handleLoadingComplete = () => setIsLoaded(true);
      window.addEventListener("loadingComplete", handleLoadingComplete);

      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 4200);

      return () => {
        window.removeEventListener("loadingComplete", handleLoadingComplete);
        clearTimeout(timer);
      };
    }
  }, []);

  function handleMouseMove(e: React.MouseEvent) {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    globalMouseX.set(e.clientX);
    globalMouseY.set(e.clientY);
  }

  function handleMouseLeave() {
    globalMouseX.set(-1000);
    globalMouseY.set(-1000);
  }

  let mobileCharCounter = 0;
  let desktopCharCounter = 0;

  return (
    <section
      className="relative w-full overflow-hidden md:overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-full bg-[#242424] relative z-[70] max-md:mt-0 md:-mt-[48px] overflow-x-clip md:overflow-visible flex flex-col items-center md:block pt-4 pb-4 md:pt-0 md:pb-0 md:min-h-[max(750px,calc(100vh/var(--desktop-scale,1)))] md:h-auto transform-gpu"
      >
        {/* Shader Background Effect */}
        <ShaderBackground imageUrl="/images/image 59.svg" colorA="#242424" colorB="#D46FB3" className="rounded-none" />

        {/* ================= MOBILE HERO LAYOUT ================= */}
        <div className="w-full flex flex-col px-4 sm:px-6 py-4 relative z-20 md:hidden">
          {/* Top Section: Left Headline + Right Eye Discs */}
          <div className="flex flex-row justify-between items-start w-full relative">
            {/* Left-Aligned Stacked Headline */}
            <div className="flex flex-col items-start z-20">
              {/* Line 1: THE WORLD */}
              <motion.h1
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
                className="font-[family-name:var(--font-bebas)] uppercase m-0 p-0 flex text-[78px] leading-[90%] tracking-[-0.03em] font-normal whitespace-nowrap text-[#FFFDF7]"
                style={{
                  fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "78px",
                  lineHeight: "90%",
                  letterSpacing: "-0.03em",
                }}
              >
                {"THE WORLD".split('').map((char, i) => {
                  if (char === ' ') return <TiltLetter key={`m-tw-${i}`} char={char} index={i} className="" globalMouseX={globalMouseX} globalMouseY={globalMouseY} isLoaded={isLoaded} />;
                  const cIdx = mobileCharCounter++;
                  return (
                    <TiltLetter
                      key={`m-tw-${i}`}
                      char={char}
                      index={i}
                      className="text-image-mask"
                      globalMouseX={globalMouseX}
                      globalMouseY={globalMouseY}
                      isLoaded={isLoaded}
                      bgStyle={{
                        backgroundImage: `url('${getHeroImage(cIdx)}')`,
                      }}
                    />
                  );
                })}
              </motion.h1>

              {/* Line 2: STARES. */}
              <motion.h1
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={{ visible: { transition: { delayChildren: 0.15, staggerChildren: 0.04 } } }}
                className="font-[family-name:var(--font-bebas)] uppercase m-0 p-0 flex text-[78px] leading-[90%] tracking-[-0.03em] font-normal whitespace-nowrap mt-1 text-[#FFFDF7]"
                style={{
                  fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "78px",
                  lineHeight: "90%",
                  letterSpacing: "-0.03em",
                }}
              >
                {"STARES.".split('').map((char, i) => {
                  if (char === ' ') return <TiltLetter key={`m-ss-${i}`} char={char} index={i} className="" globalMouseX={globalMouseX} globalMouseY={globalMouseY} isLoaded={isLoaded} />;
                  const cIdx = mobileCharCounter++;
                  return (
                    <TiltLetter
                      key={`m-ss-${i}`}
                      char={char}
                      index={i}
                      className="text-image-mask"
                      globalMouseX={globalMouseX}
                      globalMouseY={globalMouseY}
                      isLoaded={isLoaded}
                      bgStyle={{
                        backgroundImage: `url('${getHeroImage(cIdx)}')`,
                      }}
                    />
                  );
                })}
              </motion.h1>

              {/* Line 3: STARE BACK. */}
              <motion.h1
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={{ visible: { transition: { delayChildren: 0.3, staggerChildren: 0.04 } } }}
                className="font-[family-name:var(--font-bebas)] uppercase m-0 p-0 flex text-[78px] leading-[90%] tracking-[-0.03em] font-normal whitespace-nowrap mt-1 text-[#FFFDF7]"
                style={{
                  fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "78px",
                  lineHeight: "90%",
                  letterSpacing: "-0.03em",
                }}
              >
                {"STARE BACK.".split('').map((char, i) => {
                  if (char === ' ') return <TiltLetter key={`m-bk-${i}`} char={char} index={i} className="" globalMouseX={globalMouseX} globalMouseY={globalMouseY} isLoaded={isLoaded} />;
                  const cIdx = mobileCharCounter++;
                  return (
                    <TiltLetter
                      key={`m-bk-${i}`}
                      char={char}
                      index={i}
                      className="text-image-mask"
                      globalMouseX={globalMouseX}
                      globalMouseY={globalMouseY}
                      isLoaded={isLoaded}
                      bgStyle={{
                        backgroundImage: `url('${getHeroImage(cIdx)}')`,
                        animation: isLoaded ? `pinkToBlackWave 1.4s ease-out ${0.4 + (i * 0.12)}s backwards` : 'none'
                      }}
                    />
                  );
                })}
              </motion.h1>
            </div>

            {/* Top Right Floating Circular Eye Discs (Exact Figma Visual Match) */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30">
              {/* Left/Purple Disc */}
              <motion.div
                className="absolute z-10"
                style={{
                  width: "163.28px",
                  height: "163.28px",
                  top: "243.23px",
                  left: "26.82px",
                }}
                initial={{ scale: 0, rotate: -10 }}
                animate={isLoaded ? { scale: 1, rotate: -10 } : { scale: 0, rotate: -10 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.7, delay: 0.2 }}
              >
                <Image unoptimized quality={100} src="/images/nazreyeback1.webp"
                  alt="Eye Sticker Purple"
                  fill
                  className="object-contain drop-shadow-md"
                />
              </motion.div>
              {/* Right/Pink Disc */}
              <motion.div
                className="absolute z-20"
                style={{
                  width: "181.11px",
                  height: "189.90px",
                  top: "206.03px",
                  left: "74px",
                }}
                initial={{ scale: 0, rotate: 0 }}
                animate={isLoaded ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 0 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.7, delay: 0.3 }}
              >
                <Image unoptimized quality={100} src="/images/nazreyefront1.webp"
                  alt="Eye Sticker Pink"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>
            </div>
          </div>

          {/* Mid-Right Pink Pepper Spray Bottle */}
          <motion.div
            className="absolute pointer-events-none z-30 w-[72vw] max-w-[420px] h-[98vw] max-h-[430px] right-[-25vw] bottom-1"
            initial={{ scale: 0.6, opacity: 0, y: 50 }}
            animate={isLoaded ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.6, opacity: 0, y: 50 }}
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
          <div className="flex flex-col items-start w-full max-w-[292px] z-30 mt-[210px] pt-4">
            {/* Left-Aligned Subtext */}
            <p
              className="text-[#FFF1EB] font-[family-name:var(--font-inter)] text-[16px] leading-[140%] tracking-[-0.03em] font-normal text-left m-0 mb-4 opacity-100 max-w-full"
              style={{
                fontWeight: 400,
                fontStyle: 'normal',
                width: '292px',
                transform: 'rotate(0deg)',
                opacity: 1
              }}
            >
              India's first women's safety ecosystem combining personal defense, emergency technology, and trusted support.
            </p>

            {/* Left-Aligned Buttons */}
            <div className="flex flex-row items-center gap-2 sm:gap-3 flex-wrap">
              <Link
                href="/shop#pepper-spray"
                className="flex items-center justify-center bg-[#FF0E97] text-white hover:bg-[#FF0E97]/90 transition-colors border border-[0.75px] border-[#FF0E97] rounded-[3px] w-[161.25px] h-[37px] px-[15px] py-[8px] gap-[6px] whitespace-nowrap shadow-sm opacity-100"
                style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '150%', letterSpacing: '0%' }}
              >
                <div className="relative w-[26.25px] h-[18px] shrink-0" style={{ opacity: 1, transform: 'rotate(0deg)' }}>
                  <Image unoptimized quality={100} src="/images/logo.webp"
                    alt="NAZR Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>Join Ecosystem</span>
              </Link>

              <Link
                href="/shop#pepper-spray"
                className="flex items-center justify-center text-[#FFF1EB] bg-transparent hover:bg-white/10 transition-colors border-2 border-[#FFF1EB] rounded-[4px] w-[83px] h-[37px] px-[15px] py-[8px] gap-[6px] text-[13px] whitespace-nowrap opacity-100"
                style={{ fontWeight: 400, fontFamily: 'Roboto, sans-serif' }}
              >
                Buy Now
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
              animate={isLoaded ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.05 }
                }
              }}
              className="font-[family-name:var(--font-bebas)] m-0 p-0 flex md:absolute md:top-[60px] md:left-[32px] text-[16.6vw] md:text-[130px] leading-[90%] tracking-[-0.03em] font-normal whitespace-nowrap z-20"
            >
              {"THE ".split('').map((char, i) => {
                if (char === ' ') return <TiltLetter key={`the-${i}`} char={char} index={i} className="" globalMouseX={globalMouseX} globalMouseY={globalMouseY} isLoaded={isLoaded} />;
                const cIdx = desktopCharCounter++;
                return (
                  <TiltLetter
                    key={`the-${i}`}
                    char={char}
                    index={i}
                    className="text-image-mask"
                    globalMouseX={globalMouseX}
                    globalMouseY={globalMouseY}
                    isLoaded={isLoaded}
                    bgStyle={{
                      backgroundImage: `url('${getHeroImage(cIdx)}')`,
                      animation: `pinkToBlackWave 0.01s linear ${0.2 + (i * 0.09)}s backwards`
                    }}
                  />
                );
              })}
            </motion.h1>

            <motion.h1
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: { delayChildren: 0.2, staggerChildren: 0.05 }
                }
              }}
              className="font-[family-name:var(--font-bebas)] m-0 p-0 flex md:absolute md:top-[170px] md:left-[31px] text-[16.6vw] md:text-[275px] leading-[90%] tracking-[-0.03em] font-normal whitespace-nowrap z-20"
            >
              {"WORLD STARES".split('').map((char, i) => {
                if (char === ' ') return <TiltLetter key={`ws-${i}`} char={char} index={i} className="" globalMouseX={globalMouseX} globalMouseY={globalMouseY} isLoaded={isLoaded} />;
                const cIdx = desktopCharCounter++;
                return (
                  <TiltLetter
                    key={`ws-${i}`}
                    char={char}
                    index={i}
                    className="text-image-mask"
                    globalMouseX={globalMouseX}
                    globalMouseY={globalMouseY}
                    isLoaded={isLoaded}
                    bgStyle={{
                      backgroundImage: `url('${getHeroImage(cIdx)}')`,
                      animation: `pinkToBlackWave 0.01s linear ${0.2 + (i * 0.09)}s backwards`
                    }}
                  />
                );
              })}
            </motion.h1>
          </div>

          {/* STARE BACK */}
          <motion.h1
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  delayChildren: 0.6,
                  staggerChildren: 0.05
                }
              }
            }}
            className="relative md:absolute font-[family-name:var(--font-bebas)] uppercase m-0 p-0 z-20 flex justify-center w-full md:w-auto mt-0 md:mt-0 md:top-[400px] md:left-[550px] text-[20vw] md:text-[230px] leading-[90%] tracking-[-0.03em] font-normal whitespace-nowrap text-center"
            style={{
              fontFamily: 'var(--font-bebas), "Bebas Neue", sans-serif',
              fontWeight: 400,
              fontSize: '230px',
              lineHeight: '90%',
              letterSpacing: '-0.03em',
            }}
          >
            {"Stare Back".split('').map((char, i) => {
              if (char === ' ') return <TiltLetter key={`w2-${i}`} char={char} index={i} className="" globalMouseX={globalMouseX} globalMouseY={globalMouseY} isLoaded={isLoaded} />;
              const cIdx = desktopCharCounter++;
              return (
                <TiltLetter
                  key={`w2-${i}`}
                  char={char}
                  index={i}
                  className="text-image-mask"
                  globalMouseX={globalMouseX}
                  globalMouseY={globalMouseY}
                  isLoaded={isLoaded}
                  bgStyle={{
                    backgroundImage: `url('${getHeroImage(cIdx)}')`,
                    animation: isLoaded ? `pinkToBlackWave 1.4s ease-out ${0.6 + (i * 0.12)}s backwards` : 'none'
                  }}
                />
              );
            })}
          </motion.h1>

          {/* Subtext Paragraph */}
          <p
            className="relative md:absolute text-[#FFF1EB] m-0 p-0 font-['Inter',_sans-serif] z-20 text-center md:text-left w-[60vw] md:w-[497px] mt-[4.1vw] md:mt-0 md:top-[415px] md:left-[40px] text-[4.1vw] md:text-[18px] leading-[140%] tracking-[-0.03em] font-normal mx-auto md:mx-0"
            style={{ fontWeight: 400, fontStyle: 'normal', fontFamily: "Inter, var(--font-inter), sans-serif" }}
          >
            India's first women's safety ecosystem combining<br />personal defense, emergency technology, and<br />trusted support.
          </p>

          {/* Buttons */}
          <div
            className="relative md:absolute flex justify-center items-center gap-[4vw] md:gap-[16px] z-20 mt-[8.2vw] md:mt-0 md:top-[515px] md:left-[40px]"
          >
            <Link
              href="/shop#pepper-spray"
              className="flex items-center justify-center bg-[#FF0E97] text-white hover:bg-[#FF0E97]/90 transition-colors border border-[#FF0E97] rounded-[1vw] md:rounded-[4px] w-[35.8vw] h-[8.2vw] md:w-[196px] md:h-[40px] text-[3vw] md:text-[14px] px-[2vw] md:px-[20px] md:py-[8px] gap-[1vw] md:gap-[8px] leading-[150%] tracking-normal shadow-sm opacity-100"
              style={{
                fontWeight: 400,
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              <div className="relative w-[5.1vw] h-[5.1vw] md:w-[35px] md:h-[24px] shrink-0">
                <Image unoptimized quality={100} src="/images/logo.webp"
                  alt="NAZR Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span>Join Ecosystem</span>
            </Link>

            <Link
              href="/shop#pepper-spray"
              className="flex items-center justify-center text-[#FFF1EB] bg-transparent hover:bg-white/10 transition-colors border-2 border-[#FFF1EB] rounded-[4px] w-[35.8vw] h-[8.2vw] md:w-[83px] md:h-[40px] text-[3vw] md:text-[14px] px-[2vw] md:px-[15px] md:py-[8px] gap-[6px] leading-[150%] tracking-normal whitespace-nowrap max-md:ml-[3.8vw]"
              style={{
                fontWeight: 400,
                fontFamily: 'Roboto, sans-serif',
              }}
            >
              Buy now
            </Link>
          </div>

          {/* Pink Bottle Image */}
          <motion.div
            className="absolute pointer-events-none z-30 w-[165px] h-[369px] top-[35px] left-[1220px]"
            initial={{ scale: 0, y: 150 }}
            animate={isLoaded ? { scale: 3, y: 0 } : { scale: 0, y: 150 }}
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
            className="absolute pointer-events-none z-30 w-[165px] h-[369px] top-[355px] left-[440px]"
            initial={{ scale: 0, y: 150 }}
            animate={isLoaded ? { scale: 2.75, y: 0 } : { scale: 0, y: 150 }}
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