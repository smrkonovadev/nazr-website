"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function SupportSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms || loading) return;
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setAgreeTerms(false);
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#FFF1EB] px-6 md:px-16 pt-12 md:pt-20 pb-16 md:pb-24 flex flex-col items-center">
      <div className="w-full max-w-[1205px] mx-auto flex flex-col">
        {/* ======================= */}
        {/* HEADER SECTION          */}
        {/* ======================= */}
        <div className="flex flex-col items-start w-full max-w-[700px] mb-10 md:mb-14">
          <h1 className="font-[family-name:var(--font-bebas)] text-[56px] sm:text-[80px] md:text-[110px] leading-[90%] tracking-[-0.03em] text-[#161616] uppercase font-normal m-0">
            SUPPORT
          </h1>
          <p
            className="mt-3 md:mt-4 text-[#161616]/90 text-[16px] md:text-[18px] leading-[150%] tracking-normal font-normal"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontWeight: 400,
              lineHeight: "150%",
              letterSpacing: "0%",
            }}
          >
            We&apos;re here to help.<br />
            Whether you have a question, need support, or want to report an issue, our<br />
            team is here to help. Fill out the form below, and we&apos;ll get back to you as<br />
            soon as possible.
          </p>
        </div>

        {/* ======================= */}
        {/* FORM + MAP GRID SECTION */}
        {/* ======================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 w-full items-stretch">
          {/* Left Column: Support Form */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-7 w-full">
              {/* Name Field */}
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="support-name"
                  className="text-[14px] md:text-[15px] font-normal text-[#161616] tracking-tight"
                  style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
                >
                  Name
                </label>
                <input
                  id="support-name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-[#161616]/40 py-2 pl-3 md:pl-4 text-[15px] md:text-[17px] text-[#161616] placeholder-[#161616]/40 focus:outline-none focus:border-[#FF0E97] transition-colors"
                  style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="support-email"
                  className="text-[14px] md:text-[15px] font-normal text-[#161616] tracking-tight"
                  style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
                >
                  Email
                </label>
                <input
                  id="support-email"
                  type="email"
                  required
                  placeholder="email@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-[#161616]/40 py-2 pl-3 md:pl-4 text-[15px] md:text-[17px] text-[#161616] placeholder-[#161616]/40 focus:outline-none focus:border-[#FF0E97] transition-colors"
                  style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-1 w-full">
                <label
                  htmlFor="support-message"
                  className="text-[14px] md:text-[15px] font-normal text-[#161616] tracking-tight"
                  style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  id="support-message"
                  required
                  rows={3}
                  placeholder="Type your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-[#161616]/40 py-2 pl-3 md:pl-4 text-[15px] md:text-[17px] text-[#161616] placeholder-[#161616]/40 focus:outline-none focus:border-[#FF0E97] transition-colors resize-none"
                  style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center gap-3 mt-1">
                <div
                  onClick={() => setAgreeTerms(!agreeTerms)}
                  className="relative w-[18px] h-[18px] flex items-center justify-center border border-[#161616] bg-transparent cursor-pointer shrink-0 rounded-none"
                >
                  {agreeTerms && (
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="#161616" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <input
                  type="checkbox"
                  id="support-terms"
                  required
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="sr-only"
                />
                <label
                  htmlFor="support-terms"
                  className="text-[15px] md:text-[16px] text-[#161616] cursor-pointer select-none font-normal"
                  style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
                >
                  I agree to the{" "}
                  <Link href="/terms" className="underline underline-offset-2 hover:text-[#FF0E97] transition-colors">
                    Terms & Conditions
                  </Link>
                </label>
              </div>

              {/* Submit Button & Feedback */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-2">
                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="bg-[#F80090] hover:bg-[#d6007b] disabled:opacity-75 transition-all text-white font-normal text-[16px] leading-[150%] rounded-[4px] border border-[#F80090] px-6 py-2 h-[40px] flex items-center justify-center gap-2 cursor-pointer min-w-[127px]"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  {loading ? "Sending..." : submitted ? "Sent!" : "Submit"}
                </button>
                {submitted && (
                  <span
                    className="text-[14px] text-[#059669] font-medium"
                    style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
                  >
                    Thank you! We&apos;ve received your message.
                  </span>
                )}
                {errorMsg && (
                  <span
                    className="text-[14px] text-[#DC2626] font-medium"
                    style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
                  >
                    {errorMsg}
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Right Column: Map Graphic Container */}
          <div className="lg:col-span-6 flex min-h-[340px] lg:min-h-[420px] w-full">
            <div className="w-full h-full bg-[#DCDCDC] rounded-[14px] md:rounded-[20px] relative overflow-hidden flex flex-col justify-between border border-black/5 shadow-inner group">
              {/* Google Maps Embed iframe for Supreme Business Park, Powai, Mumbai */}
              <iframe
                title="Lumina Hospitality Location Map"
                src="https://maps.google.com/maps?q=Supreme%20Business%20Park%20Powai%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 grayscale-[25%] opacity-85 contrast-[105%]"
                allowFullScreen
                loading="lazy"
              />

              {/* Top Address Overlay Card */}
              <a
                href="https://maps.app.goo.gl/czYtE4hs12AEtVcB6"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 m-4 p-3 md:p-4 bg-[#FFF1EB]/95 backdrop-blur-md rounded-[10px] border border-black/10 shadow-md flex items-start gap-3 hover:bg-[#FFF1EB] transition-all group-hover:scale-[1.01]"
              >
                <div className="w-8 h-8 rounded-full bg-[#FF0E97]/15 flex items-center justify-center shrink-0 mt-0.5 text-[#FF0E97]">
                  <svg width="18" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C7.58 2 4 5.58 4 10C4 15.25 12 22 12 22C12 22 20 15.25 20 10C20 5.58 16.42 2 12 2ZM12 13.5C10.07 13.5 8.5 11.93 8.5 10C8.5 8.07 10.07 6.5 12 6.5C13.93 6.5 15.5 8.07 15.5 10C15.5 11.93 13.93 13.5 12 13.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-0.5 text-[#161616]" style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}>
                  <span className="font-semibold text-[13px] md:text-[14px] text-[#161616]">
                    LUMINA HOSPITALITY PVT LTD
                  </span>
                  <span className="text-[12px] md:text-[13px] text-[#161616]/80 leading-tight">
                    Supreme Business Park, Hiranandani Gardens,<br />
                    Powai, Mumbai, Maharashtra - 400076
                  </span>
                </div>
              </a>

              {/* Bottom "Open in Google Maps ↗" Pill */}
              <div className="relative z-10 m-4 self-end">
                <a
                  href="https://maps.app.goo.gl/czYtE4hs12AEtVcB6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#161616] hover:bg-[#FF0E97] transition-colors text-[#FFF1EB] hover:text-white px-3.5 py-1.5 rounded-full text-[12px] md:text-[13px] font-medium shadow-md flex items-center gap-1.5"
                  style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
                >
                  Open in Maps
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 1.5H10.5V8.5M10.5 1.5L1.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ======================= */}
        {/* 4 CONTACT CARDS GRID    */}
        {/* ======================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 w-full mt-16 md:mt-24 pt-12 md:pt-16 border-t border-black/10">
          {/* Card 1: Support Email */}
          <div className="flex flex-col items-start gap-2">
            <div className="w-10 h-10 flex items-center justify-start mb-1 relative">
              <Image
                src="/images/mail.svg"
                alt="Support Email"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <h3 className="font-[family-name:var(--font-bebas)] text-[24px] md:text-[28px] font-normal tracking-wide text-[#161616] uppercase leading-none m-0">
              SUPPORT EMAIL
            </h3>
            <a
              href="mailto:support@nazrco.in"
              className="text-[14px] md:text-[16px] text-[#161616] hover:text-[#FF0E97] transition-colors underline underline-offset-2"
              style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
            >
              support@nazrco.in
            </a>
          </div>

          {/* Card 2: Business Hours */}
          <div className="flex flex-col items-start gap-2">
            <div className="w-10 h-10 flex items-center justify-start mb-1 relative">
              <Image
                src="/images/BUSINESS HOURS.svg"
                alt="Business Hours"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <h3 className="font-[family-name:var(--font-bebas)] text-[24px] md:text-[28px] font-normal tracking-wide text-[#161616] uppercase leading-none m-0">
              BUSINESS HOURS
            </h3>
            <span
              className="text-[14px] md:text-[16px] text-[#161616]"
              style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
            >
              10:00 AM - 8:00 PM
            </span>
          </div>

          {/* Card 3: Phone */}
          <div className="flex flex-col items-start gap-2">
            <div className="w-10 h-10 flex items-center justify-start mb-1 relative">
              <Image
                src="/images/call.svg"
                alt="Phone"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <h3 className="font-[family-name:var(--font-bebas)] text-[24px] md:text-[28px] font-normal tracking-wide text-[#161616] uppercase leading-none m-0">
              PHONE
            </h3>
            <a
              href="tel:+917208940212"
              className="text-[14px] md:text-[16px] text-[#161616] hover:text-[#FF0E97] transition-colors underline underline-offset-2"
              style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
            >
              +91- 7208940212
            </a>
          </div>

          {/* Card 4: Response Time */}
          <div className="flex flex-col items-start gap-2">
            <div className="w-10 h-10 flex items-center justify-start mb-1 relative">
              <Image
                src="/images/responsetime.svg"
                alt="Response Time"
                width={42}
                height={36}
                className="object-contain"
              />
            </div>
            <h3 className="font-[family-name:var(--font-bebas)] text-[24px] md:text-[28px] font-normal tracking-wide text-[#161616] uppercase leading-none m-0">
              RESPONSE TIME
            </h3>
            <span
              className="text-[14px] md:text-[16px] text-[#161616]"
              style={{ fontFamily: "Switzer, var(--font-geist-sans), sans-serif" }}
            >
              Within 24-48 hours on weekdays
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
