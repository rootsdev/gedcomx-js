var assert = require('chai').assert,
    GDate = require('../src/Date');

describe('Date', function(){
  
  it('Create plain', function(){
    var newGDate = new GDate(),
        date = GDate();
    assert.instanceOf(newGDate, GDate, 'An instance of GDate is not returned when calling the constructor with new.');
    assert.instanceOf(date, GDate, 'An instance of GDate is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var date = GDate({
      id: 'date',
      original: 'June 24 1899',
      formal: '+1899-06-24'
    });
    assert.equal(date.getId(), 'date');
    assert.equal(date.getOriginal(), 'June 24 1899');
    assert.equal(date.getFormal(), '+1899-06-24');
  });
  
  it('Build', function(){
    var date = GDate()
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
    }, date = GDate(data);
    assert.deepEqual(date.toJSON(), data);
  });
  
});