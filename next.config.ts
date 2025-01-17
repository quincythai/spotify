import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co", // Spotify's image domain
        port: "", // No specific port needed for HTTPS
        pathname: "/**", // Match all paths (you can make this more specific if needed)
      },
    ],
  },
};

export default nextConfig;
