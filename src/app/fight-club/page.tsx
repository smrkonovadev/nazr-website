import type { Metadata } from "next";
import { FightClubEvent } from "@/components/ui/FightClubEvent";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export const metadata: Metadata = {
  title: "NAZR X WCMMA - FIGHT SOCIAL | 26 Sept 2026 Delhi",
  description:
    "NAZR X WCMMA brings you a full day of live MMA action, community and culture on Sep 26, 2026 in Delhi. Experience live fights, meet creators, and celebrate safety and strength.",
  keywords: [
    "NAZR X WCMMA",
    "Fight Social Delhi",
    "MMA event Delhi",
    "women safety ecosystem",
    "WCMMA live fights",
  ],
  alternates: {
    canonical: "/fight-club",
  },
  openGraph: {
    title: "NAZR X WCMMA - FIGHT SOCIAL",
    description: "Live MMA action, real community, new experiences. Sep 26, 2026 Delhi.",
    url: "https://www.nazrco.in/fight-club",
    siteName: "NAZR",
    locale: "en_IN",
    type: "website",
  },
};

export default function FightClubPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F1E4DE] w-full">
      <DesktopScaler desktopWidth={1280} bgColor="#F1E4DE">
        <FightClubEvent />
      </DesktopScaler>
    </main>
  );
}
