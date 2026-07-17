"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const features = [
  {
    title: "ACTIVATE",
    bgColor: "#0E8DFF",
    description:
      "Start your journey by enabling Nazr to run smoothly and silently in the background. All safety features will be equipped to launch the moment it's necessary.",
    vid: "/images/vid8.mp4",
  },
  {
    title: "CHECK IN",
    bgColor: "#F80090",
    description:
      "At intervals you've set, Nazr sends a check-in reminder to make sure you're okay. One quick tap confirms you're safe and keeps your Trusted Circle informed.",
    vid: "/images/vid9.mp4",
  },
  {
    title: "ARRIVAL REMINDER",
    bgColor: "#F5C518",
    description:
      "Five minutes before your destination, NAZR prompts you to confirm your arrival or extend your journey if your plans have changed.",
    vid: "/images/vid10.mp4",
  },
  {
    title: "JOURNEY COMPLETE",
    bgColor: "#03A781",
    description:
      "Miss a check-in? Your Trusted Circle is notified. If you're unreachable, they can initiate SOS, or NAZR will in 5 minutes. Arrived safely? End your journey.",
    vid: "/images/vid11.mp4",
  },
];

export function ShieldModeFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.25) {
      setHasAnimatedIn(true);
    } else if (latest < 0.05) {
      setHasAnimatedIn(false);
    }
  });

  return (
    <section ref={containerRef} className="w-full bg-[#161616] pb-[40px] relative z-50">
      {/* Horizontal scroll container — shows 3 full cards + peek of 4th */}
      <div className="w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-[20px] md:px-[40px]">
        <motion.div
          className="flex gap-4 md:gap-6"
          style={{ width: "max-content", paddingBottom: "1px" }}
          initial={{ y: 80, opacity: 0 }}
          animate={hasAnimatedIn ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "center center"],
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], ["80px", "0px"]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col shrink-0 rounded-[16px] overflow-hidden"
      style={{
        /* Show ~3 cards + partial 4th:
           mobile: calc(90vw) → shows a bit of next
           desktop: calc((min(1280px, 100vw) - 32px * 2 - 24px * 3) / 3.2) ≈ 378px */
        width: "clamp(260px, 80vw, 379px)",
      }}
    >
      {/* Top coloured image area — h 339px, pt 140px */}
      <div
        className="w-full relative overflow-hidden flex justify-center"
        style={{
          backgroundColor: feature.bgColor,
          height: "339px",
          paddingTop: "140px",
        }}
      >
        <motion.div
          className="relative w-[180px] h-[360px]"
          style={{ y: yTransform }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 object-contain object-top drop-shadow-2xl w-full h-full"
            style={{
              WebkitMaskImage: "url(/images/nazrapp4img.png)",
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "top center",
              maskImage: "url(/images/nazrapp4img.png)",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "top center",
            }}
          >
            <source src={feature.vid} type="video/mp4" />
          </video>
        </motion.div>
      </div>

      {/* Bottom content area — h 194px, p 24px, gap 8px, bg #F1E4DF */}
      <div
        className="w-full flex flex-col"
        style={{
          backgroundColor: "#F1E4DF",
          padding: "24px",
          gap: "8px",
          minHeight: "194px",
        }}
      >
        <h3
          className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] font-normal text-[28px] leading-[110%] tracking-normal uppercase"
        >
          {feature.title}
        </h3>

        <p
          className="m-0 text-[#161616]/80 font-normal text-[15px] leading-[150%] tracking-normal"
          style={{ fontFamily: "Switzer, Inter, sans-serif" }}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
}
