'use strict';

const session = {
  name: 'nodeapi-session',
  secret: 'wia%WF0-IjoxNT/E2M',
  saveUninitialized: true,
  resave: false,
  cookie: {
    secure: false, //should be true for https
    maxAge: 1000 * 60 * 60 * 24 * 2, //2 days
  },
};

module.exports = session;
