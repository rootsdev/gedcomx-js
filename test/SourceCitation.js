var assert = require('chai').assert,
    GedcomX = require('../');

describe('SourceCitation', function(){
  
  it('Create plain', function(){
    var newCitation = new GedcomX.SourceCitation(),
        citation = GedcomX.SourceCitation();
    assert.instanceOf(newCitation, GedcomX.SourceCitation, 'An instance of SourceCitation is not returned when calling the constructor with new.');
    assert.instanceOf(citation, GedcomX.SourceCitation, 'An instance of SourceCitation is not returned when calling the constructor without new.');
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
  
});