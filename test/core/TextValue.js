var assert = require('chai').assert,
    GedcomX = require('../../');

describe('TextValue', function(){
  
  it('Create plain', function(){
    var newValue = new GedcomX.TextValue(),
        value = GedcomX.TextValue();
    assert.instanceOf(newValue, GedcomX.TextValue, 'An instance of TextValue is not returned when calling the constructor with new.');
    assert.instanceOf(value, GedcomX.TextValue, 'An instance of TextValue is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var value = GedcomX.TextValue({
      lang: 'en',
      value: 'a full text value'
    });
    assert.equal(value.getLang(), 'en');
    assert.equal(value.getValue(), 'a full text value');
  });
  
  it('Build', function(){
    var value = GedcomX.TextValue()
      .setLang('en')
      .setValue('a full text value');
    assert.equal(value.getLang(), 'en');
    assert.equal(value.getValue(), 'a full text value');
  });
  
  it('toJSON', function(){
    var data = {
      lang: 'en',
      value: 'a full text value'
    }, value = GedcomX.TextValue(data);
    assert.deepEqual(value.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.TextValue();
    var obj2 = GedcomX.TextValue(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});