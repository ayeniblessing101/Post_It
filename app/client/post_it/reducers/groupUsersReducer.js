import { SET_GROUP_USERS } from '../actions/types';

const initialState = [];

/**
 * Sets cuurent user.
 * @param {Object} state - groupdId.
 * @param {Object} action - groupdId.
 * @returns {state} - returns a new state.
 */
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
