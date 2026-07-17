"use client";

import Image from "next/image";

export function WhyNazrCreation() {
  return (
    <div className="w-full relative flex items-center justify-center py-4 md:py-6 z-10 overflow-visible min-h-[250px] md:min-h-[400px] -mt-[40px] md:-mt-[100px]">
      {/* Left Hand Image */}
      <div className="absolute left-0 right-[calc(50%+60px)] md:right-[calc(50%+80px)] lg:right-[calc(50%+100px)] top-1/2 -translate-y-1/2 -mt-[10px] md:-mt-[15px] h-[75%] md:h-[95%] pointer-events-none z-0">
        <Image
          src="/images/lefthand.png"
          alt="Left Hand"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      {/* Right Hand Image */}
      <div className="absolute right-0 left-[calc(50%+30px)] md:left-[calc(50%+50px)] lg:left-[calc(50%+70px)] top-1/2 -translate-y-1/2 -mt-[10px] md:-mt-[15px] h-[75%] md:h-[95%] pointer-events-none z-0">
        <Image
          src="/images/righthand.png"
          alt="Right Hand"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      {/* Center Image */}
      <div className="relative z-20 w-[280px] md:w-[420px] lg:w-[520px] aspect-square animate-[spin_20s_linear_infinite] left-[15px] md:left-[25px]">
        <Image
          src="/images/new46.png"
          alt="Nazr Ecosystem"
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
}
