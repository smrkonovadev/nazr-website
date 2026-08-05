"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, MotionValue } from "framer-motion";
import Image from "next/image";

const darkCards = [
  {
    id: 1,
    timeNumber: "0:03",
    timeUnit: "Seconds",
    title: "FIND THE\nDAMN PHONE",
    src: "/images/new3.webp",
    imgRotation: 4.44,
  },
  {
    id: 2,
    timeNumber: "0:06",
    timeUnit: "Seconds",
    title: "CONVINCE IT\nYOU'RE YOU",
    src: "/images/new4.webp",
    imgRotation: -4.24,
  },
  {
    id: 3,
    timeNumber: "0:09",
    timeUnit: "Seconds",
    title: "FIND THE\nRIGHT APP",
    src: "/images/new5.webp",
    imgRotation: 4.44,
  },
  {
    id: 4,
    timeNumber: "0:12",
    timeUnit: "Seconds",
    title: "FIND THE\nRIGHT BUTTON",
    src: "/images/new7.webp",
    imgRotation: -4.24,
    objectPosition: "80% center",
  },
  {
    id: 5,
    timeNumber: "0:15+",
    timeUnit: "Seconds",
    title: "...STILL\nWAITING",
    src: "/images/new6.webp",
    imgRotation: 4.44,
  },
];

const testimonialCards: any[] = [
  {
    id: 1,
    type: "testimonial",
    bgColor: "#0A84FF",
    quote: '"Finally, a safety product I actually carry. I\'ve bought multiple safety tools before, but they always ended up forgotten at the bottom of my bag. This one is designed so well that it stays within reach, which makes all the difference."',
    name: "Priyanshi Mehta",
    stars: "⭐⭐⭐⭐",
    rotation: -2
  },
  { id: 2, type: "image", src: "/home why (1).svg", rotation: 3 },
  {
    id: 3,
    type: "testimonial",
    bgColor: "#FF0E97",
    quote: '"I love that it doesn\'t look like a typical safety product. It blends into my everyday essentials while still being easy to access when needed. People have even said it\'s soo cute."',
    name: "Kavya Kapoor",
    stars: "⭐⭐⭐⭐⭐",
    rotation: -2
  },
  { id: 4, type: "image", src: "/home why (2).svg", rotation: 3 },
  {
    id: 5,
    type: "testimonial",
    bgColor: "#0A84FF",
    quote: '"I wanted to gift her something thoughtful, and this felt much more meaningful than flowers or chocolates. She absolutely loved it."',
    name: "Akshat Kanungo",
    stars: "⭐⭐⭐⭐⭐",
    rotation: -2
  },
  { id: 6, type: "image", src: "/home why (1).svg", rotation: 3 },
  {
    id: 7,
    type: "testimonial",
    bgColor: "#FF0E97",
    quote: '"NAZR feels like it understands what women actually need. It just makes you feel more prepared."',
    name: "Aina K",
    stars: "⭐⭐⭐⭐",
    rotation: -2
  },
  { id: 8, type: "image", src: "/home why (2).svg", rotation: 3 },
  {
    id: 9,
    type: "testimonial",
    bgColor: "#0A84FF",
    quote: '"The glow-in-the-dark feature sounded minor at first, but it\'s surprisingly useful. I had kept it on my bag the whole day and then in the evening when I got home I realised that it was glowing as it was pitch dark, great detailing!"',
    name: "Shikha Verma",
    stars: "⭐⭐⭐⭐⭐",
    rotation: -2
  },
  { id: 10, type: "image", src: "/home why (1).svg", rotation: 3 },
  {
    id: 11,
    type: "testimonial",
    bgColor: "#FF0E97",
    quote: '"Every woman should know about NAZR. I came across the brand on Instagram and ended up ordering. The mission, the design, and the products all feel very well thought of :)"',
    name: "",
    stars: "⭐⭐⭐⭐⭐",
    rotation: -2
  },
  { id: 12, type: "image", src: "/home why (2).svg", rotation: 3 },
  {
    id: 13,
    type: "testimonial",
    bgColor: "#0A84FF",
    quote: '"It\'s one of those products you hope you never need, but you\'re glad to have. So when I came across this, I got one for my sister too!"',
    name: "",
    stars: "⭐⭐⭐⭐⭐",
    rotation: -2
  },
];

interface InteractiveCardsProps {
  theme?: "dark" | "cream";
  scrollProgress?: MotionValue<number>;
}

export function InteractiveCards({ theme = "dark" }: InteractiveCardsProps = {}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [dynamicRotations, setDynamicRotations] = useState<number[] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setDynamicRotations(testimonialCards.map(() => (Math.random() * 12) - 6));
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isDown = false;
    let startX = 0;
    let scrollLeftPos = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.clientX;
      scrollLeftPos = container.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
    };

    const onMouseUp = () => {
      isDown = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      const x = e.clientX;
      const walk = (x - startX) * 1.5;
      if (Math.abs(walk) > 4) {
        e.preventDefault();
        container.scrollLeft = scrollLeftPos - walk;
      }
    };

    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta !== 0) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (
          (delta > 0 && container.scrollLeft < maxScroll - 1) ||
          (delta < 0 && container.scrollLeft > 1)
        ) {
          e.preventDefault();
          container.scrollLeft += delta * 1.2;
        }
      }
    };

    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`w-full ${theme === 'cream' ? 'bg-transparent max-md:mt-0 md:pb-0' : 'bg-[#161616] mt-0 pt-0 pb-4 md:py-0'} flex flex-col items-center relative z-50`}>

      {theme === "dark" ? (
        // Home Page Dark Cards (5 Centered Straight Unified Cards matching Figma Screenshot)
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[30px] overflow-x-auto no-scrollbar pt-4 pb-4 md:pt-4 md:pb-0 overflow-y-visible" style={{ touchAction: 'pan-x pan-y' }}>
          <div className="flex flex-row justify-start md:justify-start items-center gap-3 sm:gap-4 md:gap-[35px] w-full min-w-max md:min-w-0 mx-auto">
            {darkCards.map((card, i) => {
              const isHovered = hoveredIndex === i;

              return (
                <motion.div
                  key={card.id}
                  data-card-index={i}
                  className="relative w-[155px] h-[240px] sm:w-[195px] sm:h-[295px] md:w-[248px] md:h-[335px] md:min-w-[248px] md:min-h-[335px] rounded-[16px] overflow-hidden border-[1px] border-[#FFF9EB] bg-[#161616] flex-shrink-0 cursor-pointer shadow-xl flex flex-col justify-between p-[16px_10px] md:p-[20px_10px]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? (isHovered ? -4 : 0) : 30,
                    scale: isHovered ? 1.02 : 1
                  }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Background Image (Counter-rotated to exact 0 degrees) */}
                  <Image
                    src={card.src}
                    alt={card.title.replace('\n', ' ')}
                    fill
                    className="object-cover transition-transform duration-300"
                    style={{
                      transform: `rotate(${card.imgRotation}deg) scale(1.12)`,
                      objectPosition: (card as any).objectPosition || 'center center'
                    }}
                    priority={i < 3}
                  />

                  {/* Bottom Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none z-10" />

                  {/* Top Left Timestamp */}
                  <div className="absolute top-[16px] left-[10px] md:top-[20px] md:left-[10px] z-20 flex flex-col text-[#FFF9EB] pointer-events-none">
                    <span className="font-sans font-bold text-[18px] sm:text-[22px] md:text-[26px] leading-none tracking-tight text-[#FFF9EB]">
                      {card.timeNumber}
                    </span>
                    <span className="font-sans text-[10px] sm:text-[11px] md:text-[12px] text-[#FFF9EB]/80 leading-none mt-0.5">
                      {card.timeUnit}
                    </span>
                  </div>

                  {/* Bottom Title Text */}
                  <div className="absolute bottom-[16px] left-[10px] right-[10px] md:bottom-[20px] md:left-[10px] md:right-[10px] z-20 pointer-events-none">
                    <h3 className="font-[family-name:var(--font-bebas)] text-[#FFF9EB] text-[22px] sm:text-[26px] md:text-[30px] leading-[90%] tracking-[-0.01em] uppercase whitespace-pre m-0">
                      {card.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ) : (
        // Cream Theme Testimonial Cards (About page)
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto no-scrollbar flex items-center relative z-50 h-[260px] mt-1 mb-2 md:h-[608px] md:-mt-[50px] md:mb-0 select-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', touchAction: 'pan-x pan-y', overscrollBehaviorX: 'contain' }}
        >
          <div className="flex items-center min-w-max pl-3 pr-4 md:pl-24 md:pr-4 md:pt-0 select-none">
            {testimonialCards.map((card, i) => {
              const isHovered = hoveredIndex === i;
              const baseRotation = (dynamicRotations && typeof dynamicRotations[i] === 'number') ? dynamicRotations[i] : (card.rotation || 0);

              let xOffset = 0;
              let targetRotation = baseRotation;

              if (hoveredIndex !== null) {
                if (isHovered) {
                  targetRotation = 0;
                } else {
                  const distance = Math.abs(i - hoveredIndex);
                  const direction = i < hoveredIndex ? -1 : 1;

                  if (distance === 1) {
                    xOffset = direction * 65;
                    targetRotation = baseRotation + (direction * 8);
                  } else if (distance === 2) {
                    xOffset = direction * 30;
                    targetRotation = baseRotation + (direction * 4);
                  } else if (distance === 3) {
                    xOffset = direction * 15;
                    targetRotation = baseRotation + (direction * 2);
                  } else {
                    xOffset = 0;
                  }
                }
              }

              return (
                <motion.div
                  key={card.id}
                  className="relative -mx-2 flex-shrink-0"
                  initial={{ x: "100vw" }}
                  animate={{
                    x: isInView ? 0 : "100vw",
                    zIndex: isHovered ? 50 : i
                  }}
                  transition={{
                    x: { duration: 1.8, delay: i * 0.2, type: "spring", bounce: 0.25 }
                  }}
                >
                  <motion.div
                    data-card-index={i}
                    className="relative w-[154px] h-[240px] rounded-[18px] md:w-[279px] md:h-[400px] md:rounded-[32px] cursor-pointer origin-bottom overflow-hidden shadow-lg"
                    onMouseEnter={() => {
                      if (window.innerWidth >= 768 && !window.matchMedia('(pointer: coarse)').matches) {
                        setHoveredIndex(i);
                      }
                    }}
                    onMouseLeave={() => {
                      if (window.innerWidth >= 768 && !window.matchMedia('(pointer: coarse)').matches) {
                        handleMouseLeave();
                      }
                    }}
                    animate={{
                      rotate: targetRotation,
                      scale: isHovered ? 1.15 : 1,
                      x: xOffset,
                      y: isHovered ? -36 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 22,
                      mass: 1.2
                    }}
                  >
                    {card.type === "testimonial" ? (
                      <div
                        className="w-full h-full flex flex-col p-4 md:p-8 justify-between"
                        style={{ backgroundColor: card.bgColor }}
                      >
                        <div className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-[#FFF9EB] flex items-center justify-center mb-2 md:mb-6 shrink-0">
                          <span
                            className="font-[family-name:var(--font-bebas)] text-[11px] md:text-[20px] leading-none tracking-wide"
                            style={{ color: card.bgColor }}
                          >
                            {(card as any).name
                              ? (card as any).name.split(' ').map((w: string) => w[0]).join('').toUpperCase()
                              : '·'}
                          </span>
                        </div>
                        <div className="font-['Inter',_sans-serif] text-[10.5px] md:text-[15.5px] text-[#FFF9EB] leading-[1.35] mb-auto">
                          {(card as any).quote}
                        </div>
                        <div className="flex flex-col mt-2 md:mt-4">
                          {(card as any).name ? (
                            <div className="font-[family-name:var(--font-bebas)] text-[13px] md:text-[18px] text-[#FFF9EB] leading-[1.3] tracking-normal uppercase">
                              {(card as any).name}
                            </div>
                          ) : null}
                          <div className="text-[10px] md:text-[14px] text-[#FFF9EB] opacity-90 mt-0.5">
                            {(card as any).stars || card.role}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={card.src!}
                        alt={`Interactive Card ${card.id}`}
                        fill
                        className="object-cover scale-[1.18]"
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
