const isProduction = process.env.NODE_ENV === 'production';

// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    isProduction: isProduction,
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, context) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  }
};

module.exports = nextConfig;
