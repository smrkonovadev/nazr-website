"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Lottie from "lottie-react";

const features = [
  {
    title: "ACTIVATE",
    bgImage: "/images/PINKGRADPRO.svg",
    description:
      "Start your journey by enabling Nazr to run smoothly and silently in the background. All safety features will be equipped to launch the moment it’s necessary.",
    lottieJson: "/images/SM ARM-Turn On.json",
    vid: "/images/vid8.mp4",
  },
  {
    title: "CHECK IN",
    bgImage: "/images/PURPLEGRADPRO.svg",
    description:
      "At intervals you've set, Nazr sends a check-in reminder to make sure you're okay. One quick tap confirms you're safe and keeps your Trusted Circle informed.",
    lottieJson: "/images/SM Check In Timer.json",
    vid: "/images/vid9.mp4",
  },
  {
    title: "ARRIVAL REMINDER",
    bgImage: "/images/BLUEGRADPRO.svg",
    description:
      "Five minutes before your destination, NAZR prompts you to confirm your arrival or extend your journey if your plans have changed.",
    lottieJson: "/images/SM Check In Alert.json",
    vid: "/images/vid10.mp4",
  },
  {
    title: "ARRIVED OR SOS",
    bgImage: "/images/PINKGRADPRO.svg",
    description:
      "A quiet pause in a busy day, captured in soft light and simple tones. A quiet pause in a busy day, captured in soft light and simple tones.",
    lottieJson: "/images/SM Arrived SOS.json",
    vid: "/images/vid11.mp4",
  },
];

export function ShieldModeFeatures() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -403, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 403, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#161616] text-[#FFF9EB] pt-10 md:pt-14 pb-14 md:pb-20 relative z-50 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col">
        
        {/* Header Row — 40px left padding to match track */}
        <div
          className="w-full flex flex-col mb-8 md:mb-10 gap-3"
          style={{ paddingLeft: "40px", paddingRight: "40px" }}
        >
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

          {/* Subtitle row */}
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
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
          </div>
        </div>

        {/* Carousel Track with explicit 40px left padding and scroll-padding */}
        <div
          ref={scrollRef}
          className="w-full flex flex-row gap-[24px] overflow-x-auto snap-x snap-mandatory pb-4 pt-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{
            paddingLeft: "40px",
            paddingRight: "40px",
            scrollPaddingLeft: "40px",
            scrollPaddingRight: "40px",
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
          {/* Spacer to preserve right scroll boundary */}
          <div className="shrink-0 w-[16px] md:w-[20px] pointer-events-none" />
        </div>

        {/* Navigation Controls Centered Below Cards */}
        <div className="w-full flex items-center justify-center gap-4 mt-6 md:mt-8">
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
    </section>
  );
}

function FeatureCard({ feature }: { feature: (typeof features)[0] }) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    if (feature.lottieJson) {
      fetch(feature.lottieJson)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.layers) {
            data.layers = data.layers.filter((l: any) => l.ty !== 1);
          }
          setAnimationData(data);
        })
        .catch((err) => console.error("Error loading Lottie JSON:", err));
    }
  }, [feature.lottieJson]);

  return (
    <div
      className="w-[310px] min-w-[310px] md:w-[378.67px] md:min-w-[378.67px] h-[500px] md:h-[533.3px] shrink-0 snap-start rounded-[16px] overflow-hidden flex flex-col shadow-2xl transition-all duration-300"
    >
      {/* Top coloured image area with gradient SVG background */}
      <div
        className="w-full relative overflow-hidden flex justify-center items-center h-[306px] md:h-[339.3px]"
      >
        {/* Gradient SVG Background */}
        <img
          src={feature.bgImage}
          alt={feature.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Center Phone / Animation Mockup */}
        <div className="relative z-10 w-[240px] md:w-[280px] h-[320px] md:h-[350px] flex items-center justify-center scale-[1.15] md:scale-[1.2]">
          {animationData ? (
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 object-contain object-top drop-shadow-2xl w-full h-full"
              style={{
                WebkitMaskImage: "url(/images/nazrapp4img.webp)",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "top center",
                maskImage: "url(/images/nazrapp4img.webp)",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "top center",
              }}
            >
              <source src={feature.vid} type="video/mp4" />
            </video>
          )}
        </div>
      </div>

      {/* Bottom Content Area */}
      <div
        className="w-full flex flex-col justify-start h-[194px] p-[24px] gap-[8px] bg-[#F1E4DF]"
      >
        <h3
          className="m-0 text-[#161616] uppercase"
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "32px",
            lineHeight: "130%",
            letterSpacing: "0%",
            color: "#161616",
          }}
        >
          {feature.title}
        </h3>

        <p
          className="m-0 text-[#161616]"
          style={{
            fontFamily: "Inter, var(--font-inter), sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "150%",
            letterSpacing: "0%",
            color: "#161616",
          }}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
}
