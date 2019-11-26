var spawn = require('child_process').spawn;

collection.insert(docs, {safe:true}, function(err, result) {
    var args = ['--db', 'heroku_141w6cdm']
      , mongodump = spawn('/usr/local/bin/mongodump', args);
    mongodump.stdout.on('data', function (data) {
      console.log('stdout: ' + data);
    });
    mongodump.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });
    mongodump.on('exit', function (code) {
      console.log('mongodump exited with code ' + code);
    });
  });