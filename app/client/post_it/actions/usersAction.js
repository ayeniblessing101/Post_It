import axios from 'axios';
import { GET_ALL_USERS } from './types';

const addUsersToReduxState = users => (
  {
    type: GET_ALL_USERS,
    users
  }
);

/**
 * @function getUsers
 * @param {string} - searchParams
 * @param {int} - offset
 * @param {int} - limit
 * @return {void}
 */
export function getUsers(searchParams, offset = 0, limit = 5) {
  return dispatch => (
    axios.get('/api/user/search', {
      params: {
        q: searchParams,
        offset,
        limit
      }
    })
  )
    .then((response) => {
      dispatch(addUsersToReduxState(response.data));
    });
}
