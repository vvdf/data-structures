

// Instantiate a new graph
var Graph = function() {
  this.collection = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.collection[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.collection.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.collection) {
    this.removeEdge(node, key);
  }
  delete this.collection[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.collection[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.collection[fromNode].push(toNode);
  this.collection[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.collection[fromNode].splice(this.collection[fromNode].indexOf(toNode), 1);
  this.collection[toNode].splice(this.collection[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // _.each(Object.keys(this.collection), cb);
  _.each(Object.keys(this.collection), cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 .constructor   O(1)
 .addNode       O(1)
 .contains      O(1)
 .removeNode    O(n)
 .hasEdge       O(n)
 .addEdge       O(n)
 .removeEdge    O(n)
 .forEachNode   O(n)
 */

