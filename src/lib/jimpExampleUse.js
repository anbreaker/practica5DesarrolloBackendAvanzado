const jimp = require('jimp');

const resizeImage = async () => {
  // Read the image.
  const image = await jimp.read('./public/nikon.jpg');

  // Resize the image to width 128 and auto height.
  await image.quality(60).resize(128, jimp.AUTO);

  // Save and overwrite the image
  await image.writeAsync('./public/thumbnail/nikon-small.jpg');
};

resizeImage();
