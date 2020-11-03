'use strict';

const cote = require('cote');
const jimp = require('jimp');

// Declarated microservice
const responder = new cote.Responder({name: 'Currency responder'});
let flag = 0;

// Microservice Logic
responder.on('resize img', (req, done) => {
  flag += 1;
  console.log(
    'servicio:',
    req.originPathImg,
    req.destinationPathImgResize + flag,
    Date.now(),
    flag
  );

  // Image Converter
  resizeImg(req.originPathImg, req.destinationPathImgResize, flag);

  console.log(req.originPathImg, req.destinationPathImgResize);

  // Send findandUpdate...
  done();
});

const resizeImg = async (originPathImg, destinationPathImgResize, flag) => {
  const image = await jimp.read(originPathImg);
  await image.resize(150, jimp.AUTO);
  destinationPathImgResize = flag + destinationPathImgResize;
  await image.writeAsync(destinationPathImgResize);
};
