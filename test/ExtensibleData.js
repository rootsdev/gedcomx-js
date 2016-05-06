var assert = require('chai').assert,
    ExtensibleData = require('../src/ExtensibleData');

describe('ExtensibleData', function(){
  
  it('Create plain', function(){
    var newEd = new ExtensibleData(),
        ed = ExtensibleData();
    assert.instanceOf(newEd, ExtensibleData, 'An instance of ExtensibleData is not returned when calling the constructor with new.');
    assert.instanceOf(ed, ExtensibleData, 'An instance of ExtensibleData is not returned when calling the constructor without `new`.');
  });
  
});