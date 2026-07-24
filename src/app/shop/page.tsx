import { Header } from "@/components/ui/Header";
import { ContactUsSection } from "@/components/ui/ContactUsSection";
import { AutoMovingCarousel } from "@/components/ui/AutoMovingCarousel";
import { ShopHero } from "@/components/ui/ShopHero";
import { ProductScrollStack } from "@/components/shop/ProductScrollStack";
import { ShopProblemSteps } from "@/components/ui/ShopProblemSteps";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export default function ShopPage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#161616] w-full">
        <DesktopScaler>
          <Header />
        </DesktopScaler>

        {/* The Beige Canvas Section */}
        <section className="w-full flex-1 flex justify-center bg-[#161616] relative z-[70] max-md:mt-0 md:-mt-[48px] max-md:rounded-t-[9.71px] md:rounded-t-[26px]">
          <DesktopScaler bgColor="#FFF1EB" className="max-md:rounded-t-[9.71px] md:rounded-t-[26px]">
            <div
              className="w-full bg-[#FFF1EB] relative max-md:rounded-t-[9.71px] md:rounded-t-[26px]"
              style={{
                minHeight: '680px',
              }}
            >
              <ShopHero />
            </div>
          </DesktopScaler>
        </section>

        {/* Sticky Scroll Stack — outside clipped canvas so sticky works against window */}
        <ProductScrollStack />

        {/* Problem Steps Section */}
        <section className="w-full flex justify-center bg-[#161616]">
          <DesktopScaler bgColor="#FFF1EB" className="w-full">
            <div className="w-full bg-[#FFF1EB]">
              <ShopProblemSteps />
            </div>
          </DesktopScaler>
        </section>

        {/* Contact Us Section & Carousel */}
        <DesktopScaler bgColor="#FFF1EB" className="max-md:rounded-b-[9.71px] md:rounded-b-[26px] overflow-hidden">
          <div className="relative z-[60] -mt-[1px] bg-[#FFF1EB] w-full max-md:rounded-b-[9.71px] md:rounded-b-[26px] overflow-hidden">
            <ContactUsSection />
            <AutoMovingCarousel className="bg-[#FFF1EB] -mt-[1px]" />
          </div>
        </DesktopScaler>
      </main>
    </>
  );
}
