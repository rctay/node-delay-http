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
  .option('f', {
    alias: 'frequency',
    type: 'number',
    description: 'number of times to repeat message',
    default: 10
  })
  .option('period', {
    type: 'number',
    description: 'duration between each repeat (in milliseconds)',
    default: 1000
  })
  .option('message', {
    alias: 'm',
    description: 'message to be repeatedly sent in the response',
    default: 'hi'
  })
  .alias('h', 'help')
  .help('help')
  .argv;
var app = express();

app.get('/', function (req, res) {
  var i = argv.frequency;
  cb();
  return;
  function cb() {
    res.write(argv.message+'\n');
    if (!i--) {
      res.end();
      return;
    }
    setTimeout(cb, argv.period);
  };
});

app.listen(argv.port, argv.host, function () {
  console.log('Listening on '+argv.host+', port '+argv.port+'...');
});

