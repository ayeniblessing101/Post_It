const jwt = require('jsonwebtoken');

/**
 * Verifies a token to check if it's valid
 * @param {object} request - request
 * @param {object} response - response
 * @param {function} next - next
 *
 * @returns {object} - success or failure response
 */
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
      error: 'No Token Provided',
    });
  }
};
