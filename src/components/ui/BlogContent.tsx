"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  "View all",
  "Psychology",
  "Safety",
  "Culture",
  "Product",
  "Community"
];

export function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("View all");

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
    if (categoryName === "View all") {
      const element = document.getElementById("blog-content-top");
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      const element = document.getElementById(`blog-${categoryName.toLowerCase()}`);
      if (element) {
        const yOffset = -120;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <div id="blog-content-top" className="w-full px-6 md:px-16 max-md:pt-0 md:pt-0 max-md:pb-8 md:pb-16 relative z-10 flex flex-col md:flex-row max-md:gap-[28px] md:gap-12 lg:gap-24">

      <div className="w-full md:w-[260px] lg:w-[280px] shrink-0 flex flex-col max-md:gap-2 md:gap-6">
        <h2
          className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] uppercase max-[380px]:text-[32px] max-md:text-[40px] md:text-[40px] max-md:leading-[150%] md:leading-[100%] max-md:tracking-normal md:tracking-[-0.01em]"
        >
          BLOG CATEGORIES
        </h2>

        <div className="flex max-md:flex-row md:flex-col max-md:items-center w-full max-md:w-screen max-md:-ml-4 max-md:px-4 md:px-0 max-md:gap-1 md:gap-2 max-md:overflow-x-auto max-md:scrollbar-hide max-md:pb-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`max-md:shrink-0 max-md:whitespace-nowrap md:w-full text-left max-md:px-4 max-md:py-2 md:px-5 md:py-4 transition-colors ${activeCategory === category
                ? "bg-[#161616] text-white rounded-[4px]"
                : "bg-transparent text-[#161616] hover:bg-[#161616]/5 rounded-[4px]"
                }`}
              style={{
                fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
                fontWeight: activeCategory === category ? 600 : 400
              }}
            >
              <span className="text-[16px] leading-[150%] tracking-normal">{category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Content Area: Blog Card */}
      <div className="flex-1 w-full flex flex-col gap-6">

        {/* Featured Blog Post */}
        <div id="blog-psychology" className="flex flex-col gap-3 md:gap-6 cursor-pointer group scroll-mt-24">
          <div className="w-full relative aspect-[1.8] md:aspect-[16/9] bg-[#161616]/10 rounded-[16px] overflow-hidden">
            <Image
              src="/images/new52.svg"
              alt="Featured Blog Post"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-4 px-1 md:px-0 pt-1">
            {/* Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="bg-[#FF007A] text-white px-3 py-1 rounded-[100px] text-[14px] font-semibold leading-[150%] tracking-normal"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Psychology
              </span>
              <span
                className="text-[#161616] font-semibold text-[14px] leading-[150%] tracking-normal ml-1"
                style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
              >
                5 min read
              </span>
            </div>

            {/* Title */}
            <h3 className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] uppercase max-[380px]:text-[28px] max-md:text-[34px] md:text-[56px] max-md:leading-[130%] md:leading-[100%] max-md:tracking-[-0.02em] md:tracking-[-0.01em]">
              Women Pretend to Be on the Phone When Walking Alone: The Psychology Behind the Habit            </h3>

            {/* Excerpt */}
            <p
              className="max-md:-mt-1 text-[#161616]/90 max-md:text-[14.5px] md:text-[18px] max-md:leading-[150%] md:leading-[150%] max-md:tracking-normal pr-4"
              style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
            >
              Millions of women pretend to be on the phone when walking alone, often without questioning why. This article unpacks the psychology behind the habit, invisible safety work, and the mental load of everyday preparedness.            </p>

            {/* Read More */}
            <button className="flex items-center gap-1.5 mt-1 md:mt-2 group w-fit">
              <span
                className="text-[#FF007A] font-normal text-[16px] leading-[150%] tracking-normal group-hover:opacity-70 transition-opacity"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Read the full article
              </span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="#FF007A" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </button>
          </div>
        </div>

        {/* Smaller Cards Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-2 max-[380px]:gap-2 gap-4 md:gap-8 gap-y-8 md:gap-y-16 max-md:-mt-2 md:mt-10">
          {[
            {
              image: "/images/new53.svg",
              category: "Safety",
              readTime: "4 min read",
              title: "India's Drink-Spiking Conversation Is Changing and Preparedness Is Changing With It",
              excerpt: "Drink spiking prevention starts long before a drink is left unattended. Learn how psychology, everyday safety behaviours, and preparedness shape a smarter approach to protecting your drink.",
            },
            {
              image: "/images/new54.svg",
              category: "Culture",
              readTime: "6 min read",
              title: "Soft Girl, Sharp Instincts: Feminine Aesthetics Meets Personal Preparedness",
              excerpt: "Looking soft and thinking strategically are no longer opposites. Discover how feminine aesthetics and personal preparedness are reshaping confidence, identity and everyday carry culture.",
            },
            {
              image: "/images/new55.svg",
              category: "Product",
              readTime: "5 min read",
              title: "\"SHARE YOUR LOCATION\" REPLACED \"TEXT ME WHEN YOU'RE HOME\": HOW DIGITAL CHECK-INS CHANGED PERSONAL SAFETY",
              excerpt: "\"Share your location\" has quietly replaced \"text me when you're home.\" Understand how digital check-ins became a modern safety habit, and what they reveal about trust, preparedness, and women's everyday behaviour.",
            },
            {
              image: "/images/new56.svg",
              category: "Community",
              readTime: "5 min read",
              title: "Preparedness Becomes Instinct Long Before It Becomes an Action",
              excerpt: "Preparedness rarely begins in an emergency. It is built through small, repeated safety habits that become instinct over time. Understand the behavioural psychology behind automatic preparedness.",
            },
          ].map((card, i) => (
            <div key={i} id={`blog-${card.category.toLowerCase()}`} className="flex flex-col max-md:gap-3 md:gap-6 scroll-mt-24">
              <div className="w-full relative aspect-[4/3] rounded-[12px] md:rounded-[20px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={`Blog Image ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 md:gap-4 md:mt-2">
                <div className="flex items-center gap-1.5 md:gap-3 mt-1 flex-wrap">
                  <span
                    className="bg-[#FF007A] text-white px-2 py-[2px] rounded-[100px] text-[14px] font-semibold leading-[150%] tracking-normal"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    {card.category}
                  </span>
                  <span
                    className="text-[#161616] font-semibold max-[380px]:text-[12px] max-md:text-[14px] md:text-[14px] leading-[150%] tracking-normal"
                    style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
                  >
                    {card.readTime}
                  </span>
                </div>

                <h3
                  className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] uppercase leading-[100%] max-[380px]:text-[18px] max-md:text-[22px] md:text-[31px] tracking-[-0.01em] md:pr-4 break-words"
                >
                  {card.title}
                </h3>

                <p
                  className="text-[#161616]/90 max-[380px]:text-[12px] max-md:text-[14px] md:text-[17px] max-md:leading-[150%] md:leading-[140%] max-md:tracking-normal md:tracking-[-0.01em] line-clamp-4"
                  style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
                >
                  {card.excerpt}
                </p>

                <button className="text-[#F80090] flex items-center gap-1 md:gap-2 md:mt-2 font-medium text-[13px] md:text-[16px] w-fit hover:opacity-80 transition-opacity" style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}>
                  Read the full article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="max-md:w-3 max-md:h-3">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
