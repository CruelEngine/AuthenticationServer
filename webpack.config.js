var path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

var fs = require("fs");
var nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function(x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

module.exports = {
  entry: "./src/index.ts",

  plugins: [new CleanWebpackPlugin(["./dist"])],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      //all files with .ts extention will be handled by ts-loader
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, "src"),
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  target: "node",
  externals: nodeModules
};
