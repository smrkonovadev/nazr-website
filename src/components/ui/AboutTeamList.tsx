"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type TeamMember = {
  id: string;
  name: string;
  roles: string[];
  image: string;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "ATUL CHOPRA",
    roles: ["COFOUNDER", "CHIEF EXECUTIVE OFFICER"],
    image: "/images/ATUL.svg"
  },
  {
    id: "2",
    name: "AISHANI MUKHERJEE",
    roles: ["COFOUNDER", "CHIEF BRAND OFFICER"],
    image: "/images/AISHANI.svg"
  }
];

// Logo width (px) + right margin (mr-4 = 16px)
const OWL_WIDTH = 140;

export function AboutTeamList() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Spring for smooth mouse following
  const mouseX = useSpring(0, { stiffness: 150, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 150, damping: 25 });

  // Per-row mouse handler: dynamically reads name and arrow positions on each move
  // so the image never covers the name text and never goes past the arrow button
  const handleRowMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const row = e.currentTarget;
    const rowRect = row.getBoundingClientRect();
    const container = containerRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();

    const imageWidth = 300;
    const imageHeight = 400;
    const gap = 40; // breathing room from name edge and arrow edge

    // Calculate mouse position ratio (zoom-independent)
    const relativeX = (e.clientX - rowRect.left) / rowRect.width;
    const relativeY = (e.clientY - containerRect.top) / containerRect.height;

    // Convert to unzoomed CSS pixels
    const cssMouseX = relativeX * row.offsetWidth;
    const cssMouseY = relativeY * container.offsetHeight;

    // Read actual CSS layout positions of name block and arrow button
    const leftEl = row.querySelector('[data-left]') as HTMLElement | null;
    const arrowEl = row.querySelector('[data-arrow]') as HTMLElement | null;

    const xMin = leftEl
      ? leftEl.offsetLeft + leftEl.offsetWidth + gap
      : row.offsetWidth * 0.4;

    const xMax = arrowEl
      ? arrowEl.offsetLeft - imageWidth - gap
      : row.offsetWidth - 120 - imageWidth;

    const rawX = cssMouseX - imageWidth / 2;
    const clampedX = Math.max(xMin, Math.min(rawX, Math.max(xMin, xMax)));

    mouseX.set(clampedX);
    // Y relative to container so all rows share the same coordinate space
    mouseY.set(cssMouseY - imageHeight / 2);
  };

  return (
    <section className="w-full bg-[#FFF1EB] max-md:pb-6 md:pb-8 px-4 md:px-12 relative -mt-[2px] border-none outline-none">

      {/* Desktop Layout: Vertical List with Hover Effects */}
      <div ref={containerRef} className="hidden w-full max-w-[1400px] mx-auto border-t-[3px] border-[#161616] md:block relative">

        {TEAM_MEMBERS.map((member) => {
          const isHovered = hoveredId === member.id;

          return (
            <div
              key={member.id}
              className="w-full py-4 md:py-6 border-b-[3px] border-[#161616] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer group"
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
              onMouseMove={handleRowMouseMove}
            >

              {/* Left Side: Name and Tags */}
              <div data-left className="flex flex-col">
                <div className="flex items-center relative" style={{ gap: "8px" }}>

                  {/* Owl Logo - fixed pixel width so Framer Motion interpolates smoothly */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, width: 0 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0.5,
                      width: isHovered ? OWL_WIDTH : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden shrink-0 flex items-center justify-center"
                  >
                    <Image
                      src="/images/logosvg.svg"
                      alt="Owl Logo"
                      width={130}
                      height={130}
                      className="w-[80px] md:w-[130px] h-auto object-contain brightness-0"
                    />
                  </motion.div>

                  <div className="flex flex-col">
                    <h3
                      className="font-[family-name:var(--font-bebas)] text-[#161616] m-0 transition-transform duration-300 group-hover:translate-x-2"
                      style={{
                        fontWeight: 400,
                        fontSize: "clamp(40px, 6vw, 80px)",
                        lineHeight: "90%",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {member.name}
                    </h3>

                    {/* Pill Tags — flush under name, no gap */}
                    <div className="flex" style={{ gap: "0", marginTop: 0 }}>
                      {member.roles.map((role, i) => (
                        <div
                          key={i}
                          style={{
                            border: "1px solid #161616",
                            borderRadius: "10000px",
                            padding: "0 16px",
                            height: "46px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <span className="font-[family-name:var(--font-bebas)] text-[#161616] text-[14px] md:text-[16px] tracking-wide leading-none mt-1">
                            {role}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Circular Button — only rotates, no scale */}
              <div
                data-arrow
                className="bg-[#161616] flex items-center justify-center shrink-0 relative z-[110]"
                style={{
                  width: "57px",
                  height: "57px",
                  borderRadius: "1000px"
                }}
              >
                <ArrowUpRight className="text-[#FFF1EB] w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:rotate-45" />
              </div>

            </div>
          );
        })}

        {/* Floating Hover Image — positioned relative to the list container */}
        <motion.div
          className="absolute top-0 left-0 pointer-events-none z-[100] overflow-hidden rounded-[20px] shadow-2xl w-[300px] h-[400px]"
          style={{ x: mouseX, y: mouseY }}
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{
            opacity: hoveredId ? 1 : 0,
            scale: hoveredId ? 1 : 0.8,
            rotate: hoveredId ? 8 : -5,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {TEAM_MEMBERS.map((member) => (
            <Image
              key={member.id}
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-opacity duration-300"
              style={{ opacity: hoveredId === member.id ? 1 : 0 }}
            />
          ))}
        </motion.div>

      </div>

      {/* Mobile Layout: Horizontal Scrolling Cards */}
      <div
        className="md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory pb-8 pt-4 -mx-4 px-4 [&::-webkit-scrollbar]:hidden outline-none border-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {TEAM_MEMBERS.map((member) => (
          <div key={`mobile-${member.id}`} className="w-[85vw] max-w-[320px] shrink-0 snap-center flex flex-col">
            {/* Card Image */}
            <div className="w-full aspect-square rounded-[24px] overflow-hidden relative bg-gray-200 mb-4">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            {/* Card Info */}
            <h3 className="font-[family-name:var(--font-bebas)] text-[#161616] text-[45px] leading-[90%] tracking-[-0.03em] m-0 mb-3">
              {member.name}
            </h3>
            <div className="flex gap-0 flex-wrap">
              {member.roles.map((role, i) => (
                <div 
                  key={i} 
                  className={`border-[1.5px] border-[#161616] rounded-full px-4 py-1.5 flex items-center justify-center relative z-10 ${i > 0 ? "-ml-[1.5px]" : ""}`}
                >
                  <span className="font-[family-name:var(--font-bebas)] text-[#161616] text-[16px] tracking-wide leading-none mt-0.5">
                    {role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
