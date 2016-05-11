var assert = require('chai').assert,
    ExtensibleData = require('../src/ExtensibleData');

describe('ExtensibleData', function(){
  
  it('Create plain', function(){
    var newEd = new ExtensibleData(),
        ed = ExtensibleData();
    assert.instanceOf(newEd, ExtensibleData, 'An instance of ExtensibleData is not returned when calling the constructor with new.');
    assert.instanceOf(ed, ExtensibleData, 'An instance of ExtensibleData is not returned when calling the constructor without `new`.');
  });
  
  it('Create with JSON', function(){
    var ed = ExtensibleData({ id: 'edid' });
    assert.equal(ed.getId(), 'edid', 'ID not saved properly when created with JSON');
  });
  
  it('Change ID', function(){
    var ed = ExtensibleData({ id: 'edid' });
    ed.setId('newId');
    assert.equal(ed.getId(), 'newId', 'ID not saved properly when changed with setId()');
  });
  
  it('toJSON()', function(){
    var ed = ExtensibleData({ id: 'firstId' });
    ed.setId('newId');
    assert.deepEqual(ed.toJSON(), {id:'newId'}, 'JSON export incorrect');
  });
  
});