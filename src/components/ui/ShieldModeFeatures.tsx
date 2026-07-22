"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";

const features = [
  {
    title: "ACTIVATE",
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
    title: "JOURNEY COMPLETE",
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
      if (rowRef.current) {
        const rowWidth = rowRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const paddingLeft = viewportWidth < 768 ? 20 : 40;
        const translation = Math.max(0, rowWidth - viewportWidth + paddingLeft + 40);
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

  const x = useTransform(scrollYProgress, [0, 0.90], [0, -xTranslation], { clamp: true });

  return (
    <section ref={containerRef} className="w-full bg-[#161616] relative z-50 h-[270vh] max-md:h-[320vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-start pt-[120px] md:pt-[60px] w-full">
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
      className="flex flex-col shrink-0 rounded-[24px] overflow-hidden w-[85vw] h-[500px] md:w-[calc((100vw-80px-72px)/3.25)] md:h-auto md:aspect-[379/533]"
    >
      {/* Top coloured image area */}
      <div
        className="w-full relative overflow-hidden flex justify-center h-[320px] pt-[40px] md:h-auto md:aspect-[379/339] md:pt-[12%]"
        style={{
          backgroundColor: feature.bgColor,
        }}
      >
        <motion.div
          className="relative w-[210px] h-[360px] md:w-[70%] md:h-auto md:aspect-[180/360]"
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
