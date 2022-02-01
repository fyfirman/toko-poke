const { default: merge } = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
module.exports = merge(common, {
  performance: {
    hints: false,
  },
  plugins: [new BundleAnalyzerPlugin()],
});
