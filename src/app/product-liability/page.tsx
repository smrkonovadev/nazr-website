"use client";

import { Header } from "@/components/ui/Header";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export default function ProductLiabilityPage() {
  const tableOfContents = [
    { name: "Purpose", id: "purpose" },
    { name: "Product Positioning", id: "product-positioning" },
    { name: "Permitted Use", id: "permitted-use" },
    { name: "Prohibited Use", id: "prohibited-use" },
    { name: "User Responsibility", id: "user-responsibility" },
    { name: "Product Limitations", id: "product-limitations" },
    { name: "Health and Safety Disclosure", id: "health-safety" },
    { name: "Manufacturing and Quality Responsibility", id: "manufacturing-responsibility" },
    { name: "Third-Party Handling", id: "third-party-handling" },
    { name: "Content and Marketing Liability", id: "content-marketing" },
    { name: "Limitation of Liability", id: "limitation-liability" },
    { name: "Disclaimers", id: "disclaimers" },
    { name: "Incident Response", id: "incident-response" },
    { name: "Review and Updates", id: "review-updates" }
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

      {/* Content Canvas Section */}
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

            {/* Right Column: Content */}
            <div className="flex-1 flex flex-col gap-12 font-['Switzer',_sans-serif] text-[#161616] max-w-[800px]">
              
              {/* Page Title */}
              <h1 className="font-[family-name:var(--font-bebas)] text-[56px] md:text-[80px] leading-[100%] tracking-tight text-[#161616] uppercase">
                PRODUCT LIABILITY &amp; RISK FRAMEWORK
              </h1>

              {/* Section 1 */}
              <div id="purpose" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  1. PURPOSE
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  This framework establishes the boundaries of product usage, responsibility, and liability associated with Nazr&rsquo;s safety products, including but not limited to pepper spray and anti-spike detection products.
                </p>
              </div>

              {/* Section 2 */}
              <div id="product-positioning" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  2. PRODUCT POSITIONING (LEGAL FOUNDATION)
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>All Nazr products are positioned as:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Preventive safety tools</li>
                    <li>Designed to assist in situations of personal risk</li>
                    <li>Intended to create an opportunity to disengage and move to safety</li>
                  </ul>
                  <p>Nazr products are not weapons, and are not intended to cause harm beyond what is necessary for self-defense.</p>
                </div>
              </div>

              {/* Section 3 */}
              <div id="permitted-use" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  3. PERMITTED USE
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>Users are permitted to use the product only:</p>
                  <ol className="list-decimal pl-6 flex flex-col gap-2 font-medium text-[#161616]">
                    <li>In situations of immediate self-defense</li>
                    <li>In a lawful manner</li>
                    <li>In accordance with instructions and guidelines provided</li>
                  </ol>
                </div>
              </div>

              {/* Section 4 */}
              <div id="prohibited-use" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  4. PROHIBITED USE
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>The product must not be:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Used for intimidation, aggression, or retaliation</li>
                    <li>Used for recreational, casual, or experimental purposes</li>
                    <li>Used on individuals in non-threatening situations</li>
                    <li>Modified, tampered with, or repurposed</li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div id="user-responsibility" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  5. USER RESPONSIBILITY
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>The end user is responsible for:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Using the product lawfully</li>
                    <li>Understanding instructions prior to use</li>
                    <li>Ensuring safe handling and storage</li>
                    <li>Avoiding misuse or negligent usage</li>
                  </ul>
                </div>
              </div>

              {/* Section 6 */}
              <div id="product-limitations" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  6. PRODUCT LIMITATIONS
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>Nazr products:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Do not guarantee safety or prevention of harm</li>
                    <li>May vary in effectiveness depending on environmental conditions, user handling, and situational factors</li>
                    <li>Are intended as one component of personal safety, not a complete solution</li>
                  </ul>
                </div>
              </div>

              {/* Section 7 */}
              <div id="health-safety" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  7. HEALTH AND SAFETY DISCLOSURE
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  Exposure to the product may cause: Temporary irritation to eyes and skin &amp; discomfort or breathing difficulty in enclosed environments. Users must follow safety and first-aid instructions.
                </p>
              </div>

              {/* Section 8 */}
              <div id="manufacturing-responsibility" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  8. MANUFACTURING AND QUALITY RESPONSIBILITY
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  Manufacturer is responsible for product quality, composition, and safety standards. Nazr is responsible for marketing, positioning, and distribution. Any manufacturing defects shall be addressed in accordance with applicable agreements with the manufacturer.
                </p>
              </div>

              {/* Section 9 */}
              <div id="third-party-handling" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  9. THIRD-PARTY HANDLING
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>Where multiple vendors are involved:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Each vendor is responsible for their scope of work</li>
                    <li>Liability for defects shall be allocated based on the point of failure</li>
                    <li>Packaging, handling, and distribution vendors must adhere to product safety standards</li>
                  </ul>
                </div>
              </div>

              {/* Section 10 */}
              <div id="content-marketing" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  10. CONTENT AND MARKETING LIABILITY
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>Nazr shall ensure that:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>No misleading or exaggerated claims are made</li>
                    <li>All communication aligns with safety positioning</li>
                  </ul>
                  <p>Content creators and partners must:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Follow approved guidelines</li>
                    <li>Avoid unsafe or misleading demonstrations</li>
                  </ul>
                </div>
              </div>

              {/* Section 11 */}
              <div id="limitation-liability" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  11. LIMITATION OF LIABILITY
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>To the maximum extent permitted by law:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Nazr shall not be liable for misuse or unlawful use of the product</li>
                    <li>Nazr shall not be liable for indirect, incidental, or consequential damages</li>
                    <li>Liability shall be limited to defects directly attributable to the product</li>
                  </ul>
                </div>
              </div>

              {/* Section 12 */}
              <div id="disclaimers" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  12. DISCLAIMERS (TO BE USED ACROSS TOUCHPOINTS)
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] font-medium italic text-[#161616]">
                  &ldquo;For self-defense use only. Misuse is an offence under applicable law. Product effectiveness may vary depending on conditions.&rdquo;
                </p>
              </div>

              {/* Section 13 */}
              <div id="incident-response" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  13. INCIDENT RESPONSE
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>In case of product-related issues:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Users should contact customer support</li>
                    <li>Nazr shall review complaints and take appropriate action</li>
                    <li>Serious incidents shall be escalated internally and addressed with relevant vendors</li>
                  </ul>
                  <p>Nazr must have a ready redressal mechanism that could utilize in such times. This gives reassurance to the customer to resolve escalations internally first. If unresolved then approach courts.</p>
                </div>
              </div>

              {/* Section 14 */}
              <div id="review-updates" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  14. REVIEW AND UPDATES
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>This framework shall be reviewed periodically to ensure compliance with:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Applicable laws</li>
                    <li>Product evolution</li>
                    <li>Market feedback</li>
                  </ul>
                </div>
              </div>

              {/* Updated Date */}
              <div className="pt-8 border-t border-black/10 text-[16px] md:text-[18px] font-medium text-[#161616] pb-12">
                Updated On: 1 July, 2026
              </div>

            </div>

          </div>
        </DesktopScaler>
      </section>
    </main>
  );
}
