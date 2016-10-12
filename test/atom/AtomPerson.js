var assert = require('chai').assert,
    GedcomX = require('../../');

describe('AtomPerson', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.AtomPerson(), GedcomX.AtomPerson, 'An instance of AtomPerson is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.AtomPerson(), GedcomX.AtomPerson, 'An instance of AtomPerson is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var person = GedcomX.AtomPerson({
      uri: 'uri',
      name: 'name',
      email: 'email'
    });
    assert.equal(person.getUri(), 'uri');
    assert.equal(person.getName(), 'name');
    assert.equal(person.getEmail(), 'email');
  });
  
  it('Build', function(){
    var person = GedcomX.AtomPerson()
      .setUri('uri')
      .setName('name')
      .setEmail('email');
    assert.equal(person.getUri(), 'uri');
    assert.equal(person.getName(), 'name');
    assert.equal(person.getEmail(), 'email');
  });
  
  it('toJSON', function(){
    var data = {
      uri: 'uri',
      name: 'name',
      email: 'email'
    }, person = GedcomX.AtomPerson(data);
    assert.deepEqual(person.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.AtomPerson();
    var obj2 = GedcomX.AtomPerson(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});