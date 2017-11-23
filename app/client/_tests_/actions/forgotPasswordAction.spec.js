/* global jest */
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';

import mockData from './../../../__mocks__/mockData';
import * as forgotPasswordActions from '../../actions/forgotPasswordActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('forgotPasswordAction', () => {
  it('should  send a reset password email', () => {
    axios.post = jest.fn(() => {
      return Promise.resolve(mockData.successMessages[1]);
    });
    const email = {
      email: mockData.email,
    };
    const store = mockStore({});
    return store
      .dispatch(forgotPasswordActions.resetPasswordEmail(email))
      .then(() => {
        expect(store.getActions()).toEqual([]);
      });
  });
  it('should check if token is valid', () => {
    axios.get = jest.fn(() => {
      return Promise.resolve({
        message: mockData.successMessages[2],
      });
    });
    const token = {
      token: mockData.token,
    };
    const email = {
      email: mockData.email,
    };
    const store = mockStore({});
    return store
      .dispatch(forgotPasswordActions.checkToken(token, email))
      .then(() => {
        expect(store.getActions()).toEqual([]);
      });
  });
});
