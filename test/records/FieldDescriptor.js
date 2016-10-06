var assert = require('chai').assert,
    GedcomX = require('../../');

describe('FieldDescriptor', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.FieldDescriptor(), GedcomX.FieldDescriptor, 'An instance of FieldDescriptor is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.FieldDescriptor(), GedcomX.FieldDescriptor, 'An instance of FieldDescriptor is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var fd = GedcomX.FieldDescriptor({
      originalLabel: 'Name',
      descriptions: [
        { lang: 'en-US', value: 'Full Name' }
      ],
      values: [{
        optional: true,
        type: 'http://gedcomx.org/Original',
        labelId: 'name',
        displayLabels: [
          { lang: 'en-US', value: 'Name' }
        ]
      }]
    });
    assert.equal(fd.getOriginalLabel(), 'Name');
    assert.equal(fd.getDescriptions().length, 1);
    assert.equal(fd.getDescriptions()[0].getLang(), 'en-US');
    assert.equal(fd.getDescriptions()[0].getValue(), 'Full Name');
    assert.equal(fd.getValues().length, 1);
  });
  
  it('Build', function(){
    var fd = GedcomX.FieldDescriptor()
      .setOriginalLabel('Name')
      .addDescription({ lang: 'en-US', value: 'Full Name' })
      .addValue({
        optional: true,
        type: 'http://gedcomx.org/Original',
        labelId: 'name',
        displayLabels: [
          { lang: 'en-US', value: 'Name' }
        ]
      });
    assert.equal(fd.getOriginalLabel(), 'Name');
    assert.equal(fd.getDescriptions().length, 1);
    assert.equal(fd.getDescriptions()[0].getLang(), 'en-US');
    assert.equal(fd.getDescriptions()[0].getValue(), 'Full Name');
    assert.equal(fd.getValues().length, 1);
  });
  
  it('toJSON', function(){
    var data = {
      originalLabel: 'Name',
      descriptions: [
        { lang: 'en-US', value: 'Full Name' }
      ],
      values: [{
        optional: true,
        type: 'http://gedcomx.org/Original',
        labelId: 'name',
        displayLabels: [
          { lang: 'en-US', value: 'Name' }
        ]
      }]
    }, fvd = GedcomX.FieldDescriptor(data);
    assert.deepEqual(fvd.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.FieldDescriptor();
    var obj2 = GedcomX.FieldDescriptor(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});