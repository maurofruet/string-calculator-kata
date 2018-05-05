const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  devtool: "source-map",
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
    rules: [{ test: /\.ts?$/, loader: "ts-loader", exclude: /node_modules/ }]
  },
  target: "node",
  externals: [nodeExternals()]
};
