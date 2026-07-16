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
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png"
];

export function AboutStatement() {
  const [trail, setTrail] = useState<TrailImage[]>([]);
  const nextId = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const dx = clientX - lastPos.current.x;
    const dy = clientY - lastPos.current.y;
    const distance = Math.hypot(dx, dy);

    // Spawn when distance > 30 to make a smooth trailing line (tail) rather than jumping randomly
    if (distance > 30) {
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
      }, 500);
    }
  };

  return (
    <section
      className="w-full bg-[#161616] pt-6 pb-14 md:pt-32 md:pb-[88px] flex flex-col items-center justify-center relative z-[100] px-4"
      onMouseMove={handleMouseMove}
    >

      {/* Background Image Trail Layer */}
      <div className="absolute inset-0 z-[0] pointer-events-none">
        <AnimatePresence>
          {trail.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                // Drift in the opposite direction of mouse movement (e.g. 100px away)
                x: -img.dx * 100,
                y: -img.dy * 100
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute"
              style={{
                top: img.y,
                left: img.x,
                // Framer Motion overwrites 'transform', so we must use margins to center the 300x300 image exactly on the cursor
                marginTop: -150,
                marginLeft: -150,
                width: 300,
                height: 300,
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
      <div className="bg-[#FFF1EB] text-black text-[20px] md:text-[24px] px-4 py-1 mb-10 tracking-wide relative z-10 font-[family-name:var(--font-bebas)] leading-[100%] uppercase mt-8 md:mt-0">
        JOIN ECOSYSTEM
      </div>

      {/* Main Typography Container */}
      <div className="relative max-w-[1000px] text-center z-10 pointer-events-none">

        <h2 className="font-[family-name:var(--font-bebas)] text-[#FFF1EB] max-[380px]:text-[38px] max-md:text-[45px] md:text-[130px] leading-[100%] tracking-[-0.03em] m-0 relative z-10 pointer-events-auto">
          IT IS A LONG <br />
          ESTABLISHED FACT <br />
          THAT A <span className="relative inline-block">
            READER

            {/* The Blue Strike-through Line */}
            <motion.div
              className="absolute left-[-5%] top-[50%] h-[6px] md:h-[10px] bg-[#0E8DFF] z-20 pointer-events-none rounded-full"
              style={{ transformOrigin: 'left center' }}
              initial={{ width: "0%", rotate: -2 }}
              whileInView={{ width: "110%", rotate: -2 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />

            {/* The cursive NAZR text */}
            <motion.div
              className="absolute left-[45%] max-md:top-[calc(10%+40px)] md:top-[20%] z-30 text-[#0E8DFF] pointer-events-none whitespace-nowrap"
              style={{
                fontFamily: 'SignPainter, cursive',
                fontSize: 'clamp(45px, 11vw, 150px)',
                fontWeight: 800,
                lineHeight: '90%',
                letterSpacing: '-0.03em',
              }}
              initial={{ clipPath: "inset(-50% 150% -50% -50%)", rotate: -8 }}
              whileInView={{ clipPath: "inset(-50% -50% -50% -50%)", rotate: -8 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.3, ease: "linear" }}
            >
              NAZR
            </motion.div>
          </span>
        </h2>

      </div>

      {/* Bottom Pink Button */}
      <button className="max-md:mt-6 md:mt-7 bg-[#FF0E97] text-[#FFF1EB] md:px-6 md:py-3 max-md:w-[196px] max-md:h-[40px] max-md:px-[20px] max-md:py-[8px] rounded-[4px] border border-[#FF0E97] flex items-center justify-center max-md:gap-[8px] md:gap-3 hover:bg-[#FF0E97]/90 transition-colors z-30 relative flex-nowrap">
        <Image
          src="/images/logosvg.svg"
          alt="Nazr Logo"
          width={35}
          height={24}
          className="max-md:w-[35px] max-md:h-[24px] md:w-9 md:h-9 object-contain invert brightness-0 shrink-0"
        />
        <span className="font-['Roboto',_sans-serif] max-md:w-[113px] max-md:h-[24px] text-[16px] md:text-[18px] leading-[150%] tracking-normal whitespace-nowrap flex-shrink-0">Join Ecosystem</span>
      </button>

    </section>
  );
}
