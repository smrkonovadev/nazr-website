"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
}

const DEFAULT_POSTS: InstagramPost[] = [
  {
    id: "1",
    media_url: "/images/1stfromleft.webp",
    permalink: "https://www.instagram.com/nazr.360/",
    caption: "Nazr 360",
  },
  {
    id: "2",
    media_url: "/images/new26.webp",
    permalink: "https://www.instagram.com/nazr.360/",
    caption: "On Me Safety Spray",
  },
  {
    id: "3",
    media_url: "/images/com.webp",
    permalink: "https://www.instagram.com/nazr.360/",
    caption: "Building India's safety ecosystem",
  },
  {
    id: "4",
    media_url: "/images/new27.webp",
    permalink: "https://www.instagram.com/nazr.360/",
    caption: "Nazr Safety Accessories",
  },
  {
    id: "5",
    media_url: "/images/new28.webp",
    permalink: "https://www.instagram.com/nazr.360/",
    caption: "Sip Check & Protection",
  },
  {
    id: "6",
    media_url: "/images/bottomleft3.webp",
    permalink: "https://www.instagram.com/nazr.360/",
    caption: "Nazr Community",
  },
];

export function SocialMediaSection() {
  const [posts, setPosts] = useState<InstagramPost[]>(DEFAULT_POSTS);

  useEffect(() => {
    async function fetchFeed() {
      try {
        const res = await fetch("/api/instagram");
        if (res.ok) {
          const data = await res.json();
          if (data.posts && Array.isArray(data.posts) && data.posts.length > 0) {
            setPosts(data.posts);
          }
        }
      } catch (err) {
        console.error("Could not load Instagram live feed, using fallbacks:", err);
      }
    }
    fetchFeed();
  }, []);

  const getPost = (index: number): InstagramPost => posts[index] || DEFAULT_POSTS[index];

  return (
    <section className="w-full bg-[#161616] flex justify-center pt-12 pb-12 md:pt-0 md:pb-32 px-4 md:px-[30px] lg:px-[30px]">
      <div className="w-full max-w-[338px] aspect-[338/212.42] md:aspect-[1220/730] md:max-w-[1220px] md:h-auto bg-white relative flex flex-col overflow-hidden mx-auto border-[2.04px] border-[#EDEDED] md:border-0 rounded-[6.99px] md:rounded-[48px] md:p-[45px_50px_45px_50px]">
        <div className="w-[1220px] md:contents origin-top-left flex flex-col scale-[0.27705]" style={{ padding: "45px 50px 0 50px" }}>
          {/* Profile Header */}
          <a
            href="https://www.instagram.com/nazr.360/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 mb-8 md:mb-8 shrink-0 relative -top-[20px] hover:opacity-80 transition-opacity"
            style={{ perspective: "1000px" }}
          >
            {/* Profile Icon */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5 }}
              className="relative w-[88px] h-[88px] shrink-0 rounded-full overflow-hidden"
            >
              <Image
                unoptimized
                quality={100}
                src="/images/Favicon-03 (1).png"
                alt="Profile"
                fill
                className="object-cover"
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
                @NAZR.360
              </h3>
              <p className="m-0 text-[#161616] text-[17px] font-sans mt-0 tracking-tight">
                Building India&apos;s first women&apos;s safety ecosystem
              </p>
            </motion.div>
          </a>
        </div>

        {/* The 6 image boxes in a custom masonry grid */}
        <div
          className="w-full h-full absolute top-0 left-0 md:relative md:flex-1 md:grid gap-[20px] pointer-events-none md:pointer-events-auto"
          style={{
            gridTemplateColumns: "19.82fr 19.82fr 19.82fr 31.81fr",
            gridTemplateRows: "1fr 1fr",
          }}
        >
          {/* Col 1: Item 0 (Top Left) */}
          <motion.a
            href={getPost(0).permalink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="group absolute md:relative pointer-events-auto max-md:top-[21.12%] max-md:left-[3.44%] max-md:w-[19.82%] max-md:h-[35.52%] max-md:rounded-[4.66px] max-md:border-[0.15px] max-md:border-black max-md:overflow-hidden rounded-[12px] md:rounded-[20px] overflow-hidden block"
            style={{ gridColumn: "span 1", gridRow: "span 1" }}
          >
            <Image
              unoptimized
              quality={100}
              src={getPost(0).media_url}
              alt={getPost(0).caption || "Instagram post"}
              fill
              className="object-cover md:object-fill group-hover:scale-105 transition-transform duration-500"
            />
          </motion.a>

          {/* Col 2 & 3: Item 1 (Top Middle) */}
          <motion.a
            href={getPost(1).permalink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="group absolute md:relative pointer-events-auto max-md:top-[21.12%] max-md:left-[24.57%] max-md:w-[40.94%] max-md:h-[35.52%] max-md:rounded-[4.66px] max-md:border-[0.15px] max-md:border-black max-md:overflow-hidden rounded-[12px] md:rounded-[20px] overflow-hidden block"
            style={{ gridColumn: "span 2", gridRow: "span 1" }}
          >
            <Image
              unoptimized
              quality={100}
              src={getPost(1).media_url}
              alt={getPost(1).caption || "Instagram post"}
              fill
              className="object-cover md:object-fill group-hover:scale-105 transition-transform duration-500"
            />
          </motion.a>

          {/* Col 4: Item 2 (Right, Spans full height) */}
          <motion.a
            href={getPost(2).permalink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="group absolute md:relative pointer-events-auto max-md:top-[21.12%] max-md:left-[66.81%] max-md:w-[31.81%] max-md:h-[73.11%] max-md:rounded-[4.66px] max-md:border-[0.15px] max-md:border-black max-md:overflow-hidden rounded-[16px] md:rounded-[24px] overflow-hidden block"
            style={{ gridColumn: "span 1", gridRow: "span 2" }}
          >
            <Image
              unoptimized
              quality={100}
              src={getPost(2).media_url}
              alt={getPost(2).caption || "Instagram post"}
              fill
              className="object-cover md:object-fill group-hover:scale-105 transition-transform duration-500"
            />
          </motion.a>

          {/* Col 1: Item 3 (Bottom Left) */}
          <motion.a
            href={getPost(3).permalink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="group absolute md:relative pointer-events-auto max-md:top-[58.7%] max-md:left-[3.44%] max-md:w-[19.82%] max-md:h-[35.52%] max-md:rounded-[4.66px] max-md:border-[0.15px] max-md:border-black max-md:overflow-hidden rounded-[12px] md:rounded-[20px] overflow-hidden block"
            style={{ gridColumn: "span 1", gridRow: "span 1" }}
          >
            <Image
              unoptimized
              quality={100}
              src={getPost(3).media_url}
              alt={getPost(3).caption || "Instagram post"}
              fill
              className="object-cover md:object-fill group-hover:scale-105 transition-transform duration-500"
            />
          </motion.a>

          {/* Col 2: Item 4 (Bottom Middle Left) */}
          <motion.a
            href={getPost(4).permalink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
            className="group absolute md:relative pointer-events-auto max-md:top-[58.7%] max-md:left-[24.57%] max-md:w-[19.82%] max-md:h-[35.52%] max-md:rounded-[4.66px] max-md:border-[0.15px] max-md:border-black max-md:overflow-hidden rounded-[12px] md:rounded-[20px] overflow-hidden block"
            style={{ gridColumn: "span 1", gridRow: "span 1" }}
          >
            <Image
              unoptimized
              quality={100}
              src={getPost(4).media_url}
              alt={getPost(4).caption || "Instagram post"}
              fill
              className="object-cover md:object-fill group-hover:scale-105 transition-transform duration-500"
            />
          </motion.a>

          {/* Col 3: Item 5 (Bottom Middle Right) */}
          <motion.a
            href={getPost(5).permalink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            className="group absolute md:relative pointer-events-auto max-md:top-[58.7%] max-md:left-[45.69%] max-md:w-[19.82%] max-md:h-[35.52%] max-md:rounded-[4.66px] max-md:border-[0.15px] max-md:border-black max-md:overflow-hidden rounded-[12px] md:rounded-[20px] overflow-hidden block"
            style={{ gridColumn: "span 1", gridRow: "span 1" }}
          >
            <Image
              unoptimized
              quality={100}
              src={getPost(5).media_url}
              alt={getPost(5).caption || "Instagram post"}
              fill
              className="object-cover md:object-fill group-hover:scale-105 transition-transform duration-500"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
