const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];
  let token;
  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
  }
  if (token) {
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'Failed to authenticate' });
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
