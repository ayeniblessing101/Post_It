
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry:
    path.join(__dirname, 'app/client/post_it/index.js'),
  output: {
    path: path.join(__dirname, '/app/client/post_it/assets/dist/js'),
    // path: path.resolve(__dirname, 'client'),
    filename: 'bundle.js',
  },
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
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: './app/client/post_it/index.html'
  //   })
  // ]

};
