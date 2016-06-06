var config = require('./webpack.build.min.js');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

config.module = {
    loaders: [
        {test: /\.vue$/, loader: 'vue'},
        {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
        { test: /\.css$/, loader: ExtractTextPlugin.extract('css')},
        { test: /\.less$/, loader: ExtractTextPlugin.extract('css!autoprefixer!less')}
    ]
};

config.vue = {
    loaders: {
        css: ExtractTextPlugin.extract("css"),
        less: ExtractTextPlugin.extract("css!less")
    }
};
config.output.filename = config.output.filename.replace(/\.min.js$/, '.base.min.js');
config.plugins = config.plugins.concat([new ExtractTextPlugin(path.join(__dirname,'../dist/vue-wxui.base.min.css'))]);

module.exports = config;
