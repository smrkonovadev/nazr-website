"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function HorizontalScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  const [owlAnimData, setOwlAnimData] = useState<any>(null);
  const [peopleAnimData, setPeopleAnimData] = useState<any>(null);

  useEffect(() => {
    fetch("/images/Owl.json")
      .then((res) => res.json())
      .then((data) => setOwlAnimData(data))
      .catch((err) => console.error("Error loading Owl Lottie:", err));

    fetch("/images/People Selected.json")
      .then((res) => res.json())
      .then((data) => setPeopleAnimData(data))
      .catch((err) => console.error("Error loading People Selected Lottie:", err));
  }, []);

  useEffect(() => {
    const updateScrollRange = () => {
      if (trackRef.current) {
        setScrollRange(trackRef.current.scrollWidth - window.innerWidth);
      }
    };

    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0.25, 0.95], [0, -scrollRange]);

  return (
    <>
      {/* Mobile Vertical 2-Card Sticky Stack View (< md) */}
      <section className="w-full bg-[#F1E4DE] px-4 py-8 flex flex-col gap-y-6 md:hidden relative z-30 min-h-screen">
        {/* Title */}
        <div className="w-full text-left py-2 mb-2">
          <h2 className="font-[family-name:var(--font-bebas)] text-[42px] sm:text-[50px] leading-[92%] tracking-[-0.03em] text-[#161616] m-0 uppercase">
            They Tell you to<br />lower your gaze, we<br />tell you to sharpen it.
          </h2>
        </div>

        {/* Stack Item 1: Card 1 + Text 1 */}
        <div className="sticky top-16 z-10 w-full bg-[#F1E4DE] rounded-[24px] overflow-hidden shadow-2xl p-4 border border-[#161616]/10 flex flex-col gap-y-4">
          <div className="w-full aspect-square max-h-[340px] rounded-[16px] overflow-hidden bg-[#F1E4DE] flex items-center justify-center">
            {owlAnimData ? (
              <Lottie
                animationData={owlAnimData}
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
              />
            ) : (
              <div className="w-full h-full" />
            )}
          </div>
          <div className="w-full text-left pb-2">
            <h3
              className="text-[#161616] mb-3"
              style={{
                fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
                fontWeight: 600,
                fontSize: "22px",
                lineHeight: "110%",
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                // @ts-ignore
                leadingTrim: "cap-height"
              }}
            >
              To Equip with Confidence
            </h3>
            <p
              className="text-[#161616] m-0"
              style={{
                fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "110%",
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                // @ts-ignore
                leadingTrim: "cap-height"
              }}
            >
              Nazr bridges the gap between high-end aesthetics and uncompromising security.
              OUR tools are as intuitive as they are effective, ensuring that every woman can navigate her world with the quiet authority of being prepared, not just protected.
            </p>
          </div>
        </div>

        {/* Stack Item 2: Card 2 + Text 2 (Stacks 100% over Stack Item 1) */}
        <div className="sticky top-20 z-20 w-full bg-[#F1E4DE] rounded-[24px] overflow-hidden shadow-2xl p-4 border border-[#161616]/10 flex flex-col gap-y-4 mt-6">
          <div className="w-full aspect-square max-h-[340px] rounded-[16px] overflow-hidden bg-[#F1E4DE] flex items-center justify-center">
            {peopleAnimData ? (
              <Lottie
                animationData={peopleAnimData}
                loop
                autoplay
                style={{ width: "100%", height: "100%" }}
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
              />
            ) : (
              <div className="w-full h-full" />
            )}
          </div>
          <div className="w-full text-left pb-2">
            <h3
              className="text-[#161616] mb-3"
              style={{
                fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
                fontWeight: 600,
                fontSize: "22px",
                lineHeight: "110%",
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                // @ts-ignore
                leadingTrim: "cap-height"
              }}
            >
              A Culture of Unblinking Presence
            </h3>
            <p
              className="text-[#161616] m-0"
              style={{
                fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "110%",
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                // @ts-ignore
                leadingTrim: "cap-height"
              }}
            >
              WE ARE setting a new standard of women’s safety in the Indian B2C space by shifting the narrative from a reaction to fear toward a culture of ownership.
              We are building a future where the Nazr Owl is the symbol for "Every Day Carry," representing a guardian that never blinks.
            </p>
          </div>
        </div>
      </section>

      {/* Desktop Horizontal Scroll View (>= md) */}
      <section ref={containerRef} className="relative h-[300vh] bg-[#F1E4DE] w-full hidden md:block">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden w-full py-6 md:py-10">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex flex-row flex-nowrap items-center h-full w-max"
          >
            {/* Viewport 1 (100vw wide) */}
            <div className="w-[100vw] flex flex-row items-center justify-between flex-shrink-0 pl-[5vw]">
              {/* Block 1: Title */}
              <div className="flex flex-col justify-center translate-y-0">
                <h2 className="font-[family-name:var(--font-bebas)] md:text-[85px] lg:text-[105px] xl:text-[115px] leading-[90%] tracking-[-0.03em] text-[#161616] m-0 uppercase">
                  They Tell you to<br />lower your gaze, we<br />tell you to sharpen it.
                </h2>
              </div>

              {/* Block 2: Card 1 - Owl Lottie (Peeking in from right edge initially) */}
              <div className="relative md:w-[600px] md:h-[660px] lg:w-[680px] lg:h-[760px] h-[74vh] md:h-[80vh] max-h-[80vh] flex-shrink-0 rounded-[20px] overflow-hidden shadow-2xl bg-[#F1E4DE] md:-mr-[380px] lg:-mr-[440px] translate-y-0 flex items-center justify-center">
                {owlAnimData ? (
                  <Lottie
                    animationData={owlAnimData}
                    loop
                    autoplay
                    style={{ width: "100%", height: "100%" }}
                    rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
                  />
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>
            </div>

            {/* Viewport 2+ (Rest of the horizontal track) */}
            <div className="flex flex-row items-center gap-x-[80px] lg:gap-x-[100px] md:ml-[calc(380px+80px)] lg:ml-[calc(440px+100px)] pr-[10vw]">
              {/* Block 3: Text 1 */}
              <div className="flex flex-col justify-center w-[300px] md:w-[460px] lg:w-[540px] flex-shrink-0">
                <h3
                  className="text-[#161616] mb-4"
                  style={{
                    fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
                    fontWeight: 600,
                    fontSize: "28px",
                    lineHeight: "110%",
                    letterSpacing: "-0.03em",
                    textTransform: "uppercase",
                    // @ts-ignore
                    leadingTrim: "cap-height"
                  }}
                >
                  To Equip with Confidence
                </h3>
                <p
                  className="text-[#161616] m-0"
                  style={{
                    fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "110%",
                    letterSpacing: "-0.03em",
                    textTransform: "uppercase",
                    // @ts-ignore
                    leadingTrim: "cap-height"
                  }}
                >
                  Nazr bridges the gap between high-end aesthetics and uncompromising security.
                  OUR tools are as intuitive as they are effective, ensuring that every woman can navigate her world with the quiet authority of being prepared, not just protected.
                </p>
              </div>

              {/* Block 4: Card 2 - People Selected Lottie */}
              <div className="relative md:w-[600px] md:h-[660px] lg:w-[680px] lg:h-[760px] h-[74vh] md:h-[80vh] max-h-[80vh] flex-shrink-0 rounded-[20px] overflow-hidden shadow-2xl bg-[#F1E4DE] translate-y-0 flex items-center justify-center">
                {peopleAnimData ? (
                  <Lottie
                    animationData={peopleAnimData}
                    loop
                    autoplay
                    style={{ width: "100%", height: "100%" }}
                    rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
                  />
                ) : (
                  <div className="w-full h-full" />
                )}
              </div>

              {/* Block 5: Text 2 */}
              <div className="flex flex-col justify-center w-[300px] md:w-[460px] lg:w-[540px] flex-shrink-0">
                <h3
                  className="text-[#161616] mb-4"
                  style={{
                    fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
                    fontWeight: 600,
                    fontSize: "28px",
                    lineHeight: "110%",
                    letterSpacing: "-0.03em",
                    textTransform: "uppercase",
                    // @ts-ignore
                    leadingTrim: "cap-height"
                  }}
                >
                  A Culture of Unblinking Presence
                </h3>
                <p
                  className="text-[#161616] m-0"
                  style={{
                    fontFamily: "Switzer, var(--font-geist-sans), sans-serif",
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "110%",
                    letterSpacing: "-0.03em",
                    textTransform: "uppercase",
                    // @ts-ignore
                    leadingTrim: "cap-height"
                  }}
                >
                  WE ARE setting a new standard of women’s safety in the Indian B2C space by shifting the narrative from a reaction to fear toward a culture of ownership.
                  We are building a future where the Nazr Owl is the symbol for "Every Day Carry," representing a guardian that never blinks.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
