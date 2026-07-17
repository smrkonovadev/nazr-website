import Image from "next/image";

const row1Images = [
  "/images/new31.svg",
  "/images/new32.svg",
  "/images/new33.svg",
  "/images/new34.svg",
  "/images/new35.svg",
  "/images/new36.svg",
];

const row2Images = [
  "/images/new37.svg",
  "/images/new38.svg",
  "/images/new39.svg",
  "/images/new40.svg",
  "/images/new41.svg",
  "/images/new42.svg",
];

// Duplicate enough times so half the width covers the largest screens
const topHalf = [...row1Images, ...row1Images];
const topRow = [...topHalf, ...topHalf];

const bottomHalf = [...row2Images, ...row2Images, ...row2Images];
const bottomRow = [...bottomHalf, ...bottomHalf];

export function AutoMovingCarousel({ className }: { className?: string }) {
  return (
    <section className={`w-full overflow-hidden pt-0 pb-8 md:pb-12 flex flex-col gap-3 md:gap-6 relative z-20 ${className || "bg-[#FFF1EB]"}`}>

      {/* Top Row - Moves Left to Right */}
      <div className="flex w-max animate-marquee-reverse gap-3 md:gap-6">
        {topRow.map((src, idx) => (
          <div
            key={`top-${idx}`}
            className="w-[188px] h-[154px] rounded-[7.25px] md:w-[420px] md:h-[350px] shrink-0 relative md:rounded-[32px] overflow-hidden"
          >
            <Image
              src={src}
              alt={`Carousel Image Top ${idx}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Bottom Row - Moves Right to Left */}
      <div className="flex w-max animate-marquee gap-3 md:gap-6">
        {bottomRow.map((src, idx) => (
          <div
            key={`bottom-${idx}`}
            className="w-[188px] h-[154px] rounded-[7.25px] md:w-[420px] md:h-[350px] shrink-0 relative md:rounded-[32px] overflow-hidden"
          >
            <Image
              src={src}
              alt={`Carousel Image Bottom ${idx}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

    </section>
  );
}
