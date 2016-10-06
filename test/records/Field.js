var assert = require('chai').assert,
    GedcomX = require('../../');

describe('Field', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.Field(), GedcomX.Field, 'An instance of Field is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.Field(), GedcomX.Field, 'An instance of Field is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var field = GedcomX.Field({
      id: 'nameField',
      type: 'http://gedcomx.org/Name',
      values: [
        {
          type: 'type',
          labelId: 'labelId',
          text: 'Text',
          confidence: 'http://gedcomx.org/High',
          datatype: 'data type',
          resource: '#resource'
        }
      ]
    });
    assert.equal(field.getId(), 'nameField');
    assert.equal(field.getType(), 'http://gedcomx.org/Name');
    assert.equal(field.getValues().length, 1);
    var fieldValue = field.getValues()[0];
    assert.equal(fieldValue.getType(), 'type');
    assert.equal(fieldValue.getLabelId(), 'labelId');
    assert.equal(fieldValue.getText(), 'Text');
    assert.equal(fieldValue.getConfidence(), 'http://gedcomx.org/High');
    assert.equal(fieldValue.getDataType(), 'data type');
    assert.equal(fieldValue.getResource(), '#resource');
  });
  
  it('Build', function(){
    var field = GedcomX.Field()
      .setId('nameField')
      .setType('http://gedcomx.org/Name')
      .addValue({
        type: 'type',
        labelId: 'labelId',
        text: 'Text',
        confidence: 'http://gedcomx.org/High',
        datatype: 'data type',
        resource: '#resource'
      });
    assert.equal(field.getId(), 'nameField');
    assert.equal(field.getType(), 'http://gedcomx.org/Name');
    assert.equal(field.getValues().length, 1);
    var fieldValue = field.getValues()[0];
    assert.equal(fieldValue.getType(), 'type');
    assert.equal(fieldValue.getLabelId(), 'labelId');
    assert.equal(fieldValue.getText(), 'Text');
    assert.equal(fieldValue.getConfidence(), 'http://gedcomx.org/High');
    assert.equal(fieldValue.getDataType(), 'data type');
    assert.equal(fieldValue.getResource(), '#resource');
  });
  
  it('toJSON', function(){
    var data = {
      id: 'nameField',
      type: 'http://gedcomx.org/Name',
      values: [
        {
          type: 'type',
          labelId: 'labelId',
          text: 'Text',
          confidence: 'http://gedcomx.org/High',
          datatype: 'data type',
          resource: '#resource'
        }
      ]
    }, field = GedcomX.Field(data);
    assert.deepEqual(field.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Field();
    var obj2 = GedcomX.Field(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});