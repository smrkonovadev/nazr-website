import type { Metadata } from "next";
import { Header } from "@/components/ui/Header";
import { FaqSection } from "@/components/ui/FaqSection";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export const metadata: Metadata = {
  title: "NAZR FAQs | Pepper Spray, Sip Check & App Questions ",
  description: "Answers to common NAZR questions: is pepper spray legal in India, how Sip Check works, how SOS auto-escalation functions, and app location privacy.",
  keywords: [
    "is pepper spray legal in India",
    "Sip Check FAQ",
    "NAZR app FAQ",
    "pepper spray on flights India",
    "NAZR SOS questions",
  ],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "NAZR FAQs | Pepper Spray, Sip Check & App Questions ",
    description: "Answers to common NAZR questions: is pepper spray legal in India, how Sip Check works, how SOS auto-escalation functions, and app location privacy.",
    url: "https://www.nazrco.in/faq",
    siteName: "NAZR",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NAZR FAQs | Pepper Spray, Sip Check & App Questions ",
    description: "Answers to common NAZR questions: is pepper spray legal in India, how Sip Check works, how SOS auto-escalation functions, and app location privacy.",
  },
};

export default function FaqPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#161616] w-full">
      <DesktopScaler>
        <Header />
      </DesktopScaler>

      {/* FAQ Section */}
      <section className="w-full flex-1 flex justify-center bg-[#161616] relative z-[70] max-md:mt-0 md:-mt-[48px] md:rounded-t-[26px] max-md:rounded-t-[9.71px]">
        <DesktopScaler bgColor="#F1E4DE" className="md:rounded-t-[26px] max-md:rounded-t-[9.71px] overflow-hidden w-full">
          <div className="w-full bg-[#F1E4DE] relative md:rounded-t-[26px] max-md:rounded-t-[9.71px] overflow-hidden pb-12">
            <FaqSection />
          </div>
        </DesktopScaler>
      </section>
    </main>
  );
}
