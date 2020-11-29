const baseConfig = require('./webpack.config.base.js');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname),
      port: 4200,
    },
});