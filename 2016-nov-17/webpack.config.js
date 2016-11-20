var path = require("path");

require("babel-core/register");
require("babel-polyfill");

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, "src", "entry.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['latest']
        }
      }
    ]
  }
};
