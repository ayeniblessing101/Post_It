import expect from 'expect';
import GroupsReducer from '../../reducers/groupsReducer';
import * as ActionTypes from '../../actions/types';

describe('get group reducer', () => {
  it('should return the initial state', () => {
    const actionDispatch = [];
    const newState = GroupsReducer(undefined, actionDispatch);
    expect(newState).toEqual([]);
  });

  it('should handle GET_GROUPS', () => {
    const actionDispatch = {
      type: ActionTypes.GET_GROUPS,
      groups:
      [
        {
          groupName: 'Andela',
          user_id: 1,
          id: 1
        },
        {
          groupName: 'Andela',
          user_id: 1,
          id: 1
        }
      ]
    };
    const newState = GroupsReducer([], actionDispatch);

    expect(newState).toEqual(actionDispatch.groups);
  });
});
