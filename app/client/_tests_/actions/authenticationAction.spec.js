/* global jest */
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';

import mockData from './../../../__mocks__/mockData';
import * as ActionTypes from '../../actions/types';
import * as authenticationActions from '../../actions/authenticationActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Authentication', () => {
  it('should set current user object in store on successful login', () => {
    axios.post = jest.fn(() => {
      return Promise.resolve({
        data: { token: mockData.token },
      });
    });

    const user = {
      ...mockData.decodedToken,
    };
    const store = mockStore({}, user);
    const data = mockData.user;
    const expectedAction = {
      type: ActionTypes.GET_CURRENT_AUTHENTICATED_USER,
      user,
    };
    return store.dispatch(authenticationActions.login(data)).then(() => {
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
  it('should empty current user object on successful logout', () => {
    const store = mockStore({});
    const expectedAction = {
      type: ActionTypes.GET_CURRENT_AUTHENTICATED_USER,
      user: {},
    };
    store.dispatch(authenticationActions.logout());
    expect(store.getActions()).toEqual([expectedAction]);
  });
  it('should set current user object in store on successful signup', () => {
    axios.post = jest.fn(() => {
      return Promise.resolve({
        data: {
          status: true,
          message: 'Signup was successful',
          token: mockData.token,
        },
      });
    });
    const user = {
      ...mockData.decodedToken,
    };

    const expectedAction = {
      type: ActionTypes.GET_CURRENT_AUTHENTICATED_USER,
      user,
    };
    const store = mockStore({});
    return store
      .dispatch(authenticationActions.userSignupRequest(user))
      .then(() => {
        expect(store.getActions()).toEqual([expectedAction]);
      });
  });
});
