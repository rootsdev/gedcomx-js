var assert = require('chai').assert,
    GedcomX = require('../../');

describe('CollectionContent', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.CollectionContent(), GedcomX.CollectionContent, 'An instance of CollectionContent is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.CollectionContent(), GedcomX.CollectionContent, 'An instance of CollectionContent is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var cc = GedcomX.CollectionContent({
      resourceType: 'http://gedcomx.org/Record',
      count: 183429102,
      completeness: .8237
    });
    assert.equal(cc.getResourceType(), 'http://gedcomx.org/Record');
    assert.equal(cc.getCount(), 183429102);
    assert.equal(cc.getCompleteness(), .8237);
  });
  
  it('Build', function(){
    var cc = GedcomX.CollectionContent()
      .setResourceType('http://gedcomx.org/Record')
      .setCount(183429102)
      .setCompleteness(.8237);
    assert.equal(cc.getResourceType(), 'http://gedcomx.org/Record');
    assert.equal(cc.getCount(), 183429102);
    assert.equal(cc.getCompleteness(), .8237);
  });
  
  it('toJSON', function(){
    var data = {
      resourceType: 'http://gedcomx.org/Record',
      count: 183429102,
      completeness: .8237
    }, cc = GedcomX.CollectionContent(data);
    assert.deepEqual(cc.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.CollectionContent();
    var obj2 = GedcomX.CollectionContent(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});