var assert = require('chai').assert,
    GedcomX = require('../../');

describe('Person', function(){
  
  var personJSON = {
    id: 'testPerson',
    private: true,
    living: true,
    gender: {
      type: 'http://gedcomx.org/Female'
    },
    names: [
      {
        preferred: true,
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
    ],
    display: {
      "name" : "Joanna Hopkins",
      "gender" : "Female"
    }
  };
  
  it('Create with JSON', function(){
    var person = GedcomX.Person(personJSON);
    assert.equal(person.getLiving(), true);
    assert.equal(person.getId(), 'testPerson');
    assert.equal(person.getPrivate(), true);
    assert.equal(person.getGender().getType(), 'http://gedcomx.org/Female');
    assert.equal(person.getPreferredName().getNameForms()[0].getFullText(), 'Joanna Hopkins');
    assert.equal(person.getNames()[0].getNameForms()[0].getFullText(), 'Joanna Hopkins');
    assert.equal(person.getFacts()[0].getDate().getFormal(), '+2001-04-09');
    assert.equal(person.getFacts()[0].getPlace().getOriginal(), 'Farm house');
    assert.equal(person.getDisplay().getName(), 'Joanna Hopkins');
  });
  
  it('Build', function(){
    var person = GedcomX.Person()
      .setId('testPerson')
      .setLiving(true)
      .setPrivate(true)
      .setGender(GedcomX.Gender().setType('http://gedcomx.org/Female'))
      .addName(GedcomX.Name().setPreferred(true).addNameForm(GedcomX.NameForm().setFullText('Joanna Hopkins')))
      .addFact(GedcomX.Fact().setDate(GedcomX.Date().setFormal('+2001-04-09')).setPlace(GedcomX.PlaceReference().setOriginal('Farm house')))
      .setDisplay(GedcomX.DisplayProperties().setName("Joanna Hopkins").setGender("Female"));
    assert.equal(person.getLiving(), true);
    assert.equal(person.getId(), 'testPerson');
    assert.equal(person.getPrivate(), true);
    assert.equal(person.getGender().getType(), 'http://gedcomx.org/Female');
    assert.equal(person.getPreferredName().getNameForms()[0].getFullText(), 'Joanna Hopkins');
    assert.equal(person.getNames()[0].getNameForms()[0].getFullText(), 'Joanna Hopkins');
    assert.equal(person.getFacts()[0].getDate().getFormal(), '+2001-04-09');
    assert.equal(person.getFacts()[0].getPlace().getOriginal(), 'Farm house');
    assert.equal(person.getDisplay().getName(), 'Joanna Hopkins');
  });
  
  it('toJSON', function(){
    var person = GedcomX.Person(personJSON);
    assert.deepEqual(person.toJSON(), personJSON);
  });
  
});