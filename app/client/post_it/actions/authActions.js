import axios from 'axios';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from './types';

/**
 * Set Current User.
 * @param {Object} user - user.
 * @returns {void}
 */
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

/**
 * Handles Logout Request.
 * @returns {void} .
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
 * @returns {void}
 */
export function login(data) {
  return (dispatch) => {
    return axios.post('/api/user/signin', data).then((res) => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwt.decode(token)));
    });
  };
}
