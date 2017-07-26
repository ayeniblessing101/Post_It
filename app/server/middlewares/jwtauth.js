const User = require('../models').User;
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // const token = (req.body && req.body.access_token)
  // || (req.query && req.query.access_token) || (req.headers['x-access-token']);
  const authorizationHeader = req.headers['authorization'];
  let token;

  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
  }
  if (token) {
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        return res.json({ error: 'Failed to authenticate' });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).send({
      error: 'No Token Provided'
    });
  }
};
