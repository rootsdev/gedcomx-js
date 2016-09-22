# GEDCOM X JS

[![npm](https://img.shields.io/npm/v/gedcomx-js.svg?maxAge=2592000)](https://www.npmjs.com/package/gedcomx-js)
[![Build Status](https://travis-ci.org/rootsdev/gedcomx-js.svg?branch=master)](https://travis-ci.org/rootsdev/gedcomx-js)
[![codecov](https://codecov.io/gh/rootsdev/gedcomx-js/branch/master/graph/badge.svg)](https://codecov.io/gh/rootsdev/gedcomx-js)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/rootsdev/gedcomx-js/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/rootsdev/gedcomx-js/?branch=master)

A JavaScript library for the [GEDCOM X](http://www.gedcomx.org/) data model.
This library does not yet support the [GEDCOM X RS](https://github.com/FamilySearch/gedcomx-rs)
and [GEDCOM X Records](https://github.com/FamilySearch/gedcomx-record/blob/master/specifications/record-specification.md) specifications.

Read the [documentation](http://rootsdev.org/gedcomx-js/) for a list of all 
classes and methods. [`GedcomX`](http://rootsdev.org/gedcomx-js/GedcomX.html) 
is the root element that you'll usually start with.

## Usage

Create a document from a JSON object.

```js
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
```

Or build a document from scratch.

```js
var doc = new GedcomX()
  .addPerson(
    new GedcomX.Person()
      .addFact(
        new GedcomX.Fact()
          .setType('http://gedcomx.org/Birth')
          .setDate(new GedcomX.Date().setFormal('+2014-04-09'))
          .setPlace(new GedcomX.PlaceReference().setOriginal('Verona'))
      )
  );
```

Or mix and match.

```js
var doc = new GedcomX({
  persons: [
    new GedcomX.Person({
      facts: [
        new GedcomX.Fact()
          .setType('http://gedcomx.org/Birth')
          .setDate({ formal: '+2014-04-09' })
          .setPlace({ original: 'Verona' })
      ]
    })
  ]
});
```

## Installation

```
npm install gedcomx-js
```

## Notes

The use of `new` when constructing objects is optional. The two following lines of code are equivalent:

```js
new GedcomX.Person();
GedcomX.Person();
```

All objects have a `toJSON()` method for serialization.

The library is currently just an [anemic domain model](https://en.wikipedia.org/wiki/Anemic_domain_model)
for the [GEDCOM X JSON Serialization Format](https://github.com/FamilySearch/gedcomx/blob/master/specifications/json-format-specification.md).
We plan on eventually adding useful helpers and better enforcement of the specification
(such as checking the format of formal dates).

You can add helpers of your own. Perhaps you're working with a data set where
people only have one name with no prefix or suffix. You'll end up doing this often:

```js
person.addName(
  GedcomX.Name()
    .addNameForm(
      GedcomX.NameForm()
        .addNamePart(
          GedcomX.NamePart()
            .setType('http://gedcomx.org/Given')
            .setValue('Jonathan')
          )
        .addNamePart(
          GedcomX.NamePart()
            .setType('http://gedcomx.org/Surname')
            .setValue('Burrows')
        )
    )
);
```

That's ~~hideous~~ a lot of work for one name. So you could create your own helper method
by adding to the `GedcomX.Person` prototype.

```js
GedcomX.Person.prototype.addSimpleName = function(given, surname){
  this.addName(
    GedcomX.Name()
      .addNameForm(
        GedcomX.NameForm()
          .addNamePart(
            GedcomX.NamePart()
              .setType('http://gedcomx.org/Given')
              .setValue(given)
          )
          .addNamePart(
            GedcomX.NamePart()
              .setType('http://gedcomx.org/Surname')
              .setValue(surname)
          )
      )
  )
};
```

Then adding names is easy:

```js
person.addSimpleName('Jonathan', 'Burrows');
```