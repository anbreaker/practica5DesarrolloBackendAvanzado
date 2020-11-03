'use stric';

const cote = require('cote');
const resizeImg = require('./resizeImg');

// Declarated Microservice
const responder = new cote.Responder({name: 'Thumbnail Creator'});

// Logic
responder.on('resizeImg', (message, done) => {
  console.log(
    `Service: ${message.originPathImg} ${message.destinationPathImgResize} ${Date.now()}`
  );

  // Image Converter
  resizeImg(message.originPathImg, message.destinationPathImgResize);

  done();
});
