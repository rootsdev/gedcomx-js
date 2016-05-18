var assert = require('chai').assert,
    NamePart = require('../src/NamePart'),
    Qualifier = require('../src/Qualifier');

describe('NamePart', function(){
  
  it('Create plain', function(){
    var newNamePart = new NamePart(),
        part = NamePart();
    assert.instanceOf(newNamePart, NamePart, 'An instance of NamePart is not returned when calling the constructor with new.');
    assert.instanceOf(part, NamePart, 'An instance of NamePart is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var part = NamePart({
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
    var part = NamePart({
      id: 'namepart',
      type: 'http://gedcomx.org/Given',
      value: 'Jonathan',
      qualifiers: [
        Qualifier({
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
    var part = NamePart()
      .setId('namepart')
      .setType('http://gedcomx.org/Given')
      .setValue('Jonathan')
      .addQualifier(Qualifier().setName('http://gedcomx.org/Primary'));
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
    }, part = NamePart(data);
    assert.deepEqual(part.toJSON(), data);
  });
  
});