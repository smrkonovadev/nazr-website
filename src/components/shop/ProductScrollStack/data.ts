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
    description: "Convenient to locate, powerful enough to protect. Nazr’s On Me Personal Safety Spray is designed to be within reach when you need it the most. With a compact design that can be clipped to your keys or bag and a silicon glow-in-the-dark cap for easy visibility, On Me is ready when you are.",
    price: "₹777",
    rating: 4,
    reviews: "(3.5 stars) • 10 reviews",
    hasVariants: true,
    url: "https://shop.nazrco.in/products/on-me-pepper-spray",
    variants: [
      { id: "pink", name: "Pink", imageSrc: "/images/spray-pink.webp" },
      { id: "white", name: "White", imageSrc: "/images/spray-white.webp" }
    ],
    zIndex: 10
  },
  {
    id: "sip-check",
    indexText: "2) SIP CHECK STICKERS",
    headerBg: "#E5007D",
    headerTextColor: "#161616",
    contentBg: "#FCE4EC",
    titleLines: ["SIP CHECK"],
    imageSrc: "/images/shop/shop-3.webp",
    imageAlt: "Sip Check Product",
    imageTransformClass: "md:transform md:translate-x-28 md:translate-y-30 translate-x-10 translate-y-16",
    imageWidthHeightClass: "w-[400px] h-[360px] md:w-[580px] md:h-[500px]",
    description: "The Sip Check is a discreet drink cover designed to help you be in the moment without worry. An adhesive layer that can be securely attached to your cup and removed once you’re done, this is a seal that ensures nothing unwanted finds its way to your peace of mind.",
    price: "₹444",
    rating: 4,
    reviews: "(3.5 stars) • 10 reviews",
    hasVariants: false,
    url: "https://shop.nazrco.in/products/sip-check",
    zIndex: 20
  },
  {
    id: "nazr-360",
    indexText: "3) NAZR 360° BUNDLE",
    headerBg: "#0E8DFF",
    headerTextColor: "black",
    contentBg: "#DDEFFF",
    titleLines: ["NAZR", "360°"],
    imageSrc: "/images/shop/shop-2.webp",
    imageAlt: "Nazr 360 Bundle",
    imageTransformClass: "md:transform md:translate-x-28 md:translate-y-48 translate-x-10 translate-y-20",
    imageWidthHeightClass: "w-[580px] h-[520px] md:w-[580px] md:h-[500px]",
    description: "Nazr 360° pairs two essentials for everyday peace of mind. The compact On Me designed for quick access, and a pack of Sip Checks to keep your beverage protected. Different tools with one goal: feeling secure and present wherever you go.",
    price: "₹1111",
    rating: 4,
    reviews: "(3.5 stars) • 10 reviews",
    hasVariants: false,
    url: "#",
    zIndex: 30
  }
];
