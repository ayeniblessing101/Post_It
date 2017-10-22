import { combineReducers } from 'redux';

import flashMessagesReducer from './reducers/flashMessagesReducer';
import authReducer from './reducers/authReducer';
import groupsReducer from './reducers/groupsReducer';
import getGroupUsersReducer from './reducers/getGroupUsersReducer';
import addUserToGroupReducer from './reducers/addUserToGroupReducer';
import messagesReducer from './reducers/messagesReducer';
import paginationReducer from './reducers/paginationReducer';

export default combineReducers({
  flashMessages: flashMessagesReducer,
  auth: authReducer,
  groups: groupsReducer,
  groupUsers: getGroupUsersReducer,
  addUserToGroup: addUserToGroupReducer,
  pagination: paginationReducer,
  messages: messagesReducer
});
