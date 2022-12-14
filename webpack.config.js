const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    publicPath: '/vhost',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    port: 9892,
    static: 'public'
  }
}