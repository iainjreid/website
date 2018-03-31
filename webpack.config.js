'use strict'

const path = require('path')

module.exports = {
  entry: {
    app: './src/main/index.js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.png$/,
      loader: 'file-loader'
    }]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
