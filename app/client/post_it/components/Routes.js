import React from 'react';
import ReactDOM from 'react-dom';
const ReactRouter = require('react-router-dom');
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
import SignUpForm from './signup/SignupPage';
import Login from "./login/LoginPage";
import GroupsPage from "./dashboard/GroupsPage";
import AddGroup from "./addgroup/AddGroupPage";
import AddUser from "./AddUser";
import GroupPage from "./messages/MessagePage";
//import GroupPage from "./message/MessagePage";

import requireAuth from '../utils/requireAuth';

const Routes = () => {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={SignUpForm} />
        <Route path='/login' component={Login} />
        <Route path='/groups' component={requireAuth(GroupsPage)} />
        <Route path='/group/:id' component={requireAuth(GroupPage)} />
        <Route path='/add-group' component={requireAuth(AddGroup)} />
        <Route path='/add-user' component={requireAuth(AddUser)} />
        <Route render={function () {
          return <p>Not Found</p>
        }} />
      </Switch>
    </div>
  );

};
export default Routes;
