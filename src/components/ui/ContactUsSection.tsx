"use client";

import Image from "next/image";

export function ContactUsSection() {
  return (
    <section className="w-full bg-[#FFF1EB] pt-[60px] md:pt-[100px] pb-16 md:pb-[80px] px-4 flex flex-col items-center justify-center relative z-10">

      {/* ======================= */}
      {/* MOBILE LAYOUT           */}
      {/* ======================= */}
      <div className="flex md:hidden flex-col items-center text-center w-full max-w-[400px] px-2 mx-auto">
        <h2
          className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] uppercase max-min-[380px]:text-[38px] text-[48px] leading-[90%] tracking-[-0.03em]"
        >
          JOIN THE CONVERSATION.
        </h2>

        <p
          className="mt-3 text-[#161616] text-[19px] leading-[140%] tracking-[-0.03em] opacity-90"
          style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
        >
          NAZR is built through conversations with the people we build for. We'd love to hear yours.
        </p>

        <button
          className="mt-6 bg-[#F80090] hover:bg-[#d6007b] transition-colors text-white px-8 py-3 rounded-[5px] shadow-sm font-normal text-[16px] leading-[150%]"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Tell us More
        </button>
      </div>

      {/* ======================= */}
      {/* DESKTOP LAYOUT          */}
      {/* ======================= */}
      <div className="hidden md:flex flex-col items-center text-center max-w-[621px]">
        <h2
          className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] uppercase text-[100px] leading-[86%] tracking-[-0.03em]"
        >
          JOIN THE <br /> CONVERSATION.
        </h2>

        <p
          className="mt-[4px] text-[#161616] max-w-[460px] text-[20px] font-normal leading-[140%] tracking-[-0.03em]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          NAZR is built through conversations with the people we build for. We&apos;d love to hear yours.
        </p>

        <button
          className="mt-[8px] bg-[#F80090] hover:bg-[#d6007b] transition-colors text-white px-[24px] py-[10px] rounded-[5px]"
          style={{ fontFamily: "Roboto, sans-serif", fontSize: "16px", lineHeight: "150%" }}
        >
          Tell us More
        </button>
      </div>

    </section>
  );
}
