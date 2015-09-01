var express = require("express");
var request = require('request');

var app = express();

app.get("/", function (req, res) {
  var query = req.query;

  request({ url: query.url, json: true }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(body);
    } else {
      res.error(error);
    }
  });
});

var server = app.listen(5000, function () {
  var address = server.address();
  var host = address.address;
  var port = address.port;
  console.log("App listening at http://%s:%s", host, port);
});