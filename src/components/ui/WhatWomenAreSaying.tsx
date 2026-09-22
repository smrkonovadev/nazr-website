"use client";

interface Review {
  id: number;
  rating: number;
  quote: string;
  author: string;
  city: string;
}

const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    quote: "Finally, a safety product I actually carry",
    author: "Priyanshi M",
    city: "Hyderabad",
  },
  {
    id: 2,
    rating: 5,
    quote: "Tiny product. Huge peace of mind.",
    author: "Sakshi G.",
    city: "Bangalore",
  },
  {
    id: 3,
    rating: 4,
    quote: "4.95/5 from our first college workshop Jai Hind College",
    author: "Priyanshi M",
    city: "Mumbai",
  },
  {
    id: 4,
    rating: 5,
    quote: "Need for today",
    author: "Krisha",
    city: "Mumbai",
  },
  {
    id: 5,
    rating: 5,
    quote: "Very useful app devised for women",
    author: "Pranali",
    city: "Pune",
  },
  {
    id: 6,
    rating: 5,
    quote: "Finally, a safety product I actually carry",
    author: "Kavya K",
    city: "Mumbai",
  },
];

// Star Icon component
function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      className={`w-[17px] h-[17px] ${filled ? "text-[#FF0E97]" : "text-[#555555]"} fill-current`}
      viewBox="0 0 24 24"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-[280px] sm:w-[320px] md:w-[340px] h-[165px] sm:h-[175px] bg-[#222222] rounded-[20px] p-5 sm:p-6 flex flex-col justify-between shrink-0 border border-white/[0.04] select-none hover:border-white/10 transition-colors">
      {/* Stars Row */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} filled={i < review.rating} />
        ))}
      </div>

      {/* Quote */}
      <p className="font-['Inter',_sans-serif] text-[#FFF9EB] text-[15px] sm:text-[16px] font-normal leading-[1.35] line-clamp-3 m-0">
        {review.quote}
      </p>

      {/* Author & City */}
      <p className="font-['Inter',_sans-serif] text-[#8E8E8E] text-[13px] sm:text-[14px] font-normal m-0">
        {review.author}, {review.city}
      </p>
    </div>
  );
}

export function WhatWomenAreSaying() {
  return (
    <section className="w-full bg-[#161616] pt-12 md:pt-16 pb-12 md:pb-16 overflow-hidden relative z-20">
      {/* Title */}
      <div className="w-full flex justify-center mb-8 md:mb-10 px-4">
        <h2
          className="font-[family-name:var(--font-bebas)] font-normal text-[#FFF9EB] text-[48px] sm:text-[64px] md:text-[80px] leading-[90%] tracking-[-0.03em] uppercase text-center m-0"
          style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
        >
          WHAT WOMEN ARE SAYING
        </h2>
      </div>

      {/* Marquee Track Container: 100% Seamless CSS Animation */}
      <div className="w-full overflow-hidden flex select-none group">
        <div
          className="flex w-max animate-marquee group-hover:[animation-play-state:paused] py-2 will-change-transform"
          style={{ animationDuration: "32s" }}
        >
          {/* First Track Half */}
          <div className="flex items-center gap-4 sm:gap-5 pr-4 sm:pr-5 shrink-0">
            {reviews.map((review, idx) => (
              <ReviewCard key={`t1-${review.id}-${idx}`} review={review} />
            ))}
          </div>

          {/* Second Track Half (Exact clone for seamless loop) */}
          <div className="flex items-center gap-4 sm:gap-5 pr-4 sm:pr-5 shrink-0" aria-hidden="true">
            {reviews.map((review, idx) => (
              <ReviewCard key={`t2-${review.id}-${idx}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

