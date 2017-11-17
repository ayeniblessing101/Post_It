const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = [
  {
    entry: [path.join(__dirname, 'app/client/index.js')],
    output: {
      path: path.join(__dirname, 'build'),
      publicPath: '/',
      filename: 'bundle.min.js',
    },
    plugins: [
      // new Dotenv({ systemvars: true }),
      new webpack.NoEmitOnErrorsPlugin(),
      new ExtractTextPlugin('css/bundle.css'),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
    devServer: {
      inline: true,
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',

          query: {
            presets: ['es2015', 'react', 'stage-0'],
          },
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            loader: 'css-loader?importLoaders=1',
          }),
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          loader: 'raw-loader',
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader',
        },
        {
          test: /\.(jpg|jpeg|png|svg)$/,
          loader: 'url-loader',
          options: {
            limit: 250000,
          },
        },
      ],
    },
    node: {
      console: true,
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      dns: 'empty',
    },
  },
];

module.exports = config;
