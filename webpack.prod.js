/* eslint-disable */
// const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');

module.exports = {
  entry: {
    buttons: './src/buttons/buttons.js',
    gallery: './src/gallery/gallery.js'
  },
  output: {
    path: path.join(__dirname, './dist/'),
    filename: '[name].bundle.js',
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },
  module: {
    rules: [
            {
              test: /\.css$/,
              use: ExtractCssChunks.extract({
                use: {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true
                  }
                }
              })
            }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
}
