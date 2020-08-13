const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: "none",

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

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
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
          output: 'img/',
          publicPath: '../' // url path
        },
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
      title: 'LeHouse',
      template: 'src/index.html',
      // filename: 'index.html',
      // favicon: "images/idk.svg",
      // meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].css', // css output path
    }),

    new CssMinimizerPlugin()
  ]
}
