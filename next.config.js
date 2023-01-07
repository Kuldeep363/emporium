/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'robohash.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
