var express = require("express");
var request = require('request');

function extractText(htmlString) {
  var startIndex = htmlString.indexOf('<body>') + 6;
  var endIndex = htmlString.indexOf('</body>');

  return removeTags(htmlString.substring(startIndex, endIndex));
}

function removeTags(htmlString) {
  return htmlString.replace(/<\/?[\w=\ "]+>/g, '');
}

var app = express();
app.set('port', (process.env.PORT || 5000));

app.all("/", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");

  if (!req.query.url) {
    res.status(400).json({ error: 'Missing url parameter'});
    return;
  }

  console.log('requesting %s', req.query.url);
  request({ url: req.query.url, json: true }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(body);
    } else {
      res.status(response.statusCode).json({ error: error || extractText(body) });
    }
  });
});

var server = app.listen(app.get('port'), function () {
  console.log("App listening at http://%s:%s", server.address().address, app.get('port'));
});