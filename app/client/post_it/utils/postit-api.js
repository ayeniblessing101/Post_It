import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

exports.postUserData = () => {
  const url = `${BASE_URL}/api/user/signup`;
  return axios.post(url, {
    username: 'john',
    email: 'john@gmail.com',
    password: 'xxxx'
  })
  .then(response => response.data);
};
