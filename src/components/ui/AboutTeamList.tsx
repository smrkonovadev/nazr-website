"use client";

import { useState, useRef, useEffect } from "react";
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
    roles: ["COFOUNDER", "COFOUNDER"],
    image: "/images/image2.png"
  },
  {
    id: "2",
    name: "JIA MUKHARJEE",
    roles: ["COFOUNDER", "COFOUNDER"],
    image: "/images/image3.png"
  },
  {
    id: "3",
    name: "ATUL CHOPRA",
    roles: ["COFOUNDER", "COFOUNDER"],
    image: "/images/image4.png"
  }
];

export function AboutTeamList() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  // Spring animations for smooth mouse following
  const mouseX = useSpring(0, { stiffness: 150, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 150, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const scale = typeof window !== 'undefined' 
      ? (window.innerWidth < 768 ? window.innerWidth / 390 : (window.innerWidth < 1440 ? window.innerWidth / 1440 : 1))
      : 1;

    const rect = e.currentTarget.getBoundingClientRect();
    // We want the center of the image to follow the cursor.
    // Image width 300px, height 400px. Offset by half to center it.
    // Calculate x and y relative to the section's top-left corner
    mouseX.set((e.clientX - rect.left) / scale - 150);
    mouseY.set((e.clientY - rect.top) / scale - 200);
  };

  return (
    <section 
      className="w-full bg-[#FFF1EB] max-md:pb-6 md:pb-32 px-4 md:px-12 relative -mt-[2px] border-none outline-none"
      onMouseMove={handleMouseMove}
    >
      {/* Desktop Layout: Vertical List with Hover Effects */}
      <div className="hidden w-full max-w-[1400px] mx-auto border-t-[3px] border-[#161616] md:block">
        {TEAM_MEMBERS.map((member, index) => {
          const isHovered = hoveredId === member.id;
          
          return (
            <div 
              key={member.id}
              className="w-full py-6 md:py-10 border-b-[3px] border-[#161616] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer group"
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              
              {/* Left Side: Name and Tags */}
              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-2 relative">
                  
                  {/* Owl Logo - only visible on hover */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5, width: 0 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0, 
                      scale: isHovered ? 1 : 0.5,
                      width: isHovered ? "auto" : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden shrink-0 flex items-center justify-center"
                  >
                    <Image 
                      src="/images/logosvg.svg"
                      alt="Owl Logo"
                      width={100}
                      height={100}
                      className="w-[60px] md:w-[100px] h-auto object-contain brightness-0 mr-4"
                    />
                  </motion.div>

                  <h3 className="font-[family-name:var(--font-bebas)] text-[#161616] text-[40px] md:text-[80px] leading-[85%] tracking-[-0.02em] m-0 transition-transform duration-300 group-hover:translate-x-2">
                    {member.name}
                  </h3>
                </div>

                {/* Pill Tags */}
                <div className="flex gap-3">
                  {member.roles.map((role, i) => (
                    <div 
                      key={i} 
                      className="border border-[#161616] rounded-full px-4 py-1 flex items-center justify-center"
                    >
                      <span className="font-[family-name:var(--font-bebas)] text-[#161616] text-[14px] md:text-[16px] tracking-wide leading-none mt-1">
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Circular Button */}
              <div className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] bg-[#161616] rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight className="text-[#FFF1EB] w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:rotate-45" />
              </div>

            </div>
          );
        })}
      </div>

      {/* Floating Hover Image */}
      <motion.div
        className="absolute top-0 left-0 pointer-events-none z-[100] overflow-hidden rounded-[20px] shadow-2xl w-[300px] h-[400px]"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{
          opacity: hoveredId ? 1 : 0,
          scale: hoveredId ? 1 : 0.8,
          rotate: hoveredId ? 8 : -5,
        }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
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

      {/* Mobile Layout: Horizontal Scrolling Cards */}
      <div 
        className="md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory pb-8 pt-4 -mx-4 px-4 [&::-webkit-scrollbar]:hidden outline-none border-none" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
            <div className="flex gap-2 flex-wrap">
              {member.roles.slice(0, 1).map((role, i) => (
                <div key={i} className="border-[1.5px] border-[#161616] rounded-full px-4 py-1.5 flex items-center justify-center">
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
