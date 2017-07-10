import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddGroup from "./components/AddGroup";
import AddUser from "./components/AddUser";
import MessageBoard from "./components/MessageBoard";
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
import { browserHistory } from 'react-router';

export class Root extends React.Component {
  render() {
    return(
      <Router history={browserHistory}>
        <div>
          <Switch>
            <Route exact path='/' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/add-group' component={AddGroup} />
            <Route path='/add-user' component={AddUser} />
            <Route path='/message' component={MessageBoard} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('app')
);
