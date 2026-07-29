"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type TrailImage = {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  src: string;
};

const IMAGES = [
  "/images/image1.webp",
  "/images/image2.webp",
  "/images/image3.webp",
  "/images/image4.webp"
];

export function AboutStatement() {
  const [trail, setTrail] = useState<TrailImage[]>([]);
  const nextId = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    const { clientX, clientY } = e;
    const dx = clientX - lastPos.current.x;
    const dy = clientY - lastPos.current.y;
    const distance = Math.hypot(dx, dy);

    // Spawn when distance > 75 to make a smooth trailing line (tail) rather than jumping randomly
    if (distance > 75) {
      lastPos.current = { x: clientX, y: clientY };

      const scale = typeof window !== 'undefined'
        ? (window.innerWidth < 768 ? window.innerWidth / 390 : (window.innerWidth < 1440 ? window.innerWidth / 1440 : 1))
        : 1;

      const rect = e.currentTarget.getBoundingClientRect();
      const x = (clientX - rect.left) / scale;
      const y = (clientY - rect.top) / scale;

      const src = IMAGES[nextId.current % IMAGES.length];

      // Calculate normalized direction vector for the opposite drift
      const normalizedDx = dx / distance;
      const normalizedDy = dy / distance;

      const newImage = {
        id: nextId.current++,
        x,
        y,
        dx: normalizedDx,
        dy: normalizedDy,
        src
      };

      setTrail((prev) => [...prev, newImage]);

      // Remove the image smoothly
      setTimeout(() => {
        setTrail((prev) => prev.filter((img) => img.id !== newImage.id));
      }, 400);
    }
  };

  return (
    <section
      id="every-woman-section"
      className="w-full bg-[#161616] pt-6 pb-14 md:pt-32 md:pb-[88px] flex flex-col items-center justify-center relative z-[100] px-4"
      onMouseMove={handleMouseMove}
    >

      {/* Background Image Trail Layer (Desktop Only) */}
      <div className="hidden md:block absolute inset-0 z-[0] pointer-events-none">
        <AnimatePresence>
          {trail.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 1, scale: 0.1, x: 0, y: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                // Drift in the opposite direction of mouse movement (e.g. 80px away)
                x: -img.dx * 80,
                y: -img.dy * 80
              }}
              exit={{ opacity: 1, scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 450,
                damping: 28
              }}
              className="absolute"
              style={{
                top: img.y,
                left: img.x,
                // Framer Motion overwrites 'transform', so we must use margins to center the 220x220 image exactly on the cursor
                marginTop: -110,
                marginLeft: -110,
                width: 220,
                height: 220,
              }}
            >
              <Image
                src={img.src}
                alt="Trail image"
                fill
                className="object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Top Tag */}
      <div className="bg-[#FFF1EB] text-black text-[20px] md:text-[24px] px-4 py-1 mb-10 tracking-wide relative z-10 font-[family-name:var(--font-bebas)] leading-[100%] uppercase mt-8 md:mt-0 rounded-[4px]">
        A NEW STANDARD BEGINS HERE
      </div>

      {/* Main Typography Container */}
      <div className="relative max-w-[1000px] text-center z-10 pointer-events-none max-md:mb-20">

        <h2 className="font-[family-name:var(--font-bebas)] text-[#FFF1EB] max-md:text-[80px] md:text-[100px] leading-[90%] tracking-[-0.03em] m-0 relative z-10 pointer-events-auto text-center">
          EVERY WOMAN <br />
          DESERVES <br />
          <span className="relative inline-block px-1 mb-2 md:mb-4">
            BETTER SAFETY

            {/* The First Blue Strike-through Line */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="marker-texture-1" x="-10%" y="-30%" width="120%" height="160%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </defs>
              <motion.path
                d="M 2 13 Q 50 10 98 7"
                stroke="#0E8DFF"
                strokeWidth={2.2}
                strokeLinecap="round"
                fill="none"
                filter="url(#marker-texture-1)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </svg>
          </span> <br />

          <span className="relative inline-block px-1">
            STANDARDS

            {/* The Second Blue Strike-through Line */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="marker-texture-2" x="-10%" y="-30%" width="120%" height="160%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </defs>
              <motion.path
                d="M 2 13 Q 50 10 98 7"
                stroke="#0E8DFF"
                strokeWidth={2.2}
                strokeLinecap="round"
                fill="none"
                filter="url(#marker-texture-2)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
              />
            </svg>

            {/* The cursive NAZR text, absolute overlay on mobile below STANDARDS and on desktop right */}
            <span className="absolute max-md:left-[55%] max-md:top-[65%] md:left-[100%] md:top-[-10%] z-30">
              <motion.span
                className="inline-block text-[#0E8DFF] pointer-events-none max-md:text-[96.3px] md:text-[130.92px]"
                style={{
                  fontFamily: 'var(--font-signpainter), SignPainter, cursive',
                  fontWeight: 400,
                  lineHeight: '90%',
                  letterSpacing: '-0.03em',
                  textAlign: 'center',
                  // @ts-ignore
                  leadingTrim: 'cap-height',
                }}
                initial={{ clipPath: "inset(-50% 150% -50% -50%)", rotate: -11 }}
                whileInView={{ clipPath: "inset(-50% -50% -50% -50%)", rotate: -11 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: 0.4, ease: "linear" }}
              >
                NAZR
              </motion.span>
            </span>
          </span>
        </h2>

      </div>

      {/* Bottom Pink Button */}
      <button
        onClick={() => {
          const el = document.getElementById("product-features-section");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        className="group max-md:mt-6 md:mt-7 bg-[#FF0E97] text-[#FFF1EB] md:w-[245px] md:px-6 md:h-[40px] max-md:w-auto max-md:px-5 max-md:h-[40px] rounded-[4px] border border-[#FF0E97] flex items-center justify-center hover:bg-[#FF0E97]/90 transition-colors z-30 relative flex-nowrap"
      >
        <Image unoptimized quality={100} src="/images/logosvg.svg"
          alt="Nazr Logo"
          width={35}
          height={24}
          className="max-md:w-7 max-md:opacity-100 max-md:mr-2 md:w-0 md:opacity-0 md:group-hover:w-9 md:group-hover:opacity-100 md:group-hover:mr-3 transition-all duration-300 ease-in-out object-contain invert brightness-0 shrink-0"
        />
        <span className="font-['Roboto',_sans-serif] text-[15px] md:text-[18px] leading-[150%] tracking-normal whitespace-nowrap flex-shrink-0">Explore the Ecosystem</span>
      </button>

    </section>
  );
}
