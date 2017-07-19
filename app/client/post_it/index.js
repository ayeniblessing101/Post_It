import React from 'react';
import ReactDOM from 'react-dom';
import globalStyles from './index.css';
// require('./index.css');
require("materialize-loader");
require("font-awesome-loader");
// require('./materialIcon.css');
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Routes from "./components/Routes";
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
import { browserHistory } from 'react-router';

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk) // Allows us dispatch asynchronous actions
);

const Root = () => {
  return(
    <Router history={browserHistory}>
      <Routes />
    </Router>
  );
}

ReactDOM.render(
  <Provider store={store}><Root /></Provider>,
  document.getElementById('app')
);
