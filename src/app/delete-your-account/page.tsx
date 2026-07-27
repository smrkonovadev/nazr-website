"use client";

import Link from "next/link";
import { Header } from "@/components/ui/Header";
import { DesktopScaler } from "@/components/ui/DesktopScaler";

export default function DeleteAccountPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#161616] w-full">
      <DesktopScaler>
        <Header />
      </DesktopScaler>

      {/* Delete Account Canvas Section */}
      <section className="w-full flex-1 flex justify-center bg-[#161616] relative z-[70] max-md:mt-0 md:-mt-[48px] max-md:rounded-t-[9.71px] md:rounded-t-[26px]">
        <DesktopScaler bgColor="#FFF1EB" className="max-md:rounded-t-[9.71px] md:rounded-t-[26px] max-md:rounded-b-[9.71px] md:rounded-b-[26px]">
          <div className="w-full bg-[#FFF1EB] relative max-md:rounded-t-[9.71px] md:rounded-t-[26px] max-md:rounded-b-[9.71px] md:rounded-b-[26px] min-h-[800px] px-6 md:px-16 py-12 md:py-20 flex flex-col items-center">
            
            <div className="w-full max-w-[840px] flex flex-col gap-8 md:gap-12 text-[#161616]">
              {/* Page Title */}
              <div className="flex flex-col gap-3">
                <h1 className="font-[family-name:var(--font-bebas)] text-[44px] sm:text-[60px] md:text-[80px] leading-[100%] tracking-tight text-[#161616] uppercase">
                  DELETE YOUR NAZR ACCOUNT
                </h1>
                <p className="font-sans text-[16px] md:text-[18px] leading-[150%] text-[#161616]/80 font-normal">
                  At Nazr, we respect your privacy and provide users with full control over their personal information.
                </p>
              </div>

              {/* How to Delete Your Account */}
              <div className="flex flex-col gap-4">
                <h2 className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[36px] tracking-wide text-[#161616] uppercase leading-none">
                  How to Delete Your Account
                </h2>
                <p className="font-sans text-[16px] md:text-[18px] leading-[150%] text-[#161616]/80">
                  You can delete your Nazr account directly from within the mobile application.
                </p>
                <ol className="list-decimal list-inside flex flex-col gap-2 font-sans text-[16px] md:text-[18px] leading-[160%] text-[#161616] font-medium pl-2">
                  <li>Open the Nazr app.</li>
                  <li>Navigate to Profile &gt; Settings.</li>
                  <li>Select Delete Account.</li>
                  <li>Confirm your request.</li>
                </ol>
                <p className="font-sans text-[16px] md:text-[18px] leading-[150%] text-[#161616]/80 pt-1">
                  Once confirmed, your account deletion request will be processed immediately.
                </p>
              </div>

              {/* What Happens When You Delete Your Account */}
              <div className="flex flex-col gap-4">
                <h2 className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[36px] tracking-wide text-[#161616] uppercase leading-none">
                  What Happens When You Delete Your Account?
                </h2>
                <p className="font-sans text-[16px] md:text-[18px] leading-[150%] text-[#161616]/80">
                  When you delete your account:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2 font-sans text-[16px] md:text-[18px] leading-[160%] text-[#161616]/90 pl-2">
                  <li>Your profile information will be permanently removed from our systems.</li>
                  <li>Your personal account details associated with Nazr will be deleted.</li>
                  <li>You will no longer be able to access your account.</li>
                </ul>
              </div>

              {/* Data Retention */}
              <div className="flex flex-col gap-4">
                <h2 className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[36px] tracking-wide text-[#161616] uppercase leading-none">
                  Data Retention
                </h2>
                <p className="font-sans text-[16px] md:text-[18px] leading-[150%] text-[#161616]/80">
                  Nazr does not retain your personal account information after successful account deletion, except where retention is required by applicable laws, regulations, or legitimate security purposes.
                </p>
              </div>

              {/* Need Help */}
              <div className="flex flex-col gap-4">
                <h2 className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[36px] tracking-wide text-[#161616] uppercase leading-none">
                  Need Help?
                </h2>
                <p className="font-sans text-[16px] md:text-[18px] leading-[150%] text-[#161616]/80">
                  If you experience any issues while deleting your account or require assistance, please contact us:
                </p>
                <p className="font-sans text-[16px] md:text-[18px] leading-[150%] text-[#161616] font-medium">
                  Email:{" "}
                  <a
                    href="mailto:Support@nazrco.in"
                    className="text-[#E5007D] hover:underline transition-all"
                  >
                    Support@nazrco.in
                  </a>
                </p>
                <p className="font-sans text-[16px] md:text-[18px] leading-[150%] text-[#161616]/80">
                  We will respond to your request as soon as possible.
                </p>
              </div>

              {/* Privacy Policy */}
              <div className="flex flex-col gap-4 pt-2 border-t border-[#161616]/10">
                <h2 className="font-[family-name:var(--font-bebas)] text-[28px] md:text-[36px] tracking-wide text-[#161616] uppercase leading-none">
                  Privacy Policy
                </h2>
                <p className="font-sans text-[16px] md:text-[18px] leading-[150%] text-[#161616]/80">
                  For more information about how we collect, use, store, and protect your personal information, please review our Privacy Policy:
                </p>
                <p className="font-sans text-[16px] md:text-[18px] leading-[150%]">
                  <Link
                    href="/privacy-policy"
                    className="text-[#0E8DFF] hover:text-[#E5007D] font-medium hover:underline transition-colors"
                  >
                    https://nazrco.in/privacy-policy
                  </Link>
                </p>
              </div>

              {/* Last Updated */}
              <div className="pt-4 text-left">
                <span className="font-sans text-[14px] md:text-[15px] text-[#161616]/60 uppercase tracking-wide">
                  Last Updated: June 2026
                </span>
              </div>

            </div>
          </div>
        </DesktopScaler>
      </section>
    </main>
  );
}
