"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const rowRef = useRef<HTMLDivElement>(null);
  const [xTranslation, setXTranslation] = useState(0);

  // Measure the total horizontal scrollable distance dynamically
  useEffect(() => {
    const calculateTranslation = () => {
      if (rowRef.current) {
        const rowWidth = rowRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const paddingLeft = viewportWidth < 768 ? 20 : 40;
        // Translate the row so that the right-padded edge of the row lands exactly at the viewport right edge
        const translation = Math.max(0, rowWidth - viewportWidth + paddingLeft);
        setXTranslation(translation);
      }
    };

    calculateTranslation();
    window.addEventListener("resize", calculateTranslation);
    return () => window.removeEventListener("resize", calculateTranslation);
  }, []);

  // Track the vertical scroll progress of this section's track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll progress to negative horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], [0, -xTranslation]);

  return (
    <section ref={containerRef} className="w-full bg-[#161616] relative z-50 h-[250vh] max-md:h-[300vh]">
      {/* Sticky container that keeps items pinned while we scroll through the track */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center w-full">
        {/* Horizontal scroll container */}
        <div className="w-full px-[20px] md:px-[40px]">
          <motion.div
            ref={rowRef}
            className="flex gap-4 md:gap-6 pr-[20px] md:pr-[40px]"
            style={{ 
              width: "max-content", 
              paddingBottom: "1px",
              x
            }}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  return (
    <div
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
          initial={{ y: 80 }}
          whileInView={{ y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
