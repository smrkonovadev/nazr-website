'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export function ShopSaleHero() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 12,
    minutes: 56,
    seconds: 12,
  });

  useEffect(() => {
    setMounted(true);
    const calculateTime = () => {
      // Sale ends on 22nd August 23:59:59 IST
      const now = new Date();
      let targetDate = new Date(now.getFullYear(), 7, 22, 23, 59, 59); // August is month index 7

      // If today is past August 22 of current year, calculate from future or maintain 7-day relative display
      let diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        // Fallback for visual demonstration: 6 days 12 hours from current time
        const demoEnd = new Date(now.getTime() + (6 * 24 * 3600 + 12 * 3600 + 56 * 60 + 12) * 1000);
        diff = demoEnd.getTime() - now.getTime();
      }

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToProducts = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      if (window.location.hash === "#sip-check") {
        window.dispatchEvent(new Event("hashchange"));
      } else {
        window.location.hash = "sip-check";
      }
    }
  };

  const marqueeItem = "UPTO 35% OFF SITEWIDE";
  const repeatedMarquee = Array(12).fill(marqueeItem).join("  •  ");

  return (
    <div className="w-full relative mx-auto overflow-hidden bg-[#CCC6CD] text-[#161616] max-w-[1440px] max-md:w-[390px] max-md:min-h-[740px] md:h-[810px] flex flex-col justify-between">

      {/* ---------------------------------------------------- */}
      {/* 1. TOP CROSSED PINK PROMO RIBBONS                    */}
      {/* ---------------------------------------------------- */}
      <div className="absolute top-0 left-0 w-full max-md:h-[130px] md:h-[240px] pointer-events-none z-[25] overflow-hidden">
        {/* Behind Ribbon: +6.35deg */}
        <div
          className="absolute left-1/2 max-md:top-[30px] md:top-[45px] max-md:h-[32px] md:h-[50px] bg-[#a8005f] flex items-center select-none overflow-hidden z-[1]"
          style={{
            width: '2600px',
            transform: 'translateX(-50%) rotate(6.35deg)',
            transformOrigin: 'center center',
          }}
        >
          <div className="flex whitespace-nowrap animate-marquee-reverse">
            <span className="font-[family-name:var(--font-bebas)] text-white max-md:text-[15px] md:text-[23px] tracking-[0.06em] uppercase px-4 flex items-center">
              {repeatedMarquee} &nbsp; • &nbsp; {repeatedMarquee}
            </span>
          </div>
        </div>

        {/* Top/Front Ribbon: -8.4deg */}
        <div
          className="absolute left-1/2 max-md:top-[30px] md:top-[45px] max-md:h-[32px] md:h-[50px] bg-[#a8005f] flex items-center select-none overflow-hidden z-[2]"
          style={{
            width: '2600px',
            transform: 'translateX(-50%) rotate(-8.4deg)',
            transformOrigin: 'center center',
          }}
        >
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="font-[family-name:var(--font-bebas)] text-white max-md:text-[15px] md:text-[23px] tracking-[0.06em] uppercase px-4 flex items-center">
              {repeatedMarquee} &nbsp; • &nbsp; {repeatedMarquee}
            </span>
          </div>
        </div>
      </div>

      {/* ==================================================== */}
      {/* MOBILE BACKGROUND SVG (mobilesales.svg)              */}
      {/* ==================================================== */}
      <div className="md:hidden absolute inset-0 w-full h-full pointer-events-none z-[1] overflow-hidden">
        <Image
          src="/images/mobilesales.svg"
          alt="NAZR Women's Independence Sale"
          fill
          unoptimized
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ==================================================== */}
      {/* MOBILE LAYOUT (< md: 768px / 390px canvas)           */}
      {/* ==================================================== */}
      <div className="md:hidden relative z-[10] w-full min-h-[720px] flex flex-col justify-between items-center text-center pt-[92px] pb-[28px] px-3">

        {/* TOP BLOCK: TIMER + HEADLINE */}
        <div className="flex flex-col items-center w-full">
          {/* COUNTDOWN TIMER */}
          <div className="flex flex-col items-center mb-1.5">
            <span className="font-['Inter',_sans-serif] text-[#161616] font-normal text-[13.5px] leading-[130%] tracking-[-0.03em] mb-1.5">
              Sale ends in
            </span>

            <div className="flex items-center gap-[5px]">
              {/* Days */}
              <div className="w-[36px] h-[46px] bg-[#1E1E1E] text-[#FFF9EB] flex flex-col items-center justify-center rounded-[4px] shadow-sm">
                <span className="font-['Inter',_sans-serif] font-medium text-[19px] leading-none tracking-[-0.03em] text-[#FFF9EB]">
                  {mounted ? timeLeft.days : 6}
                </span>
                <span className="font-['Inter',_sans-serif] font-medium text-[9.5px] leading-none tracking-[-0.03em] text-[#FFF9EB] mt-0.5">
                  Days
                </span>
              </div>

              {/* Hrs */}
              <div className="w-[36px] h-[46px] bg-[#1E1E1E] text-[#FFF9EB] flex flex-col items-center justify-center rounded-[4px] shadow-sm">
                <span className="font-['Inter',_sans-serif] font-medium text-[19px] leading-none tracking-[-0.03em] text-[#FFF9EB]">
                  {mounted ? String(timeLeft.hours).padStart(2, '0') : '12'}
                </span>
                <span className="font-['Inter',_sans-serif] font-medium text-[9.5px] leading-none tracking-[-0.03em] text-[#FFF9EB] mt-0.5">
                  Hrs
                </span>
              </div>

              {/* Mins */}
              <div className="w-[36px] h-[46px] bg-[#1E1E1E] text-[#FFF9EB] flex flex-col items-center justify-center rounded-[4px] shadow-sm">
                <span className="font-['Inter',_sans-serif] font-medium text-[19px] leading-none tracking-[-0.03em] text-[#FFF9EB]">
                  {mounted ? String(timeLeft.minutes).padStart(2, '0') : '56'}
                </span>
                <span className="font-['Inter',_sans-serif] font-medium text-[9.5px] leading-none tracking-[-0.03em] text-[#FFF9EB] mt-0.5">
                  Mins
                </span>
              </div>

              {/* Sec */}
              <div className="w-[36px] h-[46px] bg-[#1E1E1E] text-[#FFF9EB] flex flex-col items-center justify-center rounded-[4px] shadow-sm">
                <span className="font-['Inter',_sans-serif] font-medium text-[19px] leading-none tracking-[-0.03em] text-[#FFF9EB]">
                  {mounted ? String(timeLeft.seconds).padStart(2, '0') : '12'}
                </span>
                <span className="font-['Inter',_sans-serif] font-medium text-[9.5px] leading-none tracking-[-0.03em] text-[#FFF9EB] mt-0.5">
                  Sec
                </span>
              </div>
            </div>
          </div>

          {/* HEADLINE */}
          <h1 className="font-[family-name:var(--font-bebas)] text-[#161616] font-normal text-[48px] leading-[88%] tracking-[-0.03em] uppercase my-2 select-none text-center">
            WOMEN&apos;S <br />
            INDEPENDENCE SALE
          </h1>
        </div>

        {/* MIDDLE SPACER: REVEALS CENTER MODELS FROM mobilesales.svg */}
        <div className="w-full flex-1 min-h-[260px] pointer-events-none" />

        {/* BOTTOM BLOCK: PARAGRAPH + CTA */}
        <div className="flex flex-col items-center w-full">
          {/* PARAGRAPH */}
          <p className="font-['Inter',_sans-serif] text-[#161616] text-[12px] leading-[140%] tracking-[-0.03em] max-w-[340px] px-2 mb-3 text-center">
            Independence means having the freedom to go where <br />
            you want, when you want. This Independence Day, make <br />
            preparedness part of it. Shop the <span className="font-semibold text-[#161616]">NAZR sale, 15 - 22 August.</span>
          </p>

          {/* CTA BUTTON */}
          <a
            href="#pepper-spray"
            onClick={handleScrollToProducts}
            className="inline-flex items-center justify-center bg-[#FF0E97] hover:bg-[#E50080] text-[#FFF1EB] transition-all duration-200 active:scale-[0.98] shadow-sm group px-4 cursor-pointer"
            style={{
              height: '38px',
              gap: '8px',
              borderRadius: '4.5px',
              border: '1px solid #FF0E97',
            }}
          >
            <svg
              width="18"
              height="12"
              viewBox="0 0 35 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#FFF1EB] shrink-0"
            >
              <path
                d="M33.3819 7.62744C33.2869 7.7107 33.1684 7.80134 33.0152 7.90883C31.7545 8.79569 30.1546 9.34741 28.4602 9.9318C25.5573 10.933 22.5555 11.9679 20.6471 14.8161C20.1564 15.5486 19.9687 16.291 20.1005 16.925C20.2926 16.613 20.4759 16.3311 20.7075 16.026L20.9298 15.733L21.1449 16.0307C21.8991 17.0757 23.061 17.6748 24.3328 17.6748C25.032 17.6748 25.7455 17.492 26.3954 17.1458C27.3707 16.6262 28.0239 15.8294 28.2352 14.9025C28.4421 13.9935 28.2044 13.0324 27.565 12.1972L27.3614 11.9316L29.5025 11.0863L29.6293 11.2255C30.7797 12.4917 31.1502 14.0721 30.7007 15.7968C30.2319 17.5947 28.7078 19.1239 26.7236 19.7879C25.9799 20.0366 25.2236 20.1626 24.4749 20.1626C23.4562 20.1626 22.4595 19.9344 21.5001 19.4828C21.926 19.936 22.4726 20.289 22.9836 20.5973C23.8355 21.1111 24.8394 21.3825 25.8866 21.3825C26.9338 21.3825 27.9157 21.1332 28.8362 20.6621C29.4756 20.3349 30.0387 19.9202 30.5585 19.3932C31.5421 18.3962 32.2227 17.1126 32.5279 15.6808C32.7737 14.5263 32.7189 13.8228 32.7178 13.8139C32.6338 12.7542 32.4329 11.8183 32.0855 10.8687C31.7885 10.0556 31.9214 9.42171 32.5169 8.81308C32.9241 8.39626 33.2117 8.00263 33.3808 7.62797L33.3819 7.62744ZM27.3954 13.8613L27.7599 13.9003C27.8466 13.9219 27.8312 14.012 27.7467 14.0088C27.1309 13.9877 26.9146 13.8755 26.6929 14.2043C26.6023 14.3382 26.5749 14.5621 26.7077 14.7608L27.2807 15.3515C27.284 15.5264 26.5095 14.7149 25.9761 15.1044C25.5276 15.4316 26.127 16.4565 25.9475 16.437L25.4744 15.7024C25.3915 15.5855 25.0836 15.5243 24.8717 15.596C24.3926 15.7588 24.4996 16.6615 24.4047 16.6425C24.2938 16.6272 24.4118 15.7825 24.0847 15.5596C23.9645 15.478 23.7685 15.5143 23.6664 15.6166L23.0034 16.2795C22.8179 16.3058 23.6143 15.4985 23.0281 15.0748C22.3634 14.5943 21.7739 15.3452 21.7372 15.1876L22.4748 14.5837C23.28 13.9245 23.785 15.8742 25.6572 14.7913C26.9915 14.0194 26.1314 12.3147 26.4492 12.556C26.4739 12.5745 26.5419 12.7304 26.5496 12.8079C26.5595 12.907 26.5743 13.0255 26.5875 13.103C26.6451 13.4355 26.8147 13.7817 27.3954 13.8602V13.8613Z"
                fill="currentColor"
              />
              <path
                d="M9.16005 10.7905L5.10284 9.29505C3.98206 8.88192 2.97764 8.49303 2.03579 7.91497C1.85795 7.80589 1.72348 7.66098 1.61426 7.50342C1.81953 8.04354 2.20868 8.4788 2.42822 8.69538C3.094 9.35144 3.25152 9.99748 2.95349 10.8554C2.5852 11.9177 2.38651 12.8541 2.32943 13.8047C2.32778 13.8295 2.16257 16.3061 3.21639 17.6968L3.27732 17.78L3.27512 17.7995C4.0331 19.139 5.06387 20.1091 6.42286 20.7631C7.26153 21.1667 8.1935 21.3802 9.11779 21.3802C10.4718 21.3802 11.7847 20.9259 12.8138 20.1012L12.8649 20.0607C13.1009 19.8715 13.3309 19.6876 13.5345 19.4852C12.5712 19.9353 11.5794 20.1629 10.5745 20.1629C9.80826 20.1629 9.02887 20.0291 8.25772 19.7645C6.38499 19.1222 4.9069 17.6752 4.39975 15.9868C3.8679 14.2168 4.2285 12.5268 5.41405 11.2295L5.54193 11.0893L7.68196 11.9593L7.47613 12.2228C6.86415 13.0069 6.61826 13.9175 6.78292 14.7864C6.95197 15.6801 7.53596 16.4727 8.42677 17.0175C9.13425 17.4502 9.92242 17.6794 10.7073 17.6794C11.9801 17.6794 13.1459 17.0744 13.905 16.0195L14.1383 15.6949L14.9363 16.9348C15.0241 16.4616 14.9528 15.9531 14.7211 15.4156C13.8199 13.3262 10.8692 11.4202 9.15895 10.79L9.16005 10.7905ZM12.237 15.4019C11.6508 15.8256 12.4472 16.6329 12.2617 16.6065L11.5987 15.9436C11.4966 15.8414 11.3006 15.8045 11.1804 15.8867C10.8533 16.1096 10.9708 16.9543 10.8604 16.9696C10.7655 16.9885 10.8725 16.0859 10.3933 15.923C10.1809 15.8509 9.87357 15.9125 9.79069 16.029L9.31757 16.7635C9.13809 16.7825 9.73745 15.7581 9.28903 15.4309C8.75554 15.0415 7.98109 15.853 7.98438 15.678L8.55739 15.0873C8.69077 14.8881 8.66278 14.6647 8.57221 14.5308C8.35047 14.202 8.13422 14.3143 7.51839 14.3353C7.43387 14.338 7.4185 14.2484 7.50522 14.2268L7.86967 14.1878C8.45037 14.1093 8.62051 13.7631 8.6776 13.4306C8.69077 13.3531 8.70559 13.2351 8.71547 13.1355C8.72315 13.058 8.79121 12.9026 8.81591 12.8836C9.13425 12.6417 8.27418 14.3469 9.60792 15.1189C11.4796 16.2018 11.9851 14.2526 12.7897 14.9113L13.5274 15.5152C13.4906 15.6722 12.9011 14.9213 12.2364 15.4024L12.237 15.4019Z"
                fill="currentColor"
              />
              <path
                d="M19.297 20.5166C19.9605 20.641 20.477 21.2849 20.4331 21.9447C20.3886 22.6192 19.8123 23.3074 18.9254 23.2916C18.8644 23.2905 18.8041 23.2879 18.7442 23.2837C18.4226 23.261 18.1679 23.1904 17.9824 23.0724C18.2969 23.3601 18.6833 23.5313 19.0906 23.5598C19.3765 23.5798 19.6609 23.5308 19.9353 23.4133C20.6433 23.1103 21.0176 22.4152 20.8458 21.7228C20.6894 21.0915 20.0714 20.6131 19.2964 20.5161L19.297 20.5166Z"
                fill="currentColor"
              />
              <path
                d="M19.4722 20.4089C19.8998 19.7618 19.2565 18.9919 18.5584 18.251C18.3394 18.0186 18.15 17.8178 18.0282 17.6392L17.9629 17.5422L17.9941 17.4305C19.0469 13.7002 21.806 10.7198 25.7628 9.03883C26.6541 8.66048 27.5334 8.3754 28.3842 8.09928C29.8386 7.62766 31.213 7.18239 32.5226 6.32504C34.6527 4.93072 35.4475 2.6506 34.7581 -0.000488281C33.3278 2.79815 30.9364 3.70398 28.197 4.74102C26.4516 5.40182 24.4729 6.15114 22.4866 7.50646C20.3054 8.9951 18.8224 10.988 18.1983 13.2703L17.7148 15.0398L17.189 15.006C16.5874 10.3214 13.752 7.35628 7.70842 5.09197L7.19853 4.90174C4.26155 3.80884 1.69726 2.85401 0.241119 0.0564225C-0.500946 2.86138 0.483717 5.24742 3.00301 6.67177C4.12818 7.3078 5.28683 7.67667 6.51409 8.06766C8.23863 8.61727 10.0213 9.18533 11.9907 10.5496C15.0171 12.6463 16.0967 14.5992 17.0298 17.4701L17.0753 17.6092L15.9205 18.8538C15.3662 19.4514 15.2663 20.2012 15.6467 20.9121C16.2158 21.9765 16.8393 22.9662 17.498 23.999L19.4722 20.4078V20.4089Z"
                fill="currentColor"
              />
            </svg>
            <span
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: '14.5px',
                lineHeight: '150%',
                color: '#FFF1EB',
              }}
            >
              Shop Sale
            </span>
          </a>
        </div>
      </div>

      {/* ==================================================== */}
      {/* DESKTOP LAYOUT (>= md: 768px / 1440px canvas)        */}
      {/* ==================================================== */}
      <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-[1] overflow-hidden">
        <div className="relative w-full h-full translate-x-[30px] md:translate-x-[75px]">
          <Image
            src="/images/salehero.svg"
            alt="NAZR Women's Independence Sale"
            fill
            unoptimized
            priority
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="hidden md:flex relative z-[10] w-full h-full flex-col justify-center pl-[40px] md:pl-[40px] pr-4 max-md:pt-[110px] md:pt-[130px] max-md:pb-[36px] md:pb-[48px] max-w-[690px]">

        {/* COUNTDOWN TIMER SECTION */}
        <div className="flex flex-col mb-2 md:mb-3">
          {/* "Sale ends in" text */}
          <span
            className="font-['Inter',_sans-serif] text-[#161616] font-normal max-md:text-[18px] md:text-[26px] leading-[130%] tracking-[-0.03em] mb-2"
            style={{
              // @ts-ignore
              leadingTrim: 'cap-height',
            }}
          >
            Sale ends in
          </span>

          {/* 4 Timer Boxes (Days, Hrs, Mins, Sec) */}
          <div className="flex items-center gap-[8px] md:gap-[10px]">
            {/* Days Box */}
            <div
              className="bg-[#1E1E1E] text-[#FFF9EB] flex flex-col items-center justify-center rounded-[6.17px] shadow-sm"
              style={{
                width: '57.04px',
                height: '74.76px',
              }}
            >
              <span className="font-['Inter',_sans-serif] font-medium text-[30.83px] leading-none tracking-[-0.03em] text-[#FFF9EB] text-center">
                {mounted ? timeLeft.days : 6}
              </span>
              <span className="font-['Inter',_sans-serif] font-medium text-[15.42px] leading-none tracking-[-0.03em] text-[#FFF9EB] text-center mt-1">
                Days
              </span>
            </div>

            {/* Hrs Box */}
            <div
              className="bg-[#1E1E1E] text-[#FFF9EB] flex flex-col items-center justify-center rounded-[6.17px] shadow-sm"
              style={{
                width: '57.04px',
                height: '74.76px',
              }}
            >
              <span className="font-['Inter',_sans-serif] font-medium text-[30.83px] leading-none tracking-[-0.03em] text-[#FFF9EB] text-center">
                {mounted ? String(timeLeft.hours).padStart(2, '0') : '12'}
              </span>
              <span className="font-['Inter',_sans-serif] font-medium text-[15.42px] leading-none tracking-[-0.03em] text-[#FFF9EB] text-center mt-1">
                Hrs
              </span>
            </div>

            {/* Mins Box */}
            <div
              className="bg-[#1E1E1E] text-[#FFF9EB] flex flex-col items-center justify-center rounded-[6.17px] shadow-sm"
              style={{
                width: '57.04px',
                height: '74.76px',
              }}
            >
              <span className="font-['Inter',_sans-serif] font-medium text-[30.83px] leading-none tracking-[-0.03em] text-[#FFF9EB] text-center">
                {mounted ? String(timeLeft.minutes).padStart(2, '0') : '56'}
              </span>
              <span className="font-['Inter',_sans-serif] font-medium text-[15.42px] leading-none tracking-[-0.03em] text-[#FFF9EB] text-center mt-1">
                Mins
              </span>
            </div>

            {/* Sec Box */}
            <div
              className="bg-[#1E1E1E] text-[#FFF9EB] flex flex-col items-center justify-center rounded-[6.17px] shadow-sm"
              style={{
                width: '57.04px',
                height: '74.76px',
              }}
            >
              <span className="font-['Inter',_sans-serif] font-medium text-[30.83px] leading-none tracking-[-0.03em] text-[#FFF9EB] text-center">
                {mounted ? String(timeLeft.seconds).padStart(2, '0') : '12'}
              </span>
              <span className="font-['Inter',_sans-serif] font-medium text-[15.42px] leading-none tracking-[-0.03em] text-[#FFF9EB] text-center mt-1">
                Sec
              </span>
            </div>
          </div>
        </div>

        {/* HEADLINE: WOMEN'S INDEPENDENCE SALE (Matching 689x192 Figma Box) */}
        <h1
          className="font-[family-name:var(--font-bebas)] text-[#161616] font-normal max-md:text-[46px] md:text-[88px] lg:text-[94px] leading-[90%] tracking-[-0.03em] uppercase my-2 md:my-3 select-none"
          style={{
            // @ts-ignore
            leadingTrim: 'cap-height',
          }}
        >
          WOMEN&apos;S <br />
          INDEPENDENCE SALE
        </h1>

        {/* PARAGRAPH DESCRIPTION */}
        <p
          className="font-['Inter',_sans-serif] text-[#161616] max-md:text-[14px] md:text-[17px] lg:text-[18px] leading-[140%] tracking-[-0.03em] max-w-[560px] mb-4 md:mb-6"
        >
          Independence means having the freedom to go where you want, <br className="max-md:hidden" />
          when you want. This Independence Day, make preparedness part of <br className="max-md:hidden" />
          it. Shop the <span className="font-semibold text-[#161616]">NAZR sale, 15 - 22 August.</span>
        </p>

        {/* CTA BUTTON: Shop Sale */}
        <div>
          <a
            href="#pepper-spray"
            onClick={handleScrollToProducts}
            className="inline-flex items-center justify-center bg-[#FF0E97] hover:bg-[#E50080] text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm group cursor-pointer"
            style={{
              width: '199.25px',
              height: '51.69px',
              paddingTop: '10.34px',
              paddingBottom: '10.34px',
              paddingLeft: '25.84px',
              paddingRight: '25.84px',
              gap: '10.34px',
              borderRadius: '5.17px',
              border: '1.29px solid #FF0E97',
            }}
          >
            {/* NAZR Owl Icon */}
            <svg
              width="26"
              height="18"
              viewBox="0 0 35 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#FFF1EB] shrink-0 transition-transform duration-200 group-hover:scale-110"
            >
              <path
                d="M33.3819 7.62744C33.2869 7.7107 33.1684 7.80134 33.0152 7.90883C31.7545 8.79569 30.1546 9.34741 28.4602 9.9318C25.5573 10.933 22.5555 11.9679 20.6471 14.8161C20.1564 15.5486 19.9687 16.291 20.1005 16.925C20.2926 16.613 20.4759 16.3311 20.7075 16.026L20.9298 15.733L21.1449 16.0307C21.8991 17.0757 23.061 17.6748 24.3328 17.6748C25.032 17.6748 25.7455 17.492 26.3954 17.1458C27.3707 16.6262 28.0239 15.8294 28.2352 14.9025C28.4421 13.9935 28.2044 13.0324 27.565 12.1972L27.3614 11.9316L29.5025 11.0863L29.6293 11.2255C30.7797 12.4917 31.1502 14.0721 30.7007 15.7968C30.2319 17.5947 28.7078 19.1239 26.7236 19.7879C25.9799 20.0366 25.2236 20.1626 24.4749 20.1626C23.4562 20.1626 22.4595 19.9344 21.5001 19.4828C21.926 19.936 22.4726 20.289 22.9836 20.5973C23.8355 21.1111 24.8394 21.3825 25.8866 21.3825C26.9338 21.3825 27.9157 21.1332 28.8362 20.6621C29.4756 20.3349 30.0387 19.9202 30.5585 19.3932C31.5421 18.3962 32.2227 17.1126 32.5279 15.6808C32.7737 14.5263 32.7189 13.8228 32.7178 13.8139C32.6338 12.7542 32.4329 11.8183 32.0855 10.8687C31.7885 10.0556 31.9214 9.42171 32.5169 8.81308C32.9241 8.39626 33.2117 8.00263 33.3808 7.62797L33.3819 7.62744ZM27.3954 13.8613L27.7599 13.9003C27.8466 13.9219 27.8312 14.012 27.7467 14.0088C27.1309 13.9877 26.9146 13.8755 26.6929 14.2043C26.6023 14.3382 26.5749 14.5621 26.7077 14.7608L27.2807 15.3515C27.284 15.5264 26.5095 14.7149 25.9761 15.1044C25.5276 15.4316 26.127 16.4565 25.9475 16.437L25.4744 15.7024C25.3915 15.5855 25.0836 15.5243 24.8717 15.596C24.3926 15.7588 24.4996 16.6615 24.4047 16.6425C24.2938 16.6272 24.4118 15.7825 24.0847 15.5596C23.9645 15.478 23.7685 15.5143 23.6664 15.6166L23.0034 16.2795C22.8179 16.3058 23.6143 15.4985 23.0281 15.0748C22.3634 14.5943 21.7739 15.3452 21.7372 15.1876L22.4748 14.5837C23.28 13.9245 23.785 15.8742 25.6572 14.7913C26.9915 14.0194 26.1314 12.3147 26.4492 12.556C26.4739 12.5745 26.5419 12.7304 26.5496 12.8079C26.5595 12.907 26.5743 13.0255 26.5875 13.103C26.6451 13.4355 26.8147 13.7817 27.3954 13.8602V13.8613Z"
                fill="currentColor"
              />
              <path
                d="M9.16005 10.7905L5.10284 9.29505C3.98206 8.88192 2.97764 8.49303 2.03579 7.91497C1.85795 7.80589 1.72348 7.66098 1.61426 7.50342C1.81953 8.04354 2.20868 8.4788 2.42822 8.69538C3.094 9.35144 3.25152 9.99748 2.95349 10.8554C2.5852 11.9177 2.38651 12.8541 2.32943 13.8047C2.32778 13.8295 2.16257 16.3061 3.21639 17.6968L3.27732 17.78L3.27512 17.7995C4.0331 19.139 5.06387 20.1091 6.42286 20.7631C7.26153 21.1667 8.1935 21.3802 9.11779 21.3802C10.4718 21.3802 11.7847 20.9259 12.8138 20.1012L12.8649 20.0607C13.1009 19.8715 13.3309 19.6876 13.5345 19.4852C12.5712 19.9353 11.5794 20.1629 10.5745 20.1629C9.80826 20.1629 9.02887 20.0291 8.25772 19.7645C6.38499 19.1222 4.9069 17.6752 4.39975 15.9868C3.8679 14.2168 4.2285 12.5268 5.41405 11.2295L5.54193 11.0893L7.68196 11.9593L7.47613 12.2228C6.86415 13.0069 6.61826 13.9175 6.78292 14.7864C6.95197 15.6801 7.53596 16.4727 8.42677 17.0175C9.13425 17.4502 9.92242 17.6794 10.7073 17.6794C11.9801 17.6794 13.1459 17.0744 13.905 16.0195L14.1383 15.6949L14.9363 16.9348C15.0241 16.4616 14.9528 15.9531 14.7211 15.4156C13.8199 13.3262 10.8692 11.4202 9.15895 10.79L9.16005 10.7905ZM12.237 15.4019C11.6508 15.8256 12.4472 16.6329 12.2617 16.6065L11.5987 15.9436C11.4966 15.8414 11.3006 15.8045 11.1804 15.8867C10.8533 16.1096 10.9708 16.9543 10.8604 16.9696C10.7655 16.9885 10.8725 16.0859 10.3933 15.923C10.1809 15.8509 9.87357 15.9125 9.79069 16.029L9.31757 16.7635C9.13809 16.7825 9.73745 15.7581 9.28903 15.4309C8.75554 15.0415 7.98109 15.853 7.98438 15.678L8.55739 15.0873C8.69077 14.8881 8.66278 14.6647 8.57221 14.5308C8.35047 14.202 8.13422 14.3143 7.51839 14.3353C7.43387 14.338 7.4185 14.2484 7.50522 14.2268L7.86967 14.1878C8.45037 14.1093 8.62051 13.7631 8.6776 13.4306C8.69077 13.3531 8.70559 13.2351 8.71547 13.1355C8.72315 13.058 8.79121 12.9026 8.81591 12.8836C9.13425 12.6417 8.27418 14.3469 9.60792 15.1189C11.4796 16.2018 11.9851 14.2526 12.7897 14.9113L13.5274 15.5152C13.4906 15.6722 12.9011 14.9213 12.2364 15.4024L12.237 15.4019Z"
                fill="currentColor"
              />
              <path
                d="M19.297 20.5166C19.9605 20.641 20.477 21.2849 20.4331 21.9447C20.3886 22.6192 19.8123 23.3074 18.9254 23.2916C18.8644 23.2905 18.8041 23.2879 18.7442 23.2837C18.4226 23.261 18.1679 23.1904 17.9824 23.0724C18.2969 23.3601 18.6833 23.5313 19.0906 23.5598C19.3765 23.5798 19.6609 23.5308 19.9353 23.4133C20.6433 23.1103 21.0176 22.4152 20.8458 21.7228C20.6894 21.0915 20.0714 20.6131 19.2964 20.5161L19.297 20.5166Z"
                fill="currentColor"
              />
              <path
                d="M19.4722 20.4089C19.8998 19.7618 19.2565 18.9919 18.5584 18.251C18.3394 18.0186 18.15 17.8178 18.0282 17.6392L17.9629 17.5422L17.9941 17.4305C19.0469 13.7002 21.806 10.7198 25.7628 9.03883C26.6541 8.66048 27.5334 8.3754 28.3842 8.09928C29.8386 7.62766 31.213 7.18239 32.5226 6.32504C34.6527 4.93072 35.4475 2.6506 34.7581 -0.000488281C33.3278 2.79815 30.9364 3.70398 28.197 4.74102C26.4516 5.40182 24.4729 6.15114 22.4866 7.50646C20.3054 8.9951 18.8224 10.988 18.1983 13.2703L17.7148 15.0398L17.189 15.006C16.5874 10.3214 13.752 7.35628 7.70842 5.09197L7.19853 4.90174C4.26155 3.80884 1.69726 2.85401 0.241119 0.0564225C-0.500946 2.86138 0.483717 5.24742 3.00301 6.67177C4.12818 7.3078 5.28683 7.67667 6.51409 8.06766C8.23863 8.61727 10.0213 9.18533 11.9907 10.5496C15.0171 12.6463 16.0967 14.5992 17.0298 17.4701L17.0753 17.6092L15.9205 18.8538C15.3662 19.4514 15.2663 20.2012 15.6467 20.9121C16.2158 21.9765 16.8393 22.9662 17.498 23.999L19.4722 20.4078V20.4089Z"
                fill="currentColor"
              />
            </svg>

            {/* "Shop Sale" Text */}
            <span
              className="text-[#FFF1EB] select-none whitespace-nowrap"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: '20.68px',
                lineHeight: '150%',
                letterSpacing: '0%',
                color: '#FFF1EB',
              }}
            >
              Shop Sale
            </span>
          </a>
        </div>

      </div>

    </div>
  );
}
