var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var newestIndex = someInstance.size().toString();
    storage[newestIndex] = value;
  };

  someInstance.dequeue = function() {
    var poppedElement = storage["0"];
    for (var i = 0; i < someInstance.size() - 1; i++) {
     storage[i.toString()] = Object.values(storage)[i + 1];
    }
    delete storage[(someInstance.size() - 1).toString()];
    return poppedElement;
  };

  someInstance.size = function() {
    var instanceSize = 0;
    for (var key in storage) {
      instanceSize++;
    }
    return instanceSize;
  };

  return someInstance;
};
