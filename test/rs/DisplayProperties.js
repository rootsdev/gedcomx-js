var assert = require('chai').assert,
    GedcomX = require('../../');

describe('DisplayProperties', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.DisplayProperties(), GedcomX.DisplayProperties, 'An instance of DisplayProperties is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.DisplayProperties(), GedcomX.DisplayProperties, 'An instance of DisplayProperties is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var display = GedcomX.DisplayProperties({
      "name" : "Joe",
      "gender" : "Male",
      "lifespan" : "1900-1956",
      "birthDate" : "3 March 1900",
      "birthPlace" : "A place",
      "deathDate" : "14 January 1956",
      "deathPlace" : "Another place",
      "marriageDate" : "9 August 1927",
      "marriagePlace" : "Marriage place",
      "ascendancyNumber" : "3",
      "descendancyNumber" : "6",
      "familiesAsParent" : [{
        "parent1" :  {
          "resource" : "#parent1"
        },
        "parent2" :  {
          "resource" : "#parent2"
        },
        "children" : [ 
          { "resource" : "#child1" }, 
          { "resource" : "#child2" } 
        ]
      }],
      "familiesAsChild" : [{
        "parent1" :  {
          "resource" : "#parent1"
        },
        "parent2" :  {
          "resource" : "#parent2"
        },
        "children" : [ 
          { "resource" : "#child1" }, 
          { "resource" : "#child2" } 
        ]
      }]
    });
    assert.equal(display.getName(), 'Joe');
    assert.equal(display.getGender(), 'Male');
    assert.equal(display.getLifespan(), '1900-1956');
    assert.equal(display.getBirthDate(), '3 March 1900');
    assert.equal(display.getBirthPlace(), 'A place');
    assert.equal(display.getDeathDate(), '14 January 1956');
    assert.equal(display.getDeathPlace(), 'Another place');
    assert.equal(display.getMarriageDate(), '9 August 1927');
    assert.equal(display.getMarriagePlace(), 'Marriage place');
    assert.equal(display.getAscendancyNumber(), '3');
    assert.equal(display.getDescendancyNumber(), '6');
    assert.equal(display.getFamiliesAsParent().length, 1);
    assert.equal(display.getFamiliesAsChild().length, 1);
  });
  
  it('Build', function(){
    var display = GedcomX.DisplayProperties()
      .setName('Joe')
      .setGender('Male')
      .setLifespan('1900-1956')
      .setBirthDate('3 March 1900')
      .setBirthPlace('A place')
      .setDeathDate('14 January 1956')
      .setDeathPlace('Another place')
      .setMarriageDate('9 August 1927')
      .setMarriagePlace('Marriage place')
      .setAscendancyNumber('3')
      .setDescendancyNumber('6')
      .addFamilyAsParent({
        "parent1" :  {
          "resource" : "#parent1"
        },
        "parent2" :  {
          "resource" : "#parent2"
        },
        "children" : [ 
          { "resource" : "#child1" }, 
          { "resource" : "#child2" } 
        ]
      })
      .addFamilyAsChild({
        "parent1" :  {
          "resource" : "#parent1"
        },
        "parent2" :  {
          "resource" : "#parent2"
        },
        "children" : [ 
          { "resource" : "#child1" }, 
          { "resource" : "#child2" } 
        ]
      });
    assert.equal(display.getName(), 'Joe');
    assert.equal(display.getGender(), 'Male');
    assert.equal(display.getLifespan(), '1900-1956');
    assert.equal(display.getBirthDate(), '3 March 1900');
    assert.equal(display.getBirthPlace(), 'A place');
    assert.equal(display.getDeathDate(), '14 January 1956');
    assert.equal(display.getDeathPlace(), 'Another place');
    assert.equal(display.getMarriageDate(), '9 August 1927');
    assert.equal(display.getMarriagePlace(), 'Marriage place');
    assert.equal(display.getAscendancyNumber(), '3');
    assert.equal(display.getDescendancyNumber(), '6');
    assert.equal(display.getFamiliesAsParent().length, 1);
    assert.equal(display.getFamiliesAsChild().length, 1);
  });
  
  it('toJSON', function(){
    var data = {
      "name" : "Joe",
      "gender" : "Male",
      "lifespan" : "1900-1956",
      "birthDate" : "3 March 1900",
      "birthPlace" : "A place",
      "deathDate" : "14 January 1956",
      "deathPlace" : "Another place",
      "marriageDate" : "9 August 1927",
      "marriagePlace" : "Marriage place",
      "ascendancyNumber" : "3",
      "descendancyNumber" : "6",
      "familiesAsParent" : [{
        "parent1" :  {
          "resource" : "#parent1"
        },
        "parent2" :  {
          "resource" : "#parent2"
        },
        "children" : [ 
          { "resource" : "#child1" }, 
          { "resource" : "#child2" } 
        ]
      }],
      "familiesAsChild" : [{
        "parent1" :  {
          "resource" : "#parent1"
        },
        "parent2" :  {
          "resource" : "#parent2"
        },
        "children" : [ 
          { "resource" : "#child1" }, 
          { "resource" : "#child2" } 
        ]
      }]
    }, display = GedcomX.DisplayProperties(data);
    assert.deepEqual(display.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.DisplayProperties();
    var obj2 = GedcomX.DisplayProperties(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});