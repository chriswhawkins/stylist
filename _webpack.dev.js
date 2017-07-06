const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const PurifyCSSPlugin = require('purifycss-webpack');

// const dist = path.resolve(__dirname, './dist/');
module.exports = {
  entry: {
    buttons: './src/buttons/buttons.js',
    gallery: './src/gallery/gallery.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist/'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractCssChunks.extract({
          use: {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new ExtractCssChunks('[name].css'),
    new PurifyCSSPlugin({
      paths: ['./src/buttons/buttons.html', './src/gallery/gallery.html'],
    }),
    // new HtmlWebpackPlugin('[name].js'),
  ],
};
