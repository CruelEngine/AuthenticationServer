var path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      //all files with .ts extention will be handled y ts-loader
      { test: /\.ts$/, loader: "ts-loader" }
    ]
  },
  target: "node",
  externals: "nodeModules"
};
