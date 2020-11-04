'use strict';

module.exports = (options) => {
  return (req, res, next) => {
    // role verification to view the website
    if (!req.session.authUser) {
      res.redirect('/login');
      return;
    }
    next();
  };
};
