let fs = require('fs');

function readFile(file) {
  return new Promise(function(res, rej) {
    fs.readFile(file, function(err, buffer) {
      if (err) rej(err);
      res(buffer);
    });
  });
}
