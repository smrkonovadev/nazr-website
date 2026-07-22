"use client";

import Image from "next/image";
import { motion, useTransform, useMotionValue, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";

export function TriggerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const vid1Ref = useRef<HTMLVideoElement>(null);
  const vid2Ref = useRef<HTMLVideoElement>(null);
  const vid3Ref = useRef<HTMLVideoElement>(null);
  const vid4Ref = useRef<HTMLVideoElement>(null);
  const vid5Ref = useRef<HTMLVideoElement>(null);

  const [armAnimData, setArmAnimData] = useState<any>(null);
  const [journeyAnimData, setJourneyAnimData] = useState<any>(null);
  const [broadcastAnimData, setBroadcastAnimData] = useState<any>(null);
  const [guardianAnimData, setGuardianAnimData] = useState<any>(null);
  const [actionAnimData, setActionAnimData] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch("/images/SM ARM-Turn On.json")
      .then((res) => res.json())
      .then((data) => setArmAnimData(data))
      .catch((err) => console.error("Error loading SM ARM-Turn On Lottie:", err));

    fetch("/images/User Journey.json")
      .then((res) => res.json())
      .then((data) => setJourneyAnimData(data))
      .catch((err) => console.error("Error loading User Journey Lottie:", err));

    fetch("/images/Broadcast Fires.json")
      .then((res) => res.json())
      .then((data) => setBroadcastAnimData(data))
      .catch((err) => console.error("Error loading Broadcast Fires Lottie:", err));

    fetch("/images/Gaurdian Alert.json")
      .then((res) => res.json())
      .then((data) => setGuardianAnimData(data))
      .catch((err) => console.error("Error loading Gaurdian Alert Lottie:", err));

    fetch("/images/Take Action.json")
      .then((res) => res.json())
      .then((data) => setActionAnimData(data))
      .catch((err) => console.error("Error loading Take Action Lottie:", err));
  }, []);

  const rawScrollYProgress = useMotionValue(0);

  // Real-time viewport center progress calculation (100% bi-directional forward & reverse up to y=1820px)
  useEffect(() => {
    let animationFrameId: number;

    const updateScrollProgress = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportCenter = window.innerHeight * 0.5;
        // Calculate distance from top of section to viewport center relative to total line length (1820px)
        const relativeY = viewportCenter - rect.top;
        const progress = Math.max(0, Math.min(1, relativeY / 1820));
        rawScrollYProgress.set(progress);
      }
      animationFrameId = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);
    updateScrollProgress();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, [rawScrollYProgress]);

  // Track scroll progress specifically for the mobile line
  const mobileLineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mobileLineProgress } = useScroll({
    target: mobileLineRef,
    offset: ["start center", "end center"]
  });

  // --- FIRST BLACK SOS BUTTON ANIMATIONS (y = 450px -> 450/1820 = 0.247) ---
  const blackButtonScale = useTransform(rawScrollYProgress, [0.17, 0.25], [0.8, 1]);
  const blackButtonGlowOpacity = useTransform(rawScrollYProgress, [0.20, 0.25], [0, 1]);
  const blackButtonBg = useTransform(rawScrollYProgress, [0.20, 0.25], ["#161616", "#FF0E97"]);
  const ringsOpacity1 = useTransform(rawScrollYProgress, [0.20, 0.25], [0, 0.4]);
  const ringsOpacity2 = useTransform(rawScrollYProgress, [0.20, 0.25], [0, 0.2]);
  const ringsOpacity3 = useTransform(rawScrollYProgress, [0.20, 0.25], [0, 0.1]);

  // --- THIRD BLACK SOS BUTTON ANIMATIONS (y = 950px -> 950/1820 = 0.522) ---
  const thirdButtonScale = useTransform(rawScrollYProgress, [0.44, 0.52], [0.8, 1]);
  const thirdButtonGlowOpacity = useTransform(rawScrollYProgress, [0.47, 0.52], [0, 1]);
  const thirdButtonBg = useTransform(rawScrollYProgress, [0.47, 0.52], ["#161616", "#FF0E97"]);
  const thirdRingsOpacity1 = useTransform(rawScrollYProgress, [0.47, 0.52], [0, 0.4]);
  const thirdRingsOpacity2 = useTransform(rawScrollYProgress, [0.47, 0.52], [0, 0.2]);
  const thirdRingsOpacity3 = useTransform(rawScrollYProgress, [0.47, 0.52], [0, 0.1]);

  // --- FOURTH BLACK SOS BUTTON ANIMATIONS (y = 1420px -> 1420/1820 = 0.780) ---
  const fourthButtonScale = useTransform(rawScrollYProgress, [0.70, 0.78], [0.8, 1]);
  const fourthButtonGlowOpacity = useTransform(rawScrollYProgress, [0.73, 0.78], [0, 1]);
  const fourthButtonBg = useTransform(rawScrollYProgress, [0.73, 0.78], ["#161616", "#FF0E97"]);
  const fourthRingsOpacity1 = useTransform(rawScrollYProgress, [0.73, 0.78], [0, 0.4]);
  const fourthRingsOpacity2 = useTransform(rawScrollYProgress, [0.73, 0.78], [0, 0.2]);
  const fourthRingsOpacity3 = useTransform(rawScrollYProgress, [0.73, 0.78], [0, 0.1]);

  // --- FIFTH BLACK SOS BUTTON ANIMATIONS (y = 1820px -> 1820/1820 = 1.000) ---
  const fifthButtonScale = useTransform(rawScrollYProgress, [0.92, 0.99], [0.8, 1]);
  const fifthButtonGlowOpacity = useTransform(rawScrollYProgress, [0.95, 0.99], [0, 1]);
  const fifthButtonBg = useTransform(rawScrollYProgress, [0.95, 0.99], ["#161616", "#FF0E97"]);
  const fifthRingsOpacity1 = useTransform(rawScrollYProgress, [0.95, 0.99], [0, 0.4]);
  const fifthRingsOpacity2 = useTransform(rawScrollYProgress, [0.95, 0.99], [0, 0.2]);
  const fifthRingsOpacity3 = useTransform(rawScrollYProgress, [0.95, 0.99], [0, 0.1]);

  // --- CONTENT OPACITIES (Phones and Text) ---
  const section1Opacity = useTransform(rawScrollYProgress, [0, 0.05], [0.3, 1]);
  const section2Opacity = useTransform(rawScrollYProgress, [0.17, 0.25], [0.3, 1]);
  const section3Opacity = useTransform(rawScrollYProgress, [0.42, 0.52], [0.3, 1]);
  const section4Opacity = useTransform(rawScrollYProgress, [0.68, 0.78], [0.3, 1]);
  const section5Opacity = useTransform(rawScrollYProgress, [0.88, 0.98], [0.3, 1]);

  return (
    <section ref={sectionRef} className="w-full relative z-[99] min-h-[2100px] pt-20 pb-0 overflow-x-clip overflow-y-visible flex justify-center">
      {/* 1200px wide Track Container for perfect absolute positioning */}
      <div className="relative w-[1200px] h-[2100px] shrink-0 hidden md:block transform translate-x-[100px]">

        {/* Connecting SVG Line */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1200 2100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Base Dotted Black Line */}
            <path
              d="M 500 0 L 500 300 L 550 450 L 600 600 L 600 950 L 400 1290 L 400 1620 L 600 1820"
              stroke="#161616"
              strokeWidth="1.5"
              strokeDasharray="3 4"
            />
            {/* Animated Solid Pink Line */}
            <motion.path
              d="M 500 0 L 500 300 L 550 450 L 600 600 L 600 950 L 400 1290 L 400 1620 L 600 1820"
              stroke="#FF0E97"
              strokeWidth="1.5"
              style={{ pathLength: rawScrollYProgress }}
            />
          </svg>
        </div>

        {/* Top Phone Mockup */}
        <motion.div className="absolute left-[-110px] top-[-110px] w-[198px] h-[401px] z-10" style={{ opacity: section1Opacity }}>
          {mounted && armAnimData ? (
            <Lottie
              key="arm-lottie"
              animationData={armAnimData}
              loop={true}
              className="w-full h-full object-contain drop-shadow-2xl opacity-100 rotate-0 scale-[1.25] transform-gpu"
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
            />
          ) : (
            <div className="w-full h-full bg-transparent" />
          )}
        </motion.div>

        {/* TRIGGER Text */}
        <motion.div className="absolute left-[115px] top-[-50px] w-[240px] flex flex-col gap-1 z-10" style={{ opacity: section1Opacity }}>
          <h2 className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] text-[40px] leading-[90%] tracking-[-0.03em]">
            One Tap. Immediate Response.
          </h2>
          <p className="m-0 text-[#161616] font-sans text-[16px] leading-[140%] tracking-[-0.03em]">
            Trigger SOS with a single tap. NAZR shares critical information with your Trusted Circle instantly with a 5-second window to cancel.
          </p>
        </motion.div>

        {/* Top Pink SOS Circle */}
        <div className="absolute left-[500px] top-[0] transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="absolute inset-0 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ animationDuration: '2s', opacity: 0.6 }}></div>
          <div className="absolute -inset-4 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ animationDuration: '2.5s', opacity: 0.4 }}></div>
          <div className="absolute -inset-8 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ animationDuration: '3s', opacity: 0.2 }}></div>
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-[#FF0E97] blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[130px] h-[130px] rounded-full bg-[#FF0E97] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,14,151,0.8)] "
          >
            <span className="text-white font-[family-name:var(--font-bebas)] text-4xl leading-none tracking-wide">SOS</span>
            <span className="text-white font-sans text-xs font-medium tracking-widest mt-1">TAP</span>
          </motion.div>
        </div>

        {/* First Black SOS Circle */}
        <div className="absolute left-[550px] top-[450px] transform -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div className="absolute inset-0 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ opacity: ringsOpacity1, animationDuration: '2s' }}></motion.div>
          <motion.div className="absolute -inset-4 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ opacity: ringsOpacity2, animationDuration: '2.5s' }}></motion.div>
          <motion.div className="absolute -inset-8 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ opacity: ringsOpacity3, animationDuration: '3s' }}></motion.div>
          <motion.div className="absolute inset-0 rounded-full bg-[#FF0E97] blur-2xl" style={{ opacity: blackButtonGlowOpacity }} />

          <motion.div
            className="relative w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center shadow-2xl"
            style={{ backgroundColor: blackButtonBg, scale: blackButtonScale }}
          >
            <span className="text-white font-[family-name:var(--font-bebas)] text-3xl leading-none tracking-wide">SOS</span>
            <span className="text-white font-sans text-xs font-medium tracking-widest mt-1">TAP</span>
          </motion.div>
        </div>

        {/* Second Phone Mockup */}
        <motion.div className="absolute left-[670px] top-[300px] w-[198px] h-[401px] z-10" style={{ opacity: section2Opacity }}>
          {mounted && journeyAnimData ? (
            <Lottie
              key="journey-lottie"
              animationData={journeyAnimData}
              loop={true}
              className="w-full h-full object-contain drop-shadow-2xl opacity-100 rotate-0"
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
            />
          ) : (
            <video
              ref={vid2Ref}
              loop
              muted
              playsInline
              className="object-contain drop-shadow-2xl w-full h-full"
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
              <source src="/images/vid4.mp4" type="video/mp4" />
            </video>
          )}
        </motion.div>

        {/* CANCEL WINDOW Text */}
        <motion.div className="absolute left-[895px] top-[403px] w-[240px] flex flex-col gap-1 z-10" style={{ opacity: section2Opacity }}>
          <h2 className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] text-[40px] leading-[90%] tracking-[-0.03em]">
            SOS JOURNEY
          </h2>
          <p className="m-0 text-[#161616] font-sans text-[16px] leading-[140%] tracking-[-0.03em]">
            After activation, NAZR guides you through every stage, from alerting your Trusted Circle to giving you quick access to emergency services.
          </p>
        </motion.div>

        {/* Third Phone Mockup (Working in the background / Broadcast Fires) */}
        <motion.div className="absolute left-[40px] top-[800px] w-[198px] h-[401px] z-10" style={{ opacity: section3Opacity }}>
          {mounted && broadcastAnimData ? (
            <Lottie
              key="broadcast-lottie"
              animationData={broadcastAnimData}
              loop={true}
              className="w-full h-full object-contain drop-shadow-2xl opacity-100 rotate-0 scale-[1.25] transform-gpu"
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
            />
          ) : (
            <video
              ref={vid3Ref}
              loop
              muted
              playsInline
              className="object-contain drop-shadow-2xl w-full h-full"
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
              <source src="/images/vid5.mp4" type="video/mp4" />
            </video>
          )}
        </motion.div>

        {/* BROADCAST FIRES Text */}
        <motion.div className="absolute left-[260px] top-[900px] w-[250px] flex flex-col gap-1 z-10" style={{ opacity: section3Opacity }}>
          <h2 className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] text-[40px] leading-[90%] tracking-[-0.03em]">
            Working in the bACKGROUND
          </h2>
          <p className="m-0 text-[#161616] font-sans text-[16px] leading-[140%] tracking-[-0.03em]">
            The moment SOS is triggered, your live location is shared while your audio and key details are recorded for faster response.
          </p>
        </motion.div>

        {/* Third Black SOS Circle (Right Side) */}
        <div className="absolute left-[600px] top-[950px] transform -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div className="absolute inset-0 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ opacity: thirdRingsOpacity1, animationDuration: '2s' }}></motion.div>
          <motion.div className="absolute -inset-4 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ opacity: thirdRingsOpacity2, animationDuration: '2.5s' }}></motion.div>
          <motion.div className="absolute -inset-8 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ opacity: thirdRingsOpacity3, animationDuration: '3s' }}></motion.div>
          <motion.div className="absolute inset-0 rounded-full bg-[#FF0E97] blur-2xl" style={{ opacity: thirdButtonGlowOpacity }} />

          <motion.div
            className="relative w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center shadow-2xl"
            style={{ backgroundColor: thirdButtonBg, scale: thirdButtonScale }}
          >
            <span className="text-white font-[family-name:var(--font-bebas)] text-3xl leading-none tracking-wide">SOS</span>
            <span className="text-white font-sans text-xs font-medium tracking-widest mt-1">TAP</span>
          </motion.div>
        </div>

        {/* Fourth Black SOS Circle */}
        <div className="absolute left-[400px] top-[1420px] transform -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div className="absolute inset-0 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ opacity: fourthRingsOpacity1, animationDuration: '2s' }}></motion.div>
          <motion.div className="absolute -inset-4 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ opacity: fourthRingsOpacity2, animationDuration: '2.5s' }}></motion.div>
          <motion.div className="absolute -inset-8 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ opacity: fourthRingsOpacity3, animationDuration: '3s' }}></motion.div>
          <motion.div className="absolute inset-0 rounded-full bg-[#FF0E97] blur-2xl" style={{ opacity: fourthButtonGlowOpacity }} />

          <motion.div
            className="relative w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center shadow-2xl"
            style={{ backgroundColor: fourthButtonBg, scale: fourthButtonScale }}
          >
            <span className="text-white font-[family-name:var(--font-bebas)] text-3xl leading-none tracking-wide">SOS</span>
            <span className="text-white font-sans text-xs font-medium tracking-widest mt-1">TAP</span>
          </motion.div>
        </div>

        {/* Fourth Phone Mockup (GUARDIANS ALERTED) */}
        <motion.div className="absolute left-[550px] top-[1200px] w-[198px] h-[401px] z-10" style={{ opacity: section4Opacity }}>
          {mounted && guardianAnimData ? (
            <Lottie
              key="guardian-lottie"
              animationData={guardianAnimData}
              loop={true}
              className="w-full h-full object-contain drop-shadow-2xl opacity-100 rotate-0"
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
            />
          ) : (
            <video
              ref={vid4Ref}
              loop
              muted
              playsInline
              className="object-contain drop-shadow-2xl w-full h-full"
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
              <source src="/images/vid6.mp4" type="video/mp4" />
            </video>
          )}
        </motion.div>

        {/* GUARDIANS ALERTED Text */}
        <motion.div className="absolute left-[775px] top-[1300px] w-[250px] flex flex-col gap-1 z-10" style={{ opacity: section4Opacity }}>
          <h2 className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] text-[40px] leading-[90%] tracking-[-0.03em]">
            GUARDIANS ALERTED
          </h2>
          <p className="m-0 text-[#161616] font-sans text-[16px] leading-[140%] tracking-[-0.03em]">
            Your guardians receive an SMS and WhatsApp alert with your live location, giving them immediate visibility and the ability to act.
          </p>
        </motion.div>

        {/* Fifth Phone Mockup (Take Action) */}
        <motion.div className="absolute left-[5px] top-[1680px] w-[198px] h-[401px] z-10" style={{ opacity: section5Opacity }}>
          {mounted && actionAnimData ? (
            <Lottie
              key="action-lottie"
              animationData={actionAnimData}
              loop={true}
              className="w-full h-full object-contain drop-shadow-2xl opacity-100 rotate-0"
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
            />
          ) : (
            <video
              ref={vid5Ref}
              loop
              muted
              playsInline
              className="object-contain drop-shadow-2xl w-full h-full"
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
              <source src="/images/vid7.mp4" type="video/mp4" />
            </video>
          )}
        </motion.div>

        {/* TAKE ACTION Text */}
        <motion.div className="absolute left-[225px] top-[1740px] w-[250px] flex flex-col gap-1 z-10" style={{ opacity: section5Opacity }}>
          <h2 className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] text-[40px] leading-[90%] tracking-[-0.03em]">
            TAKE ACTION
          </h2>
          <p className="m-0 text-[#161616] font-sans text-[16px] leading-[140%] tracking-[-0.03em]">
            Your Trusted Circle can track your location, access audio updates, view nearby emergency services, and stay connected all from one screen.
          </p>
        </motion.div>

        {/* Fifth Black SOS Circle */}
        <div className="absolute left-[600px] top-[1820px] transform -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div className="absolute inset-0 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ opacity: fifthRingsOpacity1, animationDuration: '2s' }}></motion.div>
          <motion.div className="absolute -inset-4 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ opacity: fifthRingsOpacity2, animationDuration: '2.5s' }}></motion.div>
          <motion.div className="absolute -inset-8 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ animationDuration: '3s', opacity: 0.2 }}></motion.div>
          <motion.div className="absolute inset-0 rounded-full bg-[#FF0E97] blur-2xl" style={{ opacity: fifthButtonGlowOpacity }} />

          <motion.div
            className="relative w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center shadow-2xl"
            style={{ backgroundColor: fifthButtonBg, scale: fifthButtonScale }}
          >
            <span className="text-white font-[family-name:var(--font-bebas)] text-3xl leading-none tracking-wide">SOS</span>
            <span className="text-white font-sans text-xs font-medium tracking-widest mt-1">TAP</span>
          </motion.div>
        </div>

      </div>

      {/* Mobile Fallback Layout (Simplified) */}
      <div className="w-full flex flex-col items-center md:hidden px-2 relative z-10 pt-10 pb-12 -mt-[200px]">
        <div className="w-full max-w-[360px] relative">
          {/* Mobile Vertical Timeline Line (Animated on Scroll) */}
          <div ref={mobileLineRef} className="absolute left-[55px] top-[45px] bottom-[460px] w-[1px] bg-[#161616] z-0 opacity-10"></div>
          <motion.div
            className="absolute left-[55px] top-[45px] bottom-[460px] w-[1px] bg-[#FF0E97] z-0 origin-top"
            style={{ scaleY: mobileLineProgress }}
          ></motion.div>

          {[
            { title: "TRIGGER", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", vid: "/images/vid1.mp4" },
            { title: "CANCEL WINDOW", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", vid: "/images/vid4.mp4" },
            { title: "BROADCAST FIRES", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", vid: "/images/vid5.mp4" },
            { title: "GUARDIANS ALERTED", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", vid: "/images/vid6.mp4" },
            { title: "TAKE ACTION", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", vid: "/images/vid7.mp4" }
          ].map((step, idx, arr) => (
            <MobileTriggerStep key={idx} step={step} idx={idx} isLast={idx === arr.length - 1} lottieAnimationData={idx === 0 ? armAnimData : idx === 1 ? journeyAnimData : idx === 2 ? broadcastAnimData : idx === 3 ? guardianAnimData : idx === 4 ? actionAnimData : null} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileTriggerStep({ step, idx, isLast, lottieAnimationData }: { step: any, idx: number, isLast: boolean, lottieAnimationData?: any }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const circleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["center 50%", "center 45%"]
  });

  // If it's the first step, it's always fully active
  const isFirst = idx === 0;

  const buttonBg = useTransform(scrollYProgress, [0, 0.01], ["#161616", "#FF0E97"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const ringsOpacity = useTransform(scrollYProgress, [0, 0.01], [0, 1]);

  return (
    <div className={`flex w-full relative ${isLast ? '' : 'mb-12'}`}>
      {/* Left side: Animated SOS Circle */}
      <div className="relative w-[110px] shrink-0 flex justify-center z-10 pt-[10px]">
        <div ref={circleRef} className="relative w-[70px] h-[70px] flex items-center justify-center">

          {/* Animated Glow and Rings Wrapper */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: isFirst ? 1 : ringsOpacity }}
          >
            {/* Concentric rings (Animated) */}
            <div className="absolute -inset-[5px] rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ animationDuration: '2s', opacity: 0.6 }}></div>
            <div className="absolute -inset-[15px] rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ animationDuration: '2.5s', opacity: 0.4 }}></div>
            <div className="absolute -inset-[25px] rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ animationDuration: '3s', opacity: 0.2 }}></div>

            {/* Center Circle Glow */}
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-[#FF0E97] blur-md"
            />
          </motion.div>

          {/* Center Circle */}
          <motion.div
            className="relative w-full h-full rounded-full flex flex-col items-center justify-center z-20 shadow-2xl "
            style={{ backgroundColor: isFirst ? "#FF0E97" : buttonBg }}
          >
            <span className="text-white font-[family-name:var(--font-bebas)] text-[18px] leading-none tracking-wide">SOS</span>
            <span className="text-white font-sans text-[8px] font-medium tracking-widest mt-[2px]">TAP</span>
          </motion.div>
        </div>
      </div>

      {/* Right side: Text and Phone */}
      <motion.div className="flex flex-col gap-4 flex-1 pl-4 z-10" style={{ opacity: isFirst ? 1 : contentOpacity }}>
        <div className="flex flex-col gap-1 pr-4">
          <h2 className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] max-[380px]:text-[26px] text-[34px] leading-[90%] tracking-[-0.03em]">{step.title}</h2>
          <p className="m-0 text-[#161616] font-sans text-[15px] leading-[140%] tracking-[-0.03em]">{step.text}</p>
        </div>

        <div className="relative w-full max-w-[198px] h-[401px] shrink-0 mt-2 overflow-visible">
          {lottieAnimationData ? (
            <Lottie
              animationData={lottieAnimationData}
              loop={true}
              className="w-full h-full object-contain drop-shadow-2xl opacity-100 rotate-0"
            />
          ) : (
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              className="object-contain drop-shadow-2xl object-top w-full h-full"
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
              <source src={step.vid} type="video/mp4" />
            </video>
          )}
        </div>
      </motion.div>
    </div>
  );
}
