import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com/shadcn.png",
        port: "",
        pathname: "/**/*.png", 
        search: "",
      },
    ],
  },
};

export default nextConfig;
