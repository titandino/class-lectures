'use strict';

function Node(val, prev) {
  this.val = val;
  this.prev = prev;
}

function Queue() {
  this.head = null;
  this.tail = null;
}

Queue.prototype.enqueue = function(val) {
  let node = new Node(val);
  if (!this.head) {
    this.head = this.tail = node;
  } else {
    this.tail.prev = node;
    this.tail = node;
  }
};

Queue.prototype.dequeue = function() {
  let temp = this.head.val;
  this.head = this.head.prev;
  return temp;
};

let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
