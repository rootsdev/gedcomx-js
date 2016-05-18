var assert = require('chai').assert,
    NameForm = require('../src/NameForm'),
    Name = require('../src/Name'),
    Fact = require('../src/Fact'),
    Gender = require('../src/Gender'),
    GDate = require('../src/Date'),
    PlaceReference = require('../src/PlaceReference'),
    Person = require('../src/Person');

describe('Person', function(){
  
  it('Create plain', function(){
    var newPerson = new Person(),
        person = Person();
    assert.instanceOf(newPerson, Person, 'An instance of Person is not returned when calling the constructor with new.');
    assert.instanceOf(person, Person, 'An instance of Person is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var person = Person({
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
    assert.equal(person.isPrivate(), true);
    assert.equal(person.getGender().getType(), 'http://gedcomx.org/Female');
    assert.equal(person.getNames()[0].getNameForms()[0].getFullText(), 'Joanna Hopkins');
    assert.equal(person.getFacts()[0].getDate().getFormal(), '+2001-04-09');
    assert.equal(person.getFacts()[0].getPlace().getOriginal(), 'Farm house');
  });
  
  it('Create with mixed data', function(){
    var person = Person({
      id: 'testPerson',
      private: true,
      gender: Gender({
        type: 'http://gedcomx.org/Female'
      }),
      names: [
        Name({
          type: 'http://gedcomx.org/BirthName',
          nameForms: [
            {
              fullText: 'Joanna Hopkins'
            }
          ]
        })
      ],
      facts: [
        Fact({
          type: 'http://gedcomx.org/Birth',
          date: GDate({
            formal: '+2001-04-09'
          }),
          place: PlaceReference({
            original: 'Farm house'
          })
        })
      ]
    });
    assert.equal(person.getId(), 'testPerson');
    assert.equal(person.isPrivate(), true);
    assert.equal(person.getGender().getType(), 'http://gedcomx.org/Female');
    assert.equal(person.getNames()[0].getNameForms()[0].getFullText(), 'Joanna Hopkins');
    assert.equal(person.getFacts()[0].getDate().getFormal(), '+2001-04-09');
    assert.equal(person.getFacts()[0].getPlace().getOriginal(), 'Farm house');
  });
  
  it('Build', function(){
    var person = Person()
      .setId('testPerson')
      .setPrivate(true)
      .setGender(Gender().setType('http://gedcomx.org/Female'))
      .addName(Name().addNameForm(NameForm().setFullText('Joanna Hopkins')))
      .addFact(Fact().setDate(GDate().setFormal('+2001-04-09')).setPlace(PlaceReference().setOriginal('Farm house')));
    assert.equal(person.getId(), 'testPerson');
    assert.equal(person.isPrivate(), true);
    assert.equal(person.getGender().getType(), 'http://gedcomx.org/Female');
    assert.equal(person.getNames()[0].getNameForms()[0].getFullText(), 'Joanna Hopkins');
    assert.equal(person.getFacts()[0].getDate().getFormal(), '+2001-04-09');
    assert.equal(person.getFacts()[0].getPlace().getOriginal(), 'Farm house');
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
    }, person = Person(data);
    assert.deepEqual(person.toJSON(), data);
    person = Person()
      .setId('testPerson')
      .setPrivate(true)
      .setGender(Gender().setType('http://gedcomx.org/Female'))
      .addName(Name().setType('http://gedcomx.org/BirthName').addNameForm(NameForm().setFullText('Joanna Hopkins')))
      .addFact(Fact().setType('http://gedcomx.org/Birth').setDate(GDate().setFormal('+2001-04-09')).setPlace(PlaceReference().setOriginal('Farm house')));
    assert.deepEqual(person.toJSON(), data);
  });
  
});