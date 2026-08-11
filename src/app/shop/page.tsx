import type { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { ShopHero } from "@/components/ui/ShopHero";
import { ProductScrollStack } from "@/components/shop/ProductScrollStack";
import { ShopProblemSteps } from "@/components/ui/ShopProblemSteps";
import { WhyNazrInTheirWordsSection } from "@/components/ui/WhyNazrInTheirWordsSection";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export const metadata: Metadata = {
  title: "Shop NAZR – Pepper Spray, Sip Check & Safety Kits",
  description: "Shop NAZR's safety essentials: On Me pepper spray (₹777), Sip Check drink covers (₹444), and the NAZR 360° bundle — thoughtfully designed, always within reach.",
  keywords: [
    "buy pepper spray India",
    "On Me pepper spray price",
    "Sip Check drink cover",
    "NAZR 360 bundle",
    "women's safety products online India",
  ],
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    title: "Shop NAZR – Pepper Spray, Sip Check & Safety Kits",
    description: "Shop NAZR's safety essentials: On Me pepper spray (₹777), Sip Check drink covers (₹444), and the NAZR 360° bundle — thoughtfully designed, always within reach.",
    url: "https://www.nazrco.in/shop",
    siteName: "NAZR",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop NAZR – Pepper Spray, Sip Check & Safety Kits",
    description: "Shop NAZR's safety essentials: On Me pepper spray (₹777), Sip Check drink covers (₹444), and the NAZR 360° bundle — thoughtfully designed, always within reach.",
  },
};

export default function ShopPage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#161616] w-full">
        <DesktopScaler>
          <Header />
        </DesktopScaler>

        {/* The Beige Canvas Section */}
        <section className="w-full flex-1 flex justify-center bg-[#161616] relative z-[70] max-md:mt-0 md:-mt-[48px] max-md:rounded-t-[9.71px] md:rounded-t-[26px] overflow-hidden">
          <DesktopScaler bgColor="#F1E4DE" className="max-md:rounded-t-[9.71px] md:rounded-t-[26px] overflow-hidden">
            <div
              className="w-full bg-[#F1E4DE] relative max-md:rounded-t-[9.71px] md:rounded-t-[26px] overflow-hidden max-md:min-h-0 md:min-h-[720px]"
            >
              <ShopHero />
            </div>
          </DesktopScaler>
        </section>

        {/* Sticky Scroll Stack — outside clipped canvas so sticky works against window */}
        <ProductScrollStack />

        {/* Problem Steps Section */}
        <section className="w-full flex justify-center bg-[#FFF1EB]">
          <DesktopScaler bgColor="#FFF1EB" className="w-full">
            <div className="w-full bg-[#FFF1EB]">
              <ShopProblemSteps />
            </div>
          </DesktopScaler>
        </section>

        {/* Why NAZR In Their Words Section (Home page last section) */}
        <DesktopScaler bgColor="#FFF1EB" className="max-md:rounded-b-[9.71px] md:rounded-b-[26px] overflow-hidden">
          <div className="relative z-[60] -mt-[1px] bg-[#FFF1EB] w-full max-md:rounded-b-[9.71px] md:rounded-b-[26px] overflow-hidden">
            <WhyNazrInTheirWordsSection />
          </div>
        </DesktopScaler>
      </main>
    </>
  );
}

