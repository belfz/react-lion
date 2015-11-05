var path = require('path');
var webpack = require('webpack');
var PROD = JSON.parse(process.env.PROD_DEV || "0");

module.exports = {
  entry: path.resolve(__dirname, '../src/client/scripts/client.js'),
  devtool: !PROD ? 'source-map' : undefined,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.min.js',
    sourceMapFilename: '[name].js.map'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
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
