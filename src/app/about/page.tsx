
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

export default function AboutPage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#161616] w-full">
        {/* Dark Sections */}
        <DesktopScaler>
          <AboutHero />
          <AboutStatement />
          <AboutCollage />
        </DesktopScaler>

        {/* Cream Sections */}
        <DesktopScaler bgColor="#FFF1EB" className="md:rounded-b-[26px] max-md:rounded-b-[32px]">
          <div className="w-full bg-[#FFF1EB] md:rounded-b-[26px] max-md:rounded-b-[32px] relative z-20 pb-0">
            <AboutFeatures />
            <AboutBanners />
            <AboutTeamIntro />
            <AboutTeamList />
            <AboutTestimonial />
            <AboutContactUs />
            <AutoMovingCarousel />
          </div>
        </DesktopScaler>

      </main>
    </>
  );
}
