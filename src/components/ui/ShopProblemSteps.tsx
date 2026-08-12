"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCard {
  id: number;
  quote: string;
  name: string;
  role: string;
  rating: string;
  stars: number;
  src: string;
  initialsColor?: string;
}

const cards: TestimonialCard[] = [
  {
    id: 1,
    quote: "Finally, a safety product that doesn't disappear into my bag. It's always right where I need it.",
    name: "Priyanshi Mehta",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/r1.png",
    initialsColor: "#0A84FF",
  },
  {
    id: 2,
    quote: "A thoughtful gift she'll actually use. She absolutely loved it.",
    name: "Akshat Kanungo",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/r2.png",
    initialsColor: "#FF0E97",
  },
  {
    id: 3,
    quote: "It doesn't look like a safety product, and that's why I love it. People even call it cute.",
    name: "Kavya Kapoor",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/r3.png",
    initialsColor: "#0A84FF",
  },
  {
    id: 4,
    quote: "The glow-in-the-dark feature seemed small until I actually used it. Such a smart detail.",
    name: "Shikha Verma",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/r4.png",
    initialsColor: "#FF0E97",
  },
  {
    id: 5,
    quote: "Every woman should know about NAZR. The mission, design, and products just feel incredibly well thought out.",
    name: "Jiya Raul",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/r5.png",
    initialsColor: "#0A84FF",
  },
  {
    id: 6,
    quote: "The kind of product you hope to never use. I liked it so much, I bought one for my sister too.",
    name: "Shanaya Singh",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/r6.png",
    initialsColor: "#FF0E97",
  },
  {
    id: 7,
    quote: "Found NAZR on Instagram and ordered instantly. Everything feels so thoughtfully designed.",
    name: "Somakshi Sen",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/r7.png",
    initialsColor: "#0A84FF",
  },
  {
    id: 8,
    quote: "Gives me so much peace of mind during late evening commutes. Compact and discreet.",
    name: "Ananya Deshmukh",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/r8.png",
    initialsColor: "#FF0E97",
  },
  {
    id: 9,
    quote: "The build quality is premium and sturdy. It easily attaches to my keychain without feeling bulky.",
    name: "Rhea Chawla",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/r9.png",
    initialsColor: "#0A84FF",
  },
  {
    id: 10,
    quote: "Essential everyday carry. The quick-access design makes all the difference when you need it fast.",
    name: "Meera Nair",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/r10.png",
    initialsColor: "#FF0E97",
  },
  {
    id: 11,
    quote: "Bought one for myself and two for my best friends. Highly recommend to everyone!",
    name: "Devika Roy",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/r12.png",
    initialsColor: "#0A84FF",
  },
  {
    id: 12,
    quote: "Sleek, ergonomic, and extremely reliable. Gives me confidence whenever I'm out alone.",
    name: "Aarushi Patel",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/r13.png",
    initialsColor: "#FF0E97",
  },
];

export function ShopProblemSteps() {
  // Duplicate cards for seamless infinite marquee loop
  const marqueeCards = [...cards, ...cards];

  return (
    <section className="w-full relative z-[60] bg-[#FFF1EB] py-10 md:py-16 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12 lg:pl-[40px] pl-0 pr-0">
        
        {/* Left Header Section */}
        <div className="w-full lg:w-[380px] shrink-0 flex flex-col items-start px-[20px] lg:px-0">
          {/* Dark Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-[#242424] text-[#FFF9EB] px-3 py-1.5 rounded-[6px] mb-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="w-3.5 h-3.5 fill-[#FFF9EB] text-[#FFF9EB]"
                />
              ))}
            </div>
            <span className="font-['Inter',_sans-serif] text-[13px] font-medium text-[#FFF9EB]">
              (4.5/5)
            </span>
          </div>

          {/* Title */}
          <h2
            className="font-[family-name:var(--font-bebas)] font-normal text-left text-[#161616] text-[32px] sm:text-[36px] md:text-[40px] leading-[90%] tracking-[-0.03em] uppercase m-0"
            style={{
              // @ts-ignore
              leadingTrim: "cap-height",
            }}
          >
            IT IS A LONG ESTABLISHED FACT<br />
            THAT A READERIT IS A LONG
          </h2>

          {/* Description */}
          <p
            className="font-['Inter',_sans-serif] font-normal text-left text-[#161616] text-[16px] md:text-[20px] leading-[120%] tracking-[-0.01em] mt-3 md:mt-4"
            style={{
              // @ts-ignore
              leadingTrim: "cap-height",
            }}
          >
            Discover why thousands are choosing NAZR for.
          </p>
        </div>

        {/* Right Cards Track: Full-width swipe on mobile, Marquee with fade on desktop */}
        <div
          className="w-full flex-1 relative min-w-0 overflow-x-auto lg:overflow-hidden no-scrollbar px-[20px] lg:px-0 lg:[mask-image:linear-gradient(to_right,transparent_0px,black_80px,black_100%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0px,black_80px,black_100%)]"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div
            className="flex w-max gap-[16px] py-2 max-lg:snap-x max-lg:snap-mandatory max-lg:animate-none lg:animate-marquee lg:hover:[animation-play-state:paused] max-lg:pr-[20px]"
            style={{
              animationDuration: "45s",
            }}
          >
            {marqueeCards.map((card, idx) => (
              <div
                key={`${card.id}-${idx}`}
                className="w-[310px] sm:w-[350px] h-[212px] bg-[#242424] rounded-[16px] p-[12px] flex flex-row items-stretch gap-[14px] sm:gap-[16px] shrink-0 border-[0.5px] border-white/10 select-none transition-transform duration-200 hover:scale-[1.02] max-lg:snap-start"
                style={{
                  transform: "rotate(0deg)",
                  opacity: 1,
                }}
              >
                {/* Left Column: Text & Reviewer details */}
                <div className="flex-1 flex flex-col justify-between min-w-0 h-full py-0.5">
                  {/* Stars + Rating */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-3.5 h-3.5 ${s <= (card.stars || 5) ? "fill-[#FFF9EB] text-[#FFF9EB]" : "fill-transparent text-[#FFF9EB]/30"}`}
                        />
                      ))}
                    </div>
                    <span className="font-['Inter',_sans-serif] text-[12px] font-medium text-[#FFF9EB]">
                      ({card.rating})
                    </span>
                  </div>

                  {/* Quote text */}
                  <p className="font-['Inter',_sans-serif] text-[12.5px] sm:text-[13px] text-[#FFF9EB] leading-[1.35] tracking-[-0.01em] line-clamp-4 my-auto">
                    {card.quote}
                  </p>

                  {/* Reviewer Profile */}
                  <div className="flex items-center gap-2.5 mt-auto shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#FFF9EB] flex items-center justify-center shrink-0">
                      <span
                        className="font-[family-name:var(--font-bebas)] text-[14px] leading-none tracking-wide"
                        style={{ color: card.initialsColor || (card.id % 2 === 1 ? "#0A84FF" : "#FF0E97") }}
                      >
                        {card.name
                          .split(" ")
                          .filter(Boolean)
                          .map((w) => w[0])
                          .join("")
                          .toUpperCase()}
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span
                        className="font-[family-name:var(--font-bebas)] font-normal text-[16px] text-[#FFF9EB] uppercase tracking-[0] leading-[150%] truncate"
                        style={{
                          // @ts-ignore
                          leadingTrim: "cap-height",
                        }}
                      >
                        {card.name}
                      </span>
                      <span
                        className="font-['Switzer',_sans-serif] font-normal text-[12px] text-[#FFF9EB]/80 tracking-[0] leading-[150%] truncate"
                      >
                        {card.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Card Image */}
                <div className="w-[100px] sm:w-[111px] h-[187px] rounded-[4px] overflow-hidden shrink-0 relative bg-black/40">
                  <Image
                    src={card.src}
                    alt={card.name}
                    fill
                    className="object-cover rounded-[4px]"
                    sizes="(max-width: 640px) 100px, 111px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


