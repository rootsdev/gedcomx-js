var assert = require('chai').assert,
    GedcomX = require('../../');

describe('ExtensibleData', function(){

  it('Create with JSON', function(){
    var ed = GedcomX.ExtensibleData({ 
      id: 'edid',
      links: {
        person: {
          href: '/person'
        }
      }
    });
    assert.equal(ed.getId(), 'edid', 'ID not saved properly when created with JSON');
    assert.equal(ed.getLinks().length, 1);
    assert.equal(ed.getLinks()[0].getHref(), '/person');
    assert.equal(ed.getLink('person').getHref(), '/person');
  });
  
  it('toJSON()', function(){
    var json = { 
      id: 'edid',
      links: {
        person: {
          href: '/person'
        }
      }
    }, ed = GedcomX.ExtensibleData(json);
    assert.deepEqual(ed.toJSON(), json, 'JSON export is incorrect');
  });
  
});