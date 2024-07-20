/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['softstar.s3.amazonaws.com'],
  },
};

export default nextConfig;
