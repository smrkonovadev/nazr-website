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
  selectedVariant: string;
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
    <div className="w-full md:w-[40%] px-6 md:pl-8 md:pr-12 flex flex-col justify-center overflow-y-auto">
      {/* Description Text */}
      <p className="font-['Inter',_sans-serif] text-[#161616] text-[18px] md:text-[20px] font-bold leading-[1.3] max-w-[408px] mb-5 tracking-[-0.02em]">
        {description}
      </p>

      {/* Price and Rating */}
      <div className="flex items-center gap-4 mb-6">
        <span className="font-[family-name:var(--font-bebas)] text-[#161616] text-[52px] leading-none">
          {price}
        </span>
        <div className="h-[36px] w-[2px] bg-black"></div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1 text-black">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${
                  star <= Math.floor(rating) ? "fill-black text-black" : "text-black"
                }`}
              />
            ))}
          </div>
          <span className="font-['Inter',_sans-serif] text-[13px] text-black font-medium mt-0.5">
            {reviews}
          </span>
        </div>
      </div>

      {/* Variant Selector */}
      {hasVariants && variants && (
        <div className="mb-5">
          <h4 className="font-[family-name:var(--font-bebas)] text-[#161616] text-[22px] mb-3 leading-none">
            VARIANT
          </h4>
          <div className="flex gap-4">
            {variants.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVariant(v.id)}
                className={`w-[96px] h-[110px] rounded-[6px] border-[3px] flex flex-col items-center justify-between p-2 transition-all ${
                  selectedVariant === v.id ? "border-black bg-transparent" : "border-black/30 bg-transparent"
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
      <div className="flex flex-row gap-[8px] w-full max-w-[440px]">
        <button className="group flex-1 bg-[#312E2E] border border-[#FFF9EB] text-[#FFF9EB] h-[50px] rounded-[8px] font-[family-name:var(--font-bebas)] text-[18px] tracking-[0.05em] flex items-center justify-center hover:bg-black transition-colors uppercase">
          Add To Cart
          <ShoppingBag className="w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 ease-in-out" />
        </button>
        <button className="flex-1 bg-[#312E2E] border border-[#FFF9EB] text-[#FFF9EB] h-[50px] rounded-[8px] font-[family-name:var(--font-bebas)] text-[18px] tracking-[0.05em] flex items-center justify-center gap-2 hover:bg-black transition-colors uppercase">
          View More
        </button>
      </div>
    </div>
  );
}
