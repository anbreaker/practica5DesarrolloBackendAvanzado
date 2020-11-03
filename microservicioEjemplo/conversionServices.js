'use strict';
// Servicio de resize imagenes
const cote = require('cote');
const jimp = require('jimp');

// Declarar el micro-servicio
const responder = new cote.Responder({name: 'Currency responder'});
let flag = 0;

// Tabla de conversion (DataBase)

// Logica del micro-servicio
responder.on('resize img', (req, done) => {
  flag += 1;
  console.log(
    'servicio:',
    req.originPathImg,
    req.destinationPathImgResize + flag,
    Date.now(),
    flag
  );

  // Convertir imagen

  console.log(req.originPathImg, req.destinationPathImgResize);
  resizeImg(req.originPathImg, req.destinationPathImgResize, flag);

  // done();
});

const resizeImg = async (originPathImg, destinationPathImgResize, flag) => {
  const image = await jimp.read(originPathImg);
  await image.resize(150, jimp.AUTO);
  destinationPathImgResize = flag + destinationPathImgResize;
  await image.writeAsync(destinationPathImgResize);
};
