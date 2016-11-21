'use strict';

const fs = require('fs');

const wayOne = false;

function readAll(files, callback) {
  let data_arr = [];
  let finished = 0;
  for (let i = 0;i < files.length;i++) {
    fs.readFile(files[i] + '.txt', function(err, data) {
      data_arr[i] = data;
      finished++;
      if (finished >= files.length)
        callback(data_arr);
    });
  }
}

if (wayOne) {
  let curr1 = (new Date()).getTime();
  readAll(['one', 'two', 'three', 'four', 'five'], function(data) {
    console.log('Finished reading all files in ' + ((new Date()).getTime() - curr1) + ' milliseconds using Trent\'s way');
  });
} else {
  let curr2 = (new Date()).getTime();
  fs.readFile('one.txt', function(err, data) {
    fs.readFile('two.txt', function(err, data) {
      fs.readFile('three.txt', function(err, data) {
        fs.readFile('four.txt', function(err, data) {
          fs.readFile('five.txt', function(err, data) {
            console.log('Finished reading all files in ' + ((new Date()).getTime() - curr2) + ' milliseconds using promise/chain callback way');
          });
        });
      });
    });
  });
}
