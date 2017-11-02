/* global jest */
import 'babel-polyfill';
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';

import mockData from './../../../__mocks__/mockData';
import * as ActionTypes from '../../actions/types';
import getUsersAction from '../../actions/getUsersAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('get users', () => {
  it('should dispatch search user result to store', () => {
    axios.get = jest.fn(() => {
      return Promise.resolve(
        {
          data: mockData.searchParams
        }
      );
    });
    const store = mockStore({});
    const searchParams = 'blessing';
    const offset = 0;
    const limit = 5;
    const expectedAction = {
      type: ActionTypes.GET_ALL_USERS,
      users: mockData.searchParams
    };
    return store.dispatch(getUsersAction(searchParams, offset, limit))
    .then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
});
