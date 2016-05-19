var chai = require('chai');
chai.use(require('chai-json-schema'));

var assert = chai.assert,
    GedcomXSchema = require('gedcomx-json-schema'),
    GedcomX = require('../');

describe('GedcomX', function(){
  
  it('Create plain', function(){
    var newGedx = new GedcomX(),
        gedx = GedcomX();
    assert.instanceOf(newGedx, GedcomX, 'An instance of GedcomX is not returned when calling the constructor with new.');
    assert.instanceOf(gedx, GedcomX, 'An instance of GedcomX is not returned when calling the constructor without new.');
    assert.jsonSchema(newGedx.toJSON(), GedcomXSchema);
    assert.jsonSchema(gedx.toJSON(), GedcomXSchema);
  });
  
  it('Create with JSON', function(){
    var gedx = GedcomX({
      persons: [
        {
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
        } 
      ]
    });
    assert.equal(gedx.getPersons().length, 1);
    assert.equal(gedx.getPersons()[0].getGender().getType(), 'http://gedcomx.org/Female');
    assert.equal(gedx.getPersons()[0].getNames().length, 1);
    assert.equal(gedx.getPersons()[0].getFacts().length, 1);
    assert.jsonSchema(gedx.toJSON(), GedcomXSchema);
  });
  
  it('Create with mixed data', function(){
    var gedx = GedcomX({
      persons: [
        GedcomX.Person({
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
        })
      ]
    });
    assert.equal(gedx.getPersons().length, 1);
    assert.equal(gedx.getPersons()[0].getGender().getType(), 'http://gedcomx.org/Female');
    assert.equal(gedx.getPersons()[0].getNames().length, 1);
    assert.equal(gedx.getPersons()[0].getFacts().length, 1);
    assert.jsonSchema(gedx.toJSON(), GedcomXSchema);
  });
  
  it('Build', function(){
    var gedx = GedcomX()
      .addPerson(
        GedcomX.Person().setGender(
          GedcomX.Gender().setType('http://gedcomx.org/Female')
        )
      );
    assert.equal(gedx.getPersons().length, 1);
    assert.equal(gedx.getPersons()[0].getGender().getType(), 'http://gedcomx.org/Female');
    assert.jsonSchema(gedx.toJSON(), GedcomXSchema);
  });
  
  it('toJSON', function(){
    var data = {
      persons: [
        {
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
        } 
      ]
    }, gedx = GedcomX(data);
    assert.deepEqual(gedx.toJSON(), data);
    assert.jsonSchema(gedx.toJSON(), GedcomXSchema);
  });
  
});