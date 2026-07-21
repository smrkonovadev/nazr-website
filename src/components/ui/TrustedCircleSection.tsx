"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export function TrustedCircleSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const videos = ["/images/vid3.mp4", "/images/vid6.mp4", "/images/vid7.mp4"];
  const vidRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null)
  ];

  useEffect(() => {
    vidRefs.forEach((ref, index) => {
      if (index === activeStep) {
        if (ref.current) {
          ref.current.currentTime = 0;
          ref.current.play().catch(() => {});
        }
      } else {
        if (ref.current) {
          ref.current.pause();
        }
      }
    });
  }, [activeStep]);

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
      }, 100); // Let the line touch the circle briefly before transition
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const steps = [
    {
      number: 1,
      title: "Build Your Trusted Circle.",
      description: "Invite the people you trust most to be part of your safety network. Guardians receive an SMS and WhatsApp invitation to securely join your Trusted Circle.",
      color: "#F80090"
    },
    {
      number: 2,
      title: "Connected The Moment It Matters.",
      description: "If an SOS is triggered or a Shield Mode check-in is missed, your Trusted Circle is alerted immediately with thhe possible courses of action that can be taken, all visible in one place to ensure everyone is on the same page.",
      color: "#0A84FF"
    },
    {
      number: 3,
      title: "Support That Moves With You.",
      description: "During an emergency, the live location and audio recordings from your phone are sent to your Trusted Circle along with the nearest police station/hospital to ensure maximum safety as quickly as possible.",
      color: "#03A781"
    }
  ];

  // Calculate progress height mapping
  let lineProgressHeight = 0;
  if (activeStep === 0) {
    lineProgressHeight = (progress / 100) * 50;
  } else if (activeStep === 1) {
    lineProgressHeight = 50 + (progress / 100) * 50;
  } else {
    lineProgressHeight = 100;
  }

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
              <Image src="/images/logosvg.svg" alt="Nazr Logo" width={35} height={35} className="w-0 opacity-0 group-hover:w-[35px] group-hover:opacity-100 group-hover:mr-3 transition-all duration-300 ease-in-out object-contain" />
              Join Ecosystem
            </button>
          </div>

          {/* Mobile Cards */}
          <div className="flex flex-col gap-[28px] w-full items-center">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col w-full max-w-[346px] gap-6">
                {/* Image Block */}
                <div
                  className="w-full h-[311px] rounded-[16px] relative overflow-hidden flex justify-center items-start pt-[30px] shadow-md transition-colors duration-500"
                  style={{ backgroundColor: step.color }}
                >
                  {/* Globe */}
                  <div className="absolute top-[10px] left-[68px] w-[75px] h-[75px] z-40 -rotate-[42deg]">
                     <Image src="/images/globe.png" alt="Globe" fill className="object-contain drop-shadow-xl" />
                  </div>

                  {/* Blue Sticker */}
                  <div className="absolute top-[44%] left-[10%] w-[90px] h-[90px] z-40 -rotate-[15deg]">
                    <Image src="/images/Vector.svg" alt="Blue Sticker" fill className="object-contain drop-shadow-xl" />
                  </div>

                  {/* Phone Mockup */}
                  <div className="relative w-[180px] h-[360px] z-10">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-contain object-top drop-shadow-2xl w-full h-full"
                      style={{
                        WebkitMaskImage: 'url(/images/nazrapp4img.png)',
                        WebkitMaskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'top center',
                        maskImage: 'url(/images/nazrapp4img.png)',
                        maskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'top center',
                      }}
                    >
                      <source src={videos[index]} type="video/mp4" />
                    </video>
                  </div>

                  {/* Green Lens */}
                  <div className="absolute top-[4%] right-[12%] w-[90px] h-[90px] z-20 rotate-[-0deg]">
                    <Image src="/images/greenlens.png" alt="Green Lens" fill className="object-contain drop-shadow-xl" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-2 w-full px-1">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 shrink-0 rounded-full bg-white border-[3px] border-[#F80090] flex items-center justify-center text-[#161616] font-sans text-[14px] font-bold">
                      {step.number}
                    </div>
                    <h3 className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] text-[32px] leading-[100%] tracking-normal uppercase whitespace-nowrap pt-1">
                      {step.title}
                    </h3>
                  </div>
                  <div className="pl-12 w-full max-w-[341px]">
                    <p className="m-0 text-[#161616] font-normal text-[14px] leading-[150%] tracking-normal opacity-80" style={{ fontFamily: "Inter, sans-serif" }}>
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
          <div className="col-span-6 relative flex flex-col gap-8 w-full text-left pt-4 -translate-y-[50px]">
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
                    setProgress(0); // Start progress at 0 for selected step when resuming
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}
                >
                  {step.number}
                </div>
                <div 
                  className="flex flex-col gap-1 pt-1 transition-opacity duration-300"
                  style={{ opacity: activeStep === index ? 1 : 0.4 }}
                >
                  <h3 className="m-0 font-[family-name:var(--font-bebas)] text-[28px] leading-[100%] tracking-normal uppercase text-[#161616]">
                    {step.title}
                  </h3>
                  <p className="m-0 text-[#161616] font-sans font-normal text-[17px] leading-[150%] tracking-[0.05em] opacity-80 w-full max-w-[520px]" style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Join Ecosystem Button */}
            <div className="pt-4 relative z-10">
              <button className="group bg-[#F80090] hover:bg-[#d6007b] transition-colors text-white rounded-[5px] px-6 py-2.5 flex items-center font-normal text-[16px] leading-[150%] tracking-normal shadow-lg" style={{ fontFamily: "Roboto, sans-serif" }}>
                <Image src="/images/logosvg.svg" alt="Nazr Logo" width={35} height={35} className="w-0 opacity-0 group-hover:w-[35px] group-hover:opacity-100 group-hover:mr-3 transition-all duration-300 ease-in-out object-contain" />
                Join Ecosystem
              </button>
            </div>
          </div>

          {/* Right Column: Visuals */}
          <div 
            className="col-span-6 col-start-7 w-full h-[550px] rounded-[40px] relative overflow-hidden flex justify-center items-end shadow-2xl transition-colors duration-500"
            style={{ backgroundColor: steps[activeStep].color }}
          >
            {/* Globe */}
            <div className="absolute top-[14%] left-[23%] w-[110px] h-[110px] z-40 -rotate-[42deg]">
              <Image src="/images/globe.png" alt="Globe" fill className="object-contain drop-shadow-xl" />
            </div>

            {/* Blue Sticker */}
            <div className="absolute top-[46%] left-[14%] w-[120px] h-[120px] z-40 -rotate-[15deg]">
              <Image src="/images/Vector.svg" alt="Blue Sticker" fill className="object-contain drop-shadow-xl" />
            </div>

            {/* Phone Mockup */}
            <div className="relative w-[280px] h-[480px] z-10 translate-y-[50px]">
              {videos.map((vid, index) => (
                <video
                  key={vid}
                  ref={vidRefs[index]}
                  loop
                  muted
                  playsInline
                  className={`absolute inset-0 object-contain object-top drop-shadow-2xl w-full h-full transition-opacity duration-300 ${activeStep === index ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                  style={{
                    WebkitMaskImage: 'url(/images/nazrapp4img.png)',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'top center',
                    maskImage: 'url(/images/nazrapp4img.png)',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'top center',
                  }}
                >
                  <source src={vid} type="video/mp4" />
                </video>
              ))}
            </div>

            {/* Green Lens */}
            <div className="absolute top-[8%] right-[15%] w-[170px] h-[170px] z-20 rotate-[-0deg]">
              <Image src="/images/greenlens.png" alt="Green Lens" fill className="object-contain drop-shadow-xl" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
