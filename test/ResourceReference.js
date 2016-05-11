var assert = require('chai').assert,
    ResourceReference = require('../src/ResourceReference');

describe('ResourceReference', function(){
  
  it('Create plain', function(){
    var newRR = new ResourceReference(),
        rr = ResourceReference();
    assert.instanceOf(newRR, ResourceReference, 'An instance of ResourceReference is not returned when calling the constructor with new.');
    assert.instanceOf(rr, ResourceReference, 'An instance of ResourceReference is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var rr = ResourceReference({ resource: 'http://example.com' });
    assert.equal(rr.getResource(), 'http://example.com', 'Resource not saved properly when created with JSON');
  });
  
  it('Change resource', function(){
    var rr = ResourceReference({ resource: 'http://example.com' });
    rr.setResource('http://newuri.com');
    assert.equal(rr.getResource(), 'http://newuri.com', 'Resource not saved properly when changed with setResource()');
  });
  
  it('toJSON()', function(){
    var rr = ResourceReference({ resource: 'http://example.com' });
    rr.setResource('http://newuri.com');
    assert.deepEqual(rr.toJSON(), { resource: 'http://newuri.com' }, 'JSON export is incorrect');
  });
  
});