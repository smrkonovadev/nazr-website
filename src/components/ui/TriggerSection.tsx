"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

export function TriggerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const vid1Ref = useRef<HTMLVideoElement>(null);
  const vid2Ref = useRef<HTMLVideoElement>(null);
  const vid3Ref = useRef<HTMLVideoElement>(null);
  const vid4Ref = useRef<HTMLVideoElement>(null);
  const vid5Ref = useRef<HTMLVideoElement>(null);

  
  // Track scroll progress within this section (for desktop)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.05 && vid1Ref.current?.paused) {
      vid1Ref.current.play();
    }
    if (latest >= 0.22 && vid2Ref.current?.paused) {
      vid2Ref.current.play();
    }
    if (latest >= 0.45 && vid3Ref.current?.paused) {
      vid3Ref.current.play();
    }
    if (latest >= 0.69 && vid4Ref.current?.paused) {
      vid4Ref.current.play();
    }
    if (latest >= 0.98 && vid5Ref.current?.paused) {
      vid5Ref.current.play();
    }
  });


  // Track scroll progress specifically for the mobile line
  const mobileLineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mobileLineProgress } = useScroll({
    target: mobileLineRef,
    offset: ["start center", "end center"]
  });

  // --- FIRST BLACK SOS BUTTON ANIMATIONS ---
  const blackButtonGlowOpacity = useTransform(scrollYProgress, [0.19, 0.22], [0, 1]);
  const blackButtonBg = useTransform(scrollYProgress, [0.19, 0.22], ["#161616", "#FF0E97"]);
  const ringsOpacity1 = useTransform(scrollYProgress, [0.19, 0.22], [0, 0.4]);
  const ringsOpacity2 = useTransform(scrollYProgress, [0.19, 0.22], [0, 0.2]);
  const ringsOpacity3 = useTransform(scrollYProgress, [0.19, 0.22], [0, 0.1]);

  // --- THIRD BLACK SOS BUTTON ANIMATIONS ---
  const thirdButtonGlowOpacity = useTransform(scrollYProgress, [0.42, 0.45], [0, 1]);
  const thirdButtonBg = useTransform(scrollYProgress, [0.42, 0.45], ["#161616", "#FF0E97"]);
  const thirdRingsOpacity1 = useTransform(scrollYProgress, [0.42, 0.45], [0, 0.4]);
  const thirdRingsOpacity2 = useTransform(scrollYProgress, [0.42, 0.45], [0, 0.2]);
  const thirdRingsOpacity3 = useTransform(scrollYProgress, [0.42, 0.45], [0, 0.1]);

  // --- FOURTH BLACK SOS BUTTON ANIMATIONS ---
  const fourthButtonGlowOpacity = useTransform(scrollYProgress, [0.66, 0.69], [0, 1]);
  const fourthButtonBg = useTransform(scrollYProgress, [0.66, 0.69], ["#161616", "#FF0E97"]);
  const fourthRingsOpacity1 = useTransform(scrollYProgress, [0.66, 0.69], [0, 0.4]);
  const fourthRingsOpacity2 = useTransform(scrollYProgress, [0.66, 0.69], [0, 0.2]);
  const fourthRingsOpacity3 = useTransform(scrollYProgress, [0.66, 0.69], [0, 0.1]);

  // --- FIFTH BLACK SOS BUTTON ANIMATIONS ---
  const fifthButtonGlowOpacity = useTransform(scrollYProgress, [0.93, 0.98], [0, 1]);
  const fifthButtonBg = useTransform(scrollYProgress, [0.93, 0.98], ["#161616", "#FF0E97"]);
  const fifthRingsOpacity1 = useTransform(scrollYProgress, [0.93, 0.98], [0, 0.4]);
  const fifthRingsOpacity2 = useTransform(scrollYProgress, [0.93, 0.98], [0, 0.2]);
  const fifthRingsOpacity3 = useTransform(scrollYProgress, [0.93, 0.98], [0, 0.1]);

  // --- CONTENT OPACITIES (Phones and Text) ---
  const section1Opacity = useTransform(scrollYProgress, [0, 0.05], [0.3, 1]);
  const section2Opacity = useTransform(scrollYProgress, [0.19, 0.22], [0.3, 1]);
  const section3Opacity = useTransform(scrollYProgress, [0.42, 0.45], [0.3, 1]);
  const section4Opacity = useTransform(scrollYProgress, [0.66, 0.69], [0.3, 1]);
  const section5Opacity = useTransform(scrollYProgress, [0.93, 0.98], [0.3, 1]);

  return (
    <section ref={sectionRef} className="w-full relative z-[99] min-h-[2200px] pt-20 pb-0 overflow-x-clip overflow-y-visible flex justify-center">
      {/* 1200px wide Track Container for perfect absolute positioning */}
      <div className="relative w-[1200px] h-[2200px] shrink-0 hidden md:block transform translate-x-[100px]">

        {/* Connecting SVG Line */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1200 2200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Base Dotted Black Line */}
            <path
              d="M 500 0 L 500 300 L 550 450 L 600 600 L 600 950 L 400 1290 L 400 1620 L 600 1960"
              stroke="#161616"
              strokeWidth="1.5"
              strokeDasharray="3 4"
            />
            {/* Animated Solid Pink Line */}
            <motion.path
              d="M 500 0 L 500 300 L 550 450 L 600 600 L 600 950 L 400 1290 L 400 1620 L 600 1960"
              stroke="#FF0E97"
              strokeWidth="1.5"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </div>

        {/* Top Phone Mockup */}
        <motion.div className="absolute left-[-110px] top-[-150px] w-[220px] h-[480px] z-10" style={{ opacity: section1Opacity }}>
          <video ref={vid1Ref} src="/images/vid1.mp4" loop muted playsInline className="object-contain drop-shadow-2xl w-full h-full"  style={{
            WebkitMaskImage: 'url(/images/nazrapp4img.png)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'top center',
            maskImage: 'url(/images/nazrapp4img.png)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'top center',
          }} />
        </motion.div>

        {/* TRIGGER Text */}
        <motion.div className="absolute left-[130px] top-[-50px] w-[240px] flex flex-col gap-1 z-10" style={{ opacity: section1Opacity }}>
          <h2 className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] text-[40px] leading-[90%] tracking-[-0.03em]">
            One Tap. Immediate Response.
          </h2>
          <p className="m-0 text-[#161616] font-sans text-[16px] leading-[140%] tracking-[-0.03em]">
            Trigger SOS with a single tap. NAZR shares critical information with your Trusted Circle instantly with a 5-second window to cancel.          </p>
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
            
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
            className="relative w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center shadow-2xl "
            style={{ backgroundColor: blackButtonBg }}
          >
            <span className="text-white font-[family-name:var(--font-bebas)] text-3xl leading-none tracking-wide">SOS</span>
            <span className="text-white font-sans text-xs font-medium tracking-widest mt-1">TAP</span>
          </motion.div>
        </div>

        {/* Second Phone Mockup */}
        <motion.div className="absolute left-[670px] top-[300px] w-[220px] h-[480px] z-10" style={{ opacity: section2Opacity }}>
          <video ref={vid2Ref} src="/images/vid4.mp4" loop muted playsInline className="object-contain drop-shadow-2xl w-full h-full"  style={{
            WebkitMaskImage: 'url(/images/nazrapp4img.png)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'top center',
            maskImage: 'url(/images/nazrapp4img.png)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'top center',
          }} />
        </motion.div>

        {/* CANCEL WINDOW Text */}
        <motion.div className="absolute left-[910px] top-[403px] w-[240px] flex flex-col gap-1 z-10" style={{ opacity: section2Opacity }}>
          <h2 className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] text-[40px] leading-[90%] tracking-[-0.03em]">
            SOS JOURNEY          </h2>
          <p className="m-0 text-[#161616] font-sans text-[16px] leading-[140%] tracking-[-0.03em]">
            After activation, NAZR guides you through every stage, from alerting your Trusted Circle to giving you quick access to emergency services.          </p>
        </motion.div>

        {/* Third Phone Mockup (Left Side) */}
        <motion.div className="absolute left-[40px] top-[800px] w-[220px] h-[480px] z-10" style={{ opacity: section3Opacity }}>
          <video ref={vid3Ref} src="/images/vid5.mp4" loop muted playsInline className="object-contain drop-shadow-2xl w-full h-full"  style={{
            WebkitMaskImage: 'url(/images/nazrapp4img.png)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'top center',
            maskImage: 'url(/images/nazrapp4img.png)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'top center',
          }} />
        </motion.div>

        {/* BROADCAST FIRES Text */}
        <motion.div className="absolute left-[280px] top-[900px] w-[250px] flex flex-col gap-1 z-10" style={{ opacity: section3Opacity }}>
          <h2 className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] text-[40px] leading-[90%] tracking-[-0.03em]">
            Working in the bACKGROUND          </h2>
          <p className="m-0 text-[#161616] font-sans text-[16px] leading-[140%] tracking-[-0.03em]">
            The moment SOS is triggered, your live location is shared while your audio and key details are recorded for faster response.          </p>
        </motion.div>

        {/* Third Black SOS Circle (Right Side) */}
        <div className="absolute left-[600px] top-[950px] transform -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div className="absolute inset-0 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ opacity: thirdRingsOpacity1, animationDuration: '2s' }}></motion.div>
          <motion.div className="absolute -inset-4 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ opacity: thirdRingsOpacity2, animationDuration: '2.5s' }}></motion.div>
          <motion.div className="absolute -inset-8 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ opacity: thirdRingsOpacity3, animationDuration: '3s' }}></motion.div>
          <motion.div className="absolute inset-0 rounded-full bg-[#FF0E97] blur-2xl" style={{ opacity: thirdButtonGlowOpacity }} />

          <motion.div
            
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
            className="relative w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center shadow-2xl "
            style={{ backgroundColor: thirdButtonBg }}
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
            
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
            className="relative w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center shadow-2xl "
            style={{ backgroundColor: fourthButtonBg }}
          >
            <span className="text-white font-[family-name:var(--font-bebas)] text-3xl leading-none tracking-wide">SOS</span>
            <span className="text-white font-sans text-xs font-medium tracking-widest mt-1">TAP</span>
          </motion.div>
        </div>

        {/* Fourth Phone Mockup */}
        <motion.div className="absolute left-[550px] top-[1200px] w-[220px] h-[480px] z-10" style={{ opacity: section4Opacity }}>
          <video ref={vid4Ref} src="/images/vid6.mp4" loop muted playsInline className="object-contain drop-shadow-2xl w-full h-full"  style={{
            WebkitMaskImage: 'url(/images/nazrapp4img.png)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'top center',
            maskImage: 'url(/images/nazrapp4img.png)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'top center',
          }} />
        </motion.div>

        {/* GUARDIANS ALERTED Text */}
        <motion.div className="absolute left-[800px] top-[1300px] w-[250px] flex flex-col gap-1 z-10" style={{ opacity: section4Opacity }}>
          <h2 className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] text-[40px] leading-[90%] tracking-[-0.03em]">
            GUARDIANS ALERTED
          </h2>
          <p className="m-0 text-[#161616] font-sans text-[16px] leading-[140%] tracking-[-0.03em]">
            Your guardians receive an SMS and WhatsApp alert with your live location, giving them immediate visibility and the ability to act.          </p>
        </motion.div>

        {/* Fifth Phone Mockup (Take Action) */}
        <motion.div className="absolute left-[5px] top-[1680px] w-[220px] h-[480px] z-10" style={{ opacity: section5Opacity }}>
          <video ref={vid5Ref} src="/images/vid7.mp4" loop muted playsInline className="object-contain drop-shadow-2xl w-full h-full"  style={{
            WebkitMaskImage: 'url(/images/nazrapp4img.png)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'top center',
            maskImage: 'url(/images/nazrapp4img.png)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'top center',
          }} />
        </motion.div>

        {/* TAKE ACTION Text */}
        <motion.div className="absolute left-[245px] top-[1780px] w-[250px] flex flex-col gap-1 z-10" style={{ opacity: section5Opacity }}>
          <h2 className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] text-[40px] leading-[90%] tracking-[-0.03em]">
            TAKE ACTION
          </h2>
          <p className="m-0 text-[#161616] font-sans text-[16px] leading-[140%] tracking-[-0.03em]">
            Your Trusted Circle can track your location, access audio updates, view nearby emergency services, and stay connected all from one screen.          </p>
        </motion.div>

        {/* Fifth Black SOS Circle */}
        <div className="absolute left-[600px] top-[1960px] transform -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div className="absolute inset-0 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ opacity: fifthRingsOpacity1, animationDuration: '2s' }}></motion.div>
          <motion.div className="absolute -inset-4 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ opacity: fifthRingsOpacity2, animationDuration: '2.5s' }}></motion.div>
          <motion.div className="absolute -inset-8 rounded-full border-[1px] border-[#FF0E97] animate-ping" style={{ opacity: fifthRingsOpacity3, animationDuration: '3s' }}></motion.div>
          <motion.div className="absolute inset-0 rounded-full bg-[#FF0E97] blur-2xl" style={{ opacity: fifthButtonGlowOpacity }} />

          <motion.div
            
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.1 }}
            className="relative w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center shadow-2xl "
            style={{ backgroundColor: fifthButtonBg }}
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
            <MobileTriggerStep key={idx} step={step} idx={idx} isLast={idx === arr.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileTriggerStep({ step, idx, isLast }: { step: any, idx: number, isLast: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const circleRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["center 50%", "center 45%"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.01 && videoRef.current?.paused) {
      videoRef.current.play();
    }
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

        <div className="relative w-full max-w-[200px] h-[360px] shrink-0 mt-2 overflow-visible">
          <video ref={videoRef} src={step.vid} loop muted playsInline className="object-contain drop-shadow-2xl object-top w-full h-full"  style={{
            WebkitMaskImage: 'url(/images/nazrapp4img.png)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'top center',
            maskImage: 'url(/images/nazrapp4img.png)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'top center',
          }} />
        </div>
      </motion.div>
    </div>
  );
}
