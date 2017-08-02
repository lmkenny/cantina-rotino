const webpack = require('webpack');
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    tachyons: 'tachyons/css/tachyons.css'
  },
  // plugins: [
  // new ExtractTextPlugin('[name].css', {
  //     allChunks: true
  //   })
  //   // new CopyWebpackPlugin([{
  //   //   from: 'index.html'
  //   // }])
  // ],
  plugins: [
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    })
    // ,
    // new CopyWebpackPlugin([{
    //   from: 'index.html'
    // }]),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|svg|jpg|gif|)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(ttf|otf|woff|woff2|eot)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};
