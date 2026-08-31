"use client";

import Image from "next/image";

export function ShieldModeSection() {
  const handlePrev = () => {
    const el = document.getElementById("shield-carousel");
    if (el) {
      el.scrollBy({ left: -403, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    const el = document.getElementById("shield-carousel");
    if (el) {
      el.scrollBy({ left: 403, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#161616] text-[#FFF9EB] pt-10 md:pt-14 pb-4 md:pb-6 relative z-50">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col px-4 md:px-[40px]">
        {/* Main Title */}
        <h2
          className="m-0 text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[44px] md:text-[120px] leading-[90%] tracking-[-0.03em] uppercase text-left"
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "90%",
            letterSpacing: "-0.03em",
          }}
        >
          SHIELD MODE
        </h2>

        {/* Subtitle row + Nav buttons */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2">
          <p
            className="m-0 text-[#FFF9EB] font-normal text-[16px] md:text-[20px] leading-[140%] tracking-[-0.03em] text-left max-w-[760px]"
            style={{
              fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "140%",
              letterSpacing: "-0.03em",
            }}
          >
            Some journeys don't need intervention. They just need someone paying attention. Shield<br className="hidden md:inline" />{" "}
            Mode stays with you, quietly checking in along the way.<br className="hidden md:inline" />{" "}
            If you stop responding, it doesn't wait. It acts.
          </p>

          {/* Navigation Controls on the Right */}
          <div className="flex items-center gap-3 flex-shrink-0 self-end md:self-auto">
            <button
              onClick={handlePrev}
              className="cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none"
              aria-label="Previous card"
            >
              <Image
                unoptimized
                src="/images/buttonl.svg"
                width={44}
                height={44}
                alt="Previous"
                className="w-[40px] h-[40px] md:w-[44px] md:h-[44px]"
              />
            </button>
            <button
              onClick={handleNext}
              className="cursor-pointer transition-transform hover:scale-105 active:scale-95 focus:outline-none"
              aria-label="Next card"
            >
              <Image
                unoptimized
                src="/images/button r.svg"
                width={44}
                height={44}
                alt="Next"
                className="w-[40px] h-[40px] md:w-[44px] md:h-[44px]"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
