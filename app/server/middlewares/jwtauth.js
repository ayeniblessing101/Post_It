const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
  const authorizationHeader = request.headers.authorization;
  let token;
  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
  }
  if (token) {
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        return response.status(403).json({ error: 'Failed to authenticate' });
      }
      request.decoded = decoded;
      next();
    });
  } else {
    return response.status(403).send({
      error: 'No Token Provided'
    });
  }
};
