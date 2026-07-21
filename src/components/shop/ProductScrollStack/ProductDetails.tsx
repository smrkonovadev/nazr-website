import React from "react";
import Image from "next/image";
import { Star, ShoppingBag } from "lucide-react";
import { ProductVariant } from "./types";

interface ProductDetailsProps {
  description: string;
  price: string;
  rating: number;
  reviews: string;
  hasVariants: boolean;
  variants?: ProductVariant[];
  selectedVariant: string | null;
  setSelectedVariant: (id: string) => void;
}

export function ProductDetails({
  description,
  price,
  rating,
  reviews,
  hasVariants,
  variants,
  selectedVariant,
  setSelectedVariant,
}: ProductDetailsProps) {
  return (
    <div className="w-full md:w-[40%] px-6 md:pl-8 md:pr-12 pb-6 md:pb-8 flex flex-col justify-start md:justify-end overflow-y-auto max-md:gap-4">
      {/* Description Text */}
      <p className="font-['Inter',_sans-serif] text-[#161616] text-[18px] md:text-[20px] font-bold leading-[1.3] max-w-[408px] mb-5 tracking-[-0.02em] hidden md:block">
        {description}
      </p>
      <p className="font-['Inter',_sans-serif] text-[#161616] text-[13px] font-bold leading-[1.3] mb-3 tracking-[-0.02em] md:hidden">
        {description.length > 120 ? `${description.slice(0, 120)}... ` : description}
        {description.length > 120 && <span className="underline cursor-pointer">Read more</span>}
      </p>

      {/* Price and Rating */}
      <div className="flex items-center gap-4 mb-4 md:mb-6">
        <span className="font-[family-name:var(--font-bebas)] text-[#161616] text-[36px] md:text-[52px] leading-none">
          {price}
        </span>
        <div className="h-[24px] md:h-[36px] w-[2px] bg-black"></div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1 text-black">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-3 h-3 md:w-4 md:h-4 ${
                  star <= Math.floor(rating) ? "fill-black text-black" : "text-black"
                }`}
              />
            ))}
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
          <div className="flex gap-3 md:gap-4">
            {variants.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVariant(v.id)}
                className={`w-[80px] h-[90px] md:w-[96px] md:h-[110px] rounded-[6px] border-[2px] md:border-[3px] flex flex-col items-center justify-between p-1.5 md:p-2 transition-all ${
                  selectedVariant === v.id ? "border-[#FF0E97] bg-transparent" : "border-black bg-transparent"
                }`}
              >
                <div className="relative w-full h-[60px] md:h-[76px]">
                  <Image src={v.imageSrc} alt={`${v.name} Variant`} fill className="object-contain" />
                </div>
                <span className="font-['Inter',_sans-serif] text-[12px] md:text-[14px] font-bold text-black">
                  {v.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="w-full max-w-[440px] flex justify-start">
        <button className="w-[180px] md:w-[211px] h-[44px] md:h-[54px] px-6 py-2.5 md:py-3 bg-[#312E2E] border border-[#FFF9EB] text-[#FFF9EB] rounded-[6px] md:rounded-[8px] font-[family-name:var(--font-bebas)] text-[16px] md:text-[18px] tracking-[0.05em] flex items-center justify-center hover:bg-black transition-colors uppercase">
          View More
        </button>
      </div>
    </div>
  );
}
