import type { Metadata } from "next";
import { Header } from "@/components/ui/Header";

import { BlogIntro } from "@/components/ui/BlogIntro";
import { BlogContent } from "@/components/ui/BlogContent";
import { BlogNewsletter } from "@/components/ui/BlogNewsletter";
import { ContactUsSection } from "@/components/ui/ContactUsSection";
import { AutoMovingCarousel } from "@/components/ui/AutoMovingCarousel";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export const metadata: Metadata = {
  title: "NAZR Blogs | Field Notes on Women's Safety in India",
  description: "Read NAZR's Field Notes: editorial insight on personal safety, everyday readiness, and the culture shift from fear-reaction to ownership for Indian women.",
  keywords: [
    "women's safety blog India",
    "NAZR field notes",
    "personal safety tips India",
    "readiness culture India",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "NAZR Blogs | Field Notes on Women's Safety in India",
    description: "Read NAZR's Field Notes: editorial insight on personal safety, everyday readiness, and the culture shift from fear-reaction to ownership for Indian women.",
    url: "https://www.nazrco.in/blog",
    siteName: "NAZR",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NAZR Blogs | Field Notes on Women's Safety in India",
    description: "Read NAZR's Field Notes: editorial insight on personal safety, everyday readiness, and the culture shift from fear-reaction to ownership for Indian women.",
  },
};

export default function BlogPage() {
  return (
    <>
      <main className="flex flex-col min-h-screen bg-[#161616] w-full overflow-x-hidden">
        <DesktopScaler>
          <Header />
        </DesktopScaler>

        {/* The Beige Canvas Section */}
        <section className="w-full flex-1 flex justify-center bg-[#161616] relative z-[70] max-md:mt-0 md:-mt-[48px] max-md:rounded-t-[9.71px] md:rounded-t-[26px]">
          <DesktopScaler bgColor="#FFF1EB" className="max-md:rounded-t-[9.71px] md:rounded-t-[26px]">
            <div
              className="w-full bg-[#FFF1EB] relative max-md:rounded-t-[9.71px] md:rounded-t-[26px]"
              style={{
                minHeight: '800px',
              }}
            >
              <BlogIntro />
              <BlogContent />
            </div>
          </DesktopScaler>
        </section>

        {/* Newsletter Section */}
        <DesktopScaler bgColor="#FFF1EB">
          <BlogNewsletter />
        </DesktopScaler>

        {/* Contact Us Section & Footer */}
        <DesktopScaler bgColor="#FFF1EB" className="max-md:rounded-b-[9.71px] md:rounded-b-[26px] overflow-hidden">
          <div className="relative z-[60] -mt-[1px] bg-[#FFF1EB] w-full max-md:rounded-b-[9.71px] md:rounded-b-[26px] overflow-hidden">
            <ContactUsSection />
            <AutoMovingCarousel className="bg-[#FFF1EB] -mt-[1px]" />
          </div>
        </DesktopScaler>
      </main>
    </>
  );
}
