/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/600x400.png',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false
    }
    return config
  }
}

module.exports = nextConfig
