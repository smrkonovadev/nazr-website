import { ProductData } from "./types";

const NOISE_DATA_URL = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export const BLUE_HEADER_GRADIENT = `${NOISE_DATA_URL}, linear-gradient(270deg, #171C38 0%, #1F2E61 15%, #26458C 30%, #3361B8 50%, #4785E0 70%, #80B8F5 85%, #D1EBFF 100%)`;

export const PINK_HEADER_GRADIENT = `${NOISE_DATA_URL}, linear-gradient(270deg, #730A38 0%, #940D47 15%, #B80F59 35%, #D9146B 55%, #EB4D8C 72%, #F28CB8 85%, #FAD1E0 100%)`;

export const productsData: ProductData[] = [
  {
    id: "pepper-spray",
    indexText: "1) PERSONAL SAFETY SPRAY",
    headerBg: BLUE_HEADER_GRADIENT,
    headerTextColor: "#161616",
    contentBg: "#DDEFFF",
    titleLines: ["ON ME", "SPRAY"],
    imageSrc: "/images/pinkspryfinal.svg",
    imageAlt: "Podium and Spray",
    imageTransformClass: "md:transform md:translate-x-28 md:translate-y-8 translate-x-10 translate-y-4",
    imageWidthHeightClass: "w-[460px] h-[420px] md:w-[680px] md:h-[590px]",
    description: "A personal safety spray designed for quick access when you need it most. Clips onto your bag or keys and glows in the dark for easy visibility.",
    price: "₹555",
    originalPrice: "₹777",
    rating: 5,
    reviews: "(4.9 stars) • 47 reviews",
    hasVariants: true,
    url: "https://shop.nazrco.in/products/on-me-spray",
    variants: [
      { id: "pink", name: "Pink", imageSrc: "/images/spray-pink.webp", mainImageSrc: "/images/pinkspryfinal.svg", color: "#FF0E97", variantUrl: "https://shop.nazrco.in/products/on-me-spray?variant=49831092420845" },
      { id: "white", name: "White", imageSrc: "/images/spray-white.webp", mainImageSrc: "/images/whitesprayfinal.svg", color: "#FFF9EB", variantUrl: "https://shop.nazrco.in/products/on-me-spray?variant=49831092453613" }
    ],
    zIndex: 10
  },
  {
    id: "sip-check",
    indexText: "2] ANTI DRINK SPIKE STICKERS",
    headerBg: PINK_HEADER_GRADIENT,
    headerTextColor: "#161616",
    contentBg: "#FCE4EC",
    titleLines: ["SIP", "CHECK"],
    imageSrc: "/images/shop/shop-3.webp",
    imageAlt: "Sip Check Product",
    imageTransformClass: "md:transform md:translate-x-28 md:translate-y-30 translate-x-10 translate-y-16",
    imageWidthHeightClass: "w-[400px] h-[360px] md:w-[580px] md:h-[500px]",
    description: "A drink safety sticker designed to help protect your beverage while you're out. Seals securely to your glass and peels away easily when you're done.",
    price: "₹333",
    originalPrice: "₹444",
    rating: 5,
    reviews: "(4.5 stars) • 32 reviews",
    hasVariants: false,
    url: "https://shop.nazrco.in/products/sip-check",
    zIndex: 20
  },
  {
    id: "nazr-360",
    indexText: "3] BUNDLE PACK",
    headerBg: BLUE_HEADER_GRADIENT,
    headerTextColor: "#161616",
    contentBg: "#DDEFFF",
    titleLines: ["NAZR", "360°"],
    imageSrc: "/images/shop/shop-2.webp",
    imageAlt: "Nazr 360 Bundle",
    imageTransformClass: "md:transform md:translate-x-28 md:translate-y-48 translate-x-10 translate-y-20",
    imageWidthHeightClass: "w-[580px] h-[520px] md:w-[580px] md:h-[500px]",
    description: "A personal safety kit that brings two everyday essentials together. Includes On Me and Sip Check for confidence wherever you go.",
    price: "₹999",
    originalPrice: "₹1111",
    rating: 5,
    reviews: "(5.0 stars) • 18 reviews",
    hasVariants: false,
    url: "https://shop.nazrco.in/products/bundle",
    zIndex: 30
  }
];
