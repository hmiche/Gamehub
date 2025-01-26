/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: "/ads.txt",
        destination: "/api/ads.txt",
      },
    ];
  },
};

module.exports = nextConfig;
