'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

const loginController = require('./routes/loginController');
const privateController = require('./routes/privateController');
const sessionAuthMiddleware = require('./lib/sessionAuthMiddleware');
const sessionMongoConfigure = require('./lib/sessionMongoConfigure');
const jwtAuthVerifyToken = require('./lib/jwtAuthVerifyToken');

// Initializations
const app = express();

// Conecto to Database
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

// i18n.setLocale('es');
// console.log(i18n.__('Path'));

app.use(morgan('dev'));

// Form sends data, understand it, but not accept images etc...(Method of Express)
app.use(express.urlencoded({extended: true}));

// Config Express Data
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, 'public')));

/**
 * API's Routes './routes/api/routes.adverts';
 */
app.post('/api/loginJWT', loginController.postJWT);
app.post('/api/signup', loginController.createUser);
app.use('/api/ads', jwtAuthVerifyToken(), require('./routes/api/ads'));

/**
 *  Website Routes on './routes/routes.js'
 */

// Initialized sessions with express-session
app.use(sessionMongoConfigure(mongoConnection));

// Object session available in the Views
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

app.use('/', require('./routes/routes'));
app.use('/change-locale', require('./routes/change-locale'));

// Controller structure
app.get('/login', loginController.getLogin);
app.post('/login', loginController.logintPost);
app.get('/logout', loginController.logoutSession);

// Private zone
app.get('/nodepop-private', sessionAuthMiddleware(), privateController.getPrivate);

app.use(require('./lib/handlerError').notFound);
app.use(require('./lib/handlerError').InternalServerError);

// Start the server on './index.js'

module.exports = app;
