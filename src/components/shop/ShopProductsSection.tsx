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
  description: string;
  features: { icon: string; label: string }[];
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
    rating: "4.9",
    reviewsCount: "184 verified reviews",
    description:
      "A quick-draw personal safety spray with a 10-foot ballistic stream, UV identifying dye, and glow-in-the-dark quick release clip. Designed to be carried on you, never buried in a bag.",
    features: [
      { icon: "stream", label: "10-foot ballistic stream" },
      { icon: "glow", label: "Glows in the dark" },
      { icon: "pocket", label: "Quick-release carabiner" },
      { icon: "dye", label: "UV identifying marker" },
    ],
    colors: [
      {
        id: "pink",
        name: "HOT PINK",
        hex: "#FF0E97",
        mainImage: "/images/pinkspryfinal.svg",
        thumbnails: [
          "/images/spray-pink.webp",
          "/images/pinkspryfinal.svg",
          "/images/shopt2.webp",
          "/images/shop/shop-1.webp",
        ],
      },
      {
        id: "white",
        name: "ALABASTER WHITE",
        hex: "#F4F4F4",
        mainImage: "/images/whitesprayfinal.svg",
        thumbnails: [
          "/images/spray-white.webp",
          "/images/whitesprayfinal.svg",
          "/images/shopt4.webp",
          "/images/shop/shop-1.webp",
        ],
      },
    ],
    bundlePrompt: {
      title: "PAIR WITH SIP CHECK — SAVE ₹200",
      subtitle: "The night-out safety duo for complete peace of mind.",
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
    price: "₹299",
    originalPrice: "₹399",
    discount: "25% OFF",
    rating: "4.9",
    reviewsCount: "164 verified reviews",
    description:
      "A quick, discreet check before your first sip. Two drops, one sticker, and a clear visual result in seconds. Fits effortlessly in your phone case, cardholder, or clutch.",
    features: [
      { icon: "tests", label: "10 test stickers per pack" },
      { icon: "clock", label: "Results in under 10 seconds" },
      { icon: "pocket", label: "Pocket & clutch friendly" },
      { icon: "app", label: "Zero tech or app required" },
    ],
    colors: [
      {
        id: "blue",
        name: "ELECTRIC BLUE",
        hex: "#0084FF",
        mainImage: "/images/productsip.webp",
        thumbnails: [
          "/images/productsip.webp",
          "/images/SPICHECKPRO.webp",
          "/images/shop/shop-2.webp",
          "/images/shopt3.webp",
        ],
      },
      {
        id: "pink",
        name: "NEON PINK",
        hex: "#FF0E97",
        mainImage: "/images/SPICHECKPRO.webp",
        thumbnails: [
          "/images/SPICHECKPRO.webp",
          "/images/productsip.webp",
          "/images/shop/shop-2.webp",
          "/images/shopt1.webp",
        ],
      },
    ],
    bundlePrompt: {
      title: "PAIR WITH ON ME SPRAY — SAVE ₹200",
      subtitle: "Carry readiness wherever the evening takes you.",
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
    rating: "5.0",
    reviewsCount: "312 verified reviews",
    description:
      "The definitive daily readiness bundle: On Me Pepper Spray, Sip Check Drink Spiking Test Pack, and the bespoke weather-resistant NAZR Shield Pouch — delivered together at maximum value.",
    features: [
      { icon: "spray", label: "1x On Me Pepper Spray" },
      { icon: "tests", label: "1x Sip Check (10 Tests)" },
      { icon: "pouch", label: "1x NAZR Shield Travel Pouch" },
      { icon: "truck", label: "Free Express Shipping Included" },
    ],
    colors: [
      {
        id: "bundle-pink",
        name: "PINK DUO",
        hex: "#FF0E97",
        mainImage: "/images/product365.webp",
        thumbnails: [
          "/images/product365.webp",
          "/images/NAZR360.webp",
          "/images/shop/shop-3.webp",
          "/images/shop/shop-1.webp",
        ],
      },
      {
        id: "bundle-white",
        name: "WHITE DUO",
        hex: "#F4F4F4",
        mainImage: "/images/NAZR360.webp",
        thumbnails: [
          "/images/NAZR360.webp",
          "/images/product365.webp",
          "/images/shop/shop-3.webp",
          "/images/shop/shop-2.webp",
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
    defaultVariantUrl: "https://shop.nazrco.in/products/nazr-360",
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

          {/* Center 3D Pedestal & Product Stage */}
          <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center py-6 sm:py-10">
            {/* 3D Circular Pedestal Base */}
            <div className="relative w-[280px] sm:w-[340px] md:w-[400px] h-[340px] sm:h-[400px] md:h-[440px] flex items-center justify-center">
              {/* Pedestal Bottom Cylinder / Ellipse */}
              <div
                className="absolute bottom-4 sm:bottom-6 w-[240px] sm:w-[300px] md:w-[340px] h-[55px] sm:h-[65px] rounded-[50%] bg-gradient-to-b from-[#FAF8F5] via-[#EAE6E1] to-[#C8C2BA] shadow-[0_30px_50px_rgba(0,0,0,0.15)] border border-white/60"
              />
              <div
                className="absolute bottom-6 sm:bottom-9 w-[220px] sm:w-[280px] md:w-[320px] h-[40px] sm:h-[50px] rounded-[50%] bg-gradient-to-b from-white to-[#F0EDE8] opacity-90"
              />

              {/* Product Render Floating/Standing on Pedestal */}
              <div className="relative z-20 w-[240px] sm:w-[290px] md:w-[330px] h-[300px] sm:h-[350px] md:h-[380px] flex items-center justify-center transition-all duration-300 transform hover:scale-105">
                <Image
                  src={activeImage}
                  alt={product.title}
                  fill
                  priority
                  className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
                  sizes="(max-width: 768px) 280px, 400px"
                />
              </div>
            </div>
          </div>

          {/* Bottom Thumbnail Gallery Selector */}
          <div className="relative z-20 w-full flex justify-center items-center gap-3 sm:gap-4 pt-2">
            {currentColor.thumbnails.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative w-[60px] sm:w-[72px] md:w-[80px] h-[54px] sm:h-[64px] md:h-[70px] rounded-[10px] overflow-hidden bg-white/70 border transition-all ${
                  selectedImageIndex === idx
                    ? "border-[#161616] ring-2 ring-[#161616] scale-105 shadow-md"
                    : "border-black/15 hover:border-black/40 opacity-80 hover:opacity-100"
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
                  <strong className="text-black font-semibold">{product.rating}</strong> | {product.reviewsCount}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="font-['Inter',_sans-serif] text-[15px] sm:text-[16px] leading-[150%] text-black/80 max-w-[560px]">
              {product.description}
            </p>

            {/* 2x2 Feature Pills matching mockup */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 max-w-[540px]">
              {product.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 sm:gap-3.5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-[16px] sm:rounded-[18px] bg-[#EAE5DD] border border-black/[0.04] shadow-2xs"
                >
                  <span className="shrink-0 text-[#161616]">
                    {feat.icon === "tests" && <Box className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px]" strokeWidth={2} />}
                    {feat.icon === "clock" && <Clock className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px]" strokeWidth={2} />}
                    {feat.icon === "pocket" && <Smartphone className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px]" strokeWidth={2} />}
                    {feat.icon === "app" && <Nfc className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px]" strokeWidth={2} />}
                    {feat.icon === "stream" && <Target className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px]" strokeWidth={2} />}
                    {feat.icon === "glow" && <Sparkles className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px]" strokeWidth={2} />}
                    {feat.icon === "dye" && <Eye className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px]" strokeWidth={2} />}
                    {feat.icon === "spray" && <Target className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px]" strokeWidth={2} />}
                    {feat.icon === "pouch" && <Package className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px]" strokeWidth={2} />}
                    {feat.icon === "truck" && <Truck className="w-[18px] sm:w-[20px] h-[18px] sm:h-[20px]" strokeWidth={2} />}
                  </span>
                  <span className="text-[13px] sm:text-[14.5px] font-semibold text-[#161616] leading-tight">
                    {feat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Colour Selector - only for on-me-spray */}
            {product.id === "on-me-spray" && (
              <div className="flex flex-col gap-2 pt-1">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="font-semibold text-black/90 tracking-wide uppercase">
                    Colour — <span className="text-[#FF0E97] font-bold">{currentColor.name}</span>
                  </span>
                  <span className="text-black/40 text-[11px] font-medium uppercase tracking-wider">
                    Edition 02
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colors.map((color, idx) => (
                    <button
                      key={color.id}
                      onClick={() => handleVariantChange(idx)}
                      className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-bold uppercase transition-all cursor-pointer ${
                        selectedColorIndex === idx
                          ? "bg-transparent text-black border-2 border-black shadow-xs"
                          : "bg-white text-black/75 border border-black/15 hover:border-black/35"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name.split(" ").pop()}</span>
                      {selectedColorIndex === idx && <Check className="w-3.5 h-3.5 ml-0.5" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons: Add to Cart & Buy Now */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-[#FF0E97] hover:bg-[#e00c85] active:scale-[0.99] text-white font-bold py-3.5 px-6 rounded-full text-[15px] uppercase tracking-wider shadow-sm transition-all text-center cursor-pointer"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-transparent hover:bg-black/5 active:scale-[0.99] text-[#161616] font-bold py-3.5 px-6 rounded-full border border-black/30 text-[15px] uppercase tracking-wider transition-all text-center cursor-pointer"
              >
                Buy Now
              </button>
            </div>

            {/* Pair with Bundle Upsell Banner */}
            <div className="mt-1 p-3.5 sm:p-4 rounded-[16px] bg-[#FFEBF5] border border-[#FF0E97]/25 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="flex flex-col">
                <span className="font-bold text-[13px] sm:text-[14px] text-[#161616] uppercase tracking-tight">
                  {product.bundlePrompt.title}
                </span>
                <span className="text-[12px] text-black/70">
                  {product.bundlePrompt.subtitle}
                </span>
              </div>
              <a
                href={product.bundlePrompt.link}
                className="inline-flex items-center gap-1.5 bg-[#FF0E97] hover:bg-[#e00c85] text-white text-[12px] font-bold px-4 py-2 rounded-full uppercase tracking-wider shrink-0 transition-colors"
              >
                <span>Get the Bundle</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Shipping & Trust Guarantees */}
          <div className="pt-5 mt-5 border-t border-black/10 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-[10px] sm:text-[11px] font-bold text-black/60 uppercase tracking-wider text-center">
            <span className="inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] inline-block" />
              3-Day Delivery
            </span>
            <span className="text-black/30">/</span>
            <span>Discreet Shield Packaging</span>
            <span className="text-black/30">/</span>
            <span>Free over ₹899</span>
            <span className="text-black/30">/</span>
            <span>Easy Returns</span>
          </div>
        </div>
      </div>
    </div>
  );
}
