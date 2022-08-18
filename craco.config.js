const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        pathRewrite: {
          '^/api': '',
        },
        changeOrigin: true,
      },
    },
  },
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
    },
  },
};
