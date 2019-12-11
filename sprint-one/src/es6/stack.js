class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
      var newestIndex = this.size().toString();
      this.storage[newestIndex] = value;
  };

  pop() {
      var poppedElement = this.storage[(this.size() - 1).toString()];
      delete this.storage[(this.size() - 1).toString()];
      return poppedElement;
  };

  size() {
      return (Object.values(this.storage).length);
  };
}