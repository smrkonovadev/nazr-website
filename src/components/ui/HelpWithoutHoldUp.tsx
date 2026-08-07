"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";

export function HelpWithoutHoldUp() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const [animData0, setAnimData0] = useState<any>(null);
  const [animData1, setAnimData1] = useState<any>(null);
  const [animData2, setAnimData2] = useState<any>(null);
  const [animData3, setAnimData3] = useState<any>(null);

  useEffect(() => {
    Promise.all([
      fetch("/images/SOS Default.json").then((res) => res.json()),
      fetch("/images/sos_hand.json").then((res) => res.json()),
      fetch("/images/sos2.json").then((res) => res.json()),
      fetch("/images/sos3.json").then((res) => res.json()),
    ])
      .then(([d0, d1, d2, d3]) => {
        setAnimData0(d0);
        setAnimData1(d1);
        setAnimData2(d2);
        setAnimData3(d3);
      })
      .catch((err) => console.error("Error loading SOS Lottie files:", err));
  }, []);

  const effectiveCard = hoveredCard || activeCard;

  const getAnimData = (cardNum: number | null) => {
    if (cardNum === 1) return animData1;
    if (cardNum === 2) return animData2;
    if (cardNum === 3) return animData3;
    return animData0;
  };

  return (
    <section className="w-full bg-[#FFF1EB] flex justify-center pt-10 pb-10 md:py-0 md:min-h-[720px] md:h-auto overflow-hidden relative z-[70]">
      <div className="w-full max-w-[1280px] h-full flex flex-col items-center relative">

        {/* Mobile Layout (Hidden on Desktop) */}
        <div className="md:hidden w-full flex flex-col items-center relative">
          <div
            className="font-[family-name:var(--font-bebas)] font-normal text-[#161616] text-[46px] text-center w-full z-10 mt-0 mb-[15px]"
            style={{ fontFamily: 'var(--font-bebas), Bebas Neue, sans-serif', fontWeight: 400, lineHeight: "90%", letterSpacing: "-0.03em" }}
          >
            HELP. WITHOUT THE HOLD UP.
          </div>

          {/* Horizontally Scrollable 3 Cards Container for Mobile */}
          <div className="w-full relative z-30 pointer-events-auto flex flex-row overflow-x-auto gap-4 pb-4 pt-2 mt-0 scrollbar-none snap-x snap-mandatory scroll-pl-[24px]">
            {/* Left Spacer to guarantee spacing on Card 1 by default */}
            <div className="w-[24px] shrink-0" />

            {/* Card 1 */}
            <div
              onClick={() => setActiveCard(1)}
              className={`min-w-[260px] max-w-[280px] flex-shrink-0 h-auto rounded-[12px] p-4 flex flex-col justify-start relative cursor-pointer transition-all duration-300 snap-start ${effectiveCard === 1 ? 'bg-[#FF0E97] shadow-lg scale-[1.02]' : 'bg-transparent border-dashed border border-[#242424]'}`}
            >
              <div className={`w-[28px] h-[28px] rounded-full flex items-center justify-center font-[family-name:var(--font-bebas)] text-[16px] shadow-sm mb-3 transition-colors duration-300 ${effectiveCard === 1 ? 'bg-[#FFF1EB] text-[#161616]' : 'bg-[#FFF1EB] text-[#161616]'}`}>
                1
              </div>
              <h3 className={`font-['Inter',_sans-serif] font-semibold text-[16px] leading-[1.4] tracking-[-0.03em] mb-1 transition-colors duration-300 ${effectiveCard === 1 ? 'text-white' : 'text-[#161616]'}`}>Volume Button SOS</h3>
              <p className={`font-['Inter',_sans-serif] font-normal text-[14px] leading-[1.4] tracking-[-0.03em] transition-colors duration-300 ${effectiveCard === 1 ? 'text-white/90' : 'text-[#161616]'}`}>
                Press your volume button three times to instantly trigger SOS.
              </p>
            </div>

            {/* Card 2 */}
            <div
              onClick={() => setActiveCard(2)}
              className={`min-w-[260px] max-w-[280px] flex-shrink-0 h-auto rounded-[12px] p-4 flex flex-col justify-start relative cursor-pointer transition-all duration-300 snap-start ${effectiveCard === 2 ? 'bg-[#FF0E97] shadow-lg scale-[1.02]' : 'bg-transparent border-dashed border border-[#242424]'}`}
            >
              <div className={`w-[28px] h-[28px] rounded-full flex items-center justify-center font-[family-name:var(--font-bebas)] text-[16px] shadow-sm mb-3 transition-colors duration-300 ${effectiveCard === 2 ? 'bg-[#FFF1EB] text-[#161616]' : 'bg-[#FFF1EB] text-[#161616]'}`}>
                2
              </div>
              <h3 className={`font-['Inter',_sans-serif] font-semibold text-[16px] leading-[1.4] tracking-[-0.03em] mb-1 transition-colors duration-300 ${effectiveCard === 2 ? 'text-white' : 'text-[#161616]'}`}>In-App SOS Button</h3>
              <p className={`font-['Inter',_sans-serif] font-normal text-[14px] leading-[1.4] tracking-[-0.03em] transition-colors duration-300 ${effectiveCard === 2 ? 'text-white/90' : 'text-[#161616]'}`}>
                Tap the SOS button in the NAZR app to alert your support network.
              </p>
            </div>

            {/* Card 3 */}
            <div
              onClick={() => setActiveCard(3)}
              className={`min-w-[260px] max-w-[280px] flex-shrink-0 h-auto rounded-[12px] p-4 flex flex-col justify-start relative cursor-pointer transition-all duration-300 snap-start ${effectiveCard === 3 ? 'bg-[#FF0E97] shadow-lg scale-[1.02]' : 'bg-transparent border-dashed border border-[#242424]'}`}
            >
              <div className={`w-[28px] h-[28px] rounded-full flex items-center justify-center font-[family-name:var(--font-bebas)] text-[16px] shadow-sm mb-3 transition-colors duration-300 ${effectiveCard === 3 ? 'bg-[#FFF1EB] text-[#161616]' : 'bg-[#FFF1EB] text-[#161616]'}`}>
                3
              </div>
              <h3 className={`font-['Inter',_sans-serif] font-semibold text-[16px] leading-[1.4] tracking-[-0.03em] mb-1 transition-colors duration-300 ${effectiveCard === 3 ? 'text-white' : 'text-[#161616]'}`}>Home Screen SOS Widget</h3>
              <p className={`font-['Inter',_sans-serif] font-normal text-[14px] leading-[1.4] tracking-[-0.03em] transition-colors duration-300 ${effectiveCard === 3 ? 'text-white/90' : 'text-[#161616]'}`}>
                Trigger SOS directly from your home screen without opening the app.
              </p>
            </div>

            {/* Right Spacer */}
            <div className="w-3 shrink-0" />
          </div>

          {/* Mobile Phone Mockup / Animation Display */}
          <div className="relative z-10 pointer-events-none my-3 mx-auto flex items-center justify-center w-[280px] sm:w-[320px] h-[370px] sm:h-[410px] overflow-visible">
            {/* Default Mobile Image / Lottie */}
            <div className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${!effectiveCard ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
              {animData0 ? (
                <Lottie
                  animationData={animData0}
                  loop={true}
                  className="w-full h-full object-contain drop-shadow-xl scale-[1.95] translate-y-6 transform-gpu"
                />
              ) : (
                <Image unoptimized quality={100} src="/images/phone.webp" alt="NAZR SOS App Interface" fill className="object-contain" />
              )}
            </div>

            {/* Mobile Card 1 Lottie */}
            {animData1 && (
              <div className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${effectiveCard === 1 ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'}`}>
                <Lottie
                  animationData={animData1}
                  loop={true}
                  className="w-full h-full object-contain drop-shadow-xl scale-[1.95] translate-y-6 transform-gpu"
                />
              </div>
            )}

            {/* Mobile Card 2 Lottie */}
            {animData2 && (
              <div className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${effectiveCard === 2 ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'}`}>
                <Lottie
                  animationData={animData2}
                  loop={true}
                  className="w-full h-full object-contain drop-shadow-xl scale-[1.95] translate-y-6 transform-gpu"
                />
              </div>
            )}

            {/* Mobile Card 3 Lottie */}
            {animData3 && (
              <div className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${effectiveCard === 3 ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'}`}>
                <Lottie
                  animationData={animData3}
                  loop={true}
                  className="w-full h-full object-contain drop-shadow-xl scale-[1.95] translate-y-6 transform-gpu"
                />
              </div>
            )}
          </div>

          <div className="relative z-30 mt-1 sm:mt-2 text-center text-[#161616] max-w-[408px] px-4 font-['Inter',_sans-serif] font-normal text-[16px] leading-[1.4] tracking-[-0.03em]">
            Three ways to activate SOS. Because every second spent searching is a second too many.
          </div>
        </div>

        {/* Desktop Layout (Hidden on Mobile) */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1280px] h-[720px] pointer-events-none">

          {/* Title */}
          <div className="absolute flex justify-center items-center pointer-events-auto left-1/2 -translate-x-1/2"
            style={{ width: "600px", height: "170px", top: "60px" }}>
            <h2 className="font-[family-name:var(--font-bebas)] font-normal text-[#161616] text-[96px] leading-[90%] tracking-[-0.03em] text-center m-0">
              HELP. WITHOUT<br />THE HOLD UP.
            </h2>
          </div>

          {/* Phone Display with Smooth Cross-Fade Lottie Animation Triggers */}
          <div
            className="absolute pointer-events-none z-20 flex items-center justify-center overflow-visible transition-all duration-500 ease-in-out left-[calc(50%-25px)] -translate-x-1/2"
            style={{ width: "290px", height: "490px", top: "190px" }}
          >
            {/* Default Static Phone / Lottie */}
            <div className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${!effectiveCard ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
              {animData0 ? (
                <Lottie
                  animationData={animData0}
                  loop={true}
                  className="w-full h-full object-contain drop-shadow-2xl scale-[2.09] transform-gpu"
                />
              ) : (
                <Image unoptimized quality={100} src="/images/new8.webp" alt="NAZR SOS App Interface" fill className="object-contain" />
              )}
            </div>

            {/* Card 1 Lottie (Volume SOS) */}
            {animData1 && (
              <div className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${effectiveCard === 1 ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'}`}>
                <Lottie
                  animationData={animData1}
                  loop={true}
                  className="w-full h-full object-contain drop-shadow-2xl scale-[2.09] transform-gpu"
                />
              </div>
            )}

            {/* Card 2 Lottie (In-App SOS) */}
            {animData2 && (
              <div className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${effectiveCard === 2 ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'}`}>
                <Lottie
                  animationData={animData2}
                  loop={true}
                  className="w-full h-full object-contain drop-shadow-2xl scale-[2.09] transform-gpu"
                />
              </div>
            )}

            {/* Card 3 Lottie (Widget SOS) */}
            {animData3 && (
              <div className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${effectiveCard === 3 ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'}`}>
                <Lottie
                  animationData={animData3}
                  loop={true}
                  className="w-full h-full object-contain drop-shadow-2xl scale-[2.09] transform-gpu"
                />
              </div>
            )}
          </div>

          {/* Box 1 */}
          <div
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setActiveCard(1)}
            className="absolute pointer-events-auto z-30 cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
            style={{ width: "250px", height: "136px", top: "285px", left: "195px" }}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="248" height="134" rx="16" ry="16" fill={effectiveCard === 1 ? "#FF0E97" : "none"} stroke={effectiveCard === 1 ? "#FF0E97" : "#242424"} strokeWidth={effectiveCard === 1 ? "2" : "1"} strokeDasharray={effectiveCard === 1 ? "none" : "9 5"} />
            </svg>
            <div className={`absolute w-[32px] h-[32px] rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-colors z-20 ${effectiveCard === 1 ? 'bg-white' : 'bg-[#FF0E97]'}`} style={{ top: "-16px", left: "24px" }}>
              <span className={`font-[family-name:var(--font-bebas)] text-[18px] leading-[1] tracking-[-0.03em] mt-0.5 ${effectiveCard === 1 ? 'text-[#FF0E97]' : 'text-white'}`}>1</span>
            </div>
            <div className="absolute flex flex-col justify-center items-start text-left px-[20px] pt-[12px] pb-[4px] pointer-events-none" style={{ inset: 0 }}>
              <h3 className={`font-['Inter',_sans-serif] font-semibold text-[18px] leading-[1.4] tracking-[-0.03em] m-0 mb-1 transition-colors ${effectiveCard === 1 ? 'text-white' : 'text-[#161616]'}`}>
                Volume Button SOS
              </h3>
              <p className={`font-['Inter',_sans-serif] font-normal text-[16px] leading-[1.4] tracking-[-0.03em] m-0 w-full transition-colors ${effectiveCard === 1 ? 'text-white/90' : 'text-[#161616]'}`}>
                Press your volume button three times to instantly trigger SOS.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setActiveCard(2)}
            className="absolute pointer-events-auto z-30 cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
            style={{ width: "260px", height: "136px", top: "235px", left: "834.75px" }}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="258" height="134" rx="12" ry="12" fill={effectiveCard === 2 ? "#FF0E97" : "none"} stroke={effectiveCard === 2 ? "#FF0E97" : "#242424"} strokeWidth={effectiveCard === 2 ? "2" : "1"} strokeDasharray={effectiveCard === 2 ? "none" : "9 5"} />
            </svg>
            <div className={`absolute w-[32px] h-[32px] rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-colors ${effectiveCard === 2 ? 'bg-white' : 'bg-[#FF0E97]'}`} style={{ top: "-16px", left: "24px" }}>
              <span className={`font-[family-name:var(--font-bebas)] text-[18px] leading-[1] tracking-[-0.03em] mt-0.5 ${effectiveCard === 2 ? 'text-[#FF0E97]' : 'text-white'}`}>2</span>
            </div>
            <div className="absolute flex flex-col justify-center items-start text-left px-[24px] pointer-events-none" style={{ inset: 0 }}>
              <h3 className={`font-['Inter',_sans-serif] font-semibold text-[18px] leading-[1.4] tracking-[-0.03em] m-0 mb-1 transition-colors ${effectiveCard === 2 ? 'text-white' : 'text-[#161616]'}`}>
                In-App SOS Button
              </h3>
              <p className={`font-['Inter',_sans-serif] font-normal text-[16px] leading-[1.4] tracking-[-0.03em] m-0 w-full transition-colors ${effectiveCard === 2 ? 'text-white/90' : 'text-[#161616]'}`}>
                Tap the SOS button in the NAZR app to alert your support network.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setActiveCard(3)}
            className="absolute pointer-events-auto z-30 cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
            style={{ width: "285px", height: "136px", top: "440px", left: "805px" }}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="283" height="134" rx="16" ry="16" fill={effectiveCard === 3 ? "#FF0E97" : "none"} stroke={effectiveCard === 3 ? "#FF0E97" : "#242424"} strokeWidth={effectiveCard === 3 ? "2" : "1"} strokeDasharray={effectiveCard === 3 ? "none" : "9 5"} />
            </svg>
            <div className={`absolute w-[32px] h-[32px] rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-colors ${effectiveCard === 3 ? 'bg-white' : 'bg-[#FF0E97]'}`} style={{ top: "-16px", left: "24px" }}>
              <span className={`font-[family-name:var(--font-bebas)] text-[18px] leading-[1] tracking-[-0.03em] mt-0.5 ${effectiveCard === 3 ? 'text-[#FF0E97]' : 'text-white'}`}>3</span>
            </div>
            <div className="absolute flex flex-col justify-center items-start text-left px-[24px] pointer-events-none" style={{ inset: 0 }}>
              <h3 className={`font-['Inter',_sans-serif] font-semibold text-[18px] leading-[1.4] tracking-[-0.03em] m-0 mb-1 transition-colors ${effectiveCard === 3 ? 'text-white' : 'text-[#161616]'}`}>
                Home Screen SOS Widget
              </h3>
              <p className={`font-['Inter',_sans-serif] font-normal text-[16px] leading-[1.4] tracking-[-0.03em] m-0 w-full transition-colors ${effectiveCard === 3 ? 'text-white/90' : 'text-[#161616]'}`}>
                Trigger SOS directly from your home screen without opening the app.
              </p>
            </div>
          </div>

          {/* Footer Text */}
          <div className="absolute pointer-events-auto z-30" style={{ width: "480px", height: "auto", top: "640px", left: "400px" }}>
            <p className="font-['Inter',_sans-serif] font-normal text-[18px] text-[#161616] leading-[1.4] tracking-[-0.03em] text-center m-0">
              Three ways to activate SOS. Because every second spent searching is a second too many.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

