import axios from 'axios';

export function createGroup(group) {
  return dispatch => {
    return axios.post('/api/group', group);
  };
}
