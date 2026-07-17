"use client";

import Image from "next/image";

export function WhyNazrCreation() {
  return (
    <div className="w-full relative flex items-center justify-center py-4 md:py-8 -mt-[48px] md:-mt-[40px] z-10 overflow-visible min-h-[300px] md:min-h-[500px]">
      {/* Left Hand Image */}
      <div className="absolute left-0 right-[calc(50%+70px)] md:right-[calc(50%+100px)] lg:right-[calc(50%+120px)] top-1/2 -translate-y-1/2 -mt-[250px] h-[100%] md:h-[120%] pointer-events-none z-0">
        <Image
          src="/images/lefthand.png"
          alt="Left Hand"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      {/* Right Hand Image */}
      <div className="absolute right-0 left-[calc(50%+40px)] md:left-[calc(50%+70px)] lg:left-[calc(50%+90px)] top-1/2 -translate-y-1/2 -mt-[250px] h-[100%] md:h-[120%] pointer-events-none z-0">
        <Image
          src="/images/righthand.png"
          alt="Right Hand"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      {/* Center Image */}
      <div className="relative z-20 w-[360px] md:w-[640px] lg:w-[820px] aspect-square animate-[spin_20s_linear_infinite] left-[25px]">
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
