import { SET_GROUP_USERS } from '../actions/types';

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_GROUP_USERS:
      return [
        ...action.groupUsers
      ];
    default:
      return state;
  }
};
