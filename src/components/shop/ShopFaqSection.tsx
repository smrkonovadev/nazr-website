"use client";

import { useState, useMemo } from "react";
import { Plus, Minus, Search, MessageSquare } from "lucide-react";

interface FaqItem {
  id: string;
  category: "products" | "the-app" | "orders" | "about";
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  // Column 1
  {
    id: "legal",
    category: "products",
    question: "Is pepper spray legal to carry in India?",
    answer:
      "Yes, 100% legal. Under Sections 96 to 106 of the Indian Penal Code (IPC), every citizen has the fundamental right to private defence of the body against unlawful force. No police license is required to carry or purchase pepper spray.",
  },
  {
    id: "fly",
    category: "products",
    question: "Can I fly with On Me?",
    answer:
      "You can carry personal safety spray in checked baggage (up to one aerosol can per passenger in accordance with standard Bureau of Civil Aviation Security guidelines). It is strictly prohibited in cabin / carry-on hand baggage.",
  },
  {
    id: "sip-detect",
    category: "products",
    question: "Does Sip Check detect drugs?",
    answer:
      "Sip Check is engineered with sensitive rapid chemical test pads that react instantly to common predatory sedative compounds (including GHB and Ketamine). Two drops on the test zones produce a clear colorimetric confirmation within seconds.",
  },
  {
    id: "which-tool",
    category: "products",
    question: "Which Nazr tool is right for me?",
    answer:
      "For commutes, jogging, and late-night travel, On Me Pepper Spray provides 10-foot ballistic deterrence. For social venues, bars, and gatherings, Sip Check keeps your drinks verified. The NAZR 360° Bundle pairs both at a discounted price.",
  },

  // Column 2
  {
    id: "app-free",
    category: "the-app",
    question: "Is the Nazr app free?",
    answer:
      "Yes. The essential safety ecosystem — including One-Tap SOS, Shield Mode countdown timers, and instant Trusted Circle multi-channel alerts — is 100% free with no subscription required on both iOS and Android.",
  },
  {
    id: "trusted-circle-app",
    category: "the-app",
    question: "Do my Trusted Circle need the app?",
    answer:
      "No. When you trigger an alert or check-in, your emergency contacts receive instant automated SMS and WhatsApp notifications containing your live GPS tracking map link that opens in any browser.",
  },
  {
    id: "app-tracking",
    category: "the-app",
    question: "Does the app track me all the time?",
    answer:
      "Never. Your location privacy is paramount. NAZR only queries GPS coordinates when you deliberately initiate an SOS alert or turn on Shield Mode for an active journey. When inactive, background tracking is fully dormant.",
  },
  {
    id: "delivery-speed",
    category: "orders",
    question: "How fast is delivery?",
    answer:
      "All orders are processed from our Mumbai fulfilment center within 24 hours. Metro deliveries arrive within 2–3 business days; tier 2/3 cities arrive within 4–5 business days via express courier.",
  },
  {
    id: "cod-available",
    category: "orders",
    question: "Do you offer COD?",
    answer:
      "Yes, Cash on Delivery (COD) is available across 19,000+ pincodes in India alongside secure UPI, Cards, NetBanking, and Wallet payment options.",
  },
];

export function ShopFaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedId, setExpandedId] = useState<string | null>("legal");

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredItems = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Split into 2 columns for side-by-side desktop layout
  const col1 = filteredItems.filter((_, idx) => idx % 2 === 0);
  const col2 = filteredItems.filter((_, idx) => idx % 2 !== 0);

  return (
    <section className="w-full bg-[#161616] text-[#f4f4f4] py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 flex justify-center border-b border-black select-none">
      <div className="w-full max-w-[1360px] flex flex-col items-center">
        {/* Title */}
        <h2 className="font-[family-name:var(--font-bebas)] text-[52px] sm:text-[68px] md:text-[84px] font-normal leading-[0.9] tracking-[-0.02em] uppercase text-[#f4f4f4] mb-8 text-center">
          ASK US ANYTHING.
        </h2>

        {/* Filter Tabs & Search Bar Row */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 mb-10 max-w-[1200px]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "ALL" },
              { id: "products", label: "PRODUCTS" },
              { id: "the-app", label: "THE APP" },
              { id: "orders", label: "ORDERS" },
              { id: "about", label: "ABOUT" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full font-['Inter',_sans-serif] text-[12px] sm:text-[13px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-[#FF0E97] text-white shadow-sm"
                    : "bg-[#222222] hover:bg-[#2c2c2c] text-white/70"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-[340px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search: delivery, legal, app..."
              className="w-full bg-[#222222] border border-white/10 rounded-full py-2.5 pl-4 pr-10 text-[13px] sm:text-[14px] text-white placeholder-white/40 focus:outline-none focus:border-[#FF0E97] transition-colors"
            />
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF0E97]" />
          </div>
        </div>

        {/* 2-Column Accordion Cards Grid */}
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            {col1.map((item) => (
              <AccordionCard
                key={item.id}
                item={item}
                isOpen={expandedId === item.id}
                onToggle={() => toggleAccordion(item.id)}
              />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            {col2.map((item) => (
              <AccordionCard
                key={item.id}
                item={item}
                isOpen={expandedId === item.id}
                onToggle={() => toggleAccordion(item.id)}
              />
            ))}
          </div>
        </div>

        {/* Bottom WhatsApp Support Note */}
        <div className="mt-12 text-center text-white/60 font-['Inter',_sans-serif] text-[13px] sm:text-[14px]">
          Still unsure? WhatsApp and a real person will reply.{" "}
          <a
            href="https://wa.me/917208940212?text=Hi%20NAZR%20team,%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF0E97] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity ml-1"
          >
            Send a message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function AccordionCard({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`w-full rounded-[14px] border transition-all duration-200 overflow-hidden ${
        isOpen
          ? "bg-[#202020] border-[#FF0E97]/40 shadow-sm"
          : "bg-[#1c1c1c] border-white/5 hover:border-white/15"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
      >
        <span className="font-['Inter',_sans-serif] font-semibold text-[14.5px] sm:text-[16px] text-[#f4f4f4] leading-snug">
          {item.question}
        </span>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
            isOpen ? "bg-[#FF0E97] text-white" : "bg-white/10 text-white/60"
          }`}
        >
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>

      {isOpen && (
        <div className="px-4 sm:px-5 pb-5 pt-0">
          <p className="font-['Inter',_sans-serif] text-[13.5px] sm:text-[14.5px] text-white/70 leading-[160%] m-0">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}
