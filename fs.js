'use strict';

const fs = require('fs');

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

let curr1 = (new Date()).getTime();
readAll(['one', 'two', 'three', 'four', 'five'], function(data) {
  for (let i = 0;i < data.length;i++) {
    console.log(data[i].toString());
  }
  console.log('Finished reading all files in ' + ((new Date()).getTime() - curr1) + 'ms');
});

// let curr2 = (new Date()).getTime();
// fs.readFile('one.txt', function(err, data) {
//   console.log(data.toString());
//   fs.readFile('two.txt', function(err, data) {
//     console.log(data.toString());
//     fs.readFile('three.txt', function(err, data) {
//       console.log(data.toString());
//       fs.readFile('four.txt', function(err, data) {
//         console.log(data.toString());
//         fs.readFile('five.txt', function(err, data) {
//           console.log(data.toString());
//           console.log('Finished reading all files in ' + ((new Date()).getTime() - curr2) + 'ms');
//         });
//       });
//     });
//   });
// });
