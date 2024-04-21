const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotnev = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new Dotnev({
        path: './.env',
        safe: true
    })
]
});