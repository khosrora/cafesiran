if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const r=e=>a(e,t),d={module:{uri:t},exports:n,require:r};s[t]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(c(...e),n)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/W0uGvG3j8BS49J3Pd6W1R/_buildManifest.js",revision:"fc141f36ca2a0bd5b636afaadc3719ef"},{url:"/_next/static/W0uGvG3j8BS49J3Pd6W1R/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/124-48b056130777ccba.js",revision:"48b056130777ccba"},{url:"/_next/static/chunks/2039.cd7539b6b573a9ef.js",revision:"cd7539b6b573a9ef"},{url:"/_next/static/chunks/2447-750edbe3afabadbd.js",revision:"750edbe3afabadbd"},{url:"/_next/static/chunks/2460.e7a72c54e41fe97b.js",revision:"e7a72c54e41fe97b"},{url:"/_next/static/chunks/2523.b87e2ac16b4ac80e.js",revision:"b87e2ac16b4ac80e"},{url:"/_next/static/chunks/2596.97fa55ec54671b54.js",revision:"97fa55ec54671b54"},{url:"/_next/static/chunks/3067-43d6029e4492016a.js",revision:"43d6029e4492016a"},{url:"/_next/static/chunks/3122-e4e93a5b7059c7e2.js",revision:"e4e93a5b7059c7e2"},{url:"/_next/static/chunks/3434.e35b01f8a7cf9920.js",revision:"e35b01f8a7cf9920"},{url:"/_next/static/chunks/5230-593b4de184b88fb5.js",revision:"593b4de184b88fb5"},{url:"/_next/static/chunks/551-a44ac9f0afe9ac92.js",revision:"a44ac9f0afe9ac92"},{url:"/_next/static/chunks/5675-1a348e388bf86bb7.js",revision:"1a348e388bf86bb7"},{url:"/_next/static/chunks/5923.304995ca60b26c81.js",revision:"304995ca60b26c81"},{url:"/_next/static/chunks/5973.2547ce3a5e0866d1.js",revision:"2547ce3a5e0866d1"},{url:"/_next/static/chunks/6479.bf6c3fbd48f9e79c.js",revision:"bf6c3fbd48f9e79c"},{url:"/_next/static/chunks/6592-3f811ddd89839978.js",revision:"3f811ddd89839978"},{url:"/_next/static/chunks/6968.4debc79c179f3167.js",revision:"4debc79c179f3167"},{url:"/_next/static/chunks/7164.aeff5ce738cfad6e.js",revision:"aeff5ce738cfad6e"},{url:"/_next/static/chunks/7430-1cb05f9eae904367.js",revision:"1cb05f9eae904367"},{url:"/_next/static/chunks/75fc9c18-e9ae95234248f008.js",revision:"e9ae95234248f008"},{url:"/_next/static/chunks/8039.595d8e428b41900d.js",revision:"595d8e428b41900d"},{url:"/_next/static/chunks/8589-0f719f5312736a0e.js",revision:"0f719f5312736a0e"},{url:"/_next/static/chunks/8860.fae48f35e7b91fc3.js",revision:"fae48f35e7b91fc3"},{url:"/_next/static/chunks/8894-b59bf2d9ca1dd4b9.js",revision:"b59bf2d9ca1dd4b9"},{url:"/_next/static/chunks/9421-22cf64502f8e9cee.js",revision:"22cf64502f8e9cee"},{url:"/_next/static/chunks/9460-5ce96fcd738c4072.js",revision:"5ce96fcd738c4072"},{url:"/_next/static/chunks/959.100bba62ac4cd632.js",revision:"100bba62ac4cd632"},{url:"/_next/static/chunks/bb1f9e7b.038a17e5848e6c2e.js",revision:"038a17e5848e6c2e"},{url:"/_next/static/chunks/framework-d51ece3d757c7ed2.js",revision:"d51ece3d757c7ed2"},{url:"/_next/static/chunks/main-bec7873fcd72296a.js",revision:"bec7873fcd72296a"},{url:"/_next/static/chunks/pages/404-75ee60e2742ec0f1.js",revision:"75ee60e2742ec0f1"},{url:"/_next/static/chunks/pages/500-6eccc8f523e90d50.js",revision:"6eccc8f523e90d50"},{url:"/_next/static/chunks/pages/_app-c1ba18dd7ba24c46.js",revision:"c1ba18dd7ba24c46"},{url:"/_next/static/chunks/pages/_error-7891c9bfcd7b3e53.js",revision:"7891c9bfcd7b3e53"},{url:"/_next/static/chunks/pages/aboutUs-cc1368563aaa4bf9.js",revision:"cc1368563aaa4bf9"},{url:"/_next/static/chunks/pages/cafes-ea2d11cd9aa0cd99.js",revision:"ea2d11cd9aa0cd99"},{url:"/_next/static/chunks/pages/cafes/%5BcafeId%5D-3447dea33c51e114.js",revision:"3447dea33c51e114"},{url:"/_next/static/chunks/pages/cafes/payment-3d4cfacc02a74b52.js",revision:"3d4cfacc02a74b52"},{url:"/_next/static/chunks/pages/cafesMap-1b9e6df266dd3a3a.js",revision:"1b9e6df266dd3a3a"},{url:"/_next/static/chunks/pages/contactUs-40fb73d817f75257.js",revision:"40fb73d817f75257"},{url:"/_next/static/chunks/pages/dashboard-84e797ec761493ea.js",revision:"84e797ec761493ea"},{url:"/_next/static/chunks/pages/dashboard/allItems-323cadd894401fde.js",revision:"323cadd894401fde"},{url:"/_next/static/chunks/pages/dashboard/comments-06dbb388cd9e110c.js",revision:"06dbb388cd9e110c"},{url:"/_next/static/chunks/pages/dashboard/courses-fea77131f8ba94a3.js",revision:"fea77131f8ba94a3"},{url:"/_next/static/chunks/pages/dashboard/createOrder-8317568ccc6b8469.js",revision:"8317568ccc6b8469"},{url:"/_next/static/chunks/pages/dashboard/editItemMenu/%5Bid%5D-6335d5f364ce7c70.js",revision:"6335d5f364ce7c70"},{url:"/_next/static/chunks/pages/dashboard/editRequestCafe-257eb075889d07da.js",revision:"257eb075889d07da"},{url:"/_next/static/chunks/pages/dashboard/events-1fc58d61c23f9dbb.js",revision:"1fc58d61c23f9dbb"},{url:"/_next/static/chunks/pages/dashboard/galleryCafe-7e5746487e31ba7e.js",revision:"7e5746487e31ba7e"},{url:"/_next/static/chunks/pages/dashboard/map-b382375be55f385b.js",revision:"b382375be55f385b"},{url:"/_next/static/chunks/pages/dashboard/myFavoriteCafe-8505bbc65b7b51b9.js",revision:"8505bbc65b7b51b9"},{url:"/_next/static/chunks/pages/dashboard/myOrders-4702cd075a039ba6.js",revision:"4702cd075a039ba6"},{url:"/_next/static/chunks/pages/dashboard/order/%5Bid%5D-15881717a002f57d.js",revision:"15881717a002f57d"},{url:"/_next/static/chunks/pages/dashboard/order/print-9ebd6035956ec44b.js",revision:"9ebd6035956ec44b"},{url:"/_next/static/chunks/pages/dashboard/order/search-c4e245e6f19446d4.js",revision:"c4e245e6f19446d4"},{url:"/_next/static/chunks/pages/dashboard/plans-6fff0879cb351944.js",revision:"6fff0879cb351944"},{url:"/_next/static/chunks/pages/dashboard/qrCode-b6eaf010bb7526fa.js",revision:"b6eaf010bb7526fa"},{url:"/_next/static/chunks/pages/dashboard/receptor-2fee6b27799b4083.js",revision:"2fee6b27799b4083"},{url:"/_next/static/chunks/pages/dashboard/requestCafe-dcfa1f3d00803cea.js",revision:"dcfa1f3d00803cea"},{url:"/_next/static/chunks/pages/dashboard/reserved-3490f4cbb58fef74.js",revision:"3490f4cbb58fef74"},{url:"/_next/static/chunks/pages/dashboard/suggestion-bfbf0bcfcc2ce0d4.js",revision:"bfbf0bcfcc2ce0d4"},{url:"/_next/static/chunks/pages/features-0d6bb665c569a4c5.js",revision:"0d6bb665c569a4c5"},{url:"/_next/static/chunks/pages/index-85f1a7c705d22fb5.js",revision:"85f1a7c705d22fb5"},{url:"/_next/static/chunks/pages/link/%5Bid%5D-8e1891f8713d09f3.js",revision:"8e1891f8713d09f3"},{url:"/_next/static/chunks/pages/liveRegister-d0367610010b467d.js",revision:"d0367610010b467d"},{url:"/_next/static/chunks/pages/packages-ad0d9eb807e93805.js",revision:"ad0d9eb807e93805"},{url:"/_next/static/chunks/pages/qrCodeReader-265a3627d0ac0588.js",revision:"265a3627d0ac0588"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-d983db74d36daae3.js",revision:"d983db74d36daae3"},{url:"/_next/static/css/034a18a03f2dbeb9.css",revision:"034a18a03f2dbeb9"},{url:"/_next/static/css/bb7fd0b50ab8867c.css",revision:"bb7fd0b50ab8867c"},{url:"/_next/static/css/c3e14ec14eb9b4b5.css",revision:"c3e14ec14eb9b4b5"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/assets/icons/icon-128x128.png",revision:"68f828443e8d1c78b5bb752d1eb72c1b"},{url:"/assets/icons/icon-144x144.png",revision:"c9af5988977a2b13628ff2fcb6e8e215"},{url:"/assets/icons/icon-152x152.png",revision:"05f319b376f090c5dec6800f36aca099"},{url:"/assets/icons/icon-192x192.png",revision:"62dff86e69c6314d7ad3f1a8ba563d48"},{url:"/assets/icons/icon-384x384.png",revision:"dbc79293bcb36d0bd8a8fb89642795c4"},{url:"/assets/icons/icon-48x48.png",revision:"0d90a47eb6e738e19e1580f32c2616a7"},{url:"/assets/icons/icon-512x512.png",revision:"579c1800e3e11412beb41434cb04096c"},{url:"/assets/icons/icon-72x72.png",revision:"ddaf504d3fbf82f9b9cffee927476707"},{url:"/assets/icons/icon-96x96.png",revision:"ccc40c11be54b21e6b809cee54f73932"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.eot",revision:"9031bfdcb705c6935dfaeb01c8c48b68"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.ttf",revision:"2a2cd88d8a46202a13d46f478bccc62e"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.woff",revision:"ac2f1bdf2ea9a599bd9c98cdf6a158cd"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.woff2",revision:"0cad5012597169cc565522093b99df74"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-FD-WOL.eot",revision:"79d2383471f394dfbe83842b9e4f37c6"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-FD-WOL.ttf",revision:"1ac3ecd3b480fa8693061aedb2783e8a"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-FD-WOL.woff",revision:"dcfcf40faa00612dc1b5f8e05b2b9153"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-FD-WOL.woff2",revision:"09cc51915d2835f90418e74c4f05c171"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.eot",revision:"5224e26693717bb61f051687f283cfa2"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.ttf",revision:"3c796bfde5f6b46ec5c78a0cdf61b0ce"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.woff",revision:"4527d3aef049abfb941256dc4cefb06d"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.woff2",revision:"608415acb443131f2e9802f06c64e470"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.eot",revision:"f3ccd80571f80cd81acacfb05825d1a5"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.ttf",revision:"5340bb6f45ae63ffea8b8be3e7da5d91"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.woff",revision:"846e26e842bf9f35b5f1ef893e48965e"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.woff2",revision:"420ecdb7aed343f832da0f5063c26582"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.eot",revision:"bdb91cbaa77472ca3a8cee6790201979"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.ttf",revision:"d32ede6479a6fbfb9ae0b974e9ab69c9"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.woff",revision:"40d9e0d00df2bc9665fc119d851aed87"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.woff2",revision:"8b9229349acc797a4e974fc7d7ffcfd1"},{url:"/google3c9c4102a3e62cd5.html",revision:"727ef22455b6610143863266c7d5050d"},{url:"/images/features/cafesMap.webp",revision:"cfa27352e713e34a438d2e16179e7ba6"},{url:"/images/features/menuDigitalDashboard.webp",revision:"79b893ee3d9712945cb78e279dc20838"},{url:"/images/features/menuDigitalItems.webp",revision:"a96740e4062d629d2cb6e53fed5fcf87"},{url:"/images/features/qrCodeMenuDigital.webp",revision:"f49f76679e3df4d8d49be1a74d2b60e8"},{url:"/images/features/reserveTableCafe.webp",revision:"ecb52ef9698dc9bd2bd14312d6b00b3e"},{url:"/images/icons8-cafe-100.png",revision:"6e1d99dd40b8a8cb37a4029a243ceeba"},{url:"/images/perspective_matte.png",revision:"89de41b2cf25b68d6904d7aa01af3d38"},{url:"/images/placeholder.png",revision:"bade74c991011096287010458f7b77d2"},{url:"/logo_dark.ico",revision:"8aafec14f599475c21d516d7ab5be49b"},{url:"/logo_dark.svg",revision:"8aafec14f599475c21d516d7ab5be49b"},{url:"/logo_light.svg",revision:"8d6971ad6d80cdc1c5a46317b8420fe0"},{url:"/manifest.json",revision:"b8259fd1292eb532628fb26e26d5cd04"},{url:"/reactLeflet/marker-icon-2x.png",revision:"73ec3797f19b1916d6509f494446e232"},{url:"/reactLeflet/marker-icon.png",revision:"73ec3797f19b1916d6509f494446e232"},{url:"/reactLeflet/marker-icon2.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/reactLeflet/marker-shadow.png",revision:"8796de98cc302db944947e795b9c81e8"},{url:"/reactLeflet/restaurant.png",revision:"837c106ac78267445586aa7240708641"},{url:"/svg/instagram-svgrepo-com.svg",revision:"e5017f4f95d879d6d4e0e4d995f65232"},{url:"/svg/telegram-svgrepo-com.svg",revision:"c55528d4703de7ee1676b1d86e92af68"},{url:"/svg/whatsapp-svgrepo-com.svg",revision:"41f1fc2e1b39c480f034af11355ae606"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
