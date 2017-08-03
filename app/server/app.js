const express = require('express');
const path = require('path');
const historyApiFallback = require('connect-history-api-fallback');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config');


const app = express();

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

const logger = require('morgan');
const userRoute = require('../server/routes/user');
const bodyParser = require('body-parser');

// Log request to the console
app.use(logger('dev'));
// parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/fonts', express.static('./app/fonts'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/post_it/index.html'));
});
app.use('/', userRoute);

app.use(historyApiFallback({
  verbose: true
}));

app.listen(3000, () => console.log('Running on localhost:3000'));

module.exports = app;
