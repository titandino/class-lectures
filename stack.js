'use strict';

function Stack() {
  this.values = [];
  this.index = -1;
}

Stack.prototype.push = function(val) {
  this.values[++this.index] = val;
};

Stack.prototype.pop = function() {
  if (this.index < 0) {
    throw Error('Stack underflow.');
  }
  return this.values[this.index--];
};

Stack.prototype.peek = function() {
  if (this.index < 0) {
    throw Error('Stack underflow.');
  }
  return this.values[this.index];
};
