var assert = require('chai').assert,
    GedcomX = require('../../');

describe('NameForm', function(){
  
  it('Create plain', function(){
    var newNameform = new GedcomX.NameForm(),
        form = GedcomX.NameForm();
    assert.instanceOf(newNameform, GedcomX.NameForm, 'An instance of NameForm is not returned when calling the constructor with new.');
    assert.instanceOf(form, GedcomX.NameForm, 'An instance of NameForm is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var nameForm = GedcomX.NameForm({
      id: 'nameform',
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
    });
    assert.equal(nameForm.getId(), 'nameform');
    assert.equal(nameForm.getLang(), 'en');
    assert.equal(nameForm.getFullText(), 'Jonathan Burrows');
    assert.equal(nameForm.getParts().length, 2);
    assert.equal(nameForm.getParts()[0].getType(), 'http://gedcomx.org/Given');
    assert.equal(nameForm.getParts()[0].getValue(), 'Jonathan');
    assert.equal(nameForm.getParts()[1].getType(), 'http://gedcomx.org/Surname');
    assert.equal(nameForm.getParts()[1].getValue(), 'Burrows');
  });
  
  it('Create with mixed data', function(){
    var nameForm = GedcomX.NameForm({
      id: 'nameform',
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
    });
    assert.equal(nameForm.getId(), 'nameform');
    assert.equal(nameForm.getLang(), 'en');
    assert.equal(nameForm.getFullText(), 'Jonathan Burrows');
    assert.equal(nameForm.getParts().length, 2);
    assert.equal(nameForm.getParts()[0].getType(), 'http://gedcomx.org/Given');
    assert.equal(nameForm.getParts()[0].getValue(), 'Jonathan');
    assert.equal(nameForm.getParts()[1].getType(), 'http://gedcomx.org/Surname');
    assert.equal(nameForm.getParts()[1].getValue(), 'Burrows');
  });
  
  it('Build', function(){
    var nameForm = new GedcomX.NameForm()
      .setId('nameform')
      .setLang('en')
      .setFullText('Jonathan Burrows')
      .addPart(GedcomX.NamePart().setType('http://gedcomx.org/Given').setValue('Jonathan'))
      .addPart(GedcomX.NamePart().setType('http://gedcomx.org/Surname').setValue('Burrows'));
    assert.equal(nameForm.getId(), 'nameform');
    assert.equal(nameForm.getLang(), 'en');
    assert.equal(nameForm.getFullText(), 'Jonathan Burrows');
    assert.equal(nameForm.getParts().length, 2);
    assert.equal(nameForm.getParts()[0].getType(), 'http://gedcomx.org/Given');
    assert.equal(nameForm.getParts()[0].getValue(), 'Jonathan');
    assert.equal(nameForm.getParts()[1].getType(), 'http://gedcomx.org/Surname');
    assert.equal(nameForm.getParts()[1].getValue(), 'Burrows');
  });
  
  it('toJSON', function(){
    var data = {
      id: 'nameform',
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
    }, nameForm = GedcomX.NameForm(data);
    assert.deepEqual(nameForm.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.NameForm();
    var obj2 = GedcomX.NameForm(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
  it('getFullText(true) calculates full text', function(){
    var nameForm = GedcomX.NameForm({
      parts: [
        {
          type: 'http://gedcomx.org/Given',
          value: 'Mr.'
        },
        {
          type: 'http://gedcomx.org/Given',
          value: 'Jonathan'
        },
        {
          type: 'http://gedcomx.org/Given',
          value: 'Scott'
        },
        {
          type: 'http://gedcomx.org/Surname',
          value: 'Burrows'
        }
      ]
    });
    assert.equal(nameForm.getFullText(), undefined);
    assert.equal(nameForm.getFullText(true), 'Mr. Jonathan Scott Burrows');
  });
  
});