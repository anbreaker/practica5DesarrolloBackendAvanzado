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

    if (!tokenJWT) {
      return res.status(401).json({
        auth: false,
        message: 'No token provided',
      });
    }

    jwt.verify(tokenJWT, process.env.JWT_SECRET, (error, payload) => {
      if (error) return next(error);
      req.userId = payload.id;
      next();
    });
  };
};
