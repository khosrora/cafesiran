module.exports = {
  reactStrictMode: true,
};
const withPWA = require("next-pwa");
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    disable: process.env.NODE_ENV === 'development',
    skipWaiting: true,
  },
<<<<<<< HEAD
});

=======
});
>>>>>>> 855e31e013fb62a90ec2339796528f664e231799
