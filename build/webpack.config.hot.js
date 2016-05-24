var path = require('path');
var webpack = require('webpack');
console.log(__dirname);
module.exports = {

  devtool: 'inline-source-map',

  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '../example/main.js')
  ],

  output: {
    path: path.join(__dirname, '../example/__build__'),
    publicPath: '/__build__/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.vue$/, loader: 'vue'},
      { test: /\.css$/, loader: 'style!css'},
      { test: /\.less$/, loader: 'style!css!autoprefixer!less' },
      { test: /\.(png|jpg|gif)$/, loader: 'file?name=[name].[ext]?[hash]' }
    ]
  },

  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  },

  resolve: {
    alias: {
      'vue-wxui': path.join(__dirname, '../src')
    }
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};
