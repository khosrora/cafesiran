// const withPWA = require("next-pwa");



// module.exports = withPWA({
//   reactStrictMode: true,
//   pwa: {
//     dest: "public",
//     register: true,
//     disable: process.env.NODE_ENV === 'development',
//     skipWaiting: true,
//   }
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: false,
  poweredByHeader: false,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});

