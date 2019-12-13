var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var nodeInstance = Node(value);

    if (list.head === null) {
      list.head = nodeInstance;
    }
    if (list.tail !== null) {
      list.tail.next = nodeInstance;
    }
    list.tail = nodeInstance;
  };

  list.removeHead = function() {
    var oldHeadVal = list.head.value;
    list.head = list.head.next;
    return oldHeadVal;
  };

  list.contains = function(target) {
    for (var currentNode = list.head; currentNode !== null; currentNode = currentNode.next) {
      if (currentNode.value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 .addToTail(): O(1);
 .removeHead(): O(1);
 .contains(): O(n);
 */