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
              className="w-full bg-[#FFF1EB] relative max-md:mt-0 md:-mt-[48px] max-md:rounded-t-[32px] md:rounded-t-[26px] overflow-hidden"
            >
              <WhyNazrExistsIntro />
            </div>
          </section>

          {/* Typography Statement Section */}
          <WhyNazrStatement />

          {/* Horizontal Scroll Story Section */}
          <HorizontalScrollStory />

          {/* Our Values Section */}
          <OurValuesSection />

          {/* Contact Us Section */}
          <ContactUsSection />

          {/* Animated Infinite Carousel */}
          <AutoMovingCarousel className="bg-[#FFF1EB] -mt-[1px]" />
        </DesktopScaler>
      </main>
    </>
  );
}
