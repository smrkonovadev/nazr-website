import type { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { ShopHero } from "@/components/ui/ShopHero";
import { ShopProductsSection } from "@/components/shop/ShopProductsSection";
import { WomenWhoStareBack } from "@/components/shop/WomenWhoStareBack";
import { WhyNazrTimeline } from "@/components/shop/WhyNazrTimeline";
import { ShopFaqSection } from "@/components/shop/ShopFaqSection";
import { StareBackBundleBanner } from "@/components/shop/StareBackBundleBanner";
import { AppBackupBanner } from "@/components/shop/AppBackupBanner";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export const metadata: Metadata = {
  title: "Shop NAZR – Pepper Spray, Sip Check & Safety Kits",
  description: "Shop NAZR's safety essentials: On Me pepper spray (₹555), Sip Check drink covers (₹333), and the NAZR 360° bundle (₹999) — thoughtfully designed, always within reach.",
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
    description: "Shop NAZR's safety essentials: On Me pepper spray (₹555), Sip Check drink covers (₹333), and the NAZR 360° bundle (₹999) — thoughtfully designed, always within reach.",
    url: "https://www.nazrco.in/shop",
    siteName: "NAZR",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop NAZR – Pepper Spray, Sip Check & Safety Kits",
    description: "Shop NAZR's safety essentials: On Me pepper spray (₹555), Sip Check drink covers (₹333), and the NAZR 360° bundle (₹999) — thoughtfully designed, always within reach.",
  },
};

export default function ShopPage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#161616] w-full">
        {/* Navigation Bar */}
        <DesktopScaler>
          <Header />
        </DesktopScaler>

        {/* The Wine Magenta Canvas Hero Section */}
        <section className="w-full flex-1 flex justify-center bg-[#161616] relative z-[70] max-md:rounded-t-[9.71px] md:rounded-t-[26px] overflow-hidden">
          <DesktopScaler bgColor="#5A002F" className="max-md:rounded-t-[9.71px] md:rounded-t-[26px] overflow-hidden">
            <div
              className="w-full bg-[#5A002F] relative max-md:rounded-t-[9.71px] md:rounded-t-[26px] overflow-hidden"
            >
              <ShopHero />
            </div>
          </DesktopScaler>
        </section>

        {/* 3 Product Showcase Cards */}
        <ShopProductsSection />

        {/* Women Who Stare Back Reviews Marquee Banner */}
        <WomenWhoStareBack />

        {/* Why NAZR 24-Hour Safety Journey Timeline */}
        <WhyNazrTimeline />

        {/* Ask Us Anything FAQ Accordion */}
        <ShopFaqSection />

        {/* Stare Back Fully Equipped Bundle Banner */}
        <StareBackBundleBanner />

        {/* Your Tools Now With Backup App Banner */}
        <AppBackupBanner />
      </main>
    </>
  );
}


