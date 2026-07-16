"use client";

import Image from "next/image";
import { useState } from "react";

export function HelpWithoutHoldUp() {
  const [activeCard, setActiveCard] = useState(1);
  return (
    <section className="w-full bg-[#FFF1EB] flex justify-center pt-10 pb-10 md:py-0 md:h-[872px] overflow-hidden relative z-20">
      <div className="w-full max-w-[1280px] h-full flex flex-col items-center relative">

        {/* Mobile Layout (Hidden on Desktop) */}
        <div className="md:hidden w-full flex flex-col items-center relative">
          <div
            className="font-[family-name:var(--font-bebas)] text-[#161616] text-[clamp(28px,9vw,45px)] text-center w-full z-10 mt-0 whitespace-nowrap"
            style={{ lineHeight: "0.9", letterSpacing: "-0.03em" }}
          >
            HELP. WITHOUT <br />
            THE HOLD UP.
          </div>

          <div className="w-full grid grid-cols-2 gap-4 px-4 pb-4 mt-2">
            <div
              onClick={() => setActiveCard(1)}
              className={`w-full h-full min-h-[140px] rounded-[12px] p-4 flex flex-col justify-start relative cursor-pointer transition-colors duration-300 ${activeCard === 1 ? 'bg-[#FF0E97] shadow-lg' : 'bg-transparent border-dashed border border-[#242424]'}`}
            >
              <div className={`w-[28px] h-[28px] rounded-full flex items-center justify-center font-[family-name:var(--font-bebas)] text-[16px] shadow-sm mb-3 transition-colors duration-300 ${activeCard === 1 ? 'bg-[#FFF1EB] text-[#161616]' : 'bg-[#FFF1EB] text-[#161616]'}`}>
                1
              </div>
              <h3 className={`font-[family-name:var(--font-switzer)] font-semibold text-[16px] mb-1 leading-tight transition-colors duration-300 ${activeCard === 1 ? 'text-white' : 'text-[#161616]'}`}>Volume Button SOS</h3>
              <p className={`font-['Inter',_sans-serif] text-[13px] leading-[1.4] tracking-[-0.03em] transition-colors duration-300 ${activeCard === 1 ? 'text-white/90' : 'text-[#161616]'}`}>
                Press your volume button three times to instantly trigger SOS.
              </p>
            </div>
            <div
              onClick={() => setActiveCard(2)}
              className={`w-full h-full min-h-[140px] rounded-[12px] p-4 flex flex-col justify-start relative cursor-pointer transition-colors duration-300 ${activeCard === 2 ? 'bg-[#FF0E97] shadow-lg' : 'bg-transparent border-dashed border border-[#242424]'}`}
            >
              <div className={`w-[28px] h-[28px] rounded-full flex items-center justify-center font-[family-name:var(--font-bebas)] text-[16px] shadow-sm mb-3 transition-colors duration-300 ${activeCard === 2 ? 'bg-[#FFF1EB] text-[#161616]' : 'bg-[#FFF1EB] text-[#161616]'}`}>
                2
              </div>
              <h3 className={`font-[family-name:var(--font-switzer)] font-semibold text-[16px] mb-1 leading-tight transition-colors duration-300 ${activeCard === 2 ? 'text-white' : 'text-[#161616]'}`}>In-App SOS Button</h3>
              <p className={`font-['Inter',_sans-serif] text-[13px] leading-[1.4] tracking-[-0.03em] transition-colors duration-300 ${activeCard === 2 ? 'text-white/90' : 'text-[#161616]'}`}>
                Tap the SOS button in the NAZR app to alert your support network.
              </p>
            </div>
          </div>

          <div className="relative w-[55vw] max-w-[200px] aspect-[200/419] z-20 mt-[30px] mx-auto">
            <Image src="/images/phone.png" alt="NAZR SOS App Interface" fill className="object-contain" />
          </div>

          <div className="mt-8 text-center text-[#161616] max-w-[408px] px-4 font-[family-name:var(--font-switzer)] text-[12px] leading-[1.4] tracking-[-0.03em]">
            It is a long established fact that a reader will be distracted by the.
          </div>
        </div>

        {/* Desktop Layout (Hidden on Mobile) */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[1280px] h-[872px] pointer-events-none">

          {/* Title */}
          <div className="absolute flex justify-center items-center pointer-events-auto"
            style={{ width: "574.48px", height: "209.64px", top: "60px", left: "357.51px" }}>
            <h2 className="font-[family-name:var(--font-bebas)] text-[#161616] text-[120px] leading-[0.9] tracking-[-0.03em] text-center m-0">
              HELP. WITHOUT<br />THE HOLD UP.
            </h2>
          </div>

          {/* Phone */}
          <div className="absolute pointer-events-auto z-20"
            style={{ width: "249.74px", height: "523.51px", top: "214px", left: "519.25px" }}>
            <Image src="/images/new8.svg" alt="NAZR SOS App Interface" fill className="object-contain" />
          </div>

          {/* Box 1 */}
          <div className="absolute pointer-events-auto z-10" style={{ width: "217px", height: "148px", top: "381px", left: "228.25px" }}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="216" height="147" rx="11.5" fill="none" stroke="#242424" strokeWidth="1" strokeDasharray="9 5" />
            </svg>
            <div className="absolute w-[34.13px] h-[34.13px] bg-[#FFF1EB] rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]" style={{ top: "-17px", left: "17px" }}>
              <span className="font-[family-name:var(--font-bebas)] text-[20.18px] text-[#161616] leading-[1.2] tracking-[-0.03em] mt-1">1</span>
            </div>
            <div className="absolute" style={{ top: "24px", left: "16.5px" }}>
              <h3 className="font-[family-name:var(--font-switzer)] font-semibold text-[20px] text-[#161616] leading-[1.4] tracking-[-0.03em] m-0">
                Volume Button SOS
              </h3>
            </div>
            <div className="absolute" style={{ top: "51px", left: "16.5px", width: "158.45px" }}>
              <p className="font-['Inter',_sans-serif] text-[16px] text-[#161616] leading-[1.4] tracking-[-0.03em] m-0">
                Press your volume button three times to instantly trigger SOS.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="absolute pointer-events-auto z-10" style={{ width: "217px", height: "148px", top: "301px", left: "834.75px" }}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="216" height="147" rx="11.5" fill="none" stroke="#242424" strokeWidth="1" strokeDasharray="9 5" />
            </svg>
            <div className="absolute w-[34.13px] h-[34.13px] bg-[#FFF1EB] rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]" style={{ top: "-17px", left: "17px" }}>
              <span className="font-[family-name:var(--font-bebas)] text-[20.18px] text-[#161616] leading-[1.2] tracking-[-0.03em] mt-1">2</span>
            </div>
            <div className="absolute" style={{ top: "24px", left: "16.5px" }}>
              <h3 className="font-[family-name:var(--font-switzer)] font-semibold text-[20px] text-[#161616] leading-[1.4] tracking-[-0.03em] m-0">
                In-App SOS Button
              </h3>
            </div>
            <div className="absolute" style={{ top: "51px", left: "16.5px", width: "158.45px" }}>
              <p className="font-['Inter',_sans-serif] text-[16px] text-[#161616] leading-[1.4] tracking-[-0.03em] m-0">
                Tap the SOS button in the NAZR app to alert your support network.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="absolute pointer-events-auto z-10" style={{ width: "217px", height: "148px", top: "531px", left: "804.75px" }}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="216" height="147" rx="11.5" fill="none" stroke="#242424" strokeWidth="1" strokeDasharray="9 5" />
            </svg>
            <div className="absolute w-[34.13px] h-[34.13px] bg-[#FFF1EB] rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)]" style={{ top: "-17px", left: "17px" }}>
              <span className="font-[family-name:var(--font-bebas)] text-[20.18px] text-[#161616] leading-[1.2] tracking-[-0.03em] mt-1">3</span>
            </div>
            <div className="absolute" style={{ top: "24px", left: "16.5px" }}>
              <h3 className="font-[family-name:var(--font-switzer)] font-semibold text-[20px] text-[#161616] leading-[1.4] tracking-[-0.03em] m-0">
                Home Screen Widget
              </h3>
            </div>
            <div className="absolute" style={{ top: "51px", left: "16.5px", width: "158.45px" }}>
              <p className="font-['Inter',_sans-serif] text-[16px] text-[#161616] leading-[1.4] tracking-[-0.03em] m-0">
                Trigger SOS directly from your home screen without opening the app.
              </p>
            </div>
          </div>

          {/* Footer Text */}
          <div className="absolute pointer-events-auto" style={{ width: "331.52px", height: "43px", top: "769px", left: "474px" }}>
            <p className="font-[family-name:var(--font-switzer)] font-normal text-[20px] text-[#161616] leading-[1.4] tracking-[-0.03em] text-center m-0">
              It is a long established fact that a reader will be distracted by the.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
