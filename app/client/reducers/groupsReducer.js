import { GET_GROUPS } from '../actions/types';

const initialState = {
  pageNumber: 0,
  pageCount: 0,
  pageSize: 0,
  totalCount: 0,
  allGroups: []
};

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
    return {
      pageCount: action.groups.pageCount,
      pageSize: action.groups.pageSize,
      allGroups: action.groups.allGroups,
      totalCount: action.groups.totalCount
    };
  default:
    return state;
  }
};
