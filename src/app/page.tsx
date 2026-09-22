import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/ui/Hero";
import { ProblemCardsStickyWrapper } from "@/components/ui/ProblemCardsStickyWrapper";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

// Below-the-fold sections dynamically loaded to keep initial bundle ultra-lean
const HelpWithoutHoldUp = dynamic(
  () => import("@/components/ui/HelpWithoutHoldUp").then((mod) => mod.HelpWithoutHoldUp),
  { ssr: true }
);
const SafetyHabits = dynamic(
  () => import("@/components/ui/SafetyHabits").then((mod) => mod.SafetyHabits),
  { ssr: true }
);
const SafetyDesigned = dynamic(
  () => import("@/components/ui/SafetyDesigned").then((mod) => mod.SafetyDesigned),
  { ssr: true }
);
const WhatWomenAreSaying = dynamic(
  () => import("@/components/ui/WhatWomenAreSaying").then((mod) => mod.WhatWomenAreSaying),
  { ssr: true }
);
const SafetyCommunitySection = dynamic(
  () => import("@/components/ui/SafetyCommunitySection").then((mod) => mod.SafetyCommunitySection),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "NAZR -  Women's Safety Ecosystem ",
  description: "NAZR is India's women's safety ecosystem: On Me pepper spray, Sip Check drink covers, and an app with one-tap SOS, Shield Mode, and Trusted Circle alerts.",
  keywords: [
    "women's safety app India",
    "pepper spray India",
    "SOS app for women",
    "Sip Check drink safety",
    "Shield Mode app",
    "Trusted Circle alerts",
    "personal safety products India",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NAZR -  Women's Safety Ecosystem ",
    description: "NAZR is India's women's safety ecosystem: On Me pepper spray, Sip Check drink covers, and an app with one-tap SOS, Shield Mode, and Trusted Circle alerts.",
    url: "https://www.nazrco.in/",
    siteName: "NAZR",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NAZR -  Women's Safety Ecosystem ",
    description: "NAZR is India's women's safety ecosystem: On Me pepper spray, Sip Check drink covers, and an app with one-tap SOS, Shield Mode, and Trusted Circle alerts.",
  },
};


export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#161616] w-full">
        <DesktopScaler>
          <Header />
          <Hero />
          <ProblemCardsStickyWrapper />
          <HelpWithoutHoldUp />
          <SafetyHabits />
          <SafetyDesigned />
          <WhatWomenAreSaying />
          <SafetyCommunitySection />
        </DesktopScaler>
      </main>
    </>
  );
}
