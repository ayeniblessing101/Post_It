
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const appPath = path.resolve(__dirname, 'app', 'server');

module.exports = {
  devtool: 'source-map',
  entry:
    path.join(__dirname, 'app/client/post_it/index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    // allow me to create global constants at compile time
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        API_HOST: 'https://blessing-post-it.herokuapp.com'
      }
    }),
    new CopyWebpackPlugin([
      { context: appPath, from: 'index.html', to: 'index.html' }
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'app/client'),
          path.join(__dirname, 'app/server/shared')
        ],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'],
        },
      },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
      },
      {
        test: /\.ico$/,
        loader: 'url-loader',
        query: { mimetype: 'image/x-icon' }
      },
      { test: /\.(png|jpg)$/, loaders: 'file-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  }
};
