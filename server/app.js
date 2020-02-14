const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const redis = require('redis');
const redisStore = require('connect-redis')(session);
const client = redis.createClient();

const app = express();

const monk = require('monk');
const db = monk("localhost/countdown");

app.use((req, res, next) => {
    req.db = db;
    next();
});

app.use(session({
    secret: 'sizwod9f0w124zc',
    resave: false,
    saveUninitialized: true,
    store: new redisStore({host: 'localhost', port: 6379, client: client, ttl: 260})
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
