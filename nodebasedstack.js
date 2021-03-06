'use strict';

function Node(val, prev) {
  this.value = val;
  this.prev = prev;
}

let Stack = module.exports = function(maxSize) {
  this.maxSize = maxSize || null;
  this.curr = null;
  this.length = 0;
};

Stack.prototype.push = function(val) {
  if (this.maxSize && this.length >= this.maxSize) {
    throw new Error('Stack overflow.');
  }
  this.length++;
  this.curr = new Node(val, this.curr);
};

Stack.prototype.pop = function() {
  if (!this.curr) {
    throw new Error('Stack underflow.');
  }
  this.length--;
  let val = this.curr.value;
  this.curr = this.curr.prev;
  return val;
};

Stack.prototype.peek = function() {
  if (!this.curr) {
    throw new Error('Stack underflow.');
  }
  return this.curr.value;
};
