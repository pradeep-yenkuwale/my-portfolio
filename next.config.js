const path = require('path')


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
  webpack: (config,  { webpack }) => {
    config.module.rules.unshift({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker"
          }
        }
      ]
    });
    config.externals.push({ sharp: 'commonjs sharp', canvas: 'commonjs canvas' });
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config;
  }
};

module.exports = nextConfig;
