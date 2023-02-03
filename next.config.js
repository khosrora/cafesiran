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

// const runtimeCaching = require("next-pwa/cache");
// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   runtimeCaching,
//   buildExcludes: [/middleware-manifest.json$/],
// });

// const nextConfig = withPWA({
//   reactStrictMode: true,
// });
// module.exports = nextConfig;

// /** @type {import('next').NextConfig} */

// const runtimeCaching = require("next-pwa/cache");
// const withPWA = require('next-pwa')({
//   dest: 'public',
//   runtimeCaching , 
//   skipWaiting: true,
//   disable: process.env.NODE_ENV === 'development',
//   register: true,
// });

// module.exports = nextConfig = withPWA({
//   reactStrictMode: true,
//   compress: false,
//   poweredByHeader: false,
//   swcMinify: true,
//   compiler: {
//     removeConsole: process.env.NODE_ENV !== 'development',
//   },
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

module.exports = withPWA(nextConfig);