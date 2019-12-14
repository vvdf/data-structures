

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    //if not, set(index, []) to start a new bucket
    this._storage.set(index, []);
  }
  var bucket = this._storage.get(index);
  //store get(index) in a new var, then push to array our tuple

  var keyExists = function() {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        return true;
      }
    }
    return false;
  }

  if (!keyExists()) {
    var tuple = [k, v];
    bucket.push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  //iterate over everything in the bucket
  for (let i = 0; i < bucket.length; i++) {
    //do check to see if first element of tuple in bucket === key
    if (bucket[i][0] === k) {
      //if so, return second element of tuple in bucket
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  //iterate over everything in the bucket
  for (let i = 0; i < bucket.length; i++) {
    //do check to see if first element of tuple in bucket === key
    if (bucket[i][0] === k) {
      //if so, return bucket.splice(i,1);
      return bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


