var assert = require('chai').assert,
    GedcomX = require('../');

describe('Date', function(){
  
  it('Create plain', function(){
    var newGDate = new GedcomX.Date(),
        date = GedcomX.Date();
    assert.instanceOf(newGDate, GedcomX.Date, 'An instance of GedcomX.Date is not returned when calling the constructor with new.');
    assert.instanceOf(date, GedcomX.Date, 'An instance of GedcomX.Date is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var date = GedcomX.Date({
      id: 'date',
      original: 'June 24 1899',
      formal: '+1899-06-24'
    });
    assert.equal(date.getId(), 'date');
    assert.equal(date.getOriginal(), 'June 24 1899');
    assert.equal(date.getFormal(), '+1899-06-24');
  });
  
  it('Build', function(){
    var date = GedcomX.Date()
      .setId('date')
      .setOriginal('June 24 1899')
      .setFormal('+1899-06-24');
    assert.equal(date.getId(), 'date');
    assert.equal(date.getOriginal(), 'June 24 1899');
    assert.equal(date.getFormal(), '+1899-06-24');
  });
  
  it('toJSON', function(){
    var data = {
      id: 'date',
      original: 'June 24 1899',
      formal: '+1899-06-24'
    }, date = GedcomX.Date(data);
    assert.deepEqual(date.toJSON(), data);
  });
  
});