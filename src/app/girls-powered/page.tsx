import type { Metadata } from "next";
import { GirlsPoweredEvent } from "@/components/ui/GirlsPoweredEvent";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export const metadata: Metadata = {
  title: "GIRLS.POWERED. BY NAZR - Sunday Movement & Boxing Pad Work in Delhi",
  description:
    "Girls. Powered. by NAZR brings together beginner-friendly pad work, movement, music and community on Sunday, Sep 27th 2026 in Delhi. Book your slot now.",
  keywords: [
    "Girls Powered by NAZR",
    "women boxing workout Delhi",
    "women safety community event",
    "NAZR Sunday event",
    "Vasant Kunj women fitness",
  ],
  alternates: {
    canonical: "/girls-powered",
  },
  openGraph: {
    title: "GIRLS.POWERED. BY NAZR - Sep 27, 2026 Delhi",
    description:
      "A NAZR Sunday built around movement, confidence and community. Beginner-friendly pad work, coaches, gloves and energy.",
    url: "https://www.nazrco.in/girls-powered",
    siteName: "NAZR",
    locale: "en_IN",
    type: "website",
  },
};

export default function GirlsPoweredPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#161616] w-full">
      <DesktopScaler desktopWidth={1280} bgColor="#161616">
        <GirlsPoweredEvent />
      </DesktopScaler>
    </main>
  );
}
