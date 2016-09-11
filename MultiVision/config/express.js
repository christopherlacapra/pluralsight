
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var stylus = require("stylus");
var path = require("path");
var routes = require("../routes/index");
var users = require("../routes/users");

module.exports = function (app, config) {
    
    // uncomment after placing your favicon in /public
    //app.use(favicon(config.rootPath + '/public/favicon.ico'));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(require('stylus').middleware(path.join(config.rootPath, 'public')));
    app.use(express.static(path.join(config.rootPath, 'public')));

    app.use('/', routes);
    app.use('/users', users);
}