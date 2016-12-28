'use strict';

let Stack = require('./nodebasedstack');

function Queue() {
  this.enqueueStack = new Stack();
  this.dequeueStack = new Stack();
}

Queue.prototype.enqueue = function(value) {
  if (this.dequeueStack.length <= 0) {
    this.enqueueStack.push(value);
  } else {
    let len = this.dequeueStack.length;
    for (let i = 0;i < len;i++) {
      this.enqueueStack.push(this.dequeueStack.pop());
    }
    this.enqueueStack.push(value);
  }
};

Queue.prototype.dequeue = function() {
  if (this.enqueueStack.length <= 0) {
    return this.dequeueStack.pop();
  } else {
    let len = this.enqueueStack.length;
    for (let i = 0;i < len;i++) {
      this.dequeueStack.push(this.enqueueStack.pop());
    }
    return this.dequeueStack.pop();
  }
};

let queue = new Queue();

queue.enqueue(5);
queue.enqueue(12);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(15);
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(50);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
