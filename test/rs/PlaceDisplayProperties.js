var assert = require('chai').assert,
    GedcomX = require('../../');

describe('PlaceDisplayProperties', function(){
  
  var json = {
    name: 'place name',
    fullName: 'place name, in a place',
    type: 'place type'
  };
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.PlaceDisplayProperties(), GedcomX.PlaceDisplayProperties, 'An instance of PlaceDisplayProperties is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.PlaceDisplayProperties(), GedcomX.PlaceDisplayProperties, 'An instance of PlaceDisplayProperties is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    test(GedcomX.PlaceDisplayProperties(json));
  });
  
  it('Build', function(){
    test(GedcomX.PlaceDisplayProperties()
      .setName(json.name)
      .setFullName(json.fullName)
      .setType(json.type));
  });
  
  it('toJSON', function(){
    assert.deepEqual(GedcomX.PlaceDisplayProperties(json).toJSON(), json);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.PlaceDisplayProperties();
    var obj2 = GedcomX.PlaceDisplayProperties(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});

function test(display){
  assert.equal(display.getName(), 'place name');
  assert.equal(display.getFullName(), 'place name, in a place');
  assert.equal(display.getType(), 'place type');
}