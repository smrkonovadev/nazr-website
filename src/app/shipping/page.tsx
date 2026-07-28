import type { Metadata } from "next";
import { ShippingContent } from "@/components/legal/ShippingContent";

export const metadata: Metadata = {
  title: "Shipping Policy | NAZR",
  description: "Everything you need to know about NAZR order shipping: dispatch timelines, delivery partners, tracking, and shipping charges across India.",
  keywords: [
    "NAZR shipping policy",
    "delivery timelines",
    "order tracking NAZR",
    "shipping charges India",
  ],
  alternates: {
    canonical: "/shipping",
  },
  openGraph: {
    title: "Shipping Policy | NAZR",
    description: "Everything you need to know about NAZR order shipping: dispatch timelines, delivery partners, tracking, and shipping charges across India.",
    url: "https://www.nazrco.in/shipping",
    siteName: "NAZR",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipping Policy | NAZR",
    description: "Everything you need to know about NAZR order shipping: dispatch timelines, delivery partners, tracking, and shipping charges across India.",
  },
};

export default function ShippingPage() {
  return <ShippingContent />;
}
