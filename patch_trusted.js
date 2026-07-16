const fs = require('fs');
let content = fs.readFileSync('src/components/ui/TrustedCircleSection.tsx', 'utf8');

// 1. Imports
content = content.replace(
  'import Image from "next/image";',
  'import Image from "next/image";\nimport { useState, useRef, useEffect } from "react";'
);

// 2. State & Data
content = content.replace(
  'export function TrustedCircleSection() {',
  `export function TrustedCircleSection() {
  const [activeStep, setActiveStep] = useState(0);
  const videos = ["/images/vid3.mp4", "/images/vid6.mp4", "/images/vid7.mp4"];
  const vidRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null)
  ];

  useEffect(() => {
    vidRefs.forEach((ref, index) => {
      if (index === activeStep) {
        if (ref.current) {
          ref.current.currentTime = 0;
          ref.current.play().catch(() => {});
        }
      } else {
        if (ref.current) {
          ref.current.pause();
        }
      }
    });
  }, [activeStep]);`
);

// 3. Mobile layout Image to Video
content = content.replace(
  /<Image\s+src="\/images\/nazrapp4img\.png"\s+alt="App Interface"\s+fill\s+className="object-contain object-top drop-shadow-2xl"\s+\/>/g,
  '<video src={videos[index]} autoPlay loop muted playsInline className="object-contain object-top drop-shadow-2xl w-full h-full" />'
);

// 4. Desktop steps onMouseEnter
content = content.replace(
  /<div key=\{index\} className="relative z-10 flex gap-6 items-start">/g,
  '<div key={index} className="relative z-10 flex gap-6 items-start cursor-pointer transition-opacity duration-300" style={{ opacity: activeStep === index ? 1 : 0.5 }} onMouseEnter={() => setActiveStep(index)}>'
);

// 5. Desktop Right Column Image to Video and BgColor
content = content.replace(
  /bg-\[\#F80090\] rounded-\[40px\] relative overflow-hidden flex justify-center items-end shadow-2xl"/,
  'rounded-[40px] relative overflow-hidden flex justify-center items-end shadow-2xl transition-colors duration-500" style={{ backgroundColor: steps[activeStep].color }}'
);

// Replace the second occurrence of the Phone Mockup Image with the mapped videos
// Since we already replaced all occurrences in step 3 (wait, step 3 regex was specific, wait, I used /g in step 3).
// If I used /g, BOTH images were replaced by:
// '<video src={videos[index]} autoPlay loop muted playsInline className="object-contain object-top drop-shadow-2xl w-full h-full" />'
// But wait, in the desktop layout, `index` doesn't exist because it's not inside the `.map()`.
// Ah! Let's check step 3. The `src="/images/nazrapp4img.png"` replacement will break desktop if it uses `index`.
// Let's rewrite the patch script to be safer.
