'use strict';
const Advert = require('../models/Advert');

class PrivateController {
  /**
   * Get /private
   */

  async getPrivate(req, res, next) {
    try {
      const adverts = await Advert.find();
      res.render('index', {adverts});
      // res.json(adverts);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PrivateController();
