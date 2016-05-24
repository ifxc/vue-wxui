var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',

  entry: {
    'vue-wxui': path.join(__dirname,'../src/index.js')
  },

  output: {
    filename: path.join(__dirname,'../dist/[name].js'),
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
  }
};

if (process.env.NODE_ENV === 'production') {
  delete module.exports.devtool;
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];
}
