import type { Metadata } from "next";
import { Header } from "@/components/ui/Header";

import { HelplineDirectoryIntro } from "@/components/ui/HelplineDirectoryIntro";
import { HelplineTable } from "@/components/ui/HelplineTable";
import { ContactUsSection } from "@/components/ui/ContactUsSection";
import { AutoMovingCarousel } from "@/components/ui/AutoMovingCarousel";

import { DesktopScaler } from "@/components/ui/DesktopScaler";

export const metadata: Metadata = {
  title: "Women's Safety Helpline Directory India | NAZR",
  description: "A directory of India's official women's safety helplines, including the National Commission for Women, Domestic Violence Helpline (181), and Rape Crisis Helpline.",
  keywords: [
    "women's helpline India",
    "domestic violence helpline 181",
    "national commission for women helpline",
    "rape crisis helpline India",
  ],
  alternates: {
    canonical: "/helpline",
  },
  openGraph: {
    title: "Women's Safety Helpline Directory India | NAZR",
    description: "A directory of India's official women's safety helplines, including the National Commission for Women, Domestic Violence Helpline (181), and Rape Crisis Helpline.",
    url: "https://www.nazrco.in/helpline",
    siteName: "NAZR",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Women's Safety Helpline Directory India | NAZR",
    description: "A directory of India's official women's safety helplines, including the National Commission for Women, Domestic Violence Helpline (181), and Rape Crisis Helpline.",
  },
};

export default function HelplinePage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#161616] w-full overflow-x-hidden">
        <DesktopScaler>
          <Header />

          {/* The Beige Canvas Section */}
          <div className="w-full flex-1 bg-[#FFF1EB] md:rounded-t-[26px] max-md:rounded-t-[9.71px] max-md:rounded-b-[9.71px] md:rounded-b-[26px] overflow-hidden relative z-[70] max-md:mt-0 md:-mt-[48px] flex flex-col">
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
