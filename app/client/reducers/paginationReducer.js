import { GET_ALL_USERS } from '../actions/types';

const initialState = {
  pageCount: 0,
  pageSize: 0,
  totalCount: 0,
  users: [],
};

/**
 * updates the messages property of the store
 * @param {Object} state - current state
 * @param {Object} action - action type and action payload
 *
 * @returns {state} - returns a new state.
*/
export default (state = initialState, action = {}) => {
  switch (action.type) {
  case GET_ALL_USERS:
    return {
      ...state,
      pageCount: action.users.pagination.pageCount,
      pageSize: action.users.pagination.pageSize,
      users: action.users.users,
      totalCount: action.users.pagination.totalCount,
    };
  default:
    return state;
  }
};
