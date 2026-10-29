import type { Metadata } from "next";
import { GiveawayPage } from "@/components/ui/GiveawayPage";

export const metadata: Metadata = {
  title: "THE NAZR MYSTERY BOX GIVEAWAY • MMASFH | Only 3 Exist",
  description:
    "Curious what's inside? Three quick steps on Instagram, LinkedIn, and the NAZR app and you're in the draw for an exclusive NAZR Mystery Box worth ₹2,000. Only 3 exist. One could be yours.",
  keywords: [
    "NAZR giveaway",
    "NAZR mystery box",
    "MMASFH giveaway",
    "women safety app India",
    "safety kit giveaway",
    "NAZR app",
  ],
  alternates: {
    canonical: "/giveaway",
  },
  openGraph: {
    title: "THE NAZR MYSTERY BOX GIVEAWAY • MMASFH",
    description:
      "Only 3 exist. One could be yours. Follow, download, and enter for a mystery box worth ₹2,000.",
    url: "https://www.nazrco.in/giveaway",
    siteName: "NAZR",
    locale: "en_IN",
    type: "website",
  },
};

export default function StudentGiveawayRoute() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0C0B0E] w-full items-center justify-start overflow-x-hidden">
      <GiveawayPage />
    </main>
  );
}
