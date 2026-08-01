import { NextResponse } from "next/server";

export interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  media_type?: string;
  thumbnail_url?: string;
}

// Fallback images in case no API token is configured or API fails
const FALLBACK_POSTS: InstagramPost[] = [
  {
    id: "1",
    media_url: "/images/1stfromleft.webp",
    permalink: "https://www.instagram.com/nazr.360/",
    caption: "Twitter Card - Nazr 360",
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

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN || process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;

  if (!token) {
    return NextResponse.json({
      posts: FALLBACK_POSTS,
      isFallback: true,
      message: "No INSTAGRAM_ACCESS_TOKEN provided in env. Showing default posts.",
    });
  }

  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${token}&limit=6`;
    const res = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      throw new Error(`Instagram API responded with status ${res.status}`);
    }

    const data = await res.json();

    if (!data.data || !Array.isArray(data.data)) {
      throw new Error("Invalid response format from Instagram API");
    }

    const posts: InstagramPost[] = data.data.map((item: any) => ({
      id: item.id,
      media_url: item.media_type === "VIDEO" ? item.thumbnail_url || item.media_url : item.media_url,
      permalink: item.permalink || "https://www.instagram.com/nazr.360/",
      caption: item.caption || "",
      media_type: item.media_type,
    }));

    // Fill remaining spots if less than 6 returned
    while (posts.length < 6) {
      posts.push(FALLBACK_POSTS[posts.length % FALLBACK_POSTS.length]);
    }

    return NextResponse.json({
      posts: posts.slice(0, 6),
      isFallback: false,
    });
  } catch (error: any) {
    console.error("Instagram API Fetch Error:", error.message || error);
    return NextResponse.json({
      posts: FALLBACK_POSTS,
      isFallback: true,
      error: error.message || "Failed to fetch Instagram posts",
    });
  }
}
