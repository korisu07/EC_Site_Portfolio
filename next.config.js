const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

// @ts-check
/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    isProduction: isProduction,
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, context) => {
    config.watchOptions = {
      poll: 4000,
      aggregateTimeout: 300,
    };
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
