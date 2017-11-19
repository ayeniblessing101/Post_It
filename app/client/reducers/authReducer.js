import isEmpty from 'lodash/isEmpty';
import { GET_CURRENT_AUTHENTICATED_USER } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {},
};

/**
 * updates the auth property of the store
 * @param {Object} state - current state
 * @param {Object} action - action type and action payload
 *
 * @returns {state} - returns a new state.
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
  case GET_CURRENT_AUTHENTICATED_USER:
    return {
      ...state,
      isAuthenticated: !isEmpty(action.user),
      user: action.user,
    };
  default:
    return state;
  }
};
