/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "api-bwa-storegg.herokuapp.com",
      "127.0.0.1",
      "bwa-storegg-server-navy.vercel.app",
    ],
  },
};

export default nextConfig;
