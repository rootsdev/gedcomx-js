# GEDCOM X JS

[![Build Status](https://travis-ci.org/rootsdev/gedcomx-js.svg?branch=master)](https://travis-ci.org/rootsdev/gedcomx-js)
[![codecov](https://codecov.io/gh/rootsdev/gedcomx-js/branch/master/graph/badge.svg)](https://codecov.io/gh/rootsdev/gedcomx-js)

A JavaScript library for the [GEDCOM X](http://www.gedcomx.org/) data model.
This library does _not_ support the [GEDCOM X RS specification](https://github.com/FamilySearch/gedcomx-rs).

## Usage

```js
// Build a document from scratch
var doc = new GedcomX()
  .addPerson(
    new GedcomX.Person()
      .addFact(
        new GedcomX.Fact()
          .setType('Birth')
          .setDate('+2014-04-09')
          .setPlace('Verona')
      )
  )
  .addRelationship(
    new GedcomX.Relationship()
      .setType('Couple')
      .setPerson1('person1')
      .setPerson2('person2')
  );
  
// Create a document from a JSON object
var doc = new GedcomX({
  persons: [
    {
      id: 'person1',
      facts: [
        {
          type: 'http://gedcomx.org/Birth',
          date: {
            formal: '+2014-04-09'
          },
          place: {
            original: 'Verona'
          }
        }
      ]
    }
  ]
});

// Mix and match
var doc = new GedcomX({
  persons: [
    new Person({
      facts: [
        {
          type: 'http://gedcomx.org/Birth',
          date: {
            formal: '+2014-04-09'
          },
          place: {
            original: 'Verona'
          }
        },
        new Fact()
          .setType('Birth')
          .setDate('+2014-04-09')
          .setPlace('Verona')
      ]
    })
  ]
});
  
```