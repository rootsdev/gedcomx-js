var assert = require('chai').assert,
    GedcomX = require('../');

describe('Note', function(){
  
  it('Create plain', function(){
    var newNote = new GedcomX.Note(),
        note = GedcomX.Note();
    assert.instanceOf(newNote, GedcomX.Note, 'An instance of Note is not returned when calling the constructor with new.');
    assert.instanceOf(note, GedcomX.Note, 'An instance of Note is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var note = GedcomX.Note({
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
    var note = GedcomX.Note({
      id: 'note',
      lang: 'en',
      subject: 'A subject',
      text: 'Lots of text',
      attribution: new GedcomX.Attribution({
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
    var note = GedcomX.Note()
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
      note = GedcomX.Note(noteData);
    assert.deepEqual(note.toJSON(), noteData);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Note();
    var obj2 = GedcomX.Note(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});