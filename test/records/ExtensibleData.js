var assert = require('chai').assert,
    GedcomX = require('../../');

describe('ExtensibleData', function(){

  it('Create with JSON', function(){
    var ed = GedcomX.ExtensibleData({ 
      id: 'edid',
      fields: [
        {
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
        }
      ]
    });
    assert.equal(ed.getId(), 'edid', 'ID not saved properly when created with JSON');
    assert.equal(ed.getFields().length, 1);
    var field = ed.getFields()[0];
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
  
  it('toJSON()', function(){
    var json = { 
      id: 'edid',
      fields: [
        {
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
        }
      ]
    }, ed = GedcomX.ExtensibleData(json);
    assert.deepEqual(ed.toJSON(), json, 'JSON export is incorrect');
  });
  
});