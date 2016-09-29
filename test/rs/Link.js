var assert = require('chai').assert,
    GedcomX = require('../../');

describe('Link', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.Link(), GedcomX.Link, 'An instance of Link is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.Link(), GedcomX.Link, 'An instance of Link is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var link = GedcomX.Link({
      rel: 'relationship',
      href: '/relationship',
      template: '/relationship/{}',
      type: 'application/x-gedcomx-v1+json',
      accept: 'application/x-gedcomx-v1+json',
      allow: 'GET',
      hreflang: 'en',
      title: 'Relationship'
    });
    assert.equal(link.getRel(), 'relationship');
    assert.equal(link.getHref(), '/relationship');
    assert.equal(link.getTemplate(), '/relationship/{}');
    assert.equal(link.getType(), 'application/x-gedcomx-v1+json');
    assert.equal(link.getAccept(), 'application/x-gedcomx-v1+json');
    assert.equal(link.getAllow(), 'GET');
    assert.equal(link.getHrefLang(), 'en');
    assert.equal(link.getTitle(), 'Relationship');
  });
  
  it('Build', function(){
    var link = GedcomX.Link()
      .setRel('relationship')
      .setHref('/relationship')
      .setTemplate('/relationship/{}')
      .setType('application/x-gedcomx-v1+json')
      .setAccept('application/x-gedcomx-v1+json')
      .setAllow('GET')
      .setHrefLang('en')
      .setTitle('Relationship');
    assert.equal(link.getRel(), 'relationship');
    assert.equal(link.getHref(), '/relationship');
    assert.equal(link.getTemplate(), '/relationship/{}');
    assert.equal(link.getType(), 'application/x-gedcomx-v1+json');
    assert.equal(link.getAccept(), 'application/x-gedcomx-v1+json');
    assert.equal(link.getAllow(), 'GET');
    assert.equal(link.getHrefLang(), 'en');
    assert.equal(link.getTitle(), 'Relationship');
  });
  
  it('toJSON', function(){
    var data = {
      rel: 'relationship',
      href: '/relationship',
      template: '/relationship/{}',
      type: 'application/x-gedcomx-v1+json',
      accept: 'application/x-gedcomx-v1+json',
      allow: 'GET',
      hreflang: 'en',
      title: 'Relationship'
    }, link = GedcomX.Link(data);
    assert.deepEqual(link.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Link();
    var obj2 = GedcomX.Link(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});