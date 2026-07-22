"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export function SafetyHabits() {
  const [triggerAnimData, setTriggerAnimData] = useState<any>(null);
  const [armAnimData, setArmAnimData] = useState<any>(null);
  const [trustedAnimData, setTrustedAnimData] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch("/images/Trigger.json")
      .then((res) => res.json())
      .then((data) => setTriggerAnimData(data))
      .catch((err) => console.error("Error loading Trigger Lottie:", err));

    fetch("/images/SM ARM-Turn On.json")
      .then((res) => res.json())
      .then((data) => setArmAnimData(data))
      .catch((err) => console.error("Error loading SM ARM-Turn On Lottie:", err));

    fetch("/images/Trusted Circle.json")
      .then((res) => res.json())
      .then((data) => setTrustedAnimData(data))
      .catch((err) => console.error("Error loading Trusted Circle Lottie:", err));
  }, []);

  return (
    <section className="w-full bg-[#161616] flex justify-center py-10 md:pt-[60px] md:pb-[60px] md:px-[30px] overflow-visible relative z-20 md:h-[987px]">
      <div className="w-full max-w-[1220px] px-4 md:px-0 flex flex-col items-center gap-[40px] relative md:h-[867px]">

        {/* Title Block */}
        <div className="w-full flex flex-col items-center md:gap-[32px] md:w-[746px] md:h-[234px]">
          <h2
            className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] text-[clamp(45px,10vw,100px)] text-center w-full md:h-[159px] m-0"
            style={{ lineHeight: "0.9", letterSpacing: "-0.03em" }}
          >
            THE SAFETY HABITS YOU<br />
            ALREADY HAVE. UPGRADED.
          </h2>
          <p
            className="text-[#FFF9EB] text-center font-['Inter',_sans-serif] text-[16px] md:text-[20px] max-w-[601px] md:h-[43px] m-0 mt-4 md:mt-0"
            style={{ lineHeight: "1.4", letterSpacing: "-0.03em" }}
          >
            Designed around the routines women already<br className="block md:hidden" />{" "}
            rely on, with smarter <br className="hidden md:block" />tools to keep every<br className="block md:hidden" />{" "}
            journey connected, informed, and secure.
          </p>
        </div>

        {/* Cards Container */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0 md:h-[593px] md:w-[1220px]">

          {/* Card 1: EMERGENCY SOS */}
          <div className="w-full max-w-[379px] md:w-[378.66px] md:h-[593px] flex flex-col gap-[32px] md:py-[2px]">
            {/* Image Box */}
            <div
              className="relative w-full h-[441px] rounded-[24px] overflow-hidden shrink-0 shadow-lg flex items-center justify-center p-2"
              style={{ background: "linear-gradient(152.75deg, #FFF9EB 3.64%, rgba(211, 176, 94, 0.5) 302.87%)" }}
            >
              {mounted && triggerAnimData ? (
                <Lottie
                  key="trigger-lottie-habit"
                  animationData={triggerAnimData}
                  loop={true}
                  className="w-full h-full object-contain drop-shadow-2xl scale-[0.88] transform-gpu"
                />
              ) : (
                <div className="w-full h-full bg-transparent" />
              )}
            </div>
            {/* Text */}
            <div className="flex flex-col gap-[16px] px-[16px]">
              <h3 className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] text-[32px] leading-[0.9] tracking-[-0.03em] m-0 w-full md:w-[346.66px] md:h-[22px]">
                EMERGENCY SOS
              </h3>
              <p className="text-[#FFF9EB] font-['Inter',_sans-serif] text-[16px] leading-[1.4] tracking-[-0.03em] m-0 w-full md:w-[346.66px] md:h-[78px]">
                Connects you to your support network with real-time location sharing, emergency alerts, and quick access to critical support services when you need them most.
              </p>
            </div>
          </div>

          {/* Card 2: SHIELD MODE */}
          <div className="w-full max-w-[379px] md:w-[378.66px] md:h-[593px] flex flex-col gap-[32px] md:py-[2px]">
            {/* Image Box */}
            <div className="relative w-full h-[441px] rounded-[24px] overflow-hidden shrink-0 shadow-lg bg-[#111111] flex items-center justify-center p-2">
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "linear-gradient(0deg, #FFF9EB 0%, rgba(139, 105, 25, 0.7) 100%)" }}></div>
              {mounted && armAnimData ? (
                <Lottie
                  key="arm-lottie-habit"
                  animationData={armAnimData}
                  loop={true}
                  className="w-full h-full object-contain drop-shadow-2xl scale-[1.25] transform-gpu z-10"
                />
              ) : (
                <div className="w-full h-full bg-transparent" />
              )}
            </div>
            {/* Text */}
            <div className="flex flex-col gap-[16px] px-[16px]">
              <h3 className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] text-[32px] leading-[0.9] tracking-[-0.03em] m-0 w-full md:w-[346.66px] md:h-[22px]">
                SHIELD MODE
              </h3>
              <p className="text-[#FFF9EB] font-['Inter',_sans-serif] text-[16px] leading-[1.4] tracking-[-0.03em] m-0 w-full md:w-[346.66px] md:h-[78px]">
                Designed for the ride home, the late-night cab, and every journey in between. Shield Mode keeps you supported, so you never have to navigate a journey alone.
              </p>
            </div>
          </div>

          {/* Card 3: TRUSTED CIRCLE */}
          <div className="w-full max-w-[379px] md:w-[378.66px] md:h-[593px] flex flex-col gap-[32px] md:py-[2px]">
            {/* Image Box */}
            <div
              className="relative w-full h-[441px] rounded-[24px] overflow-hidden shrink-0 shadow-lg flex items-center justify-center p-2"
              style={{ background: "linear-gradient(152.75deg, #FFF9EB 3.64%, rgba(211, 176, 94, 0.5) 302.87%)" }}
            >
              {mounted && trustedAnimData ? (
                <Lottie
                  key="trusted-lottie-habit"
                  animationData={trustedAnimData}
                  loop={true}
                  className="w-full h-full object-contain drop-shadow-2xl scale-[1.25] transform-gpu"
                />
              ) : (
                <div className="w-full h-full bg-transparent" />
              )}
            </div>
            {/* Text */}
            <div className="flex flex-col gap-[16px] px-[16px]">
              <h3 className="text-[#FFF9EB] font-[family-name:var(--font-bebas)] text-[32px] leading-[0.9] tracking-[-0.03em] m-0 w-full md:w-[346.66px] md:h-[22px]">
                TRUSTED CIRCLE
              </h3>
              <p className="text-[#FFF9EB] font-['Inter',_sans-serif] text-[16px] leading-[1.4] tracking-[-0.03em] m-0 w-full md:w-[346.66px] md:h-[78px]">
                Your safety network, built around the people you trust most. Receive support through SOS alerts, journey updates, and automated check-ins.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
