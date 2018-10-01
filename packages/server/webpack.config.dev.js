const fs = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.config.common.js');

const merged = merge.strategy({
  plugins: 'prepend',
  'entry.bundle': 'prepend',
})(common, {
  entry: {
    bundle: ['react-hot-loader/patch'],
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    publicPath: 'https://local.buffer.com:8080/static/',
    contentBase: false,
    port: 8080,
    host: 'local.buffer.com',
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: {
      key: fs.readFileSync('../reverseproxy/certs/local.buffer.com-wildcard.key'),
      cert: fs.readFileSync('../reverseproxy/certs/local.buffer.com-wildcard.crt'),
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
});

module.exports = merged;