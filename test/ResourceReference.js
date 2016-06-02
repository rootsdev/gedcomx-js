var assert = require('chai').assert,
    GedcomX = require('../');

describe('ResourceReference', function(){
  
  it('Create plain', function(){
    var newRR = new GedcomX.ResourceReference(),
        rr = GedcomX.ResourceReference();
    assert.instanceOf(newRR, GedcomX.ResourceReference, 'An instance of ResourceReference is not returned when calling the constructor with new.');
    assert.instanceOf(rr, GedcomX.ResourceReference, 'An instance of ResourceReference is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var rr = GedcomX.ResourceReference({ resource: 'http://example.com' });
    assert.equal(rr.getResource(), 'http://example.com', 'Resource not saved properly when created with JSON');
  });
  
  it('Change resource', function(){
    var rr = GedcomX.ResourceReference({ resource: 'http://example.com' });
    rr.setResource('http://newuri.com');
    assert.equal(rr.getResource(), 'http://newuri.com', 'Resource not saved properly when changed with setResource()');
  });
  
  it('toJSON()', function(){
    var rr = GedcomX.ResourceReference({ resource: 'http://example.com' });
    rr.setResource('http://newuri.com');
    assert.deepEqual(rr.toJSON(), { resource: 'http://newuri.com' }, 'JSON export is incorrect');
    
    rr = GedcomX.ResourceReference();
    assert.deepEqual(rr.toJSON(), {});
  });
  
});