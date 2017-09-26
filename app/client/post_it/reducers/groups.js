import { SET_GROUPS } from '../actions/types';

const initialState = [];

/**
 * @param {Object} state .
 * @param {Object} action .
 * @returns {state} - returns a new state.
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
  case SET_GROUPS:
    return [
      ...action.groups
    ];
  default:
    return state;
  }
};
