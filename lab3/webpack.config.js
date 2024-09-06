const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/, // Test for .ts files
        use: "ts-loader", // Use ts-loader to transpile TypeScript files
        exclude: /node_modules/, // Exclude node_modules from being transpiled
      },
      {
        test: /\.js$/, // Test for .js files
        enforce: "pre", // Apply this rule before others
        use: "source-map-loader", // Process source maps for better debugging
      },
      {
        test: /\.css$/i,
        exclude: /(node_modules)/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "source-map",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"), // Directory to serve
    compress: true, // Enable gzip compression for everything served
    port: 8080, // Port to use for the dev server
    hot: true, // Enable hot module replacement
  },
};
