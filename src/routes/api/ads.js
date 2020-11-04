'use strict';

const {Router} = require('express');
const router = Router();
const path = require('path');
const multerMiddlewareUploads = require('../../middlewares/multerMiddleware');
const Advert = require('../../models/Advert');
const filterCost = require('../../lib/filterCost');
const cote = require('cote');
const packageJson = require('../../../package.json');

const requester = new cote.Requester({name: packageJson.name});

router.get('/', async (req, res, next) => {
  try {
    console.log(`\nThe user of this session has the id: ${req.userId}\n`);

    const filter = {};
    // if (req.query.name) filter.name = req.query.name;
    if (req.query.name) filter.name = {$regex: '^' + `${req.query.name}`};
    if (req.query.onSale) filter.onSale = req.query.onSale;
    if (req.query.imagePath) filter.imagePath = req.query.imagePath;
    if (req.query.tags) filter.tags = {$all: req.query.tags};
    if (req.query.cost) filter.cost = filterCost(req.query.cost);

    const limit = parseInt(req.query.limit || 10);
    const skip = parseInt(req.query.skip || 0);

    const sort = req.query.sort;
    const select = req.query.select;

    const advertsList = await Advert.list(filter, limit, skip, sort, select);

    res.json(advertsList || []);
  } catch (error) {
    next(error);
  }
});

// To send data from PostMan
router.post(
  '/',
  (req, res, next) => {
    next();
  },
  multerMiddlewareUploads.single('image'),
  async (req, res, next) => {
    try {
      const {name, onSale, cost, tags} = req.body;
      const imagePath = req.file.filename;
      const newAdvert = new Advert({name, onSale, cost, imagePath, tags});

      const advert = await newAdvert.save();

      // Config params requester
      const originPathImg = path.join(
        __dirname,
        '../../public/uploads',
        advert.imagePath
      );
      const destinationPathImgResize = path.join(
        __dirname,
        '../../public/uploads/thumbnails',
        `${advert.imagePath}.png`
      );

      // Send "Events / messages" to microservice
      requester.send({type: 'resizeImg', originPathImg, destinationPathImgResize});

      // updateDatabase
      // advert.thumbnail = advert.imagePath;
      // advert.save();

      res.status(201).json(advert);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res, next) => {
  try {
    await Advert.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const advert = await Advert.findById(req.params.id);
    res.json(advert);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const advertData = req.body;

    const advertSave = await Advert.findOneAndUpdate({_id: id}, advertData, {
      new: true,
    });

    res.json(advertSave);
  } catch (error) {
    next(error);
  }
});

router.post('/:id/notOnSale', async (req, res, next) => {
  try {
    const id = req.params.id;
    const advert = await Advert.findOne({_id: id});
    const advertnotOnSale = await advert.notOnSale();

    res.json(advertnotOnSale);
  } catch (error) {
    next(error);
  }
});

router.post('/:id/yesOnSale', async (req, res, next) => {
  try {
    const id = req.params.id;
    const advert = await Advert.findOne({_id: id});
    const advertyesOnSale = await advert.yesOnSale();

    res.json(advertyesOnSale);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
