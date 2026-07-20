import Image from "next/image";
import { ScalableShopCollage } from "./ScalableShopCollage";

export function ShopHero() {
  return (
    <section className="w-full relative flex flex-col items-center justify-center max-md:pt-0 max-md:-mt-[24px] md:pt-10 max-md:pb-4 md:pb-16 px-4 overflow-x-clip min-h-[580px]">

      {/* Universal Scalable Collage */}
      <ScalableShopCollage />

      {/* Bottom Text Elements */}
      <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-end px-4 md:px-12 max-md:-mt-[110px] md:-mt-[70px] relative z-30 pointer-events-none gap-8 md:gap-0">

        <p className="font-['Switzer',_sans-serif] text-[#161616] text-[20px] font-semibold leading-[1.1] tracking-[-0.03em] uppercase max-md:max-w-[316px] md:max-w-[400px] text-center md:text-left mb-0">
          Discover thoughtfully designed safety essentials for everyday confidence and peace of mind.        </p>

        <p className="font-['Switzer',_sans-serif] text-[#161616] text-[20px] font-semibold leading-[1.1] tracking-[-0.03em] uppercase max-md:max-w-[316px] md:max-w-[400px] text-center md:text-right">
          Beyond a gift.<br /> It’s care, made tangible.        </p>

      </div>
    </section>
  );
}
