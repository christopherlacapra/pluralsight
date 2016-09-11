﻿var express = require("express"),
    logger = require("morgan"),
    bodyParser = require("body-parser"),
    stylus = require("stylus");

var env = process.env.NODE_ENV || "development";

var app = express();

function compile(str, path) {
    return stylus(str).set("filename", path);
}

app.set("views", __dirname + "/server/views");
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(stylus.middleware(
    {
        src: __dirname + 'public',
        compile: compile
    }
));

app.use(express.static(__dirname + "/public"));

app.get("*", function (req, res) {
    res.render('index');
});


var port = "3030";
app.listen(port, function () {
    console.log("listening on " + port);
});

