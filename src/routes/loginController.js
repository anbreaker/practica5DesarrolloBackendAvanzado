'use strict';
const User = require('../models/User');

class LoginController {
  /**
   * Get /login
   */
  getLogin(req, res, next) {
    res.locals.error = '';
    res.locals.email = '';
    res.render('login');
  }

  /**
   * Post /login
   */
  async logintPost(req, res, next) {
    try {
      // input values
      const {email, password} = req.body;

      // Search user in the database
      const user = await User.findOne({email});

      // if there is no user or incorrect password, error
      if (!user || user.password !== password) {
        res.locals.error = res.__('Invalid Credentials');
        res.locals.email = email;
        res.render('login');
        return;
      }
    } catch (error) {
      next(error);
    }
    // If there is a user and correct pass, redirect to private area.
    res.redirect('/nodepop-user');
  }
}

module.exports = new LoginController();
