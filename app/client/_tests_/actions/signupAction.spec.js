/* global jest */
import 'babel-polyfill';
import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';


import * as SignupActions from '../../actions/signupActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Group', () => {
  it('should create a new user', () => {
    axios.post = jest.fn(() => {
      return Promise.resolve(
        {
          status: true,
          message: 'Signup was successful'
        }
      );
    });
    const userData =
      {
        username: 'bamidele',
        email: 'db@gmail.com',
        phoneNo: '2348064476683',
        password: '1234',
        confirm_password: '1234'
      };
    const store = mockStore({});
    return store.dispatch(SignupActions.userSignupRequest(userData))
    .then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
});
