if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let n={};const r=e=>a(e,c),f={module:{uri:c},exports:n,require:r};s[c]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(t(...e),n)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/6b_sRvpNt6cCM0AoP_u_8/_buildManifest.js",revision:"32b10a42f9f6f4e6ee850464fcd59748"},{url:"/_next/static/6b_sRvpNt6cCM0AoP_u_8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/2039.cd7539b6b573a9ef.js",revision:"cd7539b6b573a9ef"},{url:"/_next/static/chunks/2446-b8c8d06886a6114e.js",revision:"b8c8d06886a6114e"},{url:"/_next/static/chunks/2447-8107e72db95a2682.js",revision:"8107e72db95a2682"},{url:"/_next/static/chunks/2460.e7a72c54e41fe97b.js",revision:"e7a72c54e41fe97b"},{url:"/_next/static/chunks/2596.97fa55ec54671b54.js",revision:"97fa55ec54671b54"},{url:"/_next/static/chunks/3067-43d6029e4492016a.js",revision:"43d6029e4492016a"},{url:"/_next/static/chunks/3122-e4e93a5b7059c7e2.js",revision:"e4e93a5b7059c7e2"},{url:"/_next/static/chunks/3434.e35b01f8a7cf9920.js",revision:"e35b01f8a7cf9920"},{url:"/_next/static/chunks/467-7de05869312587ff.js",revision:"7de05869312587ff"},{url:"/_next/static/chunks/4718-009bfc1fa3320161.js",revision:"009bfc1fa3320161"},{url:"/_next/static/chunks/551-a44ac9f0afe9ac92.js",revision:"a44ac9f0afe9ac92"},{url:"/_next/static/chunks/5675-1a348e388bf86bb7.js",revision:"1a348e388bf86bb7"},{url:"/_next/static/chunks/5757-112410a9a8bd3d96.js",revision:"112410a9a8bd3d96"},{url:"/_next/static/chunks/5923.304995ca60b26c81.js",revision:"304995ca60b26c81"},{url:"/_next/static/chunks/5973.2547ce3a5e0866d1.js",revision:"2547ce3a5e0866d1"},{url:"/_next/static/chunks/6479.593b1c411b1822b5.js",revision:"593b1c411b1822b5"},{url:"/_next/static/chunks/6968.4debc79c179f3167.js",revision:"4debc79c179f3167"},{url:"/_next/static/chunks/7164.aeff5ce738cfad6e.js",revision:"aeff5ce738cfad6e"},{url:"/_next/static/chunks/7430-8d38f4511a30a86b.js",revision:"8d38f4511a30a86b"},{url:"/_next/static/chunks/75fc9c18-e9ae95234248f008.js",revision:"e9ae95234248f008"},{url:"/_next/static/chunks/8039.976b6195631a4b0c.js",revision:"976b6195631a4b0c"},{url:"/_next/static/chunks/8295-8f7ac028ada2984f.js",revision:"8f7ac028ada2984f"},{url:"/_next/static/chunks/8589-0f719f5312736a0e.js",revision:"0f719f5312736a0e"},{url:"/_next/static/chunks/8860.fae48f35e7b91fc3.js",revision:"fae48f35e7b91fc3"},{url:"/_next/static/chunks/8894-b532f17eb4f6c1e4.js",revision:"b532f17eb4f6c1e4"},{url:"/_next/static/chunks/9321.e822bfae07a17a12.js",revision:"e822bfae07a17a12"},{url:"/_next/static/chunks/959.100bba62ac4cd632.js",revision:"100bba62ac4cd632"},{url:"/_next/static/chunks/bb1f9e7b.038a17e5848e6c2e.js",revision:"038a17e5848e6c2e"},{url:"/_next/static/chunks/framework-d51ece3d757c7ed2.js",revision:"d51ece3d757c7ed2"},{url:"/_next/static/chunks/main-bec7873fcd72296a.js",revision:"bec7873fcd72296a"},{url:"/_next/static/chunks/pages/404-75ee60e2742ec0f1.js",revision:"75ee60e2742ec0f1"},{url:"/_next/static/chunks/pages/500-6eccc8f523e90d50.js",revision:"6eccc8f523e90d50"},{url:"/_next/static/chunks/pages/_app-2b877dbabee5f467.js",revision:"2b877dbabee5f467"},{url:"/_next/static/chunks/pages/_error-7891c9bfcd7b3e53.js",revision:"7891c9bfcd7b3e53"},{url:"/_next/static/chunks/pages/aboutUs-cc1368563aaa4bf9.js",revision:"cc1368563aaa4bf9"},{url:"/_next/static/chunks/pages/cafes-ea2d11cd9aa0cd99.js",revision:"ea2d11cd9aa0cd99"},{url:"/_next/static/chunks/pages/cafes/%5BcafeId%5D-0efca4b4e871cac4.js",revision:"0efca4b4e871cac4"},{url:"/_next/static/chunks/pages/cafes/payment-188235fce7d958a4.js",revision:"188235fce7d958a4"},{url:"/_next/static/chunks/pages/cafesMap-3fdc6787f120ce34.js",revision:"3fdc6787f120ce34"},{url:"/_next/static/chunks/pages/contactUs-40fb73d817f75257.js",revision:"40fb73d817f75257"},{url:"/_next/static/chunks/pages/dashboard-9c918cb8ac8d1489.js",revision:"9c918cb8ac8d1489"},{url:"/_next/static/chunks/pages/dashboard/allItems-77e0bfedeb21629e.js",revision:"77e0bfedeb21629e"},{url:"/_next/static/chunks/pages/dashboard/courses-5aebb7d0d8c861f8.js",revision:"5aebb7d0d8c861f8"},{url:"/_next/static/chunks/pages/dashboard/createOrder-1f89d5fc65371b04.js",revision:"1f89d5fc65371b04"},{url:"/_next/static/chunks/pages/dashboard/editItemMenu/%5Bid%5D-9ed7f52164e3a7e9.js",revision:"9ed7f52164e3a7e9"},{url:"/_next/static/chunks/pages/dashboard/editRequestCafe-bb3a9bd4d01b8040.js",revision:"bb3a9bd4d01b8040"},{url:"/_next/static/chunks/pages/dashboard/events-c5f5c7564530a58a.js",revision:"c5f5c7564530a58a"},{url:"/_next/static/chunks/pages/dashboard/galleryCafe-a820f11af57b5aae.js",revision:"a820f11af57b5aae"},{url:"/_next/static/chunks/pages/dashboard/map-8514a90c069554cd.js",revision:"8514a90c069554cd"},{url:"/_next/static/chunks/pages/dashboard/myFavoriteCafe-e1f0f437315b173e.js",revision:"e1f0f437315b173e"},{url:"/_next/static/chunks/pages/dashboard/myOrders-a5354a486913fd55.js",revision:"a5354a486913fd55"},{url:"/_next/static/chunks/pages/dashboard/order/%5Bid%5D-96fcee0d39aec756.js",revision:"96fcee0d39aec756"},{url:"/_next/static/chunks/pages/dashboard/order/print-9ebd6035956ec44b.js",revision:"9ebd6035956ec44b"},{url:"/_next/static/chunks/pages/dashboard/order/search-893be9770e4816b1.js",revision:"893be9770e4816b1"},{url:"/_next/static/chunks/pages/dashboard/plans-cba9d84f28d139f0.js",revision:"cba9d84f28d139f0"},{url:"/_next/static/chunks/pages/dashboard/qrCode-14b30326e656458a.js",revision:"14b30326e656458a"},{url:"/_next/static/chunks/pages/dashboard/receptor-a4e92dc9369db301.js",revision:"a4e92dc9369db301"},{url:"/_next/static/chunks/pages/dashboard/requestCafe-c2a9c43162066082.js",revision:"c2a9c43162066082"},{url:"/_next/static/chunks/pages/dashboard/reserved-8d170f2445f42cd7.js",revision:"8d170f2445f42cd7"},{url:"/_next/static/chunks/pages/dashboard/suggestion-04eec1cf4a2d54a9.js",revision:"04eec1cf4a2d54a9"},{url:"/_next/static/chunks/pages/features-ec87a9ff30aa6e18.js",revision:"ec87a9ff30aa6e18"},{url:"/_next/static/chunks/pages/index-50a2712a5e10840a.js",revision:"50a2712a5e10840a"},{url:"/_next/static/chunks/pages/link/%5Bid%5D-8e1891f8713d09f3.js",revision:"8e1891f8713d09f3"},{url:"/_next/static/chunks/pages/liveRegister-d0367610010b467d.js",revision:"d0367610010b467d"},{url:"/_next/static/chunks/pages/packages-ad0d9eb807e93805.js",revision:"ad0d9eb807e93805"},{url:"/_next/static/chunks/pages/qrCodeReader-265a3627d0ac0588.js",revision:"265a3627d0ac0588"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-d330f833e9036e48.js",revision:"d330f833e9036e48"},{url:"/_next/static/css/034a18a03f2dbeb9.css",revision:"034a18a03f2dbeb9"},{url:"/_next/static/css/3d29a40eb08ad1d2.css",revision:"3d29a40eb08ad1d2"},{url:"/_next/static/css/bb7fd0b50ab8867c.css",revision:"bb7fd0b50ab8867c"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/assets/icons/icon-128x128.png",revision:"68f828443e8d1c78b5bb752d1eb72c1b"},{url:"/assets/icons/icon-144x144.png",revision:"c9af5988977a2b13628ff2fcb6e8e215"},{url:"/assets/icons/icon-152x152.png",revision:"05f319b376f090c5dec6800f36aca099"},{url:"/assets/icons/icon-192x192.png",revision:"62dff86e69c6314d7ad3f1a8ba563d48"},{url:"/assets/icons/icon-384x384.png",revision:"dbc79293bcb36d0bd8a8fb89642795c4"},{url:"/assets/icons/icon-48x48.png",revision:"0d90a47eb6e738e19e1580f32c2616a7"},{url:"/assets/icons/icon-512x512.png",revision:"579c1800e3e11412beb41434cb04096c"},{url:"/assets/icons/icon-72x72.png",revision:"ddaf504d3fbf82f9b9cffee927476707"},{url:"/assets/icons/icon-96x96.png",revision:"ccc40c11be54b21e6b809cee54f73932"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.eot",revision:"9031bfdcb705c6935dfaeb01c8c48b68"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.ttf",revision:"2a2cd88d8a46202a13d46f478bccc62e"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.woff",revision:"ac2f1bdf2ea9a599bd9c98cdf6a158cd"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.woff2",revision:"0cad5012597169cc565522093b99df74"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-FD-WOL.eot",revision:"79d2383471f394dfbe83842b9e4f37c6"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-FD-WOL.ttf",revision:"1ac3ecd3b480fa8693061aedb2783e8a"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-FD-WOL.woff",revision:"dcfcf40faa00612dc1b5f8e05b2b9153"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-FD-WOL.woff2",revision:"09cc51915d2835f90418e74c4f05c171"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.eot",revision:"5224e26693717bb61f051687f283cfa2"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.ttf",revision:"3c796bfde5f6b46ec5c78a0cdf61b0ce"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.woff",revision:"4527d3aef049abfb941256dc4cefb06d"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.woff2",revision:"608415acb443131f2e9802f06c64e470"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.eot",revision:"f3ccd80571f80cd81acacfb05825d1a5"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.ttf",revision:"5340bb6f45ae63ffea8b8be3e7da5d91"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.woff",revision:"846e26e842bf9f35b5f1ef893e48965e"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.woff2",revision:"420ecdb7aed343f832da0f5063c26582"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.eot",revision:"bdb91cbaa77472ca3a8cee6790201979"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.ttf",revision:"d32ede6479a6fbfb9ae0b974e9ab69c9"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.woff",revision:"40d9e0d00df2bc9665fc119d851aed87"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.woff2",revision:"8b9229349acc797a4e974fc7d7ffcfd1"},{url:"/google3c9c4102a3e62cd5.html",revision:"727ef22455b6610143863266c7d5050d"},{url:"/images/features/Group 537.png",revision:"64c0985231b6bb58747f80e239d2a3db"},{url:"/images/features/Group519.png",revision:"e225556a2ff82c60ae4b9f3bec4ed56b"},{url:"/images/features/Group527.png",revision:"cf29760a9da3576d2dc326463d83a36f"},{url:"/images/features/Group537.png",revision:"e088f1d181c63292d29f540e6e1d2e88"},{url:"/images/features/Rectangle.png",revision:"19158ef8f7ff000962d8cd1b4932c633"},{url:"/images/icons8-cafe-100.png",revision:"6e1d99dd40b8a8cb37a4029a243ceeba"},{url:"/images/perspective_matte.png",revision:"89de41b2cf25b68d6904d7aa01af3d38"},{url:"/images/placeholder.png",revision:"bade74c991011096287010458f7b77d2"},{url:"/logo_dark.ico",revision:"8aafec14f599475c21d516d7ab5be49b"},{url:"/logo_dark.svg",revision:"8aafec14f599475c21d516d7ab5be49b"},{url:"/logo_light.svg",revision:"8d6971ad6d80cdc1c5a46317b8420fe0"},{url:"/manifest.json",revision:"b8259fd1292eb532628fb26e26d5cd04"},{url:"/reactLeflet/marker-icon-2x.png",revision:"73ec3797f19b1916d6509f494446e232"},{url:"/reactLeflet/marker-icon.png",revision:"73ec3797f19b1916d6509f494446e232"},{url:"/reactLeflet/marker-icon2.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/reactLeflet/marker-shadow.png",revision:"8796de98cc302db944947e795b9c81e8"},{url:"/reactLeflet/restaurant.png",revision:"837c106ac78267445586aa7240708641"},{url:"/svg/instagram-svgrepo-com.svg",revision:"e5017f4f95d879d6d4e0e4d995f65232"},{url:"/svg/telegram-svgrepo-com.svg",revision:"c55528d4703de7ee1676b1d86e92af68"},{url:"/svg/whatsapp-svgrepo-com.svg",revision:"41f1fc2e1b39c480f034af11355ae606"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
