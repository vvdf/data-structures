var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  return newStack;
};

var stackMethods = {
  push : function(value) {
    var newestIndex = this.size().toString();
    this.storage[newestIndex] = value;
  },
  pop : function() {
    var poppedElement = this.storage[(this.size() - 1).toString()];
    delete this.storage[(this.size() - 1).toString()];
    return poppedElement;
  },
  size : function() {
    return (Object.values(this.storage).length);
  }
};