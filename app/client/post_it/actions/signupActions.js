import axios from 'axios';

exports.userSignupRequest = (userData) => {
  return dispatch => {
    return axios.post('/api/user/signup', userData);
  };
};
