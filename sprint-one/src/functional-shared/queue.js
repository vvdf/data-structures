var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {
  enqueue : function(value) {
    var newestIndex = this.size().toString();
    this.storage[newestIndex] = value;
  },
  dequeue : function() {
    var poppedElement = this.storage["0"];
    for (var i = 0; i < this.size() - 1; i++) {
     this.storage[i.toString()] = Object.values(this.storage)[i + 1];
    }
    delete this.storage[(this.size() - 1).toString()];
    return poppedElement;
  }, 
  size : function() {
    return (Object.values(this.storage).length);
  }
};


