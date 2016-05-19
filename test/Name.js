var assert = require('chai').assert,
    GedcomX = require('../');

describe('Name', function(){
  
  it('Create plain', function(){
    var newName = new GedcomX.Name(),
        name = GedcomX.Name();
    assert.instanceOf(newName, GedcomX.Name, 'An instance of Name is not returned when calling the constructor with new.');
    assert.instanceOf(name, GedcomX.Name, 'An instance of Name is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var name = GedcomX.Name({
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
    var name = GedcomX.Name({
      type: 'http://gedcomx.org/BirthName',
      date: GedcomX.Date({
        original: '1 June 1567'
      }),
      nameForms: [
        GedcomX.NameForm({
          lang: 'en',
          fullText: 'Jonathan Burrows',
          parts: [
            GedcomX.NamePart({
              type: 'http://gedcomx.org/Given',
              value: 'Jonathan'
            }),
            GedcomX.NamePart({
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
    var name = GedcomX.Name()
      .setType('http://gedcomx.org/BirthName')
      .setDate(GedcomX.Date().setOriginal('1 June 1567'))
      .addNameForm(
        GedcomX.NameForm()
          .setFullText('Jonathan Burrows')
          .addPart(GedcomX.NamePart().setType('http://gedcomx.org/Given').setValue('Jonathan'))
          .addPart(GedcomX.NamePart().setType('http://gedcomx.org/Surname').setValue('Burrows'))
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
    }, name = GedcomX.Name(data);
    assert.deepEqual(name.toJSON(), data);
  });
  
});