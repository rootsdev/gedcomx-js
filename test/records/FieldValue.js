var assert = require('chai').assert,
    GedcomX = require('../../');

describe('FieldValue', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.FieldValue(), GedcomX.FieldValue, 'An instance of FieldValue is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.FieldValue(), GedcomX.FieldValue, 'An instance of FieldValue is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var fieldValue = GedcomX.FieldValue({
      type: 'type',
      labelId: 'labelId',
      text: 'Text',
      confidence: 'http://gedcomx.org/High',
      datatype: 'data type',
      resource: '#resource'
    });
    assert.equal(fieldValue.getType(), 'type');
    assert.equal(fieldValue.getLabelId(), 'labelId');
    assert.equal(fieldValue.getText(), 'Text');
    assert.equal(fieldValue.getConfidence(), 'http://gedcomx.org/High');
    assert.equal(fieldValue.getDataType(), 'data type');
    assert.equal(fieldValue.getResource(), '#resource');
  });
  
  it('Build', function(){
    var fieldValue = GedcomX.FieldValue()
      .setType('type')
      .setLabelId('labelId')
      .setText('Text')
      .setConfidence('http://gedcomx.org/High')
      .setDataType('data type')
      .setResource('#resource');
    assert.equal(fieldValue.getType(), 'type');
    assert.equal(fieldValue.getLabelId(), 'labelId');
    assert.equal(fieldValue.getText(), 'Text');
    assert.equal(fieldValue.getConfidence(), 'http://gedcomx.org/High');
    assert.equal(fieldValue.getDataType(), 'data type');
    assert.equal(fieldValue.getResource(), '#resource');
  });
  
  it('toJSON', function(){
    var data = {
      type: 'type',
      labelId: 'labelId',
      text: 'Text',
      confidence: 'http://gedcomx.org/High',
      datatype: 'data type',
      resource: '#resource'
    }, fvd = GedcomX.FieldValue(data);
    assert.deepEqual(fvd.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.FieldValue();
    var obj2 = GedcomX.FieldValue(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});