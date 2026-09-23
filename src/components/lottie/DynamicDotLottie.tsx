"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { DeferredDotLottieProps } from "./DeferredDotLottie";

export const DynamicDotLottie: ComponentType<DeferredDotLottieProps> = dynamic(
  () => import("./DeferredDotLottie").then((mod) => mod.DeferredDotLottie),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center relative pointer-events-none" />
    ),
  }
);

export default DynamicDotLottie;
