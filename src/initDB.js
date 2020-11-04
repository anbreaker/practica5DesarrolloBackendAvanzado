'use strict';

require('dotenv').config();

const readline = require('readline');
const conn = require('./middlewares/connectMongooseDB');
const Advert = require('./models/Advert');
const User = require('./models/User');
const fs = require('fs-extra'); //fs with Promise implement

const jsonAdverts = fs.readFileSync('src/db.json', 'utf-8');
const ads = JSON.parse(jsonAdverts);

conn.once('open', async () => {
  try {
    const response = await askUser('Are you sure want to initialize DataBase? (y/n)\n');

    if (response.toLowerCase() !== 'y') {
      console.log('Process is aborted.');
      return process.exit(0);
    }

    await initAdverts();
    await initUsers();

    // Close connection
    conn.close();
  } catch (error) {
    console.log('Error :$', error);
    process.close(1);
  }
});

async function initAdverts() {
  // Delet database
  console.log('Delete all Adverts');
  await Advert.deleteMany();

  // Init Documents
  console.log('Loads initial Database Adverts.');
  const result = await Advert.insertMany(ads);
  console.log(`\tAds created ${result.length}.`);
}

async function initUsers() {
  // Delet database
  console.log('Delete all Users');
  await User.deleteMany();

  // Init Documents
  console.log('Loads initial Database Users.');
  const result = await User.insertMany([
    {email: 'user@user.com', password: await User.encryptPassword('123')},
    {email: 'user@example.com', password: await User.encryptPassword('1234')},
  ]);
  console.log(`\tUsers created ${result.length}.`);
}

const askUser = (ask) => {
  return new Promise((resolve, reject) => {
    const readLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readLine.question(ask, (userResponse) => {
      readLine.close();
      resolve(userResponse);
    });
  });
};
