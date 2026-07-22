"use client";

import Image from "next/image";
import Link from "next/link";

interface RelatedPost {
  slug: string;
  image: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
}

const relatedPosts: RelatedPost[] = [
  {
    slug: "share-your-location",
    image: "/images/new55.svg",
    category: "Psychology",
    readTime: "5 min read",
    title: '"SHARE YOUR LOCATION" REPLACED "TEXT ME WHEN YOU\'RE HOME": HOW DIGITAL CHECK-INS CHANGED PERSONAL SAFETY',
    excerpt: '"Share your location" has quietly replaced "text me when you\'re home." Understand how digital check-ins became a modern safety habit, and what they reveal about trust, preparedness, and women\'s everyday behaviour.',
  },
  {
    slug: "share-your-location",
    image: "/images/new55.svg",
    category: "Psychology",
    readTime: "5 min read",
    title: '"SHARE YOUR LOCATION" REPLACED "TEXT ME WHEN YOU\'RE HOME": HOW DIGITAL CHECK-INS CHANGED PERSONAL SAFETY',
    excerpt: '"Share your location" has quietly replaced "text me when you\'re home." Understand how digital check-ins became a modern safety habit, and what they reveal about trust, preparedness, and women\'s everyday behaviour.',
  },
  {
    slug: "share-your-location",
    image: "/images/new55.svg",
    category: "Psychology",
    readTime: "5 min read",
    title: '"SHARE YOUR LOCATION" REPLACED "TEXT ME WHEN YOU\'RE HOME": HOW DIGITAL CHECK-INS CHANGED PERSONAL SAFETY',
    excerpt: '"Share your location" has quietly replaced "text me when you\'re home." Understand how digital check-ins became a modern safety habit, and what they reveal about trust, preparedness, and women\'s everyday behaviour.',
  },
];

const interFont = { fontFamily: "'Inter', var(--font-inter), system-ui, sans-serif" } as const;
const bebasFont = { fontFamily: "'Bebas Neue', var(--font-bebas), sans-serif" } as const;

export function RelatedBlogs() {
  return (
    <section className="w-full flex flex-col items-center max-md:px-6 md:px-[70px] pt-[32px] md:pt-[48px] pb-[40px] md:pb-[60px]">
      
      {/* Title */}
      <h2
        className="m-0 p-0 text-[#161616] uppercase text-center max-md:text-[44px] md:text-[80px] leading-[100%] tracking-[0%]"
        style={{ ...bebasFont, fontWeight: 400, marginBottom: "12px" }}
      >
        RELATED BLOGS
      </h2>

      {/* Subtitle */}
      <p
        className="m-0 p-0 text-[#161616] text-center max-w-[600px] max-md:text-[14px] md:text-[18px] leading-[140%]"
        style={{ ...interFont, fontWeight: 400, marginBottom: "48px" }}
      >
        NAZR is built through conversations with the people we build for. We&apos;d love to hear yours.
      </p>

      {/* 3-Column Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-[48px]">
        {relatedPosts.map((card, i) => (
          <div key={i} className="flex flex-col gap-4">
            {/* Card Image */}
            <div className="w-full relative aspect-[1.25] rounded-[20px] overflow-hidden bg-[#161616]/10">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Tag Badge & Read Time */}
            <div className="flex items-center gap-3 mt-1">
              <span
                className="bg-[#FF007A] text-white px-3 py-1 rounded-[100px] text-[13px] font-semibold leading-[150%]"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                {card.category}
              </span>
              <span
                className="text-[#161616] font-semibold text-[13px] leading-[150%]"
                style={interFont}
              >
                {card.readTime}
              </span>
            </div>

            {/* Title */}
            <h3
              className="m-0 p-0 text-[#161616] uppercase max-md:text-[22px] md:text-[28px] leading-[100%] tracking-[-0.01em]"
              style={{ ...bebasFont, fontWeight: 400 }}
            >
              {card.title}
            </h3>

            {/* Excerpt */}
            <p
              className="m-0 p-0 text-[#161616]/90 text-[14px] md:text-[15px] leading-[150%]"
              style={interFont}
            >
              {card.excerpt}
            </p>

            {/* Read full article link */}
            <Link
              href={`/blog/${card.slug}`}
              className="text-[#FF007A] flex items-center gap-1.5 font-medium text-[15px] w-fit hover:opacity-80 transition-opacity no-underline mt-1"
              style={interFont}
            >
              Read the full article
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <Link
        href="/blog"
        className="bg-[#FF007A] text-white px-8 py-3 rounded-[100px] text-[14px] font-semibold hover:bg-[#FF007A]/90 transition-colors no-underline shadow-sm"
        style={interFont}
      >
        View all
      </Link>
    </section>
  );
}
