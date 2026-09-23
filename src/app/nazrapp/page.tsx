import type { Metadata } from "next";
import { Header } from "@/components/ui/Header";

import { NazrAppIntro } from "@/components/ui/NazrAppIntro";
import { HowSosWorksSection } from "@/components/ui/HowSosWorksSection";
import { ShieldModeSection } from "@/components/ui/ShieldModeSection";
import { ShieldModeFeatures } from "@/components/ui/ShieldModeFeatures";
import { TrustedCircleSection } from "@/components/ui/TrustedCircleSection";
import { PrivacySection } from "@/components/ui/PrivacySection";
import { AskUsAnythingSection } from "@/components/ui/AskUsAnythingSection";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export const metadata: Metadata = {
  title: "NAZR App | One-Tap SOS, Shield Mode & Trusted Circle",
  description: "The NAZR app moves with you: one-tap SOS with live location sharing, Shield Mode check-ins for solo journeys, and a Trusted Circle alerted the moment it matters.",
  keywords: [
    "NAZR app",
    "SOS app for women India",
    "Shield Mode safety app",
    "Trusted Circle emergency contacts",
    "women's safety app download",
  ],
  alternates: {
    canonical: "/nazrapp",
  },
  openGraph: {
    title: "NAZR App | One-Tap SOS, Shield Mode & Trusted Circle",
    description: "The NAZR app moves with you: one-tap SOS with live location sharing, Shield Mode check-ins for solo journeys, and a Trusted Circle alerted the moment it matters.",
    url: "https://www.nazrco.in/nazrapp",
    siteName: "NAZR",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NAZR App | One-Tap SOS, Shield Mode & Trusted Circle",
    description: "The NAZR app moves with you: one-tap SOS with live location sharing, Shield Mode check-ins for solo journeys, and a Trusted Circle alerted the moment it matters.",
  },
};

export default function NazrAppPage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#161616] w-full">
        <DesktopScaler>
          <Header showShop={true} />
        </DesktopScaler>

        {/* Hero Section */}
        <section className="w-full flex-1 flex justify-center bg-[#161616] relative z-[70] max-md:mt-0 md:-mt-[48px] max-md:rounded-[9.71px] md:rounded-[26px]">
          <DesktopScaler bgColor="#f4f4f4" className="max-md:rounded-[9.71px] md:rounded-[26px]">
            <div
              className="w-full max-md:bg-white md:bg-[#f4f4f4] relative max-md:rounded-[9.71px] md:rounded-[26px] overflow-hidden"
            >
              <NazrAppIntro />
            </div>
          </DesktopScaler>
        </section>

        {/* How SOS Works Section */}
        <DesktopScaler bgColor="#0A0A0A">
          <HowSosWorksSection />
        </DesktopScaler>

        {/* Shield Mode Dark Section */}
        <DesktopScaler bgColor="#0A0A0A">
          <ShieldModeFeatures />
        </DesktopScaler>

        {/* Trusted Circle Section */}
        <DesktopScaler bgColor="#0A0A0A">
          <TrustedCircleSection />
        </DesktopScaler>

        {/* Privacy Section */}
        <DesktopScaler bgColor="#FFF1EB">
          <div className="w-full relative z-[60] bg-[#FFF1EB]">
            <PrivacySection />
          </div>
        </DesktopScaler>

        {/* Ask Us Anything FAQ Section */}
        <DesktopScaler bgColor="#0B0B0D" className="md:rounded-b-[26px] max-md:rounded-b-[9.71px] overflow-hidden">
          <div className="w-full relative z-[60] bg-[#0B0B0D] md:rounded-b-[26px] max-md:rounded-b-[9.71px] overflow-hidden pb-0">
            <AskUsAnythingSection />
          </div>
        </DesktopScaler>
      </main>
    </>
  );
}

