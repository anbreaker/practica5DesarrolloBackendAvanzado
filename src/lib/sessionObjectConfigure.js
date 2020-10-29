'use strict';
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);
const mongooseConnection = require('./connectMongooseDB');

const session = {
  name: 'nodeapi-session',
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: false,
  cookie: {
    secure: false, //should be true for https
    maxAge: 1000 * 60 * 60 * 24 * 2, //2 days
  },
  // Session on mongoDB
  store: new MongoStore({
    mongooseConnection: mongooseConnection,
  }),
};

module.exports = session;
