const path = require('path')

module.exports = {
  basePath: "/my-portfolio",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
}