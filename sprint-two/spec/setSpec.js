describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should be able to construct multiset', function() {
    let newMultiSet = Set(true);
    newMultiSet.add(1);
    newMultiSet.add(2);
    newMultiSet.add(1);
    expect(newMultiSet.contains(1)).to.equal(true);
    expect(newMultiSet.contains(2)).to.equal(true);
    expect(newMultiSet.contains(3)).to.equal(false);
  });

  it('should create a new set, then modify into a multiSet', function() {
    let newMultiSet = Set();
    newMultiSet.enableMulti();
    newMultiSet.add(2);
    newMultiSet.add(1);
    newMultiSet.add(2);
    expect(newMultiSet.contains(1)).to.equal(true);
    expect(newMultiSet.contains(2)).to.equal(true);
    expect(newMultiSet.contains(3)).to.equal(false);
    expect(newMultiSet.getCount(2)).to.equal(2);
    expect(newMultiSet.getCount(5)).to.equal(0);
  });

  it('should remove values from a multiset, and decrement where necessary', function() {
    let newMultiSet = Set(true);
    newMultiSet.add('Mel Gibson');
    newMultiSet.add('George Clooney');
    newMultiSet.add('Mel Gibson');
    newMultiSet.remove('Mel Gibson');
    newMultiSet.remove('George Clooney');
    newMultiSet.remove('Kid');
    expect(newMultiSet.getCount('Mel Gibson')).to.equal(1);
    expect(newMultiSet.contains('George Clooney')).to.equal(false);
    expect(newMultiSet.getCount('Kid')).to.equal(0);
  });
});
