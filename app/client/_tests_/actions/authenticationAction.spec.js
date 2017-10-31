/* global jest */
import 'babel-polyfill';
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';

import * as ActionTypes from '../../actions/types';
import * as AuthenticationActions from '../../actions/authenticationActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Authentication', () => {
  it('should handle login', () => {
    axios.post = jest.fn(() => {
      return Promise.resolve(
        {
          data:
          {
            data:
            {
              token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSw'
            }
          }
        }
      );
    });

    const user = {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSw'
    };
    const store = mockStore({}, user);
    const data = {
      username: 'blessing',
      password: '1234'
    };
    const expectedAction = {
      type: ActionTypes.GET_CURRENT_AUTHENTICATED_USER,
      user
    };
    return store.dispatch(AuthenticationActions.login(data))
    .then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
  it('should handle logout', () => {
    axios.post = jest.fn(() => {
      return Promise.resolve(
        {}
      );
    });

    const store = mockStore({});
    const expectedAction = {
      type: ActionTypes.GET_CURRENT_AUTHENTICATED_USER,
    };
    return store.dispatch(AuthenticationActions.logout())
    .then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
});
