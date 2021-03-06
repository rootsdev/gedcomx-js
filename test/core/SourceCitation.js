var assert = require('chai').assert,
    GedcomX = require('../../');

describe('SourceCitation', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.SourceCitation(), GedcomX.SourceCitation, 'An instance of SourceCitation is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.SourceCitation(), GedcomX.SourceCitation, 'An instance of SourceCitation is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var citation = GedcomX.SourceCitation({
      lang: 'en',
      value: 'a full text citation'
    });
    assert.equal(citation.getLang(), 'en');
    assert.equal(citation.getValue(), 'a full text citation');
  });
  
  it('Build', function(){
    var citation = GedcomX.SourceCitation()
      .setLang('en')
      .setValue('a full text citation');
    assert.equal(citation.getLang(), 'en');
    assert.equal(citation.getValue(), 'a full text citation');
  });
  
  it('toJSON', function(){
    var data = {
      lang: 'en',
      value: 'a full text citation'
    }, citation = GedcomX.SourceCitation(data);
    assert.deepEqual(citation.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.SourceCitation();
    var obj2 = GedcomX.SourceCitation(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});