

// Instantiate a new graph
var Graph = function() {
  this.nodeCollection = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  let newNode = {value: value, connections: []};
  this.nodeCollection.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  for (let i = 0; i < this.nodeCollection.length; i++) {
    if (this.nodeCollection[i].value === value) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(nodeVal) {
  //iterate through nodeCollection
  for (let i = 0; i < this.nodeCollection.length; i++) {
    //if nodecollection[i].value === nodeVal
    if (this.nodecollection[i].value === nodeVal) {
      //splice out nodeCollection[i]
      for (let j = 0; j < this.nodeCollection[i].connections.length; j++) {
        removeEdge(this.nodeConnection[i].value, this.nodeConnection.connections[j].value);
      }
      this.nodeCollection.splice(i, 1);
      i--;
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNodeVal, toNodeVal) {
  for (let i = 0; this.nodeCollection.length; i++) {
    if (this.nodeCollection[i].value === fromNodeVal) {
      var fromNode = this.nodeCollection[i];
      for (let j = 0; j < fromNode.connections.length; j++) {
        if (fromNode.connections[i].value === toNodeVal) {
          return true;
        }
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  fromNode.connections.push(toNode);
  toNode.connections.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNodeVal, toNodeVal) {
  var fromNode, toNode;
  //find nodes with values of fromNode and toNode
  //store nodes in temp var for readability
  //iterate thru the nodes and remove if they have connection, remove connection
  for (let i = 0; this.nodeCollection.length; i++) {
    if (this.nodeCollection[i].value === fromNodeVal) {
      fromNode = this.nodeCollection[i];
    } else if (this.nodeCollection[i].value === toNodeVal) {
      toNode = this.nodeCollection[i];
    }
  }
  for (let i = 0; i < fromNode.connection.length; i++) {
    if (fromNode.connection[i] === toNode) {
      fromNode.connection.splice(i, 1);
      i--;
    }
  }

  for (let j = 0; j < toNode.connection.length; j++) {
    if (toNode.connection[i] === fromNode) {
      toNode.connection.splice(i, 1);
      i--;
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodeCollection, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


