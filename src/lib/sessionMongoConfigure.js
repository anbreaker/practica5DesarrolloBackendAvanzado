'use strict';

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// exporto una función que ejecuta el constructor del middleware de sesiones
module.exports = (mongoConnection) => {
  return session({
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
      mongooseConnection: mongoConnection,
    }),
  });
};

// 2.33
