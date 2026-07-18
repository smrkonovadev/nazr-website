"use client";

import React, { useState } from "react";
import { ProductData } from "./types";
import { HeaderBar } from "./HeaderBar";
import { ProductImage } from "./ProductImage";
import { ProductDetails } from "./ProductDetails";
import { RevealMask } from "./RevealMask";
import styles from "./ProductSection.module.css";

interface ProductSectionProps {
  product: ProductData;
  zIndex: number;
  isLast?: boolean;
}

export function ProductSection({ product, zIndex, isLast = false }: ProductSectionProps) {
  const [selectedVariant, setSelectedVariant] = useState<string>(
    product.variants?.[0]?.id || "pink"
  );

  return (
    <article
      className={styles.panel}
      style={{ zIndex }}
      data-product={product.id}
      data-reveal-panel=""
    >
      <RevealMask accent={product.headerBg} showDivider={!isLast}>
        <div className={styles.page}>
          <section className="w-full h-full flex flex-col">
            {/* Header bar */}
            <HeaderBar
              indexText={product.indexText}
              bg={product.headerBg}
              textColor={product.headerTextColor}
            />

            {/* Content area */}
            <div
              className="w-full flex-1 flex flex-col md:flex-row min-h-0"
              style={{ backgroundColor: product.contentBg }}
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
            </div>
          </section>
        </div>
      </RevealMask>
    </article>
  );
}
