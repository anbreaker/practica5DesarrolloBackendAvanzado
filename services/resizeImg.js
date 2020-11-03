'use strict';

const jimp = require('jimp');

const resizeImg = async (originPathImg, destinationPathImgResize) => {
  const image = await jimp.read(originPathImg);
  await image.resize(75, jimp.AUTO);
  await image.writeAsync(destinationPathImgResize);
};

module.exports = resizeImg;
