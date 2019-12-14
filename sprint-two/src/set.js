var Set = function(isMultiSet) {
  var set = Object.create(setPrototype);
  set._storage = {};
  set._isMulti = false;
  if (isMultiSet === true) {
    set._isMulti = true;
  }
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._isMulti) {
    this._storage[item] = null;
  } else {
    //item already exists in set
    if (this.contains(item)) {
      //increment counter value
      this._storage[item]++;
    } else {
      //create new element with count of 1
      this._storage[item] = 1;
    }
  }
};

setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  if (!this._isMulti) {
    delete this._storage[item];
  } else {
    //item already exists in set
    if (this.contains(item) && this._storage[item] > 1) {
      //increment counter value
      this._storage[item]--;
    } else if (this.contains(item) && this._storage[item] === 1) {
      //create new element with count of 1
      delete this._storage[item];
    }
  }
};

setPrototype.enableMulti = function() {
  this._isMulti = true;
  for (var key in this._storage) {
    this._storage[key] = 1;
  }
};

setPrototype.isMulti = function() {
  return this._isMulti;
};

setPrototype.getCount = function(item) {
  if (!this.contains(item)) {
    return 0;
  } else if (!this.isMulti) {
    return 1;
  } else {
    return this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 .constructor = O(1)
 .add         = O(1)
 .contains    = O(1)
 .remove      = O(1)
 */
