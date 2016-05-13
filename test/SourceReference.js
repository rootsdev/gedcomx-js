var assert = require('chai').assert,
    SourceReference = require('../src/SourceReference'),
    Attribution = require('../src/Attribution');

describe('SourceReference', function(){
  
  it('Create plain', function(){
    var newSourceRef = new SourceReference(),
        sourceRef = SourceReference();
    assert.instanceOf(newSourceRef, SourceReference, 'An instance of SourceReference is not returned when calling the constructor with new.');
    assert.instanceOf(sourceRef, SourceReference, 'An instance of SourceReference is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var ref = SourceReference({
      id: 'source-ref',
      description: 'http://some/uri',
      attribution: {
        created: 11121211112
      }
    });
    assert.equal(ref.getId(), 'source-ref');
    assert.equal(ref.getDescription(), 'http://some/uri');
    assert.equal(ref.getAttribution().getCreated().getTime(), 11121211112);
  });
  
  it('Create with mixed data', function(){
    var ref = SourceReference({
      id: 'source-ref',
      description: 'http://some/uri',
      attribution: Attribution({
        created: 11121211112
      })
    });
    assert.equal(ref.getId(), 'source-ref');
    assert.equal(ref.getDescription(), 'http://some/uri');
    assert.equal(ref.getAttribution().getCreated().getTime(), 11121211112);
  });
  
  it('Build', function(){
    var ref = SourceReference()
      .setId('source-ref')
      .setDescription('http://some/uri')
      .setAttribution({ created: 11121211112 });
    assert.equal(ref.getId(), 'source-ref');
    assert.equal(ref.getDescription(), 'http://some/uri');
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
      ref = SourceReference(refData);
    assert.deepEqual(ref.toJSON(), refData);
  });
  
});