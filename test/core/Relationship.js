var assert = require('chai').assert,
    GedcomX = require('../../');

describe('Relationship', function(){
  
  it('Create plain', function(){
    var newRelationship = new GedcomX.Relationship(),
        relationship = GedcomX.Relationship();
    assert.instanceOf(newRelationship, GedcomX.Relationship, 'An instance of Relationship is not returned when calling the constructor with new.');
    assert.instanceOf(relationship, GedcomX.Relationship, 'An instance of Relationship is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var relationship = GedcomX.Relationship({
      type: 'http://gedcomx.org/Couple',
      person1: {
        resource: 'http://identifier/for/person/1'
      },
      person2: {
        resource: 'http://identifier/for/person/2'
      },
      facts: [
        {
          type: 'http://gedcomx.org/Marriage'
        }
      ]
    });
    assert.equal(relationship.getType(), 'http://gedcomx.org/Couple');
    assert.equal(relationship.getPerson1().getResource(), 'http://identifier/for/person/1');
    assert.equal(relationship.getPerson2().getResource(), 'http://identifier/for/person/2');
    assert.equal(relationship.getFacts().length, 1);
    assert.equal(relationship.getFacts()[0].getType(), 'http://gedcomx.org/Marriage');
  });
  
  it('Create with mixed data', function(){
    var relationship = GedcomX.Relationship({
      type: 'http://gedcomx.org/Couple',
      person1: {
        resource: 'http://identifier/for/person/1'
      },
      person2: {
        resource: 'http://identifier/for/person/2'
      },
      facts: [
        GedcomX.Fact({
          type: 'http://gedcomx.org/Marriage'
        })
      ]
    });
    assert.equal(relationship.getType(), 'http://gedcomx.org/Couple');
    assert.equal(relationship.getPerson1().getResource(), 'http://identifier/for/person/1');
    assert.equal(relationship.getPerson2().getResource(), 'http://identifier/for/person/2');
    assert.equal(relationship.getFacts().length, 1);
    assert.equal(relationship.getFacts()[0].getType(), 'http://gedcomx.org/Marriage');
  });
  
  it('Build', function(){
    var relationship = GedcomX.Relationship()
      .setType('http://gedcomx.org/Couple')
      .setPerson1(GedcomX.ResourceReference().setResource('http://identifier/for/person/1'))
      .setPerson2(GedcomX.ResourceReference().setResource('http://identifier/for/person/2'))
      .addFact(GedcomX.Fact().setType('http://gedcomx.org/Marriage'));
    assert.equal(relationship.getType(), 'http://gedcomx.org/Couple');
    assert.equal(relationship.getPerson1().getResource(), 'http://identifier/for/person/1');
    assert.equal(relationship.getPerson2().getResource(), 'http://identifier/for/person/2');
    assert.equal(relationship.getFacts().length, 1);
    assert.equal(relationship.getFacts()[0].getType(), 'http://gedcomx.org/Marriage');
  });
  
  it('toJSON', function(){
    var data = {
      type: 'http://gedcomx.org/Couple',
      person1: {
        resource: 'http://identifier/for/person/1'
      },
      person2: {
        resource: 'http://identifier/for/person/2'
      },
      facts: [
        {
          type: 'http://gedcomx.org/Marriage'
        }
      ]
    }, relationship = GedcomX.Relationship(data);
    assert.deepEqual(relationship.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Relationship();
    var obj2 = GedcomX.Relationship(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
  it('involvesPerson()', function(){
    var relationship = GedcomX.Relationship({
      type: 'http://gedcomx.org/Couple',
      person1: { resource: '#person1'},
      person2: { resource: '#person2'}
    });
    assert(relationship.involvesPerson('person1'));
    assert(!relationship.involvesPerson());
  });
  
  it('getOtherPerson()', function(){
    var relationship = GedcomX.Relationship({
      type: 'http://gedcomx.org/Couple',
      person1: { resource: '#person1'},
      person2: { resource: '#person2'}
    });
    assert(relationship.getOtherPerson('person2').matches('person1'));
  });
  
});