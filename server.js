var express = require('express');
var app = express();
var useragent = require('express-useragent');

app.use(useragent.express());
app.get('/', function(req, res){
  var result = {
    "ipaddress" : req.headers['x-forwarded-for'],
    "language" : req.acceptsLanguages()[0],
    "os" : req.useragent.os
  }
  res.send(result);
});

app.listen(process.env.PORT || 8080, function () {
  console.log('App listening at ', process.env.PORT);
});
