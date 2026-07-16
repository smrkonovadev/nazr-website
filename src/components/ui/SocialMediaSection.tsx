"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function SocialMediaSection() {
  return (
    <section className="w-full bg-[#161616] flex justify-center pt-0 pb-10 md:pt-0 md:pb-32 px-4 md:px-[60px] lg:px-[80px]">
      <div
        className="w-full max-w-[338px] aspect-[338/212.42] md:aspect-[1280/730] md:max-w-[1280px] md:h-auto bg-white relative flex flex-col overflow-hidden mx-auto border-[2.04px] border-[#EDEDED] md:border-0 rounded-[6.99px] md:rounded-[48px] md:p-[45px_60px_105px_60px]"
      >
        <div className="w-[1280px] md:contents origin-top-left flex flex-col scale-[0.26406]" style={{ padding: '45px 60px 0 60px' }}>
        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-8 md:mb-8 shrink-0 relative -top-[20px]" style={{ perspective: "1000px" }}>
          {/* Profile Icon */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5 }}
            className="relative w-[88px] h-[88px] shrink-0"
          >
            <Image
              src="/images/elipseface.png"
              alt="Profile"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Text */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="m-0 font-[family-name:var(--font-bebas)] text-black max-[380px]:text-[32px] text-[38px] leading-[90%] tracking-tight">
              ON ME PEPPER SPRAY
            </h3>
            <p className="m-0 text-[#161616] text-[17px] font-sans mt-0 tracking-tight">
              It is a long established fact that a reader will be
            </p>
          </motion.div>
        </div>

        </div>

        {/* The 6 image boxes in a custom masonry grid */}
        <div
          className="w-full h-full absolute top-0 left-0 md:relative md:flex-1 md:grid gap-[20px] pointer-events-none md:pointer-events-auto"
          style={{
            gridTemplateColumns: 'repeat(24, minmax(0, 1fr))',
            gridTemplateRows: '55fr 45fr'
          }}
        >
          {/* Col 1: Twitter Card (Top Left) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="absolute md:relative md:-top-[10px] pointer-events-auto max-md:top-[21.12%] max-md:left-[3.44%] max-md:w-[19.82%] max-md:h-[35.52%] max-md:rounded-[4.66px] max-md:border-[0.15px] max-md:border-black max-md:overflow-hidden"
            style={{ gridColumn: 'span 6', gridRow: 'span 1' }}
          >
            <Image src="/images/1stfromleft.svg" alt="Twitter Card" fill className="object-cover md:object-contain object-left md:scale-[1.12] origin-left" />
          </motion.div>

          {/* Col 2 & 3: Dog (Top Middle) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="absolute md:relative md:-top-[10px] md:-ml-[150px] pointer-events-auto max-md:top-[21.12%] max-md:left-[24.57%] max-md:w-[40.94%] max-md:h-[35.52%] max-md:rounded-[4.66px] max-md:border-[0.15px] max-md:border-black max-md:overflow-hidden"
            style={{ gridColumn: 'span 12', gridRow: 'span 1' }}
          >
            <Image src="/images/2ndfromleft.svg" alt="Dog" fill className="object-cover md:object-contain md:scale-[1.12]" />
          </motion.div>

          {/* Col 4: Discord (Right, Spans full height) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="absolute md:relative md:-left-[5px] md:top-[22.35px] pointer-events-auto max-md:top-[21.12%] max-md:left-[66.81%] max-md:w-[31.81%] max-md:h-[73.11%] max-md:rounded-[4.66px] max-md:border-[0.15px] max-md:border-black max-md:overflow-hidden"
            style={{ gridColumn: 'span 6', gridRow: 'span 2' }}
          >
            <Image src="/images/bigright.svg" alt="Discord" fill className="object-cover md:object-contain object-right md:scale-[1.403] origin-right" />
          </motion.div>

          {/* Col 1: Car (Bottom Left) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="absolute md:relative md:top-[3px] pointer-events-auto max-md:top-[58.7%] max-md:left-[3.44%] max-md:w-[19.82%] max-md:h-[35.52%] max-md:rounded-[4.66px] max-md:border-[0.15px] max-md:border-black max-md:overflow-hidden"
            style={{ gridColumn: 'span 6', gridRow: 'span 1' }}
          >
            <Image src="/images/bottomleft1.svg" alt="Car" fill className="object-cover md:object-contain object-left md:scale-[1.36] origin-top-left" />
          </motion.div>

          {/* Col 2: Pizza (Bottom Middle Left) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            className="absolute md:relative md:top-[3px] md:-ml-[36.5px] pointer-events-auto max-md:top-[58.7%] max-md:left-[24.57%] max-md:w-[19.82%] max-md:h-[35.52%] max-md:rounded-[4.66px] max-md:border-[0.15px] max-md:border-black max-md:overflow-hidden"
            style={{ gridColumn: 'span 6', gridRow: 'span 1' }}
          >
            <Image src="/images/bottomleft2.svg" alt="Pizza" fill className="object-cover md:object-contain object-left md:scale-[1.36] origin-top-left" />
          </motion.div>

          {/* Col 3: Small Tweet (Bottom Middle Right) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            className="absolute md:relative md:top-[3px] md:-ml-[74.5px] pointer-events-auto max-md:top-[58.7%] max-md:left-[45.69%] max-md:w-[19.82%] max-md:h-[35.52%] max-md:rounded-[4.66px] max-md:border-[0.15px] max-md:border-black max-md:overflow-hidden"
            style={{ gridColumn: 'span 6', gridRow: 'span 1' }}
          >
            <Image src="/images/bottomleft3.svg" alt="Tweet" fill className="object-cover md:object-contain object-left md:scale-[1.36] origin-top-left" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
