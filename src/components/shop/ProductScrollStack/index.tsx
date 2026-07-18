"use client";

import React from "react";
import { productsData } from "./data";
import { ProductSection } from "./ProductSection";

export function ProductScrollStack() {
  return (
    <div className="w-full bg-[#FFF1EB]">
      {productsData.map((product, idx) => (
        <ProductSection
          key={product.id}
          product={product}
          isFirst={idx === 0}
        />
      ))}
    </div>
  );
}
