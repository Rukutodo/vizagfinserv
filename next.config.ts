import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
