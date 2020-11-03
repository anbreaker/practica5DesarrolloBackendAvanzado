'use strict';

const {Router} = require('express');
const router = Router();
const Advert = require('../models/Advert');

router.get('/', async (req, res, next) => {
  try {
    const adverts = await Advert.find();
    res.render('index', {adverts});
    // res.json(adverts);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
