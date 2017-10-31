/* global jest */
import 'babel-polyfill';
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';

import * as ActionTypes from '../../actions/types';
import * as GroupActions from '../../actions/groupActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Group', () => {
  it('should create a group', () => {
    axios.post = jest.fn(() => {
      return Promise.resolve(
        {
          status: true,
          message: 'Successful',
          data: {
            id: 8,
            group_name: 'Phoenix',
            user_id: 1,
            updatedAt: '2017-10-25T18:23:20.105Z"',
            createdAt: '2017-10-25T18:23:20.105Z'
          }
        }
      );
    });
    const group = 'Phoniex';
    const store = mockStore({});
    return store.dispatch(GroupActions.createGroup(group))
    .then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
  it('should fetch all groups', () => {
    axios.get = jest.fn(() => {
      return Promise.resolve(
        {
          data:
          [
            {
              id: 1,
              group_name: 'Andela',
              user_i: 1,
              createdAt: '2017-10-02T16:10:00.955Z',
              updatedAt: '2017-10-02T16:10:00.955Z'
            },
            {
              id: 2,
              group_name: 'test',
              user_id: 1,
              createdAt: '2017-10-16T12:00:44.405Z',
              updatedAt: '2017-10-16T12:00:44.405Z'
            }
          ]
        }
      );
    });
    const groups =
      [
        {
          id: 1,
          group_name: 'Andela',
          user_i: 1,
          createdAt: '2017-10-02T16:10:00.955Z',
          updatedAt: '2017-10-02T16:10:00.955Z'
        },
        {
          id: 2,
          group_name: 'test',
          user_id: 1,
          createdAt: '2017-10-16T12:00:44.405Z',
          updatedAt: '2017-10-16T12:00:44.405Z'
        }
      ];
    const store = mockStore({}, groups);
    const expectedAction = {
      type: ActionTypes.GET_GROUPS,
      groups
    };
    return store.dispatch(GroupActions.fetchGroups())
    .then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
  it('should fetch all users in a group', () => {
    axios.get = jest.fn(() => {
      return Promise.resolve(
        {
          status: true,
          message: 'Successful',
          data: {
            id: 1,
            members:
            [
              {
                id: 1,
                username: 'blessing'
              }
            ]
          }
        }
      );
    });
    const groupId = 1;
    const groupUsers = [
      {
        id: 1,
        username: 'blessing'
      },
      {
        id: 2,
        username: 'tomi'
      },
      {
        id: 3,
        username: 'funsho'
      },
    ];
    const store = mockStore({});
    const expectedAction = {
      type: ActionTypes.GET_GROUP_USERS,
      groupUsers
    };
    store.dispatch(GroupActions.fetchGroupUsers(groupId))
    .then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
  it('handle success message when a user has successfully been added to a group', () => {
    axios.post = jest.fn(() => {
      return Promise.resolve(
        {
          status: true,
          message: 'User has been successfully added to group',
          data: {
            user_id: 5,
            group_id: 2,
            updatedAt: '2017-10-27T11:04:45.607Z',
            createdAt: '2017-10-27T11:04:45.607Z',
            id: 16
          }
        }
      );
    });
    const groupId = 1;
    const user = 'bamidele';
    const status = true;
    const message = 'User has been successfully added to group';

    const store = mockStore({});
    const expectedAction = {
      type: ActionTypes.ADD_USER_TO_GROUP,
      status,
      message
    };
    store.dispatch(GroupActions.addUserToGroup(groupId, user))
    .then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
  it('should fetch all users in a group', () => {
    axios.get = jest.fn(() => {
      return Promise.resolve(
        {
          status: true,
          message: 'Successful',
          data: {
            id: 1,
            members:
            [
              {
                id: 1,
                username: 'blessing'
              }
            ]
          }
        }
      );
    });
    const groupId = 1;
    const groupUsers = [
      {
        id: 1,
        username: 'blessing'
      },
      {
        id: 2,
        username: 'tomi'
      },
      {
        id: 3,
        username: 'funsho'
      },
    ];
    const store = mockStore({});
    const expectedAction = {
      type: ActionTypes.GET_GROUP_USERS,
      groupUsers
    };
    return store.dispatch(GroupActions.fetchGroupUsers(groupId))
    .then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
});
