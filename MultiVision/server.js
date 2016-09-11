var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

var app = express();

var config = require("./config/config")[env];

require('./config/express')(app, config);

require('./config/mongo')(config);

require('./config/routes')(app);

module.exports = app;

//app.listen(config.port,
//    function() {
//        console.log("Magic is happening on " + config.port);
//    });
