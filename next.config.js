/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["localhost", "miconcar.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "miconcar.com",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
