"use client";

import { Header } from "@/components/ui/Header";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export default function PrivacyPage() {
  const tableOfContents = [
    { name: "Company Information", id: "company-info" },
    { name: "Collection of Information", id: "collection-info" },
    { name: "Legal Basis for Processing", id: "legal-basis" },
    { name: "Account Information", id: "account-info" },
    { name: "Identity Verification (KYC)", id: "identity-verification" },
    { name: "Location Data", id: "location-data" },
    { name: "Trusted Guardian & Emergency Contact Information", id: "trusted-guardian" },
    { name: "Audio Information", id: "audio-info" },
    { name: "Device Information", id: "device-info" },
    { name: "Vehicle & Trip Information", id: "vehicle-trip" },
    { name: "Usage & Diagnostic Information", id: "usage-diagnostic" },
    { name: "Notification Information", id: "notification-info" },
    { name: "How We Use Information", id: "use-information" },
    { name: "Emergency Safety Features", id: "emergency-features" },
    { name: "App Permissions", id: "app-permissions" },
    { name: "How We Share Information", id: "share-information" },
    { name: "Third-Party Service Providers", id: "third-party" },
    { name: "International Data Transfers", id: "international-transfers" },
    { name: "Data Retention", id: "data-retention" },
    { name: "Account Deletion", id: "account-deletion" },
    { name: "User Rights", id: "user-rights" },
    { name: "Data Security", id: "data-security" },
    { name: "Children’s Privacy", id: "children-privacy" },
    { name: "Consent", id: "consent" },
    { name: "Data Breach Notification", id: "data-breach" },
    { name: "Grievance Officer", id: "grievance-officer" },
    { name: "Changes to this Policy", id: "policy-changes" },
    { name: "Contact Us", id: "contact-us" }
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

      {/* Privacy Policy Canvas Section */}
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

            {/* Right Column: Privacy Content */}
            <div className="flex-1 flex flex-col gap-12 font-['Switzer',_sans-serif] text-[#161616] max-w-[800px]">
              
              {/* Page Title */}
              <h1 className="font-[family-name:var(--font-bebas)] text-[56px] md:text-[96px] leading-[100%] tracking-tight text-[#161616]">
                PRIVACY POLICY
              </h1>

              {/* Introductory Paragraphs */}
              <div className="flex flex-col gap-6 text-[16px] md:text-[18px] leading-[150%] font-normal text-[#161616]/80">
                <p>
                  Lumina Hospitality Private Limited (&ldquo;NAZR&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is
                  committed to protecting the user&rsquo;s privacy and ensuring the security of the personal information
                  the user shares with us through our application, website, and related services (collectively, the &ldquo;Services&rdquo;).
                </p>
                <p>
                  Where required by applicable law, we seek your consent before collecting or processing your personal data.
                  By creating an account and providing the permissions requested within the application, you consent to the
                  processing described in this Privacy Policy.
                </p>
              </div>

              {/* Section 1 */}
              <div id="company-info" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  1. Company Information
                </h3>
                <div className="flex flex-col gap-2 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p><strong className="font-semibold text-[#161616]">Name:</strong> Lumina Hospitality Private Limited</p>
                  <p><strong className="font-semibold text-[#161616]">Registered Address:</strong> 802, Harshvardhan, Opp. Saki Vihar Telephone Exchange, Mumbai &ndash; 400076</p>
                  <p><strong className="font-semibold text-[#161616]">Registration Number:</strong> U56201MH2024PTC428005</p>
                  <p><strong className="font-semibold text-[#161616]">Email:</strong> support@nazrco.in</p>
                </div>
              </div>

              {/* Section 2 */}
              <div id="collection-info" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  2. Collection of Information
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  We collect information that helps us provide safety, emergency communication, and platform functionality.
                  Some information, such as a user&rsquo;s guardians&rsquo; contact details, is provided to us by the user on
                  their behalf rather than by them directly. By submitting a guardian&rsquo;s information, the user confirms
                  that they are authorised to provide it, for the purpose of enabling NAZR&rsquo;s emergency response features.
                </p>
              </div>

              {/* Section 3 */}
              <div id="legal-basis" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  3. Legal Basis for Processing
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  We process personal information on the following bases: with the user&rsquo;s consent, to provide the
                  safety and platform services requested; and to comply with our legal obligations, including responding
                  to lawful requests from authorities and taking necessary action during emergencies to protect life.
                </p>
              </div>

              {/* Section 4 */}
              <div id="account-info" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  4. Account Information
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>When the user creates or uses a NAZR account, we may collect:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Full name</li>
                    <li>Mobile number</li>
                    <li>Email address</li>
                    <li>Date of birth (optional at sign-up, verified as part of identity verification below)</li>
                    <li>Account credentials</li>
                    <li>Profile information voluntarily provided by the user</li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div id="identity-verification" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  5. Identity Verification (KYC)
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  Before a new account can access Shield Mode, SOS, or any other safety feature, we verify the user&rsquo;s identity using a government-issued ID (Aadhaar, PAN, Driving Licence, or Passport). This review is conducted by our safety team and typically takes 24&ndash;48 hours.
                  <br /><br />
                  We use this process, among other things, to confirm that account holders meet our minimum age requirement. Accounts that do not meet this or our other verification criteria will not be approved for use of the Services. KYC documents are not used for marketing, profiling, or any purpose unrelated to identity verification and platform security.
                </p>
              </div>

              {/* Section 6 */}
              <div id="location-data" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  6. Location Data
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>
                    NAZR is a personal safety application that relies on location information to provide emergency response, SOS functionality, journey tracking, and safety-related features.
                    <br /><br />
                    With the user&rsquo;s permission, NAZR may collect location data only while Shield Mode or SOS is actively engaged &mdash; that is, during a monitored journey or an active emergency alert, not as continuous background tracking at other times.
                  </p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Precise location data during an active Shield Mode session or SOS.</li>
                    <li>Real-time location updates during active SOS sessions, refreshed approximately every 10 seconds.</li>
                    <li>The user&rsquo;s city, so their guardians know where to direct help if the user is in a different location than they are.</li>
                  </ul>
                  <p>
                    Location tracking is always started manually by the user, within the app, by activating Shield Mode or SOS; NAZR never begins a new session automatically or without the user&rsquo;s action. Once a Shield Mode session is active, however, an SOS may be triggered within that session either by a guardian, or automatically by the app, as described in Emergency Safety Features below.
                    <br /><br />
                    Once the session has been started, location tracking continues even if the app is minimised, the screen is locked, or the user switches to another app, so that the journey remains monitored without the user needing to keep the app open. This is what the device refers to as &ldquo;background&rdquo; location access. Tracking runs only for the duration of that active session and stops automatically when the session ends &mdash; by the user marking themselves safe, completing the journey, or manually deactivating Shield Mode.
                    <br /><br />
                    Location information may be used to:
                  </p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Trigger SOS alerts</li>
                    <li>Enable live location sharing with designated guardians</li>
                    <li>Facilitate emergency response and safety monitoring</li>
                    <li>Improve platform functionality and safety-related features</li>
                  </ul>
                  <p>
                    Users may withdraw location permissions at any time through device settings. Certain safety features may become unavailable if location permissions are disabled.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div id="trusted-guardian" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  7. Trusted Guardian & Emergency Contact Information
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>
                    To support emergency response features, we collect the following about the members of the user&rsquo;s Trusted Circle, provided by the user on their behalf:
                  </p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Guardian name</li>
                    <li>Guardian phone number</li>
                    <li>Relationship to the user</li>
                    <li>City, so a guardian in a different city knows to direct help locally</li>
                    <li>Email address (optional)</li>
                    <li>Photo (optional)</li>
                  </ul>
                  <p>
                    Because this information is provided to us by the user rather than directly by the guardian, a guardian may contact support@nazrco.in directly to request that their information be removed. Doing so will remove them from the user&rsquo;s Trusted Circle going forward; it will not alter the historical record of any past emergency in which they were already alerted.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div id="audio-info" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  8. Audio Information
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  Microphone access is used only during an active SOS session to record emergency audio. NAZR does not access or record audio during normal app usage or outside an active SOS. Audio recordings are securely shared with the user&rsquo;s designated guardians or emergency contacts and retained for approximately 2 years.
                  <br /><br />
                  Please note that a recording made during an emergency may include the voices of people other than the user. Responsibility for the lawful use of any such recording rests with the user as the account holder; NAZR facilitates capture and secure sharing only with the user&rsquo;s own designated guardians.
                </p>
              </div>

              {/* Section 9 */}
              <div id="device-info" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  9. Device Information
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>We may collect:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Device model</li>
                    <li>Device identifiers</li>
                    <li>Operating system version</li>
                    <li>Language preferences</li>
                    <li>Network information</li>
                  </ul>
                </div>
              </div>

              {/* Section 10 */}
              <div id="vehicle-trip" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  10. Vehicle & Trip Information
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  If the user uses Shield Mode&rsquo;s journey tracking, they may optionally provide a vehicle number and vehicle photo, along with their destination and preferred check-in frequency. This information is shared only with the guardians selected by the user for that specific trip.
                </p>
              </div>

              {/* Section 11 */}
              <div id="usage-diagnostic" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  11. Usage & Diagnostic Information
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  We automatically collect crash reports, error logs, performance data, and usage statistics through Firebase Analytics, Firebase Crashlytics, and Firebase Performance Monitoring, to help us detect issues and improve the Services.
                </p>
              </div>

              {/* Section 12 */}
              <div id="notification-info" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  12. Notification Information
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  We process information necessary to send emergency alerts, push notifications, guardian notifications, and service communications, such as account, verification, and safety-related updates. The user may also receive optional promotional communications, which they can opt out of at any time.
                </p>
              </div>

              {/* Section 13 */}
              <div id="use-information" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  13. How We Use Information
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>We may use the user&rsquo;s information to:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Create and manage user accounts</li>
                    <li>Verify the user&rsquo;s identity</li>
                    <li>Deliver personal safety services</li>
                    <li>Trigger and manage SOS alerts</li>
                    <li>Verify and manage guardian relationships</li>
                    <li>Monitor platform performance, detect fraud, abuse, or unauthorized use</li>
                    <li>Comply with legal obligations</li>
                    <li>Respond to support requests</li>
                  </ul>
                </div>
              </div>

              {/* Section 14 */}
              <div id="emergency-features" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  14. Emergency Safety Features
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  When the user activates an SOS alert, the application may access their current location, continuously update location information during the emergency, notify their designated guardians, share emergency-related information with them, record and share audio evidence where enabled, and deliver alerts through applicable communication channels. Such processing is undertaken solely for safety and emergency response purposes.
                  <br /><br />
                  An SOS may also be triggered without the user&rsquo;s direct action in two circumstances. First, a guardian who believes something may be wrong can trigger SOS on the user&rsquo;s behalf. Second, if the user misses a Shield Mode check-in and no guardian responds within 5 minutes &mdash; or no guardian is selected for that session &mdash; the app automatically triggers SOS. The first time a user activates Shield Mode, a one-time in-app notice explains both of these possibilities before the feature is used.
                  <br /><br />
                  During an active SOS, the user&rsquo;s live location, audio stream, and audio recordings are shared with all verified guardians in the user&rsquo;s Trusted Circle in real time, through a secure web link, without requiring guardians to install the app. Guardians can view the user&rsquo;s live location on a map, listen to live and recorded audio, and see the status of other guardians who have been alerted. This sharing continues for the duration of the active SOS and stops once the user marks themselves safe or the session is otherwise resolved.
                </p>
              </div>

              {/* Section 15 */}
              <div id="app-permissions" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  15. App Permissions
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <ul className="list-disc pl-6 flex flex-col gap-3">
                    <li><strong className="font-semibold text-[#161616]">Location Permission</strong> &mdash; used for SOS alerts, live location sharing, guardian tracking, and emergency monitoring. Used in the foreground while the user is actively using the app, and in the background once the user has manually started Shield Mode or SOS, for the duration of that session only.</li>
                    <li><strong className="font-semibold text-[#161616]">Microphone Permission</strong> &mdash; used for emergency audio recording and safety evidence collection. Accessed only while an SOS is active; never used to record or monitor audio at any other time.</li>
                    <li><strong className="font-semibold text-[#161616]">Notification Permission</strong> &mdash; used for emergency alerts, safety notifications, and service communications.</li>
                    <li><strong className="font-semibold text-[#161616]">Camera Permission (if enabled)</strong> &mdash; used for user-initiated safety documentation and evidence collection, including capturing a photo for KYC verification, a guardian&rsquo;s photo, or a vehicle&rsquo;s photo.</li>
                    <li><strong className="font-semibold text-[#161616]">Photo Library / Media Permission (if enabled)</strong> &mdash; used to let the user select and upload an existing photo or document from their device&rsquo;s gallery, for KYC document upload, guardian photo, or vehicle photo.</li>
                  </ul>
                  <p>
                    NAZR requests access to permissions only when necessary for specific features. By granting a permission, the user consents to the processing described in this Policy. The user may modify or withdraw permissions at any time through device settings; doing so may affect the availability of the dependent feature.
                  </p>
                </div>
              </div>

              {/* Section 16 */}
              <div id="share-information" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  16. How We Share Information
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>We do not sell the user&rsquo;s personal information. We may share information:</p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>With trusted guardians designated by the user</li>
                    <li>With emergency contacts provided by the user</li>
                    <li>With service providers supporting our operations</li>
                    <li>With Shopify, to process purchases of On Me and Sip Check</li>
                    <li>Emergency alerts are delivered via WhatsApp (operated by Meta) and SMS gateway providers, which have their own privacy practices in addition to ours</li>
                    <li>With law enforcement or authorities where required by law &mdash; typically pursuant to a written request citing the applicable legal provision and case reference, or, in situations involving imminent risk to life, in order to protect safety consistent with applicable law</li>
                    <li>During a merger, acquisition, restructuring, or transfer of assets</li>
                  </ul>
                </div>
              </div>

              {/* Section 17 */}
              <div id="third-party" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  17. Third-Party Service Providers
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  We engage third-party providers to support the Services, including Google Maps Platform, Google Play Services, Firebase (Authentication, Cloud Messaging, Analytics, Crashlytics, Performance Monitoring), ZeptoMail (Zoho), Airtel SMS Platform, MarketBuzzer Teleservices, Cashfree Payments, Shopify, and cloud storage providers, covering cloud hosting, analytics, mapping and location services, push notifications, payments, and communication and security services. Such providers process information solely to support and enable the Services, subject to appropriate confidentiality and security obligations.
                </p>
              </div>

              {/* Section 18 */}
              <div id="international-transfers" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  18. International Data Transfers
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  Our core infrastructure (including account data, location data, and KYC documents) is hosted in India. One exception: purchases of On Me and Sip Check are processed through Shopify, a platform based outside India, meaning order information for physical product purchases may be processed outside the country. We implement appropriate technical and organizational measures to protect information against unauthorized access, misuse, alteration, or destruction, including encryption in transit, encryption at rest, role-based access controls, authentication safeguards, and audit logging where applicable. Where any information is processed outside India, we take appropriate contractual and technical safeguards to ensure it receives an appropriate level of protection.
                </p>
              </div>

              {/* Section 19 */}
              <div id="data-retention" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  19. Data Retention
                </h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p>
                    We retain personal information only for as long as necessary to provide and maintain the Services, deliver emergency and safety-related features, comply with legal obligations, resolve fraud and disputes, and enforce our agreements. In particular:
                  </p>
                  <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>KYC documents: retained while the user&rsquo;s account is active, deleted within 30 days of an account deletion request</li>
                    <li>SOS audio recordings: approximately 2 years from the date of recording unless a longer retention period is required by law or to establish, exercise or defend legal claims</li>
                    <li>SOS incident records (location trail, guardian delivery log, nearest-help data): approximately 2 years from the incident</li>
                    <li>Routine location history and check-in logs where no SOS occurred: 90 days</li>
                    <li>Guardian contact details: until removed by the user, or by the guardian&rsquo;s own request</li>
                  </ul>
                </div>
              </div>

              {/* Section 20 */}
              <div id="account-deletion" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  20. Account Deletion
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  The user may request account deletion directly through Profile &rarr; Settings &rarr; Delete Account, or by emailing support@nazrco.in.
                  <br /><br />
                  Upon a valid deletion request, the user&rsquo;s KYC documents and personal identifying information are deleted within 30 days. Non-identifying usage history and any records tied to a past safety incident are retained for approximately 2 years from the relevant event, so that incident history remains available if needed even after the user&rsquo;s account is closed.
                </p>
              </div>

              {/* Section 21 */}
              <div id="user-rights" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  21. User Rights
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  Subject to applicable law, the user has the right to access personal information, correct inaccurate information, request deletion of information, withdraw consent where applicable, and request information regarding how their data is processed.
                  <br /><br />
                  The user may also have the right to file a complaint with the Data Protection Board of India. Requests may be submitted to: support@nazrco.in
                </p>
              </div>

              {/* Section 22 */}
              <div id="data-security" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  22. Data Security
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  We implement appropriate technical and organizational measures to protect information against unauthorized access, misuse, alteration, or destruction, including encryption in transit, encryption at rest, role-based access controls, authentication safeguards, and audit logging where applicable.
                </p>
              </div>

              {/* Section 23 */}
              <div id="children-privacy" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  23. Children&rsquo;s Privacy
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  NAZR is not intended for individuals under 18 years of age. We verify age as part of our mandatory identity verification (KYC) process before any account is approved for use, and we do not knowingly approve accounts for individuals under 18.
                </p>
              </div>

              {/* Section 24 */}
              <div id="consent" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  24. Consent
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  Where we rely on the user&rsquo;s consent &mdash; for example, location, microphone, or notification permissions, or identity verification during onboarding &mdash; we ask for it clearly and specifically at the relevant point in the app. The user may withdraw consent at any time through their device&rsquo;s permission settings or by deleting their account; withdrawing consent for a permission will deactivate the feature that depends on it. Where the user opts in to promotional communications, they may withdraw this consent at any time without affecting their access to safety-related features.
                  <br /><br />
                  Where the user withdraws consent, this may prevent us from providing safety features that depend on the relevant data, such as SOS or Shield Mode. Withdrawing consent does not affect the lawfulness of any processing carried out before the withdrawal.
                </p>
              </div>

              {/* Section 25 */}
              <div id="data-breach" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  25. Data Breach Notification
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  In the event of a personal data breach affecting the user&rsquo;s information, we will notify affected users and the Data Protection Board of India without undue delay, as required by applicable law.
                </p>
              </div>

              {/* Section 26 */}
              <div id="grievance-officer" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  26. Grievance Officer
                </h3>
                <div className="flex flex-col gap-2 text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  <p><strong className="font-semibold text-[#161616]">Name:</strong> Atul</p>
                  <p><strong className="font-semibold text-[#161616]">Designation:</strong> Grievance Officer, NAZR</p>
                  <p><strong className="font-semibold text-[#161616]">Email:</strong> support@nazrco.in</p>
                  <p className="mt-2 text-[#161616]/70">We will acknowledge complaints within 48 hours and endeavour to resolve them within 30 days of receipt.</p>
                </div>
              </div>

              {/* Section 27 */}
              <div id="policy-changes" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  27. Changes to this Policy
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  We may update this Privacy Policy from time to time. Updated versions will be posted on the application and website.
                </p>
              </div>

              {/* Section 28 */}
              <div id="contact-us" className="flex flex-col gap-4 pt-4 border-t border-black/10">
                <h3 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#161616]">
                  28. Contact Us
                </h3>
                <p className="text-[16px] md:text-[18px] leading-[160%] text-[#161616]/80">
                  For privacy-related questions or concerns, please contact:
                  <br />
                  <strong className="font-semibold block mt-2 text-[#FF0E97]">Email: support@nazrco.in</strong>
                  <br />
                  <span className="text-[15px] text-[#161616]/75 block">Lumina Hospitality Private Limited, 802, Harshvardhan, Opp. Saki Vihar Telephone Exchange, Mumbai &ndash; 400076</span>
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
