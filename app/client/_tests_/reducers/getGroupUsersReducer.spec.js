import expect from 'expect';
import getGroupUsersReducer from '../../reducers/getGroupUsersReducer';
import * as ActionTypes from '../../actions/types';

import mockData from './../../../__mocks__/mockData';

describe('get group user reducer', () => {
  it('should return the initial state', () => {
    const actionDispatch = [];
    const newState = getGroupUsersReducer(undefined, actionDispatch);
    expect(newState).toEqual([]);
  });

  it('should handle GET_GROUP_USERS action', () => {
    const actionDispatch = {
      type: ActionTypes.GET_GROUP_USERS,
      groupUsers: mockData.groupUsers
    };
    const newState = getGroupUsersReducer([], actionDispatch);

    expect(newState).toEqual(actionDispatch.groupUsers);
  });
});
