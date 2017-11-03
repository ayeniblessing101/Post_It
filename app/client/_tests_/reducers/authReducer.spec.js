import expect from 'expect';
import authReducer from '../../reducers/authReducer';
import * as ActionTypes from '../../actions/types';

import mockData from './../../../__mocks__/mockData';

describe('authentication reducer', () => {
  it('should return the initial state', () => {
    const actionDispatch = {};
    const newState = authReducer(undefined, actionDispatch);
    expect(newState).toEqual(
      {
        isAuthenticated: false,
        user: {}
      }
    );
  });

  it('should handle GET_CURRENT_AUTHENTICATED_USER action', () => {
    const actionDispatch = {
      type: ActionTypes.GET_CURRENT_AUTHENTICATED_USER,
      user: mockData.stateCurrentUser
    };
    const newState = authReducer({
      isAuthenticated: false,
      user: {}
    }, actionDispatch);
    expect(newState).toEqual({
      isAuthenticated: true,
      user: actionDispatch.user
    });
  });
});
