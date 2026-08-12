"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function TrustedCircleSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [animationsData, setAnimationsData] = useState<Record<number, any>>({});

  const steps = [
    {
      number: 1,
      title: "Build Your Trusted Circle.",
      description: "Invite the people you trust most to be part of your safety network. Guardians receive an SMS and WhatsApp invitation to securely join your Trusted Circle.",
      color: "#F80090",
      lottiePath: "/images/SH_Trusted Circle.json"
    },
    {
      number: 2,
      title: "Connected The Moment It Matters.",
      description: "If an SOS is triggered or a Shield Mode check-in is missed, your Trusted Circle is alerted immediately with the possible courses of action that can be taken, all visible in one place to ensure everyone is on the same page.",
      color: "#0A84FF",
      lottiePath: "/images/Gaurdian Alert.json"
    },
    {
      number: 3,
      title: "Support That Moves With You.",
      description: "During an emergency, the live location and audio recordings from your phone are sent to your Trusted Circle along with the nearest police station/hospital to ensure maximum safety as quickly as possible.",
      color: "#03A781",
      lottiePath: "/images/Take Action.json"
    }
  ];

  useEffect(() => {
    steps.forEach((step, idx) => {
      fetch(step.lottiePath)
        .then((res) => res.json())
        .then((data) => {
          setAnimationsData((prev) => ({ ...prev, [idx]: data }));
        })
        .catch((err) => console.error(`Error loading Lottie for step ${idx + 1}:`, err));
    });
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const duration = 5000; // 5 seconds per step
    const intervalTime = 30; // 30ms interval
    const stepValue = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + stepValue;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isHovered]);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setActiveStep((current) => (current + 1) % 3);
        setProgress(0);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <section className="w-full bg-[#F1E4DE] pt-12 md:pt-16 pb-8 md:pb-20 flex flex-col items-center justify-center px-4 relative z-50">
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center gap-0 mb-10 md:mb-20">
        <h2 className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] font-normal max-[380px]:text-[52px] text-[64px] md:text-[160px] leading-[90%] tracking-[-0.03em] max-[380px]:w-full max-md:w-[346px] mx-auto uppercase">
          TRUSTED CIRCLE
        </h2>

        <p className="m-0 text-[#161616] font-sans font-normal text-[16px] md:text-[20px] leading-[140%] tracking-[-0.03em] text-center max-w-[841px] max-[380px]:w-full max-md:w-[346px] mx-auto opacity-100 md:opacity-90 mt-4 md:mt-0" style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}>
          Safety isn't just about technology. It's about the people who show up when you need them most. Trusted Circle keeps your chosen contacts informed, connected, and ready to act the moment something feels wrong.
        </p>
      </div>

      <div className="max-w-[1200px] w-full">
        {/* ======================= */}
        {/* MOBILE LAYOUT (Stacked) */}
        {/* ======================= */}
        <div
          className="flex md:hidden flex-col w-full gap-8 mt-2"
          style={{ zoom: "min(1, calc(100vw / 390))" } as React.CSSProperties}
        >
          {/* Centered Button */}
          <div className="flex justify-center mb-2">
            <button className="group bg-[#F80090] hover:bg-[#d6007b] transition-colors text-white rounded-[5px] px-6 py-2.5 flex items-center font-normal text-[16px] leading-[150%] tracking-normal shadow-lg" style={{ fontFamily: "Roboto, sans-serif" }}>
              <Image unoptimized quality={100} src="/images/logosvg.svg" alt="Nazr Logo" width={35} height={35} className="w-0 opacity-0 group-hover:w-[35px] group-hover:opacity-100 group-hover:mr-3 transition-all duration-300 ease-in-out object-contain" />
              Join Ecosystem
            </button>
          </div>

          {/* Mobile Cards */}
          <div className="flex flex-col gap-[28px] w-full items-center">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col w-full max-w-[346px] gap-6">
                {/* Image Block */}
                <div
                  className="w-[346px] max-w-full h-[270px] relative flex justify-center items-center p-2 overflow-visible"
                >
                  <div className="w-full max-w-[135px] h-full relative flex justify-center items-center overflow-visible">
                    {/* Top Left Sticker (TL.svg) */}
                    <div className="absolute -top-[22px] -left-[48px] z-20 pointer-events-none select-none">
                      <Image
                        unoptimized
                        quality={100}
                        src="/images/TL.svg"
                        alt="Top Left Sticker"
                        width={60}
                        height={57}
                        className="w-[58px] h-auto object-contain"
                      />
                    </div>

                    {/* Top Right Sticker (TR.svg) */}
                    <div className="absolute -top-[12px] -right-[36px] z-20 pointer-events-none select-none">
                      <Image
                        unoptimized
                        quality={100}
                        src="/images/TR.svg"
                        alt="Top Right Sticker"
                        width={52}
                        height={47}
                        className="w-[50px] h-auto object-contain"
                      />
                    </div>

                    {/* Down Left Sticker (DL.svg) */}
                    <div className="absolute top-[47%] -left-[42px] z-20 pointer-events-none select-none">
                      <Image
                        unoptimized
                        quality={100}
                        src="/images/DL.svg"
                        alt="Down Left Sticker"
                        width={48}
                        height={48}
                        className="w-[44px] h-auto object-contain"
                      />
                    </div>

                    {animationsData[index] && (
                      <Lottie
                        animationData={animationsData[index]}
                        loop={true}
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    )}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-1.5 w-full px-1">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 shrink-0 rounded-full bg-white border-[3px] border-[#F80090] flex items-center justify-center text-[#161616] font-sans text-[14px] font-bold">
                      {step.number}
                    </div>
                    <h3 className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] font-normal text-[32px] leading-[140%] tracking-[0em] uppercase whitespace-nowrap pt-1">
                      {step.title}
                    </h3>
                  </div>
                  <div className="pl-12 w-full max-w-[341px]">
                    <p className="m-0 text-[#161616] font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[150%] tracking-[-0.03em] opacity-90">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================== */}
        {/* DESKTOP LAYOUT (Grid) */}
        {/* ======================== */}
        <div className="hidden md:grid grid-cols-12 gap-20 items-center">
          {/* Left Column: Timeline */}
          <div className="col-span-6 relative flex flex-col gap-8 w-full text-left pt-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative z-10 flex gap-6 items-start cursor-pointer animate-duration-300"
              >
                {/* Connecting line to next step */}
                <div className="absolute left-[19px] top-10 w-[2px] z-0" style={{ bottom: index < 2 ? "-32px" : "-44px" }}>
                  {/* Track */}
                  <div className="w-full h-full bg-[#161616]/10 rounded-full"></div>
                  {/* Active Fill */}
                  <div
                    className="absolute top-0 left-0 w-full bg-[#F80090] rounded-full transition-[height] duration-75"
                    style={{
                      height: activeStep > index
                        ? "100%"
                        : activeStep === index
                          ? `${progress}%`
                          : "0%"
                    }}
                  ></div>
                </div>

                <div
                  className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-sans text-[16px] font-bold border-[3px] bg-white text-[#161616] transition-colors duration-300 relative z-10"
                  style={{
                    borderColor: activeStep >= index ? "#F80090" : "rgba(22, 22, 22, 0.15)"
                  }}
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setActiveStep(index);
                    setProgress(0);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}
                >
                  {step.number}
                </div>
                <div
                  className="flex flex-col gap-1 pt-0.5 transition-opacity duration-300"
                  style={{ opacity: activeStep === index ? 1 : 0.4 }}
                >
                  <h3 className="m-0 font-[family-name:var(--font-bebas)] font-normal text-[32px] leading-[140%] tracking-[0em] uppercase text-[#161616]">
                    {step.title}
                  </h3>
                  <p className="m-0 text-[#161616] font-[family-name:var(--font-inter)] font-normal text-[16px] leading-[150%] tracking-[-0.03em] opacity-90 w-full max-w-[520px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Join Ecosystem Button */}
            <div className="pt-4 relative z-10">
              <button className="group bg-[#F80090] hover:bg-[#d6007b] transition-colors text-white rounded-[5px] px-6 py-2.5 flex items-center font-normal text-[16px] leading-[150%] tracking-normal shadow-lg" style={{ fontFamily: "Roboto, sans-serif" }}>
                <Image unoptimized quality={100} src="/images/logosvg.svg" alt="Nazr Logo" width={35} height={35} className="w-0 opacity-0 group-hover:w-[35px] group-hover:opacity-100 group-hover:mr-3 transition-all duration-300 ease-in-out object-contain" />
                Join Ecosystem
              </button>
            </div>
          </div>

          {/* Right Column: Visuals */}
          <div
            className="col-span-6 col-start-7 w-full h-[570px] relative flex justify-center items-center p-0"
          >
            {/* Phone & Stickers Container */}
            <div className="w-full max-w-[280px] h-full relative flex justify-center items-center overflow-visible">
              {/* Top Left Sticker (TL.svg) - Wireframe Globe */}
              <div className="absolute -top-[42px] -left-[102px] z-20 pointer-events-none select-none">
                <Image
                  unoptimized
                  quality={100}
                  src="/images/TL.svg"
                  alt="Top Left Sticker"
                  width={124}
                  height={118}
                  className="w-[110px] md:w-[124px] h-auto object-contain drop-shadow-sm"
                />
              </div>

              {/* Top Right Sticker (TR.svg) - Green Binoculars Eyes overlapping top-right phone edge */}
              <div className="absolute -top-[22px] -right-[74px] z-20 pointer-events-none select-none">
                <Image
                  unoptimized
                  quality={100}
                  src="/images/TR.svg"
                  alt="Top Right Sticker"
                  width={104}
                  height={94}
                  className="w-[94px] md:w-[102px] h-auto object-contain drop-shadow-sm"
                />
              </div>

              {/* Down Left Sticker (DL.svg) - Blue Badge Stamp */}
              <div className="absolute top-[47%] -left-[84px] z-20 pointer-events-none select-none">
                <Image
                  unoptimized
                  quality={100}
                  src="/images/DL.svg"
                  alt="Down Left Sticker"
                  width={96}
                  height={96}
                  className="w-[84px] md:w-[90px] h-auto object-contain drop-shadow-sm"
                />
              </div>

              {/* Phone Lottie Visual */}
              <div className="w-full h-full relative flex justify-center items-center z-10 overflow-visible">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-700 ease-in-out ${activeStep === idx
                        ? "opacity-100 z-10 pointer-events-auto"
                        : "opacity-0 z-0 pointer-events-none"
                      }`}
                  >
                    {animationsData[idx] && (
                      <Lottie
                        animationData={animationsData[idx]}
                        loop={true}
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
