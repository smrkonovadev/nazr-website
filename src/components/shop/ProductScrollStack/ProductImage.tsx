import React from "react";
import Image from "next/image";

interface ProductImageProps {
  titleLines: string[];
  imageSrc: string;
  imageAlt: string;
  imageTransformClass: string;
  imageWidthHeightClass: string;
}

export function ProductImage({
  titleLines,
  imageSrc,
  imageAlt,
  imageTransformClass,
  imageWidthHeightClass,
}: ProductImageProps) {
  return (
    <div className="w-full md:w-[60%] md:border-r border-black relative flex flex-col justify-start md:justify-end items-center overflow-hidden pt-6 pb-2 md:py-20">
      {/* Huge Typography Background */}
      <div className="relative md:absolute md:top-8 md:left-12 pointer-events-none z-10 w-full px-6 md:px-0 mb-4 md:mb-2 text-left">
        <h3 className="font-[family-name:var(--font-bebas)] text-[#161616] text-[48px] leading-[0.9] md:text-[140px] md:leading-[0.85] tracking-[-0.03em] m-0">
          {titleLines.map((line, idx) => (
            <React.Fragment key={idx}>
              {line} {idx < titleLines.length - 1 && <br className="hidden md:block" />}
            </React.Fragment>
          ))}
        </h3>
      </div>

      {/* Product Image — static, no animation */}
      <div className="relative z-20 flex flex-col items-center justify-end w-full">
        <div className={`relative ${imageWidthHeightClass} z-20 pointer-events-none ${imageTransformClass} max-md:!transform-none max-md:!translate-x-0 max-md:!translate-y-0 max-md:!w-[200px] max-md:!h-[180px] max-md:mx-auto max-md:relative`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
