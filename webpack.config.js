var path = require('path');
var webpack = require('webpack');
var PROD = JSON.parse(process.env.PROD_DEV || "0");

module.exports = {
  entry: './src/main.js',
  devtool: !PROD ? 'source-map' : undefined,
  output: {
    path: './dist',
    filename: 'bundle.min.js',
    sourceMapFilename: '[name].js.map'
  },
  devServer: {
    inline: true,
    contentBase: './dist'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /.+.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
