var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./db-Initialize.js');
const User = require('./models/user.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use(function(err,req,res,next){
    console.log('Error Message',err.message);
    res.json({
        success: false,
        message:'something went wrong'
    })
})

module.exports = app;
