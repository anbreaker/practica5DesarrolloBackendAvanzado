'use strict';
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
      if (!user || !(await bcrypt.compare(password, user.password))) {
        res.locals.error = res.__('Invalid Credentials');
        res.locals.email = email;
        res.render('login');
        return;
      }

      // if(user && password) load _id and email, in user session
      req.session.authUser = {
        _id: user._id,
        email: user.email, // rol:...
      };

      // If there is a user and correct pass, redirect to private area.
      res.redirect('/nodepop-private');
    } catch (error) {
      next(error);
    }
  }

  /**
   * Post /api/loginJWT
   */
  async postJWT(req, res, next) {
    try {
      // input values
      const {email, password} = req.body;

      // Search user in the database
      const user = await User.findOne({email});
      // if there is no user or incorrect password, error
      if (!user) return res.status(404).send({message: 'This user does not exists'});

      const validPassword = await user.validPassword(password);
      if (!validPassword) return res.status(401).json({auth: false, token: null});

      const tokenJWT = jwt.sign(
        {id: user._id},
        process.env.JWT_SECRET,
        {
          expiresIn: 1000 * 60 * 60 * 24,
        },
        (error, tokenJWT) => {
          if (error) return next(error);
          res.json({auth: true, tokenJWT: tokenJWT});
        }
      );
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get /logout
   */
  logoutSession(req, res, next) {
    req.session.destroy((error) => {
      if (error) {
        next(error);
        return;
      }
      res.redirect('/');
    });
  }
}

module.exports = new LoginController();
