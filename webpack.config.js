const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  devtool: "none",
  module: {
    rules: [
      // BABEL
      {  
        test: /\.js$/,  
        exclude: /node_modules/,  
        use: {  
          loader: 'babel-loader',  
          options: { cacheDirectory: true }  
        }
      },

      // HTML LOADER + plug
      {
        test: /\.html$/,
        use: [
          { loader: "html-loader" }
        ]
      },

      // FILE LOADER for images
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '../img/'
          }
        }
      },

      // CSS LOADER + split plug
      {
        test: /\.css$/,
        use:  [ MiniCssExtractPlugin.loader, 'css-loader']
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      // filename: 'index.html',
      // title: "My app",
      // favicon: "images/idk.svg",
      // filename: 'index.html,
      // meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      // TODO: insert div inside body with class
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].css', // css output
    })
  ]
}
