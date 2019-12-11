var Queue = function() {
  this.storage = {};
};


Queue.prototype.enqueue = function(value) {
  var newestIndex = this.size().toString();
  this.storage[newestIndex] = value;
};

Queue.prototype.dequeue = function() {
  var poppedElement = this.storage["0"];
  for (var i = 0; i < this.size() - 1; i++) {
   this.storage[i.toString()] = Object.values(this.storage)[i + 1];
  }
  delete this.storage[(this.size() - 1).toString()];
  return poppedElement;
};

Queue.prototype.size = function() {
  return (Object.values(this.storage).length);
};
