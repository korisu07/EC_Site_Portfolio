/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  env: {
    isProduction: isProduction,
  },
};

module.exports = nextConfig;
