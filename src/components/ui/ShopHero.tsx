import { ScalableShopCollage } from "./ScalableShopCollage";

export function ShopHero() {
  return (
    <section className="w-full relative flex flex-col items-center justify-center max-md:pt-0 max-md:-mt-[24px] md:pt-0 max-md:pb-0 md:pb-0 overflow-x-clip min-h-[580px]">

      {/* Universal Scalable Collage */}
      <ScalableShopCollage />

    </section>
  );
}
