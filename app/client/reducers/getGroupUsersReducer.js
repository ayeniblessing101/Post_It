import { GET_GROUP_USERS } from '../actions/types';

const initialState = [];

/**
 * updates the groups property of the store
 * @param {Object} state - current state
 * @param {Object} action - action type and action payload
 *
 * @returns {state} - returns a new state.
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
  case GET_GROUP_USERS:
    return [...state, ...action.groupUsers];
  default:
    return state;
  }
};
