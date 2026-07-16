"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ShieldModeFeatures() {
  const features = [
    {
      title: "ACTIVATE",
      bgColor: "#0E8DFF",
      description: "Start your journey by enabling Nazr to run smoothly and silently in the background. All safety features will be equipped to launch the moment it’s necessary.",
      vid: "/images/vid8.mp4"
    },
    {
      title: "CHECK IN",
      bgColor: "#F80090",
      description: "At intervals you’ve set, Nazr sends a check-in reminder to make sure you're okay. One quick tap confirms you're safe and keeps your Trusted Circle informed.",
      vid: "/images/vid9.mp4"
    },
    {
      title: "GUARDIANS ALERTED",
      bgColor: "#FF5722",
      description: "A quiet pause in a busy day, captured in soft light and simple tones. A quiet pause in a busy day, captured in soft light and simple tones.",
      vid: "/images/vid10.mp4"
    },
    {
      title: "JOURNEY COMPLETE",
      bgColor: "#03A781",
      description: "When you reach your destination, confirm your arrival. The experience closes, ready whenever you are again.",
      vid: "/images/vid11.mp4"
    }

  ];

  return (
    <section className="w-full bg-[#161616] pb-12 md:pb-32 px-4 md:px-8 flex justify-center relative z-50">
      <div className="max-w-[1280px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-[40px]">

        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}

      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: any }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "center center"]
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div ref={cardRef} className="flex flex-col w-full h-full">
      {/* Top Colored Half */}
      <div
        className="w-full h-[350px] relative overflow-hidden flex justify-center pt-10 px-4"
        style={{ backgroundColor: feature.bgColor }}
      >
        <motion.div
          className="relative w-[240px] h-[500px]"
          style={{ y: yTransform }}
        >
          <video
            src={feature.vid}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 object-contain object-top drop-shadow-2xl w-full h-full"
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
        </motion.div>
      </div>

      {/* Bottom Beige Half */}
      <div className="w-full bg-[#F1E4DE] p-8 flex flex-col gap-0 grow">
        <h3 className="m-0 text-[#161616] font-[family-name:var(--font-bebas)] font-normal text-[32px] leading-[130%] tracking-normal uppercase">
          {feature.title}
        </h3>

        <p
          className="m-0 text-[#161616] font-normal text-[16px] leading-[150%] tracking-normal"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
}
