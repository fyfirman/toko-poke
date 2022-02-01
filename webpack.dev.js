const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
});
