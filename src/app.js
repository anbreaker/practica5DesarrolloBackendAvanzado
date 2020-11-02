'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

const loginControllerWeb = require('./routes/loginControllerWeb');
const loginControllerPostman = require('./routes/loginControllerPostman');
const privateController = require('./routes/privateController');
const sessionAuthMiddleware = require('./lib/sessionAuthMiddleware');
const sessionMongoConfigure = require('./lib/sessionMongoConfigure');
const jwtAuthVerifyToken = require('./lib/jwtAuthVerifyToken');

// Initializations
const app = express();

// Connect to Database
const mongoConnection = require('./lib/connectMongooseDB');

// Setup i18n
const i18n = require('./lib/i18nConfigure');

// Settings
app.set('port', process.env.PORT || 4000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

/**
 * Middlewares
 */
// CookieParser
app.use(cookieParser());

// Middlewares i18n, initialize after cookieParser()
app.use(i18n.init);

// Sms control flow http
app.use(morgan('dev'));

// Form sends data, understand it, but not accept images etc...(Method of Express)
app.use(express.urlencoded({extended: true}));

// Config Express Data
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Initialized sessions with express-session
app.use(sessionMongoConfigure(mongoConnection));

// Object session available in the Views
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

/**
 * API's Routes './routes/api/routes.adverts';
 */
app.post('/api/loginJWT', loginControllerWeb.postJWT);
app.use('/api/ads', jwtAuthVerifyToken(), require('./routes/api/ads'));
app.get('/api/logout', loginControllerWeb.logoutSession);

/**
 *  Website Routes on './routes/routes.js'
 */

app.use('/', require('./routes/routes'));
app.use('/change-locale', require('./routes/change-locale'));

// Controller structure Web
app.get('/login', loginControllerWeb.getLogin);
app.post('/login', loginControllerWeb.logintPost);

// Controller structure Postman
app.post('/api/signup', loginControllerPostman.createUser);
app.post('/api/signin', loginControllerPostman.siginUserPostman);
app.get(
  '/api/private-user',
  jwtAuthVerifyToken(),
  loginControllerPostman.loginUserPostman
);

// Private zone
app.get('/nodepop-private', sessionAuthMiddleware(), privateController.getPrivate);

app.use(require('./lib/handlerError').notFound);
app.use(require('./lib/handlerError').InternalServerError);

// Start the server on './index.js'

module.exports = app;
