var assert = require('chai').assert,
    GedcomX = require('../');

describe('Qualifier', function(){
  
  it('Create plain', function(){
    var newRef = new GedcomX.Qualifier(),
        ref = GedcomX.Qualifier();
    assert.instanceOf(newRef, GedcomX.Qualifier, 'An instance of Qualifier is not returned when calling the constructor with new.');
    assert.instanceOf(ref, GedcomX.Qualifier, 'An instance of Qualifier is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var ref = GedcomX.Qualifier({
      name: 'http://gedcomx.org/Age',
      value: '37'
    });
    assert.equal(ref.getName(), 'http://gedcomx.org/Age');
    assert.equal(ref.getValue(), '37');
  });
  
  it('Build', function(){
    var ref = GedcomX.Qualifier()
      .setName('http://gedcomx.org/Age')
      .setValue('37');
    assert.equal(ref.getName(), 'http://gedcomx.org/Age');
    assert.equal(ref.getValue(), '37');
  });
  
  it('toJSON', function(){
    var data = {
      name: 'http://gedcomx.org/Age',
      value: '37'
    }, ref = GedcomX.Qualifier(data);
    assert.deepEqual(ref.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Qualifier();
    var obj2 = GedcomX.Qualifier(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});