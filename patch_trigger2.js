const fs = require('fs');
let content = fs.readFileSync('src/components/ui/TriggerSection.tsx', 'utf8');

// 1. Add useMotionValueEvent to imports
content = content.replace(
  'import { motion, useScroll, useTransform } from "framer-motion";',
  'import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";'
);

// 2. Add useMotionValueEvent for Desktop
const desktopScrollEvent = `
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
`;

content = content.replace(
  '// Track scroll progress specifically for the mobile line',
  desktopScrollEvent + '\n\n  // Track scroll progress specifically for the mobile line'
);

// 3. Remove playVid from TriggerSection
content = content.replace(
  /const playVid = \(ref: React\.RefObject<HTMLVideoElement>\) => \{[\s\S]*?  \};\n/,
  ''
);

content = content.replace(
  /const playVid = \(ref: React\.RefObject<HTMLVideoElement \| null>\) => \{[\s\S]*?  \};\n/,
  ''
);

// 4. Remove onClick and cursor-pointer from Desktop SOS buttons
content = content.replace(/onClick=\{\(\) => playVid\(vid\dRef\)\}/g, '');
content = content.replace(/pointer-events-auto cursor-pointer/g, '');

// 5. Update MobileTriggerStep
const mobileScrollEvent = `
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.01 && videoRef.current?.paused) {
      videoRef.current.play();
    }
  });
`;

content = content.replace(
  /const playVid = \(\) => \{[\s\S]*?  \};/,
  mobileScrollEvent
);

content = content.replace(/onClick=\{playVid\}/g, '');

fs.writeFileSync('src/components/ui/TriggerSection.tsx', content);
