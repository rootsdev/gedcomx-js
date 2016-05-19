var assert = require('chai').assert,
    GedcomX = require('../');

describe('PlaceReference', function(){
  
  it('Create plain', function(){
    var newRef = new GedcomX.PlaceReference(),
        ref = GedcomX.PlaceReference();
    assert.instanceOf(newRef, GedcomX.PlaceReference, 'An instance of PlaceReference is not returned when calling the constructor with new.');
    assert.instanceOf(ref, GedcomX.PlaceReference, 'An instance of PlaceReference is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var ref = GedcomX.PlaceReference({
      id: 'ref',
      original: 'Miami, Missouri',
      description: 'http://place/description'
    });
    assert.equal(ref.getId(), 'ref');
    assert.equal(ref.getOriginal(), 'Miami, Missouri');
    assert.equal(ref.getDescription(), 'http://place/description');
  });
  
  it('Build', function(){
    var ref = GedcomX.PlaceReference()
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
    }, ref = GedcomX.PlaceReference(data);
    assert.deepEqual(ref.toJSON(), data);
  });
  
});