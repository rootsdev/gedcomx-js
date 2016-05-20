var assert = require('chai').assert,
    GedcomX = require('../');

describe('Coverage', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.Coverage(), GedcomX.Coverage, 'An instance of Coverage is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.Coverage(), GedcomX.Coverage, 'An instance of Coverage is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var coverage = GedcomX.Coverage({
      spatial: {
        original: 'A Place'
      },
      temporal: {
        formal: '+2015-01-03'
      }
    });
    assert.equal(coverage.getSpatial().getOriginal(), 'A Place');
    assert.equal(coverage.getTemporal().getFormal(), '+2015-01-03');
  });
  
  it('Create with mixed', function(){
    var coverage = GedcomX.Coverage({
      spatial: GedcomX.PlaceReference({
        original: 'A Place'
      }),
      temporal: GedcomX.Date({
        formal: '+2015-01-03'
      })
    });
    assert.equal(coverage.getSpatial().getOriginal(), 'A Place');
    assert.equal(coverage.getTemporal().getFormal(), '+2015-01-03');
  });
  
  it('Build', function(){
    var coverage = GedcomX.Coverage()
      .setSpatial(GedcomX.PlaceReference().setOriginal('A Place'))
      .setTemporal(GedcomX.Date().setFormal('+2015-01-03'));
    assert.equal(coverage.getSpatial().getOriginal(), 'A Place');
    assert.equal(coverage.getTemporal().getFormal(), '+2015-01-03');
  });
  
  it('toJSON', function(){
    var data = {
      spatial: {
        original: 'A Place'
      },
      temporal: {
        formal: '+2015-01-03'
      }
    }, coverage = GedcomX.Coverage(data);
    assert.deepEqual(coverage.toJSON(), data);
  });
  
});