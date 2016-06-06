var assert = require('chai').assert,
    GedcomX = require('../');

describe('Gender', function(){
  
  it('Create plain', function(){
    var newGender = new GedcomX.Gender(),
        gender = GedcomX.Gender();
    assert.instanceOf(newGender, GedcomX.Gender, 'An instance of Gender is not returned when calling the constructor with new.');
    assert.instanceOf(gender, GedcomX.Gender, 'An instance of Gender is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var gender = GedcomX.Gender({
      id: 'gender',
      type: 'http://gedcomx.org/Male',
      confidence: 'http://gedcomx.org/High',
      attribution: {
        created: 1145667891
      }
    });
    assert.equal(gender.getId(), 'gender');
    assert.equal(gender.getType(), 'http://gedcomx.org/Male');
    assert.equal(gender.getConfidence(), 'http://gedcomx.org/High');
    assert.equal(gender.getAttribution().getCreated().getTime(), 1145667891);
  });
  
  it('Build', function(){
    var gender = GedcomX.Gender()
      .setId('gender')
      .setType('http://gedcomx.org/Female')
      .setConfidence('http://gedcomx.org/High')
      .setAttribution({
        created: 1145667891
      });
    assert.equal(gender.getId(), 'gender');
    assert.equal(gender.getType(), 'http://gedcomx.org/Female');
    assert.equal(gender.getConfidence(), 'http://gedcomx.org/High');
    assert.equal(gender.getAttribution().getCreated().getTime(), 1145667891);
  });
  
  it('toJSON', function(){
    var genderData = {
        id: 'gender',
        type: 'http://gedcomx.org/Male',
        confidence: 'http://gedcomx.org/High',
        attribution: {
          created: 1145667891
        }
      }, gender = GedcomX.Gender(genderData);
    assert.deepEqual(gender.toJSON(), genderData);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Gender();
    var obj2 = GedcomX.Gender(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});