var assert = require('chai').assert,
    GedcomX = require('../../');

describe('Linkss', function(){
  
  it('Create plain', function(){
    assert.instanceOf(new GedcomX.Links(), GedcomX.Links, 'An instance of Links is not returned when calling the constructor with new.');
    assert.instanceOf(GedcomX.Links(), GedcomX.Links, 'An instance of Links is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var links = GedcomX.Links({
      person: {
        href: '/person'
      }
    });
    assert.equal(links.getLinks().length, 1);
    assert.instanceOf(links.getLink('person'), GedcomX.Link);
    assert.equal(links.getLink('person').getHref(), '/person');
  });
  
  it('Build', function(){
    var links = GedcomX.Links()
      .setLinks([
        new GedcomX.Link()
          .setRel('person')
          .setHref('/person')
      ]);
    assert.equal(links.getLinks().length, 1);
    assert.instanceOf(links.getLink('person'), GedcomX.Link);
    assert.equal(links.getLink('person').getHref(), '/person');
  });
  
  it('toJSON', function(){
    var data = {
      person: {
        href: '/person'
      }
    }, links = GedcomX.Links(data);
    assert.deepEqual(links.toJSON(), data);
  });
  
  it('constructor does not copy instances', function(){
    var obj1 = GedcomX.Links();
    var obj2 = GedcomX.Links(obj1);
    assert.strictEqual(obj1, obj2);
  });
  
});