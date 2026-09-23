"use client";

import React, { useState, useMemo } from "react";
import { Plus, Minus, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  id: string;
  category: "PRODUCTS" | "THE APP" | "ORDERS" | "ABOUT";
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  // ==========================================
  // PRODUCTS (On Me Pepper Spray & Sip Check)
  // ==========================================
  {
    id: "pepper-spray-legal",
    category: "PRODUCTS",
    question: "Is pepper spray legal to carry in India?",
    answer:
      "Yes, On Me is legal to carry in India. It cannot be carried on flights.",
  },
  {
    id: "fly-with-on-me",
    category: "PRODUCTS",
    question: "Can I fly with On Me?",
    answer:
      "Pepper sprays are not permitted in cabin baggage on Indian flights. Restrictions on checked-in luggage depend on airport and airline security policies. For trains, it is generally allowed for personal self-defence when carried responsibly.",
  },
  {
    id: "on-me-shelf-life",
    category: "PRODUCTS",
    question: "How long does On Me last?",
    answer:
      "On Me has a shelf life of approximately 12 months and offers 10 to 15 bursts per canister, with a spray range of 8 to 10 feet.",
  },
  {
    id: "on-me-price",
    category: "PRODUCTS",
    question: "How much does On Me cost?",
    answer: "On Me is priced at Rs. 777 per piece.",
  },
  {
    id: "what-is-sip-check",
    category: "PRODUCTS",
    question: "What is Sip Check?",
    answer:
      "Sip Check is a peel-off film that covers the rim of your glass, creating a physical barrier that helps prevent drink spiking.",
  },
  {
    id: "sip-check-detect-drugs",
    category: "PRODUCTS",
    question: "Does Sip Check detect if my drink has been spiked?",
    answer:
      "No. Sip Check is a physical barrier, it does not test for or detect substances, and it does not change color. It works by covering your drink so nothing can be added to it.",
  },
  {
    id: "sip-check-price",
    category: "PRODUCTS",
    question: "How much does Sip Check cost?",
    answer: "Sip Check is priced at Rs. 444 for a pack of 11.",
  },
  {
    id: "which-nazr-tool",
    category: "PRODUCTS",
    question: "Which Nazr tool is right for me?",
    answer:
      "The NAZR 360° safety system works best together: keep On Me pepper spray on your keys or bag for physical defense, Sip Check for nights out and social drinks, and the NAZR app with Shield Mode and Trusted Circle active on your phone.",
  },

  // ==========================================
  // THE APP (Shield Mode, SOS, Trusted Circle)
  // ==========================================
  {
    id: "is-app-free",
    category: "THE APP",
    question: "Is the Nazr app free to use?",
    answer:
      "Yes, the Nazr app is free to download and use. On Me and Sip Check are separate physical products available for purchase.",
  },
  {
    id: "what-is-shield-mode",
    category: "THE APP",
    question: "What is Shield Mode?",
    answer:
      "Shield Mode is an active-protection feature you can turn on when you feel you need extra safety, for example while walking home alone or taking an unfamiliar route. While it's active, your live status is visible to your Trusted Circle.",
  },
  {
    id: "app-tracks-all-time",
    category: "THE APP",
    question: "Does Shield Mode track my location all the time?",
    answer:
      "No. Location tracking is only active while you have started a Shield Mode or SOS session. Nazr does not track your location in the background at other times.",
  },
  {
    id: "forget-turn-off-shield",
    category: "THE APP",
    question: "What happens if I forget to turn off Shield Mode?",
    answer:
      "If you miss a check-in for 5 minutes, your Trusted Circle is immediately alerted. If they don't respond, an SOS is automatically triggered. Your Trusted Circle can also try calling you directly, and if you still don't respond, they can trigger a remote SOS themselves.",
  },
  {
    id: "who-to-add-trusted-circle",
    category: "THE APP",
    question: "Who can I add to my Trusted Circle?",
    answer:
      "Anyone you trust, family, friends, roommates, or a partner. You can add up to 5 people to your Trusted Circle.",
  },
  {
    id: "what-happens-sos",
    category: "THE APP",
    question: "What happens when I send an SOS alert?",
    answer:
      "Your Trusted Circle receives an immediate alert with your live location and a timestamp, so they know exactly where you are and when the alert was sent.",
  },
  {
    id: "cancel-sos-accident",
    category: "THE APP",
    question: "Can I cancel an SOS alert if I sent it by accident?",
    answer:
      "Yes. If you trigger an SOS by accident, you can cancel it from within the app.",
  },
  {
    id: "trusted-circle-app-needed",
    category: "THE APP",
    question: "Do the people in my Trusted Circle need the Nazr app to receive alerts?",
    answer:
      "No. Trusted Circle members receive SOS alerts via SMS and a link to your live location, they don't need to have the app installed.",
  },
  {
    id: "does-nazr-record-audio",
    category: "THE APP",
    question: "Does Nazr record audio during Shield Mode or SOS?",
    answer:
      "Nazr does not record audio during Shield Mode. Audio is only recorded during an active SOS, which you have to trigger yourself, either directly, through a missed check-in, or by your Trusted Circle triggering a remote SOS on your behalf.",
  },

  // ==========================================
  // ORDERS (Delivery, COD, Purchase)
  // ==========================================
  {
    id: "how-fast-delivery",
    category: "ORDERS",
    question: "How fast is delivery?",
    answer:
      "Orders typically arrive within 2–4 business days across major Indian metros, and 3–6 business days for the rest of India with live courier tracking provided via SMS and WhatsApp.",
  },
  {
    id: "do-you-offer-cod",
    category: "ORDERS",
    question: "Do you offer COD?",
    answer:
      "Yes, Cash on Delivery (COD) is available across most serviceable pin codes in India, alongside UPI, debit/credit cards, and net banking.",
  },
  {
    id: "how-to-order-products",
    category: "ORDERS",
    question: "How do I order On Me or Sip Check?",
    answer:
      "You can order On Me pepper spray and Sip Check directly from our online store at nazrco.in/shop with fast, discreet delivery across India.",
  },
  {
    id: "returns-product-issues",
    category: "ORDERS",
    question: "What should I do if I face returns or product issues?",
    answer:
      "If you experience any product defect, damage, or delivery issue, email support@nazrco.in within 7 days of delivery and our team will assist you with replacement or support.",
  },

  // ==========================================
  // ABOUT (General, Privacy & Support)
  // ==========================================
  {
    id: "what-is-nazr",
    category: "ABOUT",
    question: "What is Nazr?",
    answer:
      "Nazr is an integrated women's safety ecosystem combining an app, physical safety products, and a support network. It includes Shield Mode, Trusted Circle SOS, a Helpline Directory, and products like On Me and Sip Check.",
  },
  {
    id: "is-nazr-outside-india",
    category: "ABOUT",
    question: "Is Nazr available outside India?",
    answer:
      "Nazr currently operates in India, with products made in India and helplines specific to Indian cities and national services.",
  },
  {
    id: "which-cities-supported",
    category: "ABOUT",
    question: "Which cities does Nazr support right now?",
    answer:
      "Nazr is rolling out city by city, starting with Mumbai. Helpline listings and location-based features will expand as we launch in new cities.",
  },
  {
    id: "where-is-data-stored",
    category: "ABOUT",
    question: "Where is my data stored?",
    answer:
      "Your data is stored securely on infrastructure hosted in India.",
  },
  {
    id: "delete-account-data",
    category: "ABOUT",
    question: "Can I delete my account and data?",
    answer:
      "Yes, you can request account and data deletion at any time. Go to Settings > Account > Delete Account. This permanently removes your profile, Trusted Circle data, and activity history within 30 days.",
  },
  {
    id: "does-nazr-sell-data",
    category: "ABOUT",
    question: "Does Nazr sell my data?",
    answer: "No. Full details are available in our Privacy Policy.",
  },
  {
    id: "report-bug-issue",
    category: "ABOUT",
    question: "How do I report a bug or issue with the app?",
    answer: "Email us at support@nazrco.in.",
  },
  {
    id: "contact-support-anything",
    category: "ABOUT",
    question: "How do I contact Nazr for anything else?",
    answer: "Email us at support@nazrco.in.",
  },
];

const CATEGORIES = ["PRODUCTS", "THE APP", "ORDERS", "ABOUT"] as const;
type CategoryType = (typeof CATEGORIES)[number];

export function AskUsAnythingSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("PRODUCTS");
  const [searchQuery, setSearchQuery] = useState("");
  // Default first item ("Is pepper spray legal to carry in India?") open as in Image
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "pepper-spray-legal": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCategoryClick = (cat: CategoryType) => {
    setSelectedCategory(cat);
  };

  // Filter questions based on category and search query
  const filteredQuestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      return FAQ_DATA.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
      );
    }

    return FAQ_DATA.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, searchQuery]);

  // Split into 2 balanced columns for desktop
  const { col1, col2 } = useMemo(() => {
    const half = Math.ceil(filteredQuestions.length / 2);
    return {
      col1: filteredQuestions.slice(0, half),
      col2: filteredQuestions.slice(half),
    };
  }, [filteredQuestions]);

  const renderCard = (item: FaqItem) => {
    const isOpen = !!openItems[item.id];

    return (
      <div
        key={item.id}
        onClick={() => toggleItem(item.id)}
        className="w-full bg-[#18181B] border border-white/[0.07] hover:border-white/[0.14] rounded-[22px] px-6 py-5 cursor-pointer transition-all duration-200 select-none flex flex-col justify-center"
      >
        <div className="flex items-center justify-between gap-4 w-full">
          <h3
            className="m-0 text-white select-none"
            style={{
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "22px",
              letterSpacing: "0px",
              verticalAlign: "middle",
            }}
          >
            {item.question}
          </h3>

          {/* Toggle Button: Pink minus when open, White plus when closed */}
          <div className="shrink-0">
            {isOpen ? (
              <div className="w-6 h-6 rounded-full bg-[#E6007E] flex items-center justify-center text-white shadow-[0_0_10px_rgba(230,0,126,0.45)] transition-transform duration-200">
                <Minus className="w-3.5 h-3.5 text-white stroke-[3]" />
              </div>
            ) : (
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black shadow-sm transition-transform duration-200 hover:scale-105">
                <Plus className="w-3.5 h-3.5 text-black stroke-[3]" />
              </div>
            )}
          </div>
        </div>

        {/* Answer Content Accordion */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p
                className="pt-3 m-0 text-[#A1A1AA] text-[13.5px] md:text-[14px] leading-[22px] font-normal"
                style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
              >
                {item.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section
      id="faq"
      className="w-full bg-[#0B0B0D] text-white pt-14 md:pt-20 lg:pt-24 pb-14 md:pb-20 px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col items-center relative z-20"
    >
      <div className="w-full max-w-[1240px] flex flex-col">
        {/* Main Title */}
        <h2
          className="m-0 text-white uppercase text-left text-[54px] sm:text-[72px] md:text-[88px] lg:text-[104px] tracking-normal"
          style={{
            fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
            fontWeight: 400,
            lineHeight: "0.92",
          }}
        >
          ASK US ANYTHING.
        </h2>

        {/* Controls Row: Category Filter Tabs (Left) + Search Pill (Right) */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6 md:mt-8 w-full">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat && !searchQuery.trim();
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`px-5 sm:px-6 py-2.5 rounded-full uppercase transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-[#E6007E] border-[#E6007E] text-white shadow-[0_0_15px_rgba(230,0,126,0.35)]"
                      : "bg-[#FFF1EB] border-transparent text-[#161616] hover:bg-white"
                  }`}
                  style={{
                    fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Pill matching user mockup */}
          <div className="relative flex items-center bg-[#202024] border border-white/[0.08] focus-within:border-[#E6007E]/60 rounded-full p-1.5 pl-6 w-full md:w-[380px] lg:w-[420px] transition-all">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search: delivery, legal, app..."
              className="bg-transparent text-white placeholder-[#8E8E93] text-[14px] sm:text-[15px] outline-none w-full pr-3"
              style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
            />
            {/* Pink Accent Circle Button with Search Icon */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#E6007E] shrink-0 shadow-[0_2px_10px_rgba(230,0,126,0.35)] flex items-center justify-center cursor-pointer hover:bg-[#d0006f] active:scale-95 transition-all">
              <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white stroke-[2.5]" />
            </div>
          </div>
        </div>

        {/* 2-Column Accordion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4 mt-6 md:mt-8 w-full items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-3.5 md:gap-4 w-full">
            {col1.map(renderCard)}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3.5 md:gap-4 w-full">
            {col2.map(renderCard)}
          </div>
        </div>

        {/* If no questions found in search */}
        {filteredQuestions.length === 0 && (
          <div className="w-full py-12 flex flex-col items-center text-center">
            <p className="text-[#A1A1AA] text-sm">
              No questions found matching &quot;{searchQuery}&quot;
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("PRODUCTS");
              }}
              className="mt-3 text-[#E6007E] text-xs font-semibold uppercase tracking-wider underline hover:text-white"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* Bottom Bar: WhatsApp Support */}
        <div className="mt-10 md:mt-14 flex items-center justify-center text-center gap-1.5 flex-wrap">
          <span
            className="text-[#71717A] text-xs sm:text-[13.5px]"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
          >
            Still unsure? WhatsApp and a real person will reply
          </span>
          <a
            href="https://wa.me/917208940212"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E6007E] hover:text-[#ff389e] text-xs sm:text-[13.5px] font-medium underline underline-offset-2 transition-colors cursor-pointer"
            style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
          >
            Send a message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
