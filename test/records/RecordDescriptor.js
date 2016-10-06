var assert = require('chai').assert,
    GedcomX = require('../../');

describe('RecordDescriptor', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.RecordDescriptor(), GedcomX.RecordDescriptor, 'An instance of RecordDescriptor is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.RecordDescriptor(), GedcomX.RecordDescriptor, 'An instance of RecordDescriptor is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var rd = GedcomX.RecordDescriptor({
      id: 'rd',
      lang: 'en-US',
      fields: [{
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
      }]
    });
    assert.equal(rd.getId(), 'rd');
    assert.equal(rd.getLang(), 'en-US');
    assert.equal(rd.getFields().length, 1);
    assert.equal(rd.getFields()[0].getOriginalLabel(), 'Name');
    assert.equal(rd.getFields()[0].getValues().length, 1);
  });
  
  it('Build', function(){
    var rd = GedcomX.RecordDescriptor()
      .setId('rd')
      .setLang('en-US')
      .addField({
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
    assert.equal(rd.getId(), 'rd');
    assert.equal(rd.getLang(), 'en-US');
    assert.equal(rd.getFields().length, 1);
    assert.equal(rd.getFields()[0].getOriginalLabel(), 'Name');
    assert.equal(rd.getFields()[0].getValues().length, 1);
  });
  
  it('toJSON', function(){
    var data = {
      id: 'rd',
      lang: 'en-US',
      fields: [{
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
      }]
    }, rd = GedcomX.RecordDescriptor(data);
    assert.deepEqual(rd.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.RecordDescriptor();
    var obj2 = GedcomX.RecordDescriptor(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});