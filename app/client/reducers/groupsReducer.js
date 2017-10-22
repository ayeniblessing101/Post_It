import { GET_GROUPS } from '../actions/types';

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
  case GET_GROUPS:
    return [
      ...action.groups
    ];
  default:
    return state;
  }
};
