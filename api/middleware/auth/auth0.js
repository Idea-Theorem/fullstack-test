const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
require('dotenv').config();

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_DOMAIN}`,
  }),
  audience: `${process.env.AUTH0_AUDIENCE}`,
  issuer: `${process.env.AUTH0_ISSUER}`,
  algorithms: ['RS256'],
});

module.exports = {
  checkJwt,
};
