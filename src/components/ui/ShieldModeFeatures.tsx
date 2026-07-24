"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";

const features = [
  {
    title: "ARM/TURN ON",
    bgColor: "#0E8DFF",
    description:
      "Start your journey by enabling Nazr to run smoothly and silently in the background. All safety features will be equipped to launch the moment it's necessary.",
    lottieJson: "/images/SM ARM-Turn On.json",
    vid: "/images/vid8.mp4",
  },
  {
    title: "CHECK IN",
    bgColor: "#F80090",
    description:
      "At intervals you've set, Nazr sends a check-in reminder to make sure you're okay. One quick tap confirms you're safe and keeps your Trusted Circle informed.",
    lottieJson: "/images/SM Check In Timer.json",
    vid: "/images/vid9.mp4",
  },
  {
    title: "ARRIVAL REMINDER",
    bgColor: "#F5C518",
    description:
      "Five minutes before your destination, NAZR prompts you to confirm your arrival or extend your journey if your plans have changed.",
    lottieJson: "/images/SM Check In Alert.json",
    vid: "/images/vid10.mp4",
  },
  {
    title: "ARRIVED OR SOS",
    bgColor: "#03A781",
    description:
      "Miss a check-in? Your Trusted Circle is notified. If you're unreachable, they can initiate SOS, or NAZR will in 5 minutes. Arrived safely? End your journey.",
    lottieJson: "/images/SM Arrived SOS.json",
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
      if (rowRef.current && rowRef.current.parentElement) {
        const rowWidth = rowRef.current.scrollWidth;
        const parentWidth = rowRef.current.parentElement.offsetWidth;
        const paddingLeft = window.innerWidth < 768 ? 20 : 40;
        // Add 120px extra scroll padding to ensure the final card is fully visible under scaling/zoom
        const translation = Math.max(0, rowWidth - parentWidth + paddingLeft + 120);
        setXTranslation(translation);
      }
    };

    calculateTranslation();
    
    const timer = setTimeout(calculateTranslation, 150);
    const interval = setInterval(calculateTranslation, 500);
    
    window.addEventListener("resize", calculateTranslation);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      window.removeEventListener("resize", calculateTranslation);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll progress to negative horizontal translation, completing at 75% scroll to prevent unpinning lag under high zoom
  const x = useTransform(scrollYProgress, [0, 0.75], [0, -xTranslation], { clamp: true });

  const isSticky = xTranslation > 0;

  return (
    <section ref={containerRef} className={`w-full bg-[#161616] relative z-50 ${isSticky ? 'h-[270vh]' : 'h-auto pb-[90px]'} max-md:h-auto`}>
      
      {/* Desktop view only: horizontal pin scroll */}
      <div className={`hidden md:block ${isSticky ? 'sticky top-0 h-screen overflow-hidden' : 'relative h-auto overflow-visible'} flex flex-col justify-start pt-[60px] w-full`}>
        <div className="w-full px-[40px]">
          <motion.div
            ref={rowRef}
            className="flex gap-6 pr-[40px]"
            style={{ 
              width: "max-content", 
              paddingBottom: "1px",
              x: isSticky ? x : 0
            }}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile view only: vertical list */}
      <div className="block md:hidden w-full px-4 pt-4 pb-8 bg-[#161616]">
        <div className="flex flex-col gap-6 w-full">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} isMobile={true} />
          ))}
        </div>
      </div>

    </section>
  );
}

function FeatureCard({ feature, index, isMobile }: { feature: (typeof features)[0]; index: number; isMobile?: boolean }) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    if (feature.lottieJson) {
      fetch(feature.lottieJson)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.layers) {
            data.layers = data.layers.filter((l: any) => l.ty !== 1);
          }
          setAnimationData(data);
        })
        .catch((err) => console.error("Error loading Lottie JSON:", err));
    }
  }, [feature.lottieJson]);

  return (
    <div
      className={`flex flex-col shrink-0 rounded-[24px] overflow-hidden ${
        isMobile ? "w-full h-auto" : "w-[85vw] md:w-[calc((100vw-80px-72px)/3.25)] md:h-auto md:aspect-[379/533]"
      }`}
    >
      {/* Top coloured image area */}
      <div
        className="w-full relative overflow-hidden flex justify-center h-[320px] pt-[30px] md:h-auto md:aspect-[379/339] md:pt-[12%]"
        style={{
          backgroundColor: feature.bgColor,
        }}
      >
        <motion.div
          className="relative w-[140px] h-[280px] md:w-[70%] md:h-auto md:aspect-[180/360]"
          initial={{ y: 80 }}
          whileInView={{ y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {animationData ? (
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          ) : (
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
          )}
        </motion.div>
      </div>

      {/* Bottom content area */}
      <div
        className="w-full flex flex-col p-5 gap-2 min-h-[180px] md:p-[6.3%] md:gap-[2%] flex-1"
        style={{
          backgroundColor: "#F1E4DE",
        }}
      >
        <h3
          className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] font-normal text-[26px] md:text-[clamp(26px,2.2vw,36px)] leading-[110%] tracking-normal uppercase"
        >
          {feature.title}
        </h3>

        <p
          className="m-0 text-[#161616]/80 font-normal text-[14px] md:text-[clamp(14px,1.1vw,18px)] leading-[150%] tracking-normal"
          style={{ fontFamily: "Switzer, Inter, sans-serif" }}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
}
