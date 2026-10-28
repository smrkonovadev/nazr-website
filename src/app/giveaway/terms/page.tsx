import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck, Gift, Clock, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Giveaway Terms & Important Information | NAZR",
  description:
    "Official terms and conditions, rules, and eligibility details for the NAZR Mystery Box Giveaway at MMASFH on 30 and 31 October 2026.",
  alternates: {
    canonical: "/giveaway/terms",
  },
};

const TERMS_SECTIONS = [
  {
    number: "01",
    title: "What you can win",
    content:
      "Each of the three winners gets one NAZR Mystery Box, filled with NAZR safety products and exclusive merch, worth ₹2,000 at MRP. The contents are revealed when you collect it. The box can’t be exchanged for cash or swapped for other items.",
    icon: "gift",
  },
  {
    number: "02",
    title: "Who can enter",
    content:
      "The giveaway is open to people attending MMASFH on 30 and 31 October 2026 who are 18 or older and live in India. Employees of NAZR and Lumina Hospitality Private Limited, and their immediate families, can’t enter.",
    icon: "users",
  },
  {
    number: "03",
    title: "One entry per person",
    content:
      "Each person can enter once. If we find more than one entry from the same person, we keep the first one and remove the rest.",
    icon: "check",
  },
  {
    number: "04",
    title: "What you need to do",
    content:
      "Follow NAZR on Instagram, follow NAZR on LinkedIn, download the NAZR app and sign up, then submit the entry form. Entries that miss any step aren’t eligible to win.",
    icon: "list",
  },
  {
    number: "05",
    title: "When entries open and close",
    content:
      "Entries open on 30 October 2026 and close at 6:00 PM IST on 31 October 2026. Entries received after the deadline won’t be accepted.",
    icon: "clock",
  },
  {
    number: "06",
    title: "How winners are picked",
    content:
      "Three winners are picked by random draw from all eligible entries after entries close.",
    icon: "shuffle",
  },
  {
    number: "07",
    title: "How we check entries",
    content:
      "The NAZR team checks every Instagram follow, LinkedIn follow and NAZR app sign-up by hand. Ticking the boxes on the form doesn’t make an entry eligible on its own.",
    icon: "search",
  },
  {
    number: "08",
    title: "If you win",
    content:
      "Winners are picked after entries close at 6:00 PM and messaged on WhatsApp, on the mobile number they entered, by 7:00 PM on 31 October. Reply to our WhatsApp message and be ready to show the Instagram account and NAZR app login you entered with.",
    icon: "message",
  },
  {
    number: "09",
    title: "Collecting your mystery box",
    content:
      "Collect your box from the NAZR booth at MMASFH by 7:30 PM on 31 October. Bring a photo ID that matches the name on your entry.",
    icon: "map-pin",
  },
  {
    number: "10",
    title: "Alternate winners",
    content:
      "If a winner can’t be verified, doesn’t reply on WhatsApp or doesn’t collect the box by 7:30 PM, we’ll draw an alternate winner from the remaining eligible entries.",
    icon: "refresh",
  },
  {
    number: "11",
    title: "Your data and privacy",
    content:
      "Your entry details are stored privately and used only to run this giveaway: checking your steps, picking winners and contacting them. We’ll only send you NAZR news and offers if you ticked the optional box. To have your entry deleted, email support@nazrco.in.",
    icon: "shield",
  },
  {
    number: "12",
    title: "Instagram and LinkedIn",
    content:
      "This giveaway is run by NAZR. It isn’t sponsored, endorsed or administered by, or associated with, Instagram, Meta, LinkedIn or Microsoft.",
    icon: "info",
  },
];

export default function GiveawayTermsPage() {
  return (
    <main className="min-h-screen bg-[#0C0B0E] text-white selection:bg-[#E6007E] selection:text-white flex flex-col items-center px-4 py-8 md:py-14">
      {/* Container */}
      <div className="w-full max-w-[760px] flex flex-col">
        {/* Top Navigation */}
        <div className="w-full flex justify-between items-center pb-6 border-b border-white/10 mb-8">
          <Link
            href="/"
            className="font-[family-name:var(--font-bebas)] text-[#E6007E] text-[34px] leading-none tracking-[-0.025em] hover:opacity-90 transition-opacity"
          >
            NAZR
          </Link>
          <Link
            href="/giveaway"
            className="inline-flex items-center gap-2 text-[12px] font-sans font-bold tracking-[0.05em] uppercase text-white/80 hover:text-[#E6007E] transition-colors bg-white/5 hover:bg-white/10 px-3.5 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Giveaway
          </Link>
        </div>

        {/* Hero Header */}
        <header className="flex flex-col gap-2.5 mb-8">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#E6007E]/15 border border-[#E6007E]/30 text-[#E6007E] font-sans font-bold text-[11px] tracking-[0.18em] uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            OFFICIAL RULES & TERMS
          </div>
          <h1 className="font-[family-name:var(--font-bebas)] text-[46px] sm:text-[56px] leading-[0.95] tracking-[0.02em] uppercase text-white m-0">
            IMPORTANT INFORMATION
          </h1>
          <p className="font-sans text-[14px] sm:text-[15px] leading-[22px] text-[#A3A3A3] max-w-[640px]">
            Please review the complete rules, eligibility criteria, verification process, and prize collection guidelines for the NAZR Mystery Box Giveaway at MMASFH on 30 and 31 October 2026.
          </p>

          {/* Key Facts Summary Banner */}
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-4 rounded-[18px] bg-white/[0.04] border border-white/10 text-center">
            <div className="flex flex-col items-center">
              <span className="font-sans text-[10px] uppercase tracking-wider text-white/50">Winners</span>
              <span className="font-[family-name:var(--font-bebas)] text-[22px] text-[#E6007E] leading-tight">3 Boxes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-sans text-[10px] uppercase tracking-wider text-white/50">Value</span>
              <span className="font-[family-name:var(--font-bebas)] text-[22px] text-white leading-tight">₹2,000 MRP</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-sans text-[10px] uppercase tracking-wider text-white/50">Deadline</span>
              <span className="font-[family-name:var(--font-bebas)] text-[22px] text-white leading-tight">31 OCT · 6 PM</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-sans text-[10px] uppercase tracking-wider text-white/50">Verification</span>
              <span className="font-[family-name:var(--font-bebas)] text-[22px] text-[#E6007E] leading-tight">Manual Check</span>
            </div>
          </div>
        </header>

        {/* 12 Terms Sections */}
        <section className="flex flex-col gap-3.5 mb-10">
          {TERMS_SECTIONS.map((term) => (
            <article
              key={term.number}
              className="p-5 sm:p-6 rounded-[20px] bg-[#141318] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col gap-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-sans font-bold text-[11px] leading-[15px] tracking-[0.16em] uppercase text-[#E6007E]">
                  RULE {term.number}
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-bebas)] text-[26px] sm:text-[30px] leading-[30px] tracking-[0.02em] uppercase text-white m-0 group-hover:text-[#E6007E] transition-colors">
                {term.title}
              </h2>
              <p className="font-sans text-[13.5px] sm:text-[14.5px] leading-[22px] text-[#D1D5DB] m-0">
                {term.content}
              </p>
            </article>
          ))}
        </section>

        {/* Bottom CTA & Support Card */}
        <section className="w-full p-6 sm:p-8 rounded-[24px] bg-gradient-to-br from-[#1C0F1E] to-[#0E0610] border border-[#E6007E]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <span className="font-sans font-bold text-[11px] tracking-[0.18em] uppercase text-[#E6007E]">
              READY TO PARTICIPATE?
            </span>
            <h3 className="font-[family-name:var(--font-bebas)] text-[32px] sm:text-[36px] leading-[34px] uppercase text-white m-0">
              SUBMIT YOUR ENTRY
            </h3>
            <p className="font-sans text-[12.5px] text-white/70 max-w-[380px]">
              Complete the 3 quick steps on Instagram, LinkedIn, and the NAZR app to secure your ticket.
            </p>
          </div>

          <Link
            href="/giveaway#entry-form"
            className="w-full sm:w-auto px-6 py-3.5 bg-[#E6007E] hover:bg-[#c4006c] text-white font-sans font-bold text-[13px] tracking-[0.08em] uppercase rounded-[12px] text-center transition-all shadow-lg shadow-[#E6007E]/25 shrink-0"
          >
            ENTER THE GIVEAWAY NOW
          </Link>
        </section>

        {/* Footer info & inquiries */}
        <footer className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left text-[#737373] text-[12px] font-sans">
          <span>
            Have questions or want your entry deleted? Email{" "}
            <a href="mailto:support@nazrco.in" className="text-white hover:underline">
              support@nazrco.in
            </a>
          </span>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Website Terms
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
