import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Fight Social - NAZR X WCMMA",
  description:
    "Privacy Policy for Fight Social, hosted by Lumina Hospitality Private Limited operating under the brand NAZR™.",
  alternates: {
    canonical: "/fight-social/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Fight Social - NAZR X WCMMA",
    description:
      "Privacy Policy governing the collection and use of personal information in connection with Fight Social.",
    url: "https://www.nazrco.in/fight-social/privacy-policy",
    siteName: "NAZR",
  },
};

export default function FightSocialPrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#F1E4DE] font-[family-name:var(--font-inter)] selection:bg-[#FF007A] selection:text-white">
      {/* Top Tactical Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#161616]/95 backdrop-blur-md border-b border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/fight-social"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#F1E4DE]/80 hover:text-[#FF007A] transition-colors"
          >
            <span>←</span>
            <span>Back to Fight Social</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-[#222222] border border-[#333333] text-[#FF007A] font-semibold">
              NAZR X WCMMA
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Wrapper */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Breadcrumb & Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#2A2A2A]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#888888]">
            <Link href="/fight-social" className="hover:text-[#F1E4DE] transition-colors">
              FIGHT SOCIAL
            </Link>
            <span>/</span>
            <span className="text-[#FF007A]">PRIVACY POLICY</span>
          </div>

          {/* Quick Toggle to Terms */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1.5 rounded bg-[#FF007A] text-white font-medium">
              Privacy Policy
            </span>
            <Link
              href="/fight-social/terms"
              className="px-3 py-1.5 rounded bg-[#1C1C1C] border border-[#333333] text-[#F1E4DE]/80 hover:border-[#FF007A] hover:text-white transition-colors"
            >
              Terms &amp; Conditions →
            </Link>
          </div>
        </div>

        {/* Hero Title */}
        <div className="mb-10">
          <span className="text-xs font-mono tracking-widest text-[#FF007A] uppercase block mb-2 font-semibold">
            Legal Documentation
          </span>
          <h1 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl md:text-7xl tracking-tight text-[#F1E4DE] uppercase leading-none">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm font-mono text-[#888888] mt-3">
            Fight Social • Hosted by Lumina Hospitality Private Limited (NAZR™)
          </p>
        </div>

        {/* Intro Card */}
        <div className="bg-[#181818] border border-[#2A2A2A] rounded-[4px] p-6 sm:p-8 mb-8 relative">
          <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#FF007A]" />
          <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#FF007A]" />
          <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#FF007A]" />
          <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#FF007A]" />

          <p className="text-sm sm:text-[15px] leading-relaxed text-[#F1E4DE]/90 mb-4">
            This Privacy Policy governs the collection and use of personal information in connection with Fight Social (“Event”), hosted by Lumina Hospitality Private Limited, operating under the brand NAZR™ (“Company”, “we”, “us”, “our”).
          </p>
          <p className="text-sm sm:text-[15px] leading-relaxed text-[#F1E4DE]/90 font-medium">
            By registering for, purchasing a ticket for, or attending the Event, you acknowledge the practices described in this Privacy Policy.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 text-sm sm:text-[15px] leading-relaxed text-[#F1E4DE]/85">
          {/* Section 1 */}
          <section className="bg-[#161616] border border-[#242424] rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A]/20 text-[#FF007A] text-xs font-mono flex items-center justify-center font-bold">
                1
              </span>
              <span>Information We Collect</span>
            </h2>
            <p className="mb-3 text-[#F1E4DE]/80">We may collect information including:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Name",
                "Email address",
                "Phone number",
                "Age confirmation",
                "Gender",
                "Ticket and registration details",
                "Plus-one details, where applicable",
                "Information voluntarily submitted through Event forms or communications",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#FF007A] text-xs mt-1">▪</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-[#161616] border border-[#242424] rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A]/20 text-[#FF007A] text-xs font-mono flex items-center justify-center font-bold">
                2
              </span>
              <span>How We Use Your Information</span>
            </h2>
            <p className="mb-3 text-[#F1E4DE]/80">We may use your information to:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Process Event registrations and tickets",
                "Verify attendee eligibility and entry",
                "Manage the male-attendee and plus-one requirement",
                "Send confirmations and Event updates",
                "Communicate changes relating to the Event",
                "Support Event operations, safety and attendee management",
                "Respond to attendee queries",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#FF007A] text-xs mt-1">▪</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-[#161616] border border-[#242424] rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A]/20 text-[#FF007A] text-xs font-mono flex items-center justify-center font-bold">
                3
              </span>
              <span>Sharing of Information</span>
            </h2>
            <p className="mb-3 text-[#F1E4DE]/80">
              Your information may be shared with relevant third parties where necessary to operate the Event, including:
            </p>
            <ul className="space-y-2 pl-4 mb-4">
              {[
                "Co-hosts and Event partners",
                "Ticketing or registration providers",
                "Venue teams",
                "Security providers",
                "Event management and service providers",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#FF007A] text-xs mt-1">▪</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="p-3 bg-[#1F1F1F] rounded border border-[#2C2C2C] text-[#F1E4DE] font-medium">
              We do not sell your personal information.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-[#161616] border border-[#242424] rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A]/20 text-[#FF007A] text-xs font-mono flex items-center justify-center font-bold">
                4
              </span>
              <span>Marketing Communications</span>
            </h2>
            <p className="mb-3">
              Registering for or purchasing a ticket to the Event does not automatically require you to receive unrelated marketing communications.
            </p>
            <p>
              Where you choose to receive NAZR marketing, community or future Event updates, you may opt out at any time.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-[#161616] border border-[#242424] rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A]/20 text-[#FF007A] text-xs font-mono flex items-center justify-center font-bold">
                5
              </span>
              <span>Photography &amp; Videography</span>
            </h2>
            <p className="mb-3">
              Photography and videography may take place during the Event.
            </p>
            <p>
              Attendees may appear in Event-related photographs, videos or other content used by NAZR or authorised Event partners for promotional, social media, marketing or documentation purposes.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-[#161616] border border-[#242424] rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A]/20 text-[#FF007A] text-xs font-mono flex items-center justify-center font-bold">
                6
              </span>
              <span>Data Retention</span>
            </h2>
            <p>
              We may retain personal information for as long as reasonably necessary for Event administration, operational, legal or record-keeping purposes.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-[#161616] border border-[#242424] rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A]/20 text-[#FF007A] text-xs font-mono flex items-center justify-center font-bold">
                7
              </span>
              <span>Data Security</span>
            </h2>
            <p>
              We take reasonable steps to protect personal information from unauthorised access, misuse, loss or disclosure.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-[#181818] border border-[#FF007A]/40 rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A] text-white text-xs font-mono flex items-center justify-center font-bold">
                8
              </span>
              <span>Contact</span>
            </h2>
            <p className="mb-4">
              For privacy-related questions or concerns, please contact:
            </p>
            <div className="bg-[#121212] p-4 sm:p-5 rounded border border-[#2C2C2C] space-y-1 font-mono text-xs sm:text-sm">
              <p className="text-[#FF007A] font-semibold">
                Email:{" "}
                <a href="mailto:support@nazrco.in" className="underline hover:text-[#F1E4DE] transition-colors">
                  support@nazrco.in
                </a>
              </p>
              <p className="text-[#F1E4DE] font-sans font-medium pt-2">Lumina Hospitality Private Limited</p>
              <p className="text-[#888888]">802, Harshvardhan</p>
              <p className="text-[#888888]">Opp. Saki Vihar Telephone Exchange</p>
              <p className="text-[#888888]">Mumbai – 400076</p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#888888]">
          <Link
            href="/fight-social"
            className="hover:text-[#FF007A] transition-colors"
          >
            ← Back to Fight Social
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/fight-social/terms"
              className="hover:text-[#F1E4DE] transition-colors underline"
            >
              Terms &amp; Conditions
            </Link>
            <span className="text-[#55585E]">•</span>
            <span>© 2026 NAZR™. All rights reserved.</span>
          </div>
        </div>
      </div>
    </main>
  );
}
