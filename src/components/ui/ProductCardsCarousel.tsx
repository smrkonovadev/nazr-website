"use client";

import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "1) ON ME SPRAY",
    bgImage: "/images/PINKGRADPRO.svg",
    image: "/images/my-new-spray.webp",
    borderColor: "border-[#EC008C]",
  },
  {
    id: 2,
    title: "2) SIP CHECK STICKERS",
    bgImage: "/images/PURPLEGRADPRO.svg",
    image: "/images/productsip.webp",
    borderColor: "border-[#4338CA]",
  },
  {
    id: 3,
    title: "3) BUNDLE PACK",
    bgImage: "/images/PINKGRADPRO.svg",
    image: "/images/product365.webp",
    borderColor: "border-[#EC008C]",
  }
];

export function ProductCardsCarousel() {
  const renderTitle = (title: string) => {
    const match = title.match(/^(\d+\))(.*)$/);
    if (match) {
      return (
        <>
          <span className="font-semibold mr-1" style={{ fontFamily: 'sans-serif' }}>{match[1]}</span>
          {match[2]}
        </>
      );
    }
    return title;
  };

  return (
    <section className="w-full bg-[#161616] relative z-50 py-12 md:py-16">

      {/* Desktop view only: Normal smooth flow, side-by-side cards without sticky pin */}
      <div className="hidden md:block w-full max-w-[1440px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="w-full flex flex-col items-center text-center px-4 mb-8 md:mb-10">
          <h2
            className="m-0 text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[48px] md:text-[90px] lg:text-[110px] xl:text-[120px] leading-[88%] tracking-[-0.03em] uppercase text-center w-full"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "88%",
              letterSpacing: "-0.03em",
              color: "#FFF9EB",
            }}
          >
            OUR PRODUCTS
          </h2>

          <p 
            className="m-0 text-[#FFF9EB] font-normal text-[14px] md:text-[16px] xl:text-[20px] leading-[135%] tracking-[-0.03em] text-center max-w-[840px] w-full mt-2 md:mt-3" 
            style={{
              fontFamily: "Inter, var(--font-inter), sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "135%",
              letterSpacing: "-0.03em",
              color: "#FFF9EB",
            }}
          >
            Everything in the Nazr ecosystem is built with the one idea that protection fits into your life, not the other way around. Thoughtfully designed. Quietly powerful. Always within reach.
          </p>
        </div>

        {/* Normal horizontal row of product cards */}
        <div className="w-full flex justify-center gap-6 lg:gap-8 overflow-x-auto no-scrollbar py-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`shrink-0 rounded-[16px] overflow-hidden relative group border-[5px] ${card.borderColor}`}
              style={{
                height: "540px",
                width: "420px",
                maxWidth: "100%",
                borderRadius: "16px",
                borderWidth: "5px",
              }}
            >
              {/* Gradient SVG Background */}
              <img
                src={card.bgImage}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
              />

              {/* Card Header Overlay */}
              <div className="absolute top-0 left-0 right-0 p-6 lg:p-8 flex justify-between items-start gap-[20px] z-20 pointer-events-none">
                <h3
                  className="m-0 text-[#FFF9EB] uppercase drop-shadow-sm max-w-[65%] mt-1"
                  style={{
                    fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "30px",
                    lineHeight: "140%",
                    letterSpacing: "0%",
                    color: "#FFF9EB",
                  }}
                >
                  {renderTitle(card.title)}
                </h3>

                <button
                  className="shrink-0 flex items-center justify-center bg-[#FFFDF0] hover:bg-[#f5ead0] transition-colors text-[#161616] font-normal text-[14px] leading-[150%] rounded-[4px] shadow-sm whitespace-nowrap pointer-events-auto cursor-pointer"
                  style={{
                    width: "111px",
                    height: "40px",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Shop now
                </button>
              </div>

              {/* Product Image on Pedestal */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className={`z-10 transition-transform duration-500 ease-out ${
                  card.id === 1
                    ? 'object-contain scale-[0.92] group-hover:scale-[0.97] translate-y-2'
                    : card.id === 2
                    ? 'object-contain scale-[1.25] group-hover:scale-[1.30] translate-y-3'
                    : 'object-contain scale-[1.05] group-hover:scale-[1.10] translate-y-2'
                }`}
                sizes="420px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view only: Header + horizontal swipe track */}
      <div className="block md:hidden w-full pt-4 pb-4 overflow-hidden bg-[#161616]">
        {/* Mobile Header */}
        <div className="w-full flex flex-col items-center text-center px-4 mb-5">
          <h2
            className="m-0 text-[#FFF9EB] font-[family-name:var(--font-bebas)] font-normal text-[44px] leading-[90%] tracking-[-0.03em] uppercase text-center w-full"
            style={{
              fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "90%",
              letterSpacing: "-0.03em",
              color: "#FFF9EB",
            }}
          >
            OUR PRODUCTS
          </h2>

          <p 
            className="m-0 text-[#FFF9EB] font-normal text-[15px] leading-[140%] tracking-[-0.03em] text-center max-w-[840px] w-full mt-[8px]" 
            style={{
              fontFamily: "Inter, var(--font-inter), sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "140%",
              letterSpacing: "-0.03em",
              color: "#FFF9EB",
            }}
          >
            Everything in the Nazr ecosystem is built with the one idea that protection fits into your life, not the other way around. Thoughtfully designed. Quietly powerful. Always within reach.
          </p>
        </div>

        {/* Mobile Cards Track */}
        <div className="w-full overflow-x-auto no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex flex-row gap-4 px-4 w-max">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`shrink-0 w-[320px] min-w-[320px] h-[340px] rounded-[16px] overflow-hidden relative group border-[4px] ${card.borderColor}`}
                style={{ opacity: 1, transform: "rotate(0deg)" }}
              >
                {/* Gradient SVG Background */}
                <img
                  src={card.bgImage}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover object-center z-0"
                />

                {/* Card Header Overlay */}
                <div className="absolute top-0 left-0 right-0 p-5 flex justify-between items-start gap-[16px] z-20 pointer-events-none">
                  <h3
                    className="m-0 text-[#FFF9EB] uppercase drop-shadow-sm max-w-[65%] mt-1"
                    style={{
                      fontFamily: "var(--font-bebas), 'Bebas Neue', sans-serif",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "26px",
                      lineHeight: "140%",
                      letterSpacing: "0%",
                      color: "#FFF9EB",
                    }}
                  >
                    {renderTitle(card.title)}
                  </h3>

                  <button
                    className="shrink-0 flex items-center justify-center bg-[#FFFDF0] hover:bg-[#f5ead0] transition-colors text-[#161616] font-normal text-[12px] leading-[150%] rounded-[4px] shadow-sm whitespace-nowrap pointer-events-auto cursor-pointer"
                    style={{
                      width: "95px",
                      height: "36px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Shop now
                  </button>
                </div>

                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={`z-10 transition-transform duration-500 ease-out ${
                    card.id === 1
                      ? 'object-contain scale-[0.86] translate-y-6'
                      : card.id === 2
                      ? 'object-contain scale-[1.08] translate-y-6'
                      : 'object-contain scale-[0.96] translate-y-6'
                  }`}
                  sizes="320px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
