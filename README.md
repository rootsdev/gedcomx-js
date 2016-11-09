# GEDCOM X JS

[![npm](https://img.shields.io/npm/v/gedcomx-js.svg?maxAge=2592000)](https://www.npmjs.com/package/gedcomx-js)
[![Build Status](https://travis-ci.org/rootsdev/gedcomx-js.svg?branch=master)](https://travis-ci.org/rootsdev/gedcomx-js)
[![codecov](https://codecov.io/gh/rootsdev/gedcomx-js/branch/master/graph/badge.svg)](https://codecov.io/gh/rootsdev/gedcomx-js)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/rootsdev/gedcomx-js/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/rootsdev/gedcomx-js/?branch=master)

A JavaScript library for the [GEDCOM X](http://www.gedcomx.org/) data model
including the [GEDCOM X RS](https://github.com/FamilySearch/gedcomx-rs),
the [GEDCOM X Records](https://github.com/FamilySearch/gedcomx-record/blob/master/specifications/record-specification.md),
and the [GEDCOM X Atom Extensions](https://github.com/FamilySearch/gedcomx-rs/blob/master/specifications/atom-model-specification.md) specifications.

Read the [documentation](http://rootsdev.org/gedcomx-js/) for a list of all 
classes and methods.

## Install

NPM

```
npm install --save gedcomx-js
```

CDN via [unpkg](https://unpkg.com/#/)

```html
<script src="https://unpkg.com/gedcomx-js@2.5.1/dist/gedcomx.min.js"></script>
```

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

### RS Spec, Records Spec, and Atom Extensions

The RS, Records, and Atom extensions are disabled by default. They must be
explicitly enabled.

```js
GedcomX.enableRsExtensions();
GedcomX.enableRecordsExtensions();
GedcomX.enableAtomExtensions();
```

Note that the Atom extensions depend on the RS extensions thus calling
`enableAtomExtensions()` will also call `enableRsExtensions()`.

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

That's a lot of work for one name. So you could create your own helper method
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

## Data Model Extensions

GEDCOM X allows for it's data model to be [extended](https://github.com/FamilySearch/gedcomx/blob/master/specifications/conceptual-model-specification.md#extensibility).
The [RS](https://github.com/FamilySearch/gedcomx-rs/blob/master/specifications/rs-specification.md)
and [Records](https://github.com/FamilySearch/gedcomx-record/blob/master/specifications/record-specification.md)
specs are defined as extensions.

There are two ways that the spec can be extended.

### 1. Adding Properties to Existing Data Types

Extensions can add properties to existing data types. For example the RS spec
defines `resourceId` as an extension to `ResourceReference`. gedcomx-js supports 
property extensions by using prototypical inheritance which allows for prototypes
to be modified.

There are three situations where extensions need to be accounted for:

1. __Deserialization and Instantiation__: All classes have an `init()` method which
can me overriden to account for additional properties.

    ```js
    // Override init() so that we can deserialize normalized values
    var oldInit = GedcomX.ResourceReference.prototype.init;
    GedcomX.ResourceReference.prototype.init = function(json){
      oldInit.call(this, json);
      if(json){
        this.setResourceId(json.resourceId);
      }
    };
    ```
    
2. __Getters and Setters__: Just extend the prototype.

    ```js
    /**
     * Set the resourceId
     * 
     * @param {Boolean} resourceId
     * @return {ResourceReference} this
     */
    GedcomX.ResourceReference.prototype.setResourceId = function(resourceId){
      this.resourceId = resourceId;
      return this;
    };
    
    /**
     * Get the resourceId
     * 
     * @return {Boolean} resourceId
     */
    GedcomX.ResourceReference.prototype.getResourceId = function(){
      return this.resourceId;
    };
    ```
    
3. __Serialization__: Each class has a static `jsonProps` attribute which is
a list of properties that should be serialized.

    ```js
    // Extend serialization properties
    GedcomX.ResourceReference.jsonProps.push('resourceId');
    ```
    
    Not only does it support extensibility but it also great reduces code duplication.

### 2. Adding New Data Types

New data types are added by setting a reference on the exported `GedcomX` object.

```js
var DisplayProperties = function(json){
  // Constructor
};

// Lots of prototype setup...

// Add to the GedcomX object
GedcomX.DisplayProperties = DisplayProperties;
```

Next we need to configure when our new data type will be used. The example above
uses `DisplayProperties` which is defined in the [RS spec](https://github.com/FamilySearch/gedcomx-rs/blob/master/specifications/rs-specification.md#extensions-person-data-type)
as being an extension of `Person`. Thus we also must follow the method described
above for adding the new property `display` to the existing data type `Person`.