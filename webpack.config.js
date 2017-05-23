const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

const GLOBALS = {
  __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
};

console.log('__DEV__', GLOBALS.__DEV__);

const extractSass = new ExtractTextWebpackPlugin({
  filename: 'css/[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development',
});

const htmlPlugin = new HtmlWebpackPlugin({
  title: 'inference',
  template: 'src/inference.html',
  filename: process.env.NODE_ENV === 'development' ? 'index.html' : 'inference.html',
  inject: true,
});

module.exports = {
  entry: {
    inference: './src/index.js',
  },
  output: {
    path: __dirname + '/inference_dist',
    publicPath: '/',
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader',
      },
      {
        test: /\.scss|.css?$/,
        loader: extractSass.extract({
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: ['src', 'node_modules'],
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    htmlPlugin,
    extractSass,
  ],
  devtool: 'cheap-source-map',
};
