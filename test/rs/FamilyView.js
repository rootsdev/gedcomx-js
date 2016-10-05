var assert = require('chai').assert,
    GedcomX = require('../../');

describe('FamilyView', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.FamilyView(), GedcomX.FamilyView, 'An instance of FamilyView is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.FamilyView(), GedcomX.FamilyView, 'An instance of FamilyView is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var family = GedcomX.FamilyView({
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
    assert.equal(family.getParent1().getResource(), '#parent1');
    assert.equal(family.getParent2().getResource(), '#parent2');
    assert.equal(family.getChildren().length, 2);
    assert.equal(family.getChildren()[0].getResource(), '#child1');
    assert.equal(family.getChildren()[1].getResource(), '#child2');
  });
  
  it('Build', function(){
    var family = GedcomX.FamilyView()
      .setParent1({resource: '#parent1'})
      .setParent2(GedcomX.ResourceReference().setResource('#parent2'))
      .addChild({ resource: '#child1'})
      .addChild(GedcomX.ResourceReference().setResource('#child2'));
    assert.equal(family.getParent1().getResource(), '#parent1');
    assert.equal(family.getParent2().getResource(), '#parent2');
    assert.equal(family.getChildren().length, 2);
    assert.equal(family.getChildren()[0].getResource(), '#child1');
    assert.equal(family.getChildren()[1].getResource(), '#child2');
  });
  
  it('toJSON', function(){
    var data = {
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
    }, family = GedcomX.FamilyView(data);
    assert.deepEqual(family.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.FamilyView();
    var obj2 = GedcomX.FamilyView(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});