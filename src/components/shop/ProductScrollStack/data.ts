import { ProductData } from "./types";

export const productsData: ProductData[] = [
  {
    id: "pepper-spray",
    indexText: "1) PERSONAL SAFETY SPRAY",
    headerBg: "#0E8DFF",
    headerTextColor: "#161616",
    contentBg: "#DDEFFF",
    titleLines: ["ON ME", "SPRAY"],
    imageSrc: "/images/shop/shop-1.webp",
    imageAlt: "Podium and Spray",
    imageTransformClass: "md:transform md:translate-x-28 md:translate-y-8 translate-x-10 translate-y-4",
    imageWidthHeightClass: "w-[400px] h-[360px] md:w-[580px] md:h-[500px]",
    description: "A personal safety spray designed for quick access when you need it most. Clips onto your bag or keys and glows in the dark for easy visibility.",
    price: "₹777",
    rating: 5,
    reviews: "(5 stars) • 10 reviews",
    hasVariants: true,
    url: "https://shop.nazrco.in/products/on-me-pepper-spray",
    gradientSrc: "/images/BLUEGRAD.svg",
    variants: [
      { id: "pink", name: "Pink", imageSrc: "/images/spray-pink.webp", mainImageSrc: "/images/shop/shop-1.webp", color: "#FF0E97" },
      { id: "white", name: "White", imageSrc: "/images/spray-white.webp", mainImageSrc: "/images/whitespray.svg", color: "#FFF9EB" }
    ],
    zIndex: 10
  },
  {
    id: "sip-check",
    indexText: "2] ANTI DRINK SPIKE STICKERS",
    headerBg: "#E5007D",
    headerTextColor: "#161616",
    contentBg: "#FCE4EC",
    titleLines: ["SIP", "CHECK"],
    imageSrc: "/images/shop/shop-3.webp",
    imageAlt: "Sip Check Product",
    imageTransformClass: "md:transform md:translate-x-28 md:translate-y-30 translate-x-10 translate-y-16",
    imageWidthHeightClass: "w-[400px] h-[360px] md:w-[580px] md:h-[500px]",
    description: "A drink safety sticker designed to help protect your beverage while you're out. Seals securely to your glass and peels away easily when you're done.",
    price: "₹444",
    rating: 5,
    reviews: "(5 stars) • 10 reviews",
    hasVariants: false,
    url: "https://shop.nazrco.in/products/sip-check",
    gradientSrc: "/images/PINKGRAD.svg",
    zIndex: 20
  },
  {
    id: "nazr-360",
    indexText: "3] BUNDLE PACK",
    headerBg: "#0E8DFF",
    headerTextColor: "black",
    contentBg: "#DDEFFF",
    titleLines: ["NAZR", "360°"],
    imageSrc: "/images/shop/shop-2.webp",
    imageAlt: "Nazr 360 Bundle",
    imageTransformClass: "md:transform md:translate-x-28 md:translate-y-48 translate-x-10 translate-y-20",
    imageWidthHeightClass: "w-[580px] h-[520px] md:w-[580px] md:h-[500px]",
    description: "A personal safety kit that brings two everyday essentials together. Includes On Me and Sip Check for confidence wherever you go.",
    price: "₹1111",
    rating: 5,
    reviews: "(5 stars) • 10 reviews",
    hasVariants: false,
    url: "#",
    gradientSrc: "/images/BLUEGRAD.svg",
    zIndex: 30
  }
];
