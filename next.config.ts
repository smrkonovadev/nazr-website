import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "*.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "scontent*.cdninstagram.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/products/on-me-pepper-spray",
        destination: "https://shop.nazrco.in/products/on-me-spray",
        permanent: true,
      },
      {
        source: "/products/on-me-spray",
        destination: "https://shop.nazrco.in/products/on-me-spray",
        permanent: true,
      },
      {
        source: "/products/sip-check",
        destination: "https://shop.nazrco.in/products/sip-check",
        permanent: true,
      },
      {
        source: "/products/bundle",
        destination: "https://shop.nazrco.in/products/bundle",
        permanent: true,
      },
      {
        source: "/products/:path*",
        destination: "https://shop.nazrco.in/products/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
