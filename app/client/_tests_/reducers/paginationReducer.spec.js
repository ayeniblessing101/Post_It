import expect from 'expect';
import paginationReducer from '../../reducers/paginationReducer';
import * as ActionTypes from '../../actions/types';

import mockData from './../../../__mocks__/mockData';

describe('authentication reducer', () => {
  it('should return the initial state', () => {
    const actionDispatch = {};
    const newState = paginationReducer(undefined, actionDispatch);
    expect(newState).toEqual({
      pageCount: mockData.users.pageCount,
      pageSize: mockData.users.pageSize,
      users: [],
      totalCount: mockData.users.totalCount,
    });
  });

  it('should handle GET_ALL_USERS action', () => {
    const actionDispatch = {
      type: ActionTypes.GET_ALL_USERS,
      users: mockData.users,
    };
    const initialState = {
      pageCount: 0,
      pageSize: 0,
      totalCount: 0,
      users: [],
    };
    const newState = paginationReducer(initialState, actionDispatch);
    expect(newState).toEqual({
      pageCount: actionDispatch.users.pageCount,
      pageSize: actionDispatch.users.pageSize,
      users: actionDispatch.users.users,
      totalCount: actionDispatch.users.totalCount,
    });
  });
});
