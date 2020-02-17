const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const guessRouter = require('./routes/guess');
const redis = require('redis');
const redisStore = require('connect-redis')(session);
const client = redis.createClient();
const cors = require('cors');

const app = express();

const monk = require('monk');
const db = monk("localhost/countdown");

const whitelist = ['http://countdown.thewatercats.com', 'http://localhost:3000'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
};
app.use(cors(corsOptions));

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

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/', indexRouter);

app.use('/api', (req, res, next) => {
    // console.log(req.session.email);
    console.log(req.session.id);
    console.log(req.session);
    if (!req.session.email) {
        guessRouter(req, res, next);
    } else {
        usersRouter(req, res, next);
    }
});



module.exports = app;
