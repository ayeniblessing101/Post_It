/* global jest */
import 'babel-polyfill';
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';

import * as ActionTypes from '../../actions/types';
import * as GetUsersActions from '../../actions/getUsersAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('get users', () => {
  it('should get all users and paginate the result', () => {
    axios.get = jest.fn(() => {
      return Promise.resolve(
        {
          data: {
            username: 'blessing',
            email: 'blessing.ayeni@andela.com'
          }
        }
      );
    });
    const store = mockStore({});
    const searchParams = 'blessing';
    const offset = 0;
    const limit = 5;
    const expectedAction = {
      type: ActionTypes.GET_ALL_USERS,
      params: {
        q: searchParams,
        offset,
        limit
      }
    };
    return store.dispatch(GetUsersActions.getUsersAction(searchParams, offset, limit))
    .then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
});
