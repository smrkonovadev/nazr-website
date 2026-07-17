"use client";

import { Header } from "@/components/ui/Header";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export default function TermsPage() {
  const tableOfContents = [
    { name: "Eligibility", id: "eligibility" },
    { name: "Permitted Use of Website", id: "permitted-use" },
    { name: "Product Information Disclaimer", id: "product-disclaimer" },
    { name: "Orders and Purchases", id: "orders-purchases" },
    { name: "Payment Processing", id: "payment-processing" },
    { name: "User Accounts", id: "user-accounts" },
    { name: "Intellectual Property", id: "intellectual-property" },
    { name: "User Generated Content", id: "user-content" },
    { name: "Third Party Links", id: "third-party" },
    { name: "Website Availability", id: "website-availability" },
    { name: "Limitation of Liability", id: "limitation-liability" },
    { name: "Indemnity", id: "indemnity" },
    { name: "Privacy", id: "privacy" },
    { name: "Changes to Terms", id: "changes-terms" },
    { name: "Governing Law and Jurisdiction", id: "governing-law" },
    { name: "Contact Information", id: "contact-info" }
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

      {/* Terms of Use Canvas Section */}
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

            {/* Right Column: Terms Content */}
            <div className="flex-1 flex flex-col gap-12 font-['Switzer',_sans-serif] text-[#161616] max-w-[800px]">
              
              {/* Page Title */}
              <h1 className="font-[family-name:var(--font-bebas)] text-[56px] md:text-[96px] leading-[100%] tracking-tight text-[#161616]">
                TERMS OF USE
              </h1>

              {/* Introductory Paragraphs */}
              <div className="flex flex-col gap-6 text-[16px] md:text-[18px] leading-[150%] font-normal text-[#161616]/80">
                <p>
                  These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of www.nazrco.in (&ldquo;Website&rdquo;), owned and operated by Lumina Hospitality Private Limited, operating under the brand NAZR&trade; (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
                </p>
                <p>
                  By accessing, browsing, purchasing from, or using this Website, you agree to be bound by these Terms, our Privacy Policy, Shipping Policy, Refund Policy, and any additional policies referenced on this Website.
                </p>
                <p>
                  If you do not agree to these Terms, you must discontinue use of the Website.
                </p>
              </div>

              {/* Section 1 */}
              <div id="eligibility" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  1. Eligibility
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>You must be at least 18 years of age to use this Website or purchase products through it.</p>
                  <p>By using this Website, you represent that:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>you are legally capable of entering into binding contracts</li>
                    <li>the information provided by you is accurate</li>
                    <li>you will use the Website only for lawful purposes</li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div id="permitted-use" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  2. Permitted Use of Website
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>You are granted a limited, non-exclusive, revocable, non-transferable license to access and use this Website for personal and non-commercial purposes.</p>
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>copy or reproduce website content without permission</li>
                    <li>reverse engineer website functionality</li>
                    <li>attempt unauthorized access to systems</li>
                    <li>commercially exploit website content</li>
                    <li>interfere with website operations</li>
                    <li>use the website for unlawful purposes</li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div id="product-disclaimer" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  3. Product Information Disclaimer
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>Product descriptions, visuals, demonstrations, safety information, and educational content are provided for informational purposes only.</p>
                  <p>NAZR&trade; products are intended solely for lawful personal safety purposes.</p>
                  <p>The Company does not guarantee:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>prevention of harm</li>
                    <li>guaranteed personal safety outcomes</li>
                    <li>product effectiveness in all situations</li>
                  </ul>
                  <p>Users are responsible for ensuring lawful possession and use of products under applicable local laws.</p>
                </div>
              </div>

              {/* Section 4 */}
              <div id="orders-purchases" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  4. Orders and Purchases
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>All purchases made through the Website are subject to:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>product availability</li>
                    <li>order verification</li>
                    <li>payment confirmation</li>
                  </ul>
                  <p>We reserve the right to:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>refuse or cancel suspicious orders</li>
                    <li>restrict quantities</li>
                    <li>cancel orders arising from pricing errors</li>
                    <li>reject fraudulent transactions</li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div id="payment-processing" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  5. Payment Processing
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>Payments are processed through third-party payment gateways.</p>
                  <p>NAZR&trade; does not store:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>card details</li>
                    <li>banking credentials</li>
                    <li>CVV information</li>
                  </ul>
                  <p>Payment transactions are governed by the respective payment service providers.</p>
                </div>
              </div>

              {/* Section 6 */}
              <div id="user-accounts" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  6. User Accounts
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>Where users create accounts or profiles on the Website, they are responsible for:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>maintaining confidentiality of login credentials</li>
                    <li>ensuring account information remains accurate</li>
                    <li>all activity conducted through their account</li>
                  </ul>
                </div>
              </div>

              {/* Section 7 */}
              <div id="intellectual-property" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  7. Intellectual Property
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>All materials available on this Website including:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>trademarks</li>
                    <li>logos</li>
                    <li>product designs</li>
                    <li>graphics</li>
                    <li>packaging visuals</li>
                    <li>written content</li>
                    <li>videos</li>
                    <li>website design elements</li>
                  </ul>
                  <p>are owned by or licensed to Lumina Hospitality Private Limited.</p>
                  <p>No user may copy, distribute, reproduce, modify, or commercially exploit any content without prior written permission.</p>
                </div>
              </div>

              {/* Section 8 */}
              <div id="user-content" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  8. User Generated Content
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>Where users submit reviews, testimonials, feedback, or other content:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>you confirm such content is accurate</li>
                    <li>you grant NAZR&trade; a non-exclusive right to use such content for business purposes</li>
                    <li>you agree not to post unlawful, defamatory, abusive, or misleading content</li>
                  </ul>
                  <p>We reserve the right to remove such content.</p>
                </div>
              </div>

              {/* Section 9 */}
              <div id="third-party" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  9. Third Party Links
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  The Website may contain links to third-party websites, payment gateways, social platforms, or service providers. We are not responsible for third-party content, services, or privacy practices.
                </p>
              </div>

              {/* Section 10 */}
              <div id="website-availability" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  10. Website Availability
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  We reserve the right to modify, suspend, restrict, or discontinue any part of the Website without notice. We do not guarantee uninterrupted availability.
                </p>
              </div>

              {/* Section 11 */}
              <div id="limitation-liability" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  11. Limitation of Liability
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>To the maximum extent permitted under applicable law, NAZR&trade; shall not be liable for:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>indirect losses</li>
                    <li>incidental damages</li>
                    <li>website interruptions</li>
                    <li>misuse of products</li>
                    <li>reliance on website content</li>
                    <li>third-party platform failures</li>
                  </ul>
                  <p>Users assume responsibility for lawful product usage.</p>
                </div>
              </div>

              {/* Section 12 */}
              <div id="indemnity" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  12. Indemnity
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>You agree to indemnify and hold harmless Lumina Hospitality Private Limited against claims arising from:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>misuse of products</li>
                    <li>violation of these Terms</li>
                    <li>unlawful conduct</li>
                    <li>misuse of website content</li>
                  </ul>
                </div>
              </div>

              {/* Section 13 */}
              <div id="privacy" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  13. Privacy
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  Your use of this Website is also governed by our Privacy Policy.
                </p>
              </div>

              {/* Section 14 */}
              <div id="changes-terms" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  14. Changes to Terms
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  We may update these Terms from time to time. Updated versions will be posted on the Website. Continued use constitutes acceptance of revised Terms.
                </p>
              </div>

              {/* Section 15 */}
              <div id="governing-law" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  15. Governing Law and Jurisdiction
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts located in Mumbai, Maharashtra.
                </p>
              </div>

              {/* Section 16 */}
              <div id="contact-info" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  16. Contact Information
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  Lumina Hospitality Private Limited
                  <br />
                  802, Harshvardhan
                  <br />
                  Opp. Saki Vihar Telephone Exchange
                  <br />
                  Mumbai, Maharashtra &ndash; 400076
                  <br /><br />
                  <strong className="font-semibold block text-[#FF0E97]">Email: support@nazrco.in</strong>
                </p>
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
