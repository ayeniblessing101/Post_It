import React from 'react';
import LandingPage from './user/LandingPage';
import GroupsPage from './group/GroupsPage';
import AddGroup from './group/AddGroupPage';
import GroupPage from './messages/MessagePage';
import ResetPasswordPage from './user/ResetPasswordPage';
import requireAuth from '../utils/requireAuth';
import isAuthenticated from '../utils/isAuthenticated';
import UserPage from './user/UserPage';
import NotFoundPage from './NotFoundPage';

const ReactRouter = require('react-router-dom');

const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;


const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={isAuthenticated(LandingPage)} />
        <Route path="/user/password/verify" component={ResetPasswordPage} />
        <Route path="/groups" component={requireAuth(GroupsPage)} />
        <Route path="/group/:id" component={requireAuth(GroupPage)} />
        <Route path="/add-group" component={requireAuth(AddGroup)} />
        <Route path="/user/search/" component={requireAuth(UserPage)} />
        <Route
          render={() => {
            return <NotFoundPage />;
          }}
        />
      </Switch>
    </div>
  );
};
export default Routes;
