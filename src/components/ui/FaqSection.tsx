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
    question: "IS ON ME (PEPPER SPRAY) LEGAL TO CARRY IN INDIA?",
    answer: "Yes, On Me is legal to carry in India. It cannot be carried on flights."
  },
  {
    id: "sip-check-usage",
    question: "DOES SIP CHECK DETECT IF MY DRINK HAS BEEN SPIKED?",
    answer: "No. Sip Check is a physical barrier, it does not test for or detect substances, and it does not change color. It works by covering your drink so nothing can be added to it."
  },
  {
    id: "manual-sos-trigger",
    question: "WHAT HAPPENS IF I FORGET TO TURN OFF SHIELD MODE?",
    answer: "If you miss a check-in for 5 minutes, your Trusted Circle is immediately alerted. If they don't respond, an SOS is automatically triggered. Your Trusted Circle can also try calling you directly, and if you still don't respond, they can trigger a remote SOS themselves."
  },
  {
    id: "pepper-spray-flight-train",
    question: "CAN I CARRY ON ME ON A FLIGHT / TRAIN?",
    answer: "Pepper sprays are not permitted in cabin baggage on Indian flights. Restrictions on checked-in luggage depend on airport and airline security policies. For trains, it is generally allowed for personal self-defence when carried responsibly."
  },
  {
    id: "nazr-location-sharing",
    question: "DOES SHIELD MODE TRACK MY LOCATION ALL THE TIME?",
    answer: "No. Location tracking is only active while you have started a Shield Mode or SOS session. Nazr does not track your location in the background at other times."
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
