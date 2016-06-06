var assert = require('chai').assert,
    GedcomX = require('../');

describe('Fact', function(){
  
  it('Create plain', function(){
    var newFact = new GedcomX.Fact(),
        fact = GedcomX.Fact();
    assert.instanceOf(newFact, GedcomX.Fact, 'An instance of Fact is not returned when calling the constructor with new.');
    assert.instanceOf(fact, GedcomX.Fact, 'An instance of Fact is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var fact = GedcomX.Fact({
      id: 'fact',
      type: 'http://gedcomx.org/Birth',
      date: {
        original: '1845'
      },
      place: {
        original: 'Casper, Wyoming'
      },
      value: 'Birth value',
      qualifiers: [
        {
          name: 'http://gedcomx.org/Age',
          value: '0'
        }  
      ]
    });
    assert.equal(fact.getId(), 'fact');
    assert.equal(fact.getType(), 'http://gedcomx.org/Birth');
    assert.equal(fact.getDate().getOriginal(), '1845');
    assert.equal(fact.getPlace().getOriginal(), 'Casper, Wyoming');
    assert.equal(fact.getValue(), 'Birth value');
    assert.equal(fact.getQualifiers().length, 1);
    assert.equal(fact.getQualifiers()[0].getName(), 'http://gedcomx.org/Age');
    assert.equal(fact.getQualifiers()[0].getValue(), '0');
  });
  
  it('Create with mixed data', function(){
    var fact = GedcomX.Fact({
      id: 'fact',
      type: 'http://gedcomx.org/Birth',
      date: GedcomX.Date({
        original: '1845'
      }),
      place: GedcomX.PlaceReference({
        original: 'Casper, Wyoming'
      }),
      value: 'Birth value',
      qualifiers: [
        GedcomX.Qualifier({
          name: 'http://gedcomx.org/Age',
          value: '0'
        })
      ]
    });
    assert.equal(fact.getId(), 'fact');
    assert.equal(fact.getType(), 'http://gedcomx.org/Birth');
    assert.equal(fact.getDate().getOriginal(), '1845');
    assert.equal(fact.getPlace().getOriginal(), 'Casper, Wyoming');
    assert.equal(fact.getValue(), 'Birth value');
    assert.equal(fact.getQualifiers().length, 1);
    assert.equal(fact.getQualifiers()[0].getName(), 'http://gedcomx.org/Age');
    assert.equal(fact.getQualifiers()[0].getValue(), '0');
  });
  
  it('Build', function(){
    var fact = GedcomX.Fact()
      .setId('fact')
      .setType('http://gedcomx.org/Birth')
      .setDate(GedcomX.Date().setOriginal('1845'))
      .setPlace(GedcomX.PlaceReference().setOriginal('Casper, Wyoming'))
      .setValue('Birth value')
      .addQualifier(GedcomX.Qualifier().setName('http://gedcomx.org/Age').setValue('0'));
    assert.equal(fact.getId(), 'fact');
    assert.equal(fact.getType(), 'http://gedcomx.org/Birth');
    assert.equal(fact.getDate().getOriginal(), '1845');
    assert.equal(fact.getPlace().getOriginal(), 'Casper, Wyoming');
    assert.equal(fact.getValue(), 'Birth value');
    assert.equal(fact.getQualifiers().length, 1);
    assert.equal(fact.getQualifiers()[0].getName(), 'http://gedcomx.org/Age');
    assert.equal(fact.getQualifiers()[0].getValue(), '0');
  });
  
  it('toJSON', function(){
    var data = {
      id: 'fact',
      type: 'http://gedcomx.org/Birth',
      date: {
        original: '1845'
      },
      place: {
        original: 'Casper, Wyoming'
      },
      value: 'Birth value',
      qualifiers: [
        {
          name: 'http://gedcomx.org/Age',
          value: '0'
        }  
      ]
    }, fact = GedcomX.Fact(data);
    assert.deepEqual(fact.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Fact();
    var obj2 = GedcomX.Fact(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});