var assert = require('chai').assert,
    GedcomX = require('../../');

describe('AtomCategory', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.AtomCategory(), GedcomX.AtomCategory, 'An instance of AtomCategory is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.AtomCategory(), GedcomX.AtomCategory, 'An instance of AtomCategory is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var category = GedcomX.AtomCategory({
      scheme: 'scheme',
      term: 'term',
      label: 'label'
    });
    assert.equal(category.getScheme(), 'scheme');
    assert.equal(category.getTerm(), 'term');
    assert.equal(category.getLabel(), 'label');
  });
  
  it('Build', function(){
    var category = GedcomX.AtomCategory()
      .setScheme('scheme')
      .setTerm('term')
      .setLabel('label');
    assert.equal(category.getScheme(), 'scheme');
    assert.equal(category.getTerm(), 'term');
    assert.equal(category.getLabel(), 'label');
  });
  
  it('toJSON', function(){
    var data = {
      scheme: 'scheme',
      term: 'term',
      label: 'label'
    }, category = GedcomX.AtomCategory(data);
    assert.deepEqual(category.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.AtomCategory();
    var obj2 = GedcomX.AtomCategory(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});