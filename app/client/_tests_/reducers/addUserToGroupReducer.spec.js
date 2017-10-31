import expect from 'expect';
import AddUserToGroupReducer from '../../reducers/addUserToGroupReducer';
import * as ActionTypes from '../../actions/types';

describe('add user to group reducer', () => {
  it('should return the initial state', () => {
    const actionDispatch = {};
    const newState = AddUserToGroupReducer(undefined, actionDispatch);
    expect(newState).toEqual({});
  });

  it('should handle ADD_USER_TO_GROUP successful', () => {
    const actionDispatch = {
      type: ActionTypes.ADD_USER_TO_GROUP,
      message: 'User has been add to Group Successfully'
    };
    const newState = AddUserToGroupReducer({}, actionDispatch);

    expect(newState.message).toEqual(actionDispatch.message);
  });
});
