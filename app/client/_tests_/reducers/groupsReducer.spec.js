import expect from 'expect';
import groupsReducer from '../../reducers/groupsReducer';
import * as ActionTypes from '../../actions/types';

import mockData from './../../../__mocks__/mockData';

describe('get group reducer', () => {
  it('should return the initial state', () => {
    const intialState = mockData.allGroupInitialState;
    const actionDispatch = [];
    const newState = groupsReducer(undefined, actionDispatch);
    expect(newState).toEqual(intialState);
  });

  it('should handle GET_GROUPS action', () => {
    const intialState = mockData.allGroupInitialState;
    const actionDispatch = {
      type: ActionTypes.GET_GROUPS,
      groups: mockData.allGroups
    };
    const newState = groupsReducer(intialState, actionDispatch);

    expect(newState).toEqual(actionDispatch.groups);
  });
});
