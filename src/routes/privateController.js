'use strict';
const Advert = require('../models/Advert');
const User = require('../models/User');

class PrivateController {
  /**
   * Get /private
   */

  async getPrivate(req, res, next) {
    // render of private web
    try {
      console.log(req.session.authUser._id);
      const user = await User.findOne({_id: req.session.authUser._id})

      const adverts = await Advert.find();
      res.render('nodepop-private', {adverts, user});
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PrivateController();
