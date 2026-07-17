"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, MotionValue, useTransform, useMotionValue } from "framer-motion";
import Image from "next/image";

const cards: any[] = [
  {
    id: 1,
    type: "text",
    bgColor: "#0A84FF",
    topText: "0:03S",
    bottomText: "FIND THE\nDAMN PHONE",
    rotation: -12.18
  },
  {
    id: 2,
    type: "image",
    src: "/images/new3.svg",
    rotation: 12.18
  },
  {
    id: 3,
    type: "text",
    bgColor: "#FF0E97",
    topText: "0:06S",
    bottomText: "CONVINCE IT\nYOU'RE YOU",
    rotation: -12.18
  },
  {
    id: 4,
    type: "image",
    src: "/images/new4.svg",
    rotation: 12.18
  },
  {
    id: 5,
    type: "text",
    bgColor: "#0A84FF",
    topText: "0:09S",
    bottomText: "FIND THE\nRIGHT APP",
    rotation: -12.18
  },
  {
    id: 6,
    type: "image",
    src: "/images/new5.svg",
    rotation: 12.18
  },
  {
    id: 7,
    type: "text",
    bgColor: "#FF0E97",
    topText: "0:12S",
    bottomText: "FIND THE\nRIGHT RIGHT",
    rotation: -4
  },
  {
    id: 8,
    type: "image",
    src: "/images/new7.svg",
    rotation: -6
  },
  {
    id: 9,
    type: "text",
    bgColor: "#0A84FF",
    topText: "0:15+S",
    bottomText: "...STILL\nWAITING",
    rotation: 8
  },
  {
    id: 10,
    type: "image",
    src: "/images/new6.svg",
    rotation: -6
  },
];

const testimonialCards: any[] = [
  { id: 1, type: "testimonial", bgColor: "#0A84FF", quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."', name: "NAME SURNAME", role: "Company name", rotation: 8 },
  { id: 2, type: "image", src: "/home why (1).svg", rotation: -12.18 },
  { id: 3, type: "testimonial", bgColor: "#FF0E97", quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."', name: "NAME SURNAME", role: "Company name", rotation: 8 },
  { id: 4, type: "image", src: "/home why (2).svg", rotation: -12.18 },
  { id: 5, type: "testimonial", bgColor: "#0A84FF", quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."', name: "NAME SURNAME", role: "Company name", rotation: 8 },
];

interface InteractiveCardsProps {
  theme?: "dark" | "cream";
  scrollProgress?: MotionValue<number>;
}

export function InteractiveCards({ theme = "dark", scrollProgress }: InteractiveCardsProps = {}) {
  const displayCards = theme === 'cream' ? testimonialCards : cards;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [dynamicRotations, setDynamicRotations] = useState<number[] | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const mousePosRef = useRef({ x: 0, y: 0 });
  const hoveredIndexRef = useRef<number | null>(null);
  const endSpacerRef = useRef<HTMLDivElement>(null);

  // Keep ref in sync for scroll handler
  useEffect(() => {
    hoveredIndexRef.current = hoveredIndex;
  }, [hoveredIndex]);

  // Track global mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (scrollContainerRef.current && endSpacerRef.current) {
        // We use offsetLeft of the spacer because it ignores CSS transforms
        // (unlike scrollWidth which gets inflated by the 100vw initial animation)
        const endPos = endSpacerRef.current.offsetLeft + endSpacerRef.current.offsetWidth;
        const diff = endPos - scrollContainerRef.current.clientWidth;
        // Adding a little extra padding so the last card isn't pressed against the edge
        setMaxScroll(diff > 0 ? diff + 32 : 0);
      }
    };
    // Need a slight delay to ensure fonts/images are loaded before measuring
    setTimeout(measure, 100);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [displayCards]);

  const dummyScroll = useMotionValue(0);
  const activeScroll = scrollProgress || dummyScroll;
  const xTransform = useTransform(activeScroll, [0, 1], [0, -maxScroll]);

  // Map vertical mouse wheel to horizontal scrolling AND handle scroll-based hover updates
  useEffect(() => {
    const container = scrollContainerRef.current;
    const wrapper = cardsWrapperRef.current;
    if (!container || !wrapper) return;

    const handleWheel = (e: WheelEvent) => {
      if (scrollProgress) return; // Disable local wheel hijack if externally controlled

      // Only intercept if the user is scrolling vertically
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const isAtLeft = container.scrollLeft === 0;
        const isAtRight = Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth;

        if (e.deltaY > 0 && !isAtRight) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        } else if (e.deltaY < 0 && !isAtLeft) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
      }
    };

    const handleScroll = () => {
      const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

      if (isTouchDevice) {
        // Mobile/Touch behavior: Do not auto-select on scroll. Just dismiss any selected card.
        if (hoveredIndexRef.current !== null) {
          setHoveredIndex(null);
          setDynamicRotations(displayCards.map(() => (Math.random() * 24) - 12));
        }
        return;
      } else {
        // Desktop/Mouse behavior: Select the card exactly under the cursor
        const { x, y } = mousePosRef.current;
        if (x === 0 && y === 0) return; // Ignore if mouse hasn't moved yet

        const el = document.elementFromPoint(x, y);
        const card = el?.closest('[data-card-index]');

        if (card) {
          const index = parseInt(card.getAttribute('data-card-index') || '-1', 10);
          if (hoveredIndexRef.current !== index) {
            setHoveredIndex(index);
          }
        } else {
          if (hoveredIndexRef.current !== null) {
            // Trigger the standard mouse leave logic
            setHoveredIndex(null);
            setDynamicRotations(displayCards.map(() => (Math.random() * 24) - 12));
          }
        }
      }
    };

    // Use a non-passive listener to allow preventDefault()
    wrapper.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      wrapper.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    // Generate new random rotations between -12 and +12 degrees for the entire deck
    setDynamicRotations(displayCards.map(() => (Math.random() * 24) - 12));
  };

  return (
    <section ref={sectionRef} className={`w-full ${theme === 'cream' ? 'bg-transparent max-md:-mt-[95px] md:pb-[60px]' : 'bg-[#161616] max-md:-mt-16 md:h-[480px]'} flex flex-col items-center pt-0 pb-0 relative z-50`}>

      <div
        ref={scrollContainerRef}
        className={`w-full ${scrollProgress ? 'overflow-hidden' : 'overflow-x-auto'} no-scrollbar flex items-center h-[600px] -mt-[75px] -mb-[600px] relative z-50 ${theme === 'cream' ? 'md:h-[608px] md:-mt-[50px] md:mb-0' : 'md:h-[480px] md:mt-0 md:mb-0'}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* We use inline flex so the cards don't wrap and can be scrolled */}
        <motion.div style={{ x: xTransform }} ref={cardsWrapperRef} className={`flex items-center min-w-max pl-16 pr-8 md:pl-24 md:pr-4 ${theme === 'cream' ? 'md:pt-0' : 'md:pt-[64px]'}`}>
          {displayCards.map((card, i) => {
            const isHovered = hoveredIndex === i;
            const baseRotation = dynamicRotations ? dynamicRotations[i] : card.rotation;

            // Calculate push away logic and dynamic rotation
            let xOffset = 0;
            let targetRotation = baseRotation;

            if (hoveredIndex !== null) {
              if (isHovered) {
                targetRotation = 0; // Hovered card becomes straight
              } else {
                const distance = Math.abs(i - hoveredIndex);
                const direction = i < hoveredIndex ? -1 : 1;

                // Tilt unhovered cards further away from the center
                if (distance === 1) {
                  xOffset = direction * 65;
                  targetRotation = baseRotation + (direction * 8); // Tilt more
                } else if (distance === 2) {
                  xOffset = direction * 30;
                  targetRotation = baseRotation + (direction * 4); // Tilt a bit more
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
                  className={`relative ${theme === 'cream' ? 'w-[184px] h-[277px] rounded-[21.12px] md:w-[279px] md:h-[400px] md:rounded-[32px]' : 'w-[220px] h-[300px] rounded-[24px] md:w-[215px] md:h-[308px] md:rounded-[24.67px]'} cursor-pointer origin-bottom overflow-hidden`}
                  onMouseEnter={() => {
                    if (!window.matchMedia('(pointer: coarse)').matches) {
                      setHoveredIndex(i);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!window.matchMedia('(pointer: coarse)').matches) {
                      handleMouseLeave();
                    }
                  }}
                  onClick={() => {
                    if (window.matchMedia('(pointer: coarse)').matches) {
                      if (hoveredIndex === i) {
                        handleMouseLeave();
                      } else {
                        setHoveredIndex(i);
                      }
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
                  {card.type === "text" ? (
                    <div
                      className="w-full h-full flex flex-col justify-between p-6"
                      style={{ backgroundColor: card.bgColor }}
                    >
                      <div
                        className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[46px] text-[#151515] leading-none"
                        style={{ letterSpacing: '-0.02em' }}
                      >
                        {card.topText}
                      </div>
                      <div
                        className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[46px] text-[#151515] leading-[0.9] whitespace-pre"
                        style={{ letterSpacing: '-0.02em' }}
                      >
                        {card.bottomText}
                      </div>
                    </div>
                  ) : card.type === "testimonial" ? (
                    <div
                      className="w-full h-full flex flex-col p-8"
                      style={{ backgroundColor: card.bgColor }}
                    >
                      <div className="w-16 h-16 rounded-full bg-[#D9D9D9] flex items-center justify-center mb-6 shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z" fill="#9CA3AF" />
                        </svg>
                      </div>
                      <div className="font-['Inter',_sans-serif] text-[15.5px] text-[#FFF9EB] leading-[1.4] mb-auto">
                        {(card as any).quote}
                      </div>
                      <div className="flex flex-col mt-4">
                        <div className="font-[family-name:var(--font-bebas)] text-[16px] text-[#FFF9EB] leading-[1.5] tracking-normal uppercase">
                          {(card as any).name}
                        </div>
                        <div className="font-['Inter',_sans-serif] text-[16px] text-[#FFF9EB] opacity-90 -mt-1">
                          {card.role}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={card.src!}
                      alt={`Interactive Card ${card.id}`}
                      fill
                      className="object-contain scale-[1.3]"
                    />
                  )}
                </motion.div>
              </motion.div>
            );
          })}
          {/* Spacer to accurately measure the end of the cards without transform inflation */}
          <div ref={endSpacerRef} className="w-4 flex-shrink-0 h-full" />
        </motion.div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
