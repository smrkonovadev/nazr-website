"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useNavigation } from "@/context/NavigationContext";
import {
  Check,
  Smartphone,
  ExternalLink,
  Share2,
  Copy,
  Download,
  Lock,
  X,
  Search,
  Shuffle,
  Trophy,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

// 12 Accordion items from the Figma specification
const IMPORTANT_INFO_ITEMS = [
  {
    id: 1,
    title: "What you can win",
    content:
      "Each winner gets one NAZR mystery box of NAZR safety products and exclusive merch, worth ₹2,000 at MRP. Contents are revealed when you collect it and can't be exchanged for cash.",
  },
  {
    id: 2,
    title: "Who can enter",
    content:
      "Open to all individuals in India aged 18 and above who follow NAZR on Instagram, follow NAZR on LinkedIn, and sign up on the NAZR mobile app. Both students and working professionals are welcome.",
  },
  {
    id: 3,
    title: "One entry per person",
    content:
      "Only one entry is allowed per person, mobile number, and Instagram account. Multiple or duplicate entries from the same individual will be automatically deduplicated.",
  },
  {
    id: 4,
    title: "What you need to do",
    content:
      "Three simple steps: 1. Follow @nazr.360 on Instagram. 2. Follow the NAZR company page on LinkedIn. 3. Download the NAZR app and sign up. Then fill out the official Entry Ticket form above.",
  },
  {
    id: 5,
    title: "When entries open and close",
    content:
      "Entries open on 30 October and officially close on 31 October 2026 at 6:00 PM IST sharp. Late entries submitted after the deadline will not be eligible for the draw.",
  },
  {
    id: 6,
    title: "How winners are picked",
    content:
      "Winners are selected completely at random from all verified entries using a certified algorithmic randomizer. The process is transparent, tamper-proof, and unbiased.",
  },
  {
    id: 7,
    title: "How we check entries",
    content:
      "The NAZR team manually reviews every shortlisted winner to verify that they follow NAZR on Instagram and LinkedIn, and have an active registered account on the NAZR app.",
  },
  {
    id: 8,
    title: "If you win",
    content:
      "Selected winners will be contacted directly on the evening of 31 October via phone call and WhatsApp on the 10-digit mobile number provided during entry.",
  },
  {
    id: 9,
    title: "Collecting your hamper",
    content:
      "Verified winners can collect their exclusive NAZR Mystery Box hamper at the designated NAZR event / booth location, or provide a secure Indian postal address for courier delivery.",
  },
  {
    id: 10,
    title: "Alternate winners",
    content:
      "If a drawn winner cannot be contacted within 24 hours or fails the verification requirements, an alternate winner will be randomly drawn from the remaining verified pool.",
  },
  {
    id: 11,
    title: "Your data and privacy",
    content:
      "Your personal information is strictly protected and used exclusively for prize notification and giveaway verification. NAZR will never sell, lease, or share your data with third parties.",
  },
  {
    id: 12,
    title: "Instagram and LinkedIn",
    content:
      "This giveaway is run independently by NAZR (Lumina Hospitality Pvt. Ltd.) and is in no way sponsored, endorsed, administered by, or associated with Instagram, Meta, or LinkedIn.",
  },
];

export function GiveawayPage() {
  const { setIsMenuOpen } = useNavigation();

  // Step completion states
  const [step1Checked, setStep1Checked] = useState(false);
  const [step2Checked, setStep2Checked] = useState(false);
  const [step3Checked, setStep3Checked] = useState(false);

  // Form states
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [instagramUsername, setInstagramUsername] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [appAccount, setAppAccount] = useState("");
  const [completedStepsConsent, setCompletedStepsConsent] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  // Submission & Result state
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [copiedCode, setCopiedCode] = useState(false);
  const [ticketResult, setTicketResult] = useState<{
    ticketId: string;
    name: string;
    phone: string;
    instagram: string;
    appAccount: string;
  } | null>(null);

  // Accordion state (Item 1 expanded by default as in Figma)
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(1);

  // Admin / Randomizer state
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminPin, setAdminPin] = useState("");
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminEntries, setAdminEntries] = useState<any[]>([]);
  const [adminLoading, setAdminLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isShuffling, setIsShuffling] = useState(false);
  const [shufflingName, setShufflingName] = useState("");
  const [winner, setWinner] = useState<any | null>(null);

  const ticketRef = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);

  // Sync checkboxes: If all 3 step cards are checked, check completedStepsConsent
  useEffect(() => {
    if (step1Checked && step2Checked && step3Checked) {
      setCompletedStepsConsent(true);
    }
  }, [step1Checked, step2Checked, step3Checked]);

  // Real-time Countdown Timer target: 31 OCT 2026, 18:00:00 IST
  const [timeLeft, setTimeLeft] = useState({
    days: "05",
    hours: "01",
    minutes: "43",
    seconds: "35",
  });

  useEffect(() => {
    const target = new Date("2026-10-31T18:00:00+05:30").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        setTimeLeft({
          days: String(d).padStart(2, "0"),
          hours: String(h).padStart(2, "0"),
          minutes: String(m).padStart(2, "0"),
          seconds: String(s).padStart(2, "0"),
        });
      } else {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Calculate completed steps count
  const completedCount = [step1Checked, step2Checked, step3Checked].filter(Boolean).length;
  const progressPercent = (completedCount / 3) * 100;

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!fullName.trim()) {
      setSubmitError("Please enter your full name.");
      return;
    }

    const cleanPhone = mobileNumber.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setSubmitError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!instagramUsername.trim()) {
      setSubmitError("Please provide your Instagram username so we can verify your follow.");
      return;
    }

    if (!linkedinUrl.trim()) {
      setSubmitError("Please provide your LinkedIn profile URL.");
      return;
    }

    if (!appAccount.trim()) {
      setSubmitError("Please provide the email or phone number used for your NAZR app sign-up.");
      return;
    }

    if (!agreeTerms) {
      setSubmitError("You must agree to the giveaway terms and privacy notice to enter.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/giveaway", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName.trim(),
          phone: mobileNumber.trim(),
          instagramUsername: instagramUsername.trim().replace(/^@/, ""),
          linkedinUrl: linkedinUrl.trim(),
          appAccount: appAccount.trim(),
          completedSteps: completedStepsConsent || completedCount === 3,
          marketingConsent,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.existingTicket) {
          setSubmitError(`Already entered! Your Ticket ID is ${data.existingTicket}.`);
        } else {
          setSubmitError(data.error || "Failed to submit entry. Please try again.");
        }
        setLoading(false);
        return;
      }

      setTicketResult({
        ticketId: data.ticketId,
        name: fullName.trim(),
        phone: mobileNumber.trim(),
        instagram: instagramUsername.trim().replace(/^@/, ""),
        appAccount: appAccount.trim(),
      });

      // Smooth scroll to ticket header
      setTimeout(() => {
        ticketRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    } catch (err) {
      setSubmitError("Network error. Please check your connection and retry.");
    } finally {
      setLoading(false);
    }
  };

  const copyTicketCode = () => {
    if (!ticketResult) return;
    navigator.clipboard.writeText(ticketResult.ticketId);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const scrollToEntry = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Admin authentication and data fetch
  const handleAdminAuth = async () => {
    setAdminLoading(true);
    try {
      const res = await fetch(`/api/giveaway?pin=${encodeURIComponent(adminPin)}`);
      const data = await res.json();
      if (res.ok && data.entries) {
        setIsAdminAuthenticated(true);
        setAdminEntries(data.entries);
      } else {
        alert("Invalid Admin PIN");
      }
    } catch (err) {
      alert("Error loading admin data");
    } finally {
      setAdminLoading(false);
    }
  };

  const runRandomizer = () => {
    if (adminEntries.length === 0) return;
    setIsShuffling(true);
    setWinner(null);

    let count = 0;
    const interval = setInterval(() => {
      const rand = adminEntries[Math.floor(Math.random() * adminEntries.length)];
      setShufflingName(rand.name);
      count++;
      if (count > 25) {
        clearInterval(interval);
        const finalWinner = adminEntries[Math.floor(Math.random() * adminEntries.length)];
        setWinner(finalWinner);
        setIsShuffling(false);
      }
    }, 90);
  };

  return (
    <div className="w-full flex flex-col items-center bg-[#0C0B0E] text-white selection:bg-[#E6007E] selection:text-white">
      {/* Container matching mobile Figma frame (390px) on mobile and expanding elegantly on desktop */}
      <div className="w-full max-w-[390px] md:max-w-[440px] flex flex-col relative shadow-2xl">

        {/* =========================================================================
            SECTION 1: HERO / LANDING (#0C0B0E)
        ========================================================================= */}
        <section className="w-full bg-[#0C0B0E] px-6 pt-5 pb-8 flex flex-col items-center relative overflow-hidden">
          {/* Subtle Ambient Pink Glow */}
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full pointer-events-none opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #E6007E 0%, transparent 70%)" }}
          />

          {/* Top Brand Header */}
          <div className="w-full flex justify-between items-center mb-6 z-10">
            <Link
              href="/"
              className="font-[family-name:var(--font-bebas)] text-[#E6007E] text-[36px] leading-[36px] tracking-[-0.025em] hover:opacity-90 transition-opacity"
            >
              NAZR
            </Link>

            {/* Navigation Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="w-[42px] h-[34px] rounded-[8px] bg-[#E6007E] hover:bg-[#d00072] flex flex-col justify-center items-center gap-[5px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-all cursor-pointer active:scale-95"
            >
              <span className="w-[18px] h-[2.2px] bg-white rounded-full block" />
              <span className="w-[18px] h-[2.2px] bg-white rounded-full block" />
            </button>
          </div>

          {/* Mystery Box Hero Visual */}
          <div className="w-full flex justify-center items-center relative mb-4 z-10 group">
            <div className="relative w-full max-w-[357px] h-[196px] flex items-center justify-center">
              <Image
                src="/images/giveaway/mystery_box_hires.png"
                alt="NAZR Mystery Box - Worth ₹2000"
                width={357}
                height={196}
                priority
                className="w-full h-auto object-contain mix-blend-lighten drop-shadow-[0_12px_24px_rgba(230,0,122,0.25)] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Typography Titles & Copy */}
          <div className="w-full flex flex-col items-center text-center z-10 mt-1">
            {/* Giveaway Category Tag */}
            <span className="font-sans font-bold text-[10.5px] leading-[15.75px] tracking-[0.22em] uppercase text-[#E6007E] mb-1">
              THE NAZR GIVEAWAY • MMASFH
            </span>

            {/* Display Headline */}
            <h1 className="flex flex-col items-center justify-center m-0 select-none">
              <span className="font-[family-name:var(--font-bebas)] font-normal text-[42px] leading-[37px] tracking-[0.025em] text-white">
                THE NAZR
              </span>
              <span className="font-[family-name:var(--font-bebas)] font-normal text-[74px] leading-[65px] text-[#E6007E] tracking-tight">
                MYSTERY BOX
              </span>
            </h1>

            {/* Scarcity Sub-headline */}
            <p className="font-[family-name:var(--font-bebas)] font-normal text-[19px] leading-[28.5px] tracking-[0.05em] mt-3 mb-5">
              <span className="text-white">ONLY 3 EXIST. </span>
              <span className="text-[#E6007E]">ONE COULD BE YOURS.</span>
            </p>

            {/* 4-Card Countdown Grid */}
            <div className="w-full flex justify-center gap-2.5 mb-3.5">
              {/* Days */}
              <div className="flex-1 bg-[#111116] border border-white/5 rounded-[12px] py-2 px-1 flex flex-col items-center justify-center shadow-inner">
                <span className="font-[family-name:var(--font-bebas)] text-white text-[38px] leading-[38px] tracking-[-0.025em]">
                  {timeLeft.days}
                </span>
                <span className="font-sans font-bold text-[10px] leading-[15px] tracking-[0.05em] uppercase text-[#A3A3A3] mt-0.5">
                  DAYS
                </span>
              </div>

              {/* Hours */}
              <div className="flex-1 bg-[#111116] border border-white/5 rounded-[12px] py-2 px-1 flex flex-col items-center justify-center shadow-inner">
                <span className="font-[family-name:var(--font-bebas)] text-white text-[38px] leading-[38px] tracking-[-0.025em]">
                  {timeLeft.hours}
                </span>
                <span className="font-sans font-bold text-[10px] leading-[15px] tracking-[0.05em] uppercase text-[#A3A3A3] mt-0.5">
                  HOURS
                </span>
              </div>

              {/* Minutes */}
              <div className="flex-1 bg-[#111116] border border-white/5 rounded-[12px] py-2 px-1 flex flex-col items-center justify-center shadow-inner">
                <span className="font-[family-name:var(--font-bebas)] text-white text-[38px] leading-[38px] tracking-[-0.025em]">
                  {timeLeft.minutes}
                </span>
                <span className="font-sans font-bold text-[10px] leading-[15px] tracking-[0.05em] uppercase text-[#A3A3A3] mt-0.5">
                  MINS
                </span>
              </div>

              {/* Seconds */}
              <div className="flex-1 bg-[#111116] border border-white/5 rounded-[12px] py-2 px-1 flex flex-col items-center justify-center shadow-inner">
                <span className="font-[family-name:var(--font-bebas)] text-white text-[38px] leading-[38px] tracking-[-0.025em]">
                  {timeLeft.seconds}
                </span>
                <span className="font-sans font-bold text-[10px] leading-[15px] tracking-[0.05em] uppercase text-[#A3A3A3] mt-0.5">
                  SECS
                </span>
              </div>
            </div>

            {/* Deadline Notice */}
            <div className="flex items-center justify-center gap-1.5 opacity-90 text-[10.5px] leading-[15.75px] font-sans font-bold tracking-[0.05em] uppercase mb-6">
              <span className="text-white">ENTRIES CLOSE</span>
              <span className="text-[#E6007E]">|</span>
              <span className="text-white">31 OCT 2026, 6:00 PM IST</span>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={scrollToEntry}
              className="w-full bg-[#E6007E] hover:bg-[#d00072] text-white font-sans font-extrabold text-[15px] leading-[22.5px] tracking-[0.05em] uppercase py-[14px] rounded-[10px] shadow-[0px_4px_20px_0px_rgba(230,0,122,0.35)] transition-all active:scale-[0.98] cursor-pointer"
            >
              ENTER THE GIVEAWAY
            </button>
          </div>
        </section>


        {/* =========================================================================
            SECTION 2: HOW TO ENTER STEPS (#FCEEF4)
        ========================================================================= */}
        <section id="how-to-enter" className="w-full bg-[#FCEEF4] text-[#171717] px-4 py-8 flex flex-col">
          {/* Header */}
          <div className="flex flex-col gap-1.5 mb-5 px-1">
            <span className="font-sans font-extrabold text-[11px] leading-[16.5px] tracking-[0.12em] uppercase text-[#262626]">
              HOW TO ENTER
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-[46px] leading-[44px] tracking-[-0.025em] uppercase text-[#0A0A0A]">
              FOLLOW. DOWNLOAD. <br />
              <span className="text-[#E6007E]">DONE.</span>
            </h2>
            <p className="font-sans font-medium text-[13px] leading-[18.2px] text-[#262626] mt-1">
              Curious what&apos;s inside? Three quick steps and you&apos;re in the draw for a box worth ₹2,000.
            </p>

            {/* Progress Tracking Bar */}
            <div className="flex items-center gap-3 mt-3">
              <div className="flex-1 h-[6px] bg-[#E3D2DC] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#E6007E] rounded-full transition-all duration-300"
                  style={{ width: `${Math.max(progressPercent, 4)}%` }}
                />
              </div>
              <span className="font-sans font-extrabold text-[11px] leading-[16.5px] tracking-[0.05em] uppercase text-[#171717] whitespace-nowrap">
                {completedCount === 3 ? "ALL 3 DONE!" : `${completedCount} OF 3 DONE`}
              </span>
            </div>
          </div>

          {/* 3 Step Cards */}
          <div className="flex flex-col gap-4">

            {/* --- STEP 1 CARD --- */}
            <article className="w-full bg-white rounded-[16px] p-5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-black/5 flex flex-col">
              <div className="flex justify-between items-center mb-1">
                <span className="font-[family-name:var(--font-bebas)] font-black text-[18px] leading-[28px] tracking-[0.025em] text-[#171717]">
                  STEP 1
                </span>
                <div className="w-[32px] h-[32px] bg-black rounded-[8px] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-bebas)] text-[27px] leading-[27px] tracking-[0.0185em] uppercase text-[#0A0A0A] mb-1">
                FOLLOW NAZR ON INSTAGRAM
              </h3>
              <p className="font-sans text-[12.5px] leading-[18.75px] text-[#525252] mb-3.5">
                Follow @nazr.360 from your own account.
              </p>

              <a
                href="https://www.instagram.com/nazr.360/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setStep1Checked(true)}
                className="w-full bg-black hover:bg-neutral-800 text-white font-sans font-bold text-[12px] leading-[18px] tracking-[0.05em] uppercase py-3.5 rounded-[12px] flex items-center justify-center gap-2 mb-3 transition-colors text-center"
              >
                FOLLOW ON INSTAGRAM
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              {/* Verification Checkbox Pill */}
              <div
                onClick={() => setStep1Checked(!step1Checked)}
                className={`w-full p-3 rounded-[12px] flex items-center gap-3 cursor-pointer select-none transition-all ${
                  step1Checked
                    ? "bg-[#FCEEF4] border-2 border-[#E6007E]"
                    : "bg-[#F1F3EF] border-2 border-transparent hover:bg-[#eaece8]"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-[4px] flex items-center justify-center transition-colors ${
                    step1Checked ? "bg-[#E6007E] text-white" : "border border-[#6B7280] bg-white"
                  }`}
                >
                  {step1Checked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span className="font-sans font-semibold text-[12px] leading-[15px] text-[#171717]">
                  I&apos;ve followed NAZR on Instagram
                </span>
              </div>
            </article>

            {/* --- STEP 2 CARD --- */}
            <article
              className={`w-full bg-white rounded-[16px] p-5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border transition-all flex flex-col ${
                step2Checked ? "border-[#E6007E] ring-1 ring-[#E6007E]/30" : "border-black/5"
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-[family-name:var(--font-bebas)] font-black text-[18px] leading-[28px] tracking-[0.025em] text-[#171717]">
                  STEP 2
                </span>
                <div className="w-[32px] h-[32px] bg-[#E6007E] rounded-[8px] flex items-center justify-center">
                  <span className="font-sans font-extrabold text-white text-[14px] leading-none lowercase">
                    in
                  </span>
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-bebas)] text-[27px] leading-[27px] tracking-[0.0185em] uppercase text-[#0A0A0A] mb-1">
                FOLLOW NAZR ON LINKEDIN
              </h3>
              <p className="font-sans text-[12.5px] leading-[18.75px] text-[#525252] mb-3.5">
                Follow the NAZR company page.
              </p>

              <a
                href="https://www.linkedin.com/company/nazrco/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setStep2Checked(true)}
                className="w-full bg-black hover:bg-neutral-800 text-white font-sans font-bold text-[12px] leading-[18px] tracking-[0.05em] uppercase py-3.5 rounded-[12px] flex items-center justify-center gap-2 mb-3 transition-colors text-center"
              >
                FOLLOW ON LINKEDIN
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              {/* Verification Checkbox Pill */}
              <div
                onClick={() => setStep2Checked(!step2Checked)}
                className={`w-full p-3 rounded-[12px] flex items-center gap-3 cursor-pointer select-none transition-all ${
                  step2Checked
                    ? "bg-[#FCEEF4] border-2 border-[#E6007E]"
                    : "bg-[#F1F3EF] border-2 border-transparent hover:bg-[#eaece8]"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-[4px] flex items-center justify-center transition-colors ${
                    step2Checked ? "bg-[#E6007E] text-white" : "border border-[#6B7280] bg-white"
                  }`}
                >
                  {step2Checked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span className="font-sans font-semibold text-[12px] leading-[15px] text-[#171717]">
                  I&apos;ve followed NAZR on LinkedIn
                </span>
              </div>
            </article>

            {/* --- STEP 3 CARD --- */}
            <article className="w-full bg-white rounded-[16px] p-5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border border-black/5 flex flex-col">
              <div className="flex justify-between items-center mb-1">
                <span className="font-[family-name:var(--font-bebas)] font-black text-[18px] leading-[28px] tracking-[0.025em] text-[#171717]">
                  STEP 3
                </span>
                <div className="w-[32px] h-[32px] bg-black rounded-[8px] flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-white" />
                </div>
              </div>

              <h3 className="font-[family-name:var(--font-bebas)] text-[27px] leading-[27px] tracking-[0.0185em] uppercase text-[#0A0A0A] mb-1">
                DOWNLOAD THE NAZR APP
              </h3>
              <p className="font-sans text-[12.5px] leading-[18.75px] text-[#525252] mb-3.5">
                Install it and sign up. Free on iOS and Android.
              </p>

              <div className="w-full flex flex-col gap-2 mb-3">
                <a
                  href="https://apps.apple.com/in/app/nazr-women-safety-app/id6787188929"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setStep3Checked(true)}
                  className="w-full bg-black hover:bg-neutral-800 text-white font-sans font-bold text-[12px] leading-[18px] tracking-[0.05em] uppercase py-3.5 rounded-[12px] flex items-center justify-center gap-2 transition-colors text-center"
                >
                  DOWNLOAD THE APP
                </a>

                {/* App Store & Google Play Chips Row */}
                <div className="flex items-center gap-2">
                  <a
                    href="https://apps.apple.com/in/app/nazr-women-safety-app/id6787188929"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setStep3Checked(true)}
                    className="flex-1 py-2 px-3 border border-black hover:bg-black hover:text-white rounded-[10px] text-center font-sans font-semibold text-[11px] leading-[16.5px] text-[#262626] transition-colors"
                  >
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.nazr.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setStep3Checked(true)}
                    className="flex-1 py-2 px-3 border border-black hover:bg-black hover:text-white rounded-[10px] text-center font-sans font-semibold text-[11px] leading-[16.5px] text-[#262626] transition-colors"
                  >
                    Google Play
                  </a>
                </div>
              </div>

              {/* Verification Checkbox Pill */}
              <div
                onClick={() => setStep3Checked(!step3Checked)}
                className={`w-full p-3 rounded-[12px] flex items-center gap-3 cursor-pointer select-none transition-all ${
                  step3Checked
                    ? "bg-[#FCEEF4] border-2 border-[#E6007E]"
                    : "bg-[#F1F3EF] border-2 border-transparent hover:bg-[#eaece8]"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-[4px] flex items-center justify-center transition-colors ${
                    step3Checked ? "bg-[#E6007E] text-white" : "border border-[#6B7280] bg-white"
                  }`}
                >
                  {step3Checked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span className="font-sans font-semibold text-[12px] leading-[15px] text-[#171717]">
                  I&apos;ve downloaded the app and signed up
                </span>
              </div>
            </article>

          </div>
        </section>


        {/* =========================================================================
            SECTION 3: ENTRY TICKET FORM (#0D0D0D)
        ========================================================================= */}
        <section
          id="entry-form"
          ref={formSectionRef}
          className="w-full bg-[#0D0D0D] text-white px-4 py-8 flex flex-col relative"
        >
          {/* Header */}
          <div className="flex flex-col gap-1 mb-5 px-1">
            <span className="font-sans font-bold text-[12px] leading-[16px] tracking-[0.2em] uppercase text-[#E6007E]">
              LAST STEP
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-[36px] leading-[45px] text-white">
              YOU&apos;RE <span className="text-[#E6007E]">ONE STEP AWAY.</span>
            </h2>
          </div>

          {/* Ticket Card with Perforation & Circular Cutout Notches */}
          <article
            ref={ticketRef}
            className="w-full bg-[#F4F4F4] text-[#111827] rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] relative pb-6 transition-all"
          >
            {/* Left Circular Notched Cutout */}
            <div
              className="absolute -left-[9px] top-[60px] w-[18px] h-[18px] bg-[#0D0D0D] rounded-full z-20 pointer-events-none"
              style={{ boxShadow: "inset -2px 0 3px rgba(0,0,0,0.15)" }}
            />
            {/* Right Circular Notched Cutout */}
            <div
              className="absolute -right-[9px] top-[60px] w-[18px] h-[18px] bg-[#0D0D0D] rounded-full z-20 pointer-events-none"
              style={{ boxShadow: "inset 2px 0 3px rgba(0,0,0,0.15)" }}
            />

            {/* Ticket Header Area */}
            <div className="w-full px-5 pt-3.5 pb-2.5 flex justify-between items-center h-[69px]">
              <div className="flex flex-col">
                <span className="font-sans font-bold text-[10px] leading-[15px] tracking-[0.05em] uppercase text-[#9CA3AF]">
                  ENTRY TICKET
                </span>
                <span className="font-[family-name:var(--font-bebas)] text-[20px] leading-[28px] text-black tracking-wider">
                  {ticketResult ? ticketResult.ticketId : "NZR-•••••"}
                </span>
              </div>
              <span className="font-sans font-bold text-[11px] leading-[16.5px] tracking-[0.05em] uppercase text-[#E6007E]">
                NAZR HAMPER
              </span>
            </div>

            {/* Perforation Divider Line */}
            <div className="w-full border-t border-dashed border-[#D1D5DB] my-0 relative z-10" />

            {/* ==============================================================
                TICKET BODY: FORM OR SUCCESS STATE
            ============================================================== */}
            {!ticketResult ? (
              <form onSubmit={handleSubmit} className="px-5 pt-5 flex flex-col gap-4">
                {/* Input 1: Full name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans font-bold text-[12px] leading-[16px] text-[#111827]">
                    Full name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Priya Sharma"
                    className="w-full h-[44px] bg-white border border-[#CCCCCC] focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] rounded-[8px] px-3 font-sans text-[14px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-all"
                  />
                </div>

                {/* Input 2: Mobile number */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans font-bold text-[12px] leading-[16px] text-[#111827]">
                    Mobile number
                  </label>
                  <input
                    type="tel"
                    required
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="98765 43210"
                    className="w-full h-[44px] bg-white border border-[#CCCCCC] focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] rounded-[8px] px-3 font-sans text-[14px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-all"
                  />
                  <span className="font-sans text-[11px] leading-[16.5px] text-[#6B7280]">
                    10-digit Indian mobile. We&apos;ll call this number if you win.
                  </span>
                </div>

                {/* Input 3: Instagram username */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans font-bold text-[12px] leading-[16px] text-[#111827]">
                    Instagram username
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-[#4B5563] font-bold text-[14px] select-none">
                      @
                    </span>
                    <input
                      type="text"
                      required
                      value={instagramUsername}
                      onChange={(e) => setInstagramUsername(e.target.value.replace(/^@/, ""))}
                      placeholder="yourusername"
                      className="w-full h-[44px] bg-white border border-[#CCCCCC] focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] rounded-[8px] pl-8 pr-3 font-sans text-[14px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Input 4: LinkedIn profile URL */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans font-bold text-[12px] leading-[16px] text-[#111827]">
                    LinkedIn profile URL
                  </label>
                  <input
                    type="text"
                    required
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    placeholder="linkedin.com/in/your-name"
                    className="w-full h-[44px] bg-white border border-[#CCCCCC] focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] rounded-[8px] px-3 font-sans text-[14px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-all"
                  />
                  <span className="font-sans text-[11px] leading-[16.5px] text-[#6B7280]">
                    Open your profile, tap Share, and copy the link.
                  </span>
                </div>

                {/* Input 5: Email or phone used on the NAZR app */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans font-bold text-[12px] leading-[16px] text-[#111827]">
                    Email or phone used on the NAZR app
                  </label>
                  <input
                    type="text"
                    required
                    value={appAccount}
                    onChange={(e) => setAppAccount(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full h-[44px] bg-white border border-[#CCCCCC] focus:border-[#E6007E] focus:ring-1 focus:ring-[#E6007E] rounded-[8px] px-3 font-sans text-[14px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-all"
                  />
                </div>

                {/* Checkboxes Container */}
                <div className="flex flex-col gap-3 pt-1">
                  {/* Checkbox 1: Complete steps */}
                  <label className="flex items-start gap-2.5 cursor-pointer text-[#1F2937]">
                    <input
                      type="checkbox"
                      checked={completedStepsConsent}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setCompletedStepsConsent(checked);
                        if (checked) {
                          setStep1Checked(true);
                          setStep2Checked(true);
                          setStep3Checked(true);
                        }
                      }}
                      className="mt-0.5 w-4 h-4 rounded text-[#E6007E] focus:ring-[#E6007E] border-gray-400 cursor-pointer"
                    />
                    <span className="font-sans text-[11.5px] leading-[15.8px]">
                      I&apos;ve completed all three steps: followed NAZR on Instagram and LinkedIn, and signed up on the NAZR app.
                    </span>
                  </label>

                  {/* Checkbox 2: Terms and Privacy */}
                  <label className="flex items-start gap-2.5 cursor-pointer text-[#1F2937]">
                    <input
                      type="checkbox"
                      required
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded text-[#E6007E] focus:ring-[#E6007E] border-gray-400 cursor-pointer"
                    />
                    <span className="font-sans text-[11.5px] leading-[15.8px]">
                      I agree to the{" "}
                      <span className="font-bold underline text-black">giveaway terms</span> and the{" "}
                      <span className="font-bold underline text-black">privacy notice</span>.
                    </span>
                  </label>

                  {/* Checkbox 3: Marketing Optional */}
                  <label className="flex items-start gap-2.5 cursor-pointer text-[#1F2937]">
                    <input
                      type="checkbox"
                      checked={marketingConsent}
                      onChange={(e) => setMarketingConsent(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded text-[#E6007E] focus:ring-[#E6007E] border-gray-400 cursor-pointer"
                    />
                    <span className="font-sans text-[11.5px] leading-[15.8px]">
                      Send me NAZR drops, events and offers. (Optional)
                    </span>
                  </label>
                </div>

                {/* Error Banner */}
                {submitError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-[12px] rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#E6007E] hover:bg-[#d00072] disabled:opacity-50 text-white font-sans font-bold text-[13px] leading-[19.5px] tracking-[0.05em] uppercase py-[13.5px] rounded-[12px] transition-all shadow-[0_4px_14px_rgba(230,0,122,0.3)] mt-2 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      GENERATING TICKET...
                    </>
                  ) : (
                    "SUBMIT MY ENTRY"
                  )}
                </button>

                {/* Fine Print Footer */}
                <p className="font-sans text-[10.5px] leading-[17px] text-[#6B7280] text-center px-1 mt-0.5">
                  One entry per person. The NAZR team checks follows and app sign-ups by hand after entries close.
                </p>
              </form>
            ) : (
              /* ==============================================================
                  OFFICIAL GENERATED TICKET PASS (SUCCESS STATE)
              ============================================================== */
              <div className="px-5 pt-5 flex flex-col items-center">
                <div className="w-12 h-12 bg-[#E6007E]/10 text-[#E6007E] rounded-full flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <span className="font-sans font-bold text-[11px] tracking-[0.1em] uppercase text-[#E6007E]">
                  OFFICIAL ENTRY CONFIRMED
                </span>
                <h3 className="font-[family-name:var(--font-bebas)] text-[32px] leading-tight text-[#111827] mt-0.5">
                  YOU&apos;RE IN THE DRAW!
                </h3>

                {/* Ticket ID Highlight Box */}
                <div className="w-full bg-white border border-[#D1D5DB] rounded-[14px] p-4 my-3.5 flex flex-col items-center text-center shadow-sm">
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#6B7280]">
                    Your Unique Lucky Ticket ID
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-[family-name:var(--font-bebas)] text-[38px] text-[#E6007E] tracking-widest leading-none">
                      {ticketResult.ticketId}
                    </span>
                    <button
                      onClick={copyTicketCode}
                      className="p-1.5 hover:bg-neutral-100 rounded-lg text-neutral-600 transition-colors"
                      title="Copy Ticket ID"
                    >
                      {copiedCode ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {copiedCode && (
                    <span className="text-[11px] text-green-600 font-semibold mt-1">
                      Copied to clipboard!
                    </span>
                  )}
                </div>

                {/* Registered Summary */}
                <div className="w-full bg-[#F9FAFB] rounded-[12px] p-3 text-[12px] text-[#374151] flex flex-col gap-1.5 border border-[#E5E7EB] mb-4">
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Name:</span>
                    <span className="font-semibold text-black">{ticketResult.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Mobile:</span>
                    <span className="font-semibold text-black">{ticketResult.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Instagram:</span>
                    <span className="font-semibold text-[#E6007E]">@{ticketResult.instagram}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">App ID:</span>
                    <span className="font-semibold text-black">{ticketResult.appAccount}</span>
                  </div>
                </div>

                {/* Barcode Visual Representation */}
                <div className="w-full py-2 flex flex-col items-center justify-center opacity-75 mb-4">
                  <div className="flex items-center justify-center gap-[2.5px] h-9">
                    {[3, 1, 4, 1, 5, 2, 1, 3, 2, 4, 1, 5, 2, 3, 1, 4, 2, 1, 3, 5, 2, 1, 4, 2, 3, 1, 4].map(
                      (w, i) => (
                        <div
                          key={i}
                          className="bg-black h-full"
                          style={{ width: `${w}px` }}
                        />
                      )
                    )}
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.3em] text-[#6B7280] mt-1">
                    * {ticketResult.ticketId} *
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="w-full flex flex-col gap-2">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `I just entered the NAZR Mystery Box Giveaway (worth ₹2,000)! My ticket ID is ${ticketResult.ticketId}. Enter here: https://www.nazrco.in/giveaway`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-sans font-bold text-[12px] py-3 rounded-[10px] flex items-center justify-center gap-2 transition-colors uppercase tracking-wider"
                  >
                    <Share2 className="w-4 h-4" />
                    Share with Friends on WhatsApp
                  </a>

                  <button
                    onClick={() => {
                      window.print();
                    }}
                    className="w-full bg-black hover:bg-neutral-800 text-white font-sans font-bold text-[12px] py-3 rounded-[10px] flex items-center justify-center gap-2 transition-colors uppercase tracking-wider"
                  >
                    <Download className="w-4 h-4" />
                    Save / Print Entry Pass
                  </button>
                </div>
              </div>
            )}
          </article>
        </section>


        {/* =========================================================================
            SECTION 4: MEET NAZR PRODUCTS (#F5F0E9)
        ========================================================================= */}
        <section className="w-full bg-[#F5F0E9] text-black px-5 py-9 flex flex-col">
          {/* Header */}
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-center justify-between">
              <span className="font-sans font-bold text-[11px] leading-[15px] tracking-[0.18em] uppercase text-[#E6007E]">
                OUR ECOSYSTEM
              </span>
              <Link
                href="/shop"
                className="font-sans font-bold text-[11px] tracking-[0.05em] uppercase text-[#111111] hover:text-[#E6007E] inline-flex items-center gap-1 transition-colors"
              >
                VISIT SHOP <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
            <h2 className="font-[family-name:var(--font-bebas)] text-[48px] leading-[45.6px] tracking-[0.02em] uppercase text-black m-0">
              MEET NAZR
            </h2>
            <p className="font-sans text-[13.5px] leading-[18.6px] text-[#1C1C1C] pr-2">
              India&apos;s first safety ecosystem for the modern woman. Smart safety products that work with the NAZR app, built with the women who use them.
            </p>
          </div>

          {/* Featured Product Cards Carousel / Grid */}
          <div className="w-full flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x">

            {/* Product Card 1: ON ME */}
            <article
              className="min-w-[280px] w-[280px] h-[410px] rounded-[28px] p-5 flex flex-col justify-between snap-start shadow-md shrink-0 relative overflow-hidden group"
              style={{
                background:
                  "radial-gradient(circle at 50% 35%, rgba(255, 20, 147, 1) 0%, rgba(220, 0, 111, 1) 65%, rgba(180, 0, 90, 1) 100%)",
              }}
            >
              {/* Category & Price Pill */}
              <div className="flex items-center justify-between w-full z-10">
                <span className="font-sans font-bold text-[10px] leading-[14px] tracking-[0.12em] uppercase text-white/85 bg-black/25 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  01 · PERSONAL SAFETY
                </span>
                <span className="font-sans font-black text-[12px] text-white bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  ₹777
                </span>
              </div>

              {/* Product Image */}
              <div className="w-full h-[190px] flex items-center justify-center relative my-auto">
                <Image
                  src="/images/center.webp"
                  alt="ON ME Personal Safety Spray"
                  width={220}
                  height={220}
                  className="max-h-[190px] w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info & CTA */}
              <div className="flex flex-col gap-1.5 z-10">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-[family-name:var(--font-bebas)] text-[32px] leading-[32px] tracking-[0.02em] uppercase text-white m-0">
                    ON ME SPRAY
                  </h3>
                  <span className="font-sans text-[11px] line-through text-white/60">₹999</span>
                </div>
                <p className="font-sans text-[12px] leading-[16px] text-white/95">
                  Clips onto keys or bag, glows in the dark. 8–10 ft range, 35–40 bursts.
                </p>
                <a
                  href="https://shop.nazrco.in/products/on-me-spray"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 w-full py-2.5 px-3 bg-white hover:bg-neutral-100 text-[#111111] font-sans font-bold text-[11px] leading-[14px] tracking-[0.08em] uppercase rounded-[10px] flex items-center justify-center gap-1.5 transition-all text-center shadow-sm"
                >
                  CARRY IT <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </article>

            {/* Product Card 2: SIP CHECK */}
            <article
              className="min-w-[280px] w-[280px] h-[410px] rounded-[28px] p-5 flex flex-col justify-between snap-start shadow-md shrink-0 relative overflow-hidden group"
              style={{
                background:
                  "radial-gradient(circle at 50% 35%, rgba(60, 24, 98, 1) 0%, rgba(28, 12, 48, 1) 65%, rgba(13, 6, 22, 1) 100%)",
              }}
            >
              {/* Category & Price Pill */}
              <div className="flex items-center justify-between w-full z-10">
                <span className="font-sans font-bold text-[10px] leading-[14px] tracking-[0.12em] uppercase text-[#E9D5FF] bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  02 · DRINK STICKER
                </span>
                <span className="font-sans font-black text-[12px] text-white bg-purple-500/30 backdrop-blur-sm px-2.5 py-1 rounded-full border border-purple-400/30">
                  ₹444
                </span>
              </div>

              {/* Product Image */}
              <div className="w-full h-[190px] flex items-center justify-center relative my-auto">
                <div className="absolute w-[130px] h-[130px] bg-purple-500/25 rounded-full blur-2xl pointer-events-none" />
                <Image
                  src="/SIPCHECK/dfjsk.png"
                  alt="SIP CHECK Anti Drink Spike Stickers"
                  width={220}
                  height={220}
                  className="max-h-[190px] w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info & CTA */}
              <div className="flex flex-col gap-1.5 z-10">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-[family-name:var(--font-bebas)] text-[32px] leading-[32px] tracking-[0.02em] uppercase text-white m-0">
                    SIP CHECK
                  </h3>
                  <span className="font-sans text-[11px] line-through text-white/50">₹555</span>
                </div>
                <p className="font-sans text-[12px] leading-[16px] text-[#E9D5FF]">
                  India&apos;s first drink cover. Peel-off seal stops drink spiking. 11 seals per pack.
                </p>
                <a
                  href="https://shop.nazrco.in/products/sip-check"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 w-full py-2.5 px-3 bg-white hover:bg-neutral-100 text-[#111111] font-sans font-bold text-[11px] leading-[14px] tracking-[0.08em] uppercase rounded-[10px] flex items-center justify-center gap-1.5 transition-all text-center shadow-sm"
                >
                  GET YOURS <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </article>

            {/* Product Card 3: NAZR 360° BUNDLE */}
            <article
              className="min-w-[280px] w-[280px] h-[410px] rounded-[28px] p-5 flex flex-col justify-between snap-start shadow-md shrink-0 relative overflow-hidden group"
              style={{
                background:
                  "radial-gradient(circle at 50% 35%, rgba(68, 18, 48, 1) 0%, rgba(30, 8, 22, 1) 65%, rgba(13, 4, 10, 1) 100%)",
              }}
            >
              {/* Category & Price Pill */}
              <div className="flex items-center justify-between w-full z-10">
                <span className="font-sans font-bold text-[10px] leading-[14px] tracking-[0.12em] uppercase text-[#FCEEF4] bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  03 · COMPLETE KIT
                </span>
                <span className="font-sans font-black text-[12px] text-white bg-[#E6007E]/30 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#E6007E]/40">
                  ₹999
                </span>
              </div>

              {/* Product Image */}
              <div className="w-full h-[190px] flex items-center justify-center relative my-auto">
                <div className="absolute w-[130px] h-[130px] bg-pink-500/20 rounded-full blur-2xl pointer-events-none" />
                <Image
                  src="/images/NAZR360.webp"
                  alt="NAZR 360 Complete Bundle Kit"
                  width={240}
                  height={240}
                  className="max-h-[175px] w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info & CTA */}
              <div className="flex flex-col gap-1.5 z-10">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-[family-name:var(--font-bebas)] text-[32px] leading-[32px] tracking-[0.02em] uppercase text-white m-0">
                    NAZR 360° BUNDLE
                  </h3>
                  <span className="font-sans text-[11px] line-through text-white/50">₹1,554</span>
                </div>
                <p className="font-sans text-[12px] leading-[16px] text-[#F9A8D4]">
                  On Me spray + Sip Check stickers together for 24/7 safety. Save ₹555 on the set.
                </p>
                <a
                  href="https://shop.nazrco.in/products/bundle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 w-full py-2.5 px-3 bg-white hover:bg-neutral-100 text-[#111111] font-sans font-bold text-[11px] leading-[14px] tracking-[0.08em] uppercase rounded-[10px] flex items-center justify-center gap-1.5 transition-all text-center shadow-sm"
                >
                  GET THE KIT <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </article>

          </div>
        </section>


        {/* =========================================================================
            SECTION 5: GIVEAWAY TIMELINE (#F5F0E9)
        ========================================================================= */}
        <section className="w-full bg-[#F5F0E9] text-black px-6 py-9 flex flex-col border-t border-[#E5DFD5]">
          {/* Header */}
          <div className="flex flex-col gap-1 mb-8">
            <span className="font-sans font-extrabold text-[11px] leading-[16.5px] tracking-[0.1em] uppercase text-[#111111]">
              WHAT HAPPENS WHEN
            </span>
            <h2 className="font-[family-name:var(--font-bebas)] text-[44px] leading-[41.8px] tracking-[0.025em] uppercase text-[#111111] m-0">
              GIVEAWAY TIMELINE
            </h2>
          </div>

          {/* Timeline Component */}
          <div className="relative flex flex-col">
            {/* Continuous Vertical Line */}
            <div className="absolute left-[10px] top-[14px] bottom-[28px] w-[2px] bg-[#D8D3C8]" />

            {/* Item 1: Giveaway Opens */}
            <article className="flex gap-4 pb-8 relative z-10">
              <div className="w-[22px] h-[22px] rounded-full bg-[#F4F1EA] border-2 border-[#111111] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <span className="font-sans font-bold text-[11px] leading-[16.5px] tracking-[0.05em] uppercase text-[#E6007E]">
                  30 OCT
                </span>
                <h3 className="font-[family-name:var(--font-bebas)] text-[28px] leading-[28px] tracking-[0.03em] uppercase text-[#111111] m-0">
                  GIVEAWAY OPENS
                </h3>
                <p className="font-sans text-[13px] leading-[21px] text-[#525252]">
                  Scan the QR, discover NAZR and enter.
                </p>
              </div>
            </article>

            {/* Item 2: Entries Close */}
            <article className="flex gap-4 pb-8 relative z-10">
              <div className="w-[22px] h-[22px] rounded-full bg-[#F4F1EA] border-2 border-[#111111] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <span className="font-sans font-bold text-[11px] leading-[16.5px] tracking-[0.05em] uppercase text-[#E6007E]">
                  31 OCT, 6 PM
                </span>
                <h3 className="font-[family-name:var(--font-bebas)] text-[28px] leading-[28px] tracking-[0.03em] uppercase text-[#111111] m-0">
                  ENTRIES CLOSE
                </h3>
                <p className="font-sans text-[13px] leading-[21px] text-[#525252]">
                  Last chance to submit your entry.
                </p>
              </div>
            </article>

            {/* Item 3: Winners Contacted */}
            <article className="flex gap-4 pb-8 relative z-10">
              <div className="w-[22px] h-[22px] rounded-full bg-[#F4F1EA] border-2 border-[#111111] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <span className="font-sans font-bold text-[11px] leading-[16.5px] tracking-[0.05em] uppercase text-[#E6007E]">
                  31 OCT, EVENING
                </span>
                <h3 className="font-[family-name:var(--font-bebas)] text-[28px] leading-[28px] tracking-[0.03em] uppercase text-[#111111] m-0">
                  WINNERS CONTACTED
                </h3>
                <p className="font-sans text-[13px] leading-[21px] text-[#525252]">
                  Three eligible winners will be selected and contacted after verification.
                </p>
              </div>
            </article>

            {/* Item 4: Hamper Collection */}
            <article className="flex gap-4 relative z-10">
              <div className="w-[22px] h-[22px] rounded-full bg-[#F4F1EA] border-2 border-[#111111] shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <span className="font-sans font-bold text-[11px] leading-[16.5px] tracking-[0.05em] uppercase text-[#E6007E]">
                  31 OCT, EVENING
                </span>
                <h3 className="font-[family-name:var(--font-bebas)] text-[28px] leading-[28px] tracking-[0.03em] uppercase text-[#111111] m-0">
                  HAMPER COLLECTION
                </h3>
                <p className="font-sans text-[13px] leading-[21px] text-[#525252]">
                  Verified winners can collect their hampers at the designated NAZR event location.
                </p>
              </div>
            </article>
          </div>
        </section>


        {/* =========================================================================
            SECTION 6: IMPORTANT INFORMATION ACCORDION (#F4F4F4)
        ========================================================================= */}
        <section className="w-full bg-[#F4F4F4] text-[#121212] px-5 py-9 flex flex-col">
          {/* Header */}
          <h2 className="font-[family-name:var(--font-bebas)] text-[40px] leading-[38px] tracking-[-0.025em] uppercase text-[#121212] mb-5">
            IMPORTANT INFORMATION
          </h2>

          {/* 12 Accordion Items */}
          <div className="flex flex-col border-b border-[#E5DFD5]">
            {IMPORTANT_INFO_ITEMS.map((item) => {
              const isExpanded = expandedAccordion === item.id;
              return (
                <div
                  key={item.id}
                  className="border-t border-[#E5DFD5] py-3.5 flex flex-col transition-colors"
                >
                  <button
                    onClick={() => setExpandedAccordion(isExpanded ? null : item.id)}
                    className="w-full flex justify-between items-center text-left cursor-pointer group"
                  >
                    <span className="font-sans font-bold text-[15px] leading-[22.5px] tracking-[-0.015em] text-[#121212] group-hover:text-[#E6007E] transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[#E6007E] font-bold text-[20px] leading-none select-none pl-2">
                      {isExpanded ? "−" : "+"}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="pt-2.5 pb-1 pr-4">
                      <p className="font-sans text-[13px] leading-[19px] text-[#55524E]">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>


        {/* =========================================================================
            SECTION 7: FOOTER - THE WORLD STARES. STARE BACK. (#070707)
        ========================================================================= */}
        <footer className="w-full bg-[#070707] text-white px-6 py-9 flex flex-col items-stretch">
          {/* Two-line Bold Statement */}
          <div className="flex flex-col mb-7">
            <h2 className="font-[family-name:var(--font-bebas)] text-[42px] leading-[38.6px] tracking-[-0.025em] uppercase text-white m-0">
              THE WORLD STARES.
            </h2>
            <h2 className="font-[family-name:var(--font-bebas)] text-[42px] leading-[38.6px] tracking-[-0.025em] uppercase text-[#E6007E] m-0">
              STARE BACK.
            </h2>
          </div>

          {/* Vibrant Full-width Primary Action Button */}
          <Link
            href="/shop"
            className="w-full h-[52px] bg-[#E6007E] hover:bg-[#d00072] text-white font-sans font-bold text-[15px] leading-[15px] tracking-[0.06em] uppercase rounded-[12px] flex items-center justify-center shadow-[0px_4px_20px_0px_rgba(230,0,122,0.35)] transition-all mb-7 cursor-pointer active:scale-[0.98]"
          >
            EXPLORE NAZR
          </Link>

          {/* Support Contact and Legal Entity Attribution */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center flex-wrap gap-1.5 font-sans text-[12px] leading-[16.5px] text-[#9E9E9E]">
              <span>Questions?</span>
              <a
                href="mailto:support@nazrco.in"
                className="text-white hover:underline hover:text-[#E6007E]"
              >
                support@nazrco.in
              </a>
              <span>·</span>
              <a
                href="tel:+917208940212"
                className="text-white hover:underline hover:text-[#E6007E]"
              >
                +91 72089 40212
              </a>
            </div>

            <p className="font-sans text-[11.5px] leading-[16px] text-[#A3A3A3] m-0">
              NAZR™ is owned and operated by Lumina Hospitality Private Limited.
            </p>

            {/* Subtle Admin Trigger in Footer */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsAdminOpen(true)}
                title="Admin Control Room"
                className="opacity-20 hover:opacity-100 text-[10px] flex items-center gap-1 text-neutral-400 hover:text-white transition-opacity"
              >
                <Lock className="w-3 h-3" />
                <span>Admin</span>
              </button>
            </div>
          </div>
        </footer>

      </div>

      {/* =========================================================================
          ADMIN / LIVE RANDOMIZER MODAL
      ========================================================================= */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#18181B] border border-neutral-700 w-full max-w-xl rounded-2xl p-6 text-white shadow-2xl relative max-h-[90vh] flex flex-col">
            <button
              onClick={() => setIsAdminOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {!isAdminAuthenticated ? (
              <div className="flex flex-col items-center py-6">
                <Lock className="w-10 h-10 text-[#E6007E] mb-3" />
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl mb-1">
                  NAZR ADMIN VERIFICATION
                </h3>
                <p className="text-neutral-400 text-xs text-center mb-4">
                  Enter PIN to view entries and trigger the 3 Mystery Box randomizer draw.
                </p>
                <div className="flex gap-2 w-full max-w-xs">
                  <input
                    type="password"
                    placeholder="Enter PIN (e.g. nazr2026)"
                    value={adminPin}
                    onChange={(e) => setAdminPin(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAdminAuth()}
                    className="flex-1 bg-neutral-900 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-[#E6007E]"
                  />
                  <button
                    onClick={handleAdminAuth}
                    disabled={adminLoading}
                    className="bg-[#E6007E] hover:bg-[#d00072] text-white px-4 py-2 rounded-lg text-sm font-bold"
                  >
                    {adminLoading ? "..." : "Unlock"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col flex-1 overflow-hidden">
                <div className="flex justify-between items-center pb-3 border-b border-neutral-800">
                  <div>
                    <h3 className="font-[family-name:var(--font-bebas)] text-2xl">
                      MYSTERY BOX ENTRIES ({adminEntries.length})
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Live database of verified entrants
                    </p>
                  </div>
                  <button
                    onClick={runRandomizer}
                    disabled={isShuffling}
                    className="bg-[#E6007E] hover:bg-[#d00072] text-white text-xs font-bold py-2 px-3 rounded-lg flex items-center gap-1.5 shadow-lg shadow-[#E6007E]/30"
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                    {isShuffling ? "Drawing..." : "Pick 1 of 3 Winners"}
                  </button>
                </div>

                {/* Shuffling / Winner Card */}
                {isShuffling && (
                  <div className="my-3 p-4 bg-neutral-900 border border-[#E6007E]/50 rounded-xl text-center">
                    <span className="text-xs text-neutral-400">Randomizing Entrants...</span>
                    <h4 className="text-xl font-bold text-[#E6007E] animate-pulse">
                      {shufflingName}
                    </h4>
                  </div>
                )}

                {winner && (
                  <div className="my-3 p-4 bg-[#E6007E]/20 border border-[#E6007E] rounded-xl flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-[#E6007E] text-xs font-bold uppercase">
                        <Trophy className="w-4 h-4" /> Selected Winner!
                      </div>
                      <h4 className="text-lg font-bold text-white mt-0.5">{winner.name}</h4>
                      <p className="text-xs text-neutral-300">
                        {winner.phone} • @{winner.instagramUsername || "N/A"}
                      </p>
                    </div>
                    <span className="font-[family-name:var(--font-bebas)] text-2xl text-[#E6007E]">
                      {winner.id}
                    </span>
                  </div>
                )}

                {/* Search */}
                <div className="my-3">
                  <div className="relative">
                    <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Search by name, phone, or Instagram..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white outline-none"
                    />
                  </div>
                </div>

                {/* Entrants List */}
                <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                  {adminEntries
                    .filter((e) => {
                      if (!searchQuery) return true;
                      const q = searchQuery.toLowerCase();
                      return (
                        e.name?.toLowerCase().includes(q) ||
                        e.phone?.includes(q) ||
                        e.instagramUsername?.toLowerCase().includes(q) ||
                        e.id?.toLowerCase().includes(q)
                      );
                    })
                    .map((entry) => (
                      <div
                        key={entry.id}
                        className="bg-neutral-900 p-3 rounded-lg border border-neutral-800 text-xs flex justify-between items-center"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white">{entry.name}</span>
                            <span className="font-mono text-[10px] text-[#E6007E]">
                              {entry.id}
                            </span>
                          </div>
                          <p className="text-neutral-400 mt-0.5">
                            {entry.phone} • @{entry.instagramUsername || "not provided"}
                          </p>
                        </div>
                        <span className="text-[10px] text-green-400 bg-green-950/60 border border-green-800 px-2 py-0.5 rounded-full">
                          Verified
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
