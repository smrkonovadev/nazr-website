import type { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/ui/Hero";
import { ProblemCardsStickyWrapper } from "@/components/ui/ProblemCardsStickyWrapper";
import { SafetyCommunitySection } from "@/components/ui/SafetyCommunitySection";
import { InteractiveCards } from "@/components/ui/InteractiveCards";
import { HelpWithoutHoldUp } from "@/components/ui/HelpWithoutHoldUp";
import { SafetyHabits } from "@/components/ui/SafetyHabits";
import { SafetyDesigned } from "@/components/ui/SafetyDesigned";
import { WhyNazrExists } from "@/components/ui/WhyNazrExists";
import { JoinConversation } from "@/components/ui/JoinConversation";
import { AutoMovingCarousel } from "@/components/ui/AutoMovingCarousel";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

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
          <SafetyCommunitySection />
        </DesktopScaler>

        <DesktopScaler bgColor="#FFF1EB" className="overflow-hidden rounded-t-[9.71px] md:rounded-t-[26px] rounded-b-[9.71px] md:rounded-b-[26px]">
          <div className="w-full bg-[#FFF1EB] relative z-20 pb-0 rounded-t-[9.71px] md:rounded-t-[26px] rounded-b-[9.71px] md:rounded-b-[26px] overflow-hidden">
            <WhyNazrExists />
            <InteractiveCards theme="cream" />
            <JoinConversation />
            <AutoMovingCarousel />
          </div>
        </DesktopScaler>
      </main>
    </>
  );
}
