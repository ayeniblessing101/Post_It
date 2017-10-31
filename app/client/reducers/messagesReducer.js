import { GET_MESSAGES, POST_MESSAGE } from '../actions/types';

const initialState = [];

/**
 * updates the messages property of the store
 *
 * @param {Object} state - current state
 * @param {Object} action - action type and action payload
 *
 * @returns {state} - returns a new state.
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
  case GET_MESSAGES:
    return [
      ...action.messages
    ];
  case POST_MESSAGE:
    return [
      ...state,
      action.message
    ];
  default:
    return state;
  }
};
