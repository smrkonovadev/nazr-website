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
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="w-full md:w-[40%] px-4 md:pl-8 md:pr-12 pb-6 md:pb-8 flex flex-col justify-end overflow-y-auto max-md:gap-3 flex-1 mt-auto">
      {/* Description Text */}
      <p className="font-['Inter',_sans-serif] text-[#161616] text-[18px] md:text-[20px] font-bold leading-[1.3] max-w-[408px] mb-5 tracking-[-0.02em] hidden md:block">
        {description}
      </p>
      <p className="font-['Inter',_sans-serif] text-[#161616] text-[13.5px] font-bold leading-[1.3] mb-2 tracking-[-0.02em] md:hidden max-md:max-h-[140px] max-md:overflow-y-auto">
        {isExpanded
          ? description
          : description.length > 95
          ? `${description.slice(0, 95)}... `
          : description}
        {description.length > 95 && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="underline cursor-pointer font-bold inline-block ml-1 text-[#161616]"
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        )}
      </p>

      {/* Price and Rating */}
      <div className="flex items-center gap-4 mb-3 md:mb-6">
        <span className="font-[family-name:var(--font-bebas)] text-[#161616] text-[38px] md:text-[52px] leading-none">
          {price}
        </span>
        <div className="h-[26px] md:h-[36px] w-[2px] bg-black/30"></div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1 text-black">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-3.5 h-3.5 md:w-4 md:h-4 ${
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
                className={`w-[84px] h-[92px] md:w-[96px] md:h-[110px] rounded-[8px] border-[2px] flex flex-col items-center justify-between p-1.5 md:p-2 transition-all ${
                  selectedVariant === v.id ? "border-black bg-white/40" : "border-black/70 bg-transparent"
                }`}
              >
                <div className="relative w-full h-[58px] md:h-[76px]">
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
        <button className="w-full md:w-[211px] h-[48px] md:h-[54px] px-6 py-2.5 md:py-3 bg-[#2A2828] text-[#FFF9EB] rounded-[8px] font-[family-name:var(--font-bebas)] text-[20px] md:text-[18px] tracking-[0.05em] flex items-center justify-center hover:bg-black transition-colors uppercase">
          View More
        </button>
      </div>
    </div>
  );
}
