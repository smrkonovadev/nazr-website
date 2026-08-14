"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

function HalfStar({ className = "w-3.5 h-3.5 text-[#FFF9EB]" }: { className?: string }) {
  const id = React.useId();
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={`url(#${id})`}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

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
    quote: "Finally, a safety product I actually carry. The others always ended up at the bottom of my bag.",
    name: "Priyanshi Mehta",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/1rev.jpg",
    initialsColor: "#0A84FF",
  },
  {
    id: 2,
    quote: "Love that it doesn’t look like a safety product. Blends right in and is easy to grab.",
    name: "Kavya Kapoor",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/2rev.png",
    initialsColor: "#FF0E97",
  },
  {
    id: 3,
    quote: "Tiny product. Huge peace of mind.",
    name: "Sakshi Gupta",
    role: "Verified Buyer",
    rating: "4.0/5",
    stars: 4,
    src: "/images/3rev.png",
    initialsColor: "#0A84FF",
  },
  {
    id: 4,
    quote: "I really like the way the packaging and the arc of the product. It has a recoil and seems very potent",
    name: "Auman Subhasish Bose",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/4rev.png",
    initialsColor: "#FF0E97",
  },
  {
    id: 5,
    quote: "Used it at a concert last weekend and honestly forgot it was even there. That's what I liked most.",
    name: "Muskaan Arora",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/5rev.png",
    initialsColor: "#0A84FF",
  },
  {
    id: 6,
    quote: "Wanted to gift her something thoughtful—felt much more meaningful than flowers or chocolates.",
    name: "Akshat S",
    role: "Verified Buyer",
    rating: "4.0/5",
    stars: 4,
    src: "/images/6rev.png",
    initialsColor: "#FF0E97",
  },
  {
    id: 7,
    quote: "NAZR feels like it understands what women actually need. It just makes you feel more prepared.",
    name: "Aina K",
    role: "Verified Buyer",
    rating: "4.5/5",
    stars: 5,
    src: "/images/7rev.png",
    initialsColor: "#0A84FF",
  },
  {
    id: 8,
    quote: "Such a clever idea. I hope every café starts keeping these.",
    name: "Vaishnavi Iyer",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/8rev.png",
    initialsColor: "#FF0E97",
  },
  {
    id: 9,
    quote: "Everything feels premium, from the packaging to the products themselves.",
    name: "Riya Bhatia",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/9rev.png",
    initialsColor: "#0A84FF",
  },
  {
    id: 10,
    quote: "Gifted this to my cousin before she moved to another city. She absolutely loved it.",
    name: "Isha Kapoor",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/10rev.png",
    initialsColor: "#FF0E97",
  },
  {
    id: 11,
    quote: "The glow-in-the-dark feature seemed small, but it’s actually so useful. Love the detailing, GG NAZR!",
    name: "Shikha Verma",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/11rev.png",
    initialsColor: "#0A84FF",
  },
  {
    id: 12,
    quote: "Found NAZR on Instagram and ended up ordering. Really love how well thought out everything is :)",
    name: "Jiya Raul",
    role: "Verified Buyer",
    rating: "4.0/5",
    stars: 4,
    src: "/images/12rev.png",
    initialsColor: "#FF0E97",
  },
  {
    id: 13,
    quote: "Bought these before a girls' trip and everyone wanted a pack by the end.",
    name: "Tanvi Desai",
    role: "Verified Buyer",
    rating: "5.0/5",
    stars: 5,
    src: "/images/13rev.png",
    initialsColor: "#0A84FF",
  },
  {
    id: 14,
    quote: "It's one of those products you hope you never need, but you're glad to have. Got one for my sister too!",
    name: "Shanaya Singh",
    role: "Verified Buyer",
    rating: "4.5/5",
    stars: 5,
    src: "/images/14rev.png",
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
              (4.8/5)
            </span>
          </div>

          {/* Title */}
          <h2
            className="font-[family-name:var(--font-bebas)] font-normal text-left text-[#161616] text-[46px] md:text-[48px] leading-[95%] md:leading-[90%] tracking-[-0.03em] uppercase m-0 whitespace-nowrap md:whitespace-normal"
            style={{
              // @ts-ignore
              leadingTrim: "cap-height",
            }}
          >
            WHY WOMEN <br className="hidden md:block" />
            CHOOSE NAZR.
          </h2>

          {/* Description */}
          <p
            className="font-['Inter',_sans-serif] font-normal text-left text-[#161616] text-[16px] md:text-[20px] leading-[120%] tracking-[-0.01em] mt-3 md:mt-4"
            style={{
              // @ts-ignore
              leadingTrim: "cap-height",
            }}
          >
            Discover what makes NAZR part of everyday preparedness.
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
                      {[1, 2, 3, 4, 5].map((s) => {
                        const numRating = parseFloat(card.rating);
                        if (s <= Math.floor(numRating)) {
                          return <Star key={s} className="w-3.5 h-3.5 fill-[#FFF9EB] text-[#FFF9EB]" />;
                        }
                        if (s === Math.ceil(numRating) && numRating % 1 !== 0) {
                          return <HalfStar key={s} className="w-3.5 h-3.5 text-[#FFF9EB]" />;
                        }
                        return <Star key={s} className="w-3.5 h-3.5 fill-transparent text-[#FFF9EB]" />;
                      })}
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


