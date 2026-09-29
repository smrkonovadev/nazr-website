"use client";

import Image from "next/image";
import Link from "next/link";
import DynamicDotLottie from "@/components/lottie/DynamicDotLottie";

export function AppBackupBanner() {
  return (
    <section className="w-full bg-[#2e5bff] text-white pt-8 sm:pt-10 md:pt-14 lg:pt-16 pb-8 sm:pb-10 md:pb-12 lg:pb-14 px-5 sm:px-8 md:px-12 lg:px-16 flex justify-center max-md:rounded-b-[9.71px] md:rounded-b-[26px] relative z-10 select-none overflow-hidden min-h-[460px] md:min-h-[560px] lg:min-h-[620px]">
      <div className="w-full max-w-[1240px] flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-10 lg:gap-12">
        {/* Left: Phone UI & Floating Stickers */}
        <div className="w-full md:w-[48%] lg:w-[50%] flex justify-center items-center relative order-2 md:order-1 mt-6 md:mt-0">
          <div className="relative w-[300px] sm:w-[350px] md:w-[420px] lg:w-[480px] xl:w-[520px] h-[440px] sm:h-[500px] md:h-[580px] lg:h-[640px] xl:h-[680px] flex items-center justify-center">
            {/* Floating Globe Sticker */}
            <div className="absolute top-3 sm:top-5 md:top-7 lg:top-8 left-8 sm:left-11 md:left-14 lg:left-16 w-[70px] sm:w-[84px] md:w-[98px] lg:w-[108px] h-[70px] sm:h-[84px] md:h-[98px] lg:h-[108px] z-20 pointer-events-none transform -rotate-12">
              <Image
                src="/images/globe.webp"
                alt="Global Network"
                fill
                className="object-contain drop-shadow-md"
              />
            </div>

            {/* Floating Pink Camera / Top Sticker */}
            <div className="absolute top-1 sm:top-2 md:top-4 -right-2 sm:-right-4 md:-right-6 lg:-right-8 w-18 sm:w-22 md:w-26 lg:w-30 h-16 sm:h-19 md:h-22 lg:h-25 z-20 pointer-events-none transform rotate-12">
              <Image
                src="/images/niowef.svg"
                alt="Camera Sticker"
                fill
                className="object-contain drop-shadow-md"
              />
            </div>

            {/* Circular Pink Seal / Left Round Sticker */}
            <div className="absolute top-[42%] sm:top-[44%] md:top-[45%] -left-3 sm:-left-2 md:left-0 lg:left-1 w-22 sm:w-26 md:w-32 lg:w-36 h-22 sm:h-26 md:h-32 lg:h-36 z-20 pointer-events-none transform -rotate-12">
              <Image
                src="/images/asdf.svg"
                alt="Established Fact Sticker"
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>

            {/* Center Phone Mockup with Default SOS Lottie */}
            <div className="relative z-10 w-full h-full flex items-center justify-center pointer-events-none">
              <div className="w-[260px] sm:w-[300px] md:w-[360px] lg:w-[410px] xl:w-[450px] h-[390px] sm:h-[450px] md:h-[520px] lg:h-[570px] xl:h-[610px] relative flex items-center justify-center">
                <DynamicDotLottie
                  src="/lottie/homepage/sos_default.lottie"
                  isActive={true}
                  fallbackImage="/images/new8.webp"
                  fallbackAlt="NAZR SOS App Interface"
                  className="w-full h-full object-contain drop-shadow-2xl scale-[2.05] md:scale-[2.1] transform-gpu"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content & App Download Badges (Above phone on mobile, Right on desktop) */}
        <div className="w-full md:w-[55%] lg:w-[54%] flex flex-col items-start justify-center text-left order-1 md:order-2 md:py-10 lg:py-14 xl:py-18">
          {/* Tag */}
          <span className="bg-[#1f4ae8] text-white font-['Inter',_sans-serif] text-[11px] sm:text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 border border-white/25">
            THE FREE NAZR APP
          </span>

          <h2 className="font-[family-name:var(--font-bebas)] text-white text-[42px] sm:text-[56px] md:text-[68px] lg:text-[80px] font-normal leading-[0.9] tracking-[-0.02em] uppercase mb-3 sm:mb-4">
            YOUR TOOLS,<br />
            NOW WITH BACKUP.
          </h2>

          <p className="font-['Inter',_sans-serif] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[145%] text-white/90 max-w-[500px] mb-5 sm:mb-6 font-normal">
            Shield Mode, SOS and your Trusted Circle. Free on iOS and Android.
          </p>

          {/* Download Badges in Glass Container */}
          <div className="w-full max-w-[460px] bg-[#1a40d6]/40 backdrop-blur-md border border-white/20 rounded-[18px] p-4 sm:p-5 flex flex-col gap-2.5 shadow-xl">
            <div className="flex flex-row items-center gap-3">
              {/* Download on the App Store */}
              <a
                href="https://apps.apple.com/in/app/nazr-women-safety-app/id6787188929"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 bg-black hover:bg-black/85 text-white px-3 py-1.5 rounded-[8px] transition-all shadow-sm active:scale-95 whitespace-nowrap h-[42px] sm:h-[44px]"
              >
                <svg className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-.98 1.71-.87 2.73.99.08 2.02-.52 2.57-1.23z" />
                </svg>
                <div className="flex flex-col text-left justify-center">
                  <span className="text-[10px] leading-tight text-white/80 font-normal">Download on the</span>
                  <span className="text-[13px] sm:text-[14px] font-semibold leading-tight font-sans text-white">App Store</span>
                </div>
              </a>

              {/* GET IT ON Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.nazr.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 bg-black hover:bg-black/85 text-white px-3 py-1.5 rounded-[8px] transition-all shadow-sm active:scale-95 whitespace-nowrap h-[42px] sm:h-[44px]"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186a1.948 1.948 0 0 1-.61-1.42V3.234c0-.555.226-1.059.609-1.42z" fill="#00D2FF" />
                  <path d="M17.18 8.614l-3.387 3.386 3.387 3.386 3.826-2.184c1.094-.625 1.094-1.647 0-2.272L17.18 8.614z" fill="#FFCE00" />
                  <path d="M3.61 1.814l10.183 10.186 3.387-3.386L6.47 2.502C5.376 1.877 4.298 1.57 3.61 1.814z" fill="#00F076" />
                  <path d="M13.793 12L3.61 22.186c.688.244 1.766-.063 2.86-.688l10.71-6.112-3.387-3.386z" fill="#FF3A44" />
                </svg>
                <div className="flex flex-col text-left justify-center">
                  <span className="text-[10px] leading-tight text-white/80 font-normal uppercase">GET IT ON</span>
                  <span className="text-[13px] sm:text-[14px] font-semibold leading-tight font-sans text-white">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
