import type { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { SupportSection } from "@/components/ui/SupportSection";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export const metadata: Metadata = {
  title: "Support & Contact Us | NAZR",
  description: "Reach out to NAZR support. Whether you have a question, need support, or want to report an issue, our team is here to help.",
  keywords: [
    "NAZR support",
    "contact NAZR",
    "women safety help India",
    "NAZR customer support",
  ],
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Support & Contact Us | NAZR",
    description: "Reach out to NAZR support. Whether you have a question, need support, or want to report an issue, our team is here to help.",
    url: "https://www.nazrco.in/support",
    siteName: "NAZR",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Support & Contact Us | NAZR",
    description: "Reach out to NAZR support. Whether you have a question, need support, or want to report an issue, our team is here to help.",
  },
};

export default function SupportPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#161616] w-full overflow-x-hidden">
      <DesktopScaler>
        <Header />

        {/* The Beige Canvas Section */}
        <div className="w-full flex-1 bg-[#FFF1EB] md:rounded-t-[26px] max-md:rounded-t-[9.71px] max-md:rounded-b-[9.71px] md:rounded-b-[26px] overflow-hidden relative z-[70] max-md:mt-0 md:-mt-[48px] flex flex-col">
          <SupportSection />
        </div>
      </DesktopScaler>
    </main>
  );
}
