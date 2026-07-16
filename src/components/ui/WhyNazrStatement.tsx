"use client";

import Image from "next/image";

const PinkBadge = () => (
  <div className="relative w-[1em] h-[1em] flex-shrink-0">
    <Image
      src="/images/pinkround.svg"
      alt="Pink Badge"
      fill
      className="object-contain animate-spin-slow"
      style={{ animationDuration: '10s' }}
    />
  </div>
);

export function WhyNazrStatement() {
  return (
    <section className="w-full bg-[#161616] flex flex-col items-center justify-center py-20 md:py-40 px-4 z-40 relative">

      {/* Typography Container */}
      <div
        className="flex flex-col items-center justify-center gap-y-2 md:gap-y-4 text-[#F5F5F0] font-[family-name:var(--font-bebas)] uppercase leading-[85%] tracking-[-0.02em]"
        style={{ fontSize: "clamp(24px, 7vw, 94px)" }}
      >

        {/* Line 1 */}
        <div className="flex items-center gap-x-3 md:gap-x-6">
          <div className="relative w-[1.4em] h-[1em] flex-shrink-0">
            <Image src="/images/new47.svg" alt="Globe" fill className="object-contain" />
          </div>
          <span>FOR YEARS, INDIAN WOMEN</span>
        </div>

        {/* Line 2 */}
        <div className="flex items-center gap-x-3 md:gap-x-6">
          <span>BUILT THEIR OWN</span>
          <div className="relative w-[1.4em] h-[1em] flex-shrink-0 rotate-[-15deg] scale-[1.6]">
            <Image src="/images/greenlens.png" alt="Binoculars" fill className="object-contain" />
          </div>
          <span>SAFETY SYSTEMS</span>
        </div>

        {/* Line 3 */}
        <div className="flex items-center gap-x-3 md:gap-x-6">
          <span>Athrough instinct, routines & trust.</span>
          <PinkBadge />
        </div>

        {/* Line 4 */}
        <div className="flex items-center gap-x-3 md:gap-x-6">
          <div className="relative w-[1.4em] h-[1em] flex-shrink-0">
            <Image src="/images/globe.png" alt="Globe" fill className="object-contain" />
          </div>
          <span>the habits existed</span>
        </div>

        {/* Line 5 */}
        <div className="flex items-center gap-x-3 md:gap-x-6">
          <span>the ecosystem didn’t.</span>
          <div className="relative w-[1.4em] h-[1em] flex-shrink-0 rotate-[-15deg] scale-[1.6]">
            <Image src="/images/greenlens.png" alt="Binoculars" fill className="object-contain" />
          </div>
        </div>

      </div>
    </section>
  );
}
