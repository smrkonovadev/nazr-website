"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RelatedBlogs } from "./RelatedBlogs";

interface BlogPost {
  title: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
  author: string;
  sections: { heading: string; paragraphs: string[] }[];
}

interface BlogDetailContentProps {
  post: BlogPost;
}

const interFont = { fontFamily: "'Inter', var(--font-inter), system-ui, -apple-system, sans-serif" } as const;
const bebasFont = { fontFamily: "'Bebas Neue', var(--font-bebas), sans-serif" } as const;

export function BlogDetailContent({ post }: BlogDetailContentProps) {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="w-full flex flex-col max-md:pt-[32px] md:pt-[48px] max-md:pb-[40px] md:pb-[80px]">

      {/* ===== WIDE CONTAINER (70px padding → ~1140px content) ===== */}
      <div className="w-full max-md:px-[24px] md:px-[70px]">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-[6px] mb-[12px]">
          <Link
            href="/blog"
            className="text-[#161616] text-[14px] leading-[150%] hover:underline no-underline"
            style={{ ...interFont, fontWeight: 400 }}
          >
            Blog
          </Link>
          <span className="text-[#161616] text-[14px]" style={interFont}>›</span>
          <span
            className="text-[#161616] text-[14px] leading-[150%]"
            style={{ ...interFont, fontWeight: 400 }}
          >
            {post.category}
          </span>
        </nav>

        {/* Blog Title */}
        <h1
          className="m-0 p-0 text-[#161616] uppercase max-md:text-[40px] md:text-[96px] max-md:leading-[100%] md:leading-[100%]"
          style={{ ...bebasFont, fontWeight: 400, letterSpacing: "0em", marginBottom: "32px" }}
        >
          {post.title}
        </h1>

        {/* Author Row + Share Buttons */}
        <div className="flex items-center justify-between max-md:mb-[16px] md:mb-[24px]">
          {/* Author */}
          <div className="flex items-center gap-[12px]">
            <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full bg-[#D9D9D9] shrink-0 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-40">
                <circle cx="12" cy="8" r="4" stroke="#666" strokeWidth="1.5" fill="none"/>
                <path d="M4 20C4 16.686 7.582 14 12 14C16.418 14 20 16.686 20 20" stroke="#666" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[#161616] text-[14px] leading-[150%]" style={{ ...interFont, fontWeight: 600 }}>
                {post.author}
              </span>
              <span className="text-[#161616]/60 text-[14px] leading-[150%]" style={{ ...interFont, fontWeight: 400 }}>
                {post.date} &nbsp;•&nbsp; {post.readTime}
              </span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-[8px]">
            <button className="w-[32px] h-[32px] rounded-full border border-[#161616] flex items-center justify-center hover:bg-[#161616]/5 transition-colors" aria-label="Copy link">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><path d="M11.001 21.15C9.573 21.15 8.358 20.648 7.356 19.646C6.353 18.643 5.852 17.428 5.852 16.001C5.852 14.573 6.353 13.357 7.356 12.352C8.358 11.347 9.573 10.845 11.001 10.845H14.334C14.574 10.845 14.776 10.928 14.94 11.094C15.104 11.261 15.185 11.465 15.185 11.707C15.185 11.948 15.104 12.15 14.94 12.312C14.776 12.473 14.574 12.554 14.334 12.554H11.001C10.041 12.554 9.226 12.888 8.558 13.555C7.889 14.223 7.555 15.036 7.555 15.994C7.555 16.953 7.889 17.768 8.558 18.439C9.226 19.111 10.041 19.446 11.001 19.446H14.334C14.574 19.446 14.776 19.529 14.94 19.693C15.104 19.858 15.185 20.061 15.185 20.302C15.185 20.544 15.104 20.746 14.94 20.907C14.776 21.069 14.574 21.15 14.334 21.15H11.001ZM12.81 16.786C12.588 16.786 12.402 16.711 12.251 16.561C12.1 16.411 12.024 16.223 12.024 15.996C12.024 15.768 12.099 15.581 12.248 15.435C12.397 15.288 12.584 15.214 12.81 15.214H19.192C19.414 15.214 19.6 15.289 19.751 15.439C19.902 15.589 19.978 15.777 19.978 16.005C19.978 16.232 19.903 16.419 19.754 16.566C19.605 16.712 19.418 16.786 19.192 16.786H12.81ZM17.674 21.15C17.43 21.15 17.226 21.067 17.062 20.903C16.899 20.738 16.817 20.535 16.817 20.294C16.817 20.052 16.899 19.85 17.062 19.689C17.226 19.527 17.43 19.446 17.674 19.446H21.001C21.961 19.446 22.776 19.113 23.444 18.445C24.113 17.778 24.447 16.965 24.447 16.006C24.447 15.047 24.113 14.232 23.444 13.561C22.776 12.889 21.961 12.554 21.001 12.554H17.674C17.43 12.554 17.226 12.472 17.062 12.307C16.899 12.143 16.817 11.939 16.817 11.698C16.817 11.456 16.899 11.254 17.062 11.09C17.226 10.926 17.43 10.845 17.674 10.845H21.001C22.429 10.845 23.645 11.347 24.65 12.352C25.654 13.356 26.157 14.572 26.157 16C26.157 17.427 25.654 18.642 24.65 19.645C23.645 20.648 22.429 21.15 21.001 21.15H17.674Z" fill="black"/></svg>
            </button>
            <button className="w-[32px] h-[32px] rounded-full border border-[#161616] flex items-center justify-center hover:bg-[#161616]/5 transition-colors" aria-label="Share on LinkedIn">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M1.5 0C0.672 0 0 0.672 0 1.5V16.5C0 17.328 0.672 18 1.5 18H16.5C17.328 18 18 17.328 18 16.5V1.5C18 0.672 17.328 0 16.5 0H1.5ZM5.521 4.002C5.526 4.959 4.81 5.548 3.961 5.544C3.161 5.54 2.464 4.903 2.468 4.004C2.472 3.159 3.14 2.48 4.008 2.5C4.888 2.519 5.526 3.165 5.521 4.002ZM9.28 6.762H6.76H6.758V15.322H9.422V15.122C9.422 14.742 9.421 14.362 9.421 13.982C9.42 12.968 9.419 11.954 9.425 10.94C9.426 10.694 9.437 10.438 9.501 10.203C9.738 9.326 10.527 8.759 11.407 8.898C11.973 8.987 12.347 9.314 12.504 9.848C12.601 10.181 12.645 10.539 12.649 10.887C12.661 11.934 12.659 12.982 12.657 14.03C12.657 14.4 12.656 14.77 12.656 15.139V15.321H15.328V15.115C15.328 14.663 15.328 14.211 15.328 13.76C15.327 12.63 15.326 11.5 15.329 10.371C15.331 9.86 15.276 9.357 15.151 8.863C14.964 8.129 14.577 7.522 13.949 7.083C13.503 6.771 13.013 6.569 12.466 6.547C12.404 6.544 12.341 6.541 12.278 6.538C11.998 6.522 11.714 6.507 11.447 6.561C10.682 6.714 10.01 7.065 9.502 7.682C9.443 7.753 9.385 7.825 9.299 7.932L9.28 7.956V6.762ZM2.682 15.325H5.332V6.768H2.682V15.325Z" fill="black"/></svg>
            </button>
            <button className="w-[32px] h-[32px] rounded-full border border-[#161616] flex items-center justify-center hover:bg-[#161616]/5 transition-colors" aria-label="Share on X">
              <svg width="14" height="14" viewBox="0 0 18 16" fill="none"><path d="M14.176 0H16.936L10.906 6.778L18 16H12.446L8.095 10.407L3.117 16H0.355L6.805 8.751L0 0H5.695L9.628 5.113L14.176 0ZM13.207 14.376H14.737L4.864 1.539H3.223L13.207 14.376Z" fill="black"/></svg>
            </button>
            <button className="w-[32px] h-[32px] rounded-full border border-[#161616] flex items-center justify-center hover:bg-[#161616]/5 transition-colors" aria-label="Share on Facebook">
              <svg width="9" height="16" viewBox="0 0 20 20" fill="none"><path d="M20 10.061C20 4.505 15.523 0 10 0C4.477 0 0 4.505 0 10.061C0 15.083 3.657 19.245 8.438 20V12.97H5.898V10.061H8.438V7.845C8.438 5.323 9.931 3.93 12.215 3.93C13.309 3.93 14.453 4.127 14.453 4.127V6.603H13.192C11.95 6.603 11.562 7.378 11.562 8.174V10.061H14.336L13.893 12.97H11.562V20C16.343 19.245 20 15.083 20 10.061Z" fill="black"/></svg>
            </button>
          </div>
        </div>

        {/* Featured Hero Image */}
        <div className="w-full relative aspect-[16/9] bg-[#D9D9D9] overflow-hidden">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="opacity-30"><rect x="8" y="12" width="48" height="40" rx="3" stroke="#999" strokeWidth="2" fill="none"/><circle cx="24" cy="26" r="5" stroke="#999" strokeWidth="2" fill="none"/><path d="M8 44L22 32L34 42L44 34L56 44" stroke="#999" strokeWidth="2" fill="none"/></svg>
          </div>
        </div>
      </div>

      {/* ===== NARROW CONTAINER (160px padding → 960px content) ===== */}
      <div className="w-full max-md:px-[24px] md:px-[160px] max-md:mt-[24px] md:mt-[40px]">

        {/* ── INTRODUCTION ── */}
        <h2
          className="m-0 p-0 text-[#161616] uppercase max-md:text-[28px] md:text-[52px] max-md:leading-[120%] md:leading-[120%]"
          style={{ ...bebasFont, fontWeight: 400, letterSpacing: "0em", marginBottom: "16px" }}
        >
          Introduction
        </h2>

        <p
          className="m-0 p-0 text-[#161616] max-md:text-[14px] md:text-[16px] max-md:leading-[150%] md:leading-[150%]"
          style={{ ...interFont, fontWeight: 400, letterSpacing: "0em", marginBottom: "16px" }}
        >
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
        </p>

        <p
          className="m-0 p-0 text-[#161616] max-md:text-[14px] md:text-[16px] max-md:leading-[150%] md:leading-[150%]"
          style={{ ...interFont, fontWeight: 400, letterSpacing: "0em", marginBottom: "32px" }}
        >
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
        </p>

        {/* ── INLINE IMAGE + CAPTION ── */}
        <div className="mb-[32px]">
          <div className="w-full relative aspect-[16/9] bg-[#D9D9D9] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="opacity-30"><rect x="8" y="12" width="48" height="40" rx="3" stroke="#999" strokeWidth="2" fill="none"/><circle cx="24" cy="26" r="5" stroke="#999" strokeWidth="2" fill="none"/><path d="M8 44L22 32L34 42L44 34L56 44" stroke="#999" strokeWidth="2" fill="none"/></svg>
            </div>
          </div>
          <div className="flex items-start gap-[8px] mt-[12px]">
            <div className="w-[2px] min-h-[16px] bg-[#161616] shrink-0 mt-[3px]" />
            <span className="text-[#161616] text-[14px] leading-[150%]" style={{ ...interFont, fontWeight: 400 }}>
              Image caption goes here
            </span>
          </div>
        </div>

        {/* ── BOLD HIGHLIGHT PARAGRAPH ── */}
        <p
          className="m-0 p-0 text-[#161616] max-md:text-[16px] md:text-[20px] max-md:leading-[150%] md:leading-[150%]"
          style={{ ...interFont, fontWeight: 700, letterSpacing: "0em", marginBottom: "16px" }}
        >
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
        </p>

        {/* ── REGULAR PARAGRAPH ── */}
        <p
          className="m-0 p-0 text-[#161616] max-md:text-[14px] md:text-[16px] max-md:leading-[150%] md:leading-[150%]"
          style={{ ...interFont, fontWeight: 400, letterSpacing: "0em", marginBottom: "32px" }}
        >
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
        </p>

        {/* ── BLOCKQUOTE ── */}
        <blockquote
          className="m-0 max-md:pl-[16px] md:pl-[20px] border-l-[3px] border-[#1A8917] max-md:py-[2px] md:py-[4px]"
          style={{ marginBottom: "40px", padding: "0", paddingLeft: "20px" }}
        >
          <p
            className="m-0 p-0 text-[#1A8917] max-md:text-[16px] md:text-[20px] max-md:leading-[150%] md:leading-[150%]"
            style={{ ...interFont, fontWeight: 400, fontStyle: "italic", letterSpacing: "0em" }}
          >
            &ldquo;Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Viverra amet dignissim congue eget consectetur turpis. Ac viverra sit egestas donec facilisis amet sagittis, nulla ac aenean tempus.&rdquo;
          </p>
        </blockquote>

        {/* ── REMAINING SECTIONS FROM POST DATA ── */}
        {post.sections.slice(1).map((section, sectionIndex) => (
          <div key={sectionIndex} className="max-md:mb-[28px] md:mb-[40px]">
            <h2
              className="m-0 p-0 text-[#161616] uppercase max-md:text-[28px] md:text-[52px] max-md:leading-[120%] md:leading-[120%]"
              style={{ ...bebasFont, fontWeight: 400, letterSpacing: "0em", marginBottom: "16px" }}
            >
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="m-0 p-0 text-[#161616] max-md:text-[14px] md:text-[16px] max-md:leading-[150%] md:leading-[150%]"
                style={{
                  ...interFont, fontWeight: 400, letterSpacing: "0em",
                  marginBottom: pIndex < section.paragraphs.length - 1 ? "16px" : "0px",
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}

      </div>

      {/* ===== BOTTOM SHARE & TAGS BAR (70px padding) ===== */}
      <div className="w-full max-md:px-[24px] md:px-[70px] mt-[40px]">
        <div className="w-full flex max-md:flex-col items-center justify-between gap-4 py-[24px]">
          
          {/* Left: Share this post */}
          <div className="flex items-center gap-[16px]">
            <span className="text-[#161616] text-[14px] font-medium" style={interFont}>
              Share this post
            </span>
            <div className="flex items-center gap-[8px]">
              <button className="w-[32px] h-[32px] rounded-full border border-[#161616] flex items-center justify-center hover:bg-[#161616]/5 transition-colors" aria-label="Copy link">
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><path d="M11.001 21.15C9.573 21.15 8.358 20.648 7.356 19.646C6.353 18.643 5.852 17.428 5.852 16.001C5.852 14.573 6.353 13.357 7.356 12.352C8.358 11.347 9.573 10.845 11.001 10.845H14.334C14.574 10.845 14.776 10.928 14.94 11.094C15.104 11.261 15.185 11.465 15.185 11.707C15.185 11.948 15.104 12.15 14.94 12.312C14.776 12.473 14.574 12.554 14.334 12.554H11.001C10.041 12.554 9.226 12.888 8.558 13.555C7.889 14.223 7.555 15.036 7.555 15.994C7.555 16.953 7.889 17.768 8.558 18.439C9.226 19.111 10.041 19.446 11.001 19.446H14.334C14.574 19.446 14.776 19.529 14.94 19.693C15.104 19.858 15.185 20.061 15.185 20.302C15.185 20.544 15.104 20.746 14.94 20.907C14.776 21.069 14.574 21.15 14.334 21.15H11.001ZM12.81 16.786C12.588 16.786 12.402 16.711 12.251 16.561C12.1 16.411 12.024 16.223 12.024 15.996C12.024 15.768 12.099 15.581 12.248 15.435C12.397 15.288 12.584 15.214 12.81 15.214H19.192C19.414 15.214 19.6 15.289 19.751 15.439C19.902 15.589 19.978 15.777 19.978 16.005C19.978 16.232 19.903 16.419 19.754 16.566C19.605 16.712 19.418 16.786 19.192 16.786H12.81ZM17.674 21.15C17.43 21.15 17.226 21.067 17.062 20.903C16.899 20.738 16.817 20.535 16.817 20.294C16.817 20.052 16.899 19.85 17.062 19.689C17.226 19.527 17.43 19.446 17.674 19.446H21.001C21.961 19.446 22.776 19.113 23.444 18.445C24.113 17.778 24.447 16.965 24.447 16.006C24.447 15.047 24.113 14.232 23.444 13.561C22.776 12.889 21.961 12.554 21.001 12.554H17.674C17.43 12.554 17.226 12.472 17.062 12.307C16.899 12.143 16.817 11.939 16.817 11.698C16.817 11.456 16.899 11.254 17.062 11.09C17.226 10.926 17.43 10.845 17.674 10.845H21.001C22.429 10.845 23.645 11.347 24.65 12.352C25.654 13.356 26.157 14.572 26.157 16C26.157 17.427 25.654 18.642 24.65 19.645C23.645 20.648 22.429 21.15 21.001 21.15H17.674Z" fill="black"/></svg>
              </button>
              <button className="w-[32px] h-[32px] rounded-full border border-[#161616] flex items-center justify-center hover:bg-[#161616]/5 transition-colors" aria-label="Share on LinkedIn">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M1.5 0C0.672 0 0 0.672 0 1.5V16.5C0 17.328 0.672 18 1.5 18H16.5C17.328 18 18 17.328 18 16.5V1.5C18 0.672 17.328 0 16.5 0H1.5ZM5.521 4.002C5.526 4.959 4.81 5.548 3.961 5.544C3.161 5.54 2.464 4.903 2.468 4.004C2.472 3.159 3.14 2.48 4.008 2.5C4.888 2.519 5.526 3.165 5.521 4.002ZM9.28 6.762H6.76H6.758V15.322H9.422V15.122C9.422 14.742 9.421 14.362 9.421 13.982C9.42 12.968 9.419 11.954 9.425 10.94C9.426 10.694 9.437 10.438 9.501 10.203C9.738 9.326 10.527 8.759 11.407 8.898C11.973 8.987 12.347 9.314 12.504 9.848C12.601 10.181 12.645 10.539 12.649 10.887C12.661 11.934 12.659 12.982 12.657 14.03C12.657 14.4 12.656 14.77 12.656 15.139V15.321H15.328V15.115C15.328 14.663 15.328 14.211 15.328 13.76C15.327 12.63 15.326 11.5 15.329 10.371C15.331 9.86 15.276 9.357 15.151 8.863C14.964 8.129 14.577 7.522 13.949 7.083C13.503 6.771 13.013 6.569 12.466 6.547C12.404 6.544 12.341 6.541 12.278 6.538C11.998 6.522 11.714 6.507 11.447 6.561C10.682 6.714 10.01 7.065 9.502 7.682C9.443 7.753 9.385 7.825 9.299 7.932L9.28 7.956V6.762ZM2.682 15.325H5.332V6.768H2.682V15.325Z" fill="black"/></svg>
              </button>
              <button className="w-[32px] h-[32px] rounded-full border border-[#161616] flex items-center justify-center hover:bg-[#161616]/5 transition-colors" aria-label="Share on X">
                <svg width="14" height="14" viewBox="0 0 18 16" fill="none"><path d="M14.176 0H16.936L10.906 6.778L18 16H12.446L8.095 10.407L3.117 16H0.355L6.805 8.751L0 0H5.695L9.628 5.113L14.176 0ZM13.207 14.376H14.737L4.864 1.539H3.223L13.207 14.376Z" fill="black"/></svg>
              </button>
              <button className="w-[32px] h-[32px] rounded-full border border-[#161616] flex items-center justify-center hover:bg-[#161616]/5 transition-colors" aria-label="Share on Facebook">
                <svg width="9" height="16" viewBox="0 0 20 20" fill="none"><path d="M20 10.061C20 4.505 15.523 0 10 0C4.477 0 0 4.505 0 10.061C0 15.083 3.657 19.245 8.438 20V12.97H5.898V10.061H8.438V7.845C8.438 5.323 9.931 3.93 12.215 3.93C13.309 3.93 14.453 4.127 14.453 4.127V6.603H13.192C11.95 6.603 11.562 7.378 11.562 8.174V10.061H14.336L13.893 12.97H11.562V20C16.343 19.245 20 15.083 20 10.061Z" fill="black"/></svg>
              </button>
            </div>
          </div>

          {/* Right: Tag Pills */}
          <div className="flex items-center gap-[8px] flex-wrap">
            {["Tag one", "Tag two", "Tag three", "Tag four"].map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#FF007A] text-white px-3.5 py-1 rounded-[100px] text-[13px] font-medium leading-[150%]"
                style={interFont}
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* ===== EMBEDDED NEWSLETTER CARD (70px padding) ===== */}
      <div className="w-full max-md:px-[24px] md:px-[70px] mt-[24px]">
        <div className="w-full bg-[#161616] rounded-[24px] p-6 md:p-[48px] flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Column: Heading, text, form */}
          <div className="flex-1 flex flex-col justify-center w-full">
            <h2
              className="m-0 text-[#FFF9EB] uppercase max-md:text-[32px] md:text-[48px] leading-[95%]"
              style={{ ...bebasFont, fontWeight: 400 }}
            >
              MEDIUM LENGTH HEADING GOES HERE
            </h2>
            <p
              className="mt-3 text-[#F0E2DD]/80 text-[14px] md:text-[15px] leading-[140%] max-w-[440px]"
              style={interFont}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-row gap-3 w-full max-w-[440px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-transparent border border-[#F0E2DD]/30 text-white rounded-[6px] px-4 py-2.5 flex-1 outline-none text-[14px] placeholder:text-[#F0E2DD]/40 focus:border-[#FF007A] transition-colors"
                style={interFont}
              />
              <button
                type="submit"
                className="bg-[#FF007A] hover:bg-[#d60067] text-white font-medium text-[14px] px-6 py-2.5 rounded-[100px] transition-colors whitespace-nowrap cursor-pointer"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Sign up
              </button>
            </form>

            <p
              className="mt-3 text-[#F0E2DD]/50 text-[11px] md:text-[12px] leading-[140%] max-w-[440px]"
              style={interFont}
            >
              By clicking Sign up you&apos;re confirming that you agree with our{" "}
              <Link href="/terms" className="underline hover:text-white transition-colors">
                Terms and Conditions
              </Link>
              .
            </p>
          </div>

          {/* Right Column: Phone Image */}
          <div className="relative w-full md:w-[440px] h-[220px] md:h-[280px] rounded-[16px] overflow-hidden shrink-0 bg-[#222]">
            <Image unoptimized quality={100} src="/images/new55.webp"
              alt="Phone preview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* ===== RELATED BLOGS SECTION ===== */}
      <RelatedBlogs />
    </div>
  );
}
