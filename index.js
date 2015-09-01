var express = require("express");
var request = require('request');

var app = express();
app.set('port', (process.env.PORT || 5000));

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

var server = app.listen(app.get('port'), function () {
  console.log("App listening at http://%s:%s", server.address().address, app.get('port'));
});