var assert = require('chai').assert,
    GedcomX = require('../../');

describe('ResourceReference', function(){
  
  it('Create with JSON', function(){
    var rr = GedcomX.ResourceReference({ 
      resource: 'http://example.com',
      resourceId: 'rid'
    });
    assert.equal(rr.getResource(), 'http://example.com', 'Resource not saved properly when created with JSON');
    assert.equal(rr.getResourceId(), 'rid');
  });
  
  it('Build', function(){
    var rr = GedcomX.ResourceReference()
      .setResource('http://example.com')
      .setResourceId('rid');
    assert.equal(rr.getResource(), 'http://example.com', 'Resource not saved properly when created with JSON');
    assert.equal(rr.getResourceId(), 'rid');
  });
  
  it('toJSON()', function(){
    var data = { 
      resource: 'http://example.com',
      resourceId: 'rid'
    }, rr = GedcomX.ResourceReference(data);
    assert.deepEqual(rr.toJSON(), data);
  });
  
});