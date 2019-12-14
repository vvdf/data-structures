var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  newChild.parent = this;
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
    return false;
  } else {
    return false;
  }
};

treeMethods.searchWholeTree = function(target) {
  var root = this;
  while (root.hasOwnProperty('parent')) {
    root = root.parent;
  }
  return root.contains(target);
};



/*
 * Complexity: What is the time complexity of the above functions?
 .addChild(): O(1);
 .contains(): O(n);
 */