var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require("mongoose");
var routes = require('./routes/index');
var users = require('./routes/users');

var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";


var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

//DB config
if (env === "development") {
    mongo.connect("mongodb://localhost/multivision");
} else {
    mongo.connect("mongodb://root:sallustius@ds021166.mlab.com:21166/node");
}

var db = mongo.connection;

db.on("error", console.error.bind(console, "Connection error"));
db.once("open",
    function () {
        console.log("db opened in " + env);
    });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


//module.exports = app;

var port = process.env.PORT || 3030;
app.listen(port,
    function() {
        console.log("Magic is happening on " + port);
    });
