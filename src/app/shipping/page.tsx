"use client";

import { Header } from "@/components/ui/Header";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export default function ShippingPage() {
  const tableOfContents = [
    { name: "Order Processing", id: "order-processing" },
    { name: "Shipping", id: "shipping" },
    { name: "Delivery Disclaimer", id: "delivery-disclaimer" },
    { name: "International Shipping", id: "international-shipping" },
    { name: "Order Cancellation", id: "order-cancellation" },
    { name: "Returns Policy", id: "returns-policy" },
    { name: "Replacement / Refund — Damaged/Defective", id: "damaged-defective" },
    { name: "Replacement — Incorrect/Missing", id: "incorrect-missing" },
    { name: "Refunds", id: "refunds" },
    { name: "Refusal of Delivery", id: "refusal-delivery" },
    { name: "Contact", id: "contact" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#161616] w-full">
      <DesktopScaler>
        <Header />
      </DesktopScaler>

      {/* Shipping Policy Canvas Section */}
      <section className="w-full flex-1 flex justify-center bg-[#161616] relative z-[70] max-md:mt-0 md:-mt-[48px] max-md:rounded-t-[32px] md:rounded-t-[26px]">
        <DesktopScaler bgColor="#FFF1EB" className="max-md:rounded-t-[32px] md:rounded-t-[26px] max-md:rounded-b-[32px] md:rounded-b-[26px]">
          <div className="w-full bg-[#FFF1EB] relative max-md:rounded-t-[32px] md:rounded-t-[26px] max-md:rounded-b-[32px] md:rounded-b-[26px] min-h-[900px] px-6 md:px-16 py-12 md:py-20 flex flex-col md:flex-row gap-12 md:gap-20">

            {/* Left Column: Table of Contents */}
            <div className="w-full md:w-[260px] shrink-0 md:sticky md:top-[120px] md:self-start flex flex-col gap-4 select-none max-md:border-b max-md:pb-6 border-black/10 max-h-[calc(100vh-180px)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <h2 className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[32px] font-normal tracking-wide text-[#161616] uppercase leading-none">
                Table of Contents
              </h2>

              <div className="flex flex-col gap-1 items-start w-full">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="bg-[#161616] text-[#FFF1EB] rounded-[4px] w-full py-3.5 px-4 text-[15px] font-semibold uppercase tracking-tight hover:opacity-90 transition-opacity mb-2 text-left"
                >
                  View all
                </button>

                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-[#161616] hover:text-[#FF0E97] font-['Switzer',_sans-serif] text-[15px] md:text-[16px] leading-tight tracking-tight transition-colors py-2 focus:outline-none w-full"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Shipping Content */}
            <div className="flex-1 flex flex-col gap-12 font-['Switzer',_sans-serif] text-[#161616] max-w-[800px]">

              {/* Page Title */}
              <h1 className="font-[family-name:var(--font-bebas)] text-[56px] md:text-[96px] leading-[100%] tracking-tight text-[#161616]">
                SHIPPING & DELIVERY POLICY
              </h1>

              {/* Introductory Paragraph */}
              <div className="flex flex-col gap-6 text-[16px] md:text-[18px] leading-[150%] font-normal text-[#161616]/80">
                <p>
                  This Shipping & Delivery Policy forms part of and should be read in conjunction with our Terms of Service.
                </p>
              </div>

              {/* Section 1 */}
              <div id="order-processing" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  1. Order Processing
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>All orders are processed within 1&ndash;3 business days from the date of order confirmation.</p>
                  <p>Orders are not processed or shipped on weekends or public holidays. Products once opened or used are not eligible for return or replacement unless defective.</p>
                </div>
              </div>

              {/* Section 2 */}
              <div id="shipping" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  2. Shipping
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>Orders are shipped through registered courier partners and/or speed post.</p>
                  <p>Estimated delivery timelines:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li><strong className="font-semibold text-[#161616]">Metro cities:</strong> 3&ndash;5 business days</li>
                    <li><strong className="font-semibold text-[#161616]">Non-metro locations:</strong> 5&ndash;10 business days</li>
                  </ul>
                  <p>Delivery timelines are estimates and may vary depending on location, logistics, and external factors.</p>
                </div>
              </div>

              {/* Section 3 */}
              <div id="delivery-disclaimer" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  3. Delivery Disclaimer
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>While we aim to deliver within the estimated timelines, delays may occur due to:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>courier partner issues</li>
                    <li>weather conditions</li>
                    <li>operational constraints</li>
                  </ul>
                  <p>NAZR&trade; shall not be liable for delays caused by third-party logistics providers.</p>
                </div>
              </div>

              {/* Section 4 */}
              <div id="international-shipping" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  4. International Shipping
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  We currently do not offer international shipping.
                </p>
              </div>

              {/* Section 5 */}
              <div id="order-cancellation" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  5. Order Cancellation
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>Orders may be cancelled only before dispatch.</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>A 10% deduction may be applied to cover transaction and processing fees.</li>
                    <li>Cancellation requests must be sent to support@nazrco.in within 24 hours of placing the order.</li>
                    <li>Once an order has been dispatched, it cannot be cancelled.</li>
                  </ul>
                </div>
              </div>

              {/* Section 6 */}
              <div id="returns-policy" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  6. Returns Policy
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>Due to the nature of the product category (personal safety and hygiene-sensitive products), returns are not accepted once the product has been delivered, except in cases of:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>manufacturing defects</li>
                    <li>damage during transit</li>
                    <li>incorrect or missing items</li>
                  </ul>
                </div>
              </div>

              {/* Section 7 */}
              <div id="damaged-defective" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  7. Replacement / Refund &mdash; Damaged or Defective Products
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>In rare cases of damage or manufacturing defects:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Notify us within 48 hours of delivery.</li>
                    <li>Email support@nazrco.in with photos and videos of the product, packaging, shipping label, and invoice.</li>
                  </ul>
                  <p>Eligible cases include:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>physical damage to product</li>
                    <li>leakage or malfunction</li>
                    <li>tampered or broken seal</li>
                  </ul>
                  <p>Upon verification, we will provide a replacement or initiate a refund.</p>
                </div>
              </div>

              {/* Section 8 */}
              <div id="incorrect-missing" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  8. Replacement &mdash; Incorrect or Missing Items
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>If you receive incorrect or missing items:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Notify within 48 hours of delivery.</li>
                    <li>Provide photo/video evidence.</li>
                  </ul>
                  <p>We will arrange a replacement shipment or a refund (as applicable).</p>
                </div>
              </div>

              {/* Section 9 */}
              <div id="refunds" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  9. Refunds
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  Refunds, where applicable, will be processed to the original payment method within 5&ndash;10 business days after approval.
                </p>
              </div>

              {/* Section 10 */}
              <div id="refusal-delivery" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  10. Refusal of Delivery
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>Customers are requested not to refuse delivery arbitrarily.</p>
                  <p>In cases where an order is returned to us due to refusal or failed delivery attempts:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>re-shipping charges may apply</li>
                    <li>refund (if applicable) will be processed after deducting logistics and handling costs</li>
                  </ul>
                </div>
              </div>

              {/* Section 11 */}
              <div id="contact" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  11. Contact
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  For any questions or support, please contact:
                  <br />
                  <strong className="font-semibold block mt-2 text-[#FF0E97]">Email: support@nazrco.in</strong>
                </p>
              </div>

              {/* Updated Date */}
              <div className="pt-8 border-t border-black/10 text-[16px] md:text-[18px] font-medium text-[#161616] pb-12">
                Updated On: 15 July, 2026
              </div>

            </div>

          </div>
        </DesktopScaler>
      </section>
    </main>
  );
}
