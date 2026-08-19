import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
