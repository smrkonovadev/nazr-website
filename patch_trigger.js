const fs = require('fs');

let content = fs.readFileSync('src/components/ui/TriggerSection.tsx', 'utf8');

// Add refs and playVid helper
content = content.replace(
  'const sectionRef = useRef<HTMLElement>(null);',
  `const sectionRef = useRef<HTMLElement>(null);
  const vid1Ref = useRef<HTMLVideoElement>(null);
  const vid2Ref = useRef<HTMLVideoElement>(null);
  const vid3Ref = useRef<HTMLVideoElement>(null);
  const vid4Ref = useRef<HTMLVideoElement>(null);
  const vid5Ref = useRef<HTMLVideoElement>(null);

  const playVid = (ref: React.RefObject<HTMLVideoElement>) => {
    if (ref.current) {
      ref.current.currentTime = 0;
      ref.current.play();
    }
  };`
);

// Desktop Video 1
content = content.replace(
  '<video src="/images/vid1.mp4" autoPlay loop muted playsInline className="object-contain drop-shadow-2xl w-full h-full" />',
  '<video ref={vid1Ref} src="/images/vid1.mp4" loop muted playsInline className="object-contain drop-shadow-2xl w-full h-full" />'
);

// Desktop SOS 1
content = content.replace(
  'animate={{ scale: [1, 1.05, 1] }}\n            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}\n            className="relative w-[130px] h-[130px] rounded-full bg-[#FF0E97] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,14,151,0.8)] pointer-events-auto cursor-pointer"',
  `onClick={() => playVid(vid1Ref)}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[130px] h-[130px] rounded-full bg-[#FF0E97] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,14,151,0.8)] pointer-events-auto cursor-pointer"`
);

// Desktop Video 2
content = content.replace(
  '<video src="/images/vid4.mp4" autoPlay loop muted playsInline className="object-contain drop-shadow-2xl w-full h-full" />',
  '<video ref={vid2Ref} src="/images/vid4.mp4" loop muted playsInline className="object-contain drop-shadow-2xl w-full h-full" />'
);
// Desktop Video 3
content = content.replace(
  '<video src="/images/vid5.mp4" autoPlay loop muted playsInline className="object-contain drop-shadow-2xl w-full h-full" />',
  '<video ref={vid3Ref} src="/images/vid5.mp4" loop muted playsInline className="object-contain drop-shadow-2xl w-full h-full" />'
);
// Desktop Video 4
content = content.replace(
  '<video src="/images/vid6.mp4" autoPlay loop muted playsInline className="object-contain drop-shadow-2xl w-full h-full" />',
  '<video ref={vid4Ref} src="/images/vid6.mp4" loop muted playsInline className="object-contain drop-shadow-2xl w-full h-full" />'
);
// Desktop Video 5
content = content.replace(
  '<video src="/images/vid7.mp4" autoPlay loop muted playsInline className="object-contain drop-shadow-2xl w-full h-full" />',
  '<video ref={vid5Ref} src="/images/vid7.mp4" loop muted playsInline className="object-contain drop-shadow-2xl w-full h-full" />'
);

// Desktop SOS 2,3,4,5
let i = 2;
content = content.replace(
  /initial={{ scale: 0\.8, opacity: 0 }}\n\s*whileInView={{ scale: 1, opacity: 1 }}\n\s*viewport={{ once: true }}\n\s*transition={{ type: "spring", bounce: 0\.5, delay: 0\.1 }}\n\s*className="relative w-\[120px\] h-\[120px\] rounded-full flex flex-col items-center justify-center shadow-2xl pointer-events-auto cursor-pointer"\n\s*style={{ backgroundColor: [a-zA-Z0-9]+Bg }}/g,
  (match) => {
    const res = `onClick={() => playVid(vid${i}Ref)}\n            ${match}`;
    i++;
    return res;
  }
);

// Mobile
content = content.replace(
  'function MobileTriggerStep({ step, idx, isLast }: { step: any, idx: number, isLast: boolean }) {',
  `function MobileTriggerStep({ step, idx, isLast }: { step: any, idx: number, isLast: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playVid = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };`
);

content = content.replace(
  'className="relative w-full h-full rounded-full flex flex-col items-center justify-center z-20 shadow-2xl"\n            style={{ backgroundColor: isFirst ? "#FF0E97" : buttonBg }}',
  `className="relative w-full h-full rounded-full flex flex-col items-center justify-center z-20 shadow-2xl pointer-events-auto cursor-pointer"
            style={{ backgroundColor: isFirst ? "#FF0E97" : buttonBg }}
            onClick={playVid}`
);

content = content.replace(
  '<video src={step.vid} autoPlay loop muted playsInline className="object-contain drop-shadow-2xl object-top w-full h-full" />',
  '<video ref={videoRef} src={step.vid} loop muted playsInline className="object-contain drop-shadow-2xl object-top w-full h-full" />'
);

fs.writeFileSync('src/components/ui/TriggerSection.tsx', content);
