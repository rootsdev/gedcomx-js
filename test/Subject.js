var assert = require('chai').assert,
    Subject = require('../src/Subject'),
    EvidenceReference = require('../src/EvidenceReference'),
    SourceReference = require('../src/SourceReference'),
    Identifiers = require('../src/Identifiers');

describe('Subject', function(){
  
  it('Create plain', function(){
    var newSubject = new Subject(),
        subject = Subject();
    assert.instanceOf(newSubject, Subject, 'An instance of Subject is not returned when calling the constructor with new.');
    assert.instanceOf(subject, Subject, 'An instance of Subject is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var subject = Subject({
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
    assert.instanceOf(subject.getEvidence()[0], EvidenceReference);
    assert.lengthOf(subject.getMedia(), 1);
    assert.instanceOf(subject.getMedia()[0], SourceReference);
    assert.instanceOf(subject.getIdentifiers(), Identifiers);
  });
  
  it('Create with mixed data', function(){
    var subject = Subject({
      extracted: true,
      evidence: [
        EvidenceReference({ 
          resource: 'http://example.com',
          attribution: {
            created: 1248942374
          }
        })
      ],
      media: [
        SourceReference({
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
    assert.instanceOf(subject.getEvidence()[0], EvidenceReference);
    assert.lengthOf(subject.getMedia(), 1);
    assert.instanceOf(subject.getMedia()[0], SourceReference);
    assert.instanceOf(subject.getIdentifiers(), Identifiers);
  });
  
  it('Build', function(){
    var subject = Subject()
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
    assert.instanceOf(subject.getEvidence()[0], EvidenceReference);
    assert.lengthOf(subject.getMedia(), 1);
    assert.instanceOf(subject.getMedia()[0], SourceReference);
    assert.instanceOf(subject.getIdentifiers(), Identifiers);
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
      subject = Subject(subjectData);
    assert.deepEqual(subjectData, subject.toJSON());
  });
  
});