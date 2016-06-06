var assert = require('chai').assert,
    GedcomX = require('../');

describe('NamePart', function(){
  
  it('Create plain', function(){
    var newNamePart = new GedcomX.NamePart(),
        part = GedcomX.NamePart();
    assert.instanceOf(newNamePart, GedcomX.NamePart, 'An instance of NamePart is not returned when calling the constructor with new.');
    assert.instanceOf(part, GedcomX.NamePart, 'An instance of NamePart is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var part = GedcomX.NamePart({
      id: 'namepart',
      type: 'http://gedcomx.org/Given',
      value: 'Jonathan',
      qualifiers: [
        {
          name: 'http://gedcomx.org/Primary'
        }  
      ]
    });
    assert.equal(part.getId(), 'namepart');
    assert.equal(part.getType(), 'http://gedcomx.org/Given');
    assert.equal(part.getValue(), 'Jonathan');
    assert.equal(part.getQualifiers().length, 1);
    assert.equal(part.getQualifiers()[0].getName(), 'http://gedcomx.org/Primary');
  });
  
  it('Create with mixed data', function(){
    var part = GedcomX.NamePart({
      id: 'namepart',
      type: 'http://gedcomx.org/Given',
      value: 'Jonathan',
      qualifiers: [
        GedcomX.Qualifier({
          name: 'http://gedcomx.org/Primary'
        })
      ]
    });
    assert.equal(part.getId(), 'namepart');
    assert.equal(part.getType(), 'http://gedcomx.org/Given');
    assert.equal(part.getValue(), 'Jonathan');
    assert.equal(part.getQualifiers().length, 1);
    assert.equal(part.getQualifiers()[0].getName(), 'http://gedcomx.org/Primary');
  });
  
  it('Build', function(){
    var part = GedcomX.NamePart()
      .setId('namepart')
      .setType('http://gedcomx.org/Given')
      .setValue('Jonathan')
      .addQualifier(GedcomX.Qualifier().setName('http://gedcomx.org/Primary'));
    assert.equal(part.getId(), 'namepart');
    assert.equal(part.getType(), 'http://gedcomx.org/Given');
    assert.equal(part.getValue(), 'Jonathan');
    assert.equal(part.getQualifiers().length, 1);
    assert.equal(part.getQualifiers()[0].getName(), 'http://gedcomx.org/Primary');
  });
  
  it('toJSON', function(){
    var data = {
      id: 'namepart',
      type: 'http://gedcomx.org/Given',
      value: 'Jonathan',
      qualifiers: [
        {
          name: 'http://gedcomx.org/Primary'
        }  
      ]
    }, part = GedcomX.NamePart(data);
    assert.deepEqual(part.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.NamePart();
    var obj2 = GedcomX.NamePart(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});