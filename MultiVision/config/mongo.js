var mongo = require("mongoose");

module.exports = function (config) {

    //DB config
    mongo.connect(config.db);
    var db = mongo.connection;

    db.on("error", console.error.bind(console, "Connection error"));
    db.once("open",
        function () {
            console.log("db opened in " + config.env);
        });
}