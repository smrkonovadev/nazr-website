"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function BlogNewsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="w-full bg-[#FFF1EB] px-4 py-[60px] md:py-[80px] flex justify-center relative z-20">
      <div 
        className="w-full max-w-[1178px] bg-[#161616] rounded-[16px] p-6 md:p-[60px] flex flex-col md:flex-row items-center gap-8 md:gap-[80px]"
        style={{ minHeight: "446px" }}
      >
        {/* Left Column (Content & Form) */}
        <div className="flex-1 flex flex-col justify-center w-full">
          <h2 className="m-0 text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[36px] md:text-[52px] leading-[95%] tracking-[-0.02em] uppercase">
            MEDIUM LENGTH HEADING GOES HERE
          </h2>
          
          <p 
            className="mt-4 text-[#F0E2DD] text-[15px] md:text-[16px] leading-[140%] opacity-90 max-w-[480px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-row gap-3 w-full max-w-[480px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="bg-transparent border border-[#F0E2DD]/30 text-white rounded-[4px] px-4 py-2.5 flex-1 outline-none text-[15px] placeholder:text-[#F0E2DD]/40 focus:border-[#F80090] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
            <button
              type="submit"
              className="bg-[#F80090] hover:bg-[#d6007b] text-white font-normal text-[15px] px-6 py-2.5 rounded-[4px] transition-colors whitespace-nowrap"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Sign up
            </button>
          </form>

          <p 
            className="mt-3 text-[#F0E2DD]/60 text-[11px] md:text-[12px] leading-[140%] max-w-[480px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            By clicking Sign Up you're confirming that you agree with our{" "}
            <Link href="/terms" className="underline hover:text-white transition-colors">
              Terms and Conditions
            </Link>
            .
          </p>
        </div>

        {/* Right Column (Image Block) */}
        <div className="relative w-full md:w-[480px] h-[240px] md:h-[326px] rounded-[12px] overflow-hidden flex-shrink-0">
          <Image
            src="/images/new46.png"
            alt="Hand holding phone with map"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>
      </div>
    </section>
  );
}
