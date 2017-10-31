/* global jest */
import 'babel-polyfill';
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';


import * as ForgotPasswordActions from '../../actions/forgotPasswordActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('forgotPasswordAction', () => {
  it('should a reset password email', () => {
    axios.post = jest.fn(() => {
      return Promise.resolve(
        {
          status: true,
          message: 'Succesful'
        }
      );
    });
    const email =
      {
        email: 'db@gmail.com',
      };
    const store = mockStore({});
    return store.dispatch(ForgotPasswordActions.resetPasswordEmail(email))
    .then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
  it('should check token', () => {
    axios.get = jest.fn(() => {
      return Promise.resolve(
        {
          message: 'Token Found!'
        }
      );
    });
    const token = {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6M',
    };
    const email = {
      email: 'db@gmail.com',
    };
    const store = mockStore({});
    return store.dispatch(ForgotPasswordActions.checkToken(token, email))
    .then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
  it('should reset user password', () => {
    axios.post = jest.fn(() => {
      return Promise.resolve(
        {
          message: 'Password updated succesfully'
        }
      );
    });
    const newPasswod = {
      newPasswod: '2345',
    };
    const email = {
      email: 'db@gmail.com',
    };
    const store = mockStore({});
    return store.dispatch(ForgotPasswordActions.resetPassword(newPasswod, email))
    .then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
});
