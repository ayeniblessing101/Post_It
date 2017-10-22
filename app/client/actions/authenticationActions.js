import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { GET_CURRENT_AUTHENTICATED_USER } from './types';

/**
 * Set Current User.
 * @param {Object} user - user.
 *
 * @returns {function} action payload data and action type
 */
export function setCurrentUser(user) {
  return {
    type: GET_CURRENT_AUTHENTICATED_USER,
    user
  };
}

/**
 * Handles Logout Request.
 *
 * @returns {function} - dispatches an action to remove a logged in user
 * from the store .
 */
export function logout() {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

/**
 * Handles Login Request.
 * @param {Object} data - accepts user data(username and password).
 *
 * @returns {function} - dispatches an action to set user token to localstorage
 */
export function login(data) {
  return (dispatch) => {
    return axios.post('/api/v1/user/signin', data).then((res) => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwt.decode(token)));
    });
  };
}
