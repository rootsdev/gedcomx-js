var assert = require('chai').assert,
    GedcomX = require('../../');

describe('SourceReference', function(){
  
  it('Create plain', function(){
    var newSourceRef = new GedcomX.SourceReference(),
        sourceRef = GedcomX.SourceReference();
    assert.instanceOf(newSourceRef, GedcomX.SourceReference, 'An instance of SourceReference is not returned when calling the constructor with new.');
    assert.instanceOf(sourceRef, GedcomX.SourceReference, 'An instance of SourceReference is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var ref = GedcomX.SourceReference({
      id: 'source-ref',
      description: 'http://some/uri',
      descriptionId: 'some-id',
      attribution: {
        created: 11121211112
      }
    });
    assert.equal(ref.getId(), 'source-ref');
    assert.equal(ref.getDescription(), 'http://some/uri');
    assert.equal(ref.getDescriptionId(), 'some-id');
    assert.equal(ref.getAttribution().getCreated().getTime(), 11121211112);
  });
  
  it('Create with mixed data', function(){
    var ref = GedcomX.SourceReference({
      id: 'source-ref',
      description: 'http://some/uri',
      descriptionId: 'some-id',
      attribution: GedcomX.Attribution({
        created: 11121211112
      })
    });
    assert.equal(ref.getId(), 'source-ref');
    assert.equal(ref.getDescription(), 'http://some/uri');
    assert.equal(ref.getDescriptionId(), 'some-id');
    assert.equal(ref.getAttribution().getCreated().getTime(), 11121211112);
  });
  
  it('Build', function(){
    var ref = GedcomX.SourceReference()
      .setId('source-ref')
      .setDescription('http://some/uri')
      .setDescriptionId('some-id')
      .setAttribution({ created: 11121211112 });
    assert.equal(ref.getId(), 'source-ref');
    assert.equal(ref.getDescription(), 'http://some/uri');
    assert.equal(ref.getDescriptionId(), 'some-id');
    assert.equal(ref.getAttribution().getCreated().getTime(), 11121211112);
  });
  
  it('toJSON', function(){
    var refData = {
        id: 'source-ref',
        description: 'http://some/uri',
        attribution: {
          created: 11121211112
        }
      },
      ref = GedcomX.SourceReference(refData);
    assert.deepEqual(ref.toJSON(), refData);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.SourceReference();
    var obj2 = GedcomX.SourceReference(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});