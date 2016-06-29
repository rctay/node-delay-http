var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var i = 10;
  cb();
  return;
  function cb() {
    res.write("hi\n");
    if (!i--) {
      res.end();
      return;
    }
    setTimeout(cb, 1000);
  };
});

app.listen(3000, function () {
  console.log('Listening on port 3000...');
});

