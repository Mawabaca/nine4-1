const withImages = require('next-images');

module.exports = withImages({
  webpack(config, options) {
    config.optimization.splitChunks = {
      chunks: 'all',
    };
    return config;
  },
});