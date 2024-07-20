/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'softstar.s3.amazonaws.com',
        port: '',
        pathname: '/items/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/:path*',
      },
    ];
  },
};

export default nextConfig;
