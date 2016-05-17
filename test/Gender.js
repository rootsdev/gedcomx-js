var assert = require('chai').assert,
    Gender = require('../src/Gender');

describe('Conclusion', function(){
  
  it('Create plain', function(){
    var newGender = new Gender(),
        gender = Gender();
    assert.instanceOf(newGender, Gender, 'An instance of Gender is not returned when calling the constructor with new.');
    assert.instanceOf(gender, Gender, 'An instance of Gender is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var gender = Gender({
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
    var gender = Gender()
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
      }, gender = Gender(genderData);
    assert.deepEqual(gender.toJSON(), genderData);
  });
  
});