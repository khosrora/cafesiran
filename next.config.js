const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === 'development',
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true,
}) 
//
// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   /* config options here */
// }

// module.exports = nextConfig