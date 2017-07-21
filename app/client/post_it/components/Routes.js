import React from 'react';
import ReactDOM from 'react-dom';
const ReactRouter = require('react-router-dom');
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
import SignUpForm from './signup/SignupPage';
import Login from "./login/LoginPage";
import Dashboard from "./Dashboard";
import AddGroup from "./AddGroup";
import AddUser from "./AddUser";
import MessageBoard from "./MessageBoard";

const Routes = () => {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={SignUpForm} />
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
  );

};
export default Routes;
