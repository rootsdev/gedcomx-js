var assert = require('chai').assert,
    GedcomX = require('../../');

describe('Fact', function(){
  
  it('Create with JSON', function(){
    var fact = GedcomX.Fact({
      id: 'fact',
      primary: true,
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
    assert.equal(fact.getPrimary(), true);
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
      .setPrimary(true)
      .setType('http://gedcomx.org/Birth')
      .setDate(GedcomX.Date().setOriginal('1845'))
      .setPlace(GedcomX.PlaceReference().setOriginal('Casper, Wyoming'))
      .setValue('Birth value')
      .addQualifier(GedcomX.Qualifier().setName('http://gedcomx.org/Age').setValue('0'));
    assert.equal(fact.getId(), 'fact');
    assert.equal(fact.getPrimary(), true);
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
      primary: true,
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
  
});