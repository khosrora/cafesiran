if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const r=e=>a(e,t),d={module:{uri:t},exports:n,require:r};s[t]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(c(...e),n)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/124-b3b57288c3551fe1.js",revision:"b3b57288c3551fe1"},{url:"/_next/static/chunks/2039.1094bf000c5917c6.js",revision:"1094bf000c5917c6"},{url:"/_next/static/chunks/2447-178c2af31cf27f23.js",revision:"178c2af31cf27f23"},{url:"/_next/static/chunks/2460.2ee135fadc4d3272.js",revision:"2ee135fadc4d3272"},{url:"/_next/static/chunks/2523.53e8264796ff76c5.js",revision:"53e8264796ff76c5"},{url:"/_next/static/chunks/2596.ed2c684ae16f3cc4.js",revision:"ed2c684ae16f3cc4"},{url:"/_next/static/chunks/3067-82f914b96192366b.js",revision:"82f914b96192366b"},{url:"/_next/static/chunks/3122-c5aa445dffae926b.js",revision:"c5aa445dffae926b"},{url:"/_next/static/chunks/3434.84abcd19873a07ba.js",revision:"84abcd19873a07ba"},{url:"/_next/static/chunks/5230-48755c3b08180cd2.js",revision:"48755c3b08180cd2"},{url:"/_next/static/chunks/551-42438fa5b2ca7e5b.js",revision:"42438fa5b2ca7e5b"},{url:"/_next/static/chunks/5675-c607c3b88d723de3.js",revision:"c607c3b88d723de3"},{url:"/_next/static/chunks/5923.a903fc8e724e5edb.js",revision:"a903fc8e724e5edb"},{url:"/_next/static/chunks/5973.62c18816b2d0c9ac.js",revision:"62c18816b2d0c9ac"},{url:"/_next/static/chunks/6479.c5f9ff9ca6d1eb1d.js",revision:"c5f9ff9ca6d1eb1d"},{url:"/_next/static/chunks/6592-988f6b8ec258912d.js",revision:"988f6b8ec258912d"},{url:"/_next/static/chunks/6968.5197b34985d3eb41.js",revision:"5197b34985d3eb41"},{url:"/_next/static/chunks/7164.48d9026e77c3bc30.js",revision:"48d9026e77c3bc30"},{url:"/_next/static/chunks/7430-2b9cb7e8726f0ae3.js",revision:"2b9cb7e8726f0ae3"},{url:"/_next/static/chunks/75fc9c18-5a55cb0f13134a2c.js",revision:"5a55cb0f13134a2c"},{url:"/_next/static/chunks/8039.fe0405cf456ebcd4.js",revision:"fe0405cf456ebcd4"},{url:"/_next/static/chunks/8589-9f2166eaad7af076.js",revision:"9f2166eaad7af076"},{url:"/_next/static/chunks/8860.3f13c1c3d80a4016.js",revision:"3f13c1c3d80a4016"},{url:"/_next/static/chunks/8894-4aff169ea64d284c.js",revision:"4aff169ea64d284c"},{url:"/_next/static/chunks/9421-f065712c6a4a2320.js",revision:"f065712c6a4a2320"},{url:"/_next/static/chunks/9460-13ecdef9e7d7a9bb.js",revision:"13ecdef9e7d7a9bb"},{url:"/_next/static/chunks/959.3efd43ca072064d4.js",revision:"3efd43ca072064d4"},{url:"/_next/static/chunks/bb1f9e7b.dc5587203e21d1df.js",revision:"dc5587203e21d1df"},{url:"/_next/static/chunks/framework-4ed89e9640adfb9e.js",revision:"4ed89e9640adfb9e"},{url:"/_next/static/chunks/main-7271a5da73ade6a3.js",revision:"7271a5da73ade6a3"},{url:"/_next/static/chunks/pages/404-abc31e8d74dbc750.js",revision:"abc31e8d74dbc750"},{url:"/_next/static/chunks/pages/500-0819a7c041bb90eb.js",revision:"0819a7c041bb90eb"},{url:"/_next/static/chunks/pages/_app-851e7b1c09893776.js",revision:"851e7b1c09893776"},{url:"/_next/static/chunks/pages/_error-f2496e8b9fdedb89.js",revision:"f2496e8b9fdedb89"},{url:"/_next/static/chunks/pages/aboutUs-10df7cd39fd82d4a.js",revision:"10df7cd39fd82d4a"},{url:"/_next/static/chunks/pages/blogs-13368a47f8c8efbd.js",revision:"13368a47f8c8efbd"},{url:"/_next/static/chunks/pages/blogs/%5Bslug%5D-09d78e56e8f1b728.js",revision:"09d78e56e8f1b728"},{url:"/_next/static/chunks/pages/cafes-32869ddc37a86db9.js",revision:"32869ddc37a86db9"},{url:"/_next/static/chunks/pages/cafes/%5BcafeId%5D-b1a4294a877b63a9.js",revision:"b1a4294a877b63a9"},{url:"/_next/static/chunks/pages/cafes/payment-c3bca5e6a2358a05.js",revision:"c3bca5e6a2358a05"},{url:"/_next/static/chunks/pages/cafesMap-2468b0be6c73b35b.js",revision:"2468b0be6c73b35b"},{url:"/_next/static/chunks/pages/contactUs-9199fdb10265faea.js",revision:"9199fdb10265faea"},{url:"/_next/static/chunks/pages/dashboard-1d4f48b306636332.js",revision:"1d4f48b306636332"},{url:"/_next/static/chunks/pages/dashboard/allItems-93b5b40aba30e560.js",revision:"93b5b40aba30e560"},{url:"/_next/static/chunks/pages/dashboard/comments-01d692eee8642d41.js",revision:"01d692eee8642d41"},{url:"/_next/static/chunks/pages/dashboard/courses-08ed313167c83240.js",revision:"08ed313167c83240"},{url:"/_next/static/chunks/pages/dashboard/createOrder-f42d7b3f6ed1312c.js",revision:"f42d7b3f6ed1312c"},{url:"/_next/static/chunks/pages/dashboard/editItemMenu/%5Bid%5D-c285c63a8f44d1d4.js",revision:"c285c63a8f44d1d4"},{url:"/_next/static/chunks/pages/dashboard/editRequestCafe-2a1e4dd542da9ed7.js",revision:"2a1e4dd542da9ed7"},{url:"/_next/static/chunks/pages/dashboard/events-28f5c8c047e127a2.js",revision:"28f5c8c047e127a2"},{url:"/_next/static/chunks/pages/dashboard/galleryCafe-203461373a5a032b.js",revision:"203461373a5a032b"},{url:"/_next/static/chunks/pages/dashboard/map-1fc624e017f71923.js",revision:"1fc624e017f71923"},{url:"/_next/static/chunks/pages/dashboard/myFavoriteCafe-b1ce54aedcd35045.js",revision:"b1ce54aedcd35045"},{url:"/_next/static/chunks/pages/dashboard/myOrders-dc8aa59d2542e085.js",revision:"dc8aa59d2542e085"},{url:"/_next/static/chunks/pages/dashboard/order/%5Bid%5D-1799688acba01c4f.js",revision:"1799688acba01c4f"},{url:"/_next/static/chunks/pages/dashboard/order/print-92e8740983bc7f2a.js",revision:"92e8740983bc7f2a"},{url:"/_next/static/chunks/pages/dashboard/order/search-8ed8c72b5cfbe14d.js",revision:"8ed8c72b5cfbe14d"},{url:"/_next/static/chunks/pages/dashboard/plans-d7e091554724b60d.js",revision:"d7e091554724b60d"},{url:"/_next/static/chunks/pages/dashboard/qrCode-c779d2b313efb17d.js",revision:"c779d2b313efb17d"},{url:"/_next/static/chunks/pages/dashboard/receptor-a870c750ad7c8f25.js",revision:"a870c750ad7c8f25"},{url:"/_next/static/chunks/pages/dashboard/requestCafe-7dec5783a13f2ef0.js",revision:"7dec5783a13f2ef0"},{url:"/_next/static/chunks/pages/dashboard/reserved-2ec6313c36be530b.js",revision:"2ec6313c36be530b"},{url:"/_next/static/chunks/pages/dashboard/suggestion-a3a4811d013367a4.js",revision:"a3a4811d013367a4"},{url:"/_next/static/chunks/pages/dashboard/vipUsers-d2eebd2fef7a4e40.js",revision:"d2eebd2fef7a4e40"},{url:"/_next/static/chunks/pages/features-ea1cc57d4edec5d5.js",revision:"ea1cc57d4edec5d5"},{url:"/_next/static/chunks/pages/index-236c4946d0175b99.js",revision:"236c4946d0175b99"},{url:"/_next/static/chunks/pages/link/%5Bid%5D-167c7feca0b1b906.js",revision:"167c7feca0b1b906"},{url:"/_next/static/chunks/pages/liveRegister-e1c980a263e890d6.js",revision:"e1c980a263e890d6"},{url:"/_next/static/chunks/pages/packages-d4096b0563d0bb22.js",revision:"d4096b0563d0bb22"},{url:"/_next/static/chunks/pages/qrCodeReader-6b74e23032279391.js",revision:"6b74e23032279391"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-89fd2dc5ef558818.js",revision:"89fd2dc5ef558818"},{url:"/_next/static/css/034a18a03f2dbeb9.css",revision:"034a18a03f2dbeb9"},{url:"/_next/static/css/b4fa22f77482ca44.css",revision:"b4fa22f77482ca44"},{url:"/_next/static/css/bb7fd0b50ab8867c.css",revision:"bb7fd0b50ab8867c"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/_next/static/yHTgDISMjuDqSk3psffWD/_buildManifest.js",revision:"0afc95d21ee2eb8c9f07ff3c0950eb6a"},{url:"/_next/static/yHTgDISMjuDqSk3psffWD/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/icons/icon-128x128.png",revision:"68f828443e8d1c78b5bb752d1eb72c1b"},{url:"/assets/icons/icon-144x144.png",revision:"c9af5988977a2b13628ff2fcb6e8e215"},{url:"/assets/icons/icon-152x152.png",revision:"05f319b376f090c5dec6800f36aca099"},{url:"/assets/icons/icon-192x192.png",revision:"62dff86e69c6314d7ad3f1a8ba563d48"},{url:"/assets/icons/icon-384x384.png",revision:"dbc79293bcb36d0bd8a8fb89642795c4"},{url:"/assets/icons/icon-48x48.png",revision:"0d90a47eb6e738e19e1580f32c2616a7"},{url:"/assets/icons/icon-512x512.png",revision:"579c1800e3e11412beb41434cb04096c"},{url:"/assets/icons/icon-72x72.png",revision:"ddaf504d3fbf82f9b9cffee927476707"},{url:"/assets/icons/icon-96x96.png",revision:"ccc40c11be54b21e6b809cee54f73932"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.eot",revision:"9031bfdcb705c6935dfaeb01c8c48b68"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.ttf",revision:"2a2cd88d8a46202a13d46f478bccc62e"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.woff",revision:"ac2f1bdf2ea9a599bd9c98cdf6a158cd"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.woff2",revision:"0cad5012597169cc565522093b99df74"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-FD-WOL.eot",revision:"79d2383471f394dfbe83842b9e4f37c6"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-FD-WOL.ttf",revision:"1ac3ecd3b480fa8693061aedb2783e8a"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-FD-WOL.woff",revision:"dcfcf40faa00612dc1b5f8e05b2b9153"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-FD-WOL.woff2",revision:"09cc51915d2835f90418e74c4f05c171"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.eot",revision:"5224e26693717bb61f051687f283cfa2"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.ttf",revision:"3c796bfde5f6b46ec5c78a0cdf61b0ce"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.woff",revision:"4527d3aef049abfb941256dc4cefb06d"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.woff2",revision:"608415acb443131f2e9802f06c64e470"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.eot",revision:"f3ccd80571f80cd81acacfb05825d1a5"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.ttf",revision:"5340bb6f45ae63ffea8b8be3e7da5d91"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.woff",revision:"846e26e842bf9f35b5f1ef893e48965e"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.woff2",revision:"420ecdb7aed343f832da0f5063c26582"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.eot",revision:"bdb91cbaa77472ca3a8cee6790201979"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.ttf",revision:"d32ede6479a6fbfb9ae0b974e9ab69c9"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.woff",revision:"40d9e0d00df2bc9665fc119d851aed87"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.woff2",revision:"8b9229349acc797a4e974fc7d7ffcfd1"},{url:"/google3c9c4102a3e62cd5.html",revision:"727ef22455b6610143863266c7d5050d"},{url:"/images/features/cafesMap.webp",revision:"cfa27352e713e34a438d2e16179e7ba6"},{url:"/images/features/menuDigitalDashboard.webp",revision:"79b893ee3d9712945cb78e279dc20838"},{url:"/images/features/menuDigitalItems.webp",revision:"a96740e4062d629d2cb6e53fed5fcf87"},{url:"/images/features/qrCodeMenuDigital.webp",revision:"f49f76679e3df4d8d49be1a74d2b60e8"},{url:"/images/features/reserveTableCafe.webp",revision:"ecb52ef9698dc9bd2bd14312d6b00b3e"},{url:"/images/icons8-cafe-100.png",revision:"6e1d99dd40b8a8cb37a4029a243ceeba"},{url:"/images/perspective_matte.png",revision:"89de41b2cf25b68d6904d7aa01af3d38"},{url:"/images/placeholder.png",revision:"bade74c991011096287010458f7b77d2"},{url:"/js/yektanet.js",revision:"89d35a8d51e5444b04ef2669aac7541b"},{url:"/logo_dark.ico",revision:"8aafec14f599475c21d516d7ab5be49b"},{url:"/logo_dark.svg",revision:"8aafec14f599475c21d516d7ab5be49b"},{url:"/logo_light.svg",revision:"8d6971ad6d80cdc1c5a46317b8420fe0"},{url:"/manifest.json",revision:"b8259fd1292eb532628fb26e26d5cd04"},{url:"/reactLeflet/marker-icon-2x.png",revision:"73ec3797f19b1916d6509f494446e232"},{url:"/reactLeflet/marker-icon.png",revision:"73ec3797f19b1916d6509f494446e232"},{url:"/reactLeflet/marker-icon2.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/reactLeflet/marker-shadow.png",revision:"8796de98cc302db944947e795b9c81e8"},{url:"/reactLeflet/restaurant.png",revision:"837c106ac78267445586aa7240708641"},{url:"/svg/instagram-svgrepo-com.svg",revision:"e5017f4f95d879d6d4e0e4d995f65232"},{url:"/svg/telegram-svgrepo-com.svg",revision:"c55528d4703de7ee1676b1d86e92af68"},{url:"/svg/whatsapp-svgrepo-com.svg",revision:"41f1fc2e1b39c480f034af11355ae606"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
