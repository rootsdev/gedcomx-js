var assert = require('chai').assert,
    Fact = require('../src/Fact'),
    GDate = require('../src/Date'),
    PlaceReference = require('../src/PlaceReference'),
    Qualifier = require('../src/Qualifier');

describe('Fact', function(){
  
  it('Create plain', function(){
    var newFact = new Fact(),
        fact = Fact();
    assert.instanceOf(newFact, Fact, 'An instance of Fact is not returned when calling the constructor with new.');
    assert.instanceOf(fact, Fact, 'An instance of Fact is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var fact = Fact({
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
    var fact = Fact({
      id: 'fact',
      type: 'http://gedcomx.org/Birth',
      date: GDate({
        original: '1845'
      }),
      place: PlaceReference({
        original: 'Casper, Wyoming'
      }),
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
  
  it('Build', function(){
    var fact = Fact()
      .setId('fact')
      .setType('http://gedcomx.org/Birth')
      .setDate(GDate().setOriginal('1845'))
      .setPlace(PlaceReference().setOriginal('Casper, Wyoming'))
      .setValue('Birth value')
      .addQualifier(Qualifier().setName('http://gedcomx.org/Age').setValue('0'));
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
    }, fact = Fact(data);
    assert.deepEqual(fact.toJSON(), data);
  });
  
});