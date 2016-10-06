var assert = require('chai').assert,
    GedcomX = require('../../');

describe('Coverage', function(){
  
  it('Create with JSON', function(){
    var coverage = GedcomX.Coverage({
      spatial: {
        original: 'A Place'
      },
      temporal: {
        formal: '+2015-01-03'
      },
      recordType: 'http://gedcomx.org/Collection'
    });
    assert.equal(coverage.getSpatial().getOriginal(), 'A Place');
    assert.equal(coverage.getTemporal().getFormal(), '+2015-01-03');
    assert.equal(coverage.getRecordType(), 'http://gedcomx.org/Collection');
  });
  
  it('Build', function(){
    var coverage = GedcomX.Coverage()
      .setSpatial(GedcomX.PlaceReference().setOriginal('A Place'))
      .setTemporal(GedcomX.Date().setFormal('+2015-01-03'))
      .setRecordType('http://gedcomx.org/Collection');
    assert.equal(coverage.getSpatial().getOriginal(), 'A Place');
    assert.equal(coverage.getTemporal().getFormal(), '+2015-01-03');
    assert.equal(coverage.getRecordType(), 'http://gedcomx.org/Collection');
  });
  
  it('toJSON', function(){
    var data = {
      spatial: {
        original: 'A Place'
      },
      temporal: {
        formal: '+2015-01-03'
      },
      recordType: 'http://gedcomx.org/Collection'
    }, coverage = GedcomX.Coverage(data);
    assert.deepEqual(coverage.toJSON(), data);
  });
  
});