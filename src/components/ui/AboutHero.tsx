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
      className="w-full bg-[#161616] p-[20px]"
      style={{
        height: typeof scaledViewportHeight === "number" ? `${scaledViewportHeight}px` : scaledViewportHeight
      }}
    >
      <div className="relative w-full h-full rounded-[16px] overflow-hidden">

        {/* Background SVG — fills the container */}
        <Image
          src="/images/ABOUTHERO.svg"
          alt="About Us Hero"
          width={1920}
          height={1080}
          className="object-cover"
          priority
        />

        {/* Header pinned to top */}
        <div className="absolute top-0 left-0 right-0 z-20 w-full">
          <Header variant="transparent" />
        </div>

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
              className="group flex items-center bg-white text-black px-4 py-1 rounded-[3px] font-semibold hover:bg-white/90 transition-colors"
            >
              <Image
                src="/images/logosvg.svg"
                alt="Nazr Logo"
                width={32}
                height={32}
                className="w-0 opacity-0 group-hover:w-8 group-hover:opacity-100 group-hover:mr-2 transition-all duration-300 ease-in-out object-contain brightness-0"
              />
              <span className="text-[16px] tracking-tight">Discover NAZR</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
