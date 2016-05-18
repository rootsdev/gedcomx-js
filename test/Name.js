var assert = require('chai').assert,
    NamePart = require('../src/NamePart'),
    NameForm = require('../src/NameForm'),
    Name = require('../src/Name'),
    GDate = require('../src/Date');

describe('Name', function(){
  
  it('Create plain', function(){
    var newName = new Name(),
        name = Name();
    assert.instanceOf(newName, Name, 'An instance of Name is not returned when calling the constructor with new.');
    assert.instanceOf(name, Name, 'An instance of Name is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var name = Name({
      type: 'http://gedcomx.org/BirthName',
      date: {
        original: '1 June 1567'
      },
      nameForms: [
        {
          lang: 'en',
          fullText: 'Jonathan Burrows',
          parts: [
            {
              type: 'http://gedcomx.org/Given',
              value: 'Jonathan'
            },
            {
              type: 'http://gedcomx.org/Surname',
              value: 'Burrows'
            }
          ]
        }
      ]
    });
    assert.equal(name.getType(), 'http://gedcomx.org/BirthName');
    assert.equal(name.getDate().getOriginal(), '1 June 1567');
    assert.equal(name.getNameForms().length, 1);
    assert.equal(name.getNameForms()[0].getFullText(), 'Jonathan Burrows');
    assert.equal(name.getNameForms()[0].getParts().length, 2);
    assert.equal(name.getNameForms()[0].getParts()[0].getType(), 'http://gedcomx.org/Given');
    assert.equal(name.getNameForms()[0].getParts()[0].getValue(), 'Jonathan');
    assert.equal(name.getNameForms()[0].getParts()[1].getType(), 'http://gedcomx.org/Surname');
    assert.equal(name.getNameForms()[0].getParts()[1].getValue(), 'Burrows');
  });
  
  it('Create with mixed data', function(){
    var name = Name({
      type: 'http://gedcomx.org/BirthName',
      date: GDate({
        original: '1 June 1567'
      }),
      nameForms: [
        NameForm({
          lang: 'en',
          fullText: 'Jonathan Burrows',
          parts: [
            NamePart({
              type: 'http://gedcomx.org/Given',
              value: 'Jonathan'
            }),
            NamePart({
              type: 'http://gedcomx.org/Surname',
              value: 'Burrows'
            })
          ]
        })
      ]
    });
    assert.equal(name.getType(), 'http://gedcomx.org/BirthName');
    assert.equal(name.getDate().getOriginal(), '1 June 1567');
    assert.equal(name.getNameForms().length, 1);
    assert.equal(name.getNameForms()[0].getFullText(), 'Jonathan Burrows');
    assert.equal(name.getNameForms()[0].getParts().length, 2);
    assert.equal(name.getNameForms()[0].getParts()[0].getType(), 'http://gedcomx.org/Given');
    assert.equal(name.getNameForms()[0].getParts()[0].getValue(), 'Jonathan');
    assert.equal(name.getNameForms()[0].getParts()[1].getType(), 'http://gedcomx.org/Surname');
    assert.equal(name.getNameForms()[0].getParts()[1].getValue(), 'Burrows');
  });
  
  it('Build', function(){
    var name = Name()
      .setType('http://gedcomx.org/BirthName')
      .setDate(GDate().setOriginal('1 June 1567'))
      .addNameForm(
        NameForm()
          .setFullText('Jonathan Burrows')
          .addPart(NamePart().setType('http://gedcomx.org/Given').setValue('Jonathan'))
          .addPart(NamePart().setType('http://gedcomx.org/Surname').setValue('Burrows'))
      );
    assert.equal(name.getType(), 'http://gedcomx.org/BirthName');
    assert.equal(name.getDate().getOriginal(), '1 June 1567');
    assert.equal(name.getNameForms().length, 1);
    assert.equal(name.getNameForms()[0].getFullText(), 'Jonathan Burrows');
    assert.equal(name.getNameForms()[0].getParts().length, 2);
    assert.equal(name.getNameForms()[0].getParts()[0].getType(), 'http://gedcomx.org/Given');
    assert.equal(name.getNameForms()[0].getParts()[0].getValue(), 'Jonathan');
    assert.equal(name.getNameForms()[0].getParts()[1].getType(), 'http://gedcomx.org/Surname');
    assert.equal(name.getNameForms()[0].getParts()[1].getValue(), 'Burrows');
  });
  
  it('toJSON', function(){
    var data = {
      type: 'http://gedcomx.org/BirthName',
      date: {
        original: '1 June 1567'
      },
      nameForms: [
        {
          lang: 'en',
          fullText: 'Jonathan Burrows',
          parts: [
            {
              type: 'http://gedcomx.org/Given',
              value: 'Jonathan'
            },
            {
              type: 'http://gedcomx.org/Surname',
              value: 'Burrows'
            }
          ]
        }
      ]
    }, name = Name(data);
    assert.deepEqual(name.toJSON(), data);
  });
  
});