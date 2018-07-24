module.exports = {
  context: __dirname,
  entry: {
    bundle: [
      'babel-polyfill',
      '../web/index.jsx',
    ],
    rpcWorker: '../web/rpcWorker.js',
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    publicPath: '//analyze.local.buffer.com:8080/static/',
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
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
    dns: 'mock',
    net: 'mock',
  },
};
