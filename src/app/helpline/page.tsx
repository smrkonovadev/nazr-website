import { Header } from "@/components/ui/Header";

import { HelplineDirectoryIntro } from "@/components/ui/HelplineDirectoryIntro";
import { HelplineTable } from "@/components/ui/HelplineTable";
import { ContactUsSection } from "@/components/ui/ContactUsSection";
import { AutoMovingCarousel } from "@/components/ui/AutoMovingCarousel";

import { DesktopScaler } from "@/components/ui/DesktopScaler";

export default function HelplinePage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#161616] w-full overflow-x-hidden">
        <DesktopScaler>
          <Header />

          {/* The Beige Canvas Section */}
          <div className="w-full flex-1 bg-[#FFF1EB] rounded-t-[26px] max-md:rounded-b-[32px] md:rounded-b-[26px] overflow-hidden relative z-[70] max-md:mt-0 md:-mt-[48px] flex flex-col">
            <HelplineDirectoryIntro />
            <HelplineTable />

            {/* Contact Us Section */}
            <ContactUsSection />

            {/* Animated Infinite Carousel */}
            <AutoMovingCarousel className="bg-[#FFF1EB]" />
          </div>
        </DesktopScaler>
      </main>
    </>
  );
}
