import expect from 'expect';
import groupsReducer from '../../reducers/groupsReducer';
import * as ActionTypes from '../../actions/types';

import mockData from './../../../__mocks__/mockData';

describe('get group reducer', () => {
  it('should return the initial state', () => {
    const actionDispatch = [];
    const newState = groupsReducer(undefined, actionDispatch);
    expect(newState).toEqual([]);
  });

  it('should handle GET_GROUPS action', () => {
    const actionDispatch = {
      type: ActionTypes.GET_GROUPS,
      groups: mockData.groups
    };
    const newState = groupsReducer([], actionDispatch);

    expect(newState).toEqual(actionDispatch.groups);
  });
});
