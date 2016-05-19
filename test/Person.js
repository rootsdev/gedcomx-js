var assert = require('chai').assert,
    GedcomX = require('../');

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
    assert.equal(person.isPrivate(), true);
    assert.equal(person.getGender().getType(), 'http://gedcomx.org/Female');
    assert.equal(person.getNames()[0].getNameForms()[0].getFullText(), 'Joanna Hopkins');
    assert.equal(person.getFacts()[0].getDate().getFormal(), '+2001-04-09');
    assert.equal(person.getFacts()[0].getPlace().getOriginal(), 'Farm house');
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
    assert.equal(person.isPrivate(), true);
    assert.equal(person.getGender().getType(), 'http://gedcomx.org/Female');
    assert.equal(person.getNames()[0].getNameForms()[0].getFullText(), 'Joanna Hopkins');
    assert.equal(person.getFacts()[0].getDate().getFormal(), '+2001-04-09');
    assert.equal(person.getFacts()[0].getPlace().getOriginal(), 'Farm house');
  });
  
  it('Build', function(){
    var person = GedcomX.Person()
      .setId('testPerson')
      .setPrivate(true)
      .setGender(GedcomX.Gender().setType('http://gedcomx.org/Female'))
      .addName(GedcomX.Name().addNameForm(GedcomX.NameForm().setFullText('Joanna Hopkins')))
      .addFact(GedcomX.Fact().setDate(GedcomX.Date().setFormal('+2001-04-09')).setPlace(GedcomX.PlaceReference().setOriginal('Farm house')));
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
  
});