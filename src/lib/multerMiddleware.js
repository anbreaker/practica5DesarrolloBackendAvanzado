'use stric';

const multer = require('multer');
const path = require('path');
const uuid = require('uuid');

// Multer use & Config Multer (middleware)
const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', '/public/uploads'),
  filename: (req, file, callback, next) => {
    callback(null, uuid.v4() + path.extname(file.originalname));
  },
});

const maxSize = 1000000;
const multerMiddlewareUploads = multer({
  storage,
  dest: path.join(__dirname, '..', '/public/uploads'),
  limits: {fileSize: maxSize},
  fileFilter: (req, file, callback) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);

    if (req.headers['content-length'] > maxSize) {
      callback(console.log('\t\nThe file must be an size < 1mb\n'));
    }

    const extensionName = filetypes.test(path.extname(file.originalname));
    if (mimetype && extensionName) {
      return callback(null, true);
    } else {
      callback(
        console.log(
          '\t\nThe file must be a image with extension: jpeg | jpg | png | gif\n'
        )
      );
    }
  },
});

module.exports = multerMiddlewareUploads;
