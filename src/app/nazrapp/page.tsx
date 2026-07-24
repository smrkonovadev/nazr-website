import { Header } from "@/components/ui/Header";

import { NazrAppIntro } from "@/components/ui/NazrAppIntro";
import { OneTapSOSSection } from "@/components/ui/OneTapSOSSection";
import { TriggerSection } from "@/components/ui/TriggerSection";
import { ShieldModeSection } from "@/components/ui/ShieldModeSection";
import { ShieldModeFeatures } from "@/components/ui/ShieldModeFeatures";
import { TrustedCircleSection } from "@/components/ui/TrustedCircleSection";
import { OurProductsHeader } from "@/components/ui/OurProductsHeader";
import { ProductCardsCarousel } from "@/components/ui/ProductCardsCarousel";
import { ContactUsSection } from "@/components/ui/ContactUsSection";
import { AutoMovingCarousel } from "@/components/ui/AutoMovingCarousel";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export default function NazrAppPage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#161616] w-full">
        <DesktopScaler>
          <Header />
        </DesktopScaler>

        {/* The World Stares Rectangle Section (Empty Canvas) */}
        <section className="w-full flex-1 flex justify-center bg-[#161616] relative z-[70] max-md:mt-0 md:-mt-[48px] max-md:rounded-t-[9.71px] md:rounded-t-[26px]">
          <DesktopScaler bgColor="#F3E5E0" className="max-md:rounded-t-[9.71px] md:rounded-t-[26px]">
            <div
              className="w-full bg-[#F3E5E0] relative max-md:rounded-t-[9.71px] md:rounded-t-[26px]"
              style={{
                minHeight: '800px', // Large canvas area
              }}
            >
              <NazrAppIntro />
              <OneTapSOSSection />
              <TriggerSection />
            </div>
          </DesktopScaler>
        </section>

        {/* Shield Mode Dark Section */}
        <DesktopScaler>
          <ShieldModeSection />
        </DesktopScaler>
        <ShieldModeFeatures />

        {/* Trusted Circle Section */}
        <DesktopScaler bgColor="#F1E4DE">
          <TrustedCircleSection />
        </DesktopScaler>

        {/* Our Products Section */}
        <DesktopScaler>
          <OurProductsHeader />
          <ProductCardsCarousel />
        </DesktopScaler>

        {/* Contact Us Section */}
        <DesktopScaler bgColor="#FFF1EB" className="md:rounded-b-[26px] max-md:rounded-b-[9.71px] overflow-hidden -mt-[1px]">
          <div className="w-full relative z-[60] bg-[#FFF1EB] md:rounded-b-[26px] max-md:rounded-b-[9.71px] overflow-hidden pb-0 -mt-[1px]">
            <ContactUsSection />
            {/* Animated Infinite Carousel */}
            <AutoMovingCarousel className="bg-[#FFF1EB] -mt-[1px]" />
          </div>
        </DesktopScaler>
      </main>
    </>
  );
}
