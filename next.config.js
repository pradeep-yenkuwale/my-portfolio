
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/2048-in-react",
  output: "export",
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  },
};

module.exports = nextConfig;
