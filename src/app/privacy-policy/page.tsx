import type { Metadata } from "next";
import { PrivacyPolicyContent } from "@/components/legal/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | NAZR (Lumina Hospitality Pvt. Ltd.)",
  description: "Read NAZR's Privacy Policy to understand how Lumina Hospitality Private Limited collects, uses, and protects your personal data across the NAZR app and site.",
  keywords: [
    "NAZR privacy policy",
    "Lumina Hospitality privacy policy",
    "DPDP compliance India",
    "NAZR data consent",
  ],
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | NAZR (Lumina Hospitality Pvt. Ltd.)",
    description: "Read NAZR's Privacy Policy to understand how Lumina Hospitality Private Limited collects, uses, and protects your personal data across the NAZR app and site.",
    url: "https://www.nazrco.in/privacy-policy",
    siteName: "NAZR",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | NAZR (Lumina Hospitality Pvt. Ltd.)",
    description: "Read NAZR's Privacy Policy to understand how Lumina Hospitality Private Limited collects, uses, and protects your personal data across the NAZR app and site.",
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicyContent />;
}
