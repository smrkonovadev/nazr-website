"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "pepper-spray-legal",
    question: "IS PEPPER SPRAY LEGAL TO CARRY IN INDIA?",
    answer: "Yes, pepper spray is commonly permitted for personal self-defense and does not require a license under the existing law. However, it must be used strictly in case of an emergency and not be mishandled with any ill-intent."
  },
  {
    id: "sip-check-usage",
    question: "HOW MANY TIMES CAN I USE ONE SIP CHECK?",
    answer: "Sip Check is designed for security and hygiene, typically as a single-use product to ensure maximum safety and reliability."
  },
  {
    id: "manual-sos-trigger",
    question: "DO I HAVE TO MANUALLY TRIGGER AN SOS EVERY TIME?",
    answer: "No. Nazr is designed for moments when you can't act. If you fail to check in or respond, the system escalates automatically to ensure help is notified."
  },
  {
    id: "pepper-spray-flight-train",
    question: "CAN I CARRY THE PEPPER SPRAY ON A FLIGHT/TRAIN?",
    answer: "Pepper sprays are generally not permitted in cabin baggage on Indian flights. Restrictions on checked-in luggage depend on airport and security policies. It is generally allowed in trains but must be carried and used responsibly according to the guidelines"
  },
  {
    id: "nazr-location-sharing",
    question: "WILL THE NAZR APP SHARE MY LOCATION ALL THE TIME?",
    answer: "No. Your location is only shared with your Trusted Circle during an SOS event or with your permission. We believe deeply in keeping your privacy intact."
  }
];

export function FaqSection() {
  // Allow all items to be open by default as shown in design, or toggle individually
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "pepper-spray-legal": true,
    "sip-check-usage": true,
    "manual-sos-trigger": true,
    "pepper-spray-flight-train": true,
    "nazr-location-sharing": true
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faq" className="w-full bg-[#F1E4DE] max-md:pt-7 max-md:pb-10 md:pt-10 md:pb-16 max-md:px-5 md:px-14 flex justify-center">
      <div className="w-full max-w-[1240px] flex flex-col">
        
        {/* Header Block */}
        <div className="flex flex-col gap-1 mb-[48px]">
          <h2
            className="font-[family-name:var(--font-bebas)] text-[#161616] max-md:text-[40px] max-md:leading-[120%] max-md:tracking-normal md:text-[115px] md:leading-[0.85] md:tracking-[-0.03em] uppercase m-0 font-normal"
          >
            FAQS
          </h2>
          <p
            className="font-['Inter',_sans-serif] text-[#161616] max-md:text-[16px] max-md:leading-[150%] max-md:tracking-normal md:text-[17px] m-0 font-normal"
          >
            have questions? ask away!
          </p>
        </div>

        {/* Accordion List */}
        <div className="w-full flex flex-col">
          {faqData.map((item, index) => {
            const isOpen = !!openItems[item.id];
            const isLast = index === faqData.length - 1;

            return (
              <div
                key={item.id}
                className={`w-full border-t border-[#161616] ${isLast ? "border-b" : ""}`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full max-md:py-3.5 md:py-5 flex justify-between items-center text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-[family-name:var(--font-bebas)] text-[#161616] max-md:text-[24px] max-md:leading-[90%] max-md:tracking-normal md:text-[32px] font-normal uppercase m-0 pr-4">
                    {item.question}
                  </h3>
                  <div className="shrink-0 ml-4">
                    <ChevronUp
                      className={`w-5 h-5 text-[#161616] transition-transform duration-300 ${
                        isOpen ? "rotate-0" : "rotate-180"
                      }`}
                    />
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-['Inter',_sans-serif] text-[#161616] max-md:text-[16px] max-md:leading-[150%] max-md:tracking-normal md:text-[16px] font-normal max-w-[760px] max-md:pt-1 max-md:pb-4 md:pb-6 m-0">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
