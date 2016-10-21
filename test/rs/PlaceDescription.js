var assert = require('chai').assert,
    GedcomX = require('../../');

describe('PlaceDescription', function(){
  
  var json = {
    display: {
      name: 'place name',
      fullName: 'place name, in a place',
      type: 'place type'
    }
  };
  
  it('Create with JSON', function(){
    test(GedcomX.PlaceDescription(json));
  });
  
  it('Build', function(){
    test(GedcomX.PlaceDescription()
      .setDisplay(json.display));
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.PlaceDescription(json).toJSON(), json);
  });
  
});

function test(description){
  var display = description.getDisplay();
  assert.equal(display.getName(), 'place name');
  assert.equal(display.getFullName(), 'place name, in a place');
  assert.equal(display.getType(), 'place type');
}