#!/bin/bash

echo "add babel using yarn";
yarn add @babel/core babel-loader @babel/preset-react @babel/preset-typescript @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread --save-dev

echo "create the .babelrc file in the root folder"
if [[ ! -e ../cv/.bablerc ]]; then
    touch ../cv/.bablerc
fi
cat > ../cv/.bablerc << EndOfMessage
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
}
EndOfMessage

echo "add webpack using yarn"
yarn add webpack webpack-cli --save-dev
yarn add html-webpack-plugin --save-dev
yarn add css-loader style-loader --save-dev

echo "create the webpack config file in the root folder"
if [[ ! -e ../cv/webpack.config.js ]]; then
    touch ../cv/webpack.config.js
fi
cat > ../cv/webpack.config.js << EndOfMessage
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // webpack will take the files from ./src/index
  entry: './src/index',
  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      },
    },
    // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
      exclude: /node_modules/,
      use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
    }
  ]
},
devServer: {
  historyApiFallback: true,
},
plugins: [
  new HtmlWebpackPlugin({
    template: './public/index.html',
    favicon: './public/favicon.ico'
  })
 ]
};
EndOfMessage

echo "|----------------------------------------------------|"
echo "| Make sure to add the scripts to package.json file! |"
echo "|----------------------------------------------------|"

#"scripts": {
#  "bundle": "webpack",
#  "test": "echo \"Error: no test specified\" && exit 1",
#  "start": "webpack-dev-server --mode development --open --hot",
#  "build": "webpack --mode production"
#}

echo "installing webpack dev server"
yarn add webpack-dev-server --save-dev