var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/app/index.jsx'
  ],
  output: {
    path: __dirname + '/build/',
    filename: '[name].js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['jsx?harmony'] },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader') },
      { test: /\.jpe?g$/, loader: 'url?limit=10000&name=[name].[sha512:hash:base64:7].[ext]' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      pouchdb: 'pouchdb/dist/pouchdb.js'
    }
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({ IS_SERVER: false })
  ]
};