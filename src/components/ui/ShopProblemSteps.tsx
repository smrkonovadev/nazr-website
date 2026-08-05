"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    id: 1,
    type: "testimonial",
    bgColor: "#0E8DFF",
    quote:
      '"Finally, a safety product that doesn\'t disappear into my bag. It\'s always right where I need it."',
    name: "Priyanshi Mehta",
    stars: "⭐⭐⭐⭐",
    rotation: -8,
  },
  {
    id: 2,
    type: "image",
    src: "/home why (1).svg",
    alt: "Woman Reaction 1",
    rotation: -4,
  },
  {
    id: 3,
    type: "testimonial",
    bgColor: "#E5007D",
    quote:
      '"A thoughtful gift she\'ll actually use. She absolutely loved it."',
    name: "Akshat Kanungo",
    stars: "⭐⭐⭐⭐⭐",
    rotation: 6,
  },
  {
    id: 4,
    type: "image",
    src: "/home why (2).svg",
    alt: "Woman Reaction 2",
    rotation: 3,
  },
  {
    id: 5,
    type: "testimonial",
    bgColor: "#0E8DFF",
    quote:
      '"It doesn\'t look like a safety product, and that\'s why I love it. People even call it cute."',
    name: "Kavya Kapoor",
    stars: "⭐⭐⭐⭐⭐",
    rotation: -6,
  },
  {
    id: 6,
    type: "image",
    src: "/home why (1).svg",
    alt: "Woman Reaction 1",
    rotation: 4,
  },
  {
    id: 7,
    type: "testimonial",
    bgColor: "#E5007D",
    quote:
      '"The glow-in-the-dark feature seemed small until I actually used it. Such a smart detail."',
    name: "Shikha Verma",
    stars: "⭐⭐⭐⭐⭐",
    rotation: -5,
  },
  {
    id: 8,
    type: "image",
    src: "/home why (2).svg",
    alt: "Woman Reaction 2",
    rotation: 5,
  },
  {
    id: 9,
    type: "testimonial",
    bgColor: "#0E8DFF",
    quote:
      '"Every woman should know about NAZR. The mission, design, and products just feel incredibly well thought out."',
    name: "Jiya Raul",
    stars: "⭐⭐⭐⭐⭐",
    rotation: -4,
  },
  {
    id: 10,
    type: "image",
    src: "/home why (1).svg",
    alt: "Woman Reaction 1",
    rotation: 6,
  },
  {
    id: 11,
    type: "testimonial",
    bgColor: "#E5007D",
    quote:
      '"The kind of product you hope to never use. I liked it so much, I bought one for my sister too."',
    name: "Shanaya Singh",
    stars: "⭐⭐⭐⭐⭐",
    rotation: -7,
  },
  {
    id: 12,
    type: "image",
    src: "/home why (2).svg",
    alt: "Woman Reaction 2",
    rotation: 4,
  },
  {
    id: 13,
    type: "testimonial",
    bgColor: "#0E8DFF",
    quote:
      '"Found NAZR on Instagram and ordered instantly. Everything feels so thoughtfully designed."',
    name: "Somakshi Sen",
    stars: "⭐⭐⭐⭐⭐",
    rotation: -5,
  },
];

export function ShopProblemSteps() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Enable smooth mouse click & drag horizontal scrolling and wheel support without trapping vertical page scroll
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
    <section
      ref={sectionRef}
      className="w-full relative z-[60] bg-[#161616] py-6 md:py-8 overflow-hidden flex flex-col justify-center h-auto min-h-[580px] md:h-[calc(100vh-60px)] md:max-h-[750px]"
    >
      {/* Top Header Section */}
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 mb-4 md:mb-6 shrink-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12">
          {/* Left Title */}
          <div className="w-full md:w-[68%] lg:w-[65%]">
            <h2 className="font-[family-name:var(--font-bebas)] font-normal text-left text-[#FFF9EB] text-[32px] md:text-[40px] leading-[120%] tracking-[-0.01em] uppercase opacity-100">
              {/* Mobile Line Breakdown */}
              <span className="md:hidden">
                THE MOST THOUGHTFUL GIFTS AREN&apos;T<br />
                ALWAYS THE BIGGEST. SOMETIMES<br />
                THEY&apos;RE THE ONES THAT QUIETLY SAY,<br />
                &quot;I WANT YOU TO GET HOME SAFE.&quot;
              </span>
              {/* Desktop Line Breakdown */}
              <span className="hidden md:inline">
                THE MOST THOUGHTFUL GIFTS AREN&apos;T ALWAYS THE<br />
                BIGGEST. SOMETIMES THEY&apos;RE THE ONES THAT<br />
                QUIETLY SAY, &quot;I WANT YOU TO GET HOME SAFE.&quot;
              </span>
            </h2>
          </div>

          {/* Right Description */}
          <div className="w-full md:w-[32%] lg:w-[30%]">
            <p className="font-sans font-normal text-left text-[#FFF9EB] text-[20px] leading-[140%] tracking-[-0.01em] opacity-100">
              Discover why thousands are choosing NAZR for the women they care about.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Scroll Track */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar flex items-center relative z-50 py-2 h-[440px] md:h-[460px] shrink-0 select-none cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", touchAction: "pan-x pan-y", overscrollBehaviorX: "contain" }}
      >
        <div
          ref={cardsWrapperRef}
          className="flex items-center min-w-max px-5 md:px-16 gap-4 md:space-x-4 pt-4 pb-4 select-none"
        >
          {cards.map((card, i) => {
            const isHovered = hoveredIndex === i;
            const baseRotation = isMobile ? 0 : (card.rotation || 0);

            let xOffset = 0;
            let targetRotation = baseRotation;

            if (!isMobile && hoveredIndex !== null) {
              if (isHovered) {
                targetRotation = 0;
              } else {
                const distance = Math.abs(i - hoveredIndex);
                const direction = i < hoveredIndex ? -1 : 1;

                if (distance === 1) {
                  xOffset = direction * 45;
                  targetRotation = baseRotation + direction * 5;
                } else if (distance === 2) {
                  xOffset = direction * 20;
                  targetRotation = baseRotation + direction * 2;
                }
              }
            }

            return (
              <motion.div
                key={card.id}
                className="relative flex-shrink-0 max-md:mx-0 md:-mx-2 opacity-100"
                initial={{ x: "20vw", opacity: 1 }}
                animate={{
                  x: isInView ? 0 : "20vw",
                  opacity: 1,
                  zIndex: isHovered ? 50 : i + 1,
                }}
                transition={{
                  x: { duration: 1.0, delay: i * 0.08, type: "spring", bounce: 0.2 },
                }}
              >
                <motion.div
                  data-card-index={i}
                  className="relative w-[279px] h-[400px] max-md:rounded-[16px] md:rounded-[32px] cursor-pointer origin-center overflow-hidden shadow-2xl opacity-100 flex-shrink-0"
                  onMouseEnter={() => {
                    if (!isMobile) {
                      setHoveredIndex(i);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!isMobile) {
                      setHoveredIndex(null);
                    }
                  }}
                  animate={{
                    rotate: targetRotation,
                    scale: isHovered ? 1.08 : 1,
                    x: xOffset,
                    y: isHovered ? -10 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 170,
                    damping: 22,
                  }}
                >
                  {card.type === "testimonial" ? (
                    <div
                      className="w-full h-full flex flex-col justify-between p-6 md:p-7 text-[#FFF9EB] opacity-100 max-md:rounded-[16px] md:rounded-[32px]"
                      style={{ backgroundColor: card.bgColor }}
                    >
                      {/* Avatar Circle */}
                      <div className="w-14 h-14 md:w-14 md:h-14 rounded-full bg-[#EAEAEA]/80 flex items-center justify-center shrink-0 opacity-100">
                        <svg
                          className="w-6 h-6 text-[#8E8E8E]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                      </div>

                      {/* Quote Text */}
                      <p className="font-[family-name:var(--font-inter)] text-[14px] leading-[140%] text-[#FFF9EB] font-normal opacity-100 my-2">
                        {card.quote}
                      </p>

                      {/* Name & Stars */}
                      <div className="flex flex-col opacity-100">
                        {card.name ? (
                          <span className="font-[family-name:var(--font-bebas)] text-[18px] tracking-[0.02em] text-[#FFF9EB] uppercase opacity-100">
                            {card.name}
                          </span>
                        ) : null}
                        <span className="text-[13px] text-[#FFF9EB] opacity-90 mt-0.5">
                          {(card as any).stars || (card as any).role}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-[#161616] relative overflow-hidden max-md:rounded-[16px] md:rounded-[32px] opacity-100">
                      <img
                        src={card.src}
                        alt={card.alt}
                        className="w-full h-full object-cover scale-[1.05] pointer-events-none max-md:rounded-[16px] md:rounded-[32px] opacity-100"
                      />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
