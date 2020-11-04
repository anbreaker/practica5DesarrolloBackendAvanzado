'use strict';
const jwt = require('jsonwebtoken');

// Middleware authentication JWT
module.exports = function verifyToken() {
  return (req, res, next) => {
    const tokenJWT =
      req.get('authorization-tokenJWT') ||
      req.headers['authorization-tokenJWT'] ||
      req.query.token ||
      req.body.token;

    jwt.verify(tokenJWT, process.env.JWT_SECRET, (error, payload) => {
      if (!tokenJWT) {
        return res.status(401).json({
          auth: false,
          message: 'No token provided',
        });
      }

      const {exp} = jwt.decode(tokenJWT);
      if (Date.now() >= exp * 1000) {
        return res.status(401).json({
          auth: false,
          message: 'Token Expired, login Again',
        });
      }

      if (error) return next(error);
      req.userId = payload.id;
      next();
    });
  };
};
