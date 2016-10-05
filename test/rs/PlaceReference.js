var assert = require('chai').assert,
    GedcomX = require('../../');

describe('PlaceReference', function(){
  
  it('Create with JSON', function(){
    var place = GedcomX.PlaceReference({
      "original": "Mitchel Field, Hempstead, New York, United States",
      "normalized":[
        {"lang": "en-US", "value": "Hempstead, Nassau, New York, United States"}
      ]
    });
    assert.equal(place.getOriginal(), 'Mitchel Field, Hempstead, New York, United States');
    assert.equal(place.getNormalized().length, 1);
    assert.equal(place.getNormalized()[0].getLang(), 'en-US');
    assert.equal(place.getNormalized()[0].getValue(), 'Hempstead, Nassau, New York, United States');
  });
  
  it('Build', function(){
    var place = GedcomX.PlaceReference()
      .setOriginal('Mitchel Field, Hempstead, New York, United States')
      .addNormalized({"lang": "en-US", "value": "Hempstead, Nassau, New York, United States"});
    assert.equal(place.getOriginal(), 'Mitchel Field, Hempstead, New York, United States');
    assert.equal(place.getNormalized().length, 1);
    assert.equal(place.getNormalized()[0].getLang(), 'en-US');
    assert.equal(place.getNormalized()[0].getValue(), 'Hempstead, Nassau, New York, United States');
  });
  
  it('toJSON', function(){
    var data = {
      "original": "Mitchel Field, Hempstead, New York, United States",
      "normalized":[
        {"lang": "en-US", "value": "Hempstead, Nassau, New York, United States"}
      ]
    }, place = GedcomX.PlaceReference(data);
    assert.deepEqual(place.toJSON(), data);
  });
  
});