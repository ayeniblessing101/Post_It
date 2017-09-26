
const express = require('express');
const path = require('path');
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
const userRoute = require('../server/routes/routes');
const bodyParser = require('body-parser');

app.use('/', express.static(path.join(__dirname, '../client/post_it/assets')));
// Log request to the console
app.use(logger('dev'));
// parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/fonts', express.static('./app/fonts'));
app.use('/api', userRoute);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log('Running on localhost:3000'));

module.exports = app;
