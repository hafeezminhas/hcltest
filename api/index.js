/**
 * Created by Hafeez Rehman on 10/04/2017.
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var app = express();
var guessCtrl = require('./GuessController');


app.set('views', path.join(__dirname, '../' + 'client'));
app.set('view engine', ejs);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../' + 'client')));

/* Guess Routes */
app.post('api/guess', guessCtrl.CreateGuess);
app.get('api/guess/play/:num', guessCtrl.CreateGuess);

app.use(function(req, res, next) {
    console.log("Gets error");
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/* --- Error Handler for dev only --- */
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;