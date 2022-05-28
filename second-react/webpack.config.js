var webpack = require("webpack");
var path = require("path");
var APP_DIR = path.resolve(__dirname, "src");
var BUILD_DIR = path.resolve(__dirname, "build");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var config = {
  entry: APP_DIR + "/index.jsx",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    port: 3000,
    static: "./",
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: true,
      sourceMap: true,
      chunkSortMode: "dependency",
    }),
    new CleanWebpackPlugin(),
  ],
};
module.exports = config;
