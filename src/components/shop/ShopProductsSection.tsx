"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Sparkles, Check, ArrowRight, Box, Clock, Smartphone, Nfc, Target, Eye, Truck, Package } from "lucide-react";
import { trackMetaViewContent } from "@/components/MetaPixel";

interface ProductData {
  id: string;
  numberTag: string;
  categoryTag: string;
  title: string;
  watermark: string;
  price: string;
  originalPrice: string;
  discount: string;
  rating: string;
  reviewsCount: string;
  desktopDescription: [string, string];
  mobileDescription: string;
  features: { icon?: string; svg?: string; label: string }[];
  colors: { id: string; name: string; hex: string; mainImage: string; thumbnails: string[] }[];
  bundlePrompt: { title: string; subtitle: string; link: string };
  headerBg: string;
  stageBg: string;
  defaultVariantUrl: string;
}

const PRODUCTS: ProductData[] = [
  {
    id: "on-me-spray",
    numberTag: "1) PERSONAL SAFETY SPRAY",
    categoryTag: "01 - PERSONAL SAFETY SPRAY",
    title: "ON ME SPRAY",
    watermark: "ON ME SPRAY",
    price: "₹555",
    originalPrice: "₹777",
    discount: "28% OFF",
    rating: "(4.9 stars)",
    reviewsCount: "47 reviews",
    desktopDescription: [
      "A personal safety spray designed for quick access when you need it most.",
      "Clips onto your bag or keys and glows in the dark for easy visibility.",
    ],
    mobileDescription:
      "A personal safety spray designed for quick access and easy visibility.",
    features: [
      { svg: "/10test.svg", label: "10 tests per pack" },
      { svg: "/resultsinsec.svg", label: "Results in seconds" },
      { svg: "/phoenw.svg", label: "Pocket friendly" },
      { svg: "/noapp.svg", label: "No app needed" },
    ],
    colors: [
      {
        id: "pink",
        name: "PINK",
        hex: "#FF0E97",
        mainImage: "/images/pinkspray.svg",
        thumbnails: [
          "/images/pinkspray.svg",
          "/onme/Sip Check  (4) 1.png",
          "/onme/Frame 1073716575.png",
          "/onme/image 81.png",
        ],
      },
      {
        id: "silver",
        name: "SILVER",
        hex: "#B8B8B8",
        mainImage: "/images/whitespray.svg",
        thumbnails: [
          "/images/whitespray.svg",
          "/onme/Sip Check  (4) 1.png",
          "/onme/Frame 1073716575.png",
          "/onme/image 81.png",
        ],
      },
    ],
    bundlePrompt: {
      title: "PAIR WITH SIP CHECK - SAVE ₹200",
      subtitle: "The night-out safety duo.",
      link: "#bundle-pack",
    },
    headerBg: "bg-[#0084FF]",
    stageBg: "bg-[#dff0ff]",
    defaultVariantUrl: "https://shop.nazrco.in/products/on-me-spray?variant=49831092420845",
  },
  {
    id: "sip-check",
    numberTag: "2) ANTI DRINK SPIKE STICKERS",
    categoryTag: "02 - ANTI DRINK SPIKE STICKERS",
    title: "SIP CHECK",
    watermark: "SIP CHECK",
    price: "₹333",
    originalPrice: "₹444",
    discount: "25% OFF",
    rating: "(4.5 stars)",
    reviewsCount: "32 reviews",
    desktopDescription: [
      "A drink safety sticker designed to help protect your beverage while you're out.",
      "Seals securely to your glass and peels away easily when you're done.",
    ],
    mobileDescription:
      "A drink safety sticker designed to help protect your beverage while you're out.",
    features: [
      { svg: "/10test.svg", label: "10 tests per pack" },
      { svg: "/resultsinsec.svg", label: "Results in seconds" },
      { svg: "/phoenw.svg", label: "Pocket friendly" },
      { svg: "/noapp.svg", label: "No app needed" },
    ],
    colors: [
      {
        id: "default",
        name: "DEFAULT",
        hex: "#E6007E",
        mainImage: "/SIPCHECK/dfjsk.png",
        thumbnails: [
          "/SIPCHECK/dfjsk.png",
          "/SIPCHECK/dsd.png",
          "/SIPCHECK/dsf.png",
          "/SIPCHECK/sdf.png",
        ],
      },
    ],
    bundlePrompt: {
      title: "PAIR WITH ON ME SPRAY - SAVE ₹200",
      subtitle: "The night-out safety duo.",
      link: "#bundle-pack",
    },
    headerBg: "bg-[#FF0E97]",
    stageBg: "bg-[#ffdfeb]",
    defaultVariantUrl: "https://shop.nazrco.in/products/sip-check",
  },
  {
    id: "bundle-pack",
    numberTag: "3) BUNDLE PACK",
    categoryTag: "03 - THE COMPLETE 360° KIT",
    title: "NAZR 360° BUNDLE",
    watermark: "NAZR 360°",
    price: "₹999",
    originalPrice: "₹1,554",
    discount: "SAVE ₹555",
    rating: "(5.0 stars)",
    reviewsCount: "18 reviews",
    desktopDescription: [
      "A personal safety kit that brings two everyday essentials together.",
      "Includes On Me and Sip Check for confidence wherever you go.",
    ],
    mobileDescription:
      "Two everyday safety essentials in one kit: ON ME and SIP CHECK, made to keep you ready wherever you go.",
    features: [
      { svg: "/10test.svg", label: "10 tests per pack" },
      { svg: "/resultsinsec.svg", label: "Results in seconds" },
      { svg: "/phoenw.svg", label: "Pocket friendly" },
      { svg: "/noapp.svg", label: "No app needed" },
    ],
    colors: [
      {
        id: "bundle",
        name: "DEFAULT",
        hex: "#FF0E97",
        mainImage: "/product360/Group.png",
        thumbnails: [
          "/product360/Group.png",
          "/product360/Sip Check  2.png",
          "/product360/fsj.png",
          "/product360/rver.png",
        ],
      },
    ],
    bundlePrompt: {
      title: "EXCLUSIVE GIFT PACKAGING",
      subtitle: "Ships in an unbranded, tamper-proof discreet shield box.",
      link: "#bundle-pack",
    },
    headerBg: "bg-[#0084FF]",
    stageBg: "bg-[#dff0ff]",
    defaultVariantUrl: "https://shop.nazrco.in/products/bundle",
  },
];

export function ShopProductsSection() {
  return (
    <section className="w-full flex flex-col items-center bg-[#161616] text-[#161616]">
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

function ProductCard({ product }: { product: ProductData }) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const currentColor = product.colors[selectedColorIndex];
  const activeImage = currentColor.thumbnails[selectedImageIndex] || currentColor.mainImage;

  const handleVariantChange = (index: number) => {
    setSelectedColorIndex(index);
    setSelectedImageIndex(0);
  };

  const handleBuyNow = () => {
    trackMetaViewContent({
      content_name: product.title,
      content_ids: [product.id],
      content_type: "product",
      value: parseInt(product.price.replace(/[^0-9]/g, "")) || 0,
      currency: "INR",
    });
    window.open(product.defaultVariantUrl, "_blank");
  };

  return (
    <div id={product.id} className="w-full flex flex-col border-b border-black">
      {/* 1. Full-Width Top Bar */}
      <div className={`w-full ${product.headerBg} py-3 px-5 sm:px-8 md:px-12 flex items-center border-b border-black select-none`}>
        <h2 className="font-[family-name:var(--font-bebas)] text-[#161616] text-[24px] sm:text-[28px] md:text-[32px] font-normal leading-none tracking-[-0.02em] uppercase m-0">
          {product.numberTag}
        </h2>
      </div>

      {/* 2. Main Two-Column Split Container */}
      <div className="w-full flex flex-col lg:flex-row min-h-[680px] lg:min-h-[720px]">
        {/* Left Column: Stage & Pedestal */}
        <div className={`w-full lg:w-[50%] xl:w-[52%] ${product.stageBg} relative flex flex-col justify-between items-center p-6 sm:p-8 md:p-10 lg:border-r border-black overflow-hidden select-none`}>
          {/* Subheader Bar inside stage */}
          <div className="w-full flex justify-between items-center z-20 text-[#161616]/80 font-['Inter',_sans-serif] text-[12px] sm:text-[13px] tracking-wider uppercase font-semibold">
            <span>{product.categoryTag}</span>
            <span>01 / 04</span>
          </div>

          {/* Huge Faint Watermark Typography */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <span className="font-[family-name:var(--font-bebas)] text-black/[0.07] text-[100px] sm:text-[140px] md:text-[180px] xl:text-[210px] leading-[0.8] tracking-tight uppercase text-center select-none whitespace-pre-line px-4">
              {product.watermark}
            </span>
          </div>

          {/* Center Product Stage */}
          <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center py-6 sm:py-8">
            <div className="relative z-20 w-[260px] sm:w-[320px] md:w-[380px] h-[300px] sm:h-[360px] md:h-[420px] flex items-center justify-center transition-all duration-300 transform hover:scale-105">
              <Image
                src={activeImage}
                alt={product.title}
                fill
                priority
                className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.2)]"
                sizes="(max-width: 768px) 320px, 450px"
              />
            </div>
          </div>

          {/* Bottom Thumbnail Gallery Selector */}
          <div className="relative z-20 w-full flex justify-center items-center gap-3 sm:gap-4 pt-2">
            {currentColor.thumbnails.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative w-[60px] sm:w-[72px] md:w-[80px] h-[54px] sm:h-[64px] md:h-[70px] rounded-[10px] sm:rounded-[12px] overflow-hidden bg-white/80 transition-all border-2 ${
                  selectedImageIndex === idx
                    ? "border-black shadow-sm"
                    : "border-transparent hover:border-black/20 opacity-80 hover:opacity-100"
                }`}
              >
                <Image
                  src={thumb}
                  alt={`${product.title} view ${idx + 1}`}
                  fill
                  className="object-contain p-1.5"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Product Details Card */}
        <div className="w-full lg:w-[50%] xl:w-[48%] bg-[#FAF7F5] flex flex-col justify-between p-6 sm:p-9 md:p-12 lg:p-14 text-[#161616]">
          <div className="flex flex-col gap-5">
            {/* Top Category Tag & Title Row */}
            <div className="flex flex-col gap-1">
              <span className="text-[#FF0E97] font-semibold text-[13px] sm:text-[14px] uppercase tracking-widest">
                {product.categoryTag}
              </span>
              <div className="flex justify-between items-start gap-4">
                <h3 className="font-[family-name:var(--font-bebas)] text-[44px] sm:text-[56px] md:text-[64px] font-normal leading-[0.92] tracking-[-0.02em] text-[#161616] m-0">
                  {product.title}
                </h3>
                {/* Price Display */}
                <div className="flex flex-col items-end shrink-0">
                  <span className="font-bold text-[32px] sm:text-[38px] leading-none text-[#161616]">
                    {product.price}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-black/40 line-through text-[14px]">
                      {product.originalPrice}
                    </span>
                    <span className="bg-[#FF0E97] text-white font-bold text-[11px] px-1.5 py-0.5 rounded tracking-wide uppercase">
                      {product.discount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-0.5 text-[#FF0E97]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-[15px] h-[15px] fill-current" />
                  ))}
                </div>
                <span className="text-[13px] font-medium text-black/70">
                  <strong className="text-black font-semibold">{product.rating}</strong> • {product.reviewsCount}
                </span>
              </div>
            </div>

            {/* Description: 2 distinct lines on desktop, concise copy on mobile */}
            <div className="font-['Inter',_sans-serif] text-[15px] sm:text-[16px] leading-[150%] text-black/80 max-w-[560px]">
              {/* Mobile version */}
              <p className="block sm:hidden">
                {product.mobileDescription}
              </p>
              {/* Desktop version: strictly 2 separate lines */}
              <p className="hidden sm:block">
                <span>{product.desktopDescription[0]}</span>
                <br />
                <span>{product.desktopDescription[1]}</span>
              </p>
            </div>

            {/* 2x2 Feature Pills matching mockup */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 max-w-[540px]">
              {product.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-3 sm:py-3.5 rounded-[16px] sm:rounded-[18px] bg-[#F5F3EF] border border-black/[0.04] shadow-2xs"
                >
                  <span className="shrink-0 flex items-center justify-center">
                    {feat.svg ? (
                      <Image
                        src={feat.svg}
                        alt=""
                        width={18}
                        height={18}
                        className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] object-contain shrink-0"
                      />
                    ) : (
                      <>
                        {feat.icon === "stream" && <Target className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] text-[#E6007E]" strokeWidth={2} />}
                        {feat.icon === "glow" && <Sparkles className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] text-[#E6007E]" strokeWidth={2} />}
                        {feat.icon === "pocket" && <Smartphone className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] text-[#E6007E]" strokeWidth={2} />}
                        {feat.icon === "dye" && <Eye className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] text-[#E6007E]" strokeWidth={2} />}
                        {feat.icon === "spray" && <Target className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] text-[#E6007E]" strokeWidth={2} />}
                        {feat.icon === "pouch" && <Package className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] text-[#E6007E]" strokeWidth={2} />}
                        {feat.icon === "truck" && <Truck className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px] text-[#E6007E]" strokeWidth={2} />}
                      </>
                    )}
                  </span>
                  <span className="text-[13px] sm:text-[14px] font-normal sm:font-medium text-[#161616] leading-tight">
                    {feat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Colour Selector - only for on-me-spray */}
            {product.id === "on-me-spray" && (
              <div className="flex flex-col gap-2.5 pt-1">
                {/* Dynamic Colour Label */}
                <div
                  className="flex items-center gap-1.5 uppercase select-none tracking-[0.05em] text-[13px] sm:text-[14px]"
                  style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
                >
                  <span className="font-bold text-[#555555]">COLOUR —</span>
                  <span className="font-extrabold text-[#161616]">
                    {product.colors[selectedColorIndex]?.name || "PINK"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {product.colors.map((color, idx) => (
                    <button
                      key={color.id}
                      onClick={() => handleVariantChange(idx)}
                      className={`flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-5 py-2 rounded-full text-[13px] uppercase transition-all cursor-pointer ${
                        selectedColorIndex === idx
                          ? "bg-white text-black font-bold border-2 border-black shadow-xs"
                          : "bg-white text-black/75 font-medium border border-black/15 hover:border-black/35"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-[2px] shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Button: Single VIEW MORE Button linked to PDP */}
            <div className="w-full pt-1">
              <button
                onClick={handleBuyNow}
                className="w-full bg-[#E6007E] hover:bg-[#d0006f] active:scale-[0.99] text-white font-bold py-3.5 sm:py-4 px-6 rounded-full text-[15px] sm:text-[16px] uppercase tracking-wider shadow-sm transition-all text-center cursor-pointer block"
              >
                VIEW MORE
              </button>
            </div>

            {/* Pair with Bundle Upsell Banner - for on-me-spray and sip-check */}
            {(product.id === "on-me-spray" || product.id === "sip-check") && (
              <div
                style={{ border: "1px solid #E6007E" }}
                className="mt-1 p-3.5 sm:p-4 rounded-[22px] sm:rounded-[24px] bg-[#FCE2ED] flex flex-row items-center justify-between gap-2.5 sm:gap-4 transition-all"
              >
                <div className="flex flex-col min-w-0">
                  <span
                    style={{
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                      fontWeight: 800,
                      fontSize: "12px",
                      lineHeight: "15.63px",
                      letterSpacing: "0px",
                      verticalAlign: "middle",
                      textTransform: "uppercase",
                    }}
                    className="text-[#090507]"
                  >
                    {product.id === "on-me-spray" ? (
                      <>
                        <span className="block whitespace-nowrap">PAIR WITH SIP CHECK -</span>
                        <span className="block whitespace-nowrap">SAVE ₹200</span>
                      </>
                    ) : (
                      <>
                        <span className="block whitespace-nowrap">PAIR WITH ON ME SPRAY -</span>
                        <span className="block whitespace-nowrap">SAVE ₹200</span>
                      </>
                    )}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: "12px",
                      lineHeight: "18px",
                      letterSpacing: "0px",
                      verticalAlign: "middle",
                      color: "#404040",
                    }}
                    className="mt-0.5 sm:mt-1"
                  >
                    {product.bundlePrompt.subtitle}
                  </span>
                </div>
                <a
                  href={product.bundlePrompt.link}
                  className="inline-flex items-center justify-center bg-[#E6007E] hover:bg-[#d0006f] active:scale-95 text-white text-[11px] sm:text-[13px] font-bold px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full uppercase tracking-wider shrink-0 transition-all shadow-sm whitespace-nowrap"
                >
                  <span>GET THE BUNDLE →</span>
                </a>
              </div>
            )}
          </div>

          {/* Shipping & Trust Guarantees */}
          <div
            className="pt-4 mt-2 border-t border-black/10 flex flex-wrap items-center justify-center text-center gap-x-2.5 sm:gap-x-3 gap-y-1 uppercase select-none text-[#737373] w-full"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "11px",
              lineHeight: "16.5px",
              letterSpacing: "0.55px",
              color: "#737373",
            }}
          >
            <span className="inline-flex items-center gap-1.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] inline-block shrink-0" />
              3-DAY DELIVERY
            </span>
            <span>DISCREET SHIELD PACKAGING</span>
            <span className="text-[#737373]/50">/</span>
            <span>FREE OVER ₹999</span>
            <span className="text-[#737373]/50">/</span>
            <span>EASY RETURNS</span>
            <span className="text-[#737373]/50">/</span>
          </div>
        </div>
      </div>
    </div>
  );
}
