if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let n={};const r=e=>a(e,c),f={module:{uri:c},exports:n,require:r};s[c]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(t(...e),n)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1138-4fdd715a4bfc13bd.js",revision:"4fdd715a4bfc13bd"},{url:"/_next/static/chunks/1319-d39b621cace2a1e3.js",revision:"d39b621cace2a1e3"},{url:"/_next/static/chunks/2039.cd7539b6b573a9ef.js",revision:"cd7539b6b573a9ef"},{url:"/_next/static/chunks/2460.88dc2f7d2904348f.js",revision:"88dc2f7d2904348f"},{url:"/_next/static/chunks/2596.9322abb0299af3b5.js",revision:"9322abb0299af3b5"},{url:"/_next/static/chunks/3067-43d6029e4492016a.js",revision:"43d6029e4492016a"},{url:"/_next/static/chunks/4895.3dca3648ad82220c.js",revision:"3dca3648ad82220c"},{url:"/_next/static/chunks/5017-5f8e39f557cfdadb.js",revision:"5f8e39f557cfdadb"},{url:"/_next/static/chunks/5472.b00d2f1e9426437e.js",revision:"b00d2f1e9426437e"},{url:"/_next/static/chunks/551-a44ac9f0afe9ac92.js",revision:"a44ac9f0afe9ac92"},{url:"/_next/static/chunks/5675-1a348e388bf86bb7.js",revision:"1a348e388bf86bb7"},{url:"/_next/static/chunks/5843-651051bf8cb8d21e.js",revision:"651051bf8cb8d21e"},{url:"/_next/static/chunks/5973.f759183489d08316.js",revision:"f759183489d08316"},{url:"/_next/static/chunks/6479.4c477b89fc8d270f.js",revision:"4c477b89fc8d270f"},{url:"/_next/static/chunks/6525-55d49d4e67000099.js",revision:"55d49d4e67000099"},{url:"/_next/static/chunks/6896-cf1495776d6117ea.js",revision:"cf1495776d6117ea"},{url:"/_next/static/chunks/6965-0b194704b5c85080.js",revision:"0b194704b5c85080"},{url:"/_next/static/chunks/6968.02cdd3d5f4e1a0eb.js",revision:"02cdd3d5f4e1a0eb"},{url:"/_next/static/chunks/7164.aeff5ce738cfad6e.js",revision:"aeff5ce738cfad6e"},{url:"/_next/static/chunks/75fc9c18-e9ae95234248f008.js",revision:"e9ae95234248f008"},{url:"/_next/static/chunks/788-a0edfd51d640e3b3.js",revision:"a0edfd51d640e3b3"},{url:"/_next/static/chunks/8039.a3b3b3b2a4e9f87a.js",revision:"a3b3b3b2a4e9f87a"},{url:"/_next/static/chunks/8044-1c411813ee7479ec.js",revision:"1c411813ee7479ec"},{url:"/_next/static/chunks/8589-0f719f5312736a0e.js",revision:"0f719f5312736a0e"},{url:"/_next/static/chunks/8860.fae48f35e7b91fc3.js",revision:"fae48f35e7b91fc3"},{url:"/_next/static/chunks/8878-7fed4a0742e6d31a.js",revision:"7fed4a0742e6d31a"},{url:"/_next/static/chunks/8894-1b8f8e7d9c21c296.js",revision:"1b8f8e7d9c21c296"},{url:"/_next/static/chunks/9321.c9f79c8cd93445b4.js",revision:"c9f79c8cd93445b4"},{url:"/_next/static/chunks/bb1f9e7b.038a17e5848e6c2e.js",revision:"038a17e5848e6c2e"},{url:"/_next/static/chunks/framework-d51ece3d757c7ed2.js",revision:"d51ece3d757c7ed2"},{url:"/_next/static/chunks/main-bec7873fcd72296a.js",revision:"bec7873fcd72296a"},{url:"/_next/static/chunks/pages/404-d9a188bb81aaa6f4.js",revision:"d9a188bb81aaa6f4"},{url:"/_next/static/chunks/pages/500-974b05383f6f1f85.js",revision:"974b05383f6f1f85"},{url:"/_next/static/chunks/pages/_app-ae4ed2a5556a2608.js",revision:"ae4ed2a5556a2608"},{url:"/_next/static/chunks/pages/_error-7891c9bfcd7b3e53.js",revision:"7891c9bfcd7b3e53"},{url:"/_next/static/chunks/pages/aboutUs-1e3e5061c100690b.js",revision:"1e3e5061c100690b"},{url:"/_next/static/chunks/pages/cafes-7d7f15653cd56d96.js",revision:"7d7f15653cd56d96"},{url:"/_next/static/chunks/pages/cafes/%5BcafeId%5D-a4b39f092ef4fc49.js",revision:"a4b39f092ef4fc49"},{url:"/_next/static/chunks/pages/cafes/payment-b43efe54d1edbf74.js",revision:"b43efe54d1edbf74"},{url:"/_next/static/chunks/pages/cafesMap-8fe0d1831ddecee2.js",revision:"8fe0d1831ddecee2"},{url:"/_next/static/chunks/pages/contactUs-47abbbd25036be15.js",revision:"47abbbd25036be15"},{url:"/_next/static/chunks/pages/dashboard-accb06d647692e0c.js",revision:"accb06d647692e0c"},{url:"/_next/static/chunks/pages/dashboard/allItems-2ecfa7f0a64a1e28.js",revision:"2ecfa7f0a64a1e28"},{url:"/_next/static/chunks/pages/dashboard/courses-16d8642e981e5cbc.js",revision:"16d8642e981e5cbc"},{url:"/_next/static/chunks/pages/dashboard/createOrder-a12db5dc9900716b.js",revision:"a12db5dc9900716b"},{url:"/_next/static/chunks/pages/dashboard/editItemMenu/%5Bid%5D-4147148763f7e789.js",revision:"4147148763f7e789"},{url:"/_next/static/chunks/pages/dashboard/editRequestCafe-3d59cec3a4725a49.js",revision:"3d59cec3a4725a49"},{url:"/_next/static/chunks/pages/dashboard/events-f60be09b17e9592b.js",revision:"f60be09b17e9592b"},{url:"/_next/static/chunks/pages/dashboard/galleryCafe-4b9ec850bb7d0496.js",revision:"4b9ec850bb7d0496"},{url:"/_next/static/chunks/pages/dashboard/map-6c98729b514cf43a.js",revision:"6c98729b514cf43a"},{url:"/_next/static/chunks/pages/dashboard/myFavoriteCafe-ab9cb68af57f7df8.js",revision:"ab9cb68af57f7df8"},{url:"/_next/static/chunks/pages/dashboard/myOrders-2fccea4ed628595f.js",revision:"2fccea4ed628595f"},{url:"/_next/static/chunks/pages/dashboard/order/%5Bid%5D-92efe85f26239dbb.js",revision:"92efe85f26239dbb"},{url:"/_next/static/chunks/pages/dashboard/order/print-9ebd6035956ec44b.js",revision:"9ebd6035956ec44b"},{url:"/_next/static/chunks/pages/dashboard/plans-c197d7b428cc718e.js",revision:"c197d7b428cc718e"},{url:"/_next/static/chunks/pages/dashboard/qrCode-13ef666a77af2ab6.js",revision:"13ef666a77af2ab6"},{url:"/_next/static/chunks/pages/dashboard/receptor-1ce400694ce13bd3.js",revision:"1ce400694ce13bd3"},{url:"/_next/static/chunks/pages/dashboard/requestCafe-f0dc90aab6dbb437.js",revision:"f0dc90aab6dbb437"},{url:"/_next/static/chunks/pages/dashboard/reserved-df187ea8d2d66368.js",revision:"df187ea8d2d66368"},{url:"/_next/static/chunks/pages/dashboard/suggestion-a298fea27e50cae0.js",revision:"a298fea27e50cae0"},{url:"/_next/static/chunks/pages/features-44a1eb3b35aa9bf1.js",revision:"44a1eb3b35aa9bf1"},{url:"/_next/static/chunks/pages/index-270952c2e5b440c6.js",revision:"270952c2e5b440c6"},{url:"/_next/static/chunks/pages/link/%5Bid%5D-df45f48fe3c7d18f.js",revision:"df45f48fe3c7d18f"},{url:"/_next/static/chunks/pages/qrCodeReader-72f709d1dfecb80b.js",revision:"72f709d1dfecb80b"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-aff881057661ae00.js",revision:"aff881057661ae00"},{url:"/_next/static/css/034a18a03f2dbeb9.css",revision:"034a18a03f2dbeb9"},{url:"/_next/static/css/2f5d4dc5adf8bdf5.css",revision:"2f5d4dc5adf8bdf5"},{url:"/_next/static/css/709c47024661f2c4.css",revision:"709c47024661f2c4"},{url:"/_next/static/h_0HitkNb2E00vpDBO75a/_buildManifest.js",revision:"2305b9a7c6870d3f55e229c784fe458c"},{url:"/_next/static/h_0HitkNb2E00vpDBO75a/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/alert/38115_download_stones_ringtone_iphone_sms_ringtones.mp3",revision:"8ad73e82ac7dbec3735b305c74913348"},{url:"/assets/icons/icon-128x128.png",revision:"68f828443e8d1c78b5bb752d1eb72c1b"},{url:"/assets/icons/icon-144x144.png",revision:"c9af5988977a2b13628ff2fcb6e8e215"},{url:"/assets/icons/icon-152x152.png",revision:"05f319b376f090c5dec6800f36aca099"},{url:"/assets/icons/icon-192x192.png",revision:"62dff86e69c6314d7ad3f1a8ba563d48"},{url:"/assets/icons/icon-384x384.png",revision:"dbc79293bcb36d0bd8a8fb89642795c4"},{url:"/assets/icons/icon-48x48.png",revision:"0d90a47eb6e738e19e1580f32c2616a7"},{url:"/assets/icons/icon-512x512.png",revision:"579c1800e3e11412beb41434cb04096c"},{url:"/assets/icons/icon-72x72.png",revision:"ddaf504d3fbf82f9b9cffee927476707"},{url:"/assets/icons/icon-96x96.png",revision:"ccc40c11be54b21e6b809cee54f73932"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.eot",revision:"9031bfdcb705c6935dfaeb01c8c48b68"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.ttf",revision:"2a2cd88d8a46202a13d46f478bccc62e"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.woff",revision:"ac2f1bdf2ea9a599bd9c98cdf6a158cd"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.woff2",revision:"0cad5012597169cc565522093b99df74"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-FD-WOL.eot",revision:"79d2383471f394dfbe83842b9e4f37c6"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-FD-WOL.ttf",revision:"1ac3ecd3b480fa8693061aedb2783e8a"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-FD-WOL.woff",revision:"dcfcf40faa00612dc1b5f8e05b2b9153"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-FD-WOL.woff2",revision:"09cc51915d2835f90418e74c4f05c171"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.eot",revision:"5224e26693717bb61f051687f283cfa2"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.ttf",revision:"3c796bfde5f6b46ec5c78a0cdf61b0ce"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.woff",revision:"4527d3aef049abfb941256dc4cefb06d"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.woff2",revision:"608415acb443131f2e9802f06c64e470"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.eot",revision:"f3ccd80571f80cd81acacfb05825d1a5"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.ttf",revision:"5340bb6f45ae63ffea8b8be3e7da5d91"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.woff",revision:"846e26e842bf9f35b5f1ef893e48965e"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.woff2",revision:"420ecdb7aed343f832da0f5063c26582"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.eot",revision:"bdb91cbaa77472ca3a8cee6790201979"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.ttf",revision:"d32ede6479a6fbfb9ae0b974e9ab69c9"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.woff",revision:"40d9e0d00df2bc9665fc119d851aed87"},{url:"/fonts/vazir-font-v16.1.0/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.woff2",revision:"8b9229349acc797a4e974fc7d7ffcfd1"},{url:"/images/features/Group519.png",revision:"e225556a2ff82c60ae4b9f3bec4ed56b"},{url:"/images/features/Group527.png",revision:"cf29760a9da3576d2dc326463d83a36f"},{url:"/images/features/Group537.png",revision:"e088f1d181c63292d29f540e6e1d2e88"},{url:"/images/features/Rectangle.png",revision:"19158ef8f7ff000962d8cd1b4932c633"},{url:"/images/icons8-cafe-100.png",revision:"6e1d99dd40b8a8cb37a4029a243ceeba"},{url:"/images/perspective_matte.png",revision:"17d734bd14f7d61d29269a8c37a8e975"},{url:"/logo_dark.svg",revision:"8aafec14f599475c21d516d7ab5be49b"},{url:"/logo_light.svg",revision:"8d6971ad6d80cdc1c5a46317b8420fe0"},{url:"/manifest.json",revision:"b8259fd1292eb532628fb26e26d5cd04"},{url:"/reactLeflet/marker-icon-2x.png",revision:"73ec3797f19b1916d6509f494446e232"},{url:"/reactLeflet/marker-icon.png",revision:"73ec3797f19b1916d6509f494446e232"},{url:"/reactLeflet/marker-icon2.png",revision:"2273e3d8ad9264b7daa5bdbf8e6b47f8"},{url:"/reactLeflet/marker-shadow.png",revision:"8796de98cc302db944947e795b9c81e8"},{url:"/reactLeflet/restaurant.png",revision:"837c106ac78267445586aa7240708641"},{url:"/svg/instagram-svgrepo-com.svg",revision:"e5017f4f95d879d6d4e0e4d995f65232"},{url:"/svg/telegram-svgrepo-com.svg",revision:"c55528d4703de7ee1676b1d86e92af68"},{url:"/svg/whatsapp-svgrepo-com.svg",revision:"41f1fc2e1b39c480f034af11355ae606"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
