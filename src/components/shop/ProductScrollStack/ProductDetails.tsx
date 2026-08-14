import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag } from "lucide-react";
import { ProductVariant } from "./types";

function HalfStar({ className = "w-4 h-4 text-black" }: { className?: string }) {
  const id = React.useId();
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={`url(#${id})`}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

interface ProductDetailsProps {
  description: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: string;
  hasVariants: boolean;
  variants?: ProductVariant[];
  url: string;
  selectedVariant: string | null;
  setSelectedVariant: (id: string) => void;
}

export function ProductDetails({
  description,
  price,
  originalPrice,
  rating,
  reviews,
  hasVariants,
  variants,
  url,
  selectedVariant,
  setSelectedVariant,
}: ProductDetailsProps) {
  return (
    <div className="w-full md:w-[40%] px-4 md:pl-8 md:pr-12 pb-6 md:pb-8 flex flex-col justify-end max-md:gap-3 flex-none md:flex-1 mt-auto">
      {/* Description Text */}
      <p className="font-['Inter',_sans-serif] text-[#161616] text-[16px] font-normal leading-[140%] tracking-[-0.03em] md:text-[24px] md:font-semibold md:leading-[140%] md:tracking-[-0.03em] max-w-[440px] mb-3 md:mb-5">
        {description}
      </p>

      {/* Price and Rating */}
      <div className="flex items-center gap-3.5 md:gap-4 mb-3 md:mb-6">
        <div className="flex items-baseline gap-2 md:gap-2.5">
          <span className="font-[family-name:var(--font-bebas)] text-[#161616] text-[38px] md:text-[52px] leading-none">
            {price}
          </span>
          {originalPrice && (
            <span className="font-[family-name:var(--font-bebas)] text-[#161616] text-[26px] md:text-[36px] line-through leading-none decoration-1 md:decoration-2">
              {originalPrice}
            </span>
          )}
        </div>
        <div className="h-[26px] md:h-[36px] w-[2px] bg-black/30"></div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1 text-black">
            {[1, 2, 3, 4, 5].map((star) => {
              const isHalf = reviews.includes("4.5") && star === 5;
              if (isHalf) {
                return (
                  <HalfStar
                    key={star}
                    className="w-3.5 h-3.5 md:w-4 md:h-4 text-black"
                  />
                );
              }
              return (
                <Star
                  key={star}
                  className="w-3.5 h-3.5 md:w-4 md:h-4 fill-black text-black"
                />
              );
            })}
          </div>
          <span className="font-['Inter',_sans-serif] text-[11px] md:text-[13px] text-black font-medium mt-0.5">
            {reviews}
          </span>
        </div>
      </div>

      {/* Variant Selector */}
      {hasVariants && variants && (
        <div className="mb-4 md:mb-5">
          <h4 className="font-[family-name:var(--font-bebas)] text-[#161616] text-[18px] md:text-[22px] mb-2 md:mb-3 leading-none">
            VARIANT
          </h4>

          {/* Mobile View: Circular Swatches */}
          <div className="flex md:hidden items-center gap-2.5">
            {variants.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelectedVariant(v.id)}
                aria-label={`${v.name} variant`}
                style={{
                  backgroundColor: v.color || (v.id === "pink" ? "#FF0E97" : "#FFF9EB"),
                }}
                className={`w-[20px] h-[20px] rounded-full border border-black transition-all cursor-pointer ${
                  selectedVariant === v.id
                    ? "ring-2 ring-black ring-offset-2 scale-110"
                    : "opacity-100 hover:scale-105"
                }`}
              />
            ))}
          </div>

          {/* Desktop View: Card Selector */}
          <div className="hidden md:flex gap-4">
            {variants.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelectedVariant(v.id)}
                className={`w-[96px] h-[110px] rounded-[8px] border-[2px] flex flex-col items-center justify-between p-2 transition-all ${
                  selectedVariant === v.id ? "border-black bg-white/40" : "border-black/70 bg-transparent"
                }`}
              >
                <div className="relative w-full h-[76px]">
                  <Image src={v.imageSrc} alt={`${v.name} Variant`} fill className="object-contain" />
                </div>
                <span className="font-['Inter',_sans-serif] text-[14px] font-bold text-black">
                  {v.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="w-full max-w-[440px] hidden md:flex justify-start">
        <Link
          href={url}
          className="w-full md:w-[211px] h-[48px] md:h-[54px] px-6 py-2.5 md:py-3 bg-[#2A2828] text-[#FFF9EB] rounded-[8px] font-[family-name:var(--font-bebas)] text-[20px] md:text-[18px] tracking-[0.05em] flex items-center justify-center hover:bg-black transition-colors uppercase"
        >
          View More
        </Link>
      </div>
    </div>
  );
}
