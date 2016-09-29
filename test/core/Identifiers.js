var assert = require('chai').assert,
    GedcomX = require('../../');

describe('Identifiers', function(){
  
  it('Create plain', function(){
    var newIdent = new GedcomX.Identifiers(),
        ident = GedcomX.Identifiers();
    assert.instanceOf(newIdent, GedcomX.Identifiers, 'An instance of Identifiers is not returned when calling the constructor with new.');
    assert.instanceOf(ident, GedcomX.Identifiers, 'An instance of Identifiers is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var ident = GedcomX.Identifiers({ 
      $: [ 'value_with_no_type' ],
      list: [ 'one', 'two' ],
      collapse: 'single_value'
    });
    assert.deepEqual(ident.getValues(), [ 'value_with_no_type' ]);
    assert.deepEqual(ident.getValues('list'), [ 'one', 'two' ]);
    assert.deepEqual(ident.getValues('collapse'), [ 'single_value' ]);
  });
  
  it('Build', function(){
    var ident = GedcomX.Identifiers();
    ident.addValue('value_with_no_type');
    ident.addValue('one', 'list');
    ident.addValue('two', 'list');
    ident.addValue('single_value', 'collapse');
    assert.deepEqual(ident.getValues(), [ 'value_with_no_type' ]);
    assert.deepEqual(ident.getValues('list'), [ 'one', 'two' ]);
    assert.deepEqual(ident.getValues('collapse'), [ 'single_value' ]);
  });
  
  it('toJSON() and single string collapsing', function(){
    var ident = GedcomX.Identifiers({ 
      $: [ 'value_with_no_type' ],
      list: [ 'one', 'two' ],
      collapse: 'single_value'
    });
    assert.deepEqual(ident.toJSON(), { 
      $: [ 'value_with_no_type' ],
      list: [ 'one', 'two' ],
      collapse: [ 'single_value' ]
    });
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Identifiers();
    var obj2 = GedcomX.Identifiers(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});