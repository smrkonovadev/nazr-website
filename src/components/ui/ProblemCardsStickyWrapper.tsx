"use client";

import { ProblemStatement } from "./ProblemStatement";
import { InteractiveCards } from "./InteractiveCards";

export function ProblemCardsStickyWrapper() {
  return (
    <div className="relative w-full bg-[#161616] py-6 md:py-10 flex flex-col justify-center items-center md:min-h-[calc(100vh/var(--desktop-scale,1))] relative">
      <ProblemStatement />
      <InteractiveCards />
    </div>
  );
}
