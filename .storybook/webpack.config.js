// const webpack = require('webpack');
const webpack = require('../node_modules/@storybook/core/node_modules/webpack');

module.exports = {
  plugins: [new webpack.DefinePlugin({
    __PACKAGES__: JSON.stringify(`../packages/${process.env.PACKAGE || ''}`),
  })],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              context: __dirname,
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules(?!\/@bufferapp\/*)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  node: {
    __dirname: true,
  },
};
