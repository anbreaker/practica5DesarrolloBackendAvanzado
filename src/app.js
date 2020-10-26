'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

// Initializations
const app = express();

// Conecto to Database
require('./lib/connectMongooseDB');

// Setup i18n
const i18n = require('./lib/i18nConfigure');

// Settings
app.set('port', process.env.PORT || 4000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

// Middlewares
// CookieParser
app.use(cookieParser());

// Middlewares i18n
app.use(i18n.init);

// i18n.setLocale('es');
console.log(i18n.__('Path'));

app.use(morgan('dev'));

// Form sends data, understand it, but not accept images etc...(Method of Express)
app.use(express.urlencoded({extended: true}));

// Config Express Data
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Website Routes on './routes/routes.js'
app.use('/', require('./routes/routes'));

app.use('/login', require('./routes/login'));
app.use('/change-locale', require('./routes/change-locale'));

// API's Routes './routes/api/routes.adverts';
app.use('/api/ads', require('./routes/api/ads'));

app.use(require('./lib/handlerError').notFound);
app.use(require('./lib/handlerError').InternalServerError);

// Start the server on './index.js'

module.exports = app;