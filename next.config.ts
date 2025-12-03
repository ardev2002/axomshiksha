import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "axomshiksha.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
