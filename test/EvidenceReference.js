var assert = require('chai').assert,
    EvidenceReference = require('../src/EvidenceReference');

describe('EvidenceReference', function(){
  
  it('Create plain', function(){
    var newER = new EvidenceReference(),
        er = EvidenceReference();
    assert.instanceOf(newER, EvidenceReference, 'An instance of EvidenceReference is not returned when calling the constructor with new.');
    assert.instanceOf(er, EvidenceReference, 'An instance of EvidenceReference is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var er = EvidenceReference({ 
      resource: 'http://example.com',
      attribution: {
        created: 1248942374
      }
    });
    assert.equal(er.getResource(), 'http://example.com', 'Resource not saved properly when created with JSON');
    assert.equal(er.getAttribution().getCreated().getTime(), 1248942374);
  });
  
  it('Build', function(){
    var er = EvidenceReference()
      .setResource('http://newuri.com')
      .setAttribution({
        created: new Date(1248942374)
      });
    assert.equal(er.getResource(), 'http://newuri.com');
    assert.equal(er.getAttribution().getCreated().getTime(), 1248942374);
  });
  
  it('toJSON()', function(){
    var erData = { 
        resource: 'http://example.com',
        attribution: {
          created: 1248942374
        }
      },
      er = EvidenceReference(erData);
    assert.deepEqual(er.toJSON(), erData);
  });
  
});