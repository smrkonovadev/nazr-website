import type { Metadata } from "next";
import { AboutHero } from "@/components/ui/AboutHero";
import { AboutStatement } from "@/components/ui/AboutStatement";
import { AboutCollage } from "@/components/ui/AboutCollage";
import { AboutFeatures } from "@/components/ui/AboutFeatures";
import { AboutBanners } from "@/components/ui/AboutBanners";
import { AboutTeamIntro } from "@/components/ui/AboutTeamIntro";
import { AboutTeamList } from "@/components/ui/AboutTeamList";
import { AboutTestimonial } from "@/components/ui/AboutTestimonial";
import { AboutContactUs } from "@/components/ui/AboutContactUs";
import { AutoMovingCarousel } from "@/components/ui/AutoMovingCarousel";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export const metadata: Metadata = {
  title: "About NAZR - Our Story, Mission & Founding Team in India",
  description: "Meet the team building NAZR, India's women's safety ecosystem, and our mission to shift the narrative from fear-reaction to everyday readiness.",
  keywords: [
    "NAZR founders",
    "women's safety brand India",
    "NAZR mission",
    "Aishani Mukherjee",
    "Atul Chopra NAZR",
    "about NAZR",
    "safety ecosystem India",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About NAZR - Our Story, Mission & Founding Team in India",
    description: "Meet the team building NAZR, India's women's safety ecosystem, and our mission to shift the narrative from fear-reaction to everyday readiness.",
    url: "https://www.nazrco.in/about",
    siteName: "NAZR",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About NAZR - Our Story, Mission & Founding Team in India",
    description: "Meet the team building NAZR, India's women's safety ecosystem, and our mission to shift the narrative from fear-reaction to everyday readiness.",
  },
};

export default function AboutPage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#161616] w-full">
        {/* Dark Sections */}
        <DesktopScaler bgColor="transparent" className="relative z-30">
          <AboutHero />
          <AboutStatement />
          <AboutCollage />
        </DesktopScaler>

        {/* Cream Sections */}
        <DesktopScaler bgColor="#FFF1EB" className="md:rounded-b-[26px] max-md:rounded-b-[9.71px] md:-mt-[26px] max-md:-mt-[32px] relative z-20">
          <div className="w-full bg-[#FFF1EB] md:rounded-b-[26px] max-md:rounded-b-[9.71px] relative z-20 pb-0">
            <AboutFeatures />
            <AboutBanners />
            <AboutTeamIntro />
            <AboutTeamList />
            <AboutTestimonial />
            <div className="w-full bg-[#FFF1EB] md:rounded-b-[26px] max-md:rounded-b-[9.71px] overflow-hidden">
              <AboutContactUs />
              <AutoMovingCarousel />
            </div>
          </div>
        </DesktopScaler>

      </main>
    </>
  );
}