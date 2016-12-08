var express = require('express');
var path = require('path');

var app = express();

app.use("/", express.static(__dirname + "/public"));

var port = process.env.PORT || 5053;

app.listen(port);
console.log("Server running on port: " + port);

module.exports = app;
