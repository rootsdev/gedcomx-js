var assert = require('chai').assert,
    GedcomX = require('../../');

describe('Collection', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.Collection(), GedcomX.Collection, 'An instance of Collection is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.Collection(), GedcomX.Collection, 'An instance of Collection is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var collection = GedcomX.Collection({
      id: 'collection',
      lang: 'en-US',
      content: [{
        resourceType: 'http://gedcomx.org/Record',
        count: 183429102,
        completeness: .8237
      }],
      title: 'Collection Title',
      size: 183429102,
      attribution: { 
        contributor: { resource: 'https://myapp.com/contributor'},
        created: 1111338494969,
        creator: { resource: 'https://myapp.com/creator'},
        modified: 1111338494969
      }
    });
    assert.equal(collection.getId(), 'collection');
    assert.equal(collection.getLang(), 'en-US');
    assert.equal(collection.getContent()[0].getResourceType(), 'http://gedcomx.org/Record');
    assert.equal(collection.getTitle(), 'Collection Title');
    assert.equal(collection.getSize(), 183429102);
    assert(GedcomX.Attribution.isInstance(collection.getAttribution()));
  });
  
  it('Build', function(){
    var collection = GedcomX.Collection()
      .setId('collection')
      .setLang('en-US')
      .addContent({
        resourceType: 'http://gedcomx.org/Record',
        count: 183429102,
        completeness: .8237
      })
      .setTitle('Collection Title')
      .setSize(183429102)
      .setAttribution({ 
        contributor: { resource: 'https://myapp.com/contributor'},
        created: 1111338494969,
        creator: { resource: 'https://myapp.com/creator'},
        modified: 1111338494969
      });
    assert.equal(collection.getId(), 'collection');
    assert.equal(collection.getLang(), 'en-US');
    assert.equal(collection.getContent()[0].getResourceType(), 'http://gedcomx.org/Record');
    assert.equal(collection.getTitle(), 'Collection Title');
    assert.equal(collection.getSize(), 183429102);
    assert(GedcomX.Attribution.isInstance(collection.getAttribution()));
  });
  
  it('toJSON', function(){
    var data = {
      id: 'collection',
      lang: 'en-US',
      content: [{
        resourceType: 'http://gedcomx.org/Record',
        count: 183429102,
        completeness: .8237
      }],
      title: 'Collection Title',
      size: 183429102,
      attribution: { 
        contributor: { resource: 'https://myapp.com/contributor'},
        created: 1111338494969,
        creator: { resource: 'https://myapp.com/creator'},
        modified: 1111338494969
      }
    }, collection = GedcomX.Collection(data);
    assert.deepEqual(collection.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Collection();
    var obj2 = GedcomX.Collection(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});