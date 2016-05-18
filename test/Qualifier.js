var assert = require('chai').assert,
    Qualifier = require('../src/Qualifier');

describe('Qualifier', function(){
  
  it('Create plain', function(){
    var newRef = new Qualifier(),
        ref = Qualifier();
    assert.instanceOf(newRef, Qualifier, 'An instance of Qualifier is not returned when calling the constructor with new.');
    assert.instanceOf(ref, Qualifier, 'An instance of Qualifier is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var ref = Qualifier({
      name: 'http://gedcomx.org/Age',
      value: '37'
    });
    assert.equal(ref.getName(), 'http://gedcomx.org/Age');
    assert.equal(ref.getValue(), '37');
  });
  
  it('Build', function(){
    var ref = Qualifier()
      .setName('http://gedcomx.org/Age')
      .setValue('37');
    assert.equal(ref.getName(), 'http://gedcomx.org/Age');
    assert.equal(ref.getValue(), '37');
  });
  
  it('toJSON', function(){
    var data = {
      name: 'http://gedcomx.org/Age',
      value: '37'
    }, ref = Qualifier(data);
    assert.deepEqual(ref.toJSON(), data);
  });
  
});