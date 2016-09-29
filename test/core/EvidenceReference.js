var assert = require('chai').assert,
    GedcomX = require('../../');

describe('EvidenceReference', function(){
  
  it('Create plain', function(){
    var newER = new GedcomX.EvidenceReference(),
        er = GedcomX.EvidenceReference();
    assert.instanceOf(newER, GedcomX.EvidenceReference, 'An instance of EvidenceReference is not returned when calling the constructor with new.');
    assert.instanceOf(er, GedcomX.EvidenceReference, 'An instance of EvidenceReference is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var er = GedcomX.EvidenceReference({ 
      resource: 'http://example.com',
      attribution: {
        created: 1248942374
      }
    });
    assert.equal(er.getResource(), 'http://example.com', 'Resource not saved properly when created with JSON');
    assert.equal(er.getAttribution().getCreated().getTime(), 1248942374);
  });
  
  it('Build', function(){
    var er = GedcomX.EvidenceReference()
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
      er = GedcomX.EvidenceReference(erData);
    assert.deepEqual(er.toJSON(), erData);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.EvidenceReference();
    var obj2 = GedcomX.EvidenceReference(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});