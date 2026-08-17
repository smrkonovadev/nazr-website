import React from "react";
import Image from "next/image";
import Link from "next/link";
import { trackMetaViewContent } from "@/components/MetaPixel";

interface ProductImageProps {
  productId?: string;
  productTitle?: string;
  price?: string;
  titleLines: string[];
  imageSrc: string;
  imageAlt: string;
  imageTransformClass: string;
  imageWidthHeightClass: string;
  url: string;
}

export function ProductImage({
  productId,
  productTitle,
  price,
  titleLines,
  imageSrc,
  imageAlt,
  imageTransformClass,
  imageWidthHeightClass,
  url,
}: ProductImageProps) {
  const isEnlargedMobile =
    imageSrc.includes("SHOPPRO2") ||
    imageSrc.includes("SHOPPRO3") ||
    imageAlt.toLowerCase().includes("bundle") ||
    imageAlt.toLowerCase().includes("sip") ||
    titleLines.join("").includes("360") ||
    titleLines.join("").includes("SIP");

  const handleProductClick = () => {
    const numericPrice = parseFloat((price || "").replace(/[^0-9.]/g, "")) || 0;
    trackMetaViewContent({
      content_name: productTitle || (productId === "pepper-spray" ? "On Me Pepper Spray" : "Product"),
      content_ids: [productId === "pepper-spray" ? "on-me-pepper-spray" : (productId || "product")],
      content_type: "product",
      value: numericPrice,
      currency: "INR",
    });
  };

  return (
    <div className="w-full flex-1 md:flex-none md:w-[60%] md:border-r border-black relative flex flex-col justify-start md:justify-end items-center overflow-hidden pt-4 md:pt-6 pb-2 md:py-20">
      {/* Huge Typography Background */}
      <div className="relative md:absolute md:top-8 md:left-12 pointer-events-none z-10 w-full px-6 md:px-0 mb-2 md:mb-2 text-left flex justify-between items-start md:block">
        <h3 className="font-[family-name:var(--font-bebas)] text-[#161616] text-[36px] leading-[1] md:text-[140px] md:leading-[0.85] tracking-[-0.03em] m-0 flex flex-wrap gap-1.5 md:block">
          {titleLines.map((line, idx) => (
            <React.Fragment key={idx}>
              <span>{line}</span> {idx < titleLines.length - 1 && <br className="hidden md:block" />}
            </React.Fragment>
          ))}
        </h3>
        
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleProductClick}
          className="pointer-events-auto md:hidden px-4 py-2 bg-[#2A2828] text-[#FFF9EB] rounded-[6px] font-[family-name:var(--font-bebas)] text-[14px] tracking-[0.05em] flex items-center justify-center hover:bg-black transition-colors uppercase shrink-0 mt-1"
        >
          View More
        </Link>
      </div>

      {/* Product Image — clickable to PDP */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-1 w-full min-h-[160px]">
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleProductClick}
          className={`relative ${imageWidthHeightClass} z-20 pointer-events-auto cursor-pointer ${imageTransformClass} max-md:!transform-none max-md:!translate-x-0 max-md:!translate-y-0 ${isEnlargedMobile
            ? "max-md:!w-[270px] max-md:!h-[200px] max-md:scale-[1.65] max-md:origin-center"
            : "max-md:!w-[280px] max-md:!h-[220px] max-md:scale-[1.5] max-md:origin-center"
            } max-md:mx-auto max-md:relative hover:opacity-95 transition-opacity`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
          />
        </Link>
      </div>
    </div>
  );
}
