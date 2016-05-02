# GEDCOM X JS

A JavaScript library for the [GEDCOM X](http://www.gedcomx.org/) data model.
This library does _not_ implement the [GEDCOM X RS specification](https://github.com/FamilySearch/gedcomx-rs)
for RESTful APIs.

## Usage

```js
// Build a document from scratch
var doc = new GedcomX()
  .addPerson(
    new GedcomX.Person()
      .addFact(
        new GedcomX.Fact()
          .setType('Birth') // Or should this be GedcomX.factType.BIRTH?
          .setDate('+2014-04-09') // Should we support https://github.com/trepo/gedcomx-date-js objects?
          .setPlace('Verona') // Automatically converted into a PlaceReference?
      )
  )
  .addRelationship(
    new GedcomX.Relationship()
      .setType('Couple')
      .setPerson1('person1') // This should probably be automatically converted into a ResourceReference
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

## Questions & Issues

* Should we require that `new` be used?
* Need consistency for when shortcuts are used and what their format is.
    * Creating objects
        * Always allow JSON
        * Accept most common attributes via the constructor?
        * Always provide getters and setters
    * Using enums: should we have shortcuts `fact.type('Birth')` or always 
      require direct reference such as `GedcomX.factType.BIRTH`?
* Should we use `get`, `set`, and `add` prefixes? Imagine the scenario where
  we didn't use them.
    * Get: `Person.facts()` to get facts.
    * Set: `Person.id('person1')`. What would `Person.facts(data)` be expected
      to do? Would that set the facts property or add data to the facts list?
    * Add: `Person.addFact(new Fact())` to add a fact. There's really no other
      option. We wouldn't want to do `Person.fact(new Fact())` because that
      would be inconcistent with the behavior of setting properties.
* Should we support the [gedcomx-date-js](https://github.com/trepo/gedcomx-date-js) library?