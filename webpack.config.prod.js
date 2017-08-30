
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry:
    path.join(__dirname, 'app/client/post_it/index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    // identifies any duplicate files and de-duplicate them in output
    new webpack.optimize.DedupePlugin(),
    // minifies the output of js chunks
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    // allow me to create global constants at compile time
    new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
          API_HOST: 'https://blessing-post-it.herokuapp.com'
        }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'app/client'),
          path.join(__dirname, 'app/server/shared')
        ],
        loaders: ['babel-loader'],
        exclude: /node_modules/
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
    extensions: ['.js', '.css']
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  }


};
