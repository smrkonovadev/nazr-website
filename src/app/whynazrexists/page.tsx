import { Header } from "@/components/ui/Header";

import { WhyNazrExistsIntro } from "@/components/ui/WhyNazrExistsIntro";
import { WhyNazrStatement } from "@/components/ui/WhyNazrStatement";
import { HorizontalScrollStory } from "@/components/ui/HorizontalScrollStory";
import { OurValuesSection } from "@/components/ui/OurValuesSection";
import { ContactUsSection } from "@/components/ui/ContactUsSection";
import { AutoMovingCarousel } from "@/components/ui/AutoMovingCarousel";

import { DesktopScaler } from "@/components/ui/DesktopScaler";

export default function WhyNazrExistsPage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#161616] w-full overflow-clip">
        <DesktopScaler>
          <Header />

          {/* The Beige Canvas Section */}
          <section className="w-full flex-1 flex justify-center bg-[#161616] relative z-[70]">
            <div
              className="w-full bg-[#FFF1EB] relative max-md:mt-0 md:-mt-[48px] max-md:rounded-t-[9.71px] md:rounded-t-[26px] min-h-[450px] md:min-h-[800px]"
            >
              <WhyNazrExistsIntro />
            </div>
          </section>

          {/* Typography Statement Section */}
          <WhyNazrStatement />
        </DesktopScaler>

        {/* Horizontal Scroll Story Section (Outside scaling container for viewport logic) */}
        <HorizontalScrollStory />

        <DesktopScaler bgColor="#FFF1EB" className="md:rounded-b-[26px] max-md:rounded-b-[9.71px] overflow-hidden">
          {/* Our Values Section */}
          <OurValuesSection />

          {/* Contact Us Section & Carousel */}
          <div className="w-full bg-[#FFF1EB] max-md:rounded-b-[9.71px] md:rounded-b-[26px] overflow-hidden relative z-20">
            <ContactUsSection />
            <AutoMovingCarousel className="bg-[#FFF1EB] -mt-[1px]" />
          </div>
        </DesktopScaler>
      </main>
    </>
  );
}
