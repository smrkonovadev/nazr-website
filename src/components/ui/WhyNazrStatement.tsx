"use client";

import Image from "next/image";

export function WhyNazrStatement() {
  return (
    <section className="w-full bg-[#161616] flex flex-col items-center justify-center py-20 md:py-40 px-4 z-40 relative">

      {/* Typography Container */}
      <div
        className="flex flex-col items-center justify-center gap-y-[10px] md:gap-y-[20px] text-[#FFF1EB] font-[family-name:var(--font-bebas)] uppercase leading-[90%] tracking-[-0.03em] text-center"
        style={{ fontSize: "clamp(24px, 6.8vw, 100px)" }}
      >

        {/* Line 1 */}
        <div className="flex items-center gap-x-3 md:gap-x-6">
          <div className="relative w-[1.5em] h-[1em] flex-shrink-0">
            <Image src="/images/whyyna1.svg" alt="Planet" fill className="object-contain" />
          </div>
          <span>FOR YEARS, INDIAN WOMEN</span>
        </div>

        {/* Line 2 */}
        <div className="flex items-center gap-x-3 md:gap-x-6">
          <span>BUILT THEIR OWN</span>
          <div className="relative w-[1.8em] h-[1em] flex-shrink-0">
            <Image src="/images/whyyna2.svg" alt="Hands" fill className="object-contain" />
          </div>
          <span>SAFETY SYSTEMS</span>
        </div>

        {/* Line 3 */}
        <div className="flex items-center gap-x-3 md:gap-x-6">
          <span>THROUGH INSTINCT, ROUTINES & TRUST.</span>
          <div className="relative w-[1.2em] h-[1em] flex-shrink-0">
            <Image src="/images/whyyna3.svg" alt="Star" fill className="object-contain" />
          </div>
        </div>

        {/* Line 4 */}
        <div className="flex items-center gap-x-3 md:gap-x-6">
          <div className="relative w-[1.3em] h-[1em] flex-shrink-0">
            <Image src="/images/whyyna4.svg" alt="Heart" fill className="object-contain" />
          </div>
          <span>THE HABITS EXISTED</span>
        </div>

        {/* Line 5 */}
        <div className="flex items-center gap-x-3 md:gap-x-6">
          <span>THE ECOSYSTEM DIDN&apos;T.</span>
          <div className="relative w-[1.3em] h-[1em] flex-shrink-0">
            <Image src="/images/whyyna5.svg" alt="Moon" fill className="object-contain" />
          </div>
        </div>

      </div>
    </section>
  );
}
