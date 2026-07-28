import type { Metadata } from "next";
import { ProductLiabilityContent } from "@/components/legal/ProductLiabilityContent";

export const metadata: Metadata = {
  title: "Product Liability | NAZR",
  description: "NAZR's Product Liability policy outlines usage guidelines, limitations, and liability terms for On Me pepper spray and Sip Check drink covers.",
  keywords: [
    "NAZR product liability",
    "pepper spray liability disclaimer",
    "Sip Check usage terms",
  ],
  alternates: {
    canonical: "/product-liability",
  },
  openGraph: {
    title: "Product Liability | NAZR",
    description: "NAZR's Product Liability policy outlines usage guidelines, limitations, and liability terms for On Me pepper spray and Sip Check drink covers.",
    url: "https://www.nazrco.in/product-liability",
    siteName: "NAZR",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Liability | NAZR",
    description: "NAZR's Product Liability policy outlines usage guidelines, limitations, and liability terms for On Me pepper spray and Sip Check drink covers.",
  },
};

export default function ProductLiabilityPage() {
  return <ProductLiabilityContent />;
}
