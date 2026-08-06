"use client";

import { ProblemStatement } from "./ProblemStatement";
import { InteractiveCards } from "./InteractiveCards";

export function ProblemCardsStickyWrapper() {
  return (
    <div className="relative w-full bg-[#161616] pt-0 md:pt-2 pb-8 flex flex-col justify-start items-center md:min-h-[max(700px,calc(100vh/var(--desktop-scale,1)))] md:h-auto relative">
      <ProblemStatement />
      <InteractiveCards />
    </div>
  );
}
