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
 * @param {string} searchParams - search parameters
 * @param {int} offset - offset
 * @param {int} limit - limit
 *
 * @return {function} action payload data and action type
 */
export default function getUsersAction(searchParams, offset = 0, limit = 5) {
  return dispatch => (
    axios.get('/api/v1/user/search', {
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
