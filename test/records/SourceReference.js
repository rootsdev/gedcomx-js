var assert = require('chai').assert,
    GedcomX = require('../../');

describe('SourceReference', function(){
  
  it('Create with JSON', function(){
    var ref = GedcomX.SourceReference({
      id: 'source-ref',
      description: 'http://some/uri',
      attribution: {
        created: 11121211112
      },
      qualifiers: [
        {
          name: 'http://gedcomx.org/CharacterRegion',
          value: '37'
        } 
      ]
    });
    assert.equal(ref.getId(), 'source-ref');
    assert.equal(ref.getDescription(), 'http://some/uri');
    assert.equal(ref.getAttribution().getCreated().getTime(), 11121211112);
    assert.equal(ref.getQualifiers().length, 1);
    assert.equal(ref.getQualifiers()[0].getName(), 'http://gedcomx.org/CharacterRegion');
  });
  
  it('Build', function(){
    var ref = GedcomX.SourceReference()
      .setId('source-ref')
      .setDescription('http://some/uri')
      .setAttribution({ created: 11121211112 })
      .addQualifier(
        GedcomX.Qualifier().setName('http://gedcomx.org/CharacterRegion').setValue(37)
      );
    assert.equal(ref.getId(), 'source-ref');
    assert.equal(ref.getDescription(), 'http://some/uri');
    assert.equal(ref.getAttribution().getCreated().getTime(), 11121211112);
    assert.equal(ref.getQualifiers().length, 1);
    assert.equal(ref.getQualifiers()[0].getName(), 'http://gedcomx.org/CharacterRegion');
  });
  
  it('toJSON', function(){
    var refData = {
      id: 'source-ref',
      description: 'http://some/uri',
      attribution: {
        created: 11121211112
      },
      qualifiers: [
        {
          name: 'http://gedcomx.org/CharacterRegion',
          value: '37'
        } 
      ]
    },
    ref = GedcomX.SourceReference(refData);
    assert.deepEqual(ref.toJSON(), refData);
  });
  
});