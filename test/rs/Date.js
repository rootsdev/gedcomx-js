var assert = require('chai').assert,
    GedcomX = require('../../');

describe('Date', function(){
  
  it('Create with JSON', function(){
    var date = GedcomX.Date({
      "original": "May 4, 1926",
      "formal": "+1926-05-04",
      "normalized":[
        {"lang": "en-US", "value": "4 May 1926"},
      ]
    });
    assert.equal(date.getOriginal(), 'May 4, 1926');
    assert.equal(date.getFormal(), '+1926-05-04');
    assert.equal(date.getNormalized().length, 1);
    assert.equal(date.getNormalized()[0].getLang(), 'en-US');
    assert.equal(date.getNormalized()[0].getValue(), '4 May 1926');
  });
  
  it('Build', function(){
    var date = GedcomX.Date()
      .setOriginal('May 4, 1926')
      .setFormal('+1926-05-04')
      .addNormalized({"lang": "en-US", "value": "4 May 1926"});
    assert.equal(date.getOriginal(), 'May 4, 1926');
    assert.equal(date.getFormal(), '+1926-05-04');
    assert.equal(date.getNormalized().length, 1);
    assert.equal(date.getNormalized()[0].getLang(), 'en-US');
    assert.equal(date.getNormalized()[0].getValue(), '4 May 1926');
  });
  
  it('toJSON', function(){
    var data = {
      "original": "May 4, 1926",
      "formal": "+1926-05-04",
      "normalized":[
        {"lang": "en-US", "value": "4 May 1926"},
      ]
    }, date = GedcomX.Date(data);
    assert.deepEqual(date.toJSON(), data);
  });
  
});