import Image from "next/image";
import { Header } from "./Header";

export function AboutHero() {
  return (
    <section className="w-full bg-[#161616] flex justify-center pb-0 md:pb-12">
      <div className="w-full relative px-2 md:px-6 pt-6">
        {/* Main Rounded Image Container */}
        <div className="relative w-full rounded-[24px] md:rounded-[48px] overflow-hidden min-h-[800px] md:min-h-[95vh] flex flex-col justify-between">

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/image2.png"
              alt="About Us Hero"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Subtle bottom gradient just to protect the text readability, removing the dull overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Header Overlay */}
          <div className="relative z-20 w-full pt-0 -mt-4 transform -translate-x-2 md:-translate-x-4">
            <Header variant="transparent" />
          </div>

          {/* Bottom Content Area */}
          <div className="relative z-20 w-full px-6 md:px-12 pb-6 md:pb-10 flex flex-col md:flex-row md:items-end justify-start max-md:gap-6 md:gap-40">

            {/* Left Huge Typography */}
            <h1 className="font-[family-name:var(--font-bebas)] text-white max-md:text-[38px] md:text-[95px] max-md:leading-[100%] md:leading-[90%] max-w-[600px] tracking-[-0.01em] m-0">
              THE WORLD STARES.
              WE BUILT SOMETHING THAT STARES BACK.
            </h1>

            {/* Right Side Content */}
            <div className="flex flex-col items-start md:items-start gap-6 max-w-[400px]">
              <p className="text-white font-bold text-[24px] md:text-[32px] leading-[110%] tracking-[-0.02em]">
                It is a long established fact that a reader will be distracted
              </p>

              <button className="flex items-center gap-2 bg-white text-black px-4 py-1 rounded-[3px] font-semibold hover:bg-white/90 transition-colors">
                <Image
                  src="/images/logosvg.svg"
                  alt="Nazr Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain brightness-0"
                />
                <span className="text-[16px] tracking-tight">Join Ecosystem</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
