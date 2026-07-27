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

const topRow = [...row1Images, ...row1Images, ...row1Images, ...row1Images];
const bottomRow = [...row2Images, ...row2Images, ...row2Images, ...row2Images];

export function AutoMovingCarousel({ className }: { className?: string }) {
  return (
    <section className={`w-full overflow-hidden pt-0 pb-6 md:pb-10 -mt-2 md:-mt-4 flex flex-col gap-[10px] relative z-20 ${className || "bg-[#FFF1EB]"}`}>

      {/* Top Row - Moves Left to Right */}
      <div className="flex w-max animate-marquee-reverse gap-[10px]" style={{ animationDuration: '60s' }}>
        {topRow.map((src, idx) => (
          <div
            key={`top-${idx}`}
            className="w-[228.36px] h-[186.64px] rounded-[8.78px] shrink-0 relative overflow-hidden"
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
      <div className="flex w-max animate-marquee gap-[10px]" style={{ animationDuration: '60s' }}>
        {bottomRow.map((src, idx) => (
          <div
            key={`bottom-${idx}`}
            className="w-[228.36px] h-[186.64px] rounded-[8.78px] shrink-0 relative overflow-hidden"
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
