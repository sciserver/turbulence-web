/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  '@mui/icons-material',
]);

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  output: 'standalone',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    };
    return config;
  },
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/home',
        permanent: true
      },
      {
        source: '/database/cutout',
        destination: 'http://turbulence.idies.jhu.edu/cutout/',
        permanent: true
      },
      {
        source: '/contact',
        destination: 'mailto:turbulence@lists.johnshopkins.edu',
        permanent: true
      }
    ]
  }
});

