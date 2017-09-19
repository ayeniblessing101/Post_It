import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import groups from './reducers/groups';
import groupUpdate from './reducers/user';
import messagesReducer from './reducers/messagesReducer';
import groupUsers from './reducers/groupUsersReducer';
import users from './reducers/users';

export default combineReducers({
  flashMessages,
  auth,
  groups,
  groupUpdate,
  groupUsers,
  users,
  messages: messagesReducer
});
