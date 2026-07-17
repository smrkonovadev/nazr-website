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

        <DesktopScaler bgColor="#FFF1EB" className="md:rounded-t-[26px] max-md:rounded-t-[32px] md:rounded-b-[26px] max-md:rounded-b-[32px] overflow-hidden">
          <div className="w-full bg-[#FFF1EB] md:rounded-t-[26px] max-md:rounded-t-[32px] md:rounded-b-[26px] max-md:rounded-b-[32px] md:-mt-[20px] relative z-20 pb-0">
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
