export interface ProductVariant {
  id: string;
  name: string;
  imageSrc: string;
  mainImageSrc?: string;
  color?: string;
}

export interface ProductData {
  id: string;
  indexText: string;
  headerBg: string;
  headerTextColor: string;
  contentBg: string;
  titleLines: string[];
  imageSrc: string;
  imageAlt: string;
  imageTransformClass: string;
  imageWidthHeightClass: string;
  description: string;
  price: string;
  rating: number;
  reviews: string;
  hasVariants: boolean;
  variants?: ProductVariant[];
  url: string;
  gradientSrc?: string;
  zIndex: number;
}
