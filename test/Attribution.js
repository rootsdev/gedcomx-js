var assert = require('chai').assert,
    Attribution = require('../src/Attribution');

describe('Attribution', function(){
  
  it('Create plain', function(){
    var newAttr = new Attribution(),
        attr = Attribution();
    assert.instanceOf(newAttr, Attribution, 'An instance of Attribution is not returned when calling the constructor with new.');
    assert.instanceOf(attr, Attribution, 'An instance of Attribution is not returned when calling the constructor without new.');
  });
  
  it('Create with JSON', function(){
    var attr = Attribution({ 
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
  
});