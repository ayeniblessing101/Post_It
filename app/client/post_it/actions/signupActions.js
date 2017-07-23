import axios from 'axios';

exports.userSignupRequest = (userData) => {
  return dispatch => {
    return axios.post('/api/user/signup', userData);
  };
};

exports.isUserExists = (identifier) => {
  return dispatch => {
    return axios.get(`/api/user/signup/${identifier}`);
  };
};
