"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Header } from "./Header";

export function AboutHero() {
  const [scaledViewportHeight, setScaledViewportHeight] = useState<number | string>("100vh");

  useEffect(() => {
    const handleResize = () => {
      const isWindowMobile = window.innerWidth < 768;
      const targetWidth = isWindowMobile ? 390 : 1280;
      const windowWidth = window.innerWidth;
      const scale = windowWidth / targetWidth;

      const heightInScaler = window.innerHeight / scale;
      setScaledViewportHeight(heightInScaler);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="w-full bg-[#161616] md:p-[20px] max-md:p-0 flex flex-col max-md:min-h-screen"
      style={{
        height: typeof scaledViewportHeight === "number" ? `${scaledViewportHeight}px` : scaledViewportHeight
      }}
    >
      <div className="relative w-full h-full md:rounded-[16px] max-md:rounded-b-[16px] max-md:rounded-t-none overflow-hidden flex flex-col">

        {/* Header - relative on mobile with dark background bar, absolute transparent on desktop */}
        <div className="max-md:relative max-md:z-30 md:absolute md:top-0 md:left-0 md:right-0 md:z-20 w-full">
          <Header variant="transparent" mobileVariant="dark" />
        </div>

        {/* Image & Content Container - relative flex-1 on mobile, absolute inset-0 on desktop */}
        <div className="max-md:relative max-md:flex-1 max-md:w-full md:absolute md:inset-0 z-0">
          <Image
            src="/images/ABOUTHERO.svg"
            alt="About Us Hero"
            fill
            className="object-cover object-top md:object-center"
            priority
          />

          {/* Mobile Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none md:hidden z-10" />

          {/* Bottom Content Area — overlaid on the image */}
          <div className="absolute bottom-0 left-0 right-0 z-20 w-full px-6 md:px-12 pb-6 md:pb-10 flex flex-col md:flex-row md:items-end justify-start max-md:gap-6 md:gap-40">

            {/* Left Huge Typography */}
            <h1 className="font-[family-name:var(--font-bebas)] text-white max-md:text-[38px] md:text-[95px] max-md:leading-[100%] md:leading-[90%] max-w-[600px] tracking-[-0.01em] m-0">
              THE WORLD STARES.<br />
              WE BUILT SOMETHING THAT STARES BACK.
            </h1>

            {/* Right Side Content */}
            <div className="flex flex-col items-start gap-6 max-w-[400px]">
              <p className="text-white font-bold text-[24px] md:text-[32px] leading-[110%] tracking-[-0.02em]">
                Redefining what preparedness looks and feels like.
              </p>

              <button
                onClick={() => {
                  const el = document.getElementById("every-woman-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center bg-[#FFF9EB] text-[#161616] px-5 py-2.5 rounded-[6px] transition-colors duration-300 ease-in-out"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "150%",
                  letterSpacing: "0px",
                }}
              >
                <Image
                  src="/images/logosvg.svg"
                  alt="Nazr Logo"
                  width={32}
                  height={32}
                  className="max-md:w-8 max-md:opacity-100 max-md:mr-2 md:w-0 md:opacity-0 md:group-hover:w-8 md:group-hover:opacity-100 md:group-hover:mr-2 transition-all duration-300 ease-in-out object-contain brightness-0"
                />
                <span>Discover NAZR</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
