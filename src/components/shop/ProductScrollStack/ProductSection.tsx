"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProductData } from "./types";
import { HeaderBar } from "./HeaderBar";
import { ProductImage } from "./ProductImage";
import { ProductDetails } from "./ProductDetails";
import { useProductReveal } from "./useProductReveal";

interface ProductSectionProps {
  product: ProductData;
  isFirst?: boolean;
}

export function ProductSection({ product, isFirst = false }: ProductSectionProps) {
  const [selectedVariant, setSelectedVariant] = useState<string>(
    product.variants?.[0]?.id || "pink"
  );
  const { sectionRef, clipPath } = useProductReveal(isFirst);

  return (
    <section 
      ref={sectionRef} 
      className="w-full sticky top-0 h-screen overflow-hidden flex flex-col"
      style={{ zIndex: product.zIndex }}
    >
      {/* Header bar */}
      <HeaderBar 
        indexText={product.indexText} 
        bg={product.headerBg} 
        textColor={product.headerTextColor} 
      />

      {/* Content wrapper with scroll-driven clip-path reveal */}
      <motion.div
        className="w-full flex-1 flex flex-col md:flex-row min-h-0"
        style={{ 
          backgroundColor: product.contentBg,
          clipPath: isFirst ? "none" : clipPath 
        }}
      >
        <ProductImage
          titleLines={product.titleLines}
          imageSrc={product.imageSrc}
          imageAlt={product.imageAlt}
          imageTransformClass={product.imageTransformClass}
          imageWidthHeightClass={product.imageWidthHeightClass}
        />
        <ProductDetails
          description={product.description}
          price={product.price}
          rating={product.rating}
          reviews={product.reviews}
          hasVariants={product.hasVariants}
          variants={product.variants}
          selectedVariant={selectedVariant}
          setSelectedVariant={setSelectedVariant}
        />
      </motion.div>
    </section>
  );
}
