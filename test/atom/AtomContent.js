var assert = require('chai').assert,
    GedcomX = require('../../');

describe('AtomContent', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.AtomContent(), GedcomX.AtomContent, 'An instance of AtomContent is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.AtomContent(), GedcomX.AtomContent, 'An instance of AtomContent is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var content = GedcomX.AtomContent({
      type: 'type',
      gedcomx: {
        description: '#root'
      }
    });
    assert.equal(content.getType(), 'type');
    assert.equal(content.getGedcomX().getDescription(), '#root');
  });
  
  it('Build', function(){
    var content = GedcomX.AtomContent()
      .setType('type')
      .setGedcomX(GedcomX().setDescription('#root'));
    assert.equal(content.getType(), 'type');
    assert.equal(content.getGedcomX().getDescription(), '#root');
  });
  
  it('toJSON', function(){
    var data = {
      type: 'type',
      gedcomx: {
        description: '#root'
      }
    }, content = GedcomX.AtomContent(data);
    assert.deepEqual(content.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.AtomContent();
    var obj2 = GedcomX.AtomContent(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});