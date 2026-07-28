import type { Metadata } from "next";
import { TermsContent } from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions | NAZR",
  description: "NAZR's Terms & Conditions covering use of the app, website, and product purchases, including account terms, acceptable use, and dispute resolution.",
  keywords: [
    "NAZR terms and conditions",
    "NAZR terms of use",
    "app terms of service India",
  ],
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms & Conditions | NAZR",
    description: "NAZR's Terms & Conditions covering use of the app, website, and product purchases, including account terms, acceptable use, and dispute resolution.",
    url: "https://www.nazrco.in/terms",
    siteName: "NAZR",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | NAZR",
    description: "NAZR's Terms & Conditions covering use of the app, website, and product purchases, including account terms, acceptable use, and dispute resolution.",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
