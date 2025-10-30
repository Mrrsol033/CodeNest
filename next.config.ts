import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
    domains: ["cdni.iconscout.com",
    "images.unsplash.com",
    "cdn.pixabay.com",
    "img.freepik.com",], // add more domains if needed
  },
};

export default nextConfig;
