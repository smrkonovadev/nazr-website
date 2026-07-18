import { Header } from "@/components/ui/Header";

import { ContactUsSection } from "@/components/ui/ContactUsSection";
import { AutoMovingCarousel } from "@/components/ui/AutoMovingCarousel";
import { ShopHero } from "@/components/ui/ShopHero";
import { ProductScrollStack } from "@/components/shop/ProductScrollStack";
import { ShopProblemSteps } from "@/components/ui/ShopProblemSteps";

export default function ShopPage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#161616] w-full">
        <Header />

        {/* The Beige Canvas Section */}
        <section className="w-full flex-1 flex justify-center bg-[#161616] relative z-[70]">
          <div
            className="w-full max-w-[1536px] mx-auto bg-[#FFF1EB] relative max-md:mt-0 md:-mt-[48px] max-md:rounded-t-[32px] md:rounded-t-[26px]"
            style={{
              minHeight: '800px',
            }}
          >
            <ShopHero />
          </div>
        </section>

        {/* Sticky Scroll Stack — outside clipped canvas so sticky works against window */}
        <ProductScrollStack />

        <section className="w-full flex justify-center bg-[#161616]">
          <div className="w-full max-w-[1536px] mx-auto bg-[#FFF1EB]">
            <ShopProblemSteps />
          </div>
        </section>

        {/* Contact Us Section */}
        <div className="w-full flex justify-center bg-[#161616]">
          <div className="w-full max-w-[1536px]">
            <ContactUsSection />
          </div>
        </div>

        {/* Animated Infinite Carousel */}
        <div className="w-full flex justify-center bg-[#161616]">
          <div className="w-full max-w-[1536px]">
            <AutoMovingCarousel className="bg-[#FFF1EB] -mt-[1px]" />
          </div>
        </div>
      </main>
    </>
  );
}
