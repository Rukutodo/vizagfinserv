import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache for optimized assets
  },
  async rewrites() {
    return [
      {
        source: "/Logo.svg",
        destination: "/logo.svg",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/calculators/sip-calculator",
        destination: "/calculators?tab=sip",
        permanent: true,
      },
      {
        source: "/calculators/step-up-calculator",
        destination: "/calculators?tab=stepup",
        permanent: true,
      },
      {
        source: "/calculators/retirement-calculator",
        destination: "/calculators?tab=retirement",
        permanent: true,
      },
      {
        source: "/calculators/swp-calculator",
        destination: "/calculators?tab=swp",
        permanent: true,
      },
      {
        source: "/calculators/inflation-calculator",
        destination: "/calculators?tab=inflation",
        permanent: true,
      },
      {
        source: "/calculators/emi-calculator",
        destination: "/calculators?tab=emi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
