import React from 'react';
import LandingPage from './user/LandingPage';
import GroupsPage from './group/GroupsPage';
import AddGroup from './group/AddGroupPage';
import AddUser from './user/AddUser';
import GroupPage from './messages/MessagePage';
import ResetPasswordPage from './user/ResetPasswordPage';
import requireAuth from '../utils/requireAuth';
import UserPage from './user/UserPage';

const ReactRouter = require('react-router-dom');

const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/user/password/verify" component={ResetPasswordPage} />
        <Route path="/groups" component={requireAuth(GroupsPage)} />
        <Route path="/group/:id" component={requireAuth(GroupPage)} />
        <Route path="/add-group" component={requireAuth(AddGroup)} />
        <Route path="/add-user" component={requireAuth(AddUser)} />
        <Route path="/user/search/" component={requireAuth(UserPage)} />
        <Route
          render={() => {
            return <p>Not Found</p>;
          }}
        />
      </Switch>
    </div>
  );
};
export default Routes;
