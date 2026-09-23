"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

interface Step {
  number: string;
  title: string;
  description: string;
  lottieJson: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "START YOUR TRIP",
    description:
      "Turn on Shield Mode and set your destination. Nazr runs quietly in the background.",
    lottieJson: "/images/SM ARM-Turn On.json",
  },
  {
    number: "02",
    title: "QUICK CHECK-INS",
    description:
      "At the intervals you choose, Nazr asks if you're okay. One tap and you're good.",
    lottieJson: "/images/SM Check In Timer.json",
  },
  {
    number: "03",
    title: "MISS ONE? WE ACT.",
    description:
      "If you don't respond, your Trusted Circle is alerted within 5 minutes, and SOS triggers on its own.",
    lottieJson: "/images/SM Check In Alert.json",
  },
  {
    number: "04",
    title: "ARRIVE, OR EXTEND",
    description:
      "5 minutes before you arrive, Nazr asks you to confirm or add more time if plans change.",
    lottieJson: "/images/SM Arrived SOS.json",
  },
];

const stepDurations = [9000, 11500, 5000, 7000];

function StepLottie({
  animationData,
  isActive,
  playTrigger,
  onComplete,
}: {
  animationData: any;
  isActive: boolean;
  playTrigger: number;
  onComplete: () => void;
}) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (lottieRef.current) {
      if (isActive) {
        lottieRef.current.goToAndPlay(0, true);
      } else {
        // Pause where it finished so it doesn't snap to frame 0 while smoothly fading out
        lottieRef.current.pause();
      }
    }
  }, [isActive, playTrigger]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={false}
      onComplete={() => {
        if (isActive) {
          onComplete();
        }
      }}
      className="w-full h-full object-contain drop-shadow-2xl"
    />
  );
}

export function ShieldModeFeatures() {
  const [activeStep, setActiveStep] = useState(0);
  const [playTrigger, setPlayTrigger] = useState(0);
  const [animationDataMap, setAnimationDataMap] = useState<Record<number, any>>({});
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const lastAdvanceRef = useRef<number>(0);

  // Preload and clean all 4 Lottie JSON files on mount (filter out solid background layers)
  useEffect(() => {
    steps.forEach((step, idx) => {
      fetch(step.lottieJson)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.layers) {
            // Filter out solid colored background layers
            data.layers = data.layers.filter((l: any) => l.ty !== 1);
          }
          setAnimationDataMap((prev) => ({ ...prev, [idx]: data }));
        })
        .catch((err) => console.error(`Error loading Lottie ${step.lottieJson}:`, err));
    });
  }, []);

  const handleStepComplete = useCallback(() => {
    if (!isInView) return;
    const now = Date.now();
    if (now - lastAdvanceRef.current < 800) return; // Prevent double firing from duplicate renders
    lastAdvanceRef.current = now;

    setActiveStep((prev) => (prev + 1) % steps.length);
    setPlayTrigger((prev) => prev + 1);
  }, [isInView]);

  // When user scrolls to this section: always start from 1st step (index 0)
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            lastAdvanceRef.current = Date.now();
            setActiveStep(0);
            setPlayTrigger((prev) => prev + 1);
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Fallback timer matching actual animation duration (+800ms buffer)
  useEffect(() => {
    if (!isInView) return;

    const duration = stepDurations[activeStep] || 8000;
    const fallbackTimer = setTimeout(() => {
      handleStepComplete();
    }, duration + 800);

    return () => clearTimeout(fallbackTimer);
  }, [activeStep, isInView, handleStepComplete, playTrigger]);

  const handleStepClick = useCallback((index: number) => {
    isUserScrollingRef.current = false;
    lastAdvanceRef.current = Date.now();
    setActiveStep(index);
    setPlayTrigger((prev) => prev + 1);

    const cardEl = cardRefs.current[index];
    const container = cardsScrollRef.current;
    if (cardEl && container) {
      const cardLeft = cardEl.offsetLeft;
      const cardWidth = cardEl.offsetWidth;
      const containerWidth = container.offsetWidth;
      const targetScroll = cardLeft - (containerWidth - cardWidth) / 2;
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  }, []);

  // Mobile horizontal swipe carousel refs & synchronization
  const cardsScrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isUserScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll active card into view on mobile
  useEffect(() => {
    if (isUserScrollingRef.current) return;
    const cardEl = cardRefs.current[activeStep];
    const container = cardsScrollRef.current;
    if (cardEl && container) {
      const cardLeft = cardEl.offsetLeft;
      const cardWidth = cardEl.offsetWidth;
      const containerWidth = container.offsetWidth;
      const targetScroll = cardLeft - (containerWidth - cardWidth) / 2;
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  }, [activeStep]);

  // JSON Swiping & Dragging on Mobile
  const [jsonDragOffset, setJsonDragOffset] = useState(0);
  const [isJsonDragging, setIsJsonDragging] = useState(false);
  const jsonTouchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const jsonIsHorizontalSwipeRef = useRef<boolean | null>(null);
  const jsonMouseStartRef = useRef<{ x: number; time: number } | null>(null);

  const handleJsonTouchStart = (e: React.TouchEvent) => {
    jsonTouchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now(),
    };
    jsonIsHorizontalSwipeRef.current = null;
    setIsJsonDragging(true);
  };

  const handleJsonTouchMove = (e: React.TouchEvent) => {
    if (!jsonTouchStartRef.current) return;
    const dx = e.touches[0].clientX - jsonTouchStartRef.current.x;
    const dy = e.touches[0].clientY - jsonTouchStartRef.current.y;

    if (jsonIsHorizontalSwipeRef.current === null) {
      if (Math.abs(dx) > 6 || Math.abs(dy) > 6) {
        jsonIsHorizontalSwipeRef.current = Math.abs(dx) > Math.abs(dy);
      }
    }

    if (jsonIsHorizontalSwipeRef.current === true) {
      if ((activeStep === 0 && dx > 0) || (activeStep === steps.length - 1 && dx < 0)) {
        setJsonDragOffset(dx * 0.3);
      } else {
        setJsonDragOffset(dx);
      }
    }
  };

  const handleJsonTouchEnd = () => {
    if (jsonTouchStartRef.current) {
      const isHorizontal = jsonIsHorizontalSwipeRef.current === true;
      const threshold = 40;
      const deltaTime = Date.now() - jsonTouchStartRef.current.time;

      if (isHorizontal && Math.abs(jsonDragOffset) > threshold) {
        if (jsonDragOffset < -threshold) {
          if (activeStep < steps.length - 1) {
            handleStepClick(activeStep + 1);
          } else if (jsonDragOffset < -70) {
            handleStepClick(0);
          }
        } else if (jsonDragOffset > threshold) {
          if (activeStep > 0) {
            handleStepClick(activeStep - 1);
          } else if (jsonDragOffset > 70) {
            handleStepClick(steps.length - 1);
          }
        }
      } else if (Math.abs(jsonDragOffset) < 10 && deltaTime < 350) {
        handleStepClick((activeStep + 1) % steps.length);
      }
    }

    jsonTouchStartRef.current = null;
    jsonIsHorizontalSwipeRef.current = null;
    setIsJsonDragging(false);
    setJsonDragOffset(0);
  };

  const handleJsonMouseDown = (e: React.MouseEvent) => {
    jsonMouseStartRef.current = { x: e.clientX, time: Date.now() };
    setIsJsonDragging(true);
  };

  const handleJsonMouseMove = (e: React.MouseEvent) => {
    if (!jsonMouseStartRef.current) return;
    const dx = e.clientX - jsonMouseStartRef.current.x;
    if ((activeStep === 0 && dx > 0) || (activeStep === steps.length - 1 && dx < 0)) {
      setJsonDragOffset(dx * 0.3);
    } else {
      setJsonDragOffset(dx);
    }
  };

  const handleJsonMouseUp = () => {
    if (jsonMouseStartRef.current) {
      const threshold = 40;
      const deltaTime = Date.now() - jsonMouseStartRef.current.time;
      if (Math.abs(jsonDragOffset) > threshold) {
        if (jsonDragOffset < -threshold) {
          if (activeStep < steps.length - 1) {
            handleStepClick(activeStep + 1);
          } else if (jsonDragOffset < -70) {
            handleStepClick(0);
          }
        } else if (jsonDragOffset > threshold) {
          if (activeStep > 0) {
            handleStepClick(activeStep - 1);
          } else if (jsonDragOffset > 70) {
            handleStepClick(steps.length - 1);
          }
        }
      } else if (Math.abs(jsonDragOffset) < 10 && deltaTime < 350) {
        handleStepClick((activeStep + 1) % steps.length);
      }
    }
    jsonMouseStartRef.current = null;
    setIsJsonDragging(false);
    setJsonDragOffset(0);
  };

  const handleMobileScroll = () => {
    if (!cardsScrollRef.current) return;
    isUserScrollingRef.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      if (!cardsScrollRef.current) return;
      const container = cardsScrollRef.current;
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const cardCenter = el.offsetLeft + el.offsetWidth / 2;
        const distance = Math.abs(cardCenter - containerCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      if (closestIndex !== activeStep) {
        lastAdvanceRef.current = Date.now();
        setActiveStep(closestIndex);
        setPlayTrigger((prev) => prev + 1);
      }

      isUserScrollingRef.current = false;
    }, 80);
  };

  const handleCardTap = (index: number) => {
    handleStepClick(index);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0A0A0A] text-white pt-12 md:pt-20 pb-6 md:pb-10 relative z-50 overflow-hidden select-none"
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-8 flex flex-col items-center">
        {/* Eyebrow Header */}
        <p
          className="m-0 text-[#E6007E] font-normal uppercase text-center text-[18px] md:text-[20px] tracking-[2px]"
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
          }}
        >
          SHIELD MODE
        </p>

        {/* Main Headline */}
        <h2
          className="m-0 text-white font-normal uppercase text-center text-[42px] sm:text-[56px] md:text-[76px] lg:text-[84px] leading-[95%] tracking-normal mt-2"
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
          }}
        >
          YOUR SAFETY NET FOR EVERY TRIP.
        </h2>

        {/* Desktop 3-Column Interactive Layout */}
        <div className="hidden lg:grid grid-cols-[340px_1fr_340px] items-center w-full mt-12 xl:mt-16 relative">
          
          {/* Left Column: Steps 01 & 02 */}
          <div className="flex flex-col justify-between h-[420px] py-4">
            {/* Step 01 */}
            <div
              onClick={() => handleStepClick(0)}
              className="cursor-pointer group flex items-center justify-between relative transition-transform duration-200 hover:translate-x-1"
            >
              <div className="max-w-[270px]">
                <span
                  className="block text-[#E6007E] text-[24px] leading-none mb-1.5"
                  style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
                >
                  {steps[0].number}
                </span>
                <h3
                  className="m-0 text-[32px] leading-tight transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                    color: activeStep === 0 ? "#E6007E" : "#FFFFFF",
                  }}
                >
                  {steps[0].title}
                </h3>
                <p
                  className="m-0 mt-2 text-[14px] leading-[20px] font-normal font-[family-name:var(--font-inter)] transition-colors duration-300"
                  style={{
                    color: activeStep === 0 ? "#D4D4D4" : "#9E9E9E",
                  }}
                >
                  {steps[0].description}
                </p>
              </div>

              {/* Connector line pointing towards center with pink dot */}
              <div className="flex items-center flex-1 min-w-[50px] ml-4 pointer-events-none">
                <div
                  className="h-[1px] w-full transition-colors duration-300"
                  style={{
                    backgroundColor: activeStep === 0 ? "#E6007E" : "#333333",
                  }}
                />
                <div
                  className="w-[8px] h-[8px] rounded-full bg-[#E6007E] shrink-0 transition-transform duration-300"
                  style={{
                    transform: activeStep === 0 ? "scale(1.4)" : "scale(1)",
                    boxShadow: activeStep === 0 ? "0 0 10px #E6007E, 0 0 4px #E6007E" : "none",
                  }}
                />
              </div>
            </div>

            {/* Step 02 */}
            <div
              onClick={() => handleStepClick(1)}
              className="cursor-pointer group flex items-center justify-between relative transition-transform duration-200 hover:translate-x-1"
            >
              <div className="max-w-[270px]">
                <span
                  className="block text-[#E6007E] text-[24px] leading-none mb-1.5"
                  style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
                >
                  {steps[1].number}
                </span>
                <h3
                  className="m-0 text-[32px] leading-tight transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                    color: activeStep === 1 ? "#E6007E" : "#FFFFFF",
                  }}
                >
                  {steps[1].title}
                </h3>
                <p
                  className="m-0 mt-2 text-[14px] leading-[20px] font-normal font-[family-name:var(--font-inter)] transition-colors duration-300"
                  style={{
                    color: activeStep === 1 ? "#D4D4D4" : "#9E9E9E",
                  }}
                >
                  {steps[1].description}
                </p>
              </div>

              {/* Connector line pointing towards center with pink dot */}
              <div className="flex items-center flex-1 min-w-[50px] ml-4 pointer-events-none">
                <div
                  className="h-[1px] w-full transition-colors duration-300"
                  style={{
                    backgroundColor: activeStep === 1 ? "#E6007E" : "#333333",
                  }}
                />
                <div
                  className="w-[8px] h-[8px] rounded-full bg-[#E6007E] shrink-0 transition-transform duration-300"
                  style={{
                    transform: activeStep === 1 ? "scale(1.4)" : "scale(1)",
                    boxShadow: activeStep === 1 ? "0 0 10px #E6007E, 0 0 4px #E6007E" : "none",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Center Column: Burgundy Ellipse + Central Phone with ONLY Lottie */}
          <div className="flex items-center justify-center relative w-full h-[440px] xl:h-[460px]">
            {/* Plum/Burgundy Backdrop Ellipse */}
            <div
              className="w-[380px] xl:w-[414px] h-[300px] xl:h-[334px] rounded-full bg-[#350B24] absolute flex items-center justify-center pointer-events-none transition-all duration-500"
              style={{
                boxShadow: "0 0 60px rgba(53, 11, 36, 0.6)",
              }}
            />

            {/* Central Lottie Container - click advances to next step */}
            <div
              onClick={() => handleStepClick((activeStep + 1) % steps.length)}
              className="relative z-10 w-[420px] xl:w-[480px] h-[400px] xl:h-[450px] flex items-center justify-center cursor-pointer"
              title="Click to advance Shield Mode step"
            >
              {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-600 ease-in-out ${
                      activeStep === idx
                        ? "opacity-100 pointer-events-auto z-10"
                        : "opacity-0 pointer-events-none z-0"
                    }`}
                  >
                  {animationDataMap[idx] && (
                    <StepLottie
                      animationData={animationDataMap[idx]}
                      isActive={activeStep === idx}
                      playTrigger={playTrigger}
                      onComplete={handleStepComplete}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Steps 03 & 04 */}
          <div className="flex flex-col justify-between h-[420px] py-4">
            {/* Step 03 */}
            <div
              onClick={() => handleStepClick(2)}
              className="cursor-pointer group flex items-center justify-between relative transition-transform duration-200 hover:-translate-x-1"
            >
              {/* Connector line coming from center with pink dot */}
              <div className="flex items-center flex-1 min-w-[50px] mr-4 pointer-events-none">
                <div
                  className="w-[8px] h-[8px] rounded-full bg-[#E6007E] shrink-0 transition-transform duration-300"
                  style={{
                    transform: activeStep === 2 ? "scale(1.4)" : "scale(1)",
                    boxShadow: activeStep === 2 ? "0 0 10px #E6007E, 0 0 4px #E6007E" : "none",
                  }}
                />
                <div
                  className="h-[1px] w-full transition-colors duration-300"
                  style={{
                    backgroundColor: activeStep === 2 ? "#E6007E" : "#333333",
                  }}
                />
              </div>

              <div className="max-w-[270px]">
                <span
                  className="block text-[#E6007E] text-[24px] leading-none mb-1.5"
                  style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
                >
                  {steps[2].number}
                </span>
                <h3
                  className="m-0 text-[32px] leading-tight transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                    color: activeStep === 2 ? "#E6007E" : "#FFFFFF",
                  }}
                >
                  {steps[2].title}
                </h3>
                <p
                  className="m-0 mt-2 text-[14px] leading-[20px] font-normal font-[family-name:var(--font-inter)] transition-colors duration-300"
                  style={{
                    color: activeStep === 2 ? "#D4D4D4" : "#9E9E9E",
                  }}
                >
                  {steps[2].description}
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div
              onClick={() => handleStepClick(3)}
              className="cursor-pointer group flex items-center justify-between relative transition-transform duration-200 hover:-translate-x-1"
            >
              {/* Connector line coming from center with pink dot */}
              <div className="flex items-center flex-1 min-w-[50px] mr-4 pointer-events-none">
                <div
                  className="w-[8px] h-[8px] rounded-full bg-[#E6007E] shrink-0 transition-transform duration-300"
                  style={{
                    transform: activeStep === 3 ? "scale(1.4)" : "scale(1)",
                    boxShadow: activeStep === 3 ? "0 0 10px #E6007E, 0 0 4px #E6007E" : "none",
                  }}
                />
                <div
                  className="h-[1px] w-full transition-colors duration-300"
                  style={{
                    backgroundColor: activeStep === 3 ? "#E6007E" : "#333333",
                  }}
                />
              </div>

              <div className="max-w-[270px]">
                <span
                  className="block text-[#E6007E] text-[24px] leading-none mb-1.5"
                  style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
                >
                  {steps[3].number}
                </span>
                <h3
                  className="m-0 text-[32px] leading-tight transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                    color: activeStep === 3 ? "#E6007E" : "#FFFFFF",
                  }}
                >
                  {steps[3].title}
                </h3>
                <p
                  className="m-0 mt-2 text-[14px] leading-[20px] font-normal font-[family-name:var(--font-inter)] transition-colors duration-300"
                  style={{
                    color: activeStep === 3 ? "#D4D4D4" : "#9E9E9E",
                  }}
                >
                  {steps[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Responsive Layout (< 1024px) */}
        <div className="lg:hidden flex flex-col items-center w-full mt-8 gap-8">
          {/* Phone Display with Swipable Lottie Carousel (< 1024px) */}
          <div
            className="flex items-center justify-center relative w-full h-[360px] touch-pan-y select-none"
            onTouchStart={handleJsonTouchStart}
            onTouchMove={handleJsonTouchMove}
            onTouchEnd={handleJsonTouchEnd}
            onMouseDown={handleJsonMouseDown}
            onMouseMove={handleJsonMouseMove}
            onMouseUp={handleJsonMouseUp}
            onMouseLeave={handleJsonMouseUp}
          >
            <div className="w-[280px] h-[240px] rounded-full bg-[#350B24] absolute shadow-xl pointer-events-none" />
            <div className="relative z-10 w-[300px] h-[340px] overflow-hidden flex items-center cursor-grab active:cursor-grabbing">
              <div
                className={`flex w-full h-full ${
                  isJsonDragging ? "" : "transition-transform duration-500 ease-out"
                }`}
                style={{
                  transform: `translateX(calc(-${activeStep * 100}% + ${jsonDragOffset}px))`,
                }}
              >
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="w-[300px] h-[340px] shrink-0 flex items-center justify-center pointer-events-none"
                  >
                    {animationDataMap[idx] && (
                      <StepLottie
                        animationData={animationDataMap[idx]}
                        isActive={activeStep === idx}
                        playTrigger={playTrigger}
                        onComplete={handleStepComplete}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Steps Horizontal Swipe Carousel for Mobile (< 1024px) */}
          <div className="w-full relative px-0">
            <div
              ref={cardsScrollRef}
              onScroll={handleMobileScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-3.5 px-4 sm:px-6 w-full py-2"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <div
                    key={index}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    onClick={() => handleCardTap(index)}
                    className={`w-[85vw] max-w-[340px] shrink-0 snap-center p-5 rounded-[20px] transition-all cursor-pointer select-none ${
                      isActive
                        ? "bg-[#131313] border-[1.5px] border-[#E6007E] shadow-[0_0_22px_rgba(230,0,126,0.18)]"
                        : "bg-[#111111] border border-[#222222] opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="text-[#E6007E] text-[24px] leading-none"
                        style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}
                      >
                        {step.number}
                      </span>
                      <span
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-[#E6007E] shadow-[0_0_8px_#E6007E] opacity-100 scale-100"
                            : "bg-[#E6007E]/40 opacity-40 scale-75"
                        }`}
                      />
                    </div>
                    <h3
                      className="m-0 text-[26px] leading-tight transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                        color: isActive ? "#E6007E" : "#FFFFFF",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className="m-0 mt-2 text-[#9E9E9E] text-[14px] leading-[21px] font-normal font-[family-name:var(--font-inter)]">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Pagination Indicators for Mobile Carousel */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCardTap(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeStep === idx
                      ? "w-6 bg-[#E6007E] shadow-[0_0_8px_#E6007E]"
                      : "w-2 bg-[#333333] hover:bg-[#555555]"
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Rounded Pill Banner */}
        <div className="mt-6 md:mt-8 lg:mt-3 xl:mt-4 inline-flex items-center justify-center px-7 sm:px-9 py-2.5 sm:py-3 rounded-full bg-[#121212] border border-[#262626] shadow-xl relative z-20">
          <p className="m-0 text-[#D4D4D4] font-normal text-[13.5px] sm:text-[14.5px] leading-[20px] tracking-wide text-center font-[family-name:var(--font-inter)]">
            Your Trusted Circle can also trigger SOS for you, remotely.
          </p>
        </div>
      </div>
    </section>
  );
}
