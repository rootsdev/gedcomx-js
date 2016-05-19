var assert = require('chai').assert,
    GedcomX = require('../');

describe('Attribution', function(){
  
  it('Create plain', function(){
    var newAttr = new GedcomX.Attribution(),
        attr = GedcomX.Attribution();
    assert.instanceOf(newAttr, GedcomX.Attribution, 'An instance of Attribution is not returned when calling the constructor with new.');
    assert.instanceOf(attr, GedcomX.Attribution, 'An instance of Attribution is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var attr = GedcomX.Attribution({ 
      changeMessage: 'It changed',
      contributor: { resource: 'https://myapp.com/contributor'},
      created: 1111338494969,
      creator: { resource: 'https://myapp.com/creator'},
      modified: 1111338494969
    });
    assert.equal(attr.getChangeMessage(), 'It changed', 'Change message not saved properly when created with JSON');
    assert.equal(attr.getContributor().getResource(), 'https://myapp.com/contributor', 'Contributor not saved when created with JSON');
    assert.equal(attr.getCreated().getTime(), 1111338494969, 'Created date not saved when created with JSON');
    assert.equal(attr.getCreator().getResource(), 'https://myapp.com/creator', 'Creator not saved when created with JSON');
    assert.equal(attr.getModified().getTime(), 1111338494969, 'Modified date not saved when created with JSON');
  });
  
  it('Create with mixed data', function(){
    var attr = GedcomX.Attribution({ 
      changeMessage: 'It changed',
      contributor: GedcomX.ResourceReference({ resource: 'https://myapp.com/contributor'}),
      created: new Date(1111338494969),
      creator: GedcomX.ResourceReference({ resource: 'https://myapp.com/creator'}),
      modified: new Date(1111338494969)
    });
    assert.equal(attr.getChangeMessage(), 'It changed', 'Change message not saved properly when created with mixed data');
    assert.equal(attr.getContributor().getResource(), 'https://myapp.com/contributor', 'Contributor not saved when created with mixed data');
    assert.equal(attr.getCreated().getTime(), 1111338494969, 'Created date not saved when created with mixed data');
    assert.equal(attr.getCreator().getResource(), 'https://myapp.com/creator', 'Creator not saved when created with mixed data');
    assert.equal(attr.getModified().getTime(), 1111338494969, 'Modified date not saved when created with mixed data');
  });
  
  it('Build', function(){
    var attr = GedcomX.Attribution()
      .setChangeMessage('It changed')
      .setContributor({ resource: 'https://myapp.com/contributor'})
      .setCreated(1111338494969)
      .setCreator({ resource: 'https://myapp.com/creator'})
      .setModified(1111338494969);
    assert.equal(attr.getChangeMessage(), 'It changed', 'Change message not saved properly when created with mixed data');
    assert.equal(attr.getContributor().getResource(), 'https://myapp.com/contributor', 'Contributor not saved when created with mixed data');
    assert.equal(attr.getCreated().getTime(), 1111338494969, 'Created date not saved when created with mixed data');
    assert.equal(attr.getCreator().getResource(), 'https://myapp.com/creator', 'Creator not saved when created with mixed data');
    assert.equal(attr.getModified().getTime(), 1111338494969, 'Modified date not saved when created with mixed data');
  });
  
  it('toJSON', function(){
    var attrData = { 
        id: 'attr-id',
        changeMessage: 'It changed',
        contributor: { resource: 'https://myapp.com/contributor'},
        created: 1111338494969,
        creator: { resource: 'https://myapp.com/creator'},
        modified: 1111338494969
      },
      attr = GedcomX.Attribution(attrData);
    assert.deepEqual(attr.toJSON(), attrData, 'toJSON export does not equal original data.');
  });
  
});