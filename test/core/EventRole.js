var assert = require('chai').assert,
    GedcomX = require('../../');

describe('EventRole', function(){
  
  it('Create plain', function(){
    assert.instanceOf(GedcomX.EventRole(), GedcomX.EventRole, 'An instance of EventRole is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.EventRole(), GedcomX.EventRole, 'An instance of EventRole is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var role = GedcomX.EventRole({
      person: {
        resource: 'http://person'
      },
      type: 'http://gedcomx.org/Witness',
      details: 'One of two witnesses'
    });
    assert.equal(role.getPerson().getResource(), 'http://person');
    assert.equal(role.getType(), 'http://gedcomx.org/Witness');
    assert.equal(role.getDetails(), 'One of two witnesses');
  });
  
  it('Create with mixed data', function(){
    var role = GedcomX.EventRole({
      person: GedcomX.ResourceReference({
        resource: 'http://person'
      }),
      type: 'http://gedcomx.org/Witness',
      details: 'One of two witnesses'
    });
    assert.equal(role.getPerson().getResource(), 'http://person');
    assert.equal(role.getType(), 'http://gedcomx.org/Witness');
    assert.equal(role.getDetails(), 'One of two witnesses');
  });
  
  it('Build', function(){
    var role = GedcomX.EventRole()
      .setPerson(GedcomX.ResourceReference().setResource('http://person'))
      .setType('http://gedcomx.org/Witness')
      .setDetails('One of two witnesses');
    assert.equal(role.getPerson().getResource(), 'http://person');
    assert.equal(role.getType(), 'http://gedcomx.org/Witness');
    assert.equal(role.getDetails(), 'One of two witnesses');
  });
  
  it('toJSON', function(){
    var data = {
      person: {
        resource: 'http://person'
      },
      type: 'http://gedcomx.org/Witness',
      details: 'One of two witnesses'
    }, role = GedcomX.EventRole(data);
    assert.deepEqual(role.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.EventRole();
    var obj2 = GedcomX.EventRole(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});