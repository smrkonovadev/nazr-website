"use client";

import { ProblemStatement } from "./ProblemStatement";
import { InteractiveCards } from "./InteractiveCards";

export function ProblemCardsStickyWrapper() {
  return (
    <div className="relative w-full bg-[#161616] pt-0 pb-4 md:pt-0 md:pb-6 flex flex-col justify-center items-center min-h-auto md:min-h-screen">
      <ProblemStatement />
      <InteractiveCards />
    </div>
  );
}
