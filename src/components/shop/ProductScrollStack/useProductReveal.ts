"use client";

import { useRef } from "react";
import { useScroll, useTransform, useMotionTemplate } from "framer-motion";

export function useProductReveal(isFirst = false) {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  // Map progress: 0 (bottom of screen) -> 0.7 (pinned at top)
  const clipBottom = useTransform(scrollYProgress, [0, 0.7], ["100%", "0%"]);
  const clipPath = useMotionTemplate`inset(0 0 ${clipBottom} 0)`;

  return { sectionRef, clipPath: isFirst ? "none" : clipPath };
}
