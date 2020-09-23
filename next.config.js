const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {};
}

const nextConfig = {
  target: 'serverless',
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'raw-loader'
    });

    return config;
  }
};

module.exports = withPlugins(
    [
        withImages({
            fileExtensions: ['png', 'svg', 'jpg'],
            target: 'serverless',
            webpack(config, options) {
                return config
            }
        })
    ], 
nextConfig);