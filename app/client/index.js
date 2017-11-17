import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import jwt from 'jsonwebtoken';
import { BrowserRouter as Router } from 'react-router-dom';

import 'jquery/dist/jquery';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize';
import './assets/dist/css/index.css';

import { setCurrentUser } from './actions/authenticationActions';
import Routes from './components/Routes';
import rootReducer from '././rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';

require('font-awesome-loader');

const store = createStore(
  rootReducer,
  compose(
    // Allows us dispatch asynchronous actions
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.jwtToken) {
  // Adding the function setAuthorizationToken() call to index file
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

const Root = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}><Root /></Provider>,
  document.getElementById('app')
);
