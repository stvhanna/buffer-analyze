const webpack = require('webpack');
const fs = require('fs');
const config = require('./webpack.config');

// NOTE: Bugsnag will not notify in local setup with current weback configuration
// https://docs.bugsnag.com/platforms/browsers/faq/#4-code-generated-with-eval-e-g-from-webpack
config.devtool = 'cheap-module-eval-source-map';

config.entry.bundle.unshift(
  'react-hot-loader/patch',
);

config.plugins.unshift(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
);

config.devServer = {
  hot: true,
  publicPath: config.output.publicPath,
  contentBase: false,
  port: 8080,
  host: 'analyze.local.buffer.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  https: {
    key: fs.readFileSync('../reverseproxy/certs/local.buffer.com-wildcard.key'),
    cert: fs.readFileSync('../reverseproxy/certs/local.buffer.com-wildcard.crt'),
  },
};


module.exports = config;
