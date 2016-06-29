var express = require('express');
var argv = require('yargs')
  .usage('Usage: $0 [options]')
  .option('p', {
    alias: 'port',
    type: 'number',
    default: 3000
  })
  .option('host', {
    default: '::1'
  })
  .alias('h', 'help')
  .help('help')
  .argv;
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

app.listen(argv.port, argv.host, function () {
  console.log('Listening on '+argv.host+', port '+argv.port+'...');
});

