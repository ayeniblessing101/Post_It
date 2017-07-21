import React from 'react';
import ReactDOM from 'react-dom';
import globalStyles from './index.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import Routes from "./components/Routes";
import { browserHistory } from 'react-router';
import rootReducer from '././rootReducer';
// require('./index.css');
require("materialize-loader");
require("font-awesome-loader");
// require('./materialIcon.css');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk), // Allows us dispatch asynchronous actions
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
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
