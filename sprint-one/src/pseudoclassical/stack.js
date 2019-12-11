var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value) {
    var newestIndex = this.size().toString();
    this.storage[newestIndex] = value;
};

Stack.prototype.pop = function() {
    var poppedElement = this.storage[(this.size() - 1).toString()];
    delete this.storage[(this.size() - 1).toString()];
    return poppedElement;
};

Stack.prototype.size = function() {
    return (Object.values(this.storage).length);
};