import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Fight Social - NAZR X WCMMA",
  description:
    "Terms & Conditions governing attendance and participation in Fight Social, hosted by Lumina Hospitality Private Limited (NAZR™) and co-hosted by Warrior’s Cove MMA.",
  alternates: {
    canonical: "/fight-social/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Fight Social - NAZR X WCMMA",
    description:
      "Terms & Conditions for Fight Social Event hosted by Lumina Hospitality (NAZR™) & Warrior's Cove MMA.",
    url: "https://www.nazrco.in/fight-social/terms",
    siteName: "NAZR",
  },
};

export default function FightSocialTermsPage() {
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
            <span className="text-[#FF007A]">TERMS &amp; CONDITIONS</span>
          </div>

          {/* Quick Toggle to Privacy */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <Link
              href="/fight-social/privacy-policy"
              className="px-3 py-1.5 rounded bg-[#1C1C1C] border border-[#333333] text-[#F1E4DE]/80 hover:border-[#FF007A] hover:text-white transition-colors"
            >
              ← Privacy Policy
            </Link>
            <span className="px-3 py-1.5 rounded bg-[#FF007A] text-white font-medium">
              Terms &amp; Conditions
            </span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="mb-10">
          <span className="text-xs font-mono tracking-widest text-[#FF007A] uppercase block mb-2 font-semibold">
            Legal Documentation
          </span>
          <h1 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl md:text-7xl tracking-tight text-[#F1E4DE] uppercase leading-none">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm font-mono text-[#888888] mt-3">
            Fight Social • Hosted by Lumina Hospitality Private Limited (NAZR™) &amp; Warrior’s Cove MMA
          </p>
        </div>

        {/* Intro Card */}
        <div className="bg-[#181818] border border-[#2A2A2A] rounded-[4px] p-6 sm:p-8 mb-8 relative">
          <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#FF007A]" />
          <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#FF007A]" />
          <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#FF007A]" />
          <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#FF007A]" />

          <p className="text-sm sm:text-[15px] leading-relaxed text-[#F1E4DE]/90 mb-4">
            These Terms &amp; Conditions (“Terms”) govern attendance at and participation in Fight Social (“Event”), hosted by Lumina Hospitality Private Limited, operating under the brand NAZR™ (“Company”, “we”, “us”, “our”), and co-hosted by Warrior’s Cove MMA.
          </p>
          <p className="text-sm sm:text-[15px] leading-relaxed text-[#F1E4DE]/90 font-medium">
            By purchasing a ticket, registering for, or attending the Event, you agree to be bound by these Terms.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8 text-sm sm:text-[15px] leading-relaxed text-[#F1E4DE]/85">
          {/* Section 1 */}
          <section className="bg-[#161616] border border-[#242424] rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A]/20 text-[#FF007A] text-xs font-mono flex items-center justify-center font-bold">
                1
              </span>
              <span>Age Requirement</span>
            </h2>
            <p className="mb-2 font-medium text-[#FF007A]">The Event is strictly 18+.</p>
            <p>
              Attendees may be required to present a valid government-issued photo ID at the venue. Entry may be refused if age or identity cannot be verified.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-[#161616] border border-[#242424] rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A]/20 text-[#FF007A] text-xs font-mono flex items-center justify-center font-bold">
                2
              </span>
              <span>Tickets &amp; Entry</span>
            </h2>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF007A] text-xs mt-1">▪</span>
                <span>A valid Event ticket is mandatory for entry.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF007A] text-xs mt-1">▪</span>
                <span>Attendees must carry and present their ticket at the venue when requested.</span>
              </li>
              <li className="flex items-start gap-2.5 font-medium text-[#FF007A]">
                <span className="text-[#FF007A] text-xs mt-1">▪</span>
                <span>No valid ticket means no entry.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF007A] text-xs mt-1">▪</span>
                <span>An RSVP, registration form submission or invitation does not replace a valid Event ticket unless expressly stated otherwise.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF007A] text-xs mt-1">▪</span>
                <span>Entry is subject to ticket verification, venue capacity, security checks and applicable venue rules.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-[#181818] border border-[#FF007A]/40 rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A] text-white text-xs font-mono flex items-center justify-center font-bold">
                3
              </span>
              <span>Male Attendee Policy</span>
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 font-medium text-[#F1E4DE]">
                <span className="text-[#FF007A] text-xs mt-1">▪</span>
                <span>Male attendees must attend the Event with at least one female attendee.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF007A] text-xs mt-1">▪</span>
                <span>Both the male attendee and the accompanying female attendee must hold separate valid tickets.</span>
              </li>
              <li className="flex items-start gap-2.5 text-[#FF007A] font-medium bg-[#1F1419] p-3 rounded border border-[#FF007A]/20">
                <span className="text-[#FF007A] text-xs mt-0.5">⚠️</span>
                <span>A male attendee arriving without his accompanying female attendee may be refused entry, even if he holds a valid ticket.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="bg-[#161616] border border-[#242424] rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A]/20 text-[#FF007A] text-xs font-mono flex items-center justify-center font-bold">
                4
              </span>
              <span>Security &amp; Conduct</span>
            </h2>
            <p className="mb-3">
              All attendees must comply with Event staff, venue security and applicable venue guidelines.
            </p>
            <p className="mb-3 text-[#F1E4DE]/90">
              The Company reserves the right to refuse entry or remove any attendee engaging in:
            </p>
            <ul className="space-y-2 pl-4 mb-4">
              {[
                "Inappropriate or disruptive behaviour",
                "Harassment or intimidation",
                "Unsafe or aggressive conduct",
                "Any behaviour that may affect the safety or experience of other attendees",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#FF007A] text-xs mt-1">▪</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#888888] font-mono text-xs">
              Attendees removed for such conduct may not be entitled to a refund.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-[#161616] border border-[#242424] rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A]/20 text-[#FF007A] text-xs font-mono flex items-center justify-center font-bold">
                5
              </span>
              <span>Tickets, Transfers &amp; Refunds</span>
            </h2>
            <p className="mb-3 text-[#F1E4DE]/80">Unless otherwise stated:</p>
            <ul className="space-y-2 pl-4 mb-4">
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF007A] text-xs mt-1">▪</span>
                <span>Tickets are non-transferable.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FF007A] text-xs mt-1">▪</span>
                <span>Tickets are non-refundable.</span>
              </li>
            </ul>
            <p>
              Refunds will only be issued if the Event is cancelled by the organisers, subject to the applicable ticketing platform terms.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-[#161616] border border-[#242424] rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A]/20 text-[#FF007A] text-xs font-mono flex items-center justify-center font-bold">
                6
              </span>
              <span>Event Schedule &amp; Changes</span>
            </h2>
            <p className="mb-2">
              The Company reserves the right to make changes to Event timings, fights, participants, activities, programming, partners or schedules where reasonably required.
            </p>
            <p className="text-[#888888] font-mono text-xs">
              Such changes will not automatically entitle attendees to a refund.
            </p>
          </section>

          {/* Section 7 */}
          <section className="bg-[#161616] border border-[#242424] rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A]/20 text-[#FF007A] text-xs font-mono flex items-center justify-center font-bold">
                7
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

          {/* Section 8 */}
          <section className="bg-[#161616] border border-[#242424] rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A]/20 text-[#FF007A] text-xs font-mono flex items-center justify-center font-bold">
                8
              </span>
              <span>Participation in Activities</span>
            </h2>
            <p className="mb-2">
              The Event may include physical activities, demonstrations or interactive experiences.
            </p>
            <p className="mb-2">
              Participation is voluntary and attendees must follow all instructions provided by Event staff, trainers or instructors.
            </p>
            <p>
              The organisers may restrict or stop participation where they believe it may be unsafe.
            </p>
          </section>

          {/* Section 9 */}
          <section className="bg-[#161616] border border-[#242424] rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A]/20 text-[#FF007A] text-xs font-mono flex items-center justify-center font-bold">
                9
              </span>
              <span>Personal Belongings</span>
            </h2>
            <p className="mb-2">
              Attendees are responsible for their own personal belongings at all times.
            </p>
            <p>
              The Company, co-host, venue and Event partners will not be responsible for lost, stolen or unattended belongings, except where liability cannot legally be excluded.
            </p>
          </section>

          {/* Section 10 */}
          <section className="bg-[#161616] border border-[#242424] rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A]/20 text-[#FF007A] text-xs font-mono flex items-center justify-center font-bold">
                10
              </span>
              <span>Prohibited Items</span>
            </h2>
            <p className="mb-2">
              Attendees must comply with all venue security requirements.
            </p>
            <p className="font-medium text-[#FF007A]">
              Weapons, illegal substances and any items considered dangerous or prohibited by the venue are not permitted.
            </p>
          </section>

          {/* Section 11 */}
          <section className="bg-[#161616] border border-[#242424] rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A]/20 text-[#FF007A] text-xs font-mono flex items-center justify-center font-bold">
                11
              </span>
              <span>Right of Admission</span>
            </h2>
            <p className="mb-2 font-medium text-[#F1E4DE]">
              The organisers reserve the right of admission.
            </p>
            <p>
              Holding a ticket does not guarantee entry where an attendee does not meet the age requirement, male-attendee policy, security requirements or any other condition set out in these Terms.
            </p>
          </section>

          {/* Section 12 */}
          <section className="bg-[#181818] border border-[#FF007A]/40 rounded-[4px] p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F1E4DE] mb-4 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-[#FF007A] text-white text-xs font-mono flex items-center justify-center font-bold">
                12
              </span>
              <span>Acceptance of Terms</span>
            </h2>
            <p className="font-medium text-base text-[#F1E4DE]">
              By purchasing a ticket, registering for or attending the Event, you confirm that you have read, understood and agreed to these Terms &amp; Conditions.
            </p>
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
              href="/fight-social/privacy-policy"
              className="hover:text-[#F1E4DE] transition-colors underline"
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
