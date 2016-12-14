function Node(val, next) {
  this.val = val;
  this.next = next;
}

function Queue() {
  this.curr = null;
  this.tail = null;
}

Queue.prototype.enqueue = function(val) {
  if (this.curr) {
    this.curr.next = new Node(val);
    this.curr = this.curr.next;
  } else {
    this.curr = new Node(val);
  }
  if (!this.tail) {
    this.tail = this.curr;
  }
};

Queue.prototype.dequeue = function() {
  if (!this.tail) {
    throw new Error('No tail present in queue.');
  }
  let val = this.tail.val;
  this.tail = this.tail.next;
  return val;
};
