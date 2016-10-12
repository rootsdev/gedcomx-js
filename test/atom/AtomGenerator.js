var assert = require('chai').assert,
    GedcomX = require('../../');

describe('AtomGenerator', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.AtomGenerator(), GedcomX.AtomGenerator, 'An instance of AtomGenerator is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.AtomGenerator(), GedcomX.AtomGenerator, 'An instance of AtomGenerator is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var generator = GedcomX.AtomGenerator({
      uri: 'uri',
      version: 'version',
      value: 'value'
    });
    assert.equal(generator.getUri(), 'uri');
    assert.equal(generator.getVersion(), 'version');
    assert.equal(generator.getValue(), 'value');
  });
  
  it('Build', function(){
    var generator = GedcomX.AtomGenerator()
      .setUri('uri')
      .setVersion('version')
      .setValue('value');
    assert.equal(generator.getUri(), 'uri');
    assert.equal(generator.getVersion(), 'version');
    assert.equal(generator.getValue(), 'value');
  });
  
  it('toJSON', function(){
    var data = {
      uri: 'uri',
      version: 'version',
      value: 'value'
    }, generator = GedcomX.AtomGenerator(data);
    assert.deepEqual(generator.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.AtomGenerator();
    var obj2 = GedcomX.AtomGenerator(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});