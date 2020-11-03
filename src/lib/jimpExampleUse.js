const jimp = require('jimp');

const resizeImage = async () => {
  // Read the image.
  const image = await jimp.read('../public/vant.png');

  // Resize the image to width 75 and auto height.
  await image.quality(60).resize(75, jimp.AUTO);

  // Save and overwrite the image
  await image.writeAsync('../public/e453671e-e4de-4c3b-84ae-92859fc53a23.png');
};

resizeImage();
