"use client";

import { useParams } from "next/navigation";
import { Header } from "@/components/ui/Header";
import { BlogDetailContent } from "@/components/ui/BlogDetailContent";
import { BlogNewsletter } from "@/components/ui/BlogNewsletter";
import { ContactUsSection } from "@/components/ui/ContactUsSection";
import { AutoMovingCarousel } from "@/components/ui/AutoMovingCarousel";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

const blogData: Record<string, {
  title: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
  author: string;
  sections: { heading: string; paragraphs: string[] }[];
}> = {
  "women-pretend-phone": {
    title: "BLOG TITLE HEADING WILL GO HERE",
    category: "Psychology",
    readTime: "5 min read",
    image: "/images/new52.svg",
    date: "11 Jan 2022",
    author: "Full name",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.",
          "Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.",
        ],
      },
      {
        heading: "Body",
        paragraphs: [
          "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.",
          "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Randomly deploy cross-unit manufactured products via cross-media material. Rapidly monetize strategic architectures with proactive e-services. Seamlessly syndicate best-of-breed schemas without cost effective models.",
        ],
      },
    ],
  },
  "drink-spiking": {
    title: "BLOG TITLE HEADING WILL GO HERE",
    category: "Safety",
    readTime: "4 min read",
    image: "/images/new53.svg",
    date: "11 Jan 2022",
    author: "Full name",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.",
          "Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.",
        ],
      },
    ],
  },
  "soft-girl-sharp-instincts": {
    title: "BLOG TITLE HEADING WILL GO HERE",
    category: "Culture",
    readTime: "6 min read",
    image: "/images/new54.svg",
    date: "11 Jan 2022",
    author: "Full name",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.",
          "Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.",
        ],
      },
    ],
  },
  "share-your-location": {
    title: "BLOG TITLE HEADING WILL GO HERE",
    category: "Product",
    readTime: "5 min read",
    image: "/images/new55.svg",
    date: "11 Jan 2022",
    author: "Full name",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.",
          "Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.",
        ],
      },
    ],
  },
  "preparedness-becomes-instinct": {
    title: "BLOG TITLE HEADING WILL GO HERE",
    category: "Community",
    readTime: "5 min read",
    image: "/images/new56.svg",
    date: "11 Jan 2022",
    author: "Full name",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.",
          "Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.",
        ],
      },
    ],
  },
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogData[slug];

  if (!post) {
    return (
      <main className="flex flex-col min-h-screen bg-[#161616] w-full overflow-x-hidden">
        <DesktopScaler>
          <Header />
        </DesktopScaler>
        <section className="w-full flex-1 flex justify-center bg-[#161616] relative z-[70] max-md:mt-0 md:-mt-[48px] max-md:rounded-t-[32px] md:rounded-t-[26px]">
          <DesktopScaler bgColor="#FFF1EB" className="max-md:rounded-t-[32px] md:rounded-t-[26px]">
            <div className="w-full bg-[#FFF1EB] relative max-md:rounded-t-[32px] md:rounded-t-[26px] min-h-[600px] flex items-center justify-center">
              <p className="text-[#161616] text-2xl" style={{ fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif" }}>
                Blog post not found.
              </p>
            </div>
          </DesktopScaler>
        </section>
      </main>
    );
  }

  return (
    <main className="flex flex-col min-h-screen bg-[#161616] w-full overflow-x-hidden">
      <DesktopScaler>
        <Header />
      </DesktopScaler>

      {/* The Beige Canvas Section */}
      <section className="w-full flex-1 flex justify-center bg-[#161616] relative z-[70] max-md:mt-0 md:-mt-[48px] max-md:rounded-t-[32px] md:rounded-t-[26px]">
        <DesktopScaler bgColor="#FFF1EB" className="max-md:rounded-t-[32px] md:rounded-t-[26px]">
          <div
            className="w-full bg-[#FFF1EB] relative max-md:rounded-t-[32px] md:rounded-t-[26px]"
            style={{ minHeight: "800px" }}
          >
            <BlogDetailContent post={post} />
          </div>
        </DesktopScaler>
      </section>

      {/* Contact Us Section & Footer */}
      <DesktopScaler bgColor="#FFF1EB" className="max-md:rounded-b-[9.71px] md:rounded-b-[26px] overflow-hidden">
        <div className="relative z-[60] -mt-[1px] bg-[#FFF1EB] w-full max-md:rounded-b-[9.71px] md:rounded-b-[26px] overflow-hidden">
          <ContactUsSection />
          <AutoMovingCarousel className="bg-[#FFF1EB] -mt-[1px]" />
        </div>
      </DesktopScaler>
    </main>
  );
}
