import Image from "next/image";

export function AboutContactUs() {
  return (
    <section className="w-full bg-[#FFF1EB] max-md:pt-4 max-md:pb-[58px] md:py-32 flex flex-col items-center justify-center text-center px-4 relative -mt-[2px] border-none outline-none z-20">
      <div className="flex flex-col items-center max-w-[800px] mx-auto">
        <h2 className="font-[family-name:var(--font-bebas)] text-[#161616] max-[380px]:text-[34px] max-md:text-[42px] md:text-[120px] leading-[90%] tracking-[-0.03em] md:tracking-[-0.02em] m-0 max-md:mb-3 md:mb-6 uppercase">
          JOIN THE CONVERSATION.
        </h2>
        
        <p className="text-[#161616]/80 max-md:text-[18px] md:text-[20px] max-md:leading-[130%] md:leading-relaxed max-w-[650px] font-medium max-md:mb-8 md:mb-10 max-md:px-4">
          NAZR is built through conversations with the people we build for. We'd love to hear yours.
        </p>

        <button className="bg-[#F80090] text-white max-md:px-10 max-md:py-3 md:px-8 md:py-3 rounded-[8px] font-regular max-md:text-[20px] md:text-[18px] hover:bg-[#F80090]/90 transition-colors shadow-lg">
          <span className="hidden md:inline-flex items-center gap-3">
            <Image 
              src="/images/logosvg.svg" 
              alt="Nazr Logo" 
              width={24} 
              height={24} 
              className="w-6 h-6 object-contain invert brightness-0" 
            />
            Join Ecosystem
          </span>
          <span className="md:hidden">Tell us More</span>
        </button>
      </div>
    </section>
  );
}
