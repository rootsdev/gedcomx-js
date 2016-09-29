var assert = require('chai').assert,
    GedcomX = require('../../');

describe('ExtensibleData', function(){
  
  it('Create plain', function(){
    var newEd = new GedcomX.ExtensibleData(),
        ed = GedcomX.ExtensibleData();
    assert.instanceOf(newEd, GedcomX.ExtensibleData, 'An instance of ExtensibleData is not returned when calling the constructor with new.');
    assert.instanceOf(ed, GedcomX.ExtensibleData, 'An instance of ExtensibleData is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var ed = GedcomX.ExtensibleData({ id: 'edid' });
    assert.equal(ed.getId(), 'edid', 'ID not saved properly when created with JSON');
  });
  
  it('Change ID', function(){
    var ed = GedcomX.ExtensibleData({ id: 'edid' });
    ed.setId('newId');
    assert.equal(ed.getId(), 'newId', 'ID not saved properly when changed with setId()');
  });
  
  it('toJSON()', function(){
    var ed = GedcomX.ExtensibleData({ id: 'firstId' });
    ed.setId('newId');
    assert.deepEqual(ed.toJSON(), {id:'newId'}, 'JSON export is incorrect');
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.ExtensibleData();
    var obj2 = GedcomX.ExtensibleData(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});