const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: '../app/client/post_it/index.js',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, { loader: 'css-loader' // translates CSS into CommonJS
        }, { loader: 'sass-loader' // compiles Sass to CSS
        }]

      }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../app/client/post_it/index.html'
    })
  ]
};
