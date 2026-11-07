import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  images: {
    // Serve AVIF where supported, WebP otherwise; keep optimized files cached.
    formats: ["image/avif", "image/webp"],
    qualities: [50, 75],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        // Photos, videos and logos dropped into /public: cache in the browser
        // and CDN. (Use a new file name when you replace one.)
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|mp4)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=2592000",
          },
        ],
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
