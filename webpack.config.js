const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  plugins: [new CleanWebpackPlugin(["dist"])],
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".ts"]
  },
  module: {
    rules: [{ test: /\.ts?$/, loader: "ts-loader" }]
  }
};
