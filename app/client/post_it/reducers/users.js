import { GET_ALL_USERS } from '../actions/types';

const initialState = {
  pageNumber: 0,
  pageCount: 0,
  pageSize: 0,
  totalCount: 0,
  users: []
};

/**
 * @param {object} state
 * @param {object} action
 *
 * @return {object} - state
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        pageNumber: action.users.pageNumber,
        pageCount: action.users.pageCount,
        pageSize: action.users.pageSize,
        users: action.users.users,
        totalCount: action.users.totalCount
      };
    default: return state;
  }
};
