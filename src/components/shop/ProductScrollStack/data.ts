import { ProductData } from "./types";

export const productsData: ProductData[] = [
  {
    id: "pepper-spray",
    indexText: "1) PERSONAL SAFETY SPRAY",
    headerBg: "#0E8DFF",
    headerTextColor: "#161616",
    contentBg: "#DDEFFF",
    titleLines: ["ON ME", "SPRAY"],
    imageSrc: "/images/center.png",
    imageAlt: "Podium and Spray",
    imageTransformClass: "md:transform md:rotate-[20deg] md:translate-x-20 md:translate-y-10",
    imageWidthHeightClass: "w-[360px] h-[330px] md:w-[460px] md:h-[400px]",
    description: "Convenient to locate, powerful enough to protect. Nazr’s On Me Personal Safety Spray is designed to be within reach when you need it the most. With a compact design that can be clipped to your keys or bag and a silicon glow-in-the-dark cap for easy visibility, On Me is ready when you are.",
    price: "₹777",
    rating: 4,
    reviews: "(3.5 stars) • 10 reviews",
    hasVariants: true,
    variants: [
      { id: "pink", name: "Pink", imageSrc: "/images/spray-pink.png" },
      { id: "white", name: "White", imageSrc: "/images/spray-white.png" }
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
    imageSrc: "/images/SHOPPRO2.svg",
    imageAlt: "Sip Check Product",
    imageTransformClass: "md:transform md:translate-x-20 md:translate-y-10",
    imageWidthHeightClass: "w-[360px] h-[330px] md:w-[460px] md:h-[400px]",
    description: "The Sip Check is a discreet drink cover designed to help you be in the moment without worry. An adhesive layer that can be securely attached to your cup and removed once you’re done, this is a seal that ensures nothing unwanted finds its way to your peace of mind.",
    price: "₹444",
    rating: 4,
    reviews: "(3.5 stars) • 10 reviews",
    hasVariants: false,
    zIndex: 20
  },
  {
    id: "nazr-360",
    indexText: "3) NAZR 360° BUNDLE",
    headerBg: "#0E8DFF",
    headerTextColor: "black",
    contentBg: "#DDEFFF",
    titleLines: ["NAZR", "360°"],
    imageSrc: "/images/SHOPPRO3.svg",
    imageAlt: "Nazr 360 Bundle",
    imageTransformClass: "md:transform md:translate-x-12 md:translate-y-6",
    imageWidthHeightClass: "w-[400px] h-[360px] md:w-[520px] md:h-[440px]",
    description: "Nazr 360° pairs two essentials for everyday peace of mind. The compact On Me designed for quick access, and a pack of Sip Checks to keep your beverage protected. Different tools with one goal: feeling secure and present wherever you go.",
    price: "₹1111",
    rating: 4,
    reviews: "(3.5 stars) • 10 reviews",
    hasVariants: false,
    zIndex: 30
  }
];
