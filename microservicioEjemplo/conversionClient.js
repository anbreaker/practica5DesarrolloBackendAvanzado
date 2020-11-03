'use strict';

const cote = require('cote');
// Cliente

const requester = new cote.Requester({name: 'Currency Client'});

setInterval(() => {
  requester.send({
    type: 'resize img',
    originPathImg: './img.jpg',
    destinationPathImgResize: 'img-resizell.jpg',
    flag: 1,
  });
}, 2000);
