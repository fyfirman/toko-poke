const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DotenvWebpackPlugin = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: path.resolve("src/index.tsx"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].[chunkhash].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /nodeModules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src/"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html", favicon: "./public/favicon.ico" }),
    new DotenvWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
};
