"use client";

import { useState } from "react";
import { ProductsShowcase } from "./ProductsShowcase";
import { OnMeSpraySection } from "./OnMeSpraySection";

export const carouselData = [
  {
    id: "sip-check",
    image: "/images/blueright.png",
    title: "Sip Check Anti Drink Spike Stickers",
    subtitle: "Because your attention should be on the night, not your drink. Designed to add an extra layer of protection when you're out."
  },
  {
    id: "pepper-spray",
    image: "/images/center.png",
    title: "ON ME PEPPER SPRAY",
    subtitle: "Compact, accessible, and designed to help you create the time and distance needed to get to safety. Doubles as a bag charm and glows in the dark for easy access when visibility is low."
  },
  {
    id: "nazr-360",
    image: "/images/rightimg.png",
    title: "NAZR 360°",
    subtitle: "The essentials, rethought. Personal safety and drink protection in one kit designed for wherever the day, or night, takes you."
  }
];

export function ProductsCarouselWrapper() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with pepper spray in center

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  // Calculate the visible items (left, center, right)
  const leftIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
  const rightIndex = (currentIndex + 1) % carouselData.length;

  return (
    <>
      <ProductsShowcase
        leftImage={carouselData[leftIndex].image}
        centerImage={carouselData[currentIndex].image}
        rightImage={carouselData[rightIndex].image}
      />
      <OnMeSpraySection
        title={carouselData[currentIndex].title}
        subtitle={carouselData[currentIndex].subtitle}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}
