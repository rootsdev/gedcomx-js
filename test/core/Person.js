var assert = require('chai').assert,
    GedcomX = require('../../');

describe('Person', function(){
  
  it('Create plain', function(){
    var newPerson = new GedcomX.Person(),
        person = GedcomX.Person();
    assert.instanceOf(newPerson, GedcomX.Person, 'An instance of Person is not returned when calling the constructor with new.');
    assert.instanceOf(person, GedcomX.Person, 'An instance of Person is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var person = GedcomX.Person({
      id: 'testPerson',
      private: true,
      gender: {
        type: 'http://gedcomx.org/Female'
      },
      names: [
        {
          type: 'http://gedcomx.org/BirthName',
          nameForms: [
            {
              fullText: 'Joanna Hopkins'
            }
          ]
        }  
      ],
      facts: [
        {
          type: 'http://gedcomx.org/Birth',
          date: {
            formal: '+2001-04-09'
          },
          place: {
            original: 'Farm house'
          }
        }  
      ]
    });
    assert.equal(person.getId(), 'testPerson');
    assert.equal(person.getPrivate(), true);
    assert.equal(person.getGender().getType(), 'http://gedcomx.org/Female');
    assert(person.isFemale());
    assert(!person.isMale());
    assert.equal(person.getNames()[0].getNameForms()[0].getFullText(), 'Joanna Hopkins');
    var birth = person.getFactsByType('http://gedcomx.org/Birth')[0];
    assert.equal(birth.getDate().getFormal(), '+2001-04-09');
    assert.equal(birth.getPlace().getOriginal(), 'Farm house');
    assert.equal(person.getFactsByType('http://gedcomx.org/Death').length, 0);
  });
  
  it('Create with mixed data', function(){
    var person = GedcomX.Person({
      id: 'testPerson',
      private: true,
      gender: GedcomX.Gender({
        type: 'http://gedcomx.org/Female'
      }),
      names: [
        GedcomX.Name({
          type: 'http://gedcomx.org/BirthName',
          nameForms: [
            {
              fullText: 'Joanna Hopkins'
            }
          ]
        })
      ],
      facts: [
        GedcomX.Fact({
          type: 'http://gedcomx.org/Birth',
          date: GedcomX.Date({
            formal: '+2001-04-09'
          }),
          place: GedcomX.PlaceReference({
            original: 'Farm house'
          })
        })
      ]
    });
    assert.equal(person.getId(), 'testPerson');
    assert.equal(person.getPrivate(), true);
    assert.equal(person.getGender().getType(), 'http://gedcomx.org/Female');
    assert(person.isFemale());
    assert(!person.isMale());
    assert.equal(person.getNames()[0].getNameForms()[0].getFullText(), 'Joanna Hopkins');
    var birth = person.getFactsByType('http://gedcomx.org/Birth')[0];
    assert.equal(birth.getDate().getFormal(), '+2001-04-09');
    assert.equal(birth.getPlace().getOriginal(), 'Farm house');
    assert.equal(person.getFactsByType('http://gedcomx.org/Death').length, 0);
  });
  
  it('Build', function(){
    var person = GedcomX.Person()
      .setId('testPerson')
      .setPrivate(true)
      .setGender(GedcomX.Gender().setType('http://gedcomx.org/Female'))
      .addName(GedcomX.Name().addNameForm(GedcomX.NameForm().setFullText('Joanna Hopkins')))
      .addFact(GedcomX.Fact().setType('http://gedcomx.org/Birth').setDate(GedcomX.Date().setFormal('+2001-04-09')).setPlace(GedcomX.PlaceReference().setOriginal('Farm house')));
    assert.equal(person.getId(), 'testPerson');
    assert.equal(person.getPrivate(), true);
    assert.equal(person.getGender().getType(), 'http://gedcomx.org/Female');
    assert(person.isFemale());
    assert(!person.isMale());
    assert.equal(person.getNames()[0].getNameForms()[0].getFullText(), 'Joanna Hopkins');
    var birth = person.getFactsByType('http://gedcomx.org/Birth')[0];
    assert.equal(birth.getDate().getFormal(), '+2001-04-09');
    assert.equal(birth.getPlace().getOriginal(), 'Farm house');
    assert.equal(person.getFactsByType('http://gedcomx.org/Death').length, 0);
  });
  
  it('toJSON', function(){
    var data = {
      id: 'testPerson',
      private: true,
      gender: {
        type: 'http://gedcomx.org/Female'
      },
      names: [
        {
          type: 'http://gedcomx.org/BirthName',
          nameForms: [
            {
              fullText: 'Joanna Hopkins'
            }
          ]
        }  
      ],
      facts: [
        {
          type: 'http://gedcomx.org/Birth',
          date: {
            formal: '+2001-04-09'
          },
          place: {
            original: 'Farm house'
          }
        }  
      ]
    }, person = GedcomX.Person(data);
    assert.deepEqual(person.toJSON(), data);
    person = GedcomX.Person()
      .setId('testPerson')
      .setPrivate(true)
      .setGender(GedcomX.Gender().setType('http://gedcomx.org/Female'))
      .addName(GedcomX.Name().setType('http://gedcomx.org/BirthName').addNameForm(GedcomX.NameForm().setFullText('Joanna Hopkins')))
      .addFact(GedcomX.Fact().setType('http://gedcomx.org/Birth').setDate(GedcomX.Date().setFormal('+2001-04-09')).setPlace(GedcomX.PlaceReference().setOriginal('Farm house')));
    assert.deepEqual(person.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Person();
    var obj2 = GedcomX.Person(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});