var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    'simple': path.join(__dirname,'../example_simple/simple.js')
  },

  output: {
    filename: path.join(__dirname,'../example_simple/[name].build.js'),
    library: 'VueWxui',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.css$/, loader: 'style!css'},
      { test: /\.less$/, loader: 'style!css!autoprefixer!less' }
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
  }
};

