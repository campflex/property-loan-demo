const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
},
  plugins: [
    new CopyWebpackPlugin([{ from: "./src/index.html", to: "index.html" }]),
    new Dotenv(
      {
        systemvars: true // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.

      }
    )
  ],
  devServer: { contentBase: path.join(__dirname, "dist"), compress: true, host: '0.0.0.0', port: '8080', disableHostCheck: true },
};
