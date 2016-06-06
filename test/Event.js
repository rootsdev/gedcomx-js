var assert = require('chai').assert,
    GedcomX = require('../');

describe('Event', function(){
  
  it('Create plain', function(){
    assert.instanceOf(GedcomX.Event(), GedcomX.Event, 'An instance of Event is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.Event(), GedcomX.Event, 'An instance of Event is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var event = GedcomX.Event({
      type: 'http://gedcomx.org/Marriage',
      date: {
        formal: '+2002-06-06'
      },
      place: {
        original: 'Her town, MN'
      },
      roles: [
        {
          person: {
            resource: 'http://groom'
          },
          type: 'http://gedcomx.org/Participant'
        }
      ]
    });
    assert.equal(event.getType(), 'http://gedcomx.org/Marriage');
    assert.equal(event.getDate().getFormal(), '+2002-06-06');
    assert.equal(event.getPlace().getOriginal(), 'Her town, MN');
    assert.equal(event.getRoles().length, 1);
    assert.equal(event.getRoles()[0].getPerson().getResource(), 'http://groom');
    assert.equal(event.getRoles()[0].getType(), 'http://gedcomx.org/Participant');
  });
  
  it('Create with mixed data', function(){
    var event = GedcomX.Event({
      type: 'http://gedcomx.org/Marriage',
      date: GedcomX.Date({
        formal: '+2002-06-06'
      }),
      place: GedcomX.PlaceReference({
        original: 'Her town, MN'
      }),
      roles: [
        GedcomX.EventRole({
          person: {
            resource: 'http://groom'
          },
          type: 'http://gedcomx.org/Participant'
        })
      ]
    });
    assert.equal(event.getType(), 'http://gedcomx.org/Marriage');
    assert.equal(event.getDate().getFormal(), '+2002-06-06');
    assert.equal(event.getPlace().getOriginal(), 'Her town, MN');
    assert.equal(event.getRoles().length, 1);
    assert.equal(event.getRoles()[0].getPerson().getResource(), 'http://groom');
    assert.equal(event.getRoles()[0].getType(), 'http://gedcomx.org/Participant');
  });
  
  it('Build', function(){
    var event = GedcomX.Event()
      .setType('http://gedcomx.org/Marriage')
      .setDate(GedcomX.Date().setFormal('+2002-06-06'))
      .setPlace(GedcomX.PlaceReference().setOriginal('Her town, MN'))
      .addRole(GedcomX.EventRole()
        .setType('http://gedcomx.org/Participant')
        .setPerson(GedcomX.ResourceReference().setResource('http://groom')));
    assert.equal(event.getType(), 'http://gedcomx.org/Marriage');
    assert.equal(event.getDate().getFormal(), '+2002-06-06');
    assert.equal(event.getPlace().getOriginal(), 'Her town, MN');
    assert.equal(event.getRoles().length, 1);
    assert.equal(event.getRoles()[0].getPerson().getResource(), 'http://groom');
    assert.equal(event.getRoles()[0].getType(), 'http://gedcomx.org/Participant');
  });
  
  it('toJSON', function(){
    var data = {
      type: 'http://gedcomx.org/Marriage',
      date: {
        formal: '+2002-06-06'
      },
      place: {
        original: 'Her town, MN'
      },
      roles: [
        {
          person: {
            resource: 'http://groom'
          },
          type: 'http://gedcomx.org/Participant'
        }
      ]
    }, event = GedcomX.Event(data);
    assert.deepEqual(event.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Event();
    var obj2 = GedcomX.Event(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});