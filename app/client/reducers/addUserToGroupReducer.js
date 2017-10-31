import { ADD_USER_TO_GROUP } from '../actions/types';

const initialState = {};

/**
 * updates the addUserToGroup property of the store
 * @param {Object} state - current state
 * @param {Object} action - action type and action payload
 * @returns {state} - returns a new state.
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
  case ADD_USER_TO_GROUP:
    return Object.assign({}, state, { message: action.message });
  default:
    return state;
  }
};
