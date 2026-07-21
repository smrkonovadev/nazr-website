"use client";

import Image from "next/image";

export function ContactUsSection() {
  return (
    <section className="w-full bg-[#FFF1EB] pt-[16px] md:pt-[24px] pb-[48px] px-4 flex flex-col items-center justify-center relative z-10">

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
          className="mt-[12px] text-[#161616] text-[19px] leading-[140%] tracking-[-0.03em] opacity-90"
          style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
        >
          NAZR is built through conversations with the people we build for. We'd love to hear yours.
        </p>

        <button
          className="mt-[16px] bg-[#F80090] hover:bg-[#d6007b] transition-colors text-white border border-[#F80090] shadow-sm font-normal text-[16px] leading-[150%]"
          style={{
            fontFamily: "Roboto, sans-serif",
            width: "127px",
            height: "40px",
            padding: "8px 20px",
            borderRadius: "4px",
            borderWidth: "1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            opacity: 1
          }}
        >
          <span
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "150%",
              width: "87px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 1,
              whiteSpace: "nowrap"
            }}
          >
            Tell us More
          </span>
        </button>
      </div>

      {/* ======================= */}
      {/* DESKTOP LAYOUT          */}
      {/* ======================= */}
      <div className="hidden md:flex flex-col items-center text-center max-w-[621px]">
        <h2
          className="m-0 text-[#161616] uppercase"
          style={{
            fontFamily: "var(--font-bebas), sans-serif",
            fontWeight: 400,
            fontSize: "100px",
            lineHeight: "90%",
            letterSpacing: "-0.03em",
            textAlign: "center"
          }}
        >
          JOIN THE <br /> CONVERSATION.
        </h2>

        <p
          className="text-[#161616]"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "140%",
            letterSpacing: "-0.03em",
            textAlign: "center",
            marginTop: "12px",
            maxWidth: "460px"
          }}
        >
          NAZR is built through conversations with the <br /> people we build for. We&apos;d love to hear yours.
        </p>

        <button
          className="bg-[#F80090] hover:bg-[#d6007b] transition-colors text-white border border-[#F80090]"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontSize: "16px",
            lineHeight: "150%",
            width: "127px",
            height: "40px",
            padding: "8px 20px",
            borderRadius: "4px",
            borderWidth: "1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginTop: "24px",
            opacity: 1
          }}
        >
          <span
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "150%",
              width: "87px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 1,
              whiteSpace: "nowrap"
            }}
          >
            Tell us More
          </span>
        </button>
      </div>

    </section>
  );
}
