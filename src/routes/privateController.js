'use strict';
const Advert = require('../models/Advert');

class PrivateController {
  /**
   * Get /private
   */

  async getPrivate(req, res, next) {
    // render of private web
    try {
      const adverts = await Advert.find();
      res.render('nodepop-private', {adverts});
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PrivateController();
