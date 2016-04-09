var http = require('http');
var port = process.env.port || 1337;
var express = require("express");

var app = express();
app.use(express.static('public'));


app.listen(1337, function () { });