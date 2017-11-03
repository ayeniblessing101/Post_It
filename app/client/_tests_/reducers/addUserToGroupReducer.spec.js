import expect from 'expect';
import addUserToGroupReducer from '../../reducers/addUserToGroupReducer';
import * as ActionTypes from '../../actions/types';

import mockData from './../../../__mocks__/mockData';

describe('add user to group reducer', () => {
  it('should return the initial state', () => {
    const actionDispatch = {};
    const newState = addUserToGroupReducer(undefined, actionDispatch);
    expect(newState).toEqual({});
  });

  it('should handle ADD_USER_TO_GROUP action', () => {
    const actionDispatch = {
      type: ActionTypes.ADD_USER_TO_GROUP,
      message: mockData.successMessages[3]
    };
    const newState = addUserToGroupReducer({}, actionDispatch);

    expect(newState.message).toEqual(actionDispatch.message);
  });
});
