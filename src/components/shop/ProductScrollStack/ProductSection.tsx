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
  nextProduct?: ProductData;
  zIndex: number;
  isLast?: boolean;
}

export function ProductSection({ product, nextProduct, zIndex, isLast = false }: ProductSectionProps) {
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  return (
    <article
      id={product.id}
      className={styles.panel}
      style={{ zIndex }}
      data-product={product.id}
      data-reveal-panel=""
    >
      <RevealMask 
        accent={nextProduct ? nextProduct.headerBg : product.headerBg}
        textColor={nextProduct ? nextProduct.headerTextColor : product.headerTextColor}
        text={nextProduct ? nextProduct.indexText : ""}
        showDivider={!isLast}
      >
        <div className={styles.page}>
          <section 
            className="w-full h-full flex flex-col"
            style={{ backgroundColor: product.contentBg }}
          >
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
              {(() => {
                const currentVariant = product.variants?.find((v) => v.id === selectedVariant);
                const activeImageSrc = currentVariant?.mainImageSrc || currentVariant?.imageSrc || product.imageSrc;
                const activeImageAlt = currentVariant ? `${product.imageAlt} - ${currentVariant.name}` : product.imageAlt;
                const activeUrl = currentVariant?.variantUrl || product.url;

                return (
                  <>
                    <ProductImage
                      productId={product.id}
                      productTitle={product.titleLines.join(" ")}
                      price={product.price}
                      titleLines={product.titleLines}
                      imageSrc={activeImageSrc}
                      imageAlt={activeImageAlt}
                      imageTransformClass={product.imageTransformClass}
                      imageWidthHeightClass={product.imageWidthHeightClass}
                      url={activeUrl}
                    />
                    <ProductDetails
                      productId={product.id}
                      productTitle={product.titleLines.join(" ")}
                      description={product.description}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      rating={product.rating}
                      reviews={product.reviews}
                      hasVariants={product.hasVariants}
                      variants={product.variants}
                      url={activeUrl}
                      selectedVariant={selectedVariant}
                      setSelectedVariant={setSelectedVariant}
                    />
                  </>
                );
              })()}
            </div>
          </section>
        </div>
      </RevealMask>
    </article>
  );
}
