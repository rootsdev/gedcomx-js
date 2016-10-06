var assert = require('chai').assert,
    GedcomX = require('../../');

describe('FieldValueDescriptor', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.FieldValueDescriptor(), GedcomX.FieldValueDescriptor, 'An instance of FieldValueDescriptor is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.FieldValueDescriptor(), GedcomX.FieldValueDescriptor, 'An instance of FieldValueDescriptor is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var fvd = GedcomX.FieldValueDescriptor({
      id: 'fvd',
      optional: true,
      type: 'http://gedcomx.org/Original',
      labelId: 'name',
      displayLabels: [
        { lang: 'en-US', value: 'Name' }
      ]
    });
    assert.equal(fvd.getId(), 'fvd');
    assert(fvd.getOptional());
    assert.equal(fvd.getType(), 'http://gedcomx.org/Original');
    assert.equal(fvd.getLabelId(), 'name');
    assert.equal(fvd.getDisplayLabels().length, 1);
    assert.equal(fvd.getDisplayLabels()[0].getLang(), 'en-US');
    assert.equal(fvd.getDisplayLabels()[0].getValue(), 'Name');
  });
  
  it('Build', function(){
    var fvd = GedcomX.FieldValueDescriptor()
      .setId('fvd')
      .setOptional(true)
      .setType('http://gedcomx.org/Original')
      .setLabelId('name')
      .addDisplayLabel({ lang: 'en-US', value: 'Name' });
    assert.equal(fvd.getId(), 'fvd');
    assert(fvd.getOptional());
    assert.equal(fvd.getType(), 'http://gedcomx.org/Original');
    assert.equal(fvd.getLabelId(), 'name');
    assert.equal(fvd.getDisplayLabels().length, 1);
    assert.equal(fvd.getDisplayLabels()[0].getLang(), 'en-US');
    assert.equal(fvd.getDisplayLabels()[0].getValue(), 'Name');
  });
  
  it('toJSON', function(){
    var data = {
      id: 'fvd',
      optional: true,
      type: 'http://gedcomx.org/Original',
      labelId: 'name',
      displayLabels: [
        { lang: 'en-US', value: 'Name' }
      ]
    }, fvd = GedcomX.FieldValueDescriptor(data);
    assert.deepEqual(fvd.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.FieldValueDescriptor();
    var obj2 = GedcomX.FieldValueDescriptor(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});