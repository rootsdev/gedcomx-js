var assert = require('chai').assert,
    NamePart = require('../src/NamePart'),
    NameForm = require('../src/NameForm');

describe('NameForm', function(){
  
  it('Create plain', function(){
    var newNameform = new NameForm(),
        form = NameForm();
    assert.instanceOf(newNameform, NameForm, 'An instance of NameForm is not returned when calling the constructor with new.');
    assert.instanceOf(form, NameForm, 'An instance of NameForm is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var nameForm = NameForm({
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
    var nameForm = NameForm({
      id: 'nameform',
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
    var nameForm = new NameForm()
      .setId('nameform')
      .setLang('en')
      .setFullText('Jonathan Burrows')
      .addPart(NamePart().setType('http://gedcomx.org/Given').setValue('Jonathan'))
      .addPart(NamePart().setType('http://gedcomx.org/Surname').setValue('Burrows'));
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
    }, nameForm = NameForm(data);
    assert.deepEqual(nameForm.toJSON(), data);
  });
  
});