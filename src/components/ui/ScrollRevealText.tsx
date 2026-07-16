"use client";

import { useRef, useEffect } from "react";
import { motion, useTransform, MotionValue, useMotionTemplate, useMotionValue } from "framer-motion";

function FillLetter({ char, progress, range, fillColor, emptyColor }: { char: string, progress: MotionValue<number>, range: [number, number], fillColor: string, emptyColor: string }) {
  const percent = useTransform(progress, range, [0, 100]);
  const backgroundImage = useMotionTemplate`linear-gradient(to right, ${fillColor} ${percent}%, ${emptyColor} ${percent}%)`;
  
  if (char === '\n') {
    return <br />;
  }
  
  if (char === ' ') {
    return <span> </span>;
  }
  
  return (
    <motion.span 
      style={{ 
        backgroundImage,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent"
      }}
    >
      {char}
    </motion.span>
  );
}

export function ScrollRevealText({ 
  text, 
  className, 
  style, 
  scrollYProgress: externalScrollYProgress, 
  progressRange,
  fillColor = "#FFF9EB",
  emptyColor = "#444444"
}: { 
  text: string, 
  className?: string, 
  style?: React.CSSProperties,
  scrollYProgress?: MotionValue<number>,
  progressRange: [number, number],
  fillColor?: string,
  emptyColor?: string
}) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const localScrollYProgress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start revealing when the text enters 85% of viewport height
      // Fully revealed when it reaches 25% of viewport height
      const startY = windowHeight * 0.85;
      const endY = windowHeight * 0.25;

      const currentY = rect.top;

      const totalDist = startY - endY;
      const currentDist = startY - currentY;
      
      const rawProgress = currentDist / totalDist;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));
      
      localScrollYProgress.set(clampedProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [localScrollYProgress]);

  // Split into words and whitespace blocks
  const words = text.match(/\S+|\s+/g) || [];
  
  const ranges: { char: string, start: number, end: number }[] = [];
  let currentWordStartTime = 0;
  
  words.forEach(word => {
    const L = word.length;
    let currentLetterTime = currentWordStartTime;
    
    if (word.trim().length === 0) {
      // Whitespace
      for (let i = 0; i < L; i++) {
        ranges.push({ char: word[i], start: currentLetterTime, end: currentLetterTime + 1 });
        currentLetterTime += 1;
      }
      currentWordStartTime += L;
    } else {
      // Word
      for (let i = 0; i < L; i++) {
        ranges.push({ char: word[i], start: currentLetterTime, end: currentLetterTime + 1 });
        currentLetterTime += 1;
      }
      // Start the next word when this word is 30% filled
      currentWordStartTime += L * 0.3;
    }
  });

  const maxTime = Math.max(...ranges.map(r => r.end));
  const [globalStart, globalEnd] = progressRange;
  const globalDelta = globalEnd - globalStart;

  return (
    <p ref={containerRef} className={className} style={style}>
      {ranges.map((r, i) => {
        const localStart = r.start / maxTime;
        const localEnd = r.end / maxTime;
        
        const rGlobalStart = globalStart + (localStart * globalDelta);
        const rGlobalEnd = globalStart + (localEnd * globalDelta);
        
        return (
          <FillLetter 
            key={i} 
            char={r.char} 
            progress={localScrollYProgress} 
            range={[rGlobalStart, rGlobalEnd]}
            fillColor={fillColor}
            emptyColor={emptyColor}
          />
        );
      })}
    </p>
  );
}
