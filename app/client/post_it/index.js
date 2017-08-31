import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { setCurrentUser } from './actions/authActions';
import Routes from "./components/Routes";
import { browserHistory } from 'react-router';
import jwt from 'jsonwebtoken';
import rootReducer from '././rootReducer';
import { BrowserRouter } from 'react-router-dom';
import setAuthorizationToken from './utils/setAuthorizationToken';
// require('./index.css');
// require("materialize-loader");
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

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);// Adding the function setAuthorizationToken() call to index file
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

const Root = () => {
  return(
    <Router>
      <Routes />
    </Router>
  );
}

ReactDOM.render(
  <Provider store={store}><Root /></Provider>,
  document.getElementById('app')
);
