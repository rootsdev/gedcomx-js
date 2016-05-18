var assert = require('chai').assert,
    PlaceReference = require('../src/PlaceReference');

describe('PlaceReference', function(){
  
  it('Create plain', function(){
    var newRef = new PlaceReference(),
        ref = PlaceReference();
    assert.instanceOf(newRef, PlaceReference, 'An instance of PlaceReference is not returned when calling the constructor with new.');
    assert.instanceOf(ref, PlaceReference, 'An instance of PlaceReference is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var ref = PlaceReference({
      id: 'ref',
      original: 'Miami, Missouri',
      description: 'http://place/description'
    });
    assert.equal(ref.getId(), 'ref');
    assert.equal(ref.getOriginal(), 'Miami, Missouri');
    assert.equal(ref.getDescription(), 'http://place/description');
  });
  
  it('Build', function(){
    var ref = PlaceReference()
      .setId('ref')
      .setOriginal('Miami, Missouri')
      .setDescription('http://place/description');
    assert.equal(ref.getId(), 'ref');
    assert.equal(ref.getOriginal(), 'Miami, Missouri');
    assert.equal(ref.getDescription(), 'http://place/description');
  });
  
  it('toJSON', function(){
    var data = {
      id: 'ref',
      original: 'Miami, Missouri',
      description: 'http://place/description'
    }, ref = PlaceReference(data);
    assert.deepEqual(ref.toJSON(), data);
  });
  
});