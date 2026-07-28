"use client";

import Link from "next/link";
import { Header } from "@/components/ui/Header";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export function TermsContent() {
  const tableOfContents = [
    { name: "Eligibility", id: "eligibility" },
    { name: "Permitted Use of Website", id: "permitted-use-website" },
    { name: "Permitted Use of the App", id: "permitted-use-app" },
    { name: "Product Information Disclaimer", id: "product-disclaimer" },
    { name: "Orders and Purchases", id: "orders-purchases" },
    { name: "Payment Processing", id: "payment-processing" },
    { name: "User Accounts", id: "user-accounts" },
    { name: "Intellectual Property", id: "intellectual-property" },
    { name: "User Generated Content", id: "user-content" },
    { name: "Third Party Links", id: "third-party" },
    { name: "Website and App Availability", id: "website-app-availability" },
    { name: "Limitation of Liability", id: "limitation-liability" },
    { name: "Indemnity", id: "indemnity" },
    { name: "Privacy", id: "privacy" },
    { name: "Force Majeure", id: "force-majeure" },
    { name: "Changes to Terms", id: "changes-terms" },
    { name: "Governing Law and Jurisdiction", id: "governing-law" },
    { name: "Grievance Officer", id: "grievance-officer" },
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
      <section className="w-full flex-1 flex justify-center bg-[#161616] relative z-[70] max-md:mt-0 md:-mt-[48px] max-md:rounded-t-[9.71px] md:rounded-t-[26px]">
        <DesktopScaler bgColor="#FFF1EB" className="max-md:rounded-t-[9.71px] md:rounded-t-[26px] max-md:rounded-b-[9.71px] md:rounded-b-[26px]">
          <div className="w-full bg-[#FFF1EB] relative max-md:rounded-t-[9.71px] md:rounded-t-[26px] max-md:rounded-b-[9.71px] md:rounded-b-[26px] min-h-[900px] px-6 md:px-16 py-12 md:py-20 flex flex-col md:flex-row gap-12 md:gap-20">

            {/* Left Column: Table of Contents (Desktop Only) */}
            <div className="hidden md:flex md:w-[260px] shrink-0 md:sticky md:top-[120px] md:self-start flex-col gap-4 select-none max-h-[calc(100vh-180px)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <h2 className="font-[family-name:var(--font-bebas)] text-[32px] font-normal tracking-wide text-[#161616] uppercase leading-none">
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
                    className="text-left text-[#161616] hover:text-[#FF0E97] font-['Switzer',_sans-serif] text-[16px] leading-tight tracking-tight transition-colors py-2 focus:outline-none w-full"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Terms Content */}
            <div className="flex-1 flex flex-col gap-8 md:gap-12 font-['Switzer',_sans-serif] text-[#161616] max-w-[800px]">

              {/* Page Title */}
              <h1 className="font-[family-name:var(--font-bebas)] text-[56px] md:text-[96px] leading-[100%] tracking-tight text-[#161616]">
                TERMS OF USE
              </h1>

              {/* Introductory Paragraphs */}
              <div className="flex flex-col gap-6 text-[16px] md:text-[18px] leading-[150%] font-normal text-[#161616]/80">
                <p>
                  These Terms of Use (&ldquo;Terms&rdquo;) govern the user&rsquo;s access to and use of www.nazrco.in (&ldquo;Website&rdquo;) and the NAZR mobile application (&ldquo;App&rdquo;), owned and operated by Lumina Hospitality Private Limited, operating under the brand NAZR&trade; (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
                </p>
                <p>
                  By accessing, browsing, purchasing from, or using this Website or App, the user agrees to be bound by these Terms, our <Link href="/privacy-policy" className="underline hover:text-[#FF0E97] transition-colors">Privacy Policy</Link>, <Link href="/shipping" className="underline hover:text-[#FF0E97] transition-colors">Shipping Policy</Link>, and <Link href="/product-liability" className="underline hover:text-[#FF0E97] transition-colors">Product Liability &amp; Risk Framework</Link>, and any additional policies referenced in these Terms, all of which are incorporated by reference. If the user does not agree to these Terms, the user must discontinue use of the Services.
                </p>
              </div>

              {/* Mobile Table of Contents: Horizontal Scrollable Tabs */}
              <div className="flex md:hidden flex-col gap-3 py-2 select-none">
                <h2 className="font-[family-name:var(--font-bebas)] text-[28px] font-normal tracking-wide text-[#161616] uppercase leading-none">
                  Table of Contents
                </h2>
                <div className="flex items-center gap-3 overflow-x-auto w-full pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="bg-[#161616] text-[#FFF1EB] rounded-[4px] px-4 py-2 text-[14px] font-semibold uppercase tracking-tight shrink-0 hover:opacity-90 transition-opacity"
                  >
                    View all
                  </button>
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="shrink-0 whitespace-nowrap text-[#161616] hover:text-[#FF0E97] font-['Switzer',_sans-serif] text-[15px] font-medium transition-colors py-2 px-1 focus:outline-none"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Section 1 */}
              <div id="eligibility" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  1. Eligibility
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>The user must be at least 18 years of age to use the Website or App, or purchase products through it. By using the Services, the user represents that they are legally capable of entering into binding contracts, that the information provided is accurate, and that the Services will be used only for lawful purposes.</p>
                  <p>Access to the App&rsquo;s safety features is further conditional on our identity verification (KYC) process, described in our Privacy Policy. We verify age as part of this process and may reject, suspend, or decline to approve any account that does not meet our eligibility criteria.</p>
                </div>
              </div>

              {/* Section 2 */}
              <div id="permitted-use-website" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  2. Permitted Use of Website
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>The user is granted a limited, non-exclusive, revocable, non-transferable licence to access and use this Website for personal and non-commercial purposes. The user agrees not to:</p>
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
              <div id="permitted-use-app" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  3. Permitted Use of the App
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>The App provides personal safety tools, including Shield Mode, SOS Emergency alerts, and Trusted Circle guardian features. The user&rsquo;s use of the App is subject to the following, in addition to the general terms above:</p>
                  <div className="flex flex-col gap-4 pl-4 border-l-2 border-black/10">
                    <p><strong className="font-semibold text-[#161616]">Not a substitute for emergency services.</strong> The App is a supplementary safety tool. It does not replace, and is not a guarantee of, emergency services. In any genuine emergency, the user should contact the police or applicable emergency helpline directly, in addition to using the App.</p>
                    <p><strong className="font-semibold text-[#161616]">No guaranteed delivery or response time.</strong> Alerts, live location sharing, and guardian notifications depend on factors outside our control, including the user&rsquo;s network connectivity, device settings, GPS accuracy, the operating system permissions granted by the user, and third-party platforms such as WhatsApp (operated by Meta) and SMS gateway providers. We do not guarantee that any alert will be delivered, or received, within any particular time frame, or at all.</p>
                    <p><strong className="font-semibold text-[#161616]">Guardians are not obligated responders.</strong> The members of the user&rsquo;s Trusted Circle are individuals chosen by the user and are not vetted, contracted, or obligated by us to respond. We are not responsible for a guardian&rsquo;s availability, responsiveness, or conduct.</p>
                    <p><strong className="font-semibold text-[#161616]">Identity verification gate.</strong> New accounts cannot access Shield Mode or SOS until our identity verification process is complete, which typically takes 24&ndash;48 hours. We may request additional documentation or decline to approve an account at our discretion.</p>
                    <p><strong className="font-semibold text-[#161616]">Permission dependency.</strong> Features that depend on a device permission (location, microphone, or notifications) will be deactivated if that permission is not granted, consistent with our Privacy Policy.</p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div id="product-disclaimer" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  4. Product Information Disclaimer
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>Product descriptions, visuals, demonstrations, and educational content are provided for informational purposes only. NAZR&trade; products are intended solely for lawful personal safety purposes. The Company does not guarantee prevention of harm, guaranteed personal safety outcomes, or product effectiveness in all situations. Users are responsible for ensuring lawful possession and use of products under applicable local laws.</p>
                </div>
              </div>

              {/* Section 5 */}
              <div id="orders-purchases" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  5. Orders and Purchases
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>Purchases made through the Website are subject to product availability, order verification, and payment confirmation. Product purchases are processed through Shopify&rsquo;s platform, in addition to being subject to these Terms. We reserve the right to refuse or cancel suspicious orders, restrict quantities, cancel orders arising from pricing errors, and reject fraudulent transactions.</p>
                </div>
              </div>

              {/* Section 6 */}
              <div id="payment-processing" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  6. Payment Processing
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>Payments are processed through Cashfree Payments and other third-party payment gateways. NAZR&trade; does not store card details, banking details, or CVV information. Payment transactions are governed by the respective payment service providers.</p>
                </div>
              </div>

              {/* Section 7 */}
              <div id="user-accounts" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  7. User Accounts
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>Where a user creates an account or profile on the Website or App, the user is responsible for maintaining confidentiality of their login credentials, ensuring their account information remains accurate, and all activity conducted through their account.</p>
                </div>
              </div>

              {/* Section 8 */}
              <div id="intellectual-property" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  8. Intellectual Property
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>All materials available on the Website and App, including trademarks, logos, product designs, graphics, packaging, written content, videos, and design elements, are owned by or licensed to Lumina Hospitality Private Limited. No user may copy, distribute, reproduce, modify, or commercially exploit any content without prior written permission.</p>
                </div>
              </div>

              {/* Section 9 */}
              <div id="user-content" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  9. User Generated Content
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>Where a user submits reviews, testimonials, feedback, or other content, the user confirms such content is accurate, grants NAZR&trade; a non-exclusive right to use such content for business purposes, and agrees not to post unlawful, defamatory, abusive, or misleading content. We reserve the right to remove such content.</p>
                  <p className="text-[15px] text-[#161616]/60">Community features (referred to in the App as &ldquo;Vantage&rdquo;) are not part of this launch release. Additional terms will apply if and when such features become available.</p>
                </div>
              </div>

              {/* Section 10 */}
              <div id="third-party" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  10. Third Party Links
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  The Website or App may contain links to third-party websites, payment gateways, social platforms, or service providers. We are not responsible for third-party content, services, or privacy practices.
                </p>
              </div>

              {/* Section 11 */}
              <div id="website-app-availability" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  11. Website and App Availability
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  We reserve the right to modify, suspend, restrict, or discontinue any part of the Website or App without notice. We do not guarantee uninterrupted availability. This includes any feature dependent on third-party platforms (such as WhatsApp, SMS gateways, or maps data providers) that may themselves experience outages beyond our control.
                </p>
              </div>

              {/* Section 12 */}
              <div id="limitation-liability" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  12. Limitation of Liability
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>To the maximum extent permitted under applicable law, NAZR&trade; shall not be liable for indirect losses, incidental damages, website or app interruptions, misuse of products, reliance on website or app content, or third-party platform failures. Nothing in this clause excludes or limits liability where such exclusion is not permitted under applicable law, including for gross negligence or wilful default. Users assume responsibility for lawful product usage.</p>
                </div>
              </div>

              {/* Section 13 */}
              <div id="indemnity" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  13. Indemnity
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  The user agrees to indemnify and hold harmless Lumina Hospitality Private Limited against claims arising from misuse of products, violation of these Terms, unlawful conduct, or misuse of website or app content.
                </p>
              </div>

              {/* Section 14 */}
              <div id="privacy" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  14. Privacy
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  The user&rsquo;s use of this Website and App is also governed by our Privacy Policy.
                </p>
              </div>

              {/* Section 15 */}
              <div id="force-majeure" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  15. Force Majeure
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  We shall not be liable for any failure or delay in performance resulting from circumstances beyond our reasonable control, including natural disasters, network or platform outages of third-party service providers, or governmental action.
                </p>
              </div>

              {/* Section 16 */}
              <div id="changes-terms" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  16. Changes to Terms
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  We may update these Terms from time to time. Updated versions will be posted on the Website and App. Continued use constitutes acceptance of revised Terms.
                </p>
              </div>

              {/* Section 17 */}
              <div id="governing-law" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  17. Governing Law and Jurisdiction
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts located in Mumbai, Maharashtra.
                </p>
              </div>

              {/* Section 18 */}
              <div id="grievance-officer" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  18. Grievance Officer
                </h3>
                <div className="flex flex-col gap-2 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p><strong className="font-semibold text-[#161616]">Name:</strong> Atul</p>
                  <p><strong className="font-semibold text-[#161616]">Designation:</strong> Grievance Officer, NAZR</p>
                  <p><strong className="font-semibold text-[#161616]">Email:</strong> support@nazrco.in</p>
                  <p className="mt-2 text-[#161616]/70">We will acknowledge complaints within 48 hours and endeavour to resolve them within 30 days of receipt.</p>
                </div>
              </div>

              {/* Section 19 */}
              <div id="contact-info" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  19. Contact Information
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  Lumina Hospitality Private Limited
                  <br />
                  802, Harshvardhan, Opp. Saki Vihar Telephone Exchange, Mumbai &ndash; 400076
                  <br /><br />
                  <strong className="font-semibold block text-[#FF0E97]">Email: support@nazrco.in</strong>
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
