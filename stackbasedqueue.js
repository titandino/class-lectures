'use strict';

let Stack = require('./stack');

function Queue() {
  this.enqueueStack = new Stack();
  this.dequeueStack = new Stack();
}

Queue.prototype.enqueue = function(value) {
  if (this.dequeueStack.length <= 0) {
    this.enqueueStack.push(value);
  } else {
    for (let i = 0;i < this.dequeueStack.length;i++) {
      this.enqueueStack.push(this.dequeueStack.pop());
    }
    this.enqueueStack.push(value);
  }
};

Queue.prototype.dequeue = function() {
  if (this.enqueueStack.length <= 0) {
    return this.dequeueStack.pop();
  } else {
    for (let i = 0;i < this.enqueueStack.length;i++) {
      this.dequeueStack.push(this.enqueueStack.pop());
    }
    this.dequeueStack.pop();
  }
};
