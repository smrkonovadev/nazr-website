import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Girls. Powered. By NAZR",
  description:
    "Terms & Conditions governing attendance and participation in Girls. Powered. By NAZR, hosted by Lumina Hospitality Private Limited (NAZR™).",
  alternates: {
    canonical: "/girls-powered/terms&condition",
  },
  openGraph: {
    title: "Terms & Conditions | Girls. Powered. By NAZR",
    description:
      "Terms & Conditions for Girls. Powered. By NAZR Event hosted by Lumina Hospitality Private Limited (NAZR™).",
    url: "https://www.nazrco.in/girls-powered/terms&condition",
    siteName: "NAZR",
  },
};

export default function GirlsPoweredTermsPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#f4f4f4] font-[family-name:var(--font-inter)] selection:bg-[#FF0E97] selection:text-white">
      {/* Top Tactical Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#161616]/95 backdrop-blur-md border-b border-[#2A2A2A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/girls-powered"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#f4f4f4]/80 hover:text-[#FF0E97] transition-colors"
          >
            <span>←</span>
            <span>Back to Girls Powered</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase px-2.5 py-1 bg-[#222222] border border-[#333333] text-[#FF0E97] font-semibold">
              GIRLS.POWERED.BY NAZR
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Wrapper */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Breadcrumb & Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#2A2A2A]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#888888]">
            <Link href="/girls-powered" className="hover:text-[#f4f4f4] transition-colors">
              GIRLS POWERED
            </Link>
            <span>/</span>
            <span className="text-[#FF0E97]">TERMS &amp; CONDITIONS</span>
          </div>

          {/* Quick Toggle to Privacy */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <Link
              href="/girls-powered/privacy-policy"
              className="px-3 py-1.5 bg-[#1C1C1C] border border-[#333333] text-[#f4f4f4]/80 hover:border-[#FF0E97] hover:text-white transition-colors"
            >
              ← Privacy Policy
            </Link>
            <span className="px-3 py-1.5 bg-[#FF0E97] text-white font-medium">
              Terms &amp; Conditions
            </span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="mb-10">
          <span className="text-xs font-mono tracking-widest text-[#FF0E97] uppercase block mb-2 font-semibold">
            Legal Documentation
          </span>
          <h1 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl md:text-7xl tracking-tight text-[#f4f4f4] uppercase leading-none">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm font-mono text-[#888888] mt-3">
            Girls. Powered. By NAZR • Hosted by Lumina Hospitality Private Limited (NAZR™)
          </p>
        </div>

        {/* Intro Card */}
        <div className="bg-[#181818] border border-[#2A2A2A] p-6 sm:p-8 mb-8 relative">
          <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#FF0E97]" />
          <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#FF0E97]" />
          <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#FF0E97]" />
          <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#FF0E97]" />

          <p className="text-sm sm:text-[15px] leading-relaxed text-[#f4f4f4]/90 mb-4">
            These Terms &amp; Conditions (“Terms”) govern attendance at and participation in Girls. Powered. By NAZR (“Event”), hosted by Lumina Hospitality Private Limited, operating under the brand NAZR™ (“Company”, “we”, “us”, “our”).
          </p>
          <p className="text-sm sm:text-[15px] leading-relaxed text-[#f4f4f4]/90 font-medium">
            By purchasing a ticket, registering for, or attending the Event, you agree to be bound by these Terms.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8 text-sm sm:text-[15px] leading-relaxed text-[#f4f4f4]/85">
          {/* Section 1 */}
          <section className="bg-[#161616] border border-[#242424] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#f4f4f4] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF0E97]/20 text-[#FF0E97] text-xs font-mono flex items-center justify-center font-bold">
                1
              </span>
              <span>Age &amp; Eligibility</span>
            </h2>
            <p className="mb-2 font-medium text-[#FF0E97]">
              The Event is strictly 18+ and is a women-only event.
            </p>
            <p>
              Attendees may be required to present a valid government-issued photo ID at the venue. Entry may be refused if age or identity cannot be verified.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-[#161616] border border-[#242424] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#f4f4f4] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF0E97]/20 text-[#FF0E97] text-xs font-mono flex items-center justify-center font-bold">
                2
              </span>
              <span>Tickets &amp; Entry</span>
            </h2>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF0E97] text-xs mt-1">▪</span>
                <span>A valid Event ticket is mandatory for entry.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF0E97] text-xs mt-1">▪</span>
                <span>Attendees must carry and present their ticket at the venue when requested.</span>
              </li>
              <li className="flex items-start gap-2.5 font-medium text-[#FF0E97]">
                <span className="text-[#FF0E97] text-xs mt-1">▪</span>
                <span>No valid ticket means no entry.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF0E97] text-xs mt-1">▪</span>
                <span>An RSVP, registration form submission or invitation does not replace a valid Event ticket unless expressly stated otherwise.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF0E97] text-xs mt-1">▪</span>
                <span>Entry is subject to ticket verification, venue capacity, security checks and applicable venue rules.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-[#161616] border border-[#242424] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#f4f4f4] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF0E97]/20 text-[#FF0E97] text-xs font-mono flex items-center justify-center font-bold">
                3
              </span>
              <span>Participation in Pad Work &amp; Self-Defence Activities</span>
            </h2>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF0E97] text-xs mt-1">▪</span>
                <span>The Event includes beginner-friendly pad work, combat basics and practical self-defence activities.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF0E97] text-xs mt-1">▪</span>
                <span>Participation is voluntary.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF0E97] text-xs mt-1">▪</span>
                <span>Attendees must follow all instructions given by coaches, trainers, Event staff and venue representatives.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF0E97] text-xs mt-1">▪</span>
                <span>The organisers or coaches may restrict or stop participation if they believe continuing would be unsafe.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="bg-[#161616] border border-[#242424] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#f4f4f4] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF0E97]/20 text-[#FF0E97] text-xs font-mono flex items-center justify-center font-bold">
                4
              </span>
              <span>Health &amp; Personal Responsibility</span>
            </h2>
            <p className="mb-3">
              Attendees are responsible for assessing whether they are physically fit to participate in the Event activities.
            </p>
            <p>
              If you have an injury, medical condition or other concern that may affect your ability to participate safely, you should avoid any activity that may put you at risk and inform the relevant coach where appropriate.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-[#161616] border border-[#242424] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#f4f4f4] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF0E97]/20 text-[#FF0E97] text-xs font-mono flex items-center justify-center font-bold">
                5
              </span>
              <span>Security &amp; Conduct</span>
            </h2>
            <p className="mb-3">
              All attendees must comply with Event staff, coaches, venue security and applicable venue guidelines.
            </p>
            <p className="mb-3 text-[#f4f4f4]/90">
              The Company reserves the right to refuse entry or remove any attendee engaging in inappropriate, disruptive, unsafe, aggressive or disrespectful behaviour.
            </p>
            <p className="text-[#888888] font-mono text-xs">
              Attendees removed for such conduct may not be entitled to a refund.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-[#161616] border border-[#242424] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#f4f4f4] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF0E97]/20 text-[#FF0E97] text-xs font-mono flex items-center justify-center font-bold">
                6
              </span>
              <span>Tickets, Transfers &amp; Refunds</span>
            </h2>
            <p className="mb-3 text-[#f4f4f4]/80">Unless otherwise stated:</p>
            <ul className="space-y-2 pl-4 mb-4">
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF0E97] text-xs mt-1">▪</span>
                <span>Tickets are non-transferable.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF0E97] text-xs mt-1">▪</span>
                <span>Tickets are non-refundable.</span>
              </li>
            </ul>
            <p>
              Refunds will only be issued if the Event is cancelled by the organisers, subject to the applicable ticketing platform terms.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-[#161616] border border-[#242424] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#f4f4f4] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF0E97]/20 text-[#FF0E97] text-xs font-mono flex items-center justify-center font-bold">
                7
              </span>
              <span>Event Schedule &amp; Changes</span>
            </h2>
            <p className="mb-2">
              The Company reserves the right to make changes to Event timings, coaches, activities, programming, partners or schedules where reasonably required.
            </p>
            <p className="text-[#888888] font-mono text-xs">
              Such changes will not automatically entitle attendees to a refund.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-[#161616] border border-[#242424] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#f4f4f4] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF0E97]/20 text-[#FF0E97] text-xs font-mono flex items-center justify-center font-bold">
                8
              </span>
              <span>Photography &amp; Videography</span>
            </h2>
            <p className="mb-2">
              Photography and videography may take place throughout the Event.
            </p>
            <p>
              By entering the venue, attendees acknowledge that they may appear in photographs, videos or other Event-related content used for promotional, social media, marketing or documentation purposes.
            </p>
          </section>

          {/* Section 9 */}
          <section className="bg-[#161616] border border-[#242424] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#f4f4f4] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF0E97]/20 text-[#FF0E97] text-xs font-mono flex items-center justify-center font-bold">
                9
              </span>
              <span>Personal Belongings</span>
            </h2>
            <p className="mb-2">
              Attendees are responsible for their personal belongings at all times.
            </p>
            <p>
              The Company, venue and Event partners will not be responsible for lost, stolen or unattended belongings, except where liability cannot legally be excluded.
            </p>
          </section>

          {/* Section 10 */}
          <section className="bg-[#161616] border border-[#242424] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#f4f4f4] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF0E97]/20 text-[#FF0E97] text-xs font-mono flex items-center justify-center font-bold">
                10
              </span>
              <span>Right of Admission</span>
            </h2>
            <p className="mb-2 font-medium text-[#f4f4f4]">
              The organisers reserve the right of admission.
            </p>
            <p>
              Holding a ticket does not guarantee entry where an attendee does not meet the age requirement, women-only eligibility requirement, security requirements or any other condition set out in these Terms.
            </p>
          </section>

          {/* Section 11 */}
          <section className="bg-[#161616] border border-[#242424] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#f4f4f4] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF0E97]/20 text-[#FF0E97] text-xs font-mono flex items-center justify-center font-bold">
                11
              </span>
              <span>Contact</span>
            </h2>
            <p className="mb-4">
              For questions related to these Terms or the Event, please contact:
            </p>
            <div className="bg-[#121212] p-4 sm:p-5 border border-[#2C2C2C] space-y-1 font-mono text-xs sm:text-sm">
              <p className="text-[#FF0E97] font-semibold">
                Email:{" "}
                <a href="mailto:support@nazrco.in" className="underline hover:text-[#f4f4f4] transition-colors">
                  support@nazrco.in
                </a>
              </p>
              <p className="text-[#f4f4f4] font-sans font-medium pt-2">Lumina Hospitality Private Limited</p>
              <p className="text-[#888888]">802, Harshvardhan</p>
              <p className="text-[#888888]">Opp. Saki Vihar Telephone Exchange</p>
              <p className="text-[#888888]">Mumbai – 400076</p>
            </div>
          </section>

          {/* Section 12 */}
          <section className="bg-[#181818] border border-[#FF0E97]/40 p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#f4f4f4] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF0E97] text-white text-xs font-mono flex items-center justify-center font-bold">
                12
              </span>
              <span>Acceptance of Terms</span>
            </h2>
            <p className="font-medium text-base text-[#f4f4f4]">
              By purchasing a ticket, registering for or attending the Event, you confirm that you have read, understood and agreed to these Terms &amp; Conditions.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#888888]">
          <Link
            href="/girls-powered"
            className="hover:text-[#FF0E97] transition-colors"
          >
            ← Back to Girls Powered
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/girls-powered/privacy-policy"
              className="hover:text-[#f4f4f4] transition-colors underline"
            >
              Privacy Policy
            </Link>
            <span className="text-[#55585E]">•</span>
            <span>© 2026 NAZR™. All rights reserved.</span>
          </div>
        </div>
      </div>
    </main>
  );
}
