import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All storefront imagery is shipped as local, production-ready assets.
  // Vinext's image optimizer cannot reliably process these files in every
  // runtime, so local images must be served directly from /public.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
