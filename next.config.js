// next.config.js
module.exports = {
  images: {
    loader: "cloudinary",
    domains: [
      "https://res.cloudinary.com/skai-digital/image/upload/v1616247919/",
    ],
  },
  future: {
    webpack5: true,
  },
  trailingSlash: true,
};
