import { combineReducers } from 'redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import groups from './reducers/groups';
import groupUpdate from './reducers/user';

export default combineReducers({
  flashMessages,
  auth,
  groups,
  groupUpdate
});
