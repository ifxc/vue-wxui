var vue = require('vue-loader');
var webpack = require('webpack');

module.exports = {
  //页面入口文件配置
  entry: {example:'./example/main.js'},
  //入口文件输出配置
  output: {
    path: './static',
    publicPath: 'http://localhost:8080/static/',
    filename: '[name].js'
  },
  module: {
    //加载器配置
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      },
      //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
      { test: /\.(png|jpg)$/, loader: 'url?limit=8192&name=[name].[ext]?[hash]'},
      { test: /\.(eot|woff|ttf|svg)$/, loader: 'file?name=font/[name].[ext]'}
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  //add
  // watch: true
  devtool: '#source-map'
};
