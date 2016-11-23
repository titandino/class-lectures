'use strict';

const fs = require('fs');
const EE = require('events');
const ee = new EE();

let files = ['file1.txt', 'file2.txt', 'file3.txt'];
let curr = 0;

ee.on('readNext', function() {
  fs.readFile(files[curr++], function(err, data) {
    console.log('Read file ' + curr);
    if (curr < files.length) {
      ee.emit('readNext');
    }
  });
});

ee.emit('readNext');

fs.readFile('img.bmp', function(err, data) {
  let offset = data.readInt16LE(10);
  console.log(offset);
});
