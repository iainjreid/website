'use strict'

const path = require('path')

module.exports = {
  entry: {
    app: './src/main/index.js'
  },
  devServer: {
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'eslint-loader'
      }],
      enforce: 'pre'
    }]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
