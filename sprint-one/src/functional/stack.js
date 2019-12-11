var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var newestIndex = someInstance.size().toString();
    storage[newestIndex] = value;
  };

  someInstance.pop = function() {
    var poppedElement = storage[(someInstance.size() - 1).toString()];
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
