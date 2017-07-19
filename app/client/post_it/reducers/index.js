import { combineReducers } from 'redux';
import UserReducers from './reducer-users';

const allReducers = combineReducers({
  user: UserReducers
});

export default allReducers;
