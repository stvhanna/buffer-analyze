const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const vendor = ['react', 'react-dom', '@bufferapp/components'];

module.exports = {
  context: __dirname,
  entry: {
    bundle: ['babel-polyfill', '../web/index.jsx'],
    vendor,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules(?!\/@bufferapp\/*)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: 'vendor',
        },
      },
    },
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  stats: {
    children: false, // Disable logging from child plugins
  },
};
