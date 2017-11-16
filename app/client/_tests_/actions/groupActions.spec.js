/* global jest */
import 'babel-polyfill';
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';

import mockData from './../../../__mocks__/mockData';
import * as ActionTypes from '../../actions/types';
import * as groupActions from '../../actions/groupActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Group', () => {
  it('should create a group', () => {
    axios.post = jest.fn(() => {
      return Promise.resolve(
        mockData.createGroupResonse
      );
    });
    const group = 'Phoniex';
    const store = mockStore({});
    return store.dispatch(groupActions.createGroup(group))
    .then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
  it('should dispatch fetchGroups action when groups are fetched', () => {
    axios.get = jest.fn(() => {
      return Promise.resolve(
        {
          data: mockData.groups
        }
      );
    });
    const groups = mockData.groups;
    const store = mockStore({}, groups);
    const expectedAction = {
      type: ActionTypes.GET_GROUPS,
      groups
    };
    return store.dispatch(groupActions.fetchGroups())
    .then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
  it('should dispatch fetchGroupUsers action when all users in a group is fetched', () => {
    axios.get = jest.fn(() => {
      return Promise.resolve(
        mockData.fetchGroupsResponse
      );
    });
    const groupId = 1;
    const groupUsers = mockData.groupUsers;
    const store = mockStore({});
    const expectedAction = {
      type: ActionTypes.GET_GROUP_USERS,
      groupUsers
    };
    store.dispatch(groupActions.fetchGroupUsers(groupId))
    .then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
  it('handle success message when a user is added to a group', () => {
    axios.post = jest.fn(() => {
      return Promise.resolve(
        mockData.addUserToGroupResponse
      );
    });
    const groupId = mockData.groupId;
    const user = mockData.user1;
    const status = mockData.status;
    const message = mockData.message;

    const store = mockStore({});
    const expectedAction = {
      type: ActionTypes.ADD_USER_TO_GROUP,
      status,
      message
    };
    store.dispatch(groupActions.addUserToGroup(groupId, user))
    .then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
});
