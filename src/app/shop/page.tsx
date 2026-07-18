import { Header } from "@/components/ui/Header";
import { ContactUsSection } from "@/components/ui/ContactUsSection";
import { AutoMovingCarousel } from "@/components/ui/AutoMovingCarousel";
import { ShopHero } from "@/components/ui/ShopHero";
import { ShopProductPepperSpray } from "@/components/ui/ShopProductPepperSpray";
import { ShopProductTwo } from "@/components/ui/ShopProductTwo";
import { ShopProductThree } from "@/components/ui/ShopProductThree";
import { ShopProblemSteps } from "@/components/ui/ShopProblemSteps";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export default function ShopPage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#161616] w-full overflow-x-hidden">
        <DesktopScaler>
          <Header />
        </DesktopScaler>

        {/* The Beige Canvas Section */}
        <section className="w-full flex-1 flex justify-center bg-[#161616] relative z-[70] max-md:mt-0 md:-mt-[48px] max-md:rounded-t-[32px] md:rounded-t-[26px]">
          <DesktopScaler bgColor="#FFF1EB" className="max-md:rounded-t-[32px] md:rounded-t-[26px]">
            <div
              className="w-full bg-[#FFF1EB] relative max-md:rounded-t-[32px] md:rounded-t-[26px]"
              style={{
                minHeight: '800px',
              }}
            >
              <ShopHero />
              <ShopProductPepperSpray />
              <ShopProductTwo />
              <ShopProductThree />
              <ShopProblemSteps />
            </div>
          </DesktopScaler>
        </section>

        {/* Contact Us Section & Carousel */}
        <DesktopScaler bgColor="#FFF1EB" className="max-md:rounded-b-[32px] md:rounded-b-[26px]">
          <div className="relative z-[60] -mt-[1px] bg-[#FFF1EB] w-full max-md:rounded-b-[32px] md:rounded-b-[26px]">
            <ContactUsSection />
            <AutoMovingCarousel className="bg-[#FFF1EB] -mt-[1px]" />
          </div>
        </DesktopScaler>
      </main>
    </>
  );
}
