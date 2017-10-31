import expect from 'expect';
import GetGroupUsersReducer from '../../reducers/getGroupUsersReducer';
import * as ActionTypes from '../../actions/types';

describe('get group user reducer', () => {
  it('should return the initial state', () => {
    const actionDispatch = [];
    const newState = GetGroupUsersReducer(undefined, actionDispatch);
    expect(newState).toEqual([]);
  });

  it('should handle GET_GROUP_USERS', () => {
    const actionDispatch = {
      type: ActionTypes.GET_GROUP_USERS,
      groupUsers:
      [
        {
          id: 1,
          username: 'blessing'
        },
        {
          id: 2,
          username: 'tomi'
        }
      ]
    };
    const newState = GetGroupUsersReducer([], actionDispatch);

    expect(newState).toEqual(actionDispatch.groupUsers);
  });
});
