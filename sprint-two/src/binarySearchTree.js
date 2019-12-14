var BinarySearchTree = function(value) {
  var bst = Object.create(bstMethods);
  bst.value = value;
  bst.left = undefined;
  bst.right = undefined;
  return bst;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
  // check for need to rebalance here
};

bstMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.left !== undefined && value < this.value) {
    return this.left.contains(value);
  } else if (this.right !== undefined && value > this.value) {
    return this.right.contains(value);
  } else {
    return false;
  }
};

bstMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 constructor      O(1)
 .insert          O(log(n))
 .contains        O(log(n))
 .depthFirstLog   O(n)
 */
