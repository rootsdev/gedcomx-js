var assert = require('chai').assert,
    GedcomX = require('../');

describe('Document', function(){
  
  it('Create plain', function(){
    assert.instanceOf(GedcomX.Document(), GedcomX.Document, 'An instance of Document is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.Document(), GedcomX.Document, 'An instance of Document is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var doc = GedcomX.Document({
      type: 'http://gedcomx.org/Abstract',
      extracted: false,
      textType: 'plain',
      text: 'Lots of text',
      attribution: {
        created: 123456789
      }
    });
    assert.equal(doc.getType(), 'http://gedcomx.org/Abstract');
    assert.equal(doc.getExtracted(), false);
    assert.equal(doc.getTextType(), 'plain');
    assert.equal(doc.getText(), 'Lots of text');
    assert.equal(doc.getAttribution().getCreated().getTime(), 123456789);
  });
  
  it('Create with mixed data', function(){
    var doc = GedcomX.Document({
      type: 'http://gedcomx.org/Abstract',
      extracted: false,
      textType: 'plain',
      text: 'Lots of text',
      attribution: GedcomX.Attribution({
        created: 123456789
      })
    });
    assert.equal(doc.getType(), 'http://gedcomx.org/Abstract');
    assert.equal(doc.getExtracted(), false);
    assert.equal(doc.getTextType(), 'plain');
    assert.equal(doc.getText(), 'Lots of text');
    assert.equal(doc.getAttribution().getCreated().getTime(), 123456789);
  });
  
  it('Build', function(){
    var doc = GedcomX.Document()
      .setType('http://gedcomx.org/Abstract')
      .setExtracted(false)
      .setTextType('plain')
      .setText('Lots of text')
      .setAttribution(GedcomX.Attribution().setCreated(123456789));
    assert.equal(doc.getType(), 'http://gedcomx.org/Abstract');
    assert.equal(doc.getExtracted(), false);
    assert.equal(doc.getTextType(), 'plain');
    assert.equal(doc.getText(), 'Lots of text');
    assert.equal(doc.getAttribution().getCreated().getTime(), 123456789);
  });
  
  it('toJSON', function(){
    var data = {
      type: 'http://gedcomx.org/Abstract',
      extracted: false,
      textType: 'plain',
      text: 'Lots of text',
      attribution: {
        created: 123456789
      }
    }, doc = GedcomX.Document(data);
    assert.deepEqual(doc.toJSON(), data);
  });
  
});