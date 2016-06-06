var assert = require('chai').assert,
    GedcomX = require('../');

describe('Subject', function(){
  
  it('Create plain', function(){
    var newSubject = new GedcomX.Subject(),
        subject = GedcomX.Subject();
    assert.instanceOf(newSubject, GedcomX.Subject, 'An instance of Subject is not returned when calling the constructor with new.');
    assert.instanceOf(subject, GedcomX.Subject, 'An instance of Subject is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var subject = GedcomX.Subject({
      extracted: true,
      evidence: [
        { 
          resource: 'http://example.com',
          attribution: {
            created: 1248942374
          }
        }
      ],
      media: [
        {
          id: 'source-ref',
          description: 'http://some/uri',
          attribution: {
            created: 11121211112
          }
        }
      ],
      identifiers: {
        '$': 'SOMEID'
      }
    });
    assert(subject.isExtracted());
    assert.lengthOf(subject.getEvidence(), 1);
    assert.instanceOf(subject.getEvidence()[0], GedcomX.EvidenceReference);
    assert.lengthOf(subject.getMedia(), 1);
    assert.instanceOf(subject.getMedia()[0], GedcomX.SourceReference);
    assert.instanceOf(subject.getIdentifiers(), GedcomX.Identifiers);
  });
  
  it('Create with mixed data', function(){
    var subject = GedcomX.Subject({
      extracted: true,
      evidence: [
        GedcomX.EvidenceReference({ 
          resource: 'http://example.com',
          attribution: {
            created: 1248942374
          }
        })
      ],
      media: [
        GedcomX.SourceReference({
          id: 'source-ref',
          description: 'http://some/uri',
          attribution: {
            created: 11121211112
          }
        })
      ],
      identifiers: {
        '$': 'SOMEID'
      }
    });
    assert(subject.isExtracted());
    assert.lengthOf(subject.getEvidence(), 1);
    assert.instanceOf(subject.getEvidence()[0], GedcomX.EvidenceReference);
    assert.lengthOf(subject.getMedia(), 1);
    assert.instanceOf(subject.getMedia()[0], GedcomX.SourceReference);
    assert.instanceOf(subject.getIdentifiers(), GedcomX.Identifiers);
  });
  
  it('Build', function(){
    var subject = GedcomX.Subject()
      .setExtracted(true)
      .addEvidence({ 
        resource: 'http://example.com',
        attribution: {
          created: 1248942374
        }
      })
      .addMedia({
        id: 'source-ref',
        description: 'http://some/uri',
        attribution: {
          created: 11121211112
        }
      })
      .setIdentifiers({
        '$': 'SOMEID'
      });
    assert(subject.isExtracted());
    assert.lengthOf(subject.getEvidence(), 1);
    assert.instanceOf(subject.getEvidence()[0], GedcomX.EvidenceReference);
    assert.lengthOf(subject.getMedia(), 1);
    assert.instanceOf(subject.getMedia()[0], GedcomX.SourceReference);
    assert.instanceOf(subject.getIdentifiers(), GedcomX.Identifiers);
  });
  
  it('toJSON', function(){
    var subjectData = {
        extracted: true,
        evidence: [
          { 
            resource: 'http://example.com',
            attribution: {
              created: 1248942374
            }
          }
        ],
        media: [
          {
            id: 'source-ref',
            description: 'http://some/uri',
            attribution: {
              created: 11121211112
            }
          }
        ],
        identifiers: {
          '$': 'SOMEID'
        }
      },
      subject = GedcomX.Subject(subjectData);
    assert.deepEqual(subjectData, subject.toJSON());
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Subject();
    var obj2 = GedcomX.Subject(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});