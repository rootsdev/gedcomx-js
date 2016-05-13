var assert = require('chai').assert,
    Note = require('../src/Note'),
    Attribution = require('../src/Attribution');

describe('Note', function(){
  
  it('Create plain', function(){
    var newNote = new Note(),
        note = Note();
    assert.instanceOf(newNote, Note, 'An instance of Note is not returned when calling the constructor with new.');
    assert.instanceOf(note, Note, 'An instance of Note is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var note = Note({
      id: 'note',
      lang: 'en',
      subject: 'A subject',
      text: 'Lots of text',
      attribution: {
        changeMessage: 'It changed',
        contributor: { resource: 'https://myapp.com/contributor'}
      }
    });
    assert.equal(note.getId(), 'note');
    assert.equal(note.getLang(), 'en');
    assert.equal(note.getSubject(), 'A subject');
    assert.equal(note.getText(), 'Lots of text');
    assert.equal(note.getAttribution().getContributor().getResource(), 'https://myapp.com/contributor');
  });
  
  it('Create with mixed data', function(){
    var note = Note({
      id: 'note',
      lang: 'en',
      subject: 'A subject',
      text: 'Lots of text',
      attribution: new Attribution({
        changeMessage: 'It changed',
        contributor: { resource: 'https://myapp.com/contributor'}
      })
    });
    assert.equal(note.getId(), 'note');
    assert.equal(note.getLang(), 'en');
    assert.equal(note.getSubject(), 'A subject');
    assert.equal(note.getText(), 'Lots of text');
    assert.equal(note.getAttribution().getContributor().getResource(), 'https://myapp.com/contributor');
  });
  
  it('Build', function(){
    var note = Note()
      .setId('note')
      .setLang('en')
      .setSubject('A subject')
      .setText('Lots of text')
      .setAttribution({
        changeMessage: 'It changed',
        contributor: { resource: 'https://myapp.com/contributor'}
      });
    assert.equal(note.getId(), 'note');
    assert.equal(note.getLang(), 'en');
    assert.equal(note.getSubject(), 'A subject');
    assert.equal(note.getText(), 'Lots of text');
    assert.equal(note.getAttribution().getContributor().getResource(), 'https://myapp.com/contributor');
  });
  
  it('toJSON', function(){
    var noteData = {
        id: 'note',
        lang: 'en',
        subject: 'A subject',
        text: 'Lots of text',
        attribution: {
          changeMessage: 'It changed',
          contributor: { resource: 'https://myapp.com/contributor'}
        }
      },
      note = Note(noteData);
    assert.deepEqual(note.toJSON(), noteData);
  });
  
});