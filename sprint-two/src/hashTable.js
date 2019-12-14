

var HashTable = function(baseLimit) {
  if (baseLimit === undefined) {
    this._limit = 8;
  } else { this._limit = baseLimit; }
  this._storage = LimitedArray(this._limit);
  this._length = 0;
};

HashTable.prototype.insert = function(k, v) {
  if (typeof k !== 'string') {
    k = JSON.stringify(k);
  }
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
  };

  if (!keyExists()) {
    // if key doesn't exist in hashtabled data set
    // add key/value tuple to data set
    // increment count by 1
    var tuple = [k, v];
    bucket.push(tuple);
    this._length++;
  }

  // evaluate hashtable needs for resizing;
  // if (length / limit) >= .75
  // resize/repopulate
  var fillRatio = this._length / this._limit;
  if (fillRatio >= 0.75) {
    var bigLimit = this._limit * 2;
    var bigHashStorage = LimitedArray(bigLimit);
    this.populate(bigHashStorage, bigLimit);
    this._storage = bigHashStorage;
    this._limit = bigLimit;
  }
};

HashTable.prototype.retrieve = function(k) {
  if (typeof k !== 'string') {
    k = JSON.stringify(k);
  }
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
  if (typeof k !== 'string') {
    k = JSON.stringify(k);
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  //iterate over everything in the bucket

  var found = false;
  for (let i = 0; found === false && i < bucket.length; i++) {
    //do check to see if first element of tuple in bucket === key
    if (bucket[i][0] === k) {
      //if so, return bucket.splice(i,1);
      this._length--; //  decrement hashtable size when removing element
      bucket.splice(i, 1); // returns an array containing the removed element
      found = true;
    }
  }

  // evaluate hashtable needs for resizing;
  // if (length / limit) <= .25
  // resize/repopulate
  var fillRatio = this._length / this._limit;
  if (fillRatio <= 0.25 && this._limit > 8) {
    var smallLimit = this._limit / 2;
    var smallHashStorage = LimitedArray(smallLimit);
    this.populate(smallHashStorage, smallLimit);
    this._storage = smallHashStorage;
    this._limit = smallLimit;
  }
};

HashTable.prototype.populate = function(toHashStorage, updatedLimit) {
  for (var i = 0; i < this._limit; i++) {
    var tupleCollection = this._storage.get(i);
    // iterate through each tuple in the tupleCollect bucket
    // pushing them by key to our new hash
    if (tupleCollection !== undefined) {
      for (var j = 0; j < tupleCollection.length; j++) {
        var index = getIndexBelowMaxForKey(tupleCollection[j][0], updatedLimit);
        if (toHashStorage.get(index) === undefined) {
          // create a new bucket in place
          toHashStorage.set(index, []);
        }
        var bucket = toHashStorage.get(index);

        bucket.push(tupleCollection[j]);
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 constructor   O(1)
 .insert       O(n)
 .retrieve     O(n)
 .remove       O(n)
 .populate     O(n)
 With resizing implemented, the above would become O(1) for average use case
 */


